import "./index.css";

const Loader = ({ children }) => {
    return (
        <div className="loader-overlay">
            <p className="loading">
                <span className="loading-text">{children}</span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </p>
        </div>

        // <div className="wildlife-overlay">
        //     <div className="wildlife-loader" >
        //         < img src="assets/images/loader.png" alt="" width="80px" ></img >
        //         <span className="wildlife-loading-text">{children}</span>
        //     </div >
        // </div >
    );
};

export default Loader;
