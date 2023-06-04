import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../components/Header";

export function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollRestoration />
    </>
  );
}
