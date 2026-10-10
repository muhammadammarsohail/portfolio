import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  return (
    <div>
      <div className="container">
        <div
          className={
            talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
          }
        >
          <div className="diagonal-fill"></div>
          <div className="talk-card-title">{talkDetails.title}</div>
          <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

          <div className="card-footer-button-div">
            {talkDetails.slides_url ? (
              <a
                href={talkDetails.slides_url}
                target="_blank"
                rel="noopener noreferrer"
                className="talk-button"
              >
                {talkDetails.slides_label || "Slides"}
              </a>
            ) : null}
            {talkDetails.event_url ? (
              <a
                href={talkDetails.event_url}
                target="_blank"
                rel="noopener noreferrer"
                className="talk-button"
              >
                {talkDetails.event_label || "Event"}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
