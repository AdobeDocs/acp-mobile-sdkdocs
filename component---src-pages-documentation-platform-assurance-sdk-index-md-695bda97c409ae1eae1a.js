"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[4606,6203],{52368:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return d},default:function(){return g}});var t=n(87462),r=n(63366),o=(n(15007),n(64983)),i=n(91515),s=n(48761),l=n(40901),p=["components"],d={},m=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",a)}},c=m("TabsBlock"),u=m("InlineAlert"),x={_frontmatter:d},h=i.Z;function g(e){var a=e.components,n=(0,r.Z)(e,p);return(0,o.mdx)(h,(0,t.Z)({},x,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"adobe-experience-platform-assurance-extension"},"Adobe Experience Platform Assurance extension"),(0,o.mdx)(l.default,{query:"platform=outdated-version&componentClass=InlineNestedAlert",mdxType:"Alerts"}),(0,o.mdx)("p",null,"This extension enables capabilities for Adobe Experience Platform Assurance."),(0,o.mdx)("p",null,"To get started with Assurance in your app, you'll need to:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"Install the AEP Assurance extension in the ",(0,o.mdx)("a",{parentName:"li",href:"https://experience.adobe.com/#/data-collection"},"Data Collection UI")),(0,o.mdx)("li",{parentName:"ol"},"Add AEP Assurance SDK extension library to your app",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"Import AEP Assurance into your app"),(0,o.mdx)("li",{parentName:"ol"},"Register and implement extension APIs")))),(0,o.mdx)("h2",{id:"install-the-aep-assurance-extension-in-the-data-collection-ui"},"Install the AEP Assurance extension in the Data Collection UI"),(0,o.mdx)("p",null,"Go to the ",(0,o.mdx)("a",{parentName:"p",href:"https://experience.adobe.com/#/data-collection/"},"Experience Platform Data Collection UI")," and select your mobile property:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"In the Data Collection UI, select the ",(0,o.mdx)("strong",{parentName:"li"},"Extensions")," tab."),(0,o.mdx)("li",{parentName:"ol"},"On the ",(0,o.mdx)("strong",{parentName:"li"},"Catalog")," tab, locate the ",(0,o.mdx)("strong",{parentName:"li"},"AEP Assurance")," extension, and select ",(0,o.mdx)("strong",{parentName:"li"},"Install"),"."),(0,o.mdx)("li",{parentName:"ol"},"Follow the publishing process to update the Mobile SDK configuration.")),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"306px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"112.09150326797386%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/acp-mobile-sdkdocs/static/d09b389ed5fea15148d3bad4ffd769c0/9423a/assurance-extension.webp 306w"],sizes:"(max-width: 306px) 100vw, 306px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/acp-mobile-sdkdocs/static/d09b389ed5fea15148d3bad4ffd769c0/bed10/assurance-extension.png 306w"],sizes:"(max-width: 306px) 100vw, 306px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acp-mobile-sdkdocs/static/d09b389ed5fea15148d3bad4ffd769c0/bed10/assurance-extension.png",alt:"assurance extension",title:"assurance extension",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"add-the-aep-assurance-extension-to-your-app"},"Add the AEP Assurance extension to your app"),(0,o.mdx)("h3",{id:"import-the-library-to-your-app-code"},"Import the library to your app code"),(0,o.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"7",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&task=import-library",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(s.default,{query:"platform=ios&task=import-library",mdxType:"Tabs"}),(0,o.mdx)("p",null,"React Native"),(0,o.mdx)(s.default,{query:"platform=react-native&task=import-library",mdxType:"Tabs"}),(0,o.mdx)("p",null,"Flutter"),(0,o.mdx)(s.default,{query:"platform=flutter&task=import-library",mdxType:"Tabs"}),(0,o.mdx)("p",null,"Cordova"),(0,o.mdx)(s.default,{query:"platform=cordova&task=import-library",mdxType:"Tabs"}),(0,o.mdx)("p",null,"Unity"),(0,o.mdx)(s.default,{query:"platform=unity&task=import-library",mdxType:"Tabs"}),(0,o.mdx)("p",null,"Xamarin"),(0,o.mdx)(s.default,{query:"platform=xamarin&task=import-library",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"register-aepassurance-with-mobile-core"},"Register AEPAssurance with Mobile Core"),(0,o.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"7",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"Android"),(0,o.mdx)(s.default,{query:"platform=android&task=register-assurance",mdxType:"Tabs"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(s.default,{query:"platform=ios&task=register-assurance",mdxType:"Tabs"}),(0,o.mdx)("p",null,"React Native"),(0,o.mdx)(s.default,{query:"platform=react-native&task=register-assurance",mdxType:"Tabs"}),(0,o.mdx)("p",null,"Flutter"),(0,o.mdx)(s.default,{query:"platform=flutter&task=register-assurance",mdxType:"Tabs"}),(0,o.mdx)("p",null,"Cordova"),(0,o.mdx)(s.default,{query:"platform=cordova&task=register-assurance",mdxType:"Tabs"}),(0,o.mdx)("p",null,"Unity"),(0,o.mdx)(s.default,{query:"platform=unity&task=register-assurance",mdxType:"Tabs"}),(0,o.mdx)("p",null,"Xamarin"),(0,o.mdx)(s.default,{query:"platform=xamarin&task=register-assurance",mdxType:"Tabs"}),(0,o.mdx)("h3",{id:"implement-aep-assurance-session-start-apis-ios-only"},"Implement AEP Assurance session start APIs (iOS only)"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("a",{parentName:"p",href:"./assurance-api-reference.md#startsession"},"startSession")," API needs to be called to begin an Adobe Experience Platform Assurance session. When called, SDK displays a PIN authentication overlay to begin a session. "),(0,o.mdx)("p",null,"To learn how to start sessions for other platforms, please read the ",(0,o.mdx)("a",{parentName:"p",href:"./api-reference.md"},"Platform Assurance API guide"),"."),(0,o.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You may call this API when the app launches with a url (see code snippet below for sample usage) ",(0,o.mdx)("br",null),(0,o.mdx)("br",null)," The Assurance Android extension does not require this API to be called since it registers the app lifecycle handlers which automatically pick up any deep links and use them to start the session.",(0,o.mdx)("br",null),(0,o.mdx)("br",null),"When using the Assurance iOS extension, you should call this API when the app launches with a URL (see code snippet below for sample usage)."),(0,o.mdx)(c,{orientation:"horizontal",slots:"heading, content",repeat:"1",mdxType:"TabsBlock"}),(0,o.mdx)("p",null,"iOS"),(0,o.mdx)(s.default,{query:"platform=ios&task=implement-assurance",mdxType:"Tabs"}))}g.isMDXComponent=!0},48761:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return u}});var t,r=n(87462),o=n(63366),i=(n(15007),n(64983)),s=n(91515),l=["components"],p={},d=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),m={_frontmatter:p},c=s.Z;function u(e){var a=e.components,n=(0,o.Z)(e,l);return(0,i.mdx)(c,(0,r.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.mdx)(d,{platform:"android",task:"import-library",repeat:"4",mdxType:"Variant"}),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Add the following libraries in your project's ",(0,i.mdx)("inlineCode",{parentName:"li"},"build.gradle")," file:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"implementation 'com.adobe.marketing.mobile:core:1+'\nimplementation 'com.adobe.marketing.mobile:assurance:1+'\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Import the Assurance library along with the other Mobile SDK libraries:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},"import com.adobe.marketing.mobile.Assurance;\nimport com.adobe.marketing.mobile.MobileCore;\n")),(0,i.mdx)(d,{platform:"ios",task:"import-library",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("p",null,"Add the library to your project via your ",(0,i.mdx)("a",{parentName:"p",href:"https://cocoapods.org/pods/AEPAssurance"},"Cocoapods")," ",(0,i.mdx)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-pod"},"pod 'ACPCore'\npod 'AEPAssurance','~> 1.0'\n")),(0,i.mdx)("p",null,"Import the Assurance extension along with the other Adobe Mobile extensions:"),(0,i.mdx)("h4",{id:"swift"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"import ACPCore\nimport AEPAssurance\n")),(0,i.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},'#import "ACPCore.h"\n#import "AEPAssurance.h"\n')),(0,i.mdx)(d,{platform:"react-native",task:"import-library",repeat:"13",mdxType:"Variant"}),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install the AEP Assurance package.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install @adobe/react-native-aepassurance@2.0.1\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Link the module.")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"React Native 0.60+")),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/react-native-community/cli/blob/master/docs/autolinking.md"},"CLI autolink feature")," links the module while building the app."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"React Native ","<","= 0.59")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"react-native link @adobe/react-native-aepassurance\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Note")," For ",(0,i.mdx)("inlineCode",{parentName:"p"},"iOS")," using ",(0,i.mdx)("inlineCode",{parentName:"p"},"cocoapods"),", run:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"cd ios/ && pod install\n")),(0,i.mdx)("ol",{start:3},(0,i.mdx)("li",{parentName:"ol"},"Import the extension.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import {AEPAssurance} from '@adobe/react-native-aepassurance';\n")),(0,i.mdx)("ol",{start:4},(0,i.mdx)("li",{parentName:"ol"},"Get the extension version.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'AEPAssurance.extensionVersion().then(version => console.log("AdobeExperienceSDK: AEPAssurance version: " + version));\n')),(0,i.mdx)(d,{platform:"flutter",task:"import-library",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"javascript"},"JavaScript"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"Install the AEP Assurance package.")),(0,i.mdx)("p",null,"Installation instructions can be found in the ",(0,i.mdx)("a",{parentName:"p",href:"https://pub.dev/packages/flutter_assurance/install"},"Flutter documentation"),"."),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Import the extension.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter_assurance/flutter_assurance.dart';\n")),(0,i.mdx)("ol",{start:3},(0,i.mdx)("li",{parentName:"ol"},"Get the extension version.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-dart"},"String version = await FlutterAEPAssurance.extensionVersion;\n")),(0,i.mdx)(d,{platform:"cordova",task:"import-library",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"javascript-1"},"JavaScript"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"After creating your Cordova app and adding the Android and iOS platforms, the AEPAssurance extension for Cordova can be added with this command:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"cordova plugin add https://github.com/adobe/cordova-aepassurance.git\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Get the extension version.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'AEPAssurance.extensionVersion(function(version) {  \n    console.log("AEPAssurance version: " + version);\n}, function(error) {  \n    console.log(error);  \n});\n')),(0,i.mdx)(d,{platform:"unity",task:"import-library",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"c"},"C#"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"After importing the ",(0,i.mdx)("a",{parentName:"li",href:"https://github.com/adobe/unity-aepassurance/tree/master/bin"},"AEPAssurance.unitypackage"),", the AEP Assurance extension for Unity can be added with the following code in the MainScript:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-csharp"},"using com.adobe.marketing.mobile;\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Get the extension version.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-csharp"},"AEPAssurance.extensionVersion();\n")),(0,i.mdx)(d,{platform:"xamarin",task:"import-library",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"c-1"},"C#"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},"After adding the ",(0,i.mdx)("a",{parentName:"li",href:"https://www.nuget.org/packages/Adobe.AEPAssurance.iOS/"},"iOS")," or ",(0,i.mdx)("a",{parentName:"li",href:"https://www.nuget.org/packages/Adobe.AEPAssurance.Android/"},"Android")," AEP Assurance NuGet package, the Assurance extension can be added by this import statement:")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-csharp"},"using Com.Adobe.Marketing.Mobile;\n")),(0,i.mdx)("ol",{start:2},(0,i.mdx)("li",{parentName:"ol"},"Get the extension version.")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-csharp"},"AEPAssurance.ExtensionVersion();\n")),(0,i.mdx)(d,{platform:"android",task:"register-assurance",repeat:"7",mdxType:"Variant"}),(0,i.mdx)("p",null,"To start using the extension library, you must first register the extension with the ",(0,i.mdx)("a",{parentName:"p",href:"../mobile-core/index.md"},"Mobile Core")," extension."),(0,i.mdx)("h4",{id:"java"},"Java"),(0,i.mdx)("p",null,"Register the extension when you register other extensions."),(0,i.mdx)("p",null,"To find your app ID, which is mentioned below, please read the ",(0,i.mdx)("a",{parentName:"p",href:"../mobile-core/configuration/index.md#configure-with-app-id-per-environment"},"Mobile Install Instructions"),'. Within the "Publishing Flow", select the small gray box next to the "Environment" dropdown.'),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"566px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.062500000000004%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/acp-mobile-sdkdocs/static/80db4ace0a66a85ca7634b717a6e6380/5530d/install-instructions.webp 320w","/acp-mobile-sdkdocs/static/80db4ace0a66a85ca7634b717a6e6380/2ba41/install-instructions.webp 566w"],sizes:"(max-width: 566px) 100vw, 566px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/acp-mobile-sdkdocs/static/80db4ace0a66a85ca7634b717a6e6380/dd4a7/install-instructions.png 320w","/acp-mobile-sdkdocs/static/80db4ace0a66a85ca7634b717a6e6380/7ef45/install-instructions.png 566w"],sizes:"(max-width: 566px) 100vw, 566px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/acp-mobile-sdkdocs/static/80db4ace0a66a85ca7634b717a6e6380/7ef45/install-instructions.png",alt:"install instructions",title:"install instructions",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-java"},' public class MobileApp extends Application {\n    @Override\n    public void onCreate() {\n        super.onCreate();\n        MobileCore.setApplication(this);\n\n        try {\n        // register other necessary extensions\n        Assurance.registerExtension();            \n        MobileCore.start(new AdobeCallback() {\n            @Override\n            public void call(final Object o) {\n                MobileCore.configureWithAppID("yourAppId");\n            }});\n        } catch (Exception e) {\n        // Log the exception\n        }\n    }\n}\n')),(0,i.mdx)(d,{platform:"ios",task:"register-assurance",repeat:"5",mdxType:"Variant"}),(0,i.mdx)("p",null,"To start using the extension library, you must first register the extension with the ",(0,i.mdx)("a",{parentName:"p",href:"../mobile-core/index.md"},"Mobile Core")," extension."),(0,i.mdx)("h4",{id:"swift-1"},"Swift"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},'func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n       // set app id from the Data Collection UI\n     ACPCore.configure(withAppId: "yourAppId")\n     AEPAssurance.registerExtension()\n     ACPCore.start(nil)\n     return true;\n}\n')),(0,i.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},'- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {\n    [ACPCore configureWithAppId:@"yourAppId"]; // set app id from the Data Collection UI\n    [AEPAssurance registerExtension];\n    [ACPCore start:nil];\n    return YES;\n }\n')),(0,i.mdx)(d,{platform:"react-native",task:"register-assurance",repeat:"2",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"javascript-2"},"JavaScript"),(0,i.mdx)("p",null,"When using React Native, register AEP Assurance with Mobile Core in native code as shown on the Android and iOS tabs."),(0,i.mdx)(d,{platform:"flutter",task:"register-assurance",repeat:"2",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"dart"},"Dart"),(0,i.mdx)("p",null,"When using Flutter, register AEP Assurance with Mobile Core in native code as shown on the Android and iOS tabs."),(0,i.mdx)(d,{platform:"cordova",task:"register-assurance",repeat:"2",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"javascript-3"},"JavaScript"),(0,i.mdx)("p",null,"When using Cordova, register AEP Assurance with Mobile Core in native code as shown on the Android and iOS tabs."),(0,i.mdx)(d,{platform:"unity",task:"register-assurance",repeat:"3",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"c-2"},"C#"),(0,i.mdx)("p",null,"Register the extension in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"start()")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-csharp"},'using com.adobe.marketing.mobile;\nusing using AOT;\n\npublic class MainScript : MonoBehaviour\n{\n    [MonoPInvokeCallback(typeof(AdobeStartCallback))]\n    public static void HandleStartAdobeCallback()\n    {   \n        // set app id from the Data Collection UI\n        ACPCore.ConfigureWithAppID("yourAppId");\n    }\n\n    // Start is called before the first frame update\n    void Start()\n    {   \n        AEPAssurance.registerExtension();\n        ACPCore.Start(HandleStartAdobeCallback);\n    }\n}\n')),(0,i.mdx)(d,{platform:"xamarin",task:"register-assurance",repeat:"6",mdxType:"Variant"}),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"iOS")),(0,i.mdx)("p",null,"Register the AEPAssurance extension in your app's ",(0,i.mdx)("inlineCode",{parentName:"p"},"FinishedLaunching()")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-csharp"},'public override bool FinishedLaunching(UIApplication app, NSDictionary options)\n{\n  global::Xamarin.Forms.Forms.Init();\n  LoadApplication(new App());\n  AEPAssurance.RegisterExtension();\n  // start Mobile Core\n  ACPCore.Start(startCallback);\n  return base.FinishedLaunching(app, options);\n}\n\nprivate void startCallback()\n{\n  // set app id from the Data Collection UI\n  ACPCore.ConfigureWithAppID("yourAppId");\n}\n')),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Android")),(0,i.mdx)("p",null,"Register the AEPAssurance extension in your app's ",(0,i.mdx)("inlineCode",{parentName:"p"},"OnCreate()")," function:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-csharp"},'protected override void OnCreate(Bundle savedInstanceState)\n{\n  base.OnCreate(savedInstanceState);\n  global::Xamarin.Forms.Forms.Init(this, savedInstanceState);\n  LoadApplication(new App());\n  AEPAssurance.RegisterExtension();\n\n  // start Mobile Core\n  ACPCore.Start(new CoreStartCompletionCallback());\n}\n\nclass CoreStartCompletionCallback : Java.Lang.Object, IAdobeCallback\n{\n  public void Call(Java.Lang.Object callback)\n  {\n    // set app id from the Data Collection UI\n    ACPCore.ConfigureWithAppID("yourAppId");\n  }\n}\n')),(0,i.mdx)(d,{platform:"ios",task:"implement-assurance",repeat:"12",mdxType:"Variant"}),(0,i.mdx)("h4",{id:"swift-2"},"Swift"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {\n    AEPAssurance.startSession(url)\n    return true\n}\n")),(0,i.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,i.mdx)("inlineCode",{parentName:"p"},"scene(_:openURLContexts:)")," method as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-swift"},"func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {\n    AEPAssurance.startSession((URLContexts.first!).url)\n}\n")),(0,i.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Syntax")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"+ (void) startSession: (NSURL* _Nonnull) url;\n")),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"Example")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (BOOL)application:(UIApplication *)app openURL:(nonnull NSURL *)url options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {\n    [AEPAssurance startSession:url];\n    return true;\n}\n")),(0,i.mdx)("p",null,"In iOS 13 and later, for a scene-based application, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"UISceneDelegate"),"'s ",(0,i.mdx)("inlineCode",{parentName:"p"},"scene(_:openURLContexts:)")," method as follows:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-objectivec"},"- (void) scene:(UIScene *)scene openURLContexts:(NSSet<UIOpenURLContext *> *)URLContexts {\n    UIOpenURLContext * urlContext = URLContexts.anyObject;\n    if (urlContext != nil) {\n        [AEPAssurance startSession:urlContext.URL];\n    }\n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-platform-assurance-sdk-index-md-695bda97c409ae1eae1a.js.map