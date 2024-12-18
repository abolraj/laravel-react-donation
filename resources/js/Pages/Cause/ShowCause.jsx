import Cause from "@/Components/Cause";
import Donate from "@/Components/Donate";
import UserItem from "@/Components/UserItem";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link } from "@inertiajs/react";

export default function ShowCause({
    cause, comments, donations, dreamer, ...props
}) {

    return (
        <AuthenticatedLayout>
            <Head title={cause.name + " - Cause"} />
            <section className="cause-container flex flex-col gap-3 p-2 w-96 mx-auto max-w-full ">
                <Cause cause={cause}
                    className="w-full">
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
        </AuthenticatedLayout>
    )
}