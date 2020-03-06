npm i redux react-redux redux-logger redux-thunk


* add / remove : re-turn npm start is required
1. create src and assets folders
2. copy images from original project
3.

~/Library/Android/sdk/platform-tools/adb
~/Library/Android/sdk/emulator/emulator

# Fix isssue with nodeJS 12

var sharedBlacklist = [
  /node_modules[\/\\]react[//\\]dist[//\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

react-native run-android --port=1234


#react-native npm    
    
    ชุดที่หนึ่ง
    npm i react-native-elements react-native-vector-icons react-navigation react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-navigation-stack react-navigation-tabs @react-native-community/async-storage axios react-native-iphone-x-helper    
    react-native link react-native-vector-icons
    react-native link react-native-gesture-handler
    react-native link react-native-reanimated
    react-native link react-native-screens
    react-native link react-native-safe-area-context
    react-native link @react-native-community/masked-view      
    react-native link @react-native-community/async-storage    
    react-native link react-native-permissions

    ยังเพิ่งลงชุดนี้
    npm i react-native-youtube react-native-image-crop-picker 
    react-native link react-native-youtube
    react-native link react-native-image-crop-picker 

    
#android/build.gradle (current version of youtube lib (don't need to do this step))
     maven { url "https://jitpack.io" }

#AndroidManifest.xml

      android:usesCleartextTraffic="true"


    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

    <uses-permission android:name="android.permission.CAMERA"/>
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
    <uses-permission android:name="android.permission.RECORD_AUDIO" />

#react-native link

# node.js
npm i express formidable fs-extra body-parser
    
4. npm i
5. react-native link
6. 
npm start -- --reset-cache


adb shell input keyevent 82

git reset --hard

https://www.youtube.com/watch?v=HkOF7ixQmeI&list=PLjPfp4Ph3gBowskVFVlPbh6CkHeSlH0uW


Day 1#
- What is React? - UI Library
- ReactJS (Web) and ReactNative (Mobile)
- Basic UI [View, Text, TextInput, Image, Button, ImageBackground]
- 3rd UI (ReactNativeElements) [Icon, Input]
- React Component
  - Root Component : App.js <--called by (index.js)
- React Project File Structure
  - node_modules folder 
  - android (native android code)
  - ios (native ios code)
  - index.js
  - App.js
  - src folder

- (sudo) npm i -g react-native
- react-native init <project-name>
- react-native run-android / run-ios
- Add more libraries
  - element and icon
  - npm i lib1 lib2
  - react-native link lib1

- Create state by using React Hooks setState
- Event Listener [onPress, onTextChange]
- style={{backgroundColor: "#F00"}}
- Metro Bundler


Day 2#
- FlatList (data, renderItem)
- useState, useEffect
- axios (promise-based http client)
- Setup Android Emulator Launcher on VSCode
- React Page Navigation
  - npm i and link 
  - createAppContainer, createSwitch..., createStackNavigation, createBottomNavigation
  - ex: const AppStack = createStackNavigation({
     login: {screen: ....},
     login: {screen: ....},
  })
- navigate (push) / goBack (pop)
- Flexlayout 

Day 3#
- UseEffect (on Initial and on Destroy )
- Camera tabs
- Permission (AndroidManifest)
- Condition 
  isSomething && RunningSomething
  isSomething ? ifTrue : ifFalse
- nodeJS
  express, body-parser, formidable
- postman
- nodemon
- axios post urlencoded (JSONFeed)
- axios upload image (formData or multiParts)    

Day 4#
- GoogleMap
- Google and search google api console
  - open library and get credential key
- Review Page Navigation
- IfiPhoneX
- Running Real Android and iOS
- Map, Marker, Custom Marker 
- Marker (coordinate, subview(Image))
- Marker and Marker.Animated
- Callout
- How to open Native GoolgeMapApp
- Axis to coordinate JSON to Database (JSON Format)
- Location Tracking 
  - Running Permission
  - Clean up in UseEffect to stop tracking


Day 5#
- Redux
- action, reducer, store, combinedReducer, Provider
- Open DebuggingMode (Cmd+M and Debug)  
- Breackpoint(debugger)
- redux-logger
- Why do we need redux?
  - Separate UI and Action and Reducer
  - Share Trackable Global State
- snippet 
- create component rnf, rnc
- redux: rxcon, rxac, rxre, combin
- Deployment
- KeyTool in java/bin
- Icon (ic_laucher and ic_launcher_round)
- setup_deployment.txt
