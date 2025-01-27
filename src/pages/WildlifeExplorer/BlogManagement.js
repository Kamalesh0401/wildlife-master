import React, { useState } from "react";
import TableView from "../../components/TableView";

const BlogManagement = () => {

    const data = [
        { commonName: 'Test', scientificName: 'John', status: 'true' },
        { commonName: 'Test 2 ', scientificName: '21', status: 'false' },
    ];

    const columns = [
        { key: 'commonName', title: 'Common Name' },
        { key: 'scientificName', title: 'Scientific Name' },
        { key: 'status', title: 'Status' },
    ];

    const [speciesData, setSpeciesData] = useState({
        commonName: "",
        scientificName: "",
        habitat: [],
        diet: "",
        behavior: "",
        conservationStatus: "",
        threats: [],
        funFacts: "",
        image: null,
        video: null,
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

    const handleMultiSelectChange = (e) => {
        const { name, options } = e.target;
        const selectedValues = Array.from(options)
            .filter(option => option.selected)
            .map(option => option.value);
        setSpeciesData({ ...speciesData, [name]: selectedValues });
    };

    return (
        <>
            <div className="row">
                <div className='col-md-4'>
                    <TableView data={data} columns={columns} rowCount={null} />
                </div>
                <div className='col-md-8'>
                    <form>
                        <div className="row">
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="GENM010_txt_Text">Common Name<span className="text-danger text-mandatory">*</span></label>
                                <input type="text" name="commonName" value={speciesData.commonName} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="scientificName">Scientific Name<span className="text-danger text-mandatory">*</span></label>
                                <input type="text" name="scientificName" value={speciesData.scientificName} onChange={handleChange} />
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="habitat">Habitat<span className="text-danger text-mandatory">*</span></label>
                                <select name="habitat" value={speciesData.habitat} onChange={handleMultiSelectChange} >
                                    <option value="">Select</option>
                                    <option value="Forests">Forests</option>
                                    <option value="Grasslands">Grasslands</option>
                                    <option value="Wetlands">Wetlands</option>
                                    <option value="Near large bodies of open water">Near large bodies of open water</option>
                                </select>
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="diet">Diet</label>
                                <select name="diet" value={speciesData.diet} onChange={handleChange}                >
                                    <option value="">Select</option>
                                    <option value="Herbivore">Herbivore</option>
                                    <option value="Carnivore">Carnivore</option>
                                    <option value="Omnivore">Omnivore</option>
                                    <option value="Piscivore">Piscivore</option>
                                </select>
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="behavior">Behavior<span className="text-danger text-mandatory">*</span></label>
                                <select name="behavior" value={speciesData.behavior} onChange={handleChange}                >
                                    <option value="">Select</option>
                                    <option value="Monogamous">Monogamous</option>
                                    <option value="Solitary">Solitary</option>
                                    <option value="Social">Social</option>
                                </select>
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="conservationStatus">Conservation Status</label>
                                <select name="conservationStatus" value={speciesData.conservationStatus} onChange={handleChange}                >
                                    <option value="">Select</option>
                                    <option value="Least Concern">Least Concern</option>
                                    <option value="Near Threatened">Near Threatened</option>
                                    <option value="Vulnerable">Vulnerable</option>
                                    <option value="Endangered">Endangered</option>
                                    <option value="Critically Endangered">Critically Endangered</option>
                                </select>
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="threats">Threats </label>
                                <select name="threats" multiple value={speciesData.threats} onChange={handleMultiSelectChange}                >
                                    <option value="Habitat destruction">Habitat destruction</option>
                                    <option value="Pollution">Pollution</option>
                                    <option value="Poaching">Poaching</option>
                                    <option value="Climate Change">Climate Change</option>
                                    <option value="Human-Wildlife Conflict">Human-Wildlife Conflict</option>
                                </select>
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="funFacts">Fun Facts </label>
                                <textarea name="funFacts" value={speciesData.funFacts} onChange={handleChange}                ></textarea>
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="image">Image</label>
                                <input type="file" name="image" onChange={handleFileChange} />
                            </div>
                            <div className="col-md-3 mb-2">
                                <label className="form-label" htmlFor="video">Video</label>
                                <input type="file" name="video" onChange={handleFileChange} />
                            </div>
                        </div>
                    </form >
                </div>
            </div>
        </>
    );
};

export default BlogManagement;