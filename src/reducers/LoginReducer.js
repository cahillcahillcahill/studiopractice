const SET_LOGIN_PENDING = "SET_LOGIN_PENDING";
const SET_LOGIN_SUCCESS = "SET_LOGIN_SUCCESS";
const SET_LOGIN_ERROR = "SET_LOGIN_ERROR";
const SET_LOGIN_EMAIL = "SET_LOGIN_EMAIL";
const SET_LOGOUT = "SET_LOGOUT";

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));
    dispatch(setLoginEmail(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
        dispatch(setLoginEmail(email));
      } else {
        dispatch(setLoginError(error));
      }
    });
  };
}

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  };
}

function setLoginEmail(email) {
  return {
    type: SET_LOGIN_EMAIL,
    email
  };
}

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === "admin@example.com" && password === "admin") {
      return callback(null);
    } else {
      return callback(new Error("Invalid email or password"));
    }
  }, 500);
}

export default function LoginReducer(
  state = {
    isLoginSuccess: false,
    isLoginPending: false,
    isLogOut: false,
    loginError: null,
    loginEmail: null
  },
  action
) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGOUT:
      return Object.assign({}, state, {
        isLogOut: action.payload
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    case SET_LOGIN_EMAIL:
      return Object.assign({}, state, {
        loginEmail: action.email
      });

    default:
      return state;
  }
}
