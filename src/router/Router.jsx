import { Route, Routes } from "react-router-dom";

import { RoutePaths } from "./routes";
import pages from "../pages";
import { NotFound } from "./NotFound";
import { Layout } from "./Layout";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <pages.Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.ABOUT}
      element={
        <Layout>
          <pages.About />
        </Layout>
      }
    />
    <Route
      path="*"
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
