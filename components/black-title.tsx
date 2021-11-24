/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import Box, { BoxProps } from "./box";

const BlackTitle = ({ ...boxProps }: BoxProps) => (
  <Box
    as="h3"
    background="black"
    color="white"
    p="2px 4px"
    m="0"
    css={{
      textTransform: "uppercase",
      letterSpacing: "2px",
    }}
    {...boxProps}
  />
);

export default BlackTitle;
