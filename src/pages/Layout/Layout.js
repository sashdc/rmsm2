import { Outlet } from "react-router-dom";
import Landing from "../Landing/Landing";


const Layout = () => {
  return (
    <>
      <Landing />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;