// import { UserContext } from '../../context/UserContext';
import useSession from '../../hooks/useSession';
import style from './AverageSessions.module.css'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import { useContext } from 'react';
// import CustomToolTip from './CustumToolip';
import CustomToolTip from './../CustomToolTip/CustomToolTip';
import { PropTypes } from 'prop-types';


const AverageSessions = () => {
  const sessions = useSession();
  // console.log(sessions)

  const TooltipWithMinutes = ({ active, payload }) => {
    const formatters = [(value) => `${value} min`];
    return <CustomToolTip active={active} payload={payload} formatters={formatters} />;
  };
  TooltipWithMinutes.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.object),
  }
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
            left: -10,
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
          <Tooltip content={<TooltipWithMinutes tooltipClass={style.whiteTooltip} cursor={false} />} cursor={false} />
          {/* <Tooltip content={<CustomToolTip />} cursor={false} /> */}
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
            // stroke="#FFF"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              fill: "#FFF",
              r: 4,
              strokeWidth: 10,
              strokeOpacity: 0.4,
            }}
          />

          <defs>
            <linearGradient
              id="colorUv"
              x1="0%"
              y1="0"
              x2="100%"
              y2="0"
            >
              <stop
                offset="0%"
                stopColor="rgba(255, 255, 255, 0.3)"
              />
              <stop
                offset="20%"
                stopColor="rgba(255, 255, 255, 0.4)"
              />
              <stop
                offset="40%"
                stopColor="rgba(255, 255, 255, 0.5)"
              />
              <stop
                offset="60%"
                stopColor="rgba(255, 255, 255, 0.6)"
              />
              <stop
                offset="100%"
                stopColor="rgba(255, 255, 255, 1)"
              />
            </linearGradient>
          </defs>

        </LineChart>



      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessions
