import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FAIL, UPLOADING } from "../../constants";

const getStatusText = (status) => {
  switch (status) {
    case UPLOADING: {
      return "Uploading file...";
    }
    case FAIL: {
      return "Failed to upload file";
    }
    default: {
      return "";
    }
  }
};

const Wrapper = styled.span`
  margin-left: var(--aiwizo-application-spacing-small);
`;

export const StatusText = ({ status }) => {
  return <Wrapper>{getStatusText(status)}</Wrapper>;
};

StatusText.propTypes = {
  status: PropTypes.string.isRequired,
};
