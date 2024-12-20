import Cause from "@/Components/Cause";
import Donate from "@/Components/Donate";
import PrimaryButton from "@/Components/PrimaryButton";
import UserItem from "@/Components/UserItem";
import Delete from "@/Icons/Delete";
import Edit from "@/Icons/Edit";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, Link } from "@inertiajs/react";

export default function ShowCause({
    cause, comments, donations, dreamer, can, ...props
}) {

    return (
        <MainLayout sidebar={"Dream | Any one has his dream"}>
            <Head title={cause.name + " - Cause"} />
            <section className="cause-container flex flex-col gap-3 p-2 w-96 mx-auto max-w-full ">
                <Cause cause={cause}
                    className="w-full">
                    {can.cause_update &&
                        <Link href={route('causes.edit', cause.id)}>
                            <PrimaryButton className="!bg-yellow-600 mt-2 w-full flex justify-between items-center pr-2" disabled={false}>
                                Edit
                                <Edit />
                            </PrimaryButton>
                        </Link>
                    }
                    <br />
                    {can.cause_delete &&
                        <Link href={route('causes.destroy', cause.id)} method="delete" data={{}}>
                            <PrimaryButton className="!bg-red-600 mt-2 w-full flex justify-between items-center pr-2" disabled={false}>
                                Delete
                                <Delete />
                            </PrimaryButton>
                        </Link>
                    }

                    <hr className="w-full border-2 border-blue-500 my-2 mt-5" />
                    <section className="cause-info p-2">
                        <section className="dreamer">
                            <h3 className="text-blue-500 px-2 py-1 border-b-2 mb-2 border-b-blue-500">Dreamer</h3>
                            <UserItem user={dreamer} />
                        </section>
                        <section className="donations flex flex-col gap-2">
                            <h3 className="text-blue-500 px-2 py-1 border-b-2 mb-2 border-b-blue-500">Donations</h3>
                            {cause.received_amount <= cause.goal_amount &&
                                <Donate cause={cause} />
                            }
                            {donations.map((donation, i) =>
                                <UserItem key={i} user={donation.donor}>
                                    <div className="flex justify-between text-green-700 bg-green-400 bg-opacity-15 p-2 py-1 rounded-md w-full">
                                        + {donation.amount} $
                                    </div>
                                </UserItem>
                            )}
                        </section>
                    </section>
                </Cause>
            </section>
        </MainLayout>
    )
}