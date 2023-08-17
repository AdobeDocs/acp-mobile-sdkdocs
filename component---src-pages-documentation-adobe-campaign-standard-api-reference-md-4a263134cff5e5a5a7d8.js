"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2127,5062],{35322:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return o},default:function(){return c}});var t,i=n(87462),r=n(63366),d=(n(15007),n(64983)),m=n(91515),l=n(45552),p=n(40901),s=["components"],o={},x=(t="TabsBlock",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),g={_frontmatter:o},u=m.Z;function c(e){var a=e.components,n=(0,r.Z)(e,s);return(0,d.mdx)(u,(0,i.Z)({},g,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"adobe-campaign-standard-api-reference"},"Adobe Campaign Standard API reference"),(0,d.mdx)(p.default,{query:"platform=outdated-version&componentClass=InlineNestedAlert",mdxType:"Alerts"}),(0,d.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,d.mdx)("p",null,"Returns the running version of the Campaign Standard extension."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(l.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(l.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("p",null,"React Native"),(0,d.mdx)(l.default,{query:"platform=react-native&api=extension-version",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,d.mdx)("p",null,"Registers the Campaign Standard extension with the Mobile Core."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(l.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(l.default,{query:"platform=ios&api=register-extension",mdxType:"Tabs"}),(0,d.mdx)("p",null,"React Native"),(0,d.mdx)(l.default,{query:"platform=react-native&api=register-extension",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"resetlinkagefields"},"resetLinkageFields"),(0,d.mdx)("p",null,"Clears previously stored linkage fields in the mobile SDK and triggers a Campaign rules download request to the configured Campaign server."),(0,d.mdx)("p",null,"This method unregisters any previously registered rules with the Rules Engine and clears cached rules from the most recent rules download."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(l.default,{query:"platform=android&api=reset-linkage-fields",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(l.default,{query:"platform=ios&api=reset-linkage-fields",mdxType:"Tabs"}),(0,d.mdx)("p",null,"React Native"),(0,d.mdx)(l.default,{query:"platform=react-native&api=reset-linkage-fields",mdxType:"Tabs"}),(0,d.mdx)("h2",{id:"setlinkagefields"},"setLinkageFields"),(0,d.mdx)("p",null,"Sets the Campaign linkage fields (CRM IDs) in the mobile SDK to be used for downloading personalized messages from Campaign."),(0,d.mdx)("p",null,"The set linkage fields are stored as a base64 encoded JSON string in memory and they are sent in a custom HTTP header ",(0,d.mdx)("inlineCode",{parentName:"p"},"X-InApp-Auth"),"."),(0,d.mdx)(x,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,d.mdx)("p",null,"Android"),(0,d.mdx)(l.default,{query:"platform=android&api=set-linkage-fields",mdxType:"Tabs"}),(0,d.mdx)("p",null,"iOS"),(0,d.mdx)(l.default,{query:"platform=ios&api=set-linkage-fields",mdxType:"Tabs"}),(0,d.mdx)("p",null,"React Native"),(0,d.mdx)(l.default,{query:"platform=react-native&api=set-linkage-fields",mdxType:"Tabs"}))}c.isMDXComponent=!0},45552:function(e,a,n){n.r(a),n.d(a,{_frontmatter:function(){return p},default:function(){return g}});var t,i=n(87462),r=n(63366),d=(n(15007),n(64983)),m=n(91515),l=["components"],p={},s=(t="Variant",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",e)}),o={_frontmatter:p},x=m.Z;function g(e){var a=e.components,n=(0,r.Z)(e,l);return(0,d.mdx)(x,(0,i.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(s,{platform:"android",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public String extensionVersion()\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"Campaign.extensionVersion();\n")),(0,d.mdx)(s,{platform:"ios",api:"extension-version",repeat:"10",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"+ (nonnull NSString*) extensionVersion;\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"let campaignVersion = ACPCampaign.extensionVersion()\n")),(0,d.mdx)("h4",{id:"objective-c"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objective-c"},"+ (NSString * _Nonnull)extensionVersion\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objective-c"},"NSString *campaignVersion = [ACPCampaign extensionVersion];\n")),(0,d.mdx)(s,{platform:"react-native",api:"extension-version",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"javascript"},"JavaScript"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"extensionVersion(): Promise<string>\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'ACPCampaign.extensionVersion().then(version => console.log("AdobeExperienceSDK: ACPCampaign version: " + version));\n')),(0,d.mdx)(s,{platform:"android",api:"register-extension",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-1"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static void registerExtension()\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"Campaign.registerExtension();\n")),(0,d.mdx)(s,{platform:"ios",api:"register-extension",repeat:"10",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-1"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"+ (void) registerExtension\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"ACPCampaign.registerExtension()\n")),(0,d.mdx)("h4",{id:"objective-c-1"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objective-c"},"+ (void) registerExtension\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objective-c"},"[ACPCampaign registerExtension];\n")),(0,d.mdx)(s,{platform:"react-native",api:"register-extension",repeat:"1",mdxType:"Variant"}),(0,d.mdx)("p",null,"When using React Native, register the Adobe Campaign Standard extension with Mobile Core in native code as shown on the Android and iOS tabs."),(0,d.mdx)(s,{platform:"android",api:"reset-linkage-fields",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-2"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static void resetLinkageFields()\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"Campaign.resetLinkageFields()\n")),(0,d.mdx)(s,{platform:"ios",api:"reset-linkage-fields",repeat:"10",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-2"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"+ (void) resetLinkageFields\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"ACPCampaign.resetLinkageFields()\n")),(0,d.mdx)("h4",{id:"objective-c-2"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objective-c"},"+ (void) resetLinkageFields\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objective-c"},"[ACPCampaign resetLinkageFields];\n")),(0,d.mdx)(s,{platform:"react-native",api:"reset-linkage-fields",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"javascript-1"},"JavaScript"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"resetLinkageFields()\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"ACPCampaign.resetLinkageFields();\n")),(0,d.mdx)(s,{platform:"android",api:"set-linkage-fields",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"java-3"},"Java"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},"public static void setLinkageFields(final Map<String, String> linkageFields)\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-java"},'HashMap<String, String> linkageFields = new HashMap<String, String>();\nlinkageFields.put("cusFirstName", "John");\nlinkageFields.put("cusLastName", "Doe");\nlinkageFields.put("cusEmail", "john.doe@email.com");\nCampaign.setLinkageFields(linkageFields);\n')),(0,d.mdx)(s,{platform:"ios",api:"set-linkage-fields",repeat:"10",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"swift-3"},"Swift"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},"+ (void) setLinkageFields: (nonnull NSDictionary<NSString*, NSString*>*) linkageFields\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-swift"},'ACPCampaign.setLinkageFields(["cusFirstName": "John", "cusLastName": "Doe", "cusEmail": "john.doe@email.com"])\n')),(0,d.mdx)("h4",{id:"objective-c-3"},"Objective-C"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objective-c"},"+ (void) setLinkageFields: (NSDictionary<NSString*, NSString*>*) linkageFields\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-objective-c"},'[ACPCampaign setLinkageFields:@{@"cusFirstName" : @"John", @"cusLastName": @"Doe", @"cusEmail": @"john.doe@email.com"}];\n')),(0,d.mdx)(s,{platform:"react-native",api:"set-linkage-fields",repeat:"5",mdxType:"Variant"}),(0,d.mdx)("h4",{id:"javascript-2"},"JavaScript"),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Syntax")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"setLinkageFields(linkageFields: { string: string })\n")),(0,d.mdx)("p",null,(0,d.mdx)("strong",{parentName:"p"},"Example")),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},'ACPCampaign.setLinkageFields({"firstName": "John"});\n')))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-campaign-standard-api-reference-md-4a263134cff5e5a5a7d8.js.map