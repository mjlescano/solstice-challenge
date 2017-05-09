# Solstice Challenge

Project to resolve ["New Hire Evaluation Challenge"](https://github.com/mjlescano/solstice-challenge/blob/master/docs/challenge.pdf) for Solstice.

The app can be seen working [here](https://expo.io/@mjlescano/solstice-challenge) with any Android or iOS phone, or following the [Getting Started](#getting-started) instructions.

## Getting Started

You'll need to have Node v6, NPM v3+, or a recent version of Yarn.

First, clone this repo and run `npm install` to install all the required dependencies.

After that you will be able to run the app with the following commands:

#### `npm start`

Runs the app in development mode and you will be able to open it in the [Expo app](https://expo.io) on your phone.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

## Technologies

* [Create React Native App](https://github.com/react-community/create-react-native-app).
  * Used for developing and bundling the app for iOS and Android
* [Redux](http://redux.js.org/)
  * For Managing the state of the APP
* [Eslint](http://eslint.org/)
  * To keep neat and tidy the JS code
  * [`eslint-config-democracyos`](https://github.com/DemocracyOS/eslint-config-democracyos) to add [Standard](https://standardjs.com/rules) and some other niceities.
  * [`eslint-plugin-react-native`](https://github.com/Intellicode/eslint-plugin-react-native) for React Native specific rules.

## Features Implemented

* List of All Contacts
* List of Favorited Contacts
  * This wasn't on the wireframes, but I added it to have a complete Favoriting experience.
* Pull to Reload on Contacts List
* Contact Profile
* Map with the Address of the contact
  * Clicking on it will take you to Google Maps App or Browser.
* Add/Remove Contact from favorites
* Delete Contact

### Next Steps (not yet implemented)

* Search Feature on Contacts List
* Edit Contact Form
* Add Contact Form
* Responsive for Tablets
  * Implemented using a [Custom Navigator](https://reactnavigation.org/docs/navigators/custom)
* Being responsiveness implemented, I would use [React Native Web](https://github.com/necolas/react-native-web) to be able to use the same codebase on Desktop.
