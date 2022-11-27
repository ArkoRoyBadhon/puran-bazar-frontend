import React, { useEffect, useState } from 'react';
import axios from 'axios';


const ReportedItem = () => {
    const [reportData, setReportData] = useState([])

    axios.get('https://purana-bazar-server-arkoroybadhon.vercel.app/report')
        .then(function (response) {
            // handle success
            console.log(response.data);
            setReportData(response.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })

    const handleReportDelete = (id) => {

        fetch(`https://purana-bazar-server-arkoroybadhon.vercel.app/reportdelete?id=${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            alert("report delete")
        })

        fetch(`https://purana-bazar-server-arkoroybadhon.vercel.app/fridgedelete?id=${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            alert("fridge delete")
        })

    }

    // useEffect(() => {
    //     fetch('https://purana-bazar-server-arkoroybadhon.vercel.app/report')
    //         .then(res => res.json())
    //         .then(data => setReportData(data))
    //         .catch(error => console.log(error))
    // }, [reportData])

    return (
        <div className='min-h-screen'>
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