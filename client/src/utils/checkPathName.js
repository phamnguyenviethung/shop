const paths = ['/login', '/register'];

export default function checkPathName(pathName) {
  const match = paths.indexOf(pathName);
  return match !== -1;
}
