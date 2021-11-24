/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import Box, { BoxProps } from "./box";

const Footer = ({ ...boxProps }: BoxProps) => (
  <Box display="flex" justifyContent="center" {...boxProps}>
    <Box fontSize="0.5rem" width="545px" textAlign="justify" lineHeight="1">
      I hereby give consent for&nbsp;my&nbsp;personal data included
      in&nbsp;my&nbsp;application to&nbsp; be&nbsp;processed
      for&nbsp;the&nbsp;purposes of&nbsp;the&nbsp;recruitment process under
      the&nbsp;Regulation&nbsp;(EU)&nbsp;2016/679 of&nbsp;the&nbsp;European
      Parliament and&nbsp;of&nbsp;the&nbsp;Council
      of&nbsp;27&nbsp;April&nbsp;2016 on the&nbsp;protection of&nbsp;natural
      persons with regard to&nbsp;the&nbsp;processing of personal data and
      on&nbsp;the&nbsp;free movement of&nbsp;such data, and&nbsp;repealing
      Directive&nbsp;95/46/EC&nbsp;(General&nbsp;Data
      Protection&nbsp;Regulation).
    </Box>
  </Box>
);

export default Footer;
