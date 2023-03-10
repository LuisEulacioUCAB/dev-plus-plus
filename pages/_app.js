import '../public/css/bootstrap.min.css';
import '../public/css/animate.min.css';
import '../public/css/boxicons.min.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import '../public/css/style.css';
import '../public/css/responsive.css';

import App from 'next/app';
import Layout from '../components/_App/Layout';

export default class MyApp extends App {
    render () {
        const { Component, pageProps } = this.props

        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}