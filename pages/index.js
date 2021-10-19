import React, { PureComponent } from "react";
import Head from "next/head";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Sidebar from "../components/home/Sidebar";

class Home extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1
        };
    }
    render() {
        return (
            <DefaultLayout>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Tiktok - NextJS</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <div className="page-content home-wrapper">
                    <div className="content-left">
                        <Sidebar />
                    </div>
                </div>
            </DefaultLayout>
        );
    }
}

export default Home;
