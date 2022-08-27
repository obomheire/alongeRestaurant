import React, {createContext, useReducer} from 'react';
import {SignInReducer} from '../reducers/authReducers';

export const SignInContext = createContext();

export const SignInContextProvider = props => {
    
  const [authUser, dispatchAuthUser] = useReducer(SignInReducer, {
    userToken: null,
  });

  return (
    <SignInContext.Provider value={{authUser, dispatchAuthUser}}>
      {props.children}
    </SignInContext.Provider>
  );
};


// import React, {createContext, useReducer} from 'react';
// import {SignInReducer} from '../reducers/authReducers';

// export const SignInContext = createContext();

// export const SignInContextProvider = props => {
//   const [signedIn, dispatchSignedIn] = useReducer(SignInReducer, {
//     userToken: null,
//   });

//   return (
//     <SignInContext.Provider value={{signedIn, dispatchSignedIn}}>
//       {props.children}
//     </SignInContext.Provider>
//   );
// };
