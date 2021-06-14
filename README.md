# UI Components

React ui component library.


- [UI Components](#ui-components)
  - [Installation](#installation)
    - [Peer Dependencies](#peer-dependencies)
  - [Components](#components)
    - [Select](#select)
    - [Button](#button)
    - [Checkbox](#checkbox)
    - [Input](#input)
    - [Label](#label)
    - [File Input](#file-input)
    - [File Dropzone](#file-dropzone)
    - [File Upload](#file-upload)


## Installation
```
npm i @aiwizo/ui-components
```
### Peer Dependencies
```
npm i styled-component axios uuid @aiwizo/application-styles
```

## Components

### Select

```JavaScript
import "@aiwizo/application-styles";
import { Select } from '@aiwizo/ui-components';

<Select
  // All selectable options as
  // an array of objects
  options={[
    { name: "foo" },
    { name: "bar" },
  ]}

  // Function that returns what should
  // be rendered in the option component
  renderAs={(props, index) => {
    return props.name;
  }}

  // callback triggered when an option
  // is selected
  onSelect={(option) => { /* Do something */ }}

  // Set index of default value in the
  // list of options (defaults to 0)
  defaultIndex={2}
/>
```

### Button

```JavaScript
import "@aiwizo/application-styles";
import { Button } from '@aiwizo/ui-components';

<Button
  // Sets the background color
  // for default button style
  // Available options: red, blue, green
  color="green"

  // Optional parameter that sets
  // the button to "secondary" type
  // If not set, it uses default settings.
  type="secondary"
/>
```

### Checkbox

```JavaScript
import "@aiwizo/application-styles";
import { Checkbox } from '@aiwizo/ui-components';

<Checkbox
  // Callback function triggered whenever the
  // checkbox is clicked
  onChange={({checked, value}) => { /* Do something */ }}

  // Value that is passed to the onChange
  // callback
  value="some value"

  // Optional label displayed to the
  // right of the checkbox
  label="Lorem Ipsum"
/>
```

### Input

```JavaScript
import "@aiwizo/application-styles";
import { Input } from '@aiwizo/ui-components';

<Input
  // Icon that appears to the left
  // for indicating input type/purpose
  icon={ /* Font awesome icon */ }

  // Optional label displayed on
  // top of the right of the input
  label="Lorem Ipsum"

  // ...regular input fields
/>
```

### Label

```JavaScript
import "@aiwizo/application-styles";
import { Label } from '@aiwizo/ui-components';

<Label>Lorem ipsum</Label>
```


### File Input

TODO

### File Dropzone

```javascript
import "@aiwizo/application-styles";
import { FileDropzone } from "@aiwizo/ui-components";

<FileDropzone
  onChange={({ event, files }) => {
    /* Do something */
  }}

  // Custom styling
  styles={
    backgroundColorDragging,
    backgroundColor,
    border,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    color,
    colorDragging,
    fontFamily,
    fontSize,
    fontWeight,
    padding,
  }
/>
```

### File Upload


```javascript
import "@aiwizo/application-styles";
import { FileUpload } from "@aiwizo/ui-components";

<FileUpload
  // Upload url
  url="https://my.awesome/api/endpoint"
  // The callback function is called each
  // time we get a file upload response.
  onUploadResponse={(fileUploadResponse, file) => {
    // Do something with a file upload response or file
  }}
  // Amount of parallel file uploads.
  // Defaults to 1.
  requestBatchSize={1}
  // Calls this function with the
  // data returned from the upload request
  // of a file
  onRowClick={(fileResponseData) => {
    // Do something with the data from the file upload response
  }}
  // Options for configuring the request made
  // when posting the file to the specified url.
  requestOptions={{
    headers: {},
    body: {
      /* JSON */
    },
  }}
/>
```

**JSON**

Its possible to set request headers and body through the `requestOptions` parameter.

If a body is set the `content-type` header is set to `application/json` and the file will be converted to a base64 string and passed to the `body.file.data` field i.e.

```javascript
// Request body:
{
  ...requestOptions.body,
  file: {
    ...requestOptions.body.file,
    data: "data:image/jpeg;base64,/9j/4AAQSkZJRgABA...",
  },
}
```

**form-data**

Set additional `multipart/form-data` entries through the `requestOptions.form` parameter.

The uploaded file will still be set as the entry `file`.

Example:

```javascript
requestionOptions={{
  form: {
    text: "text",
    value: 3,
  }
}}
```

Does not yet support nested `requestionOptions.form`.
