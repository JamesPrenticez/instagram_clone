import '../styles/global.css'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return (
  <SessionProvider session={sessoion}>
    <Component {...pageProps} />
  </SessionProvider>
  )
}

export default MyApp
