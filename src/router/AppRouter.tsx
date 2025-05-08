import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import SearchPage from "../pages/SearchPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <SearchPage />
          </MainLayout>
        }
      />
    </Routes>
  );
};

export default AppRouter;
