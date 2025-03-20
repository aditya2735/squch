import React from "react";
import Show from "@/components/common/core/Show";
import Loader from "@/components/common/core/Loader";
import ErrorComponent from "@/components/common/core/ErrorComponent";

interface DataLoaderProps<T> {
    loading: boolean;
    error: string | null | undefined;
    retryFunction: () => void;
    data: T | null;
    emptyComponent?: React.ReactNode;
    children: React.ReactNode;
}

const DataLoader = <T,>({ loading, error, retryFunction, data, emptyComponent, children }: DataLoaderProps<T>) => {

    const isEmpty =
        data == null ||
        data == undefined ||
        (Array.isArray(data) && data?.length === 0);

    return (
        <Show when={!loading} fallback={<Loader />}>
            <Show when={!error} fallback={<ErrorComponent retryFunction={retryFunction} />}>
                <Show when={!isEmpty && !loading} fallback={emptyComponent ?? <p>No Data Found</p>}>
                    {children}
                </Show>
            </Show>
        </Show>
    );
};

export default DataLoader;
