import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

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

const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac"
    }
};

const theme = extendTheme({ breakpoints, colors, config });

export default theme;
