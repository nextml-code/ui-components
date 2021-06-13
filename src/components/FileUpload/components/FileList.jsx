import React from "react";
import PropTypes from "prop-types";
import { FileRow } from "./FileRow";
import { map } from "../../../core/map";
import { objectMatchFilter } from "../../../core/objectMatch";

export const FileList = ({
  files,
  fileStatusArray,
  fileData,
  onRowClick,
  dispatch,
}) => {
  const renderFileRow = (file) => {
    const [{ progress, status }] = fileStatusArray.filter(
      objectMatchFilter("id", file.id),
    );

    return (
      <FileRow
        progress={progress}
        status={status}
        onClick={onRowClick}
        key={file.id}
        size={file.size}
        name={file.name}
        id={file.id}
        fileData={fileData}
        dispatch={dispatch}
      />
    );
  };

  return <div>{map(files, renderFileRow)}</div>;
};

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fileStatusArray: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fileData: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onRowClick: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};
