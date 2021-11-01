import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'



export default function Home() {

  return (
    <>
      <Head>
        <title>Self Regulator v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header   */}
      <Header />
      {/* Feed   */}
      <Feed />
      {/* Modal   */}
    </>
  )
}
