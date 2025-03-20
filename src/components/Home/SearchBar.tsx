import Image from "next/image";
import MicIcon from "../../public/images/mic.svg";

const SearchBar: React.FC = () => (
  <div className="search-container">
    <div className="location">
      <button className="btn btn-light d-flex align-items-center">
        <span className="icon-map">
          <Image src={"/images/location.svg"} alt="location icon" height={24} width={25} />
        </span>
        <span className="m-0">Location, City & Street</span>
      </button>
    </div>
    <div className="search-area">
      <div className="icon-search">
        <Image src={"/images/search-normal.svg"} alt="search icon" height={21} width={21} />
      </div>
      <input type="text" className="form-control" placeholder="Search anything..." />
      <button className="icon-mike btn">
        <Image src={"/images/mic.svg"} alt="mic icon" width={21} height={21} />
      </button>
    </div>
  </div>
);

export default SearchBar;
