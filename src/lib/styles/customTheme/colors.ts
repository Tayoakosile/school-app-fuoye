import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    50: "#d7e2ff",
    100: "#d7e2ff",
    200: "#aec5fe",
    300: "#86a8fe",
    400: "#5d8bfd",
    500: "#356efd",
    600: "#2a58ca",
    700: "#204298",
    800: "#152c65",
    900: "#0b1633",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;
