import Help from "@/Icons/Help";
import { Link, usePage } from "@inertiajs/react";

export default function Header({
    auth, className, ...props
}) {
    const donations_amount = usePage().props.donations_amount
    const lang = usePage().props.lang
    return (
        <header className={"header grid grid-cols-2 sm:grid-cols-3 items-center gap-2 pt-5 lg:grid-cols-3 " + className}>
            <div>
                <Link href={route('home')}>
                    <h2 className="title text-3xl text-[#FF2D20] flex flex-wrap gap-2 items-center">
                        {/* Donations Network */}
                        {lang.messages.app}
                        <span className="p-1 px-2 bg-[#FF2D20] rounded-md text-gray-900">
                            {/* {donations_amount} $ */}
                            {donations_amount} {lang.messages.currency}
                        </span>
                    </h2>
                </Link>
                <nav className="nav flex flex-wrap gap-2 text-xl [&>*]:border-b-2 [&>*]:border-b-[#2054ff] [&>*:hover]:border-b-[#2054ffaf] text-[#FF2D20]">
                    <Link href={route('causes.index')}>
                        <h3>
                            {/* Dreams */}
                            {lang.messages.dreams.dreams}
                        </h3>
                    </Link>
                    <Link href={route('causes.create')}>
                        <h3>
                            {/* Request a Dream */}
                            {lang.messages.dreams.request}
                        </h3>
                    </Link>
                </nav>
            </div>
            <div className="flex lg:col-start-2 justify-end lg:justify-center">
                <Help className="!size-36 w-auto lg:h-16 text-[#FF2D20] hover:rotate-6" />
            </div>
            <nav className="col-span-2 sm:col-span-1 flex flex-1 justify-end">
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                    >
                        {/* Dashboard */}
                        {lang.messages.auth.dashboard}
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            {/* Log in */}
                            {lang.messages.auth.login}
                        </Link>
                        <Link
                            href={route('register')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            {/* Register */}
                            {lang.messages.auth.register}
                        </Link>
                    </>
                )}
            </nav>
        </header>
    )
}