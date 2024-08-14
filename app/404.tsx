'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        if (router.asPath === '/') {
            router.replace('/home/projects');
        }
    }, []);

    return <h1>Page Not Found</h1>;
}
