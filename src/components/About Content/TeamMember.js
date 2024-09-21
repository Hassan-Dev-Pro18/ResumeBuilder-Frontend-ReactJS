import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
  } from "react-icons/fa";

const TeamMember = ({ name, role, image, bio, socialLinks }) => {
    return (
      <div className="team-member">
        <img src={image} alt={name} className="team-member-image" />
        <h3 className="team-member-name">{name}</h3>
        <p className="team-member-role">{role}</p>
        <p className="team-member-bio">{bio}</p>
        <div className="team-member-social">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="instaHover"
          >
            <FaInstagram />
          </a>
          <a
            href={socialLinks.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="linkedInHover"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="facebookHover"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    );
  };
export default TeamMember;
