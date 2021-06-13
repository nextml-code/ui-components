import { map } from "../../../core/map";

export const prepareUpdateFileStatus = (files) => (file) =>
  map(files, (f) => {
    if (file.id === f.id) {
      return { ...f, ...file };
    }
    return f;
  });
