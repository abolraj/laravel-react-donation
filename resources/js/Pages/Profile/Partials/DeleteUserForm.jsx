import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm, usePage } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const lang = usePage().props.lang

    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {lang.messages.auth.delete_acc}
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {lang.messages.auth.delete_desc}
                </p>
            </header>

            <DangerButton onClick={confirmUserDeletion}>
            {lang.messages.auth.delete_acc}
            </DangerButton>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {lang.messages.auth.sure_delete}
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    {lang.messages.auth.delete_desc}
                    </p>

                    <div className="mt-6">
                        <InputLabel
                            htmlFor="password"
                            value={lang.messages.auth.pass}
                            className="sr-only"
                        />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData('password', e.target.value)
                            }
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                        {lang.messages.button.cancel}
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            {lang.messages.auth.delete_desc}
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
