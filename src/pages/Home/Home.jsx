import { useOutletContext } from 'react-router-dom'
import '../../App.css'
import calorie from '../../assets/icon-calorie.png'
import glucide from '../../assets/icon-carbohydrate.png'
import lipide from '../../assets/icon-lipid.png'
import proteine from '../../assets/icon-protein.png'
import AverageSessions from '../../components/AverageSessions/AverageSessions'
import Card from '../../components/Card/Card'
import DailyActivity from '../../components/DailyActivity/DailyActivity'
import Hello from '../../components/Hello/Hello'
import Performance from '../../components/Performance/Performance'
import Score from '../../components/Score/Score'
import { useUserData } from './../../hooks/useUserData'
import style from './Home.module.css'
import usePerformance from '../../hooks/usePerformance'
import useDailyActivity from '../../hooks/useDailyActivity'
import useSession from '../../hooks/useSession'


//Using the useOutletContext hook to retrieve the userId from the context passed by BaseLayout.
const Home = () => {
  const { userId } = useOutletContext(); // Retrieve userId from context
  // console.log(userId)

  const useData = useUserData(userId);
  // console.log(useData.keyData);
  const values = useData?.keyData;
  // console.log(values);

  const { performance, error: performanceError } = usePerformance();
  const data = performance?.data || []; // Fallback to empty array if data is undefined

  const { dailyActivity, error: dailyActivityError } = useDailyActivity();
  // todayscore//12
  // score //18
  const userScore = (useData?.todayScore || useData?.score || 0) * 100;
  // Transform the single number into the required data format
  const scoreData = [
    { name: 'Score',
      value: userScore ,
    }
  ];

  const { sessions, error: sessionsError } = useSession();
  // Check if values is defined before rendering
  if (!values || !performance || !dailyActivity || !sessions) {
    return <div>Loading...</div>;
  }

  if (performanceError || dailyActivityError) {
    return <div>Error: {performanceError || dailyActivityError || sessionsError}</div>;
  }
  return (
    <div>
      <div className={style.mainContent}>
        <div className={style.container}>
          <Hello />
          <main>
            <div className={style.left}>
              <div className={style.rectangleeChart}>
                <DailyActivity dailyActivity={dailyActivity} />
              </div>
              <div className={style.squareCharts}>
                <AverageSessions sessions={sessions} />
                <Performance performance={performance} data={data} />
                <Score userScore={userScore} scoreData={scoreData} />
              </div>
            </div>
            <div className={style.right}>
              <Card
                icon={calorie}
                value={`${values.calorieCount} kCal`}
                iconTitle="Calories"
                name="Calories"
              />
              <Card
                icon={proteine}
                value={`${values.proteinCount} g`}
                iconTitle="Proteines"
                name="Proteines"
              />
              <Card
                icon={glucide}
                value={`${values.carbohydrateCount} g`}
                iconTitle="Glucides"
                name="Glucides"
              />
              <Card
                icon={lipide}
                value={`${values.lipidCount} g`}
                iconTitle="Lipides"
                name="Lipides"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
