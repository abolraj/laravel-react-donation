import Cause from "@/Components/Cause";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function IndexCause({
    causes, ...props
}) {

    return (
        <AuthenticatedLayout>
            <Head title="Look Causes"/>
            <section className="causes-container flex flex-col gap-3 p-2 w-96 mx-auto max-w-full">
                {causes.map((cause, i) => 
                    <Cause key={i} cause={cause}
                        className="w-full"/>
                )}
            </section>
        </AuthenticatedLayout>
    )
}