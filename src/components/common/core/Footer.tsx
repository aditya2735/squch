"use client";
import React from 'react';
import Image, { StaticImageData } from "next/image";
import Link from 'next/link';

import AppleStore from "../../../../public/images/apple-store.png";
import PlayStore from "../../../../public/images/play-store.png";
import FooterLogo from "../../../../public/images/footer-logo.svg";
import Facebook from "../../../../public/images/facebook.svg";
import Instagram from "../../../../public/images/instagram.svg";
import Linkedin from "../../../../public/images/Linkedin.svg";
import Youtube from "../../../../public/images/Youtube.svg";
import X from "../../../../public/images/X.svg";
import LanguageDropdown from './LanguageDropdown';

interface LinkType {
    href: string;
    label: string;
}

interface SocialLinkProps {
    icon: StaticImageData;
    alt: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: LinkType[];
}


const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => (
    <div className='footer-box'>
        <h3 className="text-footer-heading">{title}</h3>
        <nav>
            <ul role="list">
                {links.map((link, index) => (
                    <li key={index} className="group">
                        <Link className="txet-link" href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    </div>
);


const SocialLink: React.FC<SocialLinkProps> = ({ icon, alt, href }) => (
    <li className="group">
        <Link className="txet-link" href={href}>
            <Image src={icon} alt={alt} width={24} height={24} />
        </Link>
    </li>
);

const Footer: React.FC = () => {

    const footerColumns: FooterColumnProps[] = [
        {
            title: "Company",
            links: [
                { href: "#", label: "About Us" },
                { href: "#", label: "Squch Corporate" },
                { href: "#", label: "Careers" },
                { href: "#", label: "Team" },
            ],
        },
        {
            title: "Squchverse",
            links: [
                { href: "#", label: "Squch Ride" },
                { href: "#", label: "Squch Travel" },
                { href: "#", label: "Squch Stay" },
                { href: "#", label: "Squch Mart" },
                { href: "#", label: "Squch Events Ads" },
            ],
        },
        {
            title: "Contac us",
            links: [
                { href: "#", label: "Help & Support" },
                { href: "#", label: "Partner With Us" },
                { href: "#", label: "Work With Us" },
            ],
        },
        {
            title: "Legal",
            links: [
                { href: "#", label: "Terms & Conditions" },
                { href: "#", label: "Cookie Policy" },
                { href: "#", label: "Privacy Policy" },
            ],
        },
    ];

    const socialLinks: SocialLinkProps[] = [
        { icon: Facebook, alt: "Facebook Icon", href: "#" },
        { icon: Instagram, alt: "Instagram Icon", href: "#" },
        { icon: Linkedin, alt: "Linkedin Icon", href: "#" },
        { icon: Youtube, alt: "Youtube Icon", href: "#" },
        { icon: X, alt: "X Icon", href: "#" },
    ];

    return (
        <footer className="footer">
            <div className="container px-0">
                <div className='bg-light-grey inner-footer md:px-3'>
                    {/* Footer Top Section */}
                    <div className="footer-top-box d-flex flex-wrap justify-content-between align-items-center mb-8">
                        <Link href="#">
                            <Image src={FooterLogo} alt="Footer Logo" width={150} height={50} />
                        </Link>
                        <div className='location-lung-box d-flex flex-wrap gap-2'>
                            <select name="country" id="country">
                                <option value="Ghana">Ghana</option>
                                <option value="India">India</option>
                            </select>
                            <LanguageDropdown/>
                            {/* <select name="language" id="language">
                                <option value="English">English</option>
                                <option value="Hindi">Hindi</option>
                            </select> */}
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="footer-bottom-box">
                        <div className="d-flex flex-wrap gap-2 justify-content-between">
                            {/* Render Footer Columns */}
                            {footerColumns.map((column, index) => (
                                <FooterColumn key={index} title={column.title} links={column.links} />
                            ))}

                            {/* Social Links Column */}
                            <div className='footer-box social-box'>
                                <h3 className="text-footer-heading">Social Links</h3>
                                <nav>
                                    <ul role="list" className="d-flex flex-wrap align-items-center gap-3">
                                        {socialLinks.map((link, index) => (
                                            <SocialLink key={index} icon={link.icon} alt={link.alt} href={link.href} />
                                        ))}
                                    </ul>
                                </nav>
                            </div>

                            {/* Download App Links */}
                            <div className='footer-box'>
                                <h3 className="text-footer-heading">Download App</h3>
                                <nav>
                                    <ul role="list">
                                        <li className="group m-0 p-0">
                                            <Link href="#">
                                                <Image src={AppleStore} alt="Apple Store" width={120} height={40} />
                                            </Link>
                                        </li>
                                        <li className="group lg:!mt-3 !m-0 p-0">
                                            <Link href="#">
                                                <Image src={PlayStore} alt="Play Store" width={120} height={40} />
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>

                    {/* Footer Bottom Text */}
                    <div className='footer-bottom'>
                        <hr />
                        <p className="text-center">
                            By continuing past this page, you agree to our Terms of Service,
                            Cookie Policy, Privacy Policy, and Content Policies. All trademarks
                            are properties of their respective owners. 2008-2024 © Squch™ Ltd.
                            All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
