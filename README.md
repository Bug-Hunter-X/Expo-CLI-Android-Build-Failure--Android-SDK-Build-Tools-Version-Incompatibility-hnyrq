# Expo CLI Android Build Failure: Android SDK Build Tools Version Incompatibility

This repository demonstrates a bug and its solution related to Android SDK build tools version incompatibility when building an Android app using the Expo CLI.

## Bug Description
The Expo CLI build process fails for Android due to a mismatch between the required and installed Android SDK build tools version.  Error messages typically point to a missing or incorrect version.

## How to Reproduce
1.  Ensure that you have an Android development environment set up (including Android Studio and the Android SDK).
2.  Attempt to build an Expo project for Android using the Expo CLI (`expo build:android`).
3. Observe the error related to an incorrect Android SDK build tools version.

## Solution
The solution involves ensuring that the correct version of the Android SDK build tools is installed and correctly configured for use by the Expo CLI. The specific version required might vary depending on the Expo SDK version used in your project.

This requires careful management of the Android SDK components.  Use the SDK Manager (accessible through Android Studio) to update or install the necessary version of the build tools. Note that Expo might specify the correct build tools version within the error message. If not, you might need to experiment with some versions from the SDK Manager to resolve the conflict. Then, clean and rebuild the app. 