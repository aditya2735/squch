import React from "react";
import Show from "@/components/common/Show";
import Loader from "@/components/common/Loader";
import ErrorComponent from "@/components/common/ErrorComponent";

interface DataLoaderProps {
    loading: boolean;
    error: string | null | undefined;
    retryFunction: () => void;
    children: React.ReactNode;
}

const DataLoader: React.FC<DataLoaderProps> = ({ loading, error, retryFunction, children }) => {
    return (
        <Show when={!loading} fallback={<Loader />}>
            <Show when={!error} fallback={<ErrorComponent retryFunction={() => { retryFunction() }} />}>
                {children}
            </Show>
        </Show>
    );
};

export default DataLoader;
