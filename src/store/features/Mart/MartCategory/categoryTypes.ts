export const GET_ALL_MART_CATRGORIES = "martCategory/getAll";

export interface SubCategoryProps {
    subCategoryId: number;
    name: string;
    categoryId: number;
    image: string;
};

export interface CategoryProps {
    categoryId: number;
    categoryName: string;
    type: string;
    imageUrl: string;
    SubCategories: SubCategoryProps[];
};

export interface CategoryStateProps {
    loading: boolean;
    categories: CategoryProps[];
    error?: string | null;
};