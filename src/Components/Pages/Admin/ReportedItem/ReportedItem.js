import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ReportedItem = () => {
    const [reportData, setReportData] = useState([])

    // axios.get('http://localhost:5000/report')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response.data);
    //         setReportData(response.data);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })

    const handleReportDelete = (id) => {
        // fetch(`http://localhost:5000/reportdelete?id=${id}`, {
        //     method: 'DELETE'
        // })
        //     .then(res => res.json())
        //     .then(data => {

        //         alert('report has been deleted')
        //     })
        //     .catch(error => console.log(error))

        fetch(`http://localhost:5000/reportdelete?id=${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            alert("success")
        })

        // const res = fetch(`http://localhost:5000/reportdelete?id=${id}`, {
        //     method: 'DELETE',
        // })
        // const data = res.json()
        // return data;
    }

    useEffect(() => {
        fetch('http://localhost:5000/report')
            .then(res => res.json())
            .then(data => setReportData(data))
            .catch(error => console.log(error))
    }, [reportData])

    return (
        <div>
            <h2>this is reporteditems</h2>
            <table className='table w-3/5 mx-auto'>
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Company</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reportData?.map((report, i) => <tr key={i}>
                            <td>{report.name}</td>
                            <td>{report.company}</td>
                            <td>
                                <div onClick={() => handleReportDelete(report._id)} className="btn btn-error">delete</div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ReportedItem;