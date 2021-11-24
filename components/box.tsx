import React, { HTMLProps } from "react";

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

import styled from "@emotion/styled";

export type BoxProps = Omit<HTMLProps<any>, "as"> &
  SpaceProps &
  LayoutProps &
  ColorProps &
  TypographyProps &
  FlexboxProps &
  BoxShadowProps &
  BorderProps &
  BackgroundProps & { children?: React.ReactNode };

const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${space}
  ${layout}
  ${color}
  ${boxShadow}
  ${border}
  ${typography}
  ${flexbox}
  ${background}
`;

export default Box;
