import Loader from "react-loader-spinner";
import "./styles.css";

const LoaderComp = () => {
  return (
    //used to display the loader when the api is fetching data
    <div className="app">
      <Loader
        type="TailSpin"
        color="black"
        height={100}
        width={100}
        timeout={1000}
      />
    </div>
  );
};
export default LoaderComp;
