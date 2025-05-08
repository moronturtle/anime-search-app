import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";

const SearchPage = React.lazy(() => import("../pages/SearchPage"));
const DetailPage = React.lazy(() => import("../pages/DetailPage"));
const MainLayout = React.lazy(() => import("../layout/MainLayout"));

const Fallback = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <CircularProgress />
    </Box>
  );
};

const NotFound = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    height="100vh"
  >
    <h1>Page Not Found</h1>
  </Box>
);

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Fallback />}>
            <MainLayout>
              <SearchPage />
            </MainLayout>
          </Suspense>
        }
      />
       <Route
        path="/anime/:id"
        element={
          <Suspense fallback={<Fallback />}>
            <MainLayout>
              <DetailPage />
            </MainLayout>
          </Suspense>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
