# Tutorial
https://www.youtube.com/watch?v=a6Xs2Ir40OI

# Extensions
- ES7 React/Redux Snipets which gave us:
    - _rfce shortcut to create react functional component
- Tailwind CSS Intelli Sense

# Packages
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


# Tips and Tricks
- flex-shrink-0 => to prevent images shrinking
- custom utility class navBtn in the global.css file
- animate-pulse
- place cursor at end of function eg. useEffect and then hit CTRL + Space to import quickly
- use ctrl + F to format more often!
- we enables tailwind mode: 'jit' which allows us to do things like this: p-[1.5px] called Arbitrary values
- <p className="w-14 text-xs truncate"></p> which is cool

59.30