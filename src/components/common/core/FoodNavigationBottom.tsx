import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';


const FoodNavigationBottom = () => {
    const pathname = usePathname();
    const router = useRouter();

    return (
        <nav className="sec-navigation-bottom">
            <div className="container">
                <ul className="d-flex align-items-center justify-content-between list-unstyled m-0">
                    <li className={pathname === "/" ? "active" : ""}>
                        <div className="nav-item" onClick={() => router.back()}>
                            <span className="navicon d-block">
                                <Image src="/images/nav-back.svg" alt="Go Back" height={29} width={28} />
                            </span>
                            <p className="m-0">Home</p>
                        </div>
                    </li>
                    <li className={pathname.includes("/home") ? "active" : ""}>
                        <Link href="/mart" className="nav-item">
                            <span className="navicon d-block">
                                <Image src="/images/food.svg" alt="Squchmart" height={29} width={28} />
                            </span>
                            <p className="m-0">Food</p>
                        </Link>
                    </li>
                    <li className={pathname.includes("/category") ? "active" : ""}>
                        <Link href="/home/food/cuisines" className="nav-item">
                            <span className="navicon d-block">
                                <Image src="/images/categories.svg" alt="Categories" height={29} width={28} />
                            </span>
                            <p className="m-0">Cuisines</p>
                        </Link>
                    </li>
                    <li className={pathname.includes("/cart") ? "active" : ""}>
                        <Link href="/home/mart/cart" className="nav-item">
                            <span className="navicon d-block">
                                <Image src="/images/cart.svg" alt="Categories" height={29} width={28} />
                            </span>
                            <p className="m-0">Reorder</p>
                        </Link>
                    </li>
                    <li className={pathname.includes("/offer") ? "active" : ""}>
                        <Link href="/home/mart/offer" className="nav-item">
                            <span className="navicon d-block">
                                <Image src="/images/nav-offer.svg" alt="Offers" height={29} width={28} />
                            </span>
                            <p className="m-0">Offers</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default FoodNavigationBottom