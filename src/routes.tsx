import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, useEffect, ReactElement } from "react";
import { useLocation } from "react-router-dom";

import Loading from "./Components/Loading";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Authentication from "./Pages/Auth";
import NotFound from "./Pages/NotFound";
import PageBodySystem from "./Components/PageBodySystem";
import Home from "./Pages/Home";
import Forbidden from "./Components/Forbidden";
import SellerPage from "./Pages/SellerPage";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

interface ProtectedRouteProps {
    element: ReactElement;
    allowedCompanyIds?: number[];
    requireUserType1?: boolean;
}

function ProtectedRoute({ element, allowedCompanyIds, requireUserType1 }: ProtectedRouteProps) {
    const { authData } = useAuth();
    const isAuthenticated = !!authData.authToken;
    const userCompanyId = Number(authData.companyID) || 0;  // Aqui, 0 é o valor padrão

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (allowedCompanyIds && !allowedCompanyIds.includes(userCompanyId)) {
        return <Navigate to="/home" />;
    }

    if (requireUserType1 && !authData.userType.includes("1")) {
        return <Navigate to="/forbidden" replace />;
    }

    return element;
}


function AppRoutes() {
    return (
        <AuthProvider>
            <HashRouter>
                <ScrollToTop />
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<SellerPage />} />
                        <Route path="/login" element={<Authentication />} />
                        <Route element={<PageBodySystem />}>
                            <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
                            <Route path="/forbidden" element={<Forbidden />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </Suspense>
            </HashRouter>
        </AuthProvider>
    )
}

export default AppRoutes;
