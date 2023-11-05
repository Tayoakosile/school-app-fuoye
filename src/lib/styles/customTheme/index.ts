import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const colors = {
    brand: {
        50: "#edcced",
        100: "#edcced",
        200: "#da99da",
        300: "#c866c8",
        400: "#b533b5",
        500: "#a300a3",
        600: "#820082",
        700: "#620062",
        800: "#410041",
        900: "#210021",
    },
    secondary: {
        50: "#ffffce",
        100: "#ffffce",
        200: "#ffff9d",
        300: "#ffff6c",
        400: "#ffff3b",
        500: "#ffff0a",
        600: "#cccc08",
        700: "#999906",
        800: "#666604",
        900: "#333302",
    },
    ac_black: {
        50: "#d0d0d0",
        100: "#d0d0d0",
        200: "#a1a1a1",
        300: "#727272",
        400: "#434343",
        500: "#141414",
        600: "#101010",
        700: "#0c0c0c",
        800: "#080808",
        900: "#040404",
    },
};
const fonts = {
    heading: "'Inter Variable', sans-serif",

    body: "'Open Sans Variable', sans-serif",
};
const breakpoints = {
    base: "0em", // 0px
    xs: "375px", // 0px
    sm: "450px", // ~480px. em is a relative unit and is dependant on the font size.
    md: "720px", // ~768px
    lg: "900px", // ~992px
    xl: "1024px", // ~1280px
    "2xl": "1280px", // ~1536px
    "3xl": "1400px", // ~1536px
    "4xl": "1600px", // ~1536px
    "5xl": "2000px", // ~1536px
    "6xl": "2500px", // ~1536px
  };


const theme = extendTheme({
    colors,
    fonts,
    breakpoints
},withDefaultColorScheme({colorScheme:'brand'}));

export default theme;






