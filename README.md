# ST-IONIC-FCM
Firebase Cloud Massaging with IONIC, also include auth api with Django


# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Ionic Component](https://ionicframework.com/docs/components/)

###Install Ionic App with Sidebar###
	$ ionic start ST-IONIC-FCM sidemenu
	$ ionic start ST-IONIC-FCM blank
	$ ionic start ST-IONIC-FCM tabs
* Official Docs [Learn More](https://ionicframework.com/getting-started#cli)

###IONIC Command Help###
* [Commane Help](https://ionicframework.com/docs/cli/commands.html)

###Change the Package Name According to your App and Domain Name also App Version###
	<widget id="io.ionic.starter" version="0.0.1"> => <widget id="com.securitytroops.ionicfcm" version="0.0.1">

###Generate Resources for Logo and Splash Screen###
	# ionic cordova resources
	# ionic cordova resources ios
	# ionic cordova resources android
	# ionic cordova resources ios --force

###Serve IONIC App into Browser###
	# ionic serve
	# ionic serve --l

###Add IONIC Platform###
	$ ionic cordova platform 
	$ ionic cordova platform add ios
	$ ionic cordova platform add android
	$ ionic cordova platform rm ios

###Build Into Android Phone###
	$ ionic cordova build ios
	$ ionic cordova build ios --prod --release
	$ ionic cordova build ios --device --prod --release -- --developmentTeam="ABCD" --codeSignIdentity="iPhone Developer" --packageType="app-store"
	$ ionic cordova build android
	$ ionic cordova build android --prod --release -- -- --keystore=filename.keystore --alias=myalias
	$ ionic cordova build android --prod --release -- -- --minSdkVersion=21
	$ ionic cordova build android --prod --release -- -- --versionCode=55
	$ ionic cordova build android --prod --release -- -- --gradleArg=-PcdvBuildMultipleApks=true

###Compile Code for Platform###
	$ ionic cordova compile ios
	$ ionic cordova compile ios --device
	$ ionic cordova compile android

###Run with Desktop Emulators###
	$ ionic cordova emulate 
	$ ionic cordova emulate ios
	$ ionic cordova emulate ios -lc
	$ ionic cordova emulate android -lc --address=localhost
	$ ionic cordova emulate android -lc -- -d

###Add New Plugins like Camera and InAppBrowser###
	$ ionic cordova plugin 
	$ ionic cordova plugin add cordova-plugin-inappbrowser@latest
	$ ionic cordova plugin add phonegap-plugin-push --variable SENDER_ID=XXXXX
	$ ionic cordova plugin rm cordova-plugin-camera

###Run Into Android or iOS Phone###
	$ ionic cordova run 
	$ ionic cordova run ios
	$ ionic cordova run ios -lc
	$ ionic cordova run android
	$ ionic cordova run android -lc --address=localhost
	$ ionic cordova run android -lc -- -d

###Generate Auth Service###
	#ionic g provider authService
	#ionic generate service services/authGuard

###Generate New Page###
	#ionic g page login

###All Generate Commands###
	$ ionic generate 
	$ ionic generate component
	$ ionic generate directive
	$ ionic generate page
	$ ionic generate pipe
	$ ionic generate provider
	$ ionic generate tabs
	$ ionic generate component foo
	$ ionic generate page Login
	$ ionic generate page Detail --no-module
	$ ionic generate page About --constants
	$ ionic generate pipe MyFilterPipe

### Geolocation ###
	ionic cordova plugin add cordova-plugin-geolocation --variable GEOLOCATION_USAGE_DESCRIPTION="To locate you"
	npm install --save @ionic-native/geolocation@beta

### Camera ###
	ionic cordova plugin add cordova-plugin-camera
	npm install --save @ionic-native/camera@beta

### File Transfer ###
	ionic cordova plugin add cordova-plugin-file-transfer
	npm install --save @ionic-native/file-transfer@beta

### Angularfire ###
	npm install --save angularfire2 firebase

### Firebase Cloud Messaging ###
	ionic cordova plugin add cordova-plugin-firebase
	npm install --save @ionic-native/firebase@5.0.0-beta.14

### Release App For Deployment ###
	ionic cordova build --release android
	ionic cordova build android --prod --release

### Signing an APK ###
	keytool -genkey -v -keystore stionicfcm-release-key.keystore -alias ST-IONIC-FCM -keyalg RSA -keysize 2048 -validity 10000
	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore stionicfcm-release-key.keystore app-release-unsigned.apk ST-IONIC-FCM
	zipalign -v 4 app-release-unsigned.apk ST-IONIC-FCM.apk
	~/Library/Android/sdk/build-tools/28.0.3/zipalign -v 4 app-release-unsigned.apk ST-IONIC-FCM.apk

###Thanks for Reading...###
# Happy Coading!!! #
