import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { StyledLayout } from "./StyledLayout";

const Layout = () => {
  return (
    <StyledLayout>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </StyledLayout>
  );
};

export default Layout;