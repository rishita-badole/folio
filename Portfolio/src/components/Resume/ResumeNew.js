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
        <embed
          src={resumePDF}
          type="application/pdf"
          width="100%"
          height="900vh"
          style={{
            borderRadius: "10px",
            boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          }}
        />
      </div>
    </div>
  );
}

export default ResumeNew;
