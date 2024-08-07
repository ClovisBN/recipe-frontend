import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div>
      <h1>Oops! An error occurred</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorBoundary;
