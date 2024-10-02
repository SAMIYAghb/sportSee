import { PropTypes } from 'prop-types';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import useSession from '../../hooks/useSession';
import CustomToolTip from './../CustomToolTip/CustomToolTip';
import style from './AverageSessions.module.css';



const AverageSessions = ({sessions}) => {
  // const { sessions, error } = useSession();
  // console.log(sessions)
  // Trouver la valeur maximale
  // const maxSession = sessions.reduce((max, session) => (session.sessionLength > max.sessionLength ? session : max), sessions[0]);
  // console.log(maxSession)

  // const maxDay = maxSession?.day;
  //  console.log(maxDay)

  // const maxLength = maxSession?.sessionLength;
  // Trouver l'index de la session avec la longueur maximale
  // const maxDayIndex = sessions.findIndex((session) => {
  //   return session.day === maxDay && session.sessionLength === maxLength;
  // });
  
  const TooltipWithMinutes = ({ active, payload }) => {
    const formatters = [(value) => `${value} min`];
    return <CustomToolTip active={active} payload={payload} formatters={formatters} tooltipClass={style.whiteTooltip} />;
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
            tick={{
              fill: "#fff",
              opacity: "0.4",
              fontSize: 10
            }}
            padding={{
              left: 10,
              right: 0
            }}
            minTickGap={1}
          />
          <Tooltip content={<TooltipWithMinutes />} cursor={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            type="number"
            domain={["dataMin", "dataMax + 10"]}
            hide={true}
          />

          {/* <ReferenceLine
            x={maxDayIndex}  // Utilisation du jour correspondant à la session avec la longueur maximale
            stroke="#ffffff"
            strokeDasharray="3 3"  // Optionnel, rend la ligne en pointillés
          /> */}

          <Line
            type="natural"
            dataKey="sessionLength"
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
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.3)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.4)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>


        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}
AverageSessions.propTypes = {
  sessions: PropTypes.array,
};
export default AverageSessions
