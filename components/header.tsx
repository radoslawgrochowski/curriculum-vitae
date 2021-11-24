/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import Box, { BoxProps } from "./box";

const Header = ({ ...boxProps }: BoxProps) => (
  <Box
    display="flex"
    flexDirection="column"
    alignItems="center"
    css={{
      textTransform: "uppercase",
      letterSpacing: "2px",
    }}
    {...boxProps}
  />
);

export default Header;
