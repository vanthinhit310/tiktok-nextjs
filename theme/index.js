import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Button from "./components/Button";
import Input from "./components/Input";
import Menu from "./components/Menu";
import Link from "./components/Link";

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

const fontWeights = {
    normal: 400,
    medium: 600,
    bold: 700
};

const Container = {
    baseStyle: {
        maxW: "1100px"
    }
};

const fontSizes = {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem"
};

const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac"
    }
};

const theme = extendTheme({
    styles: {
        global: {
            "html, body": {
                fontSize: "md"
            }
        }
    },
    fonts: {
        body: "Montserrat, sans-serif",
        heading: "Montserrat, sans-serif",
        mono: "Montserrat, sans-serif"
    },
    breakpoints,
    colors,
    fontSizes,
    fontWeights,
    config,
    components: {
        Container,
        Button,
        Input,
        Menu,
        Link
    }
});

export default theme;
