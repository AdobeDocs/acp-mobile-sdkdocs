"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[5609],{70434:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return c},default:function(){return u}});var t,i=n(87462),o=n(63366),l=(n(15007),n(64983)),r=n(91515),p=["components"],c={},d=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.mdx)("div",e)}),m={_frontmatter:c},s=r.Z;function u(e){var a=e.components,n=(0,o.Z)(e,p);return(0,l.mdx)(s,(0,i.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(d,{platform:"android",task:"enable",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"java"},"Java"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"MobileCore.setLogLevel(LoggingMode.DEBUG);\n// MobileCore.setLogLevel(LoggingMode.VERBOSE);\n// MobileCore.setLogLevel(LoggingMode.WARNING);\n// MobileCore.setLogLevel(LoggingMode.ERROR);\n")),(0,l.mdx)(d,{platform:"ios",task:"enable",repeat:"4",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"swift"},"Swift"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"ACPCore.setLogLevel(ACPMobileLogLevel.debug)\n// ACPCore.setLogLevel(ACPMobileLogLevel.verbose)\n// ACPCore.setLogLevel(ACPMobileLogLevel.warning)\n// ACPCore.setLogLevel(ACPMobileLogLevel.error)\n")),(0,l.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},"[ACPCore setLogLevel:ACPMobileLogLevelDebug];\n// [ACPCore setLogLevel:ACPMobileLogLevelVerbose];\n// [ACPCore setLogLevel:ACPMobileLogLevelWarning];\n// [ACPCore setLogLevel:ACPMobileLogLevelError];\n")),(0,l.mdx)(d,{platform:"react-native",task:"enable",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"javascript"},"Javascript"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"ACPCore.setLogLevel(ACPMobileLogLevel.DEBUG);\n//ACPCore.setLogLevel(ACPMobileLogLevel.VERBOSE);\n//ACPCore.setLogLevel(ACPMobileLogLevel.WARNING);\n//ACPCore.setLogLevel(ACPMobileLogLevel.ERROR);\n")),(0,l.mdx)(d,{platform:"flutter",task:"enable",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"dart"},"Dart"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-dart"},"FlutterACPCore.setLogLevel(ACPLoggingLevel.DEBUG);\n//FlutterACPCore.setLogLevel(ACPLoggingLevel.VERBOSE);\n//FlutterACPCore.setLogLevel(ACPLoggingLevel.WARNING);\n//FlutterACPCore.setLogLevel(ACPLoggingLevel.ERROR);\n")),(0,l.mdx)(d,{platform:"cordova",task:"enable",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"cordova"},"Cordova"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"ACPCore.setLogLevel(ACPCore.ACPMobileLogLevelError, successCallback, errorCallback);\nACPCore.setLogLevel(ACPCore.ACPMobileLogLevelWarning, successCallback, errorCallback);\nACPCore.setLogLevel(ACPCore.ACPMobileLogLevelDebug, successCallback, errorCallback);\nACPCore.setLogLevel(ACPCore.ACPMobileLogLevelVerbose, successCallback, errorCallback);\n")),(0,l.mdx)(d,{platform:"unity",task:"enable",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c"},"C#"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},"ACPCore.SetLogLevel(ACPCore.ACPMobileLogLevel.ERROR);\nACPCore.SetLogLevel(ACPCore.ACPMobileLogLevel.WARNING);\nACPCore.SetLogLevel(ACPCore.ACPMobileLogLevel.DEBUG);\nACPCore.SetLogLevel(ACPCore.ACPMobileLogLevel.VERBOSE);\n")),(0,l.mdx)(d,{platform:"android",task:"metrics",repeat:"7",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"java-1"},"Java"),(0,l.mdx)("p",null,"With the ",(0,l.mdx)("inlineCode",{parentName:"p"},"onResume")," function, start Lifecycle data collection:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"@Override  \n   public void onResume() {  \n      MobileCore.setApplication(getApplication());\n      MobileCore.lifecycleStart(null);\n   }\n")),(0,l.mdx)("p",null,"Setting the application is only necessary on activities that are entry points for your application. However, setting the application on each ",(0,l.mdx)("inlineCode",{parentName:"p"},"Activity")," has no negative impact and ensures that the SDK always has the necessary reference to your application. As a result, you should call ",(0,l.mdx)("inlineCode",{parentName:"p"},"setApplication")," on each of your activities."),(0,l.mdx)("p",null,"You can use the ",(0,l.mdx)("inlineCode",{parentName:"p"},"onPause")," function to pause the lifecycle data collection:"),(0,l.mdx)("p",null,"To ensure accurate session and crash reporting, this call must be added to every ",(0,l.mdx)("inlineCode",{parentName:"p"},"Activity"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-java"},"@Override\n   public void onPause() {\n      MobileCore.lifecyclePause();\n   }\n")),(0,l.mdx)(d,{platform:"ios",task:"metrics",repeat:"16",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"swift-1"},"Swift"),(0,l.mdx)("p",null,"Start Lifecycle data collection by calling ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:")," from within the callback of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"ACPCore::start:")," method in your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," delegate method."),(0,l.mdx)("p",null,"If your iOS application supports background capabilities, your ",(0,l.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," method might be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:")," should only be called when the application state is not equal to ",(0,l.mdx)("inlineCode",{parentName:"p"},"UIApplicationStateBackground"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {\n    // register the lifecycle extension\n    ACPLifecycle.registerExtension();\n\n    let appState = application.applicationState;            \n    ACPCore.start {\n        // only start lifecycle if the application is not in the background    \n        if appState != .background {\n            ACPCore.lifecycleStart(nil)\n        }    \n    }    \n}\n")),(0,l.mdx)("p",null,"When launched, if your app is resuming from a backgrounded state, iOS might call your ",(0,l.mdx)("inlineCode",{parentName:"p"},"applicationWillEnterForeground:")," delegate method. You also need to call ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:"),", but this time you do not need all of the supporting code that you used in ",(0,l.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"func applicationWillEnterForeground(_ application: UIApplication) {    \n    ACPCore.lifecycleStart(nil)\n}\n")),(0,l.mdx)("p",null,"When the app enters the background, pause Lifecycle data collection from your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"applicationDidEnterBackground:")," delegate method:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-swift"},"func applicationDidEnterBackground(_ application: UIApplication) {    \n    ACPCore.lifecyclePause()\n}\n")),(0,l.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,l.mdx)("p",null,"Start Lifecycle data collection by calling ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:")," from within the callback of the ",(0,l.mdx)("inlineCode",{parentName:"p"},"ACPCore::start:")," method in your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," delegate method."),(0,l.mdx)("p",null,"If your iOS application supports background capabilities, you ",(0,l.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:")," method may be called when iOS launches your app in the background. If you do not want background launches to count towards your lifecycle metrics, then ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:")," should only be called when the application state is not equal to ",(0,l.mdx)("inlineCode",{parentName:"p"},"UIApplicationStateBackground"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL) application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    // register the lifecycle extension\n    [ACPLifecycle registerExtension];\n\n    const UIApplicationState appState = application.applicationState;\n    [ACPCore start:^{\n        // only start lifecycle if the application is not in the background\n        if (appState != UIApplicationStateBackground) {\n            [ACPCore lifecycleStart:nil];\n        }\n    }];\n}\n")),(0,l.mdx)("p",null,"When launched, if your app is resuming from a backgrounded state, iOS may call your ",(0,l.mdx)("inlineCode",{parentName:"p"},"applicationWillEnterForeground:")," delegate method. You also need to call ",(0,l.mdx)("inlineCode",{parentName:"p"},"lifecycleStart:"),", but this time you do not need all of the supporting code that you used in ",(0,l.mdx)("inlineCode",{parentName:"p"},"application:didFinishLaunchingWithOptions:"),":"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) applicationWillEnterForeground:(UIApplication *)application {\n    [ACPCore lifecycleStart:nil];\n}\n")),(0,l.mdx)("p",null,"When the app enters the background, pause Lifecycle data collection from your app's ",(0,l.mdx)("inlineCode",{parentName:"p"},"applicationDidEnterBackground:")," delegate method:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-objectivec"}," - (void) applicationDidEnterBackground:(UIApplication *)application {\n    [ACPCore lifecyclePause];\n }\n")),(0,l.mdx)(d,{platform:"react-native",task:"metrics",repeat:"6",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"javascript-1"},"JavaScript"),(0,l.mdx)("p",null,"You should implement Lifecycle metrics in native code. However, Lifecycle's APIs are available in Javascript if it fits your use case."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Starting a Lifecycle event")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'ACPCore.lifecycleStart({"lifecycleStart": "myData"});\n')),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Pausing a Lifecycle event")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"ACPCore.lifecyclePause();\n")),(0,l.mdx)(d,{platform:"flutter",task:"metrics",repeat:"2",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"flutter"},"Flutter"),(0,l.mdx)("p",null,"You need to implement Lifecycle in native Android and iOS code. For more information on implementing, please read the ",(0,l.mdx)("a",{parentName:"p",href:"../lifecycle-for-edge-network/index.md"},"Lifecycle documentation"),"."),(0,l.mdx)(d,{platform:"cordova",task:"metrics",repeat:"4",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"cordova-1"},"Cordova"),(0,l.mdx)("p",null,"You need to implement Lifecycle in native Android and iOS code. For more information on implementing, please read the ",(0,l.mdx)("a",{parentName:"p",href:"../lifecycle-for-edge-network/index.md"},"Lifecycle documentation"),"."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Getting Lifecycle version")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"ACPLifecycle.extensionVersion(function(version) {\n    console.log(version);\n}, function(error) {\n    console.log(error);\n});\n")),(0,l.mdx)(d,{platform:"unity",task:"metrics",repeat:"3",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c-1"},"C#"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Starting and pausing a lifecycle event")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},'private void OnApplicationPause(bool pauseStatus)\n{\n  if (pauseStatus)\n  {\n    ACPCore.LifecyclePause();\n  }\n  else\n  {\n    var cdata = new Dictionary<string, string>();\n    cdata.Add("launch.data", "added");\n    ACPCore.LifecycleStart(cdata);\n  }\n}\n')),(0,l.mdx)(d,{platform:"xamarin",task:"metrics",repeat:"7",mdxType:"Variant"}),(0,l.mdx)("h4",{id:"c-2"},"C#"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"iOS")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Starting and pausing a lifecycle event")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},"public override void WillEnterForeground(UIApplication uiApplication)\n{\n  base.WillEnterForeground(uiApplication);\n  ACPCore.LifecycleStart(null);\n}\n\npublic override void DidEnterBackground(UIApplication uiApplication)\n{\n  base.DidEnterBackground(uiApplication);\n  ACPCore.LifecycleStart(null);\n}\n")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Android")),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Starting and pausing a lifecycle event")),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-csharp"},"protected override void OnResume()\n{\n  base.OnResume();\n  ACPCore.LifecycleStart(null);\n}\n\nprotected override void OnPause()\n{\n  base.OnPause();\n  ACPCore.LifecyclePause();\n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-getting-started-tabs-enable-debug-logging-md-a238be4c24d89605b5db.js.map