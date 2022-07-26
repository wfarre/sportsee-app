import { ReactComponent as CaloryIcon } from "../assets/icons/calory-icon.svg";
import { ReactComponent as LipidIcon } from "../assets/icons/lipid-icon.svg";
import { ReactComponent as ProteinIcon } from "../assets/icons/protein-icon.svg";
import { ReactComponent as CarbIcon } from "../assets/icons/carb-icon.svg";

import ChartBar from "./Charts/BarChart";
import CurveChart from "./Charts/CurveChart";
import ChartRadar from "./Charts/ChartRadar";
import ChartRoundedBar from "./Charts/RoundBarChart";

function SectionStats(props) {
  return (
    <section className="section section--stats">
      <div className="container">
        <div className="container__graph">
          <div className="container__graph__main">
            <ChartBar url={props.url} />
          </div>
          <div className="container__graph__extra">
            <CurveChart url={props.url} />
            <ChartRadar url={props.url} />

            <ChartRoundedBar score={props.score} />
          </div>
        </div>

        <div className="container__stats stats">
          <div className="container__stats__item">
            <div className="icon-wrapper icon-wrapper--calory">
              <CaloryIcon />
            </div>
            <div className="container__stats__item__data">
              <h2 className="container__stats__item__data__figure">
                {props.calory} kcal
              </h2>
              <p className="container__stats__item__data__label">Calories</p>
            </div>
          </div>

          <div className="container__stats__item">
            <div className="icon-wrapper icon-wrapper--protein">
              <ProteinIcon />
            </div>
            <div className="container__stats__item__data">
              <h2 className="container__stats__item__data__figure">
                {props.protein} g
              </h2>
              <p className="container__stats__item__data__label">Protéines</p>
            </div>
          </div>

          <div className="container__stats__item">
            <div className="icon-wrapper icon-wrapper--carb">
              <CarbIcon />
            </div>
            <div className="container__stats__item__data">
              <h2 className="container__stats__item__data__figure">
                {props.carb} g
              </h2>
              <p className="container__stats__item__data__label">Glucides</p>
            </div>
          </div>

          <div className="container__stats__item">
            <div className="icon-wrapper icon-wrapper--lipid">
              <LipidIcon />
            </div>
            <div className="container__stats__item__data">
              <h2 className="container__stats__item__data__figure">
                {props.lipid} g
              </h2>
              <p className="container__stats__item__data__label">Lipides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionStats;
