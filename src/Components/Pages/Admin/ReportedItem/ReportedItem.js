import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'


const ReportedItem = () => {
    const [reportData, setReportData] = useState([])

    axios.get('https://purana-bazar-server.vercel.app/report',{
        headers: {
            authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
    })
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

        fetch(`https://purana-bazar-server.vercel.app/reportdelete?id=${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // alert("report delete")
                toast.success('Report delete Successfully!')
            })

        fetch(`https://purana-bazar-server.vercel.app/fridgedelete?id=${id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                // alert("fridge delete")
            })

    }

    // useEffect(() => {
    //     fetch('https://purana-bazar-server.vercel.app/report')
    //         .then(res => res.json())
    //         .then(data => setReportData(data))
    //         .catch(error => console.log(error))
    // }, [reportData])

    return (
        <div className='min-h-screen mt-10'>
            <div className="bg-slate-200 px-10 rounded-2xl mb-10 max-w-screen-lg mx-auto min-h-screen py-10">
                <h2 className='font-bold text-2xl text-red-600 mb-5'>Report List</h2>
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
        </div>
    );
};

export default ReportedItem;