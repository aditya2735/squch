"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";


const StayNavigationBottom = () => {
    const pathname = usePathname();
    const router = useRouter();
    const t = useTranslations("Accommodation");
    const navItems = [
        { key: "back", path: "", label: t("back"), activePath: "/", icon: "goBack" },
        { key: "explore", path: "/home/accommodation/explore", label: t("explore"), activePath: "/explore", icon: "explore" },
        { key: "wishlist", path: "/home/accommodation/wishlist", label: t("wishlist"), activePath: "/wishlist", icon: "wishlist" },
        { key: "booking", path: "/home/accommodation/mybooking", label: t("booking"), activePath: "/mybooking", icon: "booking" }
      ];
      
    return (
        <nav className="sec-navigation-bottom"
        style={{ position: "fixed", bottom: 0, left: 0, width: "100%"
            , zIndex: 9999 
        }}
        >
            <div className="container">
                <ul className="d-flex align-items-center justify-content-between list-unstyled m-0">
                    {navItems.map(({ key, path, label, activePath, icon }) => {
                        const isActive = activePath === "/" ? pathname === "/" : pathname.includes(activePath);
                        return (
                            <li key={key} className={isActive ? "active" : ""}>
                                {key === "back" ? (
                                    <div className="nav-item" onClick={() => router.back()} style={{cursor:"pointer"}}>
                                        <span className="navicon d-block">
                                            <Image src={`/svg/${icon}${isActive ? "-active" : ""}.svg`} alt={label} height={29} width={28} />
                                        </span>
                                        <p className="m-0">{label}</p>
                                    </div>
                                ) : (
                                    <Link href={path} className="nav-item">
                                        <span className="navicon d-block">
                                            <Image src={`/svg/${icon}${isActive ? "-active" : ""}.svg`} alt={label} height={29} width={28} />
                                        </span>
                                        <p className="m-0">{label}</p>
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default StayNavigationBottom;
