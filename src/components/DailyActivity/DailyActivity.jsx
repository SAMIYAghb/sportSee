import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import style from './DailyActivity.module.css';
import useDailyActivity from './../../hooks/useDailyActivity';
import { PropTypes } from 'prop-types';



const DailyActivity = () => {

    const dailyActivity = useDailyActivity();
    // console.log(dailyActivity.sessions)


    // Transformez les données
    const transformedData = dailyActivity?.sessions?.map((session, index) => ({
        // days: session?.day,
        day: index + 1,
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
            axisLine={true}
            stroke="#9B9EAC"
            tickLine={false}
            tickMargin={20}
            tickCount={7}
            dataKey="day"
          />
          <YAxis
          tickCount={4}
            yAxisId="kilogram"
            type="number"
            orientation="right"
            axisLine={false}
            tickLine={false}
            dataKey="weights"
            stroke="#9B9EAC"
            domain={["dataMin -5", "dataMax +15"]}
            interval="preserveStartEnd" // Assure que les ticks sont bien répartis entre la valeur min et max
          />
          {/* 74  82 pour le 12 */}
          {/* 67  71 pour le 18 */}
          <YAxis
          // tickCount={3}
            yAxisId="calories"
            type="number"
            domain={["dataMin -160", "dataMax +15"]}
            hide
          />
          <Tooltip content={<CustomTooltip />} />
          
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