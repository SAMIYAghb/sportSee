
import style from './Error.module.css'

const Error = () => {
  return (
    <div className={style.error}>
      {/* <div className={style.errorTitle}>404</div> */}
      <p className={style.error}>
        404! La page que vous demandez n&apos;existe pas.
      </p>
      
    </div>
  )
}

export default Error
