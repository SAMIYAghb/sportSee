import style from './Home.module.css'
import '../../App.css'
import AverageSessions from '../../components/AverageSessions/AverageSessions'
import Card from '../../components/Card/Card'
import calorie from '../../assets/icon-calorie.png'
import DailyActivity from '../../components/DailyActivity/DailyActivity'
import Score from '../../components/Score/Score'
import Intensity from './../../components/Intensity/Intensity ';
const Home = () => {
  return (
    <div>

      <div className={style.mainContent}>
        <div className={style.container}>
          <div className={style.heading}>
            <h1>Bonjour <span>Thomas</span> </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <main>
            <div className={style.left}>
              <div className={style.rectangleeChart}>
                <DailyActivity />
              </div>
              <div className={style.squareCharts}>
                <AverageSessions />
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
                  icon={calorie}
                  value="200 klmml"
                  iconTitle="calorie"
                  name="calorie ghtfft"
                />
                <Card
                  icon={calorie}
                  value="200 klmml"
                  iconTitle="calorie"
                  name="calorie ghtfft"
                />
                <Card
                  icon={calorie}
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
