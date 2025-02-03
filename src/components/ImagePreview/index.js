import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import Loader from "../../components/Loader";

const ImagePreview = ({ onClose, images, callback, title, file_dir }) => {
    const [imageList, setImageList] = useState([]);
    const token = localStorage.getItem("token");

    // useEffect(() => {
    //     setTimeout(() => {
    //         setImageList(images || []);
    //     }, 1000);


    //     clearTimeout();
    // }, [images]);

    useEffect(() => {
        const fetchImages = async () => {

            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            };

            try {
                const res = await fetch(`http://localhost:5001/api/files/${file_dir}`, options);
                let response = await res.json();
                setImageList(response)
            } catch (ex) {
                console.error("Error fetching Images: ", ex);
            }
            finally {
            }
        };

        fetchImages();
    }, []);

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
                            // <div className="col-md-3 p-2 mb-3" key={index}>
                            //     <div className="image-card" style={{ cursor: "pointer" }}>
                            //         <div style={{ height: "150px" }} onClick={(e) => callback(e, data._id)}>
                            //             {data.file_url ? (
                            //                 data.is_video ? (
                            //                     <video
                            //                         controls
                            //                         style={{
                            //                             width: "100%",
                            //                             height: "150px",
                            //                             objectFit: "cover",
                            //                         }}
                            //                     >
                            //                         <source src={data.file_url} type="video/mp4" />
                            //                     </video>
                            //                 ) : (
                            //                     <img
                            //                         src={data.file_url}
                            //                         alt={data.file_name}
                            //                         style={{
                            //                             width: "100%",
                            //                             height: "150px",
                            //                             objectFit: "cover",
                            //                         }}
                            //                     />
                            //                 )
                            //             ) : null}
                            //         </div>
                            //         <div className="card-body text-center p-2">
                            //             <p className="image-card-text">{handleSubstring(data.file_name)}</p>
                            //         </div>
                            //     </div>
                            // </div>

                            <div className="col-md-3 p-2 mb-3" key={index}>
                                <div className="card" style={{ cursor: "pointer" }} onClick={(e) => callback(e,  data)}>
                                    <div id={data.img_dir + data.img_srl} style={{ height: "150px" }} >
                                        {data.file_url ? (
                                            data.is_video ?
                                                (<video controls style={{ width: "100%", height: "150px", objectFit: "cover" }}>
                                                    <source src={data.file_url} type="video/mp4" />
                                                </video>) :
                                                <img src={data.file_url} className="card-img-top" style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                                        ) : null}
                                    </div>
                                    <div className="card-body text-center p-2">
                                        <p className="card-text">{handleSubstring(data.file_name)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div> : (<Loader>Loading</Loader>)}
        </div>
    );
};

export default ImagePreview;

//<img src="https://drive.google.com/thumbnail?id=YOUR_FILE_ID" alt="image description">

// https://drive.google.com/thumbnail?id=1JF6dpUC0AsZlO9MLZEBqh7_RmjfvKReg

// https://drive.google.com/thumbnail?id=1HpCpCRRhHHh6trbMK5nan_yKkS2etvIz

// https://drive.google.com/thumbnail?id=1jROtS8jXutmtp2QhrUL-g7gChLUgcDwF

// https://drive.google.com/thumbnail?id=1gHVU9KruYksqyV454GkZlsZnAMUj-V4Y

//https://drive.google.com/file/d/1JF6dpUC0AsZlO9MLZEBqh7_RmjfvKReg/view?usp=sharing