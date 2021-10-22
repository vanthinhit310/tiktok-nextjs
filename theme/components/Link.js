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
        }
    },
    // default values for `size` and `variant`
    defaultProps: {
        size: "",
        variant: ""
    }
};

export default Link;
