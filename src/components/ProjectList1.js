import { useState } from "react";
import "./ProjectList1.css";
import "./ProjectList2.css";
import "./SearchFilter.css";
import Pagination from "./Pagination";

const ProjectList1 = () => {
  const [filter, setFilter] = useState("All"); // State to track the filter option
  const [currentPage, setCurrentPage] = useState(1); // State to track the current page
  const projectsPerPage = 6; // Number of projects to display per page

  const projects = [
    {
      title: "Project Alpha",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 50,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "29 Dec 2022",
      image: "img1@2x.png",
    },
    {
      title: "Vimeo Rebranding",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 75,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "24 Dec 2022",
      image: "img6@2x.png",
    },
    {
      title: "Official Content Partner",
      status: "Finished",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 100,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "12 Dec 2022",
      image: "img7@2x.png",
    },
    {
      title: "Website Redesign",
      status: "Unfinished",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 25,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "21 Oct 2022",
      image: "img8@2x.png",
    },
    {
      title: "Promotion Partner",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 75,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "21 Oct 2022",
      image: "img9@2x.png",
    },
    {
      title: "Internal CMS Tools",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 50,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "21 Oct 2022",
      image: "img10@2x.png",
    },

    // ----------------------------------------------------

    {
      title: "Vimeo Rebranding",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 75,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "24 Dec 2022",
      image: "img6@2x.png",
    },
    {
      title: "Official Content Partner",
      status: "Finished",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 100,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "12 Dec 2022",
      image: "img7@2x.png",
    },
    {
      title: "Website Redesign",
      status: "Unfinished",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 25,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "21 Oct 2022",
      image: "img8@2x.png",
    },
    {
      title: "Promotion Partner",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 75,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "21 Oct 2022",
      image: "img9@2x.png",
    },
    {
      title: "Project Alpha",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 50,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "29 Dec 2022",
      image: "img1@2x.png",
    },

    {
      title: "Project Alpha",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 50,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "29 Dec 2022",
      image: "img1@2x.png",
    },
    {
      title: "Vimeo Rebranding",
      status: "In Progress",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 75,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "24 Dec 2022",
      image: "img6@2x.png",
    },
    {
      title: "Official Content Partner",
      status: "Finished",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 100,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "12 Dec 2022",
      image: "img7@2x.png",
    },
    {
      title: "Website Redesign",
      status: "Unfinished",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel hendrerit ipsum...",
      progress: 25,
      members: ["img2@2x.png", "img3@2x.png", "img4@2x.png", "img5@2x.png"],
      dueDate: "21 Oct 2022",
      image: "img8@2x.png",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.status === filter);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <div className="body-main">
      <div className="search-filter1">
        <div className="tabs1">
          <div className="tab6">
            <div
              className={filter === "All" ? "active text68" : "text68"}
              onClick={() => setFilter("All")}
            >
              All Project
            </div>
          </div>
          <div className="tab6">
            <div
              className={filter === "Not Started" ? "active text69" : "text69"}
              onClick={() => setFilter("Not Started")}
            >
              Not Started
            </div>
          </div>
          <div className="tab6">
            <div
              className={filter === "In Progress" ? "active text69" : "text69"}
              onClick={() => setFilter("In Progress")}
            >
              In Progress
            </div>
          </div>
          <div className="tab6">
            <div
              className={filter === "Finished" ? "active text69" : "text69"}
              onClick={() => setFilter("Finished")}
            >
              Finished
            </div>
          </div>
          <div className="tab6">
            <div
              className={filter === "Unfinished" ? "active text69" : "text69"}
              onClick={() => setFilter("Unfinished")}
            >
              Unfinished
            </div>
          </div>
        </div>
      </div>

      <div className="project-list4">
        {currentProjects.map((project) => (
          <div className="project-card6" key={project.id}>
            <div className="header6">
              <img className="img-icon32" alt="" src={project.image} />
              <div className="label-action6">
                <div className="status6">
                  <div
                    className={`text73 ${
                      project.status === "Finished" ? "finished-status" : ""
                    }`}
                  >
                    {project.status}
                  </div>
                </div>
                <img
                  className="fi-sr-menu-dots-vertical-icon4"
                  alt=""
                  src="/fisrmenudotsvertical3.svg"
                />
              </div>
            </div>
            <div className="desc6">
              <div className="text74">{project.title}</div>
              <div className="text75">{project.description}</div>
            </div>
            <div className="progress18">
              <div className="label6">
                <div className="text76">Progress</div>
                <b
                  className={`text77 ${
                    project.status === "Finished" ? "finished-status" : ""
                  }`}
                >
                  {`${project.progress}%`}
                </b>
              </div>
              <div className="progress19">
                <div className="progress20">
                <div className="progress-bar" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>
            </div>
            <div className="members-status6">
              <div className="list6">
                {project.members.map((member, index) => (
                  <img className="img-icon33" alt="" src={member} key={index} />
                ))}
                {project.members.length > 4 && (
                  <div className="more6">
                    <div className="text73">+{project.members.length - 4}</div>
                  </div>
                )}
              </div>
              <div className="due-date6">
                <img
                  className="fi-sr-menu-dots-vertical-icon4"
                  alt=""
                  src="/fisrcalendar5.svg"
                />
                <div className="dec-20223">{project.dueDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProjects.length / projectsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProjectList1;
