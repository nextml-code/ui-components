import React from "react";
import "@aiwizo/application-styles";
import { FileInput } from "../";

export default {
  title: "File Input",
  component: FileInput,
};

const Template = (args) => <FileInput {...args} />;

export const Regular = Template.bind({});

Regular.args = {
  styles: {},
  onChange: console.log,
};
