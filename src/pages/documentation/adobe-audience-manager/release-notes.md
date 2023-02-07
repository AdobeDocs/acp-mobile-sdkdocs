# Release Notes

## November 9, 2020

### Android Audience 1.1.0

* Added support for AdobeCallbackWithError for APIs getVisitorProfile, signalWithData.
* Added changes to publish Audience shared state on EventHub boot.

## July 17, 2020

### @adobe/react-native-acpaudience@1.1.2

* Updated to iOS Audience 2.0.2.
* Updated to Android Audience 1.0.2.

### Android Audience 1.0.2

* Fixed an issue where UUID was not returned in getSdkIdentities API response.
* Fixed an issue where customer visitor IDs were missing from Audience signals.

## July 10, 2020

### iOS Audience 2.0.2

* Fixed an issue where UUID was not returned in getSdkIdentities API response.

## September 24, 2019

The following change was made in this release:

### iOS Audience 2.0.1

* The `global.ssl` configuration settings are ignored, and SSL is enabled by default.
* Appends IMS OrgID to AAM demdex calls if subdomain endpoint is missing.

