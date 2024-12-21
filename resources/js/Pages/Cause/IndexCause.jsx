import Cause from "@/Components/Cause";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import GuestLayout from "@/Layouts/GuestLayout";
import MainLayout from "@/Layouts/MainLayout";
import { Head, usePage } from "@inertiajs/react";
import { Fragment } from "react";

export default function IndexCause({
    causes, has_layout = true, ...props
}) {
    const lang = usePage().props.lang;
    const Layout = has_layout ? MainLayout : Fragment
    return (
        <Layout sidebar={lang.messages.aside.dreams}>
            <Head title="Look Causes"/>
            <section className="causes-container flex flex-col gap-3 p-2 w-96 mx-auto max-w-full">
                {causes.map((cause, i) => 
                    <Cause key={i} cause={cause}
                        className="w-full"/>
                )}
            </section>
        </Layout>
    )
}