# Release Notes

## February 13, 2023

### Android Campaign Standard 1.0.10

* Fixed a crash which could occur when loading Campaign in-app messages.

## May 27, 2022

### Android Campaign Standard 1.0.9

* Fixed a compatibility issue seen when using the Campaign Standard and Messaging In-App beta extensions in the same mobile app.

## June 16, 2021

### Android Campaign 1.0.8

* Added the changes to move away from bintray and start using Sonatype to push the SDK to Maven Central.
* Resolved and issue with Campaign module details not being returned.

## September 29, 2020

The following updates were made in this release:

### Android Campaign 1.0.7 and iOS Campaign 1.0.6

* Added an enhancement to reduce the number of registration requests sent to Campaign. There is now a default 7 day registration delay which starts after the most recent registration request sent to Campaign is successful.
* Added configuration settings to change the default registration delay or to pause registration requests.

## September 8, 2020

The following update was made in this release:

### Android Campaign 1.0.6

* Added support for weak ETags.

## August 3, 2020

The following update was made in this release:

### Android Campaign 1.0.5

* Added ETag support for Campaign rules download requests.

## April 24, 2020

The following updates were made in this release:

### Android Campaign 1.0.4

* Changes in how fullscreen in-app messages are displayed inline with WebView security recommendations in Mobile Core 1.5.2 release.
* Report extension details to Mobile Core for improved logging and Griffon support.
* Fixed an image caching related bug, where cached images used to get deleted.

## January 29, 2020

The following updates were made in this release:

### Android Campaign 1.0.3

* Improved existing log messages and added additional logging to assist with debugging.

### iOS Campaign 1.0.5

* Improved existing log messages and added additional logging to assist with debugging.

## October 28, 2019

The following change was made in this release:

### Android Campaign Standard 1.1.0

* In the Launch extension, added the ability to reset the `pkey`.

### iOS Campaign Standard 1.1.0

* In the Launch extension, added the ability to reset the `pkey`.

## April 3, 2019

### iOS Campaign Standard 1.0.1

* Fixed an issue with duplicate symbols being present in the Campaign extension library.
* 