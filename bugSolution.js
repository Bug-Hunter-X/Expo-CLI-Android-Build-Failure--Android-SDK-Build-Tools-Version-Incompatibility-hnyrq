//Check the error message for the required Android SDK Build Tools version.
//Open Android Studio and go to Tools -> SDK Manager.
//In the SDK Tools tab, locate the "Android SDK Build-Tools" section and check for the missing/incorrect version.
//If the version is not available, check the box to download it.
//Once downloaded and installed, restart Android Studio (important).
//Run 'expo prebuild --clean' to clear any cached data that might interfere with the build process
//Then run 'expo build:android'
//If the problem persists, consider updating your Expo CLI version to get any potential fixes.
const buildAndroid = async () => {
  try {
    await expo.buildAndroidAsync();
  } catch (error) {
    console.error('Error building Android app:', error);
  }
};

buildAndroid();