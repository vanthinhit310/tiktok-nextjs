const Button = {
    baseStyle: {
        fontWeight: 600,
        _focus: {
            boxShadow: "none"
        }
    },
    sizes: {
        lg: {
            fontSize: "1rem",
            px: "20px"
        },
        md: {
            fontSize: "0.875rem",
            px: "15px"
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
        "pink-outline": {
            bg: "#fff",
            boxShadow: "none",
            outline: "none",
            border: "solid 2px #fe2c55",
            color: "#fe2c55"
        },
        solid: props => ({
            bg: props.colorMode === "dark" ? "#fe2c55" : "#fe2c55",
            color: "#fff"
        })
    },
    defaultProps: {
        size: "md"
    }
};
export default Button;
