import style from './Home.module.css'
import '../../App.css'
import AverageSessions from '../../components/AverageSessions/AverageSessions'

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
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
