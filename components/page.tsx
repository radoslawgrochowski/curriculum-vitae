/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import Box, { BoxProps } from "./box";
import css from "@styled-system/css";

const Page = ({ ...boxProps }: BoxProps) => (
  <Box
    p="0.4in 0.6in"
    bg="white"
    boxShadow="0 .125rem .25rem rgba(0, 0, 0, .075)"
    borderRadius="4px"
    display="flex"
    width="calc(21cm - 5px)"
    height="calc(29.7cm - 5px)"
    css={css({
      m: "40px",
      "@media print": {
        boxShadow: "none",
        borderRadius: 0,
        m: 0,
        border: "1px solid #ffffff",
      },
    })}
    {...boxProps}
  />
);

export default Page;
