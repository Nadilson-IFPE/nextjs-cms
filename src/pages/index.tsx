import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.scss";
import techsImage from "../../public/images/techs.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia - Nadilson</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível!</h1>
            <span>
              Uma plataforma com cursos que vão do zero ao profissional na
              prática, direto ao ponto e aplicando o que usamos no mercado de
              trabalho. 👊
            </span>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>

          <img src="/images/banner-conteudos.png" alt="Conteúdos" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e iOS</h2>
            <span>
              Você vai descobrir o jeito mais moderno de desenvolver apps
              nativos para iOS e Android, construindo aplicativos do zero ao
              avançado.
            </span>
          </section>

          <img
            src="/images/financasApp.png"
            alt="Conteúdos - desenvolvimento de apps"
          />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img
            src="/images/webDev.png"
            alt="Conteúdos - desenvolvimento de aplicativos web"
          />

          <section>
            <h2>Aprenda a criar sistemas web</h2>
            <span>
              Criar sistemas web, sites usando as tecnologias mais modernas e
              requisitadas pelo mercado.
            </span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image quality={100} src={techsImage} alt="Tecnologias" />
          <h2>
            Mais de <span className={styles.alunos}>15 mil</span> já levaram sua
            carreira ao próximo nível.
          </h2>
          <span>
            E você? Vai perder a chance de evoluir de uma vez por todas?
          </span>
          <a>
            <button>ACESSAR TURMA</button>
          </a>
        </div>
      </main>
    </>
  );
}
