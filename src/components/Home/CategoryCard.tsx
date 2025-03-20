import Image from "next/image";
import Link from "next/link";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";


const cardImages = [
    { src: "/images/home-card-img-1.png", link: "/home/", title: "Cab", desc: "Book your ride" },
    { src: "/images/home-card-img-2.png", link: "/home/busbooking", title: "Travel", desc: "Book your Tickets" },
    { src: "/images/home-card-img-3.png", link: "/home/accommodation/explore", title: "Stay", desc: "Book your accommodation" },
    { src: "/images/home-card-img-4.png", link: "/home/mart", title: "Mart", desc: "Order your grocery" },
    { src: "/images/home-card-img-4.png", link: "/home/food", title: "Food", desc: "Order your Food" },
    { src: "/images/home-card-img-5.png", link: "/home/", title: "Events", desc: "Get your entertainment" },
    { src: "/images/home-card-img-5.png", link: "/home/", title: "Squch Ads", desc: "Feature services in a sale" },
];


const CategoryCards: React.FC = () => (
    <div className="card-bottom">
        <SimpleBar style={{ maxWidth: "100%", overflowX: "auto" }}>
            <ul className="d-flex list-unstyled home-card-list">
                {cardImages.map((card, index) => {
                    return (
                        <li key={index}>
                            <Link href={card.link} className="card-home">
                                <div className="card-text">
                                    <h3 className="card-text-ttl">
                                        {card.title}
                                    </h3>
                                    <p>{card.desc}</p>
                                </div>
                                <div className="home-cardImg">
                                    <Image
                                        src={card.src}
                                        alt={card.title}
                                        height={500}
                                        width={500} />
                                </div>
                            </Link>
                        </li>
                    );
                })
                }
            </ul>
        </SimpleBar>
    </div>
);

export default CategoryCards;
