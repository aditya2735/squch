"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CategoryProps } from "@/store/features/Mart/MartCategory/categoryTypes";
import { useRouter } from "next/navigation";


interface CategorySectionProps {
    categories: CategoryProps[]
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/home/mart/category');
    }

    return (
        <div className="sec-mart-product sec-gap">
            <div className="container">
                <div className="px-40">
                    {categories?.map((category, index) => (

                        category.SubCategories && category.SubCategories.length > 0 && (
                            <div key={index} className="mb-5" onClick={() => handleClick()}>
                                <div className="section-heading">
                                    <h2 className="heading-title m-0">{category.categoryName}</h2>
                                </div>
                                <div className="row gx-2 gx-md-3">
                                    {category.SubCategories.map((subCategory, subIndex) => (
                                        <div key={subIndex} className="col-xl-2 col-lg-3 col-md-4 col-4">
                                            <Link href="" className="card-white">
                                                <div className="prod-thumb">
                                                    <Image
                                                        src={subCategory.image}
                                                        width={120}
                                                        height={120}
                                                        alt={subCategory.name}
                                                    />
                                                </div>
                                                <p>{subCategory.name}</p>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategorySection;
