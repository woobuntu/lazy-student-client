import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../../controllers/auth";

const AdminRoute = ({ component: Component, ...rest }) => {
  // ...rest는 나머지 props들을 rest연산자로 객체 분해한 것
  return (
    <Route
      {...rest}
      render={props =>
        isAuth() && isAuth().role === "admin" ? (
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
};

export default AdminRoute;
