import User from '@/Icons/User';
import { useForm } from '@inertiajs/react';
import { forwardRef, useRef, useState } from 'react';
import InputLabel from './InputLabel';
import TextInput from './TextInput';
import InputError from './InputError';
import PrimaryButton from './PrimaryButton';

export default forwardRef(function Donate(
    { cause, className = '', ...props },
    ref,
) {
    const localRef = useRef(null);
    const { data, setData, post, processing, errors, reset } = useForm({
        amount: 0,
    });

    const submit = (e) => {
        e.preventDefault();
        console.log(route("causes.donations.store", {cause:cause.id}))

        post(route("causes.donations.store", {cause:cause.id}), {
            onFinish: () => reset('amount'),
        });
    };


    return (
        <section
            {...props}
            className={
                'donation-form rounded-md border-2 border-blue-700 shadow-sm focus:border-indigo-500 dark:border-blue-700 dark:bg-gray-900 dark:text-gray-300' +
                className
            }
            ref={localRef}
        >
            <form onSubmit={submit} className="flex flex-col gap-2 p-2 items-stretch justify-start ">
                <div className="">
                    <InputLabel htmlFor="amount" value="Need your help !" className="!text-blue-500"/>

                    <TextInput
                        id="amount"
                        type="text"
                        name="amount"
                        placeholder="Give your help e.g. 10$"
                        value={data.amount}
                        className="mt-1 block w-full"
                        autoComplete="current-amount"
                        onChange={(e) => setData('amount', e.target.value)}
                    />

                    <InputError message={errors.amount} className="mt-2" />
                </div>

                <PrimaryButton className="" disabled={processing}>
                    Donate It !
                </PrimaryButton>
            </form>
        </section>
    );
});
