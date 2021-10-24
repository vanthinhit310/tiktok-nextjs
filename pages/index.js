import React, { PureComponent } from "react";
import Head from "next/head";
import DefaultLayout from "../components/layouts/DefaultLayout";
import Sidebar from "../components/home/Sidebar";
import { Stack, Flex, Box } from "@chakra-ui/react";

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
                <div className="page-content home-wrapper h100">
                    <Stack className="h100" direction={{ base: "column", lg: "row" }} spacing="24px">
                        <Box w="100%" flex={{ base: "1", lg: "0 324px" }} overflow="hidden">
                            <Sidebar />
                        </Box>

                        <Box w="100%" flex="1" overflow="hidden"></Box>
                    </Stack>
                </div>
            </DefaultLayout>
        );
    }
}

export default Home;
