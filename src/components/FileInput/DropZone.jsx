import React, { useState } from "react";
import PropTypes from "prop-types";
import { useComponentId } from "../../hooks/useComponentId";
import { StyledInput } from "./StyledInput";
import { DropZoneLabel } from "./DropZoneLabel";
import { defaultStyles, DropZoneWrapper } from "./DropZoneWrapper";
import {
  handleOnChange,
  handleOnDragEnter,
  handleOnDragExit,
  handleOnDrop,
} from "./events";
import { preventDefault } from "../../events/preventDefault";

export const FileDropZone = ({
  onChange,
  styles = {},
  activeText = "Now is the time! Drop the files.",
  passiveText = "Drop files here or click to browse",
}) => {
  const [state, setState] = useState({ isDragging: false });
  const id = useComponentId();

  return (
    <DropZoneWrapper
      dragging={state.isDragging}
      onChange={handleOnChange(onChange)}
      onDragEnter={handleOnDragEnter(state, setState)}
      onDragExit={handleOnDragExit(state, setState)}
      onDragOver={preventDefault}
      onDrop={handleOnDrop(state, setState, onChange)}
      styles={{ ...defaultStyles, ...styles }}
    >
      <DropZoneLabel htmlFor={id}>
        {state.isDragging ? activeText : passiveText}
        <StyledInput type="file" id={id} onChange={onChange} multiple />
      </DropZoneLabel>
    </DropZoneWrapper>
  );
};

FileDropZone.propTypes = {
  onChange: PropTypes.func.isRequired,
  activeText: PropTypes.string,
  passiveText: PropTypes.string,
  styles: PropTypes.shape(),
};
