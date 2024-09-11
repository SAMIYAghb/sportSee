import '../../App.css'
import style from './Home.module.css'
// import AverageSessions from '../../components/AverageSessions/AverageSessions'
import calorie from '../../assets/icon-calorie.png'
import glucide from '../../assets/icon-carbohydrate.png'
import lipide from '../../assets/icon-lipid.png'
import proteine from '../../assets/icon-protein.png'
import Card from '../../components/Card/Card'
// import DailyActivity from '../../components/DailyActivity/DailyActivity'
import Hello from '../../components/Hello/Hello'
import Performance from '../../components/Performance/Performance'
import Score from '../../components/Score/Score'

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
                <Performance />
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
