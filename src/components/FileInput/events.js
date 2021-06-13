import { preventDefault } from "../../events/preventDefault";
import { setKey } from "../../core/setKey";
import { getFileList } from "../../events/getFileList";

const setIsDragging = setKey("isDragging");
const toggleOff = setIsDragging(false);
const toggleOn = setIsDragging(true);

export const handleOnDragEnter = (state, setState) => (event) => {
  preventDefault(event);
  return setState(toggleOn(state));
};

export const handleOnDragExit = (state, setState) => (event) => {
  preventDefault(event);
  return setState(toggleOff(state));
};

export const handleOnDrop = (state, setState, onChange) => (event) => {
  preventDefault(event);
  setState(toggleOff(state));
  onChange({ event, files: getFileList(event) });
};

export const handleOnChange = (onChange) => (event) => {
  preventDefault(event);
  const {
    target: { files },
  } = event;
  return onChange({ event, files });
};
