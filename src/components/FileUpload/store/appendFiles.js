import { APPEND_FILES } from "./actionTypes";
import { map } from "../../../core/map";
import { assignId } from "../../../core/assignId";

export const appendFiles = (files) => ({
  type: APPEND_FILES,
  payload: map([...files], assignId),
});
