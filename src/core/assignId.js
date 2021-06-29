import { v4 as uuid } from "uuid";

export const assignId = (x) => Object.assign(x, { id: uuid() });
