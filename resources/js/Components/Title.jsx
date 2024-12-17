import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, [isFocused]);

    return (
        <h3
            {...props}
            className={
                'text-gray-900 bg-gray-300 dark:bg-gray-900 dark:text-gray-300 text-lg ' +
                className
            }
            ref={localRef}
        >
            {props.children}
        </h3>
    );
});
