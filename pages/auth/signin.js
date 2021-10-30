import { getProviders, signIn as SignIntoProvider } from "next-auth/react"

//Client
function signIn({ providers }) {
    return (
        <>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => SignIntoProvider(provider.id)}>
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </>
    )
}

//Server
export async function getServerSideProps(context) {
    const providers = await getProviders()
    return {
      props: { providers },
    }
  }
  

export default signIn

//https://www.youtube.com/watch?v=a6Xs2Ir40OI 3.03.20
// https://next-auth.js.org/configuration/pages