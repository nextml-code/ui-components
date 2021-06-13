import React from "react";
import { getSizeUnit } from "../../../../core/getSizeUnit";
import { ProgressBar } from "../ProgressBar";
import { RetryButton } from "../RetryButton";
import { StatusIcon } from "../StatusIcon";
import { triggerOnEvent } from "../../../../events/triggerOnEvent";
import { objectMatchFilter } from "../../../../core/objectMatch";
import { filter } from "../../../../core/filter";
import { first } from "../../../../core/first";
import styled from "styled-components";
import { Wrapper } from "./Wrapper";
import { StatusText } from "./StatusText";
import PropTypes from "prop-types";

const Name = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  font-size: var(--aiwizo-application-font-size-medium);
`;

const FileSize = styled.span`
  margin-left: var(--aiwizo-application-spacing-small);
  font-weight: bold;
  font-size: var(--aiwizo-application-font-size-small);
  color: var(--aiwizo-application-grey);
`;

export const FileRow = ({
  name,
  size,
  status,
  progress,
  dispatch,
  id,
  onClick,
  fileData,
}) => (
  <Wrapper
    status={status}
    onClick={triggerOnEvent(
      onClick,
      first(filter(fileData, objectMatchFilter("localFileId", id))),
    )}
  >
    <div style={{ display: "flex", alignItems: "baseline" }}>
      <StatusIcon status={status} />
      <Name>{name}</Name>
      <FileSize>
        {`${getSizeUnit(size).size} ${getSizeUnit(size).short}`}
      </FileSize>

      <div style={{ marginLeft: "auto" }}>
        <StatusText status={status} />
        <RetryButton dispatch={dispatch} fileId={id} status={status} />
      </div>
    </div>
    <ProgressBar progress={progress} status={status} />
  </Wrapper>
);

FileRow.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  status: PropTypes.string,
  progress: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  fileData: PropTypes.arrayOf(PropTypes.shape()),
};
