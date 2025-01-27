import React, { lazy } from "react";
import "../styles/layout/MainLayout.css";

const Header = lazy(() => import("../components/Header"));
const Sidebar = lazy(() => import("../components/Sidebar"));
const Footer = lazy(() => import("../components/Footer"));

export default function MainLayout(props) {
    const { children } = props;
    return (

        <div className="layout">
            <Header />
            <div className="layout-content">
                <Sidebar />
                <main className="main-content">
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );

}