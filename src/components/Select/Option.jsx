import React from "react";
import PropTypes from "prop-types";
import defer from "@codewell/defer";
import styled from "styled-components";

const OptionWrapper = styled.div`
  border-top: 1px solid var(--aiwizo-application-primary-border-grey);
  font-size: var(--aiwizo-application-font-size-regular);
  font-family: var(--aiwizo-application-default-font);
  padding: var(--aiwizo-application-spacing-small);
  :hover {
    background-color: var(--aiwizo-application-light-background-blue);
  }
  :first-child {
    border-top: none;
  }
`;

export const Option = (props) => (
  <OptionWrapper onClick={defer(props.onClick, props)}>
    {props.renderAs(props)}
  </OptionWrapper>
);

Option.propTypes = {
  onClick: PropTypes.func.isRequired,
  renderAs: PropTypes.func.isRequired,
};
