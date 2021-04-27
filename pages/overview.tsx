import Head from 'next/head'
import { useState } from 'react';
import OverviewSection from '../components/OverviewSection'
import styles from '../styles/Home.module.css'

export default function Overview() {
  const [level, setLevel] = useState(0);

  return (
    <div className={styles.container}>
      <OverviewSection level={level}></OverviewSection>
      <button onClick={() => setLevel(1)}>set</button>
    </div>
  )
}
