const Input = {
    // Styles for the base style
    baseStyle: {
        field: {}
    },
    // Styles for the size variations
    sizes: {
        lg: {
            field: {
                fontSize: "1rem",
                px: 4,
                h: 12,
                borderRadius: "md"
            }
        },
        md: {
            field: {
                fontSize: "0.875rem",
                px: 4,
                h: 10,
                borderRadius: "md"
            }
        },

        sm: {
            field: {
                fontSize: "0.75rem",
                px: 3,
                h: 8,
                borderRadius: "sm"
            }
        }
    },
    // Styles for the visual style variations
    variants: {
        "no-border": {
            field: {
                boxShadow: "none"
            }
        }
    },
    // The default `size` or `variant` values
    defaultProps: {
        size: "md"
    }
};

export default Input;
