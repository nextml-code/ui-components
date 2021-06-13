import { useEffect } from "react";
import { SET_NEXT_UPLOAD } from "../store/actionTypes";
import { PENDING, UPLOADING, NEXT } from "../constants";
import { objectMatchFilter } from "../../../core/objectMatch";

// Controls that the number of files uploading
// are not more than the batch size
export const useFileUploadBatchControl = (
  { fileStatusArray, requestBatchSize },
  dispatch,
) => {
  useEffect(() => {
    const numberOfUploadingFiles = fileStatusArray.filter(
      objectMatchFilter("status", UPLOADING),
    ).length;

    const numberOfReadyFiles = fileStatusArray.filter(
      objectMatchFilter("status", NEXT),
    ).length;

    if (
      fileStatusArray.filter(objectMatchFilter("status", PENDING)).length > 0 &&
      numberOfUploadingFiles + numberOfReadyFiles < requestBatchSize
    ) {
      dispatch({
        type: SET_NEXT_UPLOAD,
      });
    }
  }, [fileStatusArray]);
};
