import { ReactComponent as IconYoga } from "./icons/meditate-icon.svg";
import { ReactComponent as IconSwim } from "./icons/swim-icon.svg";
import { ReactComponent as IconCycle } from "./icons/cycle-icon.svg";
import { ReactComponent as IconDumbell } from "./icons/dumbell-icon.svg";

function SideNav() {
  return (
    <aside className="vertical-nav">
      <div className="copyright">
        <p className="copyright__text">Copyright, SportSee 2020</p>
      </div>

      <div className="activity-navbar">
        <div className="activity-navbar__item">
          <div className="icon-wrapper">
            <IconYoga className="vertical-nav-icon vertical-nav-icon--yoga" />
          </div>
        </div>

        <div className="activity-navbar__item">
          <div className="icon-wrapper">
            <IconSwim className="vertical-nav-icon vertical-nav-icon--move" />
          </div>
        </div>

        <div className="activity-navbar__item">
          <div className="icon-wrapper">
            <IconCycle className="vertical-nav-icon vertical-nav-icon--move" />
          </div>
        </div>

        <div className="activity-navbar__item">
          <div className="icon-wrapper">
            <IconDumbell className="vertical-nav-icon vertical-nav-icon--strength" />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideNav;
