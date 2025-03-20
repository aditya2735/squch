"use client";
import Footer from "@/components/common/core/Footer";
import MartNavigationBottom from "@/components/common/core/MartNavigationBottom";
import { usePathname } from "next/navigation";
import DineNavigationBottom from "./DineNavigationBottom";
import FoodNavigationBottom from "./FoodNavigationBottom";

interface PageLayoutProps {
    children: React.ReactNode;
    showFooter?: boolean;
}

export default function PageLayout({ children, showFooter }: PageLayoutProps) {

    const pathname = usePathname();
    const shouldShowFooter = showFooter ? true : false;

    const getBottomNavigation = () => {
        if (pathname.includes("/mart")) {
            return <MartNavigationBottom />;
        } else if (pathname.includes("/dine")) {
            return <DineNavigationBottom />;
        } else if(pathname.includes("/food")) {
            return <FoodNavigationBottom />
        }
        return <Footer/>
    };


    return (
        <>
            {children}
            {shouldShowFooter ? <Footer /> : getBottomNavigation()}
        </>
    );
}
