import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import style from './Performance.module.css';
import usePerformance from '../../hooks/usePerformance';

const Performance  = () => {
  const performance = usePerformance();
  // const data = [
  //   {
  //     subject: 'Intensité',
  //     A: 120,
  //     B: 110,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Vitesse',
  //     A: 98,
  //     B: 130,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Force',
  //     A: 86,
  //     B: 130,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Endurance',
  //     A: 99,
  //     B: 100,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Energie',
  //     A: 85,
  //     B: 90,
  //     fullMark: 150,
  //   },
  //   {
  //     subject: 'Cardio',
  //     A: 65,
  //     B: 85,
  //     fullMark: 150,
  //   },
  // ];
 


  const kinds = [
    "Intensité",
    "Cardio",
    "Energie",
    "Endurance",
    "Force",
    "Vitesse",
  ];
  

// Transforms performance data into a format suitable for RadarChart.
const performanceData = kinds.map((kind, index) => {
  return { kind, value: performance?.data?.[index]?.value };
});

//+add l'ordre des kind est faux
  // if (!performance || !kinds || !values) {
  if (!performance) {
    return <div>Loading...</div>;
  }
  return (

      <div className={style.intensity}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" 
        data={performanceData}>

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
