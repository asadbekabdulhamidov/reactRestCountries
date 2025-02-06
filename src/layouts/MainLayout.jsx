// react router dom
import { Outlet } from "react-router-dom";

//components
import { Navbar, Footer } from "../components";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className=" bg-[#fafafa] dark:bg-[#202c36] min-h-screen pt-12">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MainLayout;
