import "./index.css";

const Loader = ({ children }) => {
    return (
        <div className="loader-overlay">
            {/* <div className="loader-container"> */}
            <p className="loading">
                <span className="loading-text">{children}</span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </p>
            {/* </div> */}
        </div>
    );
};

export default Loader;
