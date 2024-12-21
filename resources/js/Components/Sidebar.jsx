import { usePage } from "@inertiajs/react";

export default function Sidebar({
    className, ...props
}) {
    const lang = usePage().props.lang;
    return (
        <aside className={"text-[#FF2D20] text-lg text-center " + className}>
            {
                props.children ||
                <h3 className="whitespace-pre-wrap">
                    {
                        lang.messages.aside.main
                    }
                </h3>
            }
        </aside>
    )
}