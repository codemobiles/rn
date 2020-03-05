1. npm
npm i axios react-navigation react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-navigation-stack react-navigation-tabs react-native-segmented-control-tab react-native-maps react-native-open-maps @react-native-community/geolocation @react-native-community/async-storage

react-native link react-native-gesture-handler
react-native link react-native-reanimated
react-native link react-native-maps 
react-native link @react-native-community/geolocation
react-native link @react-native-community/async-storage    

#Android Permission
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/> 
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />


<meta-data
            android:name="com.google.android.geo.API_KEY"
            android:value="AIzaSyDjn0Uytv_FSUwwpOUTVCvL4vKYU7Ev7VU"/>


supportLibVersion = "28.0.3"            


https://aboutreact.com/react-native-calculate-distance-between-two-locations/