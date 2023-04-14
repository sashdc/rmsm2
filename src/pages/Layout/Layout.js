import { Outlet } from "react-router-dom";
import Landing from "../Landing/Landing";
import AboutNav from "../../components/navtabs/AboutNav";


const Layout = () => {
  return (
    <>
      <Landing />
      {/* <Outlet />
      <AboutNav /> */}
    </>
  );
};

export default Layout;