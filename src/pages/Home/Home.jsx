import style from './Home.module.css'
import '../../App.css'
import AverageSessions from '../../components/AverageSessions/AverageSessions'
import Card from '../../components/Card/Card'
import calorie from '../../assets/icon-calorie.png'
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
            <AverageSessions />
            <Card 
              icon = {calorie}
              value = "200 klmml"
              iconTitle = "calorie" 
              name = "calorie ghtfft"
              />
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
