import s from './Loader.module.css'
import ellipse from './ellipse.svg'

export const Loader = () => (
    <div className={s.loader}>
        <img src={ellipse} alt=""/>
    </div>
)

