import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Loader from "../../components/Loader";

const ImagePreview = ({ onClose, images, callback, title }) => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setImageList([]);
        }, 5000);


        clearTimeout();
    }, [images]);

    const handleSubstring = (imgName) => {
        const maxLength = 22;
        if (imgName && imgName.length > maxLength) {
            return imgName.substring(0, maxLength) + "...";
        }
        return imgName;
    };

    // Return null if the modal is not visible
    // if (!show) return null;

    return (
        <div className="image-preview-overlay" onClick={onClose}>
            {(imageList && imageList.length > 0) ?
                <div
                    className="image-preview-container"
                    onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
                >
                    <div className="row wildlife-card-header">
                        <div className="col-md-6 d-flex justify-content-start">
                            <h4>{title}</h4>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                            <button className="close-button" onClick={onClose}><FontAwesomeIcon icon={faTimes} /></button>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {imageList.map((data, index) => (
                            <div className="col-md-3 p-2 mb-3" key={index}>
                                <div className="image-card" style={{ cursor: "pointer" }}>
                                    <div style={{ height: "150px" }} onClick={(e) => callback(e, data._id)}>
                                        {data.url ? (
                                            data.is_video ? (
                                                <video
                                                    controls
                                                    style={{
                                                        width: "100%",
                                                        height: "150px",
                                                        objectFit: "cover",
                                                    }}
                                                >
                                                    <source src={data.url} type="video/mp4" />
                                                </video>
                                            ) : (
                                                <img
                                                    src={data.url}
                                                    alt={data.img_name}
                                                    style={{
                                                        width: "100%",
                                                        height: "150px",
                                                        objectFit: "cover",
                                                    }}
                                                />
                                            )
                                        ) : null}
                                    </div>
                                    <div className="card-body text-center p-2">
                                        <p className="image-card-text">{handleSubstring(data.img_name)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> : (
                    // <div className="image-preview-container">
                    //     <p className="loading">
                    //         <p >Loading</p>
                    //         <span className="dot"></span>
                    //         <span className="dot"></span>
                    //         <span className="dot"></span>
                    //     </p>
                    // </div>
                    <Loader>Loading</Loader>
                )}
        </div>
    );
};

export default ImagePreview;
