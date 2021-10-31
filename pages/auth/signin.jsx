import { getProviders, signIn as SignIntoProvider } from "next-auth/react"
import Image from "next/image"

const logos = {
  GitHub: "/github.svg",
  Google: "/google.svg",
  Facebook: "/facebook.svg",
}

//Client
function signIn({ providers }) {
  console.log(Object.values(providers))
  return (
    <>
    <div className="p-10 h-screenHead flex flex-wrap justify-center items-center">
      <div className="w-3/6 xl:w-1/5 border border-gray-600 rounded">
          <div className="flex flex-wrap justify-center h-1/4 w-full">
            <div className="p-3 full-rounded">
              <Image
                  src={'/icon.svg'}
                  className="rounded-full"
                  width="180"
                  height="180"
                  layout="intrinsic"
                  objectFit="contain"
                  alt=""
              />
            </div>
          </div>

          <form 
                method="post"
                action="/api/auth/callback/credentials"
                className="w-full p-4"
          >
            {/* <input name="csrfToken" type="hidden" defaultValue={csrfToken} /> */}

            <label className="text-black font-semibold">
              Username:
              <input name="username" type="text" className="w-full mb-2 p-1 bg-transparent border border-gray-600 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
            </label>
           
            <label className="text-black font-semibold">
              Password:
              <input name="password" type="password" className="w-full mb-6 p-1 bg-transparent border border-gray-600 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"/>
            </label>

            <button 
              type="submit"
              className="w-full border border-gray-600 bg-black hover:border-green-600 hover:text-green-600 text-base text-white p-2 rounded"
            >
              Sign in
            </button>
          </form>

          <div className="flex items-center">
            <div className="h-px flex-1 bg-green-600"></div>
            <p className="pl-2 pr-2">or</p>
            <div className="h-px flex-1 bg-green-600"></div>
          </div>

          <div className="flex flex-wrap justify-center w-full p-4">
            {Object.values(providers).map((provider) => (
              <div key={provider.name} className="w-full">
                <button 
                  className="mt-2 p-2 border border-gray-600 rounded w-full text-center"
                  onClick={() => 
                    SignIntoProvider(provider.id, {callbackUrl: "/"})}
                  >
                  <img
                    className="h-5 w-5 inline-flex mr-2" 
                    src={logos[provider.name]} 
                    alt=""
                  />
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
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