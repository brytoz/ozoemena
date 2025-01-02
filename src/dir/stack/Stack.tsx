import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";
import Index from "../pages/Index";

function Stack() {
  return (
    <Fragment>
      <Routes>
        <Route index element={<Index />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  );
}

export default Stack;
