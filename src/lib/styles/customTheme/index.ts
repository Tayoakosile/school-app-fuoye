import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import colors from "./colors";
import Button from "./components/button";
import fonts from "./fonts";

const customTheme = extendTheme(
  {
    fonts,
    colors,
    components: {
      Button,
    },
  },
  withDefaultColorScheme({ colorScheme: "brand" })
);

export default customTheme;
