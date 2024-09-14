// import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
// import style from './DailyActivity.module.css';
// import useDailyActivity from './../../hooks/useDailyActivity';



// const DailyActivity = () => {

//     const dailyActivity = useDailyActivity();
//     // console.log(dailyActivity.sessions)


//     // Transformez les données
//     const transformedData = dailyActivity?.sessions?.map(session => ({
//         days: session?.day,
//         weights: session?.kilogram,
//         calories: session?.calories
//     }));

//     if (!dailyActivity) {
//         return <div>Loading...</div>;
//     }
//     return (
//         <div className={style.dailyActivity}>
//             <div className={style.titles}>
//                 <p>Activité quotidienne</p>
//                 <div className={style.indicators}>
//                     <p className={style.poid}>Poids (kg)</p>
//                     <p className={style.calorie}>Calories brûlées (kCal)</p>
//                 </div>
//             </div>

//             <ResponsiveContainer width="100%" height="90%">
//                 <BarChart
//                     width={500}
//                     height={300}
//                     data={transformedData}
//                     margin={{
//                         top: 30,
//                         right: 30,
//                         left: 20,
//                         bottom: 5,
//                     }}
//                 >
//                     <CartesianGrid
//                         vertical={false}
//                         strokeDasharray="3 3"
//                         stroke="#9B9EAC"
//                     />
//                     <XAxis
//                         dataKey="days"
//                         axisLine={false}
//                         tickLine={false}
//                         stroke="#9B9EAC"
//                         tickCount={7}
//                         tickMargin={20}
//                     />
//                     {/* Définir deux ticks pour les deux lignes horizontales */}
//                     {/* <YAxis
                    
//                         ticks={[69, 70, 71]}
//                         orientation="right"
//                         tickLine={false}
//                         stroke="#9B9EAC"
//                         axisLine={false}
//                     /> */}
//                     <YAxis
//             yAxisId="kilogram"
//             type="number"
//             orientation="right"
//             axisLine={false}
//             tickLine={false}
//             dataKey="kilogram"
//             stroke="#9B9EAC"
//             domain={["dataMin -5", "dataMax +15"]}
//           />
//           <YAxis
//             yAxisId="calories"
//             type="number"
//             domain={["dataMin -160", "dataMax +15"]}
//             hide
//           />
//                     <Tooltip />
//                     <Bar
//                         barSize={7}
//                         dataKey="weights"
//                         fill="#282D30"
// radius={[10, 10, 0, 0]}
//             yAxisId="kilogram"
//             name="Poids (kg)"
//                     // activeBar={<Rectangle fill="pink" stroke="blue" />} 
//                     />
//                     <Bar
//                         barSize={7}
//                         dataKey="calories"
//                         fill="#E60000"
// radius={[10, 10, 0, 0]}
//             yAxisId="calories"
// name="Calories brûlées (kCal)"
//                     // activeBar={<Rectangle fill="gold" stroke="purple" />} 

//                     />
//                 </BarChart>
//             </ResponsiveContainer>
//         </div>
//     )
// }

// export default DailyActivity










import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import style from './DailyActivity.module.css';
import useDailyActivity from './../../hooks/useDailyActivity';
import { PropTypes } from 'prop-types';



const DailyActivity = () => {

    const dailyActivity = useDailyActivity();
    // console.log(dailyActivity.sessions)


    // Transformez les données
    const transformedData = dailyActivity?.sessions?.map(session => ({
        days: session?.day,
        weights: session?.kilogram,
        calories: session?.calories
    }));

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
          return (
            <div className="barChart__toolTip">
              <p>{`${payload[0].value}kg`}</p>
              <p>{`${payload[1].value}Kcal`}</p>
            </div>
          );
        }
        return null;
      };
      CustomTooltip.propTypes = {
        active: PropTypes.bool,
        payload: PropTypes.arrayOf(
          PropTypes.shape({
            value: PropTypes.number,
          })
        ),
      };

    if (!dailyActivity) {
        return <div>Loading...</div>;
    }
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
          data={transformedData}
          barGap={8}
          barSize={7}
          margin={{
            top: 20,
            right: 0,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            axisLine={false}
            tickLine={false}
            tickMargin={20}
            tickCount={7}
            dataKey="day"
          />
          <YAxis
            yAxisId="kilogram"
            type="number"
            orientation="right"
            axisLine={false}
            tickLine={false}
            dataKey="weights"
            stroke="#9B9EAC"
            domain={["dataMin -5", "dataMax +15"]}
          />
          <YAxis
            yAxisId="calories"
            type="number"
            domain={["dataMin -160", "dataMax +15"]}
            hide
          />
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend
            iconType="circle"
            iconSize={8}
            align="right"
            verticalAlign="top"
            wrapperStyle={{
              top: 0,
              right: 80,
              marginBottom: "20px",
            }}
            formatter={(value) => (
              <span className="barChart__textColorLegend">{value}</span>
            )}
          /> */}
          <Bar
            barSize={7}
            dataKey="weights"
            name="Poids (kg)"
            fill="#282d30"
            radius={[10, 10, 0, 0]}
            yAxisId="kilogram"
          />
          <Bar
            barSize={7}
            dataKey="calories"
            name="Calories brûlées (kCal)"
            fill="#E60000"
            radius={[10, 10, 0, 0]}
            yAxisId="calories"
          />
        </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DailyActivity