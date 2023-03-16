import React from 'react';
import Head from "next/head";
import { useRouter } from 'next/router';
import Navbar from '../Layout/Navbar';
import NavbarTwo from '../Layout/NavbarTwo';
import Footer from '../Layout/Footer';
import GoTop from '../Shared/GoTop';

const Layout = ({ children }) => {
    const router = useRouter();
    return(
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <title>Dev Plus Plus</title>
                <meta name="description" content="Leveling up developer" />
                <meta name="og:title" property="og:title" content="Dev Plus Plus"/>
                <meta name="twitter:card" content="Leveling up Developers"/>
                <link rel="canonical" href="https://hearme-react.envytheme.com/"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png"/>

            </Head>

            {
                router.pathname === '/youtube' ? <NavbarTwo />
                : router.pathname === '/instagram-single-blog' ? null
                : router.pathname === '/youtube-single-blog' ? null
                : <Navbar />
            }

            {children}

            <Footer />

            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;
