npm i react-navigation react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view react-navigation-stack react-navigation-tabs react-native-iphone-x-helper react-native-svg react-native-qrcode-svg react-native-camera react-native-qrcode-scanner react-native-permissions
missingDimensionStrategy 'react-native-camera', 'general'




react-native link react-native-gesture-handler
react-native link react-native-permissions
react-native link react-native-reanimated
react-native link react-native-screens
react-native link react-native-safe-area-context
react-native link @react-native-community/masked-view      
react-native link react-native-iphone-x-helper
react-native link react-native-svg
react-native link react-native-camera 
react-native link react-native-qrcode-scanner
react-native link react-native-permissions

cd ios 
pod install


rm -rf node_modules;
rm -rf $TMPDIR/react-native-packager-cache-*;
rm -rf $TMPDIR/metro-*;
rm -rf $TMPDIR/react-*;
rm -rf $TMPDIR/haste-*;
watchman watch-del-all;
yarn;
yarn start --reset-cache; (for starting the bundler)


<uses-permission android:name="android.permission.INTERNET" />     
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.VIBRATE"/>
<uses-permission android:name="android.permission.RECORD_AUDIO"/>
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />




  <key>NSCameraUsageDescription</key>
  <string>Your message to user when the camera is accessed for the first time</string>
  <key>NSMicrophoneUsageDescription</key>
  <string>Your message to user when the microphone is accessed for the first time</string>
  
# Fix Invalid ios camera permission (InValid RNPermission Camera on IOS)
# https://stackoverflow.com/questions/59090141/inavlid-react-native-permission-ios-permission-camera
  pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec', :modular_headers => false
  pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec', :modular_headers => false
  pod 'Permission-Camera', :path => "../node_modules/react-native-permissions/ios/Camera.podspec"
