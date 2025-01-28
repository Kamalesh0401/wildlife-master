// import React, { Component } from 'react';
// class TableView extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentPage: 1,
//             sortColumn: '',
//             sortDirection: 'asc'
//         };
//     }

//     handleClick = (index) => {
//         console.log("handleClick : ", index);
//     }

//     render() {
//         const { columns, data } = this.props;
//         return (
//             <div>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             {columns.map(column => (
//                                 <th key={column.key}>
//                                     {column.title}
//                                     {this.state.sortColumn === column.key && (
//                                         <i className={`bi bi-caret-${this.state.sortDirection === 'asc' ? 'up' : 'down'}`}></i>
//                                     )}
//                                 </th>
//                             ))}
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data && data.map((item, index) => (
//                             <tr key={index} onClick={this.handleClick(index)}>
//                                 {columns.map(column => (
//                                     <td key={column.key}>{item[column.key]}</td>
//                                 ))}
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }
// }
// export default TableView;


import React, { Component } from 'react';
import "./index.css";

class TableView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            sortColumn: '',
            sortDirection: 'asc',
            rowsPerPage: 5,
        };
    }

    handleSort = (columnKey) => {
        const { sortColumn, sortDirection } = this.state;
        const newDirection = sortColumn === columnKey && sortDirection === 'asc' ? 'desc' : 'asc';

        this.setState({
            sortColumn: columnKey,
            sortDirection: newDirection,
        });
    };

    // Pagination logic
    handlePageChange = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    };

    // Get sorted and paginated data
    getProcessedData = () => {
        const { data } = this.props;
        const { sortColumn, sortDirection, currentPage, rowsPerPage } = this.state;

        let processedData = [...data];

        // Sorting
        if (sortColumn) {
            processedData.sort((a, b) => {
                if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
                if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
                return 0;
            });
        }

        // Pagination
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        processedData = processedData.slice(startIndex, endIndex);

        return processedData;
    };

    render() {
        const { columns, data, rowCount } = this.props;
        const { currentPage, rowsPerPage, sortColumn, sortDirection } = this.state;

        const processedData = this.getProcessedData();
        const totalPages = Math.ceil(data.length / rowsPerPage);

        return (
            <>
                <table className="table table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            {columns.map(column => (
                                <th
                                    key={column.key}
                                    onClick={() => this.handleSort(column.key)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {column.title}
                                    {sortColumn === column.key && (
                                        <span className={`ml-2 bi bi-caret-${sortDirection === 'asc' ? 'up' : 'down'}`}></span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {processedData.length > 0 ? (
                            processedData.map((item, index) => (
                                <tr
                                    key={index}
                                    onClick={() => this.handleClick(index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {columns.map(column => (
                                        <td key={column.key}>{item[column.key]}</td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={columns.length} className="text-center">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                {rowCount && <div className="pagination-container">
                    <button
                        className="btn btn-sm btn-secondary"
                        disabled={currentPage === 1}
                        onClick={() => this.handlePageChange(currentPage - 1)}
                    >
                        Previous
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            className={`btn btn-sm ${currentPage === index + 1 ? 'btn-primary' : 'btn-light'}`}
                            onClick={() => this.handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        className="btn btn-sm btn-secondary"
                        disabled={currentPage === totalPages}
                        onClick={() => this.handlePageChange(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>}
            </>
        );
    }
}

export default TableView;
