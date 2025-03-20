"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import ImageDinoutCategories1 from "../../../../public/images/dinout-categories-img-1.jpg";

const cuisines = [
    "Italian", "Mexican", "Chinese", "Indian",
    "Thai", "American", "Japanese", "French", "European"
];


// TODO: Need to change the static data

const Categories = () => {
    return (
        <div className="sec-dinoutcategories sec-gap pt-0">
            <div className="px-40">
                <div className="row gx-3 row-dinoutcategories">
                    {cuisines.map((cuisine, index) => (
                        <div key={index} className="col-3 col-lg-6 col-xl-3">
                            <div className="card-dinout-categories text-center">
                                <Link href="#">
                                    <div className="categoriesImg">
                                        <Image src={ImageDinoutCategories1} alt={cuisine} />
                                    </div>
                                    <p>{cuisine}</p>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Categories;
