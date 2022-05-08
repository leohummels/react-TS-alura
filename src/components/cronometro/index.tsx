import Button from '../button'
import Relogio from './Relogio'
import style from './cronometro.module.scss'


export default function cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
        <Button>
            Começar
        </Button>
        </div>
    )
}