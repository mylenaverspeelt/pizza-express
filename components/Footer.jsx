import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            A MELHOR PIZZA DA CIDADE! ELEITA A MELHOR BORDA RECHEADA DE 2024 🥇
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Encontre nossas lojas  </h1>
          <p className={styles.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={styles.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={styles.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Funcionamento</h1>
          <p className={styles.text}>
            Segunda a Quinta
            <br /> 18:00 – 22:00
          </p>
          <p className={styles.text}>
            Sexta a Domingo
            <br /> 17:00 – 00:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
