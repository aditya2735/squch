"use client";
import React, { useEffect } from "react";

import Loader from "@/components/common/core/Loader";
import Show from "@/components/common/core/Show";
import ErrorComponent from "@/components/common/core/ErrorComponent";

import Image from "next/image";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getAllMartCategory } from "@/store/features/Mart/MartCategory/categoryThunk";



const Category: React.FC = () => {

  const dispatch = useAppDispatch();
  const { categories, loading, error } = useAppSelector((state) => state.martCategory);

  useEffect(() => {
    dispatch(getAllMartCategory("grocery"));
  }, [dispatch]);

  return (

    <Show when={!loading} fallback={<Loader />}>
      <Show
        when={!error}
        fallback={<ErrorComponent retryFunction={() => dispatch(getAllMartCategory("grocery"))} />}
      >
        <div className="categories-container">
          {
            categories.map((category, index) => (
              <div key={index} className="sec-mart-product pb-4 pb-md-5">
                <div className="section-heading">
                  <h2 className="heading-title m-0">
                    {category.categoryName}
                  </h2>
                </div>

                {/* Subcategories */}
                <div className="row gx-2 gx-md-3">
                  {category.SubCategories.map((subCategory, subIndex) => (
                    <div key={subIndex} className="col-xl-2 col-lg-3 col-md-4 col-4">
                      <Link href="" className="card-white">
                        <div className="prod-thumb">
                          <Image
                            src={subCategory.image}
                            width={150}
                            height={150}
                            alt={subCategory.name}
                          />
                        </div>
                        <p>{subCategory.name}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </Show>
    </Show>
  );
};

export default Category;
