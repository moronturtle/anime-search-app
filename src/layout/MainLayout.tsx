import { Container } from "@mui/material";
import React from "react";
import Header from "../components/Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py:4 }}>{children}</Container>
    </>
  );
};

export default MainLayout;
