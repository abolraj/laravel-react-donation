import { Link, usePage } from "@inertiajs/react";

export default function Footer({
    className, ...props
}) {
    const lang = usePage().props.lang

    return (
        <footer className={"py-16 text-center text-sm text-black dark:text-white/70 " + className}>
            Laravel + ReactJs
            <br />
            {/* Designed & developed by ❤️  */}
            {lang.messages.footer.developed}
            <a href="https://abol-web.iran.liara.run/cv" target="_blank">
                <span class="text-blue-500">Abolfazl Rajaee nasab</span>
            </a>
        </footer>
    )
}