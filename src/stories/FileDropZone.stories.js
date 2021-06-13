import React from "react";
import "@aiwizo/application-styles";
import { FileDropZone } from "../";

export default {
  title: "File Drop Zone",
  component: FileDropZone,
};

const Template = (args) => <FileDropZone {...args} />;

export const DropZone = Template.bind({});

DropZone.args = {
  styles: {},
  onChange: console.log,
};
