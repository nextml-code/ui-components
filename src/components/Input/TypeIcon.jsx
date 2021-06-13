import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const TypeIcon = styled(({ focus, ...props }) => (
  <FontAwesomeIcon {...props} />
))`
  font-size: var(--aiwizo-application-font-size-small);
  margin-right: var(--aiwizo-application-spacing-mini);
  color: var(--aiwizo-application-faded-text-grey);
  ${(props) =>
    props.focus &&
    css`
      color: var(--aiwizo-application-blue);
    `}
`;
