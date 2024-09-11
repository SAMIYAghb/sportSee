import style from './Home.module.css'
import '../../App.css'
// import AverageSessions from '../../components/AverageSessions/AverageSessions'
import Card from '../../components/Card/Card'
import calorie from '../../assets/icon-calorie.png'
import proteine from '../../assets/icon-protein.png'
import glucide from '../../assets/icon-carbohydrate.png'
import lipide from '../../assets/icon-lipid.png'
// import DailyActivity from '../../components/DailyActivity/DailyActivity'
import Score from '../../components/Score/Score'
import Intensity from '../../components/Intensity/Intensity';
import Hello from '../../components/Hello/Hello'

const Home = () => {
  return (
    <div>

      <div className={style.mainContent}>
        <div className={style.container}>
          <Hello/>
          <main>
            <div className={style.left}>
              <div className={style.rectangleeChart}>
                {/* <DailyActivity /> */}
              </div>
              <div className={style.squareCharts}>
                {/* <AverageSessions /> */}
                <Intensity />
                <Score />
              </div>
            </div> 
            <div className={style.right}>
                <Card
                  icon={calorie}
                  value="200 klmml"
                  iconTitle="calorie"
                  name="calorie ghtfft"
                />
                <Card
                  icon={proteine}
                  value="200 klmml"
                  iconTitle="calorie"
                  name="calorie ghtfft"
                />
                <Card
                  icon={glucide}
                  value="200 klmml"
                  iconTitle="calorie"
                  name="calorie ghtfft"
                />
                <Card
                  icon={lipide}
                  value="200 klmml"
                  iconTitle="calorie"
                  name="calorie ghtfft"
                />

            </div>
          </main>
        </div> 
      </div>
    </div>
  )
}

export default Home
