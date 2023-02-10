# SDK versions

<InlineAlert variant="warning" slots="text"/>

This document lists the previous versions of the Mobile SDKs.

<InlineAlert variant="info" slots="text"/>

**Migrate to Swift**<br/>If you are currently using our Objective-C (ACP-prefix libraries), please see the [Migrating to Swift](../migrate-to-swift.md) guide for next steps.

## Android

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK for Android supports Google Android API 14 (Ice Cream Sandwich) or later. The Adobe Experience Platform Edge Network extension and other for Edge Network extensions require Android versions 4.4 or later (API levels 19 or later).

<InlineAlert variant="info" slots="text"/>

Due to sunset of [JCenter by JFrog](https://jfrog.com/blog/into-the-sunset-bintray-jcenter-gocenter-and-chartcenter/), our SDKs are no longer being uploaded to JCenter. Android libraries are now available on [MavenCentral](https://search.maven.org/search?q=g:com.adobe.marketing.mobile). For more information, see links below or find [our libraries on MavenCentral](https://search.maven.org/search?q=g:com.adobe.marketing.mobile). For more information on how to declare dependencies from Maven, please see [Declaring repositories](https://docs.gradle.org/current/userguide/declaring_repositories.html#sec:declaring_multiple_repositories) on Gradle.

| Extension | Maven | Github |
|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Profile](../profile/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Identity](../mobile-core/identity/index.md) | Bundled in Mobile Core | — |
| [Signal](../mobile-core/signal/index.md) | Bundled in Mobile Core | — |
| [Lifecycle](../mobile-core/lifecycle/index.md) | Bundled in Mobile Core | — |
| [Rules Engine](../mobile-core/rules-engine/index.md) | Bundled in Mobile Core | — |
| [Adobe Experience Platform Edge Network](../edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edge.svg?logo=android&logoColor=white&label=edge&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edge) | - |
| [Identity for Edge Network](../identity-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeidentity.svg?logo=android&logoColor=white&label=edgeidentity&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeidentity) | [Link](https://github.com/adobe/aepsdk-edgeidentity-android) |
| [Consent for Edge Network](../consent-for-edge-network/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/edgeconsent.svg?logo=android&logoColor=white&label=edgeconsent&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/edgeconsent) | [Link](https://github.com/adobe/aepsdk-edgeconsent-android) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android)
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places-monitor.svg?logo=android&logoColor=white&label=placesmonitor&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places-monitor) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Analytics - Media Analytics for Audio & Video](../adobe-media-analytics/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media&versionPrefix=2&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Analytics - Mobile Services](../adobe-analytics-mobile-services/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/mobileservices.svg?logo=android&logoColor=white&label=mobileservices&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/mobileservices) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Journey Optimizer](../adobe-journey-optimizer/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/messaging.svg?logo=android&logoColor=white&label=messaging&versionPrefix=1&style=flat-square)](#) | [Link](https://github.com/adobe/aepsdk-messaging-android) |
| [Adobe Journey Optimizer - Decisioning](../adobe-journey-optimizer-decisioning/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/optimize.svg?logo=android&logoColor=white&label=optimize&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/optimize) | [Link](https://github.com/adobe/aepsdk-optimize-android) |
| [Adobe Target](../adobe-target/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |
| [Adobe Campaign Classic](../adobe-campaign-classic/index.md) | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic&versionPrefix=1&style=flat-square)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/android) |

## iOS

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK for iOS supports iOS 10 or later (includes support for iOS, iPadOS, and tvOS).

| Extension | tvOS | App Extension | CocoaPods | GitHub |
|---|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPCore.svg?color=orange&label=ACPCore&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPCore) | 	[Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPCore)
| [Profile](../profile/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPUserProfile.svg?color=orange&label=ACPUserProfile&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPUserProfile) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPUserProfile) |
| [Identity](../mobile-core/identity/index.md) | ✔️ |   | Bundled in Mobile Core | — |
| [Signal](../mobile-core/signal/index.md) | ✔️ |   | Bundled in Mobile Core | — |
| [Lifecycle](../mobile-core/lifecycle/index.md) | ✔️ |   | Bundled in Mobile Core | — |
| [Rules Engine](../mobile-core/rules-engine/index.md) | ✔️ |   | Bundled in Mobile Core | — |
| Adobe Experience Platform Edge Network |   |   | Not Available | — |
| Identity for Edge Network |   |   | Not Available | — |
| Consent for Edge Network |   |   | Not Available | — |
| Adobe Experience Platform Assurance |   |   | Not Available | — |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPPlaces.svg?color=orange&label=ACPPlaces&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPPlaces) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPPlaces) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPPlacesMonitor.svg?color=orange&label=ACPPlacesMonitor&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPPlacesMonitor) | [Link](https://github.com/adobe/places-monitor-ios) |
| [Adobe Analytics](../adobe-analytics/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPAnalytics.svg?color=orange&label=ACPAnalytics&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPAnalytics) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPAnalytics) |
| [Adobe Analytics - Media Analytics for Audio & Video](../adobe-media-analytics/index.md) | ✔️ |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPMedia.svg?color=orange&label=ACPMedia&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPMedia) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPMedia) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPAudience.svg?color=orange&label=ACPAudience&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPAudience) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPAudience) |
| [Adobe Analytics - Mobile Services](../adobe-analytics-mobile-services/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPMobileServices.svg?color=orange&label=ACPMobileServices&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPMobileServices) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPMobileServices) |
| [Adobe Target](../adobe-target/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPTarget.svg?color=orange&label=ACPTarget&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPTarget) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPTarget) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPCampaign.svg?color=orange&label=ACPCampaign&logo=apple&logoColor=white&style=flat-square)](https://img.shields.io/cocoapods/v/ACPCampaign.svg?color=orange&label=ACPCampaign&logo=apple&logoColor=white&style=flat-square) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPCampaign) |
| [Adobe Campaign Classic](../adobe-campaign-classic/index.md) |   |   | [![Cocoapods](https://img.shields.io/cocoapods/v/ACPCampaignClassic.svg?color=orange&label=ACPCampaignClassic&logo=apple&logoColor=white&style=flat-square)](https://cocoapods.org/pods/ACPCampaignClassic) | [Link](https://github.com/Adobe-Marketing-Cloud/acp-sdks/tree/master/iOS/ACPCampaignClassic) |

## React Native

Adobe Experience Platform Mobile SDK plugin for React Native supports React Native version 0.60.0 or later. For the latest installation instructions, see the README file in the [`react-native-acpcore`](https://github.com/adobe/react-native-acpcore) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins (ACP 2.x) for React Native are compatible only with [Android](#android) and [iOS — Objective-C](#ios--objective-c) libraries.

<InlineAlert variant="info" slots="text"/>

For React Native, we recommend that you first install [Node.js](https://nodejs.org/en/) to download packages from [npm](https://npm.io/). For additional instructions on getting started with React Native applications, see this [tutorial](https://reactnative.dev/docs/getting-started).

| Extension | npmjs | Github | Sample |
|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpcore.svg?color=green&label=%40adobe%2Freact-native-acpcore&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpcore) | [Link](https://github.com/adobe/react-native-acpcore) | [Sample](https://github.com/adobe/react-native-acpcore/tree/main/sample/ACPCoreSampleApp) |
| [Profile](../profile/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpuserprofile.svg?color=green&label=%40adobe%2Freact-native-acpuserprofile&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpuserprofile) | [Link](https://github.com/adobe/react-native-acpuserprofile) | [Sample](https://github.com/adobe/react-native-acpuserprofile/tree/main/sample/ACPUserProfileSampleApp) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-aepassurance.svg?color=green&label=%40adobe%2Freact-native-aepassurance&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-aepassurance) | [Link](https://github.com/adobe/react-native-aepassurance) | [Sample](https://github.com/adobe/react-native-aepassurance/tree/main/SampleApp) |
| [Places Service](https://docs.adobe.com/content/help/en/places/using/home.html) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpplaces.svg?color=green&label=%40adobe%2Freact-native-acpplaces&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpplaces) | [Link](https://github.com/adobe/react-native-acpplaces) | [Sample](https://github.com/adobe/react-native-acpplaces/tree/main/sample/ACPPlacesSampleApp) |
| [Places Monitor](https://docs.adobe.com/content/help/en/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpplaces-monitor.svg?color=green&label=%40adobe%2Freact-native-acpplaces-monitor&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpplaces-monitor) | [Link](https://github.com/adobe/react-native-acpplaces-monitor) | [Sample](https://github.com/adobe/react-native-acpplaces-monitor/tree/main/sample/ACPPlacesMonitorSample) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpanalytics.svg?color=green&label=%40adobe%2Freact-native-acpanalytics&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpanalytics) | [Link](https://github.com/adobe/react-native-acpanalytics) | [Sample](https://github.com/adobe/react-native-acpanalytics/tree/main/sample/ACPAnalyticsSampleApp) |
| [Adobe Media Analytics](../adobe-media-analytics/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpmedia.svg?color=green&label=%40adobe%2Freact-native-acpmedia&logo=npm&style=flat-square)](https://www.npmjs.com/package/@adobe/react-native-acpmedia) | [Link](https://github.com/adobe/react-native-acpmedia) | [Sample](https://github.com/adobe/react-native-acpmedia/tree/main/sample/ACPMediaSampleApp) |
| [Adobe Audience Manager](../adobe-audience-manager/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpaudience.svg?color=green&label=%40adobe%2Freact-native-acpaudience&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpaudience) | [Link](https://github.com/adobe/react-native-acpaudience) | [Sample](https://github.com/adobe/react-native-acpaudience/tree/main/sample/ACPAudienceSampleApp) |
| [Adobe Target](../adobe-target/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acptarget.svg?color=green&label=%40adobe%2Freact-native-acptarget&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acptarget) | [Link](https://github.com/adobe/react-native-acptarget) | [Sample](https://github.com/adobe/react-native-acptarget/tree/main/sample/ACPTargetSampleApp) |
| [Adobe Campaign Standard](../adobe-campaign-standard/index.md) | [![npm version](https://img.shields.io/npm/v/@adobe/react-native-acpcampaign.svg?color=green&label=%40adobe%2Freact-native-acpcampaign&logo=npm&style=flat-square)](https://badge.fury.io/js/%40adobe%2Freact-native-acpcampaign) | [Link](https://github.com/adobe/react-native-acpcampaign) | [Sample](https://github.com/adobe/react-native-acpcampaign/tree/main/sample/ACPCampaignSampleApp) |

<InlineAlert variant="info" slots="text"/>

React Native Experience Platform Edge Network, Edge Identity, Edge Consent, Optimize, Places, Target, Campaign Classic and Assurance can be found in the repository link [here](https://github.com/adobe/aepsdk-react-native). These new extensions require the latest AEP Core to operate. See [README](https://github.com/adobe/aepsdk-react-native/blob/main/README.md) for further information on installation and configuration.

## Flutter

Adobe Experience Platform Mobile SDK plugin for Flutter supports Flutter **versions 1.10.0 or later**.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Flutter (ACP 2.x) are compatible only with [iOS — Objective-C](#ios-objective-c) libraries, at this time.

| Extension | pub.dev | Github | Sample App |
|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_acpcore.svg)](https://pub.dartlang.org/packages/flutter_acpcore) | [Link](https://github.com/adobe/flutter_acpcore) | [Sample](https://github.com/adobe/flutter_acpcore/tree/master/example) |
| [Profile](../profile/index.md#flutter) | [![pub package](https://img.shields.io/pub/v/flutter_acpuserprofile.svg)](https://pub.dartlang.org/packages/flutter_acpuserprofile) | [Link](https://github.com/adobe/flutter-acpuserprofile) | [Sample](https://github.com/adobe/flutter_acpuserprofile/tree/master/example) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![pub package](https://img.shields.io/pub/v/flutter_acpplaces.svg)](https://pub.dartlang.org/packages/flutter_acpplaces) | [Link](https://github.com/adobe/flutter-acpplaces) | [Sample](https://github.com/adobe/flutter_acpplaces/tree/master/example) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) | [![pub package](https://img.shields.io/pub/v/flutter_acpplaces_monitor.svg)](https://pub.dartlang.org/packages/flutter_acpplaces_monitor) | [Link](https://github.com/adobe/flutter-acpplaces_monitor) | [Sample](https://github.com/adobe/flutter_acpplaces_monitor/tree/master/example) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_assurance.svg)](https://pub.dartlang.org/packages/flutter_assurance) | [Link](https://github.com/adobe/flutter_assurance) | [Sample](https://github.com/adobe/flutter_assurance/tree/master/example) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![pub package](https://img.shields.io/pub/v/flutter_acpanalytics.svg)](https://pub.dartlang.org/packages/flutter_acpanalytics) | [Link](https://github.com/adobe/flutter_acpanalytics) | [Sample](https://github.com/adobe/flutter_acpanalytics/tree/master/example) |

## Cordova

Adobe Experience Platform Mobile SDK plugins for Cordova supports Cordova **versions 9.0.0 or later**. For the latest Cordova installation instructions, see the README file in the [`cordova-acpcore repository`](https://github.com/adobe/cordova-acpcore).

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Cordova are compatible only with [Android](#android) and [iOS — Objective-C](#ios-objective-c) libraries, at this time.

A sample Cordova application that uses the Adobe Experience Platform Mobile SDK can be found [here](https://github.com/adobe/cordova-acpsample).

<InlineAlert variant="info" slots="text"/>

For Cordova, we recommend that you first install [Node.js](https://nodejs.org/en/) to download packages from npm. For additional instructions on getting started with Cordova applications, see this [guide](https://netbeans.apache.org/kb/docs/webclient/cordova-gettingstarted.html).

With Node.js installed, you may install the Cordova framework from terminal using the following statement:

```
sudo npm install -g cordova
```

To start using the Adobe Experience Platform Mobile SDK plugin for Cordova, navigate to the directory of your Cordova app and install the plugins using the following statement:

```
cordova plugin add https://github.com/adobe/cordova-acpcore.git
```

| Extension | npmjs | Github |
|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpcore.svg?label=cordova-acpcore&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpcore) | [Link](https://github.com/adobe/cordova-acpcore) |
| [Profile](../profile/index.md#cordova) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpuserprofile.svg?label=cordova-acpuserprofile&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpuserprofile) | [Link](https://github.com/adobe/cordova-acpuserprofile) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-aepassurance.svg?label=cordova-aepassurance&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-aepassurance) | [Link](https://github.com/adobe/cordova-aepassurance) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpplaces.svg?label=cordova-acpplaces&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpplaces) | [Link](https://github.com/adobe/cordova-acpplaces) |
| [Places Monitor](https://experienceleague.adobe.com/docs/places/using/places-ext-aep-sdks/places-monitor-extension/places-monitor-extension.html?lang=en) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpplacesmonitor.svg?label=cordova-acpplacesmonitor&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpplacesmonitor) | [Link](https://github.com/adobe/cordova-acpplaces-monitor) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![npm](https://img.shields.io/npm/v/@adobe/cordova-acpanalytics.svg?label=cordova-acpanalytics&logo=npm)](https://www.npmjs.com/package/@adobe/cordova-acpanalytics) | [Link](https://github.com/adobe/cordova-acpanalytics) |

## Xamarin

Adobe Experience Platform Mobile SDK plugins for Xamarin require **MonoAndroid 9.0+ and Xamarin.iOS 1.0+**. For the latest Xamarin installation instructions, see the README file in the [`xamarin-acpcore`](https://github.com/adobe/xamarin-acpcore) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Xamarin are compatible only with [Android](#android) and [iOS — Objective-C](#ios-objective-c) libraries, at this time.

<InlineAlert variant="info" slots="text"/>

The Adobe Experience Platform Mobile SDK plugins for Xamarin are packages distributed via [nuget](https://www.nuget.org/packages). NuGet packages can be added to projects within a [Visual Studio](https://visualstudio.microsoft.com/downloads/) solution. The NuGet packages can also be generated locally via the included Makefile located in each of the Xamarin repositories.

| Extension | Android | iOS | Github |
|---|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPCore.Android?label=Adobe.ACPCore.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPCore.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPCore.iOS?label=Adobe.ACPCore.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPCore.iOS/) | [Link](https://github.com/adobe/xamarin-acpcore) |
| [Profile](../profile/index.md#xamarin) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPUserProfile.Android?label=Adobe.ACPUserProfile.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPUserProfile.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPUserProfile.iOS?label=Adobe.ACPUserProfile.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPUserProfile.iOS/) | [Link](https://github.com/adobe/xamarin-acpuserprofile) |
| [Adobe Experience Platform Assurance](../platform-assurance-sdk/index.md) | [![Nuget](https://img.shields.io/nuget/v/Adobe.AEPAssurance.Android?label=Adobe.AEPAssurance.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.AEPAssurance.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.AEPAssurance.iOS?label=Adobe.AEPAssurance.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.AEPAssurance.iOS/) | [Link](https://github.com/adobe/xamarin-aepassurance) |
| [Places Service](https://experienceleague.adobe.com/docs/places/using/home.html?lang=en) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPPlaces.Android?label=Adobe.ACPPlaces.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPPlaces.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPPlaces.iOS?label=Adobe.ACPPlaces.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPPlaces.iOS/) | [Link](https://github.com/adobe/xamarin-acpcore) |
| [Adobe Analytics](../adobe-analytics/index.md) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPAnalytics.Android?label=Adobe.ACPAnalytics.Android&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPAnalytics.Android/) | [![Nuget](https://img.shields.io/nuget/v/Adobe.ACPAnalytics.iOS?label=Adobe.ACPAnalytics.iOS&logo=xamarin)](https://www.nuget.org/packages/Adobe.ACPAnalytics.iOS/) | [Link](https://github.com/adobe/xamarin-acpanalytics) |

## Unity

<InlineAlert variant="info" slots="text"/>

Effective March 30, 2022, support for Adobe Experience Platform Mobile SDKs on Unity is no longer active. While you may continue using our libraries, Adobe no longer plans to update, modify, or provide support for these libraries. Please contact your Adobe CSM for details.

Adobe Experience Platform Mobile SDK plugin for Unity supports Unity **version 2019.4.34f1**. For the latest Unity installation instructions, see the README file in the [`unity-acpcore`](https://github.com/adobe/unity-acpcore) repository.

<InlineAlert variant="info" slots="text"/>

Adobe Experience Platform Mobile SDK plugins for Unity are compatible only with [Android](#android) and [iOS — Objective-C](#ios-objective-c) libraries, at this time.

To start using the Adobe Experience Platform Mobile SDK for Unity, open your application and import the following Unity package(s):

| Extension | Github | Sample App |
|---|---|---|
| [Mobile Core](../mobile-core/index.md) | [Link](https://github.com/adobe/unity-acpcore/tree/master/bin) | [Sample](https://github.com/adobe/unity-acpcore#sample-app) |
| Adobe Experience Platform Assurance | [Link](https://github.com/adobe/unity-aepassurance/tree/master/bin) | [Sample](https://github.com/adobe/unity-aepassurance#sample-app) |
| [Adobe Analytics](../adobe-analytics/index.md) | [Link](https://github.com/adobe/unity-acpanalytics/tree/master/bin) | [Sample](https://github.com/adobe/unity-acpanalytics#sample-app) |
| [Profile](../profile/index.md) | [Link](https://github.com/adobe/unity_acpuserprofile/tree/master/bin) | [Sample](https://github.com/adobe/unity_acpuserprofile#sample-app) |
