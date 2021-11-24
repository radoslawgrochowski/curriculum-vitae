/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import Box, { BoxProps } from "./box";

const Social = ({ ...boxProps }: BoxProps) => (
  <Box
    flex={1}
    p="4px"
    display="flex"
    alignItems="center"
    justifyContent="center"
    as="a"
    minWidth="200px"
    target="_blank"
    fontSize="0.9375rem"
    css={{
      textDecoration: "none",
      cursor: "pointer",
      ":hover": {
        textDecoration: "underline",
      },
    }}
    color="initial"
    {...boxProps}
  />
);

export const SocialIcon = ({
  icon: Icon,
  ...boxProps
}: BoxProps & { icon: React.FC }) => (
  <Box as={Icon} height="16px" width="16px" mr="4px" {...boxProps} />
);

export default Social;
