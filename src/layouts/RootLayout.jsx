import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </>
  );
}
