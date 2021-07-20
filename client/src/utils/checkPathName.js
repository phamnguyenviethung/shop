// Do not render in these paths

const paths = [];

export default function checkPathName(pathName) {
  const match = paths.indexOf(pathName);
  return match === -1; // if true => can render
}
