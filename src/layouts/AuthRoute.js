import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "./MainLayout";

const AuthRoute = () => {
    return (
        <MainLayout >
            <Outlet />
        </MainLayout>
    );
};

export default AuthRoute;