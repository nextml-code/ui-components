import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const RemoveIcon = styled(FontAwesomeIcon)`
  font-size: var(--aiwizo-application-font-size-small);
  color: var(--aiwizo-application-faded-text-grey);
  cursor: pointer;
  :hover {
    color: var(--aiwizo-application-red);
  }
`;
