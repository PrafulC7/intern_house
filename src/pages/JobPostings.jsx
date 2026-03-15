import React, { useState, useEffect } from "react";
import {Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const JobPostings = () => {
  const [jobsData, setJobsData] = useState([]);
    const [loading, setLoading] = useState(true);

     const [search, setSearch] = useState("")
  const navigate = useNavigate();
useEffect(() => {
  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:3000/jobs");
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

const deleteJob = async (jobId) => {
  try {
    await axios.delete(`https://internhouse-backend.vercel.app/jobs/${jobId}`);
    
    // remove job from UI
    setJobsData((prevJobs) =>
      prevJobs.filter((job) => job._id !== jobId)
    );
 toast.info(`Job deleted successfully!`);
  } catch (error) {
    console.log("Error deleting job:", error);
  }
};

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.length > 0) {
      navigate(`/jobs?search=${value}`);
    }
  };
  if (loading) return <h3>Loading...</h3>;
  return (
    <div className=" container my-2">
          {/* Search */}
              <form className="my-2 my-lg-0 w-md-50 w-sm-100">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search books"
                  value={search}
                  onChange={handleSearch}
                />
              </form> 
              <h2>All Jobs</h2>
              <div className="d-flex row">
              {jobsData.map((job) => (
         <div key={job._id} className="col-sm-12 col-md-5 col-lg-4">
            <div className="card p-3 mb-4">
  <div className="card-body">
    <h5 className="card-title">{job.jobTitle}</h5>
    <p className="card-subtitle mb-2"><strong>Company name:</strong> {job.companyName}</p>
    <p className="card-subtitle mb-2"><strong>Location:</strong> {job.location}</p>
    <p className="card-subtitle mb-2"><strong>Job Type:</strong> {job.jobType}</p>
    {/* <a href="#" className="card-link">Card link</a> */}
    {/* <a href="#" className="card-link">Another link</a> */}
    <Link to={`/jobs/${job._id}`} className="card-link btn btn-primary">
             See Details
            </Link>
    <button onClick={() => deleteJob(job._id)} className="card-link btn btn-danger">
             Delete
            </button>
  </div>
</div>
         </div>
        ))}
</div>
    </div>
  )
}

export default JobPostings