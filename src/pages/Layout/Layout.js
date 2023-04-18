import { Outlet } from "react-router-dom";
import Landing from "../Landing/Landing";
// import AboutNav from "../../components/navtabs/AboutNav";


const Layout = () => {
  return (
    <>
      <Landing />
      <Outlet />
    </>
  );
};

export default Layout;