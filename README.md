# Tutorial
https://www.youtube.com/watch?v=a6Xs2Ir40OI

#### Extensions
- ES7 React/Redux Snipets which gave us:
    - _rfce shortcut to create react functional component
- Tailwind CSS Intelli Sense

#### Packages
- Next JS with Tailwind CSS example
```npx create-next-app -e with-tailwindcss .```
- (@tailwindcss/forms)[https://github.com/tailwindlabs/tailwindcss-forms] (to over ride default form elements)
  - ```
    npm install @tailwindcss/forms
    // tailwind.config.js
      plugins: [
        require('@tailwindcss/forms'),
      ]
    ```
- Tailwind-scrollbar
  - ``` 
    npm install --save-dev tailwind-scrollbar
    plugins: [
      require('tailwind-scrollbar'),
    ],
    ```
- Tailwind-scrollbar-hide
  -```
  npm install tailwind-scrollbar-hide
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
  ```
- Hero Icons (developed by the team at Tailwind)
  - ```npm install @heroicons/react```
- (Faker.js)[https://github.com/marak/Faker.js/] Generate massive amounts of fake data in the brower and node.js
  - ``` npm i faker ```


#### Tips and Tricks
- flex-shrink-0 => to prevent images shrinking
- custom utility class navBtn in the global.css file
- animate-pulse
- place cursor at end of function eg. useEffect and then hit CTRL + Space to import quickly
- use ctrl + K + F to format more often!
- we enables tailwind mode: 'jit' which allows us to do things like this: p-[1.5px] called Arbitrary values
- <p className="w-14 text-xs truncate"></p> which is cool
- div>h3 to create a ```<div><h3></h3></div>```
- The ! in JavaScript, also called “bang operator"

59.30
2.20.20

#### Next Auth - Beta v4
[https://next-auth.js.org/getting-started/upgrade-v4]
[https://next-auth.js.org/getting-started/example]
``` npm i dotenv ```
``` require('dotenv').config(); ```

#### Firebase
(console.firebase.google.com)[https://console.firebase.google.com/?pli=1]
```npm i firebase```
1. register web app
2. copypasta config into firebase.js
3. add getApps and getApp bacause of next js's ssr we need to impliment a "singleton pattern" ```const app = !getApps().length ? initializeApp(firebaseConfig) : getApps();```
4. Prepare DB ```const db = getFirestore();```
5. Install helpers 
  - import { getFirestore } from "firebase/firestore"
  - import { getStorage } from "firebase/storage"
6. Initilise storage ```const storage = getStorage();```
7. In order to use this outside of the firebase config we need to explicitly export them (which means epxort more than 1 thing) ```export { app, db, storage};```
8. Go over to Build>Authentication>getstarted>google>enable
9. Web SDK configuration and copy ID and Secret
10. cloud.google.com > console

### Darkmode
[https://invertase.io/blog/tailwind-dark-mode]

### Recoil instead of Redux
(recoiljs)[https://recoiljs.org/]
```npm i recoil```
Wrap MyApp in the RecoilRoot
We make a Atom or a Slice to store different portions of the sotre eg. users or modals... so its not a jumbled mess

### Headless UI for our modal
```npm i @headlessui/react```
```//modal.jsx
import { Dialog, Transition } from "@headlessui/react"
```
3.55.00 - modal onClose - super powerful

### Todo
- Connect up csrf tokens for email login with next auth
- Figure out how to persist dark mode setting