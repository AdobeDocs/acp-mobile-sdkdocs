"use strict";(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1179],{11762:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return h}});var a=n(87462),i=n(63366),r=(n(15007),n(64983)),o=n(91515),d=n(44008),s=["components"],l={},m=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)}},p=m("TabsBlock"),u=m("InlineAlert"),x={_frontmatter:l},c=o.Z;function h(e){var t=e.components,n=(0,i.Z)(e,s);return(0,r.mdx)(c,(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"audience-manager-api-reference"},"Audience Manager API reference"),(0,r.mdx)("h2",{id:"extensionversion"},"extensionVersion"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionVersion()")," API returns the version of the Audience extension that is registered with the Mobile Core extension."),(0,r.mdx)("p",null,"To get the version of the Audience extension, use the following code sample:"),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(d.default,{query:"platform=android&api=extension-version",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(d.default,{query:"platform=ios&api=extension-version",mdxType:"Tabs"}),(0,r.mdx)("p",null,"React Native"),(0,r.mdx)(d.default,{query:"platform=react-native&api=extension-version",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"getvisitorprofile"},"getVisitorProfile"),(0,r.mdx)("p",null,"This API returns the most recently obtained visitor profile. The visitor profile is saved in the SDK's local storage for access across multiple launches of your app. If no audience signal has been sent before, when this API is called, a null value is returned."),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(d.default,{query:"platform=android&api=get-visitor-profile",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(d.default,{query:"platform=ios&api=get-visitor-profile",mdxType:"Tabs"}),(0,r.mdx)("p",null,"React Native"),(0,r.mdx)(d.default,{query:"platform=react-native&api=get-visitor-profile",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"registerextension"},"registerExtension"),(0,r.mdx)("p",null,"This API registers an extension class that was derived from ",(0,r.mdx)("inlineCode",{parentName:"p"},"ACPExtension")," with a unique name. This call validates the parameters to ensure that the name is not empty, the name is unique, and that the parent class is ",(0,r.mdx)("inlineCode",{parentName:"p"},"ACPExtension"),"."),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(d.default,{query:"platform=android&api=register-extension",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(d.default,{query:"platform=ios&api=register-extension",mdxType:"Tabs"}),(0,r.mdx)("p",null,"React Native"),(0,r.mdx)(d.default,{query:"platform=react-native&api=register-extension",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"reset"},"reset"),(0,r.mdx)("p",null,"This API helps you reset the Audience Manager UUID and purges the current visitor profile."),(0,r.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"For more information about the UUID, the DPID, the DPUUID and other Audience Manager identifiers, see ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html"},"Index of IDs in Audience Manager"),"."),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(d.default,{query:"platform=android&api=reset",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(d.default,{query:"platform=ios&api=reset",mdxType:"Tabs"}),(0,r.mdx)("p",null,"React Native"),(0,r.mdx)(d.default,{query:"platform=react-native&api=reset",mdxType:"Tabs"}),(0,r.mdx)("h2",{id:"signalwithdata"},"signalWithData"),(0,r.mdx)("p",null,"This method is used to send a signal with traits to Audience Manager and get the matching segments returned in a block callback. Audience Manager sends the UUID in response to an initial signal call. The UUID is persisted on local SDK storage and is sent by the SDK to Audience Manager in all subsequent signal requests."),(0,r.mdx)("p",null,"If you are using the Experience Cloud ID (ECID) Service (formerly MCID), the ECID and other custom identifiers for the same visitor are sent with each signal request. The visitor profile that is returned by Audience Manager is saved in SDK local storage and is updated with subsequent signal calls."),(0,r.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"For more information about the UUID and other Audience Manager identifiers, see the ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/ids-in-aam.html"},"index of IDs in Audience Manager"),"."),(0,r.mdx)(p,{orientation:"horizontal",slots:"heading, content",repeat:"3",mdxType:"TabsBlock"}),(0,r.mdx)("p",null,"Android"),(0,r.mdx)(d.default,{query:"platform=android&api=signal-with-data",mdxType:"Tabs"}),(0,r.mdx)("p",null,"iOS"),(0,r.mdx)(d.default,{query:"platform=ios&api=signal-with-data",mdxType:"Tabs"}),(0,r.mdx)("p",null,"React Native"),(0,r.mdx)(d.default,{query:"platform=react-native&api=signal-with-data",mdxType:"Tabs"}))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-documentation-adobe-audience-manager-api-reference-md-fadbd8ca18d6b3dbc19f.js.map