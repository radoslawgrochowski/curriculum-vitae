/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import Box, { BoxProps } from "./box";

const Job = ({ ...boxProps }: BoxProps) => <Box mb="12px" {...boxProps} />;

export const JobHeader = ({ ...boxProps }: BoxProps) => (
  <Box alignItems="end" width="100%" lineHeight="1.2" {...boxProps} />
);

export const JobCompany = ({ ...boxProps }: BoxProps) => (
  <Box
    fontWeight="500"
    mr="4px"
    display="inline"
    css={css`
      text-transform: uppercase;
      > {
        span + span {
          margin-left: 4px;
        }

        ::first-letter {
          font-size: 1.1rem;
        }
      }
    `}
    {...boxProps}
  />
);
export const JobTitle = ({ ...boxProps }: BoxProps) => (
  <Box as="span" {...boxProps} />
);

export const JobSecondary = ({ ...boxProps }: BoxProps) => (
  <Box fontSize="0.875rem" color="#616161" minWidth="100%" {...boxProps} />
);

export const JobDescription = ({ ...boxProps }: BoxProps) => (
  <Box fontSize="0.85rem" css={{ b: { fontWeight: 500 } }} {...boxProps} />
);

export default Job;
