// import { UserContext } from '../../context/UserContext';
import useSession from '../../hooks/useSession';
import style from './AverageSessions.module.css'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { useContext } from 'react';


const AverageSessions = () => {
    const sessions =useSession();
    // console.log(sessions)
//   const data = [
//     {
//       name: 'L',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'M',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'M',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'J',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'V',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'S',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'D',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     }]

  return (

    <div className={style.chartaverageSessions}>
      <p className={style.chartaverageTitle}>
        Durée moyenne des <br />
        sessions
      </p>
      <ResponsiveContainer width="90%" height="100%">
      <LineChart
          data={sessions}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 50,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={30}
            tickCount={7}
            tick={{ fill: "#fff", opacity: "0.4", fontSize: 10 }}
            padding={{ left: 10, right: 0 }}
            minTickGap={1}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            type="number"
            domain={["dataMin", "dataMax + 10"]}
            hide="true"
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="#FFF"
            strokeWidth={1}
            dot={false}
            activeDot={{
              fill: "#FFF",
              r: 5,
              strokeWidth: 10,
              strokeOpacity: 0.4,
            }}
          />
        </LineChart>
        {/* <LineChart 
        width={300} 
        height={100} 
        data={data}
        margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
        >
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}

            
            tick={{
              fill: 'rgba(255,255,255,0.6)',
              fontSize: '0.75rem',
            }}
            tickMargin={20}
          /> 
          <YAxis
            hide="true"
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="pv"
            stroke='rgba(255,255,255,0.6)'
            strokeWidth={2}
            dot={false} />
        </LineChart> */}


      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessions
