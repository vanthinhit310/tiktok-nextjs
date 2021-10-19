import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Button from "./components/Button";
import Input from "./components/Input";

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px"
});

const config = {
    initialColorMode: "light",
    useSystemColorMode: false
};

const Container = {
    baseStyle: {
        maxW: "1100px"
    }
};

const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac"
    }
};

const theme = extendTheme({
    breakpoints,
    colors,
    config,
    components: {
        Container,
        Button,
        Input
    },
    fonts: {
        body: "Montserrat, sans-serif",
        heading: "Montserrat, sans-serif",
        mono: "Montserrat, sans-serif"
    }
});

export default theme;
