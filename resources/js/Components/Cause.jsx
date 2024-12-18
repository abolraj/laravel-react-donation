import Help from '@/Icons/Help';
import Tik from '@/Icons/Tik';
import { Link } from '@inertiajs/react';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

export default forwardRef(function Cause(
    { cause, className = '', ...props },
    ref,
) {


    const [isOpen, setIsOpen] = useState(null);
    const localRef = useRef(null);

    useEffect(() => {
        setIsOpen(cause.received_amount >= cause.goal_amount);
    }, [cause.received_amount, cause.goal_amount]);

    return (
        <section
            {...props}
            className={
                'cause-item rounded-lg border-2 border-blue-700 shadow-sm focus:border-indigo-500 dark:border-blue-700 dark:bg-gray-900 dark:text-gray-300 p-2 ' +
                className
            }
            ref={localRef}
        >
            <Link
                href={route('causes.show', cause.id)}
            >

                <div className="flex flex-wrap justify-between gap-2">
                    <h3 className="text-blue-700 p-2 py-1 grow">
                        {cause.name}
                    </h3>
                    {
                        isOpen
                            ? (
                                <h3 className="badge open flex gap-1 items-center text-pink-700 bg-pink-400 bg-opacity-15 p-2 py-1 rounded-md">
                                    Closed
                                    <Tik />
                                </h3>
                            )

                            : (
                                <h3 className="badge open flex gap-1 items-center text-green-700 bg-green-400 bg-opacity-15 p-2 py-1 rounded-md">
                                    Open
                                    <Help />
                                </h3>
                            )
                    }
                    <h3 className="flex relative justify-between text-green-700 bg-green-400 bg-opacity-15 p-2 py-1 rounded-md w-full">
                        <div className="range absolute rounded-md h-full left-0 top-0 bg-green-400 bg-opacity-25" style={{ width: Math.min(parseInt((cause.received_amount / cause.goal_amount) * 100), 100) + "%" }}>

                        </div>
                        <span>
                            {cause.received_amount} $
                        </span>
                        /
                        <span>
                            {cause.goal_amount} $
                        </span>
                    </h3>
                </div>
            </Link>
            <div className="cause.description bg-gray-900 text-gray-400 border-t-2 border-t-blue-500 mt-2 p-2">
                "{cause.description}"
            </div>

            {props.children}
        </section>
    );
});
