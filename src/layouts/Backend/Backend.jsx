import React from "react";
import Helmet from "react-helmet";
import Topbar from "../../components/topbar";
import MainSidebar from "../../components/main-sidebar";
import PageHeader from "../../components/page-header";
import Footer from "../../components/footer";
const Backend = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>{process.env.REACT_APP_PAGE_TITLE}</title>
      </Helmet>
      <Topbar />
      <MainSidebar />
      <PageHeader />
      <div className="  main-content">{children}</div>
      <Footer />
    </>
  );
};

export default Backend;
