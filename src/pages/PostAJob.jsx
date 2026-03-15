import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
const PostAJob = () => {
  const [jobData, setJobData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    jobType: "",
    description: "",
    qualifications: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setJobData({
      ...jobData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !jobData.title ||
      !jobData.company ||
      !jobData.location ||
      !jobData.salary ||
      !jobData.jobType ||
      !jobData.description ||
      !jobData.qualifications
    ) {
      alert("Please fill all fields");
      return;
    }

    try {

      const payload = {
        jobTitle: jobData.title,
        companyName: jobData.company,
        location: jobData.location,
        salary: Number(jobData.salary),
        jobType: jobData.jobType,
        jobDescription: jobData.description,     
requiredQualifications: jobData.qualifications
      };

    //   console.log("Sending:", payload);

      const response = await axios.post(
        "https://internhouse-backend.vercel.app/jobs",
        payload
      );

      toast.success(`Job posted successfully!`);
    //   console.log("Response:", response.data);
    //   alert("Job posted successfully!");

      setJobData({
        title: "",
        company: "",
        location: "",
        salary: "",
        jobType: "",
        description: "",
        qualifications: ""
      });

    } catch (error) {
      console.error("Error posting job:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container my-3">

        <h3 className="mb-3">Post a Job</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-2">
            <label className="form-label">Job Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={jobData.title}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Company Name:</label>
            <input
              type="text"
              className="form-control"
              name="company"
              value={jobData.company}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Location:</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={jobData.location}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Salary:</label>
            <input
              type="number"
              className="form-control"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Job Type:</label>
            <select
              className="form-select"
              name="jobType"
              value={jobData.jobType}
              onChange={handleChange}
            >
              <option value="">Select Job Type</option>
              <option>Full-time (On-site)</option>
              <option>Part-time (On-site)</option>
              <option>Full-time (Remote)</option>
              <option>Part-time (Remote)</option>
            </select>
          </div>

          <div className="mb-2">
            <label className="form-label">Job Description:</label>
            <textarea
              className="form-control"
              rows="3"
              name="description"
              value={jobData.description}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="form-label">Required Qualifications:</label>
            <textarea
              className="form-control"
              rows="3"
              name="qualifications"
              value={jobData.qualifications}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post Job
          </button>

        </form>
      
    </div>
  );
};

export default PostAJob;