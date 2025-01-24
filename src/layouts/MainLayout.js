import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div style={layoutStyle}>
            <Header />
            <div style={contentStyle}>
                <Sidebar />
                <main style={mainStyle}>
                   
                   
                </main>
            </div>
            <Footer />
        </div>
    );
};

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
};

const contentStyle = {
    display: "flex",
    flex: 1,
};

const mainStyle = {
    flex: 1,
    padding: "1rem",
    backgroundColor: "#fff",
};

export default MainLayout;
