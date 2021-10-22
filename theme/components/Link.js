const Link = {
    // style object for base or default style
    baseStyle: {
        _hover: {
            textDecoration: "none"
        }
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        "pink-link": {
            color: "#fe2c55",
            fontWeight: 500
        },
        "main-sidebar": props => ({
            padding: "12px",
            display: "flex",
            borderRadius: "4px",
            _hover: {
                background: props.colorMode === "dark" ? "#2D3748" : "rgba(22, 24, 35, 0.03)"
            }
        }),
        "footer-menu": {
            fontSize: "10px"
        }
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: "",
        variant: ""
    }
};

export default Link;
