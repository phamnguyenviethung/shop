import decode from 'jwt-decode';

function checkTokenExpire(token) {
  return Date.now() >= decode(token).exp * 1000;
}

export default checkTokenExpire;
