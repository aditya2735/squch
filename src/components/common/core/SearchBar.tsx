import React, { useCallback, useEffect, useState } from 'react';
import Image from "next/image";
import ImageSearch from "../../../../public/images/icon-search.svg";
import ImageMicro from "../../../../public/images/icon-microphone.svg";

interface SearchbarProps {
    onSearch: (query: string) => void;
    placeHolder: string;
    debounceDelay?: number;
}

const SearchBar: React.FC<SearchbarProps> = ({
    onSearch,
    placeHolder,
    debounceDelay
}) => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [debouncedTerm, setDebouncedTerm] = useState<string>('');

    const handleSearch = async (query: string) => {
        console.log("searched");
        if (!query.trim()) return;
        onSearch(query);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, debounceDelay);

        return () => clearTimeout(timer);
    }, [searchTerm, debounceDelay, handleSearch]);

    useEffect(() => {
        if (debouncedTerm) {
            handleSearch(debouncedTerm);
        }
    }, [debouncedTerm]);

    return (
        <div className="searchbar mb-4">
            <div className="position-relative">
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeHolder}
                    value={searchTerm}
                    onChange={handleInputChange}
                    aria-label="Search bar"
                />
                <div className="position-absolute d-flex align-items-center">

                    <button
                        className="icon-button icon-search"
                        onClick={() => handleSearch(debouncedTerm)}
                        aria-label="Search"
                    >
                        <Image src={ImageSearch} alt="Search icon" width={24} height={24} />
                    </button>


                    {/* //TODO: Check later */}
                    <button
                        className="icon-button icon-micro"
                        aria-label="Voice search"
                    >
                        <Image src={ImageMicro} alt="Microphone icon" width={24} height={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;