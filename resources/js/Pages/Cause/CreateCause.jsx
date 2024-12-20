import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Textarea from '@/Components/Textarea';
import TextInput from '@/Components/TextInput';
import Title from '@/Components/Title';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function CreateCause({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        description: '',
        goal_amount: 0,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('causes.store'), {
            // onFinish: () => reset([]),
        });
    };

    return (
        <MainLayout sidebar={"Dream | Request your dream !"}>
            <Head title="Create Cause" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit} class="container w-96 max-w-full mx-auto p-2 mt-4">
                <Title className="border-b-2 border-blue-500 mx-auto w-full text-center">
                    Create Your Dream !
                </Title>

                <div className="mt-4">
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        placeholder="Name it camp !"
                        className="mt-1 block w-full"
                        autoComplete="title"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="description" value="Description" />

                    <Textarea
                        id="description"
                        type="description"
                        name="description"
                        placeholder="Describe your cause campaign..."
                        value={data.description}
                        className="mt-1 block w-full"
                        autoComplete="current-description"
                        rows="5"
                        onChange={(e) => setData('description', e.target.value)}
                    />

                    <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="goal_amount" value="Goal Amount" />

                    <TextInput
                        id="goal_amount"
                        type="number"
                        name="goal_amount"
                        value={data.goal_amount}
                        placeholder="Give your needed amount"
                        className="mt-1 block w-full"
                        autoComplete="number"
                        isFocused={true}
                        onChange={(e) => setData('goal_amount', e.target.value)}
                    />

                    <InputError message={errors.goal_amount} classgoal_amount="mt-2" />
                </div>

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="w-full" disabled={processing}>
                        Create It !
                    </PrimaryButton>
                </div>
            </form>
        </MainLayout>
    );
}
