import { START_DRAG, STOP_DRAG } from "./store/actionTypes";

export const handleOnDragEnter = ({ dispatch }) => {
  dispatch({ type: START_DRAG });
};

export const handleOnDragExit = ({ dispatch }) => {
  dispatch({ type: STOP_DRAG });
};
