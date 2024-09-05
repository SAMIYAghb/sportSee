import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
import style from './Intensity.module.css';


const Intensity  = () => {
  const data = [
    {
      subject: 'Intensité',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Vitesse',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Force',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Endurance',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Energie',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Cardio',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  return (
    <div>
      <div className={style.intensity}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis 
          
          dataKey="subject" />
          
          <Radar name="Mike" dataKey="A" stroke="#FF0000" fill="#FF0000" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
    </div>
  )
}

export default Intensity 
