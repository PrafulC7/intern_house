import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import axios from "axios";

const JobDetails = () => {
          const [jobsData, setJobsData] = useState([]);
              const [loading, setLoading] = useState(true);
          const {id} = useParams()
    // const jobDetail = jobsData.find(job=>job._id == id)
    useEffect(() => {
  const fetchJobs = async () => {
    try {
      const response = await axios.get(`https://internhouse-backend.vercel.app/jobs/${id}`);
      setJobsData(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
    finally {
        setLoading(false);
      }
  };

  fetchJobs();
}, []);
    
  return (
               <div className="container">
              <h3 className="my-2">{jobsData.jobTitle}</h3>
         <div className="col-12">
            <div className="card p-3 mb-4">
  <div className="card-body">
    <p className="card-subtitle mb-2"><strong>Company name:</strong> {jobsData.companyName}</p>
    <p className="card-subtitle mb-2"><strong>Location:</strong> {jobsData.location}</p>
    <p className="card-subtitle mb-2"><strong>Job Type:</strong> {jobsData.jobType}</p>
    <p className="card-subtitle mb-2"><strong>Description:</strong> {jobsData.jobDescription}</p>
    <p className="card-subtitle mb-2"><strong>Qualifications:</strong> {jobsData.requiredQualifications}</p>
    
  </div>
</div>
         </div>
       
</div>
  )
}

export default JobDetails