import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import style from './Performance.module.css';
import PropTypes from 'prop-types';

const Performance = ({ data }) => {

  return (

    <div className={style.intensity}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%"
          data={data}
          >

          <PolarGrid gridType="polygon" radialLines={false} />

          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            axisLine={false}
            tickSize={10}
            stroke="#fff"
            fontSize={9}
          />

          <Radar
            dataKey="value"
            stroke="#FF0000"
            fill="#FF0000"
            fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
Performance.propTypes = {
  data: PropTypes.array
};
export default Performance 
