import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../theme/index";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme} portalZIndex={10}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
