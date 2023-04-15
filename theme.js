import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
    styles: {
        global: {
            body: {
                background: 'black'
            },
            "::-webkit-scrollbar": {
                width: "6px",
                height: "6px",
            },
            "::-webkit-scrollbar-track": {
                bg: "transparent",
            },
            "::-webkit-scrollbar-thumb": {
                bg: "whiteAlpha.500",
                borderRadius: "full",
            },
            "::-webkit-scrollbar-thumb:hover": {
                bg: "gray.600",
            },
        },
    },
    colors: {
        black : {
            500: "rgba(0, 0, 0, 0.36)",
            800: "rgba(0, 0, 0, 0.80)",
        },
    },

    breakpoints: {
        sm: "10em",
        md: "30em",
        lg: "48em",
        xl: "62em",
        "2xl" : "80em",
        "3xl": "118em", // add your custom breakpoint here
    },
})
