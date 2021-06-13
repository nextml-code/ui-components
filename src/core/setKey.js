export const setKey = (key) => (value) => (object) => ({
  ...object,
  [key]: value,
});
