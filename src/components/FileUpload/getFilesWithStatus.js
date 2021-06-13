import { objectMatchFilter } from "../../core/objectMatch";
import { getKey } from "../../core/getKey";
import { filter } from "../../core/filter";

export const getFilesWithStatus = (files, fileStatusArray, status) => {
  const fileIds = fileStatusArray
    .filter(objectMatchFilter("status", status))
    .map(getKey("id"));

  return filter(files, (file) => fileIds.includes(file.id));
};
