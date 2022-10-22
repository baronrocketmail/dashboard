import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainDataGrid from "./MainDataGrid";

export default function Home() {
  return (
    <div>
        <h1>cybernetic stream</h1>
      <MainDataGrid/>
    </div>
  )
}


