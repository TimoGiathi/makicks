import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Dropdown from "../Components/Dropdown";

function MainLayout() {
  return (
    <>
      <Header />
      <Dropdown/>
      <Outlet />
    </>
  );
}

export default MainLayout;
