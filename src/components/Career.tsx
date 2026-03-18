import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      {/* Education Section */}
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>Sandip University</h5>
              </div>
              <h3>2022 - 2026</h3>
            </div>
            <p>
              Gaining a strong foundation in Computer Science with a focus on
              Software Development, Algorithms, and Data Structures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Engineering</h4>
                <h5>Mahavir Polytechnic Nashik</h5>
              </div>
              <h3>2020 - 2022</h3>
            </div>
            <p>
              Completed foundational engineering coursework with a strong
              emphasis on practical implementation and technical concepts.
            </p>
          </div>
        </div>
      </div>

      {/* Experience and Certification Section */}
      <div className="career-container" style={{ marginTop: '100px' }}>
        <h2>
          Experience <span>&</span>
          <br /> Certification
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-stack Developer</h4>
                <h5>Edu-Vercity</h5>
              </div>
              <h3>Jan 2025 - March 2025</h3>
            </div>
            <p>
              Completed a Virtual Internship focusing on full-stack development. 
              Gained practical experience in building and deploying web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Designing</h4>
                <h5>NPTIL Solutions Nashik (On-site)</h5>
              </div>
              <h3>July 2022 - Aug 2022</h3>
            </div>
            <p>
              Worked on creating responsive and interactive web designs,
              focusing on modern UI/UX principles and semantic HTML/CSS structures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
