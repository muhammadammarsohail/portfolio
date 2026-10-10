import React, {useContext} from "react";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {aiEngineeringSection} from "../../portfolio";
import "./AIEngineering.scss";

export default function AIEngineering() {
  const {isDark} = useContext(StyleContext);

  if (!aiEngineeringSection.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="main ai-engineering-section" id="ai-engineering">
        <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
          {aiEngineeringSection.title}
        </h1>
        <p
          className={
            isDark
              ? "dark-mode subTitle ai-engineering-subtitle"
              : "subTitle ai-engineering-subtitle"
          }
        >
          {aiEngineeringSection.subtitle}
        </p>
        <div className="ai-capabilities-grid">
          {aiEngineeringSection.capabilities.map(capability => (
            <article
              className={
                isDark
                  ? "dark-mode ai-capability-card ai-capability-card-dark"
                  : "ai-capability-card ai-capability-card-light"
              }
              key={capability.title}
            >
              <i className={`${capability.icon} ai-capability-icon`}></i>
              <h2>{capability.title}</h2>
              <p>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>
    </Fade>
  );
}
