import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Textarea from '@/Components/Textarea';
import TextInput from '@/Components/TextInput';
import Title from '@/Components/Title';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm, usePage } from '@inertiajs/react';

export default function EditCause({ status, canResetPassword, cause }) {
    const lang = usePage().props.lang;
    const { data, setData, put, processing, errors, reset } = useForm({
        name: cause.name,
        description: cause.description,
        goal_amount: cause.goal_amount,
    });

    const submit = (e) => {
        e.preventDefault();

        put(route('causes.update', cause.id), {
            // onFinish: () => reset([]),
        });
    };

    return (
        <MainLayout sidebar={lang.messages.aside.dream_update}>
            <Head title={lang.messages.aside.dream_update} />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} class="container w-96 max-w-full mx-auto p-2 mt-4">
                <Title className="border-b-2 border-blue-500 mx-auto w-full text-center">
                    {lang.messages.cause.title_update}
                </Title>

                <div className="mt-4">
                    <InputLabel htmlFor="name" value={lang.messages.cause.name} />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        placeholder={lang.messages.cause.alt_name}
                        className="mt-1 block w-full"
                        autoComplete="title"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="description" value={lang.messages.cause.description} />

                    <Textarea
                        id="description"
                        type="description"
                        name="description"
                        placeholder={lang.messages.cause.alt_description}
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="current-description"
                        rows="5"
                        onChange={(e) => setData('description', e.target.value)}
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="goal_amount" value={lang.messages.cause.goal_amount} />

                    <TextInput
                        id="goal_amount"
                        type="number"
                        name="goal_amount"
                        value={data.goal_amount}
                        placeholder={lang.messages.cause.alt_goal_amount}
                        className="mt-1 block w-full"
                        autoComplete="number"
                        isFocused={true}
                        onChange={(e) => setData('goal_amount', e.target.value)}
                    />

                    <InputError message={errors.goal_amount} classgoal_amount="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="w-full" disabled={processing}>
                        {lang.messages.button.update}
                    </PrimaryButton>
                </div>
            </form>
        </MainLayout>
    );
}
