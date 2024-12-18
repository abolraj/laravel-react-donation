import User from '@/Icons/User';
import { forwardRef, useRef, useState } from 'react';

export default forwardRef(function UserItem(
    { user, className = '', ...props },
    ref,
) {

    const localRef = useRef(null);

    return (
        <section
            {...props}
            className={
                'cause-item h-20 rounded-md border-2 border-blue-700 shadow-sm focus:border-indigo-500 dark:border-blue-700 dark:bg-gray-900 dark:text-gray-300 p-2 flex flex-wrap items-center gap-2 ' +
                className
            }
            ref={localRef}
        >
            <div className="justify-between gap-2 h-full aspect-square text-blue-700">
                <User />
            </div>
            <div className="cause.description bg-gray-900 text-blue-500">
                <span className="text-lg font-bold">
                    {user.name}
                </span>
                <br />
                {user.email}
            </div>
        </section>
    );
});
