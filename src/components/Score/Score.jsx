import { PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
// import useScore from '../../hooks/useScore';
// import { useScore } from '../../hooks/useUserData';
import { PropTypes } from 'prop-types';
import style from './Score.module.css';

const Score = ({ userScore, scoreData}) => {
  
  // // Transform the single number into the required data format
  // const scoreData = [
  //   { name: 'Score',
  //     value: userScore ,
  //   }
  // ];

  
  return (
    <div className={style.score}>
      score
      <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
          innerRadius="70%"
          outerRadius="90%"
          barSize={8}
          startAngle={90}
          endAngle={450}
          data={scoreData}
          cx="55%"
          cy="40%"
        >
          <circle cx="55%" cy="40%" 
          fill="white" 
          r="70"></circle>
          <PolarAngleAxis
            type="number"
            dataKey="value"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar dataKey="value" cornerRadius={40} fill="#ff0000" />
          <text
            x="55%"
            y="35%"
            textAnchor="middle"
            className={style.scoreContainerScore}
          >
            {userScore}%
          </text>
          <text
            x="55%"
            y="46%"
            textAnchor="middle"
            fill={"#74798C"}
            className="scoreContainer-your"
          >
            de votre
          </text>
          <text
            x="55%"
            y="56%"
            textAnchor="middle"
            fill={"#74798C"}
            className="scoreContainer-your"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}
Score.propTypes = {
  userScore: PropTypes.number,
  scoreData: PropTypes.array,
};
export default Score





