import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Label } from "../Label/index.js";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import defer from "@codewell/defer";
import targetValue from "@codewell/target-value";
import { InputWrapper } from "./InputWrapper.js";
import { TypeIcon } from "./TypeIcon.jsx";
import { RemoveIcon } from "./RemoveIcon.js";
import { StyledInput } from "./StyledInput";
import isDefined from "@codewell/is-defined";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const handleFocus = (ref, setFocus) => {
  ref.current.focus();
  setFocus(true);
};

export const Input = ({ label, icon, onChange, ...props }) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <Wrapper
      onClick={defer(handleFocus, inputRef, setFocus)}
      onBlur={defer(setFocus, false)}
    >
      {label ? <Label>{label}</Label> : null}
      <InputWrapper focus={focus}>
        {isDefined(icon) ? <TypeIcon icon={icon} focus={focus} /> : null}
        <StyledInput
          ref={inputRef}
          {...props}
          value={value}
          onChange={targetValue(setValue)}
        />
        <RemoveIcon icon={faTimes} onClick={defer(setValue, "")} />
      </InputWrapper>
    </Wrapper>
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  icon: PropTypes.shape(),
  label: PropTypes.string,
};
