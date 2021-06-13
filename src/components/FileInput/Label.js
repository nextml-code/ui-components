import styled from "styled-components";

export const Label = styled.label`
  cursor: pointer;
  font-family: var(--aiwizo-application-default-font);
  border: none;
  border-radius: var(--aiwizo-application-border-radius-primary);
  padding: var(--aiwizo-application-spacing-small);
  background-color: var(--aiwizo-application-blue);
  border-bottom: 2px solid var(--aiwizo-application-blue-dark);
  color: #ffffff;
  font-weight: 700;
  font-size: var(--aiwizo-application-font-size-regular);
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;

  :hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.08);
  }
`;
