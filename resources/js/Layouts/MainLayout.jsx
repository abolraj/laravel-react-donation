import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Main from '@/Components/Main';
import Sidebar from '@/Components/Sidebar';
import IndexCause from '@/Pages/Cause/IndexCause';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function MainLayout({ children, sidebar = null, ...props }) {
    const auth = usePage().props.auth;
    const lang = usePage().props.lang;
    return (
        <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 background-pattern">
            <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <Header auth={auth} />

                    {sidebar !== false &&
                        <Sidebar>
                            {sidebar}
                        </Sidebar>
                    }
                    <Main>
                        {children}
                    </Main>

                    <Footer />
                </div>
            </div>
        </div>
    );
}
