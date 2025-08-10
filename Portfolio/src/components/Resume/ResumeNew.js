import React from "react";
import Particle from "../Particle";
import resumePDF from "../../Assets/Resume_Content_writer.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function ResumeNew() {
  return (
    <div className="resume-section" style={{ minHeight: "100vh" }}>
      <Particle />
      <div className="resume-container" style={{ textAlign: "center" }}>
        <h1 className="project-heading">
          My <strong className="purple">Resume</strong>
        </h1>
        <p style={{ color: "white" }}>Download or view my resume here:</p>

        {/* Download Button */}
        <div style={{ margin: "20px 0" }}>
          <a href={resumePDF} download className="btn btn-primary">
            <AiOutlineDownload style={{ marginRight: "10px" }} />
            Download Resume (PDF)
          </a>
        </div>

        {/* Full-Page PDF Viewer */}
        <iframe
          src={resumePDF}
          title="Resume PDF"
          width="100%"
          height="90vh"
          style={{
            border: "none",
            marginTop: "20px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
            borderRadius: "10px",
          }}
        ></iframe>
      </div>
    </div>
  );
}

export default ResumeNew;
