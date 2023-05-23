import Notiflix from 'notiflix'; 
 
Notiflix.Notify.init({ 
  width: '280px', 
  position: 'center-top', 
  distance: '15px', 
  timeout: 5000, 
  opacity: 1, 
  warning: { 
    background: '#54ADFF', 
    textColor: '#111111', 
    notiflixIconColor: '#ffc107', 
  }, 
}); 
 
export function userAuthCheck() { 
  Notiflix.Notify.warning('You must be registered or logged in to continue the operation'); 
} 
 
export function authErrorMessage(error) { 
  switch (error.status) { 
    case 400: 
      Notiflix.Notify.warning( 
        `${error.data.message}. Try it again\nError ${error.status}`
      ); 
          break; 
      case 401: 
      Notiflix.Notify.warning( 
        `${error.data.message}. Try it again\nError ${error.status}`
      ); 
          break; 
      case 409: 
      Notiflix.Notify.warning( 
          `${error.data.message}. Try another one or log in. 
        Error ${error.status}`
      ); 
      break;
    case 500: 
      Notiflix.Notify.warning( 
        `Unfortunately, something has gone wrong. Please refresh your browser\nError ${error.status}` 
      ); 
      break; 
    default: 
      Notiflix.Notify.warning( 
        `Oops, something went wrong...Try it again\nError ${error.status} ${error.statusText} `
      ); 
  } 
}
