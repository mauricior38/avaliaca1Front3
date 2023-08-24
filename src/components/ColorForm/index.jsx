import styles from './colorForm.module.css';

export default function ColorForm({nome, cor}){
    return(

        <div className={styles.card} style={{backgroundColor: `${cor}`}}>
            <p>{nome}</p>
            <span>{cor}</span>
          </div>
    )
}