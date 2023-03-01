import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <>
      <nav>
        <header className="App-header">
            <a href="/">SHY ONES</a>
            <a href="/venture-studio"> VENTURE STUDIO </a>  
            <a href="/events"> EVENTS </a>  
            <a href="/shop"> SHOP </a>
        </header>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;