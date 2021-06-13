import React from "react";
import PropTypes from "prop-types";
import { FAIL, PENDING } from "../constants";
import { SET_FILE_STATUS } from "../store/actionTypes";
import styled from "styled-components";

const retry = (dispatch, fileId) => (_) => {
  dispatch({
    type: SET_FILE_STATUS,
    payload: {
      id: fileId,
      status: PENDING,
    },
  });
};

const Button = styled.button`
  color: var(--aiwizo-application-blue);
  cursor: pointer;
  text-decoration: underline;
  margin-left: 7px;
  border: none;
  background-color: transparent;
  font-size: 14px;
`;

export const RetryButton = ({ status, fileId, dispatch }) => {
  if (status === FAIL) {
    return <Button onClick={retry(dispatch, fileId)}>Retry</Button>;
  }

  return null;
};

RetryButton.propTypes = {
  status: PropTypes.string.isRequired,
  fileId: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};
