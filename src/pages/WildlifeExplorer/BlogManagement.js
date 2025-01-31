import React, { useState, useEffect, useRef } from "react";
import TableView from "../../components/TableView";
import AuditLabel from "../../components/AuditLabel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlus, faRefresh, faSave, faSearch, faUpload, faTimes, faImage, faVideo, fas, faLeaf, faDownload } from '@fortawesome/free-solid-svg-icons';
import ImagePreview from "../../components/ImagePreview";
import Loader from "../../components/Loader";
import { WildlifeBody } from "../../components/WildlifeBody";

const BlogManagement = () => {

    const columns = [
        { key: 'title', title: 'Title' },
        { key: 'author', title: 'Author' },
        { key: 'isFeatured', title: 'Featured' },
    ];

    let Images = [
        { _id: 1, url: 'https://drive.google.com/thumbnail?id=1xyKldfIW6qslZ0b8F_Vr_qL7-L3cH8-g', img_name: 'Amazon', is_video: true },
        { _id: 1, url: 'https://drive.google.com/thumbnail?id=1wra_AFWtDId57_sVnMyWxvOTbLWeAt-w', img_name: 'black-tailed-prairie-dog', is_video: false },
        { _id: 1, url: 'https://drive.google.com/thumbnail?id=1xyKldfIW6qslZ0b8F_Vr_qL7-L3cH8-g', img_name: 'Tropical Rainforest', is_video: false },
        { _id: 1, url: 'https://drive.google.com/thumbnail?id=1JF6dpUC0AsZlO9MLZEBqh7_RmjfvKReg', img_name: 'Ror Deer', is_video: false },
        { _id: 1, url: 'https://drive.google.com/thumbnail?id=1HpCpCRRhHHh6trbMK5nan_yKkS2etvIz', img_name: 'Elephant', is_video: false },
        { _id: 1, url: 'https://drive.google.com/thumbnail?id=1jROtS8jXutmtp2QhrUL-g7gChLUgcDwF', img_name: 'Lion', is_video: false },
        { _id: 1, url: 'https://drive.google.com/thumbnail?id=1gHVU9KruYksqyV454GkZlsZnAMUj-V4Y', img_name: 'Deer', is_video: false },
    ];

    const [showLoading, setShowLoading] = useState(false);
    const [tableData, setTableData] = useState([]);
    const [showImagePreview, setShowImagePreview] = useState(false);
    const fileInputRef = useRef(null);
    const [blogsData, setBlogsData] = useState({
        title: "",
        author: "",
        content: "",
        summary: "",
        tags: [],
        publishedDate: null,
        updatedDate: null,
        image: null,
        video: null,
        views: 0,
        likes: 0,
        isFeatured: true,
        modifiedBy: "Jhon",
        modifiedOn: new Date(),
        isEdit: false
    });
    const token = localStorage.getItem("token");
    useEffect(() => {

        const fetchBlogs = async () => {

            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}` // Attach token
                }
            };

            try {
                setShowLoading(true);
                const res = await fetch("http://localhost:5001/api/blogs/", options);
                let response = await res.json();
                response = response.map((item) => (item.isFeatured === true ? { ...item, isFeatured: 'Yes' } : { ...item, isFeatured: 'No' }))
                console.log("Fecthing Blog data :", response);
                setTableData(response);
            } catch (ex) {
                console.error("Error fetching blog data: ", ex);
            }
            finally {
                setShowLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const clearForm = () => {
        setBlogsData({
            _id: null,
            title: "",
            author: "",
            content: "",
            summary: "",
            tags: [],
            publishedDate: null,
            updatedDate: null,
            image: null,
            video: null,
            views: 0,
            likes: 0,
            isFeatured: true,
            modifiedBy: "Jhon",
            modifiedOn: new Date(),
            isEdit: false
        });

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogsData({ ...blogsData, [name]: value });
    };

    const onCheckChange = (e) => {
        console.log("onChekChange : ", e.target.name, e.target.checked)
        setBlogsData({ ...blogsData, [e.target.name]: e.target.checked });
    }

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        console.log("handleFileChange ", file);
        setBlogsData({ ...blogsData, [name]: file.name });
    };

    const handleMultiSelectChange = (e) => {
        const { name, options } = e.target;
        const selectedValues = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setBlogsData({ ...blogsData, [name]: selectedValues });
    };

    const onImageChange = (e, id) => {
        console.log("callback : ", e, id);
        setBlogsData({ ...blogsData, [e.name]: e._id });
        setShowImagePreview(false)
    }

    const onClose = () => {

    }

    const handleSave = async () => {
        if (!blogsData.title) {
            alert("Please enter Title");
        }
        else if (!blogsData.author) {
            alert("Please enter Author");
        }
        if (!blogsData.content) {
            alert("Please enter Content");
        }
        try {
            setShowLoading(true);
            const res = await fetch(`http://localhost:5001/api/blogs/saveblogs`, blogsData);
            const response = await res.json();
            console.log("Add new blog data :", response);
        } catch (ex) {
            console.error("Error add new blog data: ", ex);
        }
        finally {
            clearForm();
            setShowLoading(false);
        }

    };

    const fetchSelectedBlog = async (id) => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // Attach token
            }
        };
        try {
            setShowLoading(true);
            const res = await fetch(`http://localhost:5001/api/blogs/${id}`, options);
            const response = await res.json();
            console.log("Fecthing selected blog data :", response);
            setBlogsData({ ...response, isEdit: true });
        } catch (ex) {
            console.error("Error fetching selected blog data: ", ex);
        }
        finally {
            setShowLoading(false);
        }
    };

    const handleRowClick = (index, item) => {
        console.log("Row index : ", index, item);
        fetchSelectedBlog(item._id);
    }
    const handleFileUploadClick = () => {
        fileInputRef.current.click(); // Open file selector
    };
    const clickAction = (e) => {
        if (e) {
            let action = e.id;
            if (action === undefined && e.target) {
                action = e.target.name || e.target.id || '';
                e = undefined;
            }
            if (!action) {
                return;
            }

            try {
                if (e && e.stopPropagation) {
                    e.stopPropagation();
                    e.preventDefault();
                    e.nativeEvent.stopImmediatePropagation();
                }

            } catch (ex) { }

            if (action == "btn_new") {
                clearForm(e);
            }
            if (action == "btn_save") {
                handleSave();
            }
            if (action == "btn_clear") {
                clearForm(e);
            }
            if (action == "btn_close") {

            }
            if (action == "btn_img") {
                setShowImagePreview(true);
            }

        }
    }
    const renderForm = () => {
        return (
            <form>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="title">Title<span className="text-danger text-mandatory">*</span></label>
                        <input type="text" name="title" value={blogsData.title} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="author">Author<span className="text-danger text-mandatory">*</span></label>
                        <input type="text" name="author" value={blogsData.author} onChange={handleChange} />
                    </div>
                    <div className="col-md-12 mb-2">
                        <label className="form-label" htmlFor="content">Content<span className="text-danger text-mandatory">*</span></label>
                        <textarea name="content" value={blogsData.content} onChange={handleChange} ></textarea>
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="views">Views</label>
                        <input type="number" name="views" value={blogsData.views} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="likes">Likes</label>
                        <input type="number" name="likes" value={blogsData.likes} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="tags">Tags</label>
                        <input type="text" name="tags" value={blogsData.tags} onChange={handleChange} />
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="col-form-label pt-0" htmlFor="isFeatured">Is Featured</label>
                        <div className="col-md-3">
                            <input className={`form-check-input ms-2 wildlife-checkbox`} type="checkbox" name="isFeatured" checked={blogsData.isFeatured} onChange={onCheckChange} />
                        </div>
                    </div>
                    {/* <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="image">Image</label>
                        <div className="col-md-12 d-flex justify-content-between">
                            <div className="col-md-10 me-3">
                                <input type="file" name="image" onChange={handleFileChange} />
                            </div>
                            <div className="col-md-2 mt-2">
                                <button type="button" id="btn_img" className="wlidlife-btn me-1" onClick={(e) => clickAction({ id: 'btn_img' })}><FontAwesomeIcon icon={faImage} /></button>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="image">Image</label>
                        <div className="col-md-12 d-flex justify-content-between align-items-center">
                            <div className="col-md-10 me-3">
                                <input type="file" name="image" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                                <div className="p-2 border rounded bg-light d-flex justify-content-between align-items-center cursor-pointer" onClick={handleFileUploadClick} style={{ cursor: "pointer" }} >
                                    <span>{blogsData.image}</span>
                                    <FontAwesomeIcon icon={faUpload} className="ms-2" style={{ color: "rgb(85, 102, 102)" }} />
                                </div>
                            </div>
                            <div className="col-md-2 mt-2">
                                <button type="button" id="btn_img" className="wlidlife-btn me-1" onClick={() => fileInputRef.current.click()}>
                                    <FontAwesomeIcon icon={faImage} />
                                </button>
                            </div>
                            {/* <div className="col-md-2 mt-2">
                                <button type="button" id="btn_img" className="wlidlife-btn me-1" onClick={(e) => clickAction({ id: 'btn_img' })}><FontAwesomeIcon icon={faImage} /></button>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="video">Video</label>
                        <div className="col-md-12 d-flex justify-content-between">
                            <div className="col-md-10 me-3">
                                <input type="file" name="video" onChange={handleFileChange} />
                            </div>
                            <div className="col-md-2 mt-2">
                                <button type="button" id="btn_video" className="wlidlife-btn me-1" onClick={(e) => clickAction({ id: 'btn_video' })}><FontAwesomeIcon icon={faVideo} /></button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-12 mt-5 mb-2' hidden={false}>
                        <div className='col'>
                            <AuditLabel modifiedOn={blogsData.modifiedOn} modifiedBy={blogsData.modifiedBy} />
                        </div>
                    </div>
                </div>
            </form >
        );
    }

    return (
        <div className="wildlife-management">
            <div className="wildlife-window-header">
                <h5 className="wildlife-header-title text-truncate">Blogs</h5>
                <span className="wildlife-window-close" title="Close" onClick={(e) => onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
            </div>
            <WildlifeBody>
                <div className="window-content-area p-3 vh-100">
                    <div className="container-fluid h-100 p-0">
                        <div className="row h-100">
                            <div className="col-md-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-2">
                                            <label className="form-label" htmlFor="commonNameSrch">Title</label>
                                            <input type="text" className="form-control search-input" placeholder="Search Title..." name="commonNameSrch" id="commonNameSrch" />
                                        </div>
                                    </div>
                                    <div className="col-md-3 d-flex align-items-end">
                                        <div className="d-flex flex-row justify-content-start align-items-end h-100 w-100 p-2">
                                            <button type="button" name="btn_search" className="wlidlife-btn me-1" onClick={(e) => this.clickAction({ id: 'btn_search' })}> <FontAwesomeIcon icon={faSearch} /></button>
                                            <button type="button" name="btn_clear" className="wlidlife-btn" onClick={(e) => this.clickAction({ id: 'btn_clear' })}> <FontAwesomeIcon icon={faRefresh} /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <TableView data={tableData} columns={columns} rowCount={null} handleClick={handleRowClick} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 border-start">
                                {renderForm()}
                            </div>
                        </div>
                    </div>
                </div>
            </WildlifeBody>
            {/* Buttons Section */}
            <div className="wlidlife-btn-area container-fluid text-white d-flexZ align-items-center justify-content-center">
                <div className="row">
                    <div className="col">
                        <button type="button" id="btn_new" className="wlidlife-btn me-1" onClick={(e) => clickAction({ id: 'btn_new' })}><FontAwesomeIcon icon={faPlus} /> New</button>
                    </div>
                    <div className="col-auto">
                        <button type="button" id="btn_save" className="wlidlife-btn me-1" onClick={(e) => clickAction({ id: 'btn_save' })}><FontAwesomeIcon icon={faSave} />Save</button>
                        <button type="button" id="btn_clear" className="wlidlife-btn me-1" onClick={(e) => clickAction({ id: 'btn_clear' })}><FontAwesomeIcon icon={faRefresh} /> Clear</button>
                        <button type="button" id="btn_close" className="wlidlife-btn me-1" onClick={(e) => clickAction({ id: 'btn_close' })}><FontAwesomeIcon icon={faClose} /> Close</button>
                    </div>
                </div>
            </div>

            {showImagePreview && <ImagePreview onClose={() => { setShowImagePreview(false) }} images={Images} callback={onImageChange} title="Blogs/Image" />}

            {showLoading && <Loader>Loading</Loader>}
        </div>
    );
};

export default BlogManagement;