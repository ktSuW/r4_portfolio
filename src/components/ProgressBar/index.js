import styles from "./style.module.css";

export default function ProgressBar({language, percent}) {



  return (
    <section className={styles.progressBar}>
      <p >
        {language}
        <span>{percent}</span>%
      </p>
      <div style={{width : percent + "%"}} />
    </section>
  );
}



