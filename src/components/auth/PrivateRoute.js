import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../../controllers/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  // ...rest는 나머지 props들을 rest연산자로 객체 분해한 것
  <Route
    {...rest}
    render={props =>
      isAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  ></Route>
);

export default PrivateRoute;
