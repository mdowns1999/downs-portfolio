import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Github from "./Github";

function RootLayout() {
 
  return (
    <div className="container">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      <Github/>
    </div>
  );
}

export default RootLayout;
