import React from "react";
import Show from "@/components/common/core/Show";
import Loader from "@/components/common/core/Loader";
import ErrorComponent from "@/components/common/core/ErrorComponent";

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
