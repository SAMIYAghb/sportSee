import '../../App.css'
import style from './Home.module.css'
import AverageSessions from '../../components/AverageSessions/AverageSessions'
import calorie from '../../assets/icon-calorie.png'
import glucide from '../../assets/icon-carbohydrate.png'
import lipide from '../../assets/icon-lipid.png'
import proteine from '../../assets/icon-protein.png'
import Card from '../../components/Card/Card'
import DailyActivity from '../../components/DailyActivity/DailyActivity'
import Hello from '../../components/Hello/Hello'
import Performance from '../../components/Performance/Performance'
import Score from '../../components/Score/Score'
import useUserData from '../../hooks/useUserData'


const Home = () => {
  const useData = useUserData();
  // console.log(useData.keyData);
  const values = useData?.keyData;
  // console.log(values);

  // Check if values is defined before rendering
  if (!values) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div className={style.mainContent}>
        <div className={style.container}>
          <Hello/>
          <main>
            <div className={style.left}>
              <div className={style.rectangleeChart}>
                <DailyActivity />
              </div>
              <div className={style.squareCharts}>
                <AverageSessions />
                <Performance />
                <Score />
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
