import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

const IndexPage = () => {
	return (
		<>
      <Head>
        <title>Self Regulator v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <Feed />
        <Modal />
    </>
	);
};

export default IndexPage;