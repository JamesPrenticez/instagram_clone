import Head from 'next/head'
import Header from '../components/Header'
import Tools from '../components/Tools'

function tools() {
    return (
        <>
            <Head>
                <title>Self Regulator v2</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />
            <Tools />
            
        </>
    )
}

export default tools
