import React from "react";
import PropTypes from "prop-types";
import { useComponentId } from "../../hooks/useComponentId";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { StyledInput } from "./StyledInput";
import { Label } from "./Label";
import { handleOnChange } from "./events";

export const FileInput = ({ onChange, styles }) => {
  const id = useComponentId();

  return (
    <form onChange={handleOnChange(onChange)}>
      <Label htmlFor={id} styles={styles}>
        <FontAwesomeIcon icon={faFile} /> <span>Browse files</span>
        <StyledInput type="file" id={id} onChange={onChange} multiple />
      </Label>
    </form>
  );
};

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  styles: PropTypes.shape(),
};

FileInput.defaultProps = {
  styles: {},
};
