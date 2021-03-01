import Head from 'next/head'
import React, { useState } from 'react';
import styles from '../styles/pages/Home.module.css';
import {Router, useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  const [schoolName, setSchoolName] = useState('');

  function handleMain(e) {
    e.preventDefault();
    if(schoolName === 'Escola Crescer') {
      router.push('/main');
    } else {
      alert("Preencha o campo com o nome da escola!");
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Carne Escolar App</title>
      </Head>
      <div className={styles.modal}>
        <h1>Bem-Vindo ao Ambiente Escolar</h1>
        <form>
          <p>Digite o nome da escola</p>
          <section>
            <input 
              type="text"
              placeholder="Ex.: Escola Crescer"
              onChange={((e) => setSchoolName(e.target.value))}
              required
            />

            <button onClick={handleMain}>
                Acessar {schoolName}
            </button>
          </section>
        </form>
      </div>
    </div>
  )
}
