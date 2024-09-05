import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import style from './DailyActivity.module.css';
const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '8',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '9',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: '10',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const DailyActivity = () => {
  return (
    <div className={style.dailyActivity}>
      <div className={style.titles}>
        <p>Activité quotidienne</p>
        <div className={style.indicators}>
          <p className={style.poid}>Poids (kg)</p>
          <p className={style.calorie}>Calories brûlées (kCal)</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            vertical={false} 
            stroke="#9B9EAC" 
            />
          <XAxis 
          dataKey="name"
          tickLine={false}
          stroke="#9B9EAC" 

          />
          {/* Définir deux ticks pour les deux lignes horizontales */}
          <YAxis
            ticks={[0, 5000]}
            orientation="right"
            tickLine={false}
            stroke="#9B9EAC" 
            axisLine={false}
          />
          <Tooltip />
          <Bar
            barSize={7}
            dataKey="pv"
            fill="#8884d8"
          // activeBar={<Rectangle fill="pink" stroke="blue" />} 
          />
          <Bar
            barSize={7}
            dataKey="uv" fill="#82ca9d"

          // activeBar={<Rectangle fill="gold" stroke="purple" />} 

          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default DailyActivity
