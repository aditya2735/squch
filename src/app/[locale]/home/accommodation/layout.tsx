"use client";

import StayNavigationBottom from "@/components/accommodation/StayNavigationBottom";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const pathname = usePathname();

    // Show bottom navigation if pathname contains any of these segments
    const showBottomNav = ["/explore", "/wishlist", "/mybooking"].some(path => pathname.includes(path));

    return (
        <>
            {children}
            {showBottomNav && <StayNavigationBottom />}
        </>
    );
};

export default Layout;
