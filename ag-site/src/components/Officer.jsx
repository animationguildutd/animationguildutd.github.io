import React from "react";
import { FaLinkedinIn as LinkedinIcon } from "react-icons/fa";
import { FaGlobeAmericas as WebsiteIcon } from "react-icons/fa";
import { capitalize } from "lodash";

const PACKAGE_NAME = "officer-section-component";

const invisibleIcon = (<p style={{visibility:"hidden"}}><WebsiteIcon /></p>);
const Officer = ({
  firstName,
  lastName,
  position,
  linkedin,
  image,
  website
}) => (
  <section className={PACKAGE_NAME}>
    {image !== "" && (
      <img
        src={image}
        alt={firstName + " " + lastName}
        className="officer-image"
      />
    )}
    <div className="officer-information">
      <p className="position">{capitalize(position)}</p>
      <p className="name">
        {`${capitalize(firstName)} ${capitalize(lastName)}`}
      </p>
      <div className="officer-links">
        {linkedin && (
          <a
            className="linkedin-icon"
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
        )}
        {website && (
          <a
            className="website-icon"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WebsiteIcon />
          </a>
        )}
        {!website && !linkedin && invisibleIcon}
      </div>
    </div>
  </section>
);

export default Officer;
