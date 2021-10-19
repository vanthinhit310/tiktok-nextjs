import theme from "../theme/index";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import "../styles/app.scss";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme} resetCSS={true} portalZIndex={10}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
