

export const SignInReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_SIGN_IN':
      return {
        userToken: action.payload.userToken,
      };
    case 'UPDATE_SIGN_OUT':
      return {
        userToken: action.payload.userToken,
      };
    default:
      return state;
  }
};




// export const SignInReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_SIGN_IN':
//       return {
//         userToken: action.payload.userToken,
//       };
//     default:
//       return state;
//   }
// };
