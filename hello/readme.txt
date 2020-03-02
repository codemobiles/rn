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
    npm i react-native-elements react-native-vector-icons react-navigation react-native-gesture-handler react-native-reanimated react-navigation-stack react-navigation-tabs @react-native-community/async-storage axios react-native-iphone-x-helper
    react-native link react-native-vector-icons
    react-native link react-native-gesture-handler
    react-native link react-native-reanimated
    react-native link @react-native-community/async-storage
    react-native link react-native-iphone-x-helper

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