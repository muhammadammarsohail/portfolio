import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  const projectCategories = ["Professional Projects", "Personal Projects"];
  if (!bigProjects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          {projectCategories.map(category => (
            <section className="project-category" key={category}>
              <h2 className={isDark ? "dark-mode category-title" : "category-title"}>
                {category}
              </h2>
              <div className="projects-container">
                {bigProjects.projects
                  .filter(project => project.category === category)
                  .map((project, i) => (
                    <div
                      key={i}
                      className={
                        isDark
                          ? "dark-mode project-card project-card-dark"
                          : "project-card project-card-light"
                      }
                    >
                      <div className="project-detail">
                        <h5
                          className={
                            isDark ? "dark-mode card-title" : "card-title"
                          }
                        >
                          {project.projectName}
                        </h5>
                        <p
                          className={
                            isDark
                              ? "dark-mode card-subtitle"
                              : "card-subtitle"
                          }
                        >
                          {project.projectDesc}
                        </p>
                        {project.footerLink ? (
                          <div className="project-card-footer">
                            {project.footerLink.map((link, linkIndex) => (
                              <span
                                key={linkIndex}
                                className={
                                  isDark
                                    ? "dark-mode project-tag"
                                    : "project-tag"
                                }
                                onClick={() => openUrlInNewTab(link.url)}
                              >
                                {link.name}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Fade>
  );
}
