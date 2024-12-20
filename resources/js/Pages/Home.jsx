import { Head, Link } from '@inertiajs/react';
import IndexCause from './Cause/IndexCause';
import Header from '@/Components/Header';
import Sidebar from '@/Components/Sidebar';
import Main from '@/Components/Main';
import Footer from '@/Components/Footer';
import MainLayout from '@/Layouts/MainLayout';

export default function Welcome({ auth, laravelVersion, phpVersion, causes }) {
    return (
        <MainLayout sidebar={null}>
            <Head title="Welcome" />
            <IndexCause causes={causes} has_layout={false}/>
        </MainLayout>
    );
}