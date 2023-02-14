import Tabs from './tabs/migrate-to-android.md'

# Migrate to latest Adobe Experience Platform Mobile SDK for Android

If you have implemented the previous versions of the Android Mobile SDKs, then this guide will help you understand the steps required to migrate to the latest version. In summary, you will need to:

1. [Switch Gradle dependencies from 1.x to 2.0](#switch-gradle-dependencies-to-latest-versions)
2. [Update SDK initialization](#update-sdk-initialization)
3. [Replace the deprecated API calls with the new API calls](#replace-the-deprecated-api-calls-with-the-new-api-calls1)

## Switch Gradle dependencies to latest versions

At this time, the following Android SDK 1.x libraries may be switched out with their respective Android SDK 2.0 libraries. See instructions on proceeding further if you have [manually imported SDK libraries](#manual-library-import) , or if you used [Gradle to manage SDK dependencies](#Gradle).

<InlineAlert variant="warning" slots="text"/>

Since we will not provide a `Core bundle` artifact automatically including Core, Signal, Lifecycle and Identity artifacts, you need to manually import those libraries in Android SDK 2.0.

| Extension Name  | Latest Version                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| :-------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sdk-core        | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/core.svg?logo=android&logoColor=white&label=core)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/core) [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/identity.svg?logo=android&logoColor=white&label=identity)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/identity) [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/signal.svg?logo=android&logoColor=white&label=signal)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/signal) [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/lifecycle.svg?logo=android&logoColor=white&label=lifecycle)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/lifecycle) |
| UserProfile     | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/userprofile.svg?logo=android&logoColor=white&label=userprofile)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/userprofile)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Analytics       | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/analytics.svg?logo=android&logoColor=white&label=analytics)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/analytics)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Audience        | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/audience.svg?logo=android&logoColor=white&label=audience)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/audience)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Target          | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/target.svg?logo=android&logoColor=white&label=target)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/target)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Media           | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/media.svg?logo=android&logoColor=white&label=media)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/media)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| Places          | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/places.svg?logo=android&logoColor=white&label=places)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/places)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Assurance       | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/assurance.svg?logo=android&logoColor=white&label=assurance)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/assurance)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Campaign        | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaign.svg?logo=android&logoColor=white&label=campaign)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaign)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| CampaignClassic | [![Maven Central](https://img.shields.io/maven-central/v/com.adobe.marketing.mobile/campaignclassic.svg?logo=android&logoColor=white&label=campaignclassic)](https://mvnrepository.com/artifact/com.adobe.marketing.mobile/campaignclassic)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

### Manual library import

If you are manually importing the Mobile SDK libraries, update your app dependencies to the latest versions shown in the table above.

### Gradle

If you are using Gradle to manage your app dependencies, the following example shows how to upgrade to latest version in the `build.gradle` file.

```java
dependencies {
    //replace sdk-core with Core/Lifecycle/Identity/Signal 2.0
    //implementation 'com.adobe.marketing.mobile:sdk-core:1.+'
    implementation 'com.adobe.marketing.mobile:core:2.+'
    implementation 'com.adobe.marketing.mobile:identity:2.+'
    implementation 'com.adobe.marketing.mobile:lifecycle:2.+'
    implementation 'com.adobe.marketing.mobile:signal:2.+'

    // replace UserProfile 1.+ with UserProfile 2.0
    //implementation 'com.adobe.marketing.mobile:userprofile:1.+'
    implementation 'com.adobe.marketing.mobile:userprofile:2.+'

}
```

<InlineAlert variant="warning" slots="text"/>

Using dynamic dependency versions is not recommended for production apps. Refer to this [page](https://github.com/adobe/aepsdk-core-android/blob/main/Documentation/MobileCore/gradle-dependencies.md) for managing Gradle dependencies.

Save the `build.gradle` file and select `Sync Project with Gradle Files` in Android Studio to download the latet Android SDK.

## Update SDK initialization

After you have imported the new Android libraries, you'll need to update SDK initialization code as described below. With Mobile Core version 2.0.0 and above, the `MobileCore.start()` API is no longer required. The SDK has simplified initialization and registration of extensions by providing the `MobileCore.registerExtensions()` API. After the given extensions have been registered, the SDK will be initialized and the completion block will be executed. Code which used to reside in the start() block will now reside in the `MobileCore.registerExtensions()`'s completion block.

The following code snippets show the recommended initialization code for the latest Mobile SDKs.

<TabsBlock orientation="horizontal" slots="heading, content" repeat="2"/>

Java

<Tabs query="platform=java"/>

Kotlin

<Tabs query="platform=kotlin"/>

## Replace the deprecated API calls with the new API calls

Several Android 1.x APIs are depreacted in Android 2.0 libraries, you can choose to replace the deprecated API calls in your code with calling the alternative APIs:

| Deprecated API                    | Alternative API                    |
| :-------------------------------- | :--------------------------------- |
| `Identity.registerExtension`      | `MobileCore.registerExtensions`    |
| `Signal.registerExtension`        | `MobileCore.registerExtensions`    |
| `Lifecycle.registerExtension`     | `MobileCore.registerExtensions`    |
| `UserProfile.registerExtension`   | `MobileCore.registerExtensions`    |
| `UserProfile.updateUserAttribute` | `UserProfile.updateUserAttributes` |
| `UserProfile.removeUserAttribute` | `UserProfile.removeUserAttributes` |