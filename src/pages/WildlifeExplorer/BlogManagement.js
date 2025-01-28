import React, { useState } from "react";
import TableView from "../../components/TableView";
import AuditLabel from "../../components/AuditLabel";
import Loader from "../../components/Loader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlus, faRefresh, faSave, faSearch, faUpload, faTimes, faImage } from '@fortawesome/free-solid-svg-icons';
import ImagePreview from "../../components/ImagePreview";
const BlogManagement = () => {

    let data = [
        { title: 'Exploring the Majestic Wildlife of the Amazon Rainforest', author: 'John Doe', isFeatured: true },
        { title: '5 Endangered Species and How You Can Help', author: 'Jane Smith', isFeatured: false },
    ];

    data = data.map((item) => (item.isFeatured === true ? { ...item, isFeatured: 'Yes' } : { ...item, isFeatured: 'No' }))
    const columns = [
        { key: 'title', title: 'Title' },
        { key: 'author', title: 'Author' },
        { key: 'isFeatured', title: 'Featured' },
    ];
    let Images = [
        { _id: 1, url: 'https:/as', img_name: 'John Doe', is_video: true },
        { _id: 1, url: 'https:/as', img_name: 'Jane Smith', is_video: false },
        { _id: 1, url: 'https:/as', img_name: 'John Doe', is_video: true },
        { _id: 1, url: 'https:/as', img_name: 'Jane Smith', is_video: false },
        { _id: 1, url: 'https:/as', img_name: 'John Doe', is_video: true },
        { _id: 1, url: 'https:/as', img_name: 'Jane Smith', is_video: false },
    ];

    const [showImagePreview, setShowImagePreview] = useState(false);
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
        modifiedOn: new Date()
    });

    const clearForm = () => {
        setBlogsData({
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
            modifiedOn: new Date()
        });

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogsData({ ...blogsData, [name]: value });
    };

    const onCheckChange = (e) => {
        setBlogsData({ ...blogsData, [e.target.name]: e.target.checked });
    }

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setBlogsData({ ...blogsData, [name]: file });
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
                            <input className="form-check-input ms-2" type="checkbox" name="isFeatured" checked={blogsData.isFeatured} onChange={onCheckChange} style={{ width: "20px", height: "20px", backgroundColor: "#00796b" }} />
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="image">Image</label>
                        <div className="col-md-12 d-flex justify-content-between">
                            <div className="col-md-10 me-3">
                                <input type="file" name="image" onChange={handleFileChange} />
                            </div>
                            <div className="col-md-2">
                                <button type="button" id="btn_img" className="wlidlife-btn me-1" onClick={(e) => clickAction({ id: 'btn_img' })}><FontAwesomeIcon icon={faImage} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <label className="form-label" htmlFor="video">Video</label>
                        <input type="file" name="video" onChange={handleFileChange} />
                    </div>
                </div>
            </form >
        );
    }

    return (
        <div className="wildlife-management">
            <div className="row wildlife-card-header">
                <div className="col-md-6 d-flex justify-content-start">
                    <h4>Blogs</h4>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <button className="close-button" onClick={onClose}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
            </div>
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
                                    <TableView data={data} columns={columns} rowCount={null} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 border-start">
                            {renderForm()}
                        </div>
                        <div className='row mx-auto' hidden={false}>
                            <div className='col'>
                                <AuditLabel modifiedOn={blogsData.modifiedOn} modifiedBy={blogsData.modifiedBy} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        </div>
    );
};

export default BlogManagement;