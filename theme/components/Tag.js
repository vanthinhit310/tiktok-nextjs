const Tag = {
    // style object for base or default style
    baseStyle: {},
    // styles for different sizes ("sm", "md", "lg")
    sizes: {},
    // styles for different visual variants ("outline", "solid")
    variants: {
        pills: props => ({
            container: {
                fontSize: "lg",
                bg: props.colorMode === "dark" ? "#2D3748" : "#fff",
                borderRadius: "12px",
                border: "solid 1px #000",
                borderColor: props.colorMode === "dark" ? "#2D3748" : "rgba(22, 24, 35, 0.12)"
            }
        })
    },
    // default values for `size` and `variant`
    defaultProps: {}
};

export default Tag;
