import React, { useState } from "react";
import "../../styles/pages/WildlifeExplorer/SpeciesManagement.css";
import TableView from "../../components/TableView";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlus, faRefresh, faSave, faSearch } from '@fortawesome/free-solid-svg-icons';

const ThreatsManagement = () => {
    const data = [
        { commonName: "Lion", scientificName: "Panthera leo", status: "Endangered" },
        { commonName: "Elephant", scientificName: "Elephas maximus", status: "Vulnerable" },
    ];
    const columns = [
        { key: 'commonName', title: 'Common Name' },
        { key: 'scientificName', title: 'Scientific Name' },
        { key: 'status', title: 'Status' },
    ];

    const [speciesData, setSpeciesData] = useState({
        commonName: "",
        scientificName: "",
        habitat: "",
        diet: "",
        behavior: "",
        conservationStatus: "",
        threats: "",
        funFacts: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSpeciesData({ ...speciesData, [name]: value });
    };

    const handleFileChange = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        setSpeciesData({ ...speciesData, [name]: file });
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

            }
            if (action == "btn_clear") {
                clearForm(e);
            }
            if (action == "btn_close") {

            }

        }
    }

    const clearForm = () => {
        setSpeciesData({
            commonName: "",
            scientificName: "",
            habitat: "",
            diet: "",
            behavior: "",
            conservationStatus: "",
            threats: "",
            funFacts: "",
            image: null,
            video: null,
        });

    };

    const renderForm = () => {
        return (
            <form>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="commonName">Common Name *</label>
                        <input type="text" name="commonName" value={speciesData.commonName} onChange={handleChange} className="form-control" placeholder="Enter common name" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="scientificName">Scientific Name *</label>
                        <input type="text" name="scientificName" value={speciesData.scientificName} onChange={handleChange} className="form-control" placeholder="Enter scientific name" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="habitat">Habitat</label>
                        <input type="text" name="habitat" value={speciesData.habitat} onChange={handleChange} className="form-control" placeholder="Enter habitat" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="diet">Diet</label>
                        <input type="text" name="diet" value={speciesData.diet} onChange={handleChange} className="form-control" placeholder="Enter diet" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="conservationStatus">Conservation Status</label>
                        <select name="conservationStatus" value={speciesData.conservationStatus} onChange={handleChange} className="form-control">
                            <option value="">Select</option>
                            <option value="Least Concern">Least Concern</option>
                            <option value="Near Threatened">Near Threatened</option>
                            <option value="Vulnerable">Vulnerable</option>
                            <option value="Endangered">Endangered</option>
                            <option value="Critically Endangered">Critically Endangered</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="threats">threats</label>
                        <select name="threats" value={speciesData.threats} onChange={handleChange} className="form-control">
                            <option value="">Select</option>
                            <option value="Habitat destruction">Habitat destruction</option>
                            <option value="Pollution">Pollution</option>
                            <option value="Poaching">Poaching</option>
                            <option value="Climate Change">Climate Change</option>
                            <option value="Human-Wildlife Conflict">Human-Wildlife Conflict</option>
                        </select>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="behavior">Behavior</label>
                        <textarea name="behavior" value={speciesData.behavior} onChange={handleChange} className="form-control" placeholder="Enter behavior details"></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="funFacts">Fun Facts</label>
                        <textarea name="funFacts" value={speciesData.funFacts} onChange={handleChange} className="form-control" placeholder="Enter fun facts"></textarea>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="image">Upload Image</label>
                        <input type="file" name="image" onChange={handleFileChange} value={speciesData.image} className="form-control" />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label" htmlFor="video">Upload Video</label>
                        <input type="file" name="video" placeholder="Choose Video" value={speciesData.video} onChange={handleFileChange} className="form-control" />
                    </div>
                </div>
            </form>
        )
    }
    return (
        <div className="wildlife-management">
            <div className="wildlife-card-header">Species</div>
            <div className="window-content-area p-3 vh-100">
                <div className="container-fluid h-100 p-0">
                    <div className="row h-100">
                        <div className="col-md-5">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-2">
                                        <label className="form-label" htmlFor="commonNameSrch">Common Name</label>
                                        <input type="text" className="form-control search-input" placeholder="Search species..." name="commonNameSrch" id="commonNameSrch" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor='StatusSrch' className="form-label" >Status</label>
                                    <div className="col-md-4 mt-2">
                                        <input className="form-check-input ms-2" type="checkbox" id="StatusSrch" name="StatusSrch" checked={true} style={{ width: "20px", height: "20px", backgroundColor: "#00796b" }} />
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex align-items-end">
                                    <div className="d-flex flex-row justify-content-start align-items-end h-100 w-100 p-2">
                                        <button type="button" name="btn_search" className="wlidlife-btn me-1" onClick={(e) => this.clickAction({ id: 'btn_search' })}> <FontAwesomeIcon icon={faSearch} /></button>
                                        <button type="button" name="btn_clear" className="wildlife-btn" onClick={(e) => this.clickAction({ id: 'btn_clear' })}> <FontAwesomeIcon icon={faRefresh} /></button>
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
        </div>
    );
};
export default ThreatsManagement;
