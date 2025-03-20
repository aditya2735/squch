import ClipLoader from "react-spinners/ClipLoader";
export const LoadingComp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
    <ClipLoader
      color="#35155D"
      loading={true}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
    </div>
  );
};
