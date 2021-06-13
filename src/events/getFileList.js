import { map } from "../core/map";

export const getFileList = ({ dataTransfer }) => {
  if (dataTransfer.items) {
    return map([...dataTransfer.items], (file) => {
      if (file.kind === "file") {
        return file.getAsFile();
      }
    });
  } else {
    return map([...dataTransfer.files], identity);
  }
};
