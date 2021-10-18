import "../styles/app.scss";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../utils/theme";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme} portalZIndex={10}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
