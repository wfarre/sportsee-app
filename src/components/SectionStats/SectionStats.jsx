import { ReactComponent as CaloryIcon } from "./icons/calory-icon.svg";
import { ReactComponent as LipidIcon } from "./icons/lipid-icon.svg";
import { ReactComponent as ProteinIcon } from "./icons/protein-icon.svg";
import { ReactComponent as CarbIcon } from "./icons/carb-icon.svg";
import PropTypes from "prop-types";

import ChartBar from "../Charts/BarChart/BarChart";
import CurveChart from "../Charts/CurveChart/CurveChart";
import ChartRadar from "../Charts/ChartRadar/ChartRadar";
import formateNumber from "../../utils/formateDate";
import RoundedBar from "../Charts/RoundedBar/RoundedBar";

function SectionStats({ url, score, calory, protein, lipid, carb }) {
  return (
    <section className="section section--stats">
      <div className="container">
        <div className="container__graph">
          <div className="container__graph__main">
            <ChartBar url={url} />
          </div>
          <div className="container__graph__extra">
            <CurveChart url={url} />
            <ChartRadar url={url} />
            <RoundedBar score={score} />
          </div>
        </div>

        <div className="container__stats stats">
          <div className="container__stats__item">
            <div className="icon-wrapper icon-wrapper--calory">
              <CaloryIcon />
            </div>
            <div className="container__stats__item__data">
              <h2 className="container__stats__item__data__figure">
                {formateNumber(calory)} kcal
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
                {formateNumber(protein)} g
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
                {formateNumber(carb)} g
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
                {formateNumber(lipid)} g
              </h2>
              <p className="container__stats__item__data__label">Lipides</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

SectionStats.propTypes = {
  lipid: PropTypes.number,
  protein: PropTypes.number,
  carbohydrate: PropTypes.number,
  calory: PropTypes.number,
};

export default SectionStats;
