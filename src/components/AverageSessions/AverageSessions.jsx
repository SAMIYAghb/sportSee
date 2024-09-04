import style from './AverageSessions.module.css'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const AverageSessions = () => {
  const data = [
    {
      name: 'L',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'M',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'M',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'J',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'V',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'S',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'D',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    }]

  return (

    <div className={style.chartaverageSessions}>
      <p className="chartaverage-sessions-title">
        Durée moyenne des <br />
        sessions
      </p>
      <ResponsiveContainer width="90%" height="80%">
        <LineChart width={300} height={100} data={data}>
          {/* <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: 'rgba(255,255,255,0.6)',
              fontSize: '0.75rem',
            }}
            tickMargin={20}
          /> */}
          {/* <YAxis
            hide="true"
          /> */}
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke='rgba(255,255,255,0.6)'
            strokeWidth={2}
            dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessions
