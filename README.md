# Foodingo

System Description: When the customer submits their login credentials, it gets stored in the database, along with a unique firebase UID. Then by using the uid, the LevelMap is able to pull up the user’s current progress by the number of accessible and inaccessible levels they have.

Details of Technologies/Packages:
The bulk of Foodingo is built on React Native, a UI software framework that provides countless helpful libraries and components for building the frontend of a project, and MySQL, an open-source system that manages databases. Foodingo also uses Firebase, specifically Firebase Hosting, to ensure that Foodingo can be safely hosted on the web and Firestore, to ensure that users’ information are safely secured in the database. Lastly, Foodingo uses The MealDB as its main API, providing vast amounts of recipes for users to learn.

How to Install and Run:
First, git clone the Foodingo repository.
Before running Foodingo, the Expo Go app must be installed on your device and the following dependencies must be installed onto your terminal:
@expo/webpack-config
@react-native-community/masked-view
@react-native-firebase/app
@react-navigation/bottom-tabs
@react-navigation/native
@react-navigation/native-stack,
@react-navigation/stack
expo
expo-auth-session
expo-crypto
expo-font
expo-splash-screen
expo-status-bar
expo-web-browser
firebase
react
react-dom
react-native
react-native-gesture-handler
react-native-paper
react-native-reanimated
react-native-safe-area-context
react-native-screens
react-native-web

After downloading the following dependencies, to run Foodingo, you type in the command “npx expo start” 
and with your phone, you can scan the QR code provided and it will take you automatically to Foodingo.
