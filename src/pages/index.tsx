import Head from 'next/head'
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Carne Escolar App</title>
      </Head>
      <div className={styles.modal}>
        <h1>Bem-Vindo ao Ambiente Escolar</h1>
        <form>
          <p>Escolha o que deseja fazer</p>
          <section>
            <button>Criar Carnê</button>
          </section>
        </form>
      </div>
    </div>
  )
}
