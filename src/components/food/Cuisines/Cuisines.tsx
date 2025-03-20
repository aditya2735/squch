import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

// TODO: Need to remove the static data

const data = [
    {
        "subCategoryId": 1,
        "name": "Fresh Fruits",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407672-fruits.jpeg",
        "createdAt": "2025-01-29T11:44:27.000Z",
        "updatedAt": "2025-01-29T11:44:27.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 2,
        "name": "Dairy & Bread",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407331-dairy.jpeg",
        "createdAt": "2025-01-29T11:44:27.000Z",
        "updatedAt": "2025-01-29T11:44:27.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 7,
        "name": "Leafy Vegetables",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407672-fruits.jpeg",
        "createdAt": "2025-01-30T17:42:12.000Z",
        "updatedAt": "2025-01-30T17:42:12.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 10,
        "name": "Breads & Cakes",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407331-dairy.jpeg",
        "createdAt": "2025-01-30T17:42:12.000Z",
        "updatedAt": "2025-01-30T17:42:12.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 1,
        "name": "Fresh Fruits",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407672-fruits.jpeg",
        "createdAt": "2025-01-29T11:44:27.000Z",
        "updatedAt": "2025-01-29T11:44:27.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 2,
        "name": "Dairy & Bread",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407331-dairy.jpeg",
        "createdAt": "2025-01-29T11:44:27.000Z",
        "updatedAt": "2025-01-29T11:44:27.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 7,
        "name": "Leafy Vegetables",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407672-fruits.jpeg",
        "createdAt": "2025-01-30T17:42:12.000Z",
        "updatedAt": "2025-01-30T17:42:12.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 10,
        "name": "Breads & Cakes",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407331-dairy.jpeg",
        "createdAt": "2025-01-30T17:42:12.000Z",
        "updatedAt": "2025-01-30T17:42:12.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 1,
        "name": "Fresh Fruits",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407672-fruits.jpeg",
        "createdAt": "2025-01-29T11:44:27.000Z",
        "updatedAt": "2025-01-29T11:44:27.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 2,
        "name": "Dairy & Bread",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407331-dairy.jpeg",
        "createdAt": "2025-01-29T11:44:27.000Z",
        "updatedAt": "2025-01-29T11:44:27.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 7,
        "name": "Leafy Vegetables",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407672-fruits.jpeg",
        "createdAt": "2025-01-30T17:42:12.000Z",
        "updatedAt": "2025-01-30T17:42:12.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 10,
        "name": "Breads & Cakes",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407331-dairy.jpeg",
        "createdAt": "2025-01-30T17:42:12.000Z",
        "updatedAt": "2025-01-30T17:42:12.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 1,
        "name": "Fresh Fruits",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407672-fruits.jpeg",
        "createdAt": "2025-01-29T11:44:27.000Z",
        "updatedAt": "2025-01-29T11:44:27.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 2,
        "name": "Dairy & Bread",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407331-dairy.jpeg",
        "createdAt": "2025-01-29T11:44:27.000Z",
        "updatedAt": "2025-01-29T11:44:27.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 7,
        "name": "Leafy Vegetables",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407672-fruits.jpeg",
        "createdAt": "2025-01-30T17:42:12.000Z",
        "updatedAt": "2025-01-30T17:42:12.000Z",
        "categoryId": 1
    },
    {
        "subCategoryId": 10,
        "name": "Breads & Cakes",
        "categoryID": 1,
        "image": "https://squchstorageaccount.blob.core.windows.net/squchcontainer/uploads/vendor/mart/categories/1740986407331-dairy.jpeg",
        "createdAt": "2025-01-30T17:42:12.000Z",
        "updatedAt": "2025-01-30T17:42:12.000Z",
        "categoryId": 1
    }
]

const Cuisines = () => {

    return (
        <div className="categories-container">
            <div className="sec-mart-product pb-4 pb-md-5">
                <div className="row gx-2 gx-md-3">
                    {data.map((subCategory, subIndex) => (
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
        </div>
    );
}

export default Cuisines