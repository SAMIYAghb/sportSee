import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import style from './Performance.module.css';
import usePerformance from '../../hooks/usePerformance';

const Performance = () => {
  const performance = usePerformance();

  // const kinds = performance?.kind;
  const data = performance?.data;
  // console.log(performance?.kind, performance?.data,'from performance')

  const kindTranslations = {
    1: 'cardio',
    2: 'énergie',
    3: 'endurance',
    4: 'force',
    5: 'vitesse',
    6: 'intensité'
  }; 
// Map the kind description to the data
const transformedData = data?.map(item => {
  return {
    ...item,
    // kind: kinds?.[item.kind] // Replace numeric kind with description
    kind: kindTranslations[item.kind] 
  };
})?.reverse() || [];// Fallback to empty array if data is undefined

// console.log(transformedData);
 
  if (!performance) {
    return <div>Loading...</div>;
  }
  return (

    <div className={style.intensity}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%"
          data={transformedData}>

          <PolarGrid />

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

export default Performance 
