// Layout.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Navbar */}
      {/* <header className="sticky top-0 z-50">
        <Navbar />
        <Header />
      </header> */}
      
      {/* Dynamic content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Fixed Footer */}
      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
};

export default Layout;
