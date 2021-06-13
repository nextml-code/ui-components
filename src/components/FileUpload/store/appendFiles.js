import { APPEND_FILES } from "./actionTypes";
import { v4 as uuid } from "uuid";
import { map } from "../../../core/map";

export const appendFiles = (files) => ({
  type: APPEND_FILES,
  payload: map([...files], (file) => Object.assign(file, { id: uuid() })),
});
