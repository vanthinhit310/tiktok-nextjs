const Button = {
    baseStyle: {
        fontWeight: 600,
        _focus: {
            boxShadow: "none"
        }
    },
    sizes: {
        md: {
            fontSize: "0.875rem",
            px: "20px"
        },
        sm: {
            fontSize: "0.75rem",
            px: "10px"
        }
    },
    variants: {
        "pink-button": {
            bg: "#fe2c55",
            boxShadow: "none",
            outline: "none",
            color: "#fff",
            _hover: {
                bg: "linear-gradient(0deg,rgba(0,0,0,0.06),rgba(0,0,0,0.06)),#fe2c55"
            }
        },
        "white-button": {
            bg: "transparent",
            boxShadow: "none",
            outline: "none",
            color: "#161823"
        },
        solid: props => ({
            bg: props.colorMode === "dark" ? "#fe2c55" : "#fe2c55",
            color: "#fff"
        })
    }
};
export default Button;
