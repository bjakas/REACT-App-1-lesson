# Vježba: Dependency management

Trajanje: 20min (do 19:30)


U postojeću React aplikaciju dodati sljedeće:

1. Instalirati packet nanoid i proučiti dokumentaciju.

2. Dodati paragraf u aplikaciju i ispisati:


"Your unique ID is " te rezultat poziva nanoid nakon toga (dakle dobiveni unique ID).


3. Formatirati datum dobiven kroz dayjs prema formatu "MMMM DD YYYY, HH:mm:ss"


BONUS:

Napravite git repozitorij od vaše aplikacije, dodajte ga na GitHub, i deployajte na Netlify :)

------------

# Vježba: Modules

Trajanje: 30min (do 21:00)


U postojeću React aplikaciju dodati sljedeće:


1. Dodajte modul random.js


2. U modulu random.js implementirajte funkciju za dohvaćanje nasumičnog imena iz niza imena. Funkcija neka se zove getRandomName().


3. U modulu random.js implementirajte funkciju za dohvaćanje nasumične boje iz niza boja. Funkcija neka se zove getRandomColor().


4. U modulu random.js dodajte default export konstante "RANDOM".


5. Modul random.js mora imati dva named exporta: getRandomName i getRandomColor


6. Importajte random.js modul u App.js i iskoristite getRandomName() i getRandomColor() funkcije da bi u paragrafu ispisali nasumično ime i boju. Importajte defaultni export i ispišite ga u zaseban paragraf.


BONUS:

Napravite git repozitorij od vaše aplikacije (ako niste), dodajte ga na GitHub (ako niste), i deployajte na Netlify :)


SAVJET:

Ako ne znate napraviti da se nasumično vadi element iz niza, razočarali ste me, ali za potrebe vježbe samo vratite neku vrijednost. I obavezno vježbajte :)

------------

# VJEŽBA na predavanju - helpers.js file izbrišemo i napravimo mapu helpers

## donji kod je kod koji ćemo rascjepkati

/* ne treba nam više jer smo napravili mapu s modulima

import * as dayjs from "dayjs";
import { nanoid } from "nanoid";

export function getCurrentDate() { // primjer exporta named funkcije
return dayjs().format("MMMM DD YYYY, HH:mm:ss");
}

export function getId() { // primjer exporta named funkcije
  return nanoid();
}

// export default getCurrentDate;  primjer def. exporta; u app.js smo importali i uključili pod proizvoljnim imenom x

// izaberemo na koji način ćemo exportat named ili default
*/


------------

# Vježba: Modules

Trajanje: 15min (do 18:55)


U postojeću React aplikaciju dodati sljedeće:


1. Zamijenite random.js modul sa random mapom.


2. Funkcije iz random.js modula izdvojite u zasebne module unutar random mape.


3. Stavite index.js datoteku u random mapu i kroz nju exportajte module funkcija iz točke 2.


4. Importajte funkcije iz točke 2 u App.js


Savjet:

- Vodite se primjerom iz helpers mape

- Defaultni export konstante RANDOM ne morate izdvajati u zaseban modul, napravite od njega defaultni export index.js modula u random mapi

# random.js file izbrišemo i napravimo mapu s modulima

## donji kod je kod koji ćemo rascjepkati

/* ne treba nam više jer smo napravili mapu s modulima

export function getRandomName() {
  const names = ["Otto", "Kimi", "Charles", "Roko", "Gigi", "Manu", "Alex", "Peter"];
  const namesResult = names[Math.floor(Math.random() * names.length)];
  return namesResult;
}

export function getRandomColor() {
  const colors = ["yellow", "blue", "magenta", "green", "lime", "grey", "white", "black"];
  const colorResult = colors[Math.floor(Math.random() * colors.length)];
  return colorResult;
}

const RANDOM = "RANDOM";

export default RANDOM; // ILI export default "RANDOM"; ali bolji je lijevi pristup
*/

------------

# Vježba: JSX

Trajanje: 40min (do 20:30)


U postojeću React aplikaciju dodati sljedeće:


1. Izdvojite tri nove komponente iz postojećeg App.js JSX-a

1a. Komponenta CurrentDate treba prikazivati trenutni datum

1b. Komponenta UniqueId treba prikazivati jedinstveni ID

1c. Komponenta UserInfo treba prikazivati random name i random color


2. Koristite tri nove komponente u App komponenti na mjestima gdje su se i prije nalazile


3. Svaku komponentu iz točke 1 prebacite u zasebne module unutar mape components (npr. components/CurrentDate.js, components/UniqueId.js, ...)


4. Importajte komponente iz točke 3 u App komponentu i iskoristite ih


Savjet:

- Za točku 3 ne morate raditi index.js, možete samo napraviti modul npr. components/CurrentDate.js

- Kod točke 3 ne zaboravite importati dependency module (npr. helpers, random) i uzmite u obzir njihove relativne putanje


Bonus:

- Commitajte izmjene u repozitorij, pushajte na GitHub, deployajte sa Netlify :)

------------


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
