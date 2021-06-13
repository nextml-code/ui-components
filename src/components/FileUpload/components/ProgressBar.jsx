import React from "react";
import PropTypes from "prop-types";
import { PENDING, UPLOADING } from "../constants";
import styled from "styled-components";

const ProgressWrapper = styled.div`
  width: 100%;
  height: 3px;
  display: flex;
  margin-top: 5px;
  border-radius: 100px;
`;

const DoneProgress = styled.div`
  width: ${(props) => props.width}%;
  background-color: var(--aiwizo-application-blue);
`;

const LeftProgress = styled.div`
  width: ${(props) => props.width}%;
  background-color: var(--aiwizo-application-grey);
`;

export const ProgressBar = ({ status, progress }) => {
  if ([PENDING, UPLOADING].includes(status)) {
    return (
      <ProgressWrapper>
        <DoneProgress width={progress} />
        <LeftProgress width={100 - progress} />
      </ProgressWrapper>
    );
  }

  return null;
};

ProgressBar.propTypes = {
  status: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
