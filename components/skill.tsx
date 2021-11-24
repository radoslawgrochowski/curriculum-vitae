/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import Box, { BoxProps } from "./box";

const Skill = ({ href, ...boxProps }: { href?: string } & BoxProps) => (
  <Box
    as="a"
    border="1px solid black"
    borderRadius="4px"
    p="1px 5px"
    m="2px"
    fontSize="0.8rem"
    href={href}
    target="_blank"
    color="black"
    css={{ textDecoration: "none" }}
    {...boxProps}
  />
);

export const SkillGroup = ({
  category,
  children,
  ...boxProps
}: BoxProps & { category?: string }) => (
  <Box {...boxProps}>
    <Box
      fontSize="0.9375rem"
      css={{
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      {category}
    </Box>
    <Box display="flex" flexWrap="wrap" ml="4px" m="-2px" mb="4px">
      {children}
    </Box>
  </Box>
);

export default Skill;
