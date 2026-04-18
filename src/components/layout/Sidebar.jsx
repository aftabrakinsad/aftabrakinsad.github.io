import { profile } from "../../data/profile";
import {
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  DribbbleIcon,
} from "../icons/Icons";

/**
 * Sidebar — fixed left panel with profile photo, identity, socials, and quote.
 * On mobile, collapses into a horizontal bar above the main area.
 */
export function Sidebar() {
  const initials = profile.name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return (
    <aside className="sidebar panel" role="complementary">
      {/* Profile photo with dual orbital rings */}
      <div className="profile-photo">
        <div className="profile-photo-ring" aria-hidden="true" />
        <div className="profile-photo-ring-2" aria-hidden="true" />
        <div className="profile-photo-inner">
          {profile.photo ? (
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} />
          ) : (
            <div className="profile-photo-placeholder" aria-label={`Initials ${initials}`}>
              <span className="profile-photo-initials">{initials}</span>
            </div>
          )}
        </div>
      </div>

      <h2 className="profile-name">{profile.name}</h2>
      <p className="profile-role">{profile.role}</p>

      <div className="social-row">
        <a
          href={profile.social.github}
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubIcon />
        </a>
        <a
          href={profile.social.linkedin}
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href={profile.social.twitter}
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
        >
          <TwitterIcon />
        </a>
        <a
          href={profile.social.dribbble}
          className="social-btn"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Dribbble"
        >
          <DribbbleIcon />
        </a>
      </div>

      <div className="sidebar-quote">
        <blockquote>&ldquo;{profile.quote}&rdquo;</blockquote>
        <cite>— {profile.quoteAuthor}</cite>
      </div>
    </aside>
  );
}
