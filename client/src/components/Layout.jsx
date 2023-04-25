import React, { Children } from "react";

function Layout({ children }) {
  return <div className="max-w-7xl mx-auto py-10">{children}</div>;
}

export default Layout;
