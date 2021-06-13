import styled, { css } from "styled-components";

export const defaultStyles = {
  fontFamily: "var(--aiwizo-application-default-font)",
  fontWeight: 900,
  color: "var(--aiwizo-application-black)",
  colorDragging: "var(--aiwizo-application-white)",
  backgroundColor: "var(--aiwizo-application-light-background-blue)",
  backgroundColorDragging: "var(--aiwizo-application-blue)",
  fontSize: "var(--aiwizo-application-font-size-big)",
  border: "1px solid var(--aiwizo-application-primary-border-blue)",
  borderTopLeftRadius: "var(--aiwizo-application-border-radius-primary)",
  borderTopRightRadius: "var(--aiwizo-application-border-radius-primary)",
  borderBottomRightRadius: "var(--aiwizo-application-border-radius-primary)",
  borderBottomLeftRadius: "var(--aiwizo-application-border-radius-primary)",
  padding: "var(--aiwizo-application-spacing-medium)",
};

export const DropZoneWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  font-weight: ${(props) => props.styles.fontWeight};
  color: ${(props) => props.styles.color};
  font-family: ${(props) => props.styles.fontFamily};
  background-color: ${(props) => props.styles.backgroundColor};
  font-size: ${(props) => props.styles.fontSize};
  border: ${(props) => props.styles.border};
  border-top-left-radius: ${(props) => props.styles.borderTopLeftRadius};
  border-top-right-radius: ${(props) => props.styles.borderTopRightRadius};
  border-bottom-right-radius: ${(props) =>
    props.styles.borderBottomRightRadius};
  border-bottom-left-radius: ${(props) => props.styles.borderBottomLeftRadius};

  ${(props) =>
    props.dragging &&
    css`
      color: ${(props) => props.styles.colorDragging};
      background-color: ${(props) => props.styles.backgroundColorDragging};
    `}
`;
