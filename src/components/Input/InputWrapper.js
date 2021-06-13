import React from "react";
import styled, { css } from "styled-components";

export const InputWrapper = styled(({ focus, ...props }) => <div {...props} />)`
  border-radius: var(--aiwizo-application-border-radius-primary);
  display: flex;
  align-items: center;
  padding: var(--aiwizo-application-spacing-mini)
    var(--aiwizo-application-spacing-small);
  border: 1px solid var(--aiwizo-application-primary-border-grey);
  ${(props) =>
    props.focus &&
    css`
      border-color: var(--aiwizo-application-primary-border-blue);
    `}
`;
