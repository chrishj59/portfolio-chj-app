
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"348",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",5],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-clp-course-id\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"clp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(document.querySelector('div[data-purpose\\x3d\"introduction-video\"]')){var a=document.querySelector(\".current-price\");return a?a.textContent.replace(\"$\",\"\").trim():\"\"}})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=document.body.getAttribute(\"data-hotjar-channel-type\");hotjarPage=document.body.getAttribute(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-hotjar-channel-type\")||void 0})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__r"
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",19],8,16],"||\"ja-JP\"==",["escape",["macro",19],8,16],"||\"jp-JP\"==",["escape",["macro",19],8,16],"||\"jp_JP\"==",["escape",["macro",19],8,16],"})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor_uuid"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"blisspoint_fpc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_first_paid_purchase"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_location"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"has_made_paid_purchase"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"US\"==UD.Config.marketplace_country.id})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_avg_rating"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_instructor_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_length_minutes"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_locale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_num_enrollments"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_subcategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"course_topic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user_locale"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchases"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_uid"
    },{
      "function":"__j",
      "vtp_name":"UD.me.encrypted_affiliate_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",4],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.body.getAttribute(\"data-course-labels-experiment-hotjar\")||void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"peclp\"===document.body.getAttribute(\"data-hotjar-page\")})();"]
    }],
  "tags":[{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction create_UUID(){var a=(new Date).getTime(),d=\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(b){var c=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"==b?c:c\u00263|8).toString(16)});return d}function createCookie(a,d,b){var c=new Date;c.setTime(c.getTime()+36E5*b);b=\"; expires\\x3d\"+c.toGMTString();document.cookie=d\u0026\u0026\"undefined\"!==d?a+\"\\x3d\"+d+b+\"; path\\x3d\/\":a+\"\\x3d\"+create_UUID()+b+\"; path\\x3d\/\"}createCookie(\"blisspoint_fpc\",",["escape",["macro",22],8,16],",168);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":428
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "consent":["list"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript\u003E\"undefined\"===typeof fbq\u0026\u0026(!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\"),fbq(\"dataProcessingOptions\",[\"LDU\"],0,0),",["escape",["macro",28],8,16],"||fbq(\"init\",\"1457291081167286\"),fbq(\"init\",\"399727027340013\"),\n",["escape",["macro",28],8,16],"||fbq(\"trackSingle\",\"1457291081167286\",\"PageView\"),fbq(\"trackSingle\",\"399727027340013\",\"PageView\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(a,e,f,g,b,c,d){a[b]=a[b]||function(){(a[b].a=a[b].a||[]).push(arguments)};a[b].l=1*new Date;c=e.createElement(f);d=e.getElementsByTagName(f)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(window,document,\"script\",\"https:\/\/mc.yandex.ru\/metrika\/tag.js\",\"ym\");ym(53931514,\"init\",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cdiv\u003E\u003Cimg src=\"https:\/\/mc.yandex.ru\/watch\/53931514\" style=\"position:absolute; left:-9999px;\" alt=\"\"\u003E\u003C\/div\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":217
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":80
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",8],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",8]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",10]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"course",
      "vtp_eventLabel":"transaction_purchase",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",6],
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",11],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__img",
      "metadata":["map"],
      "setup_tags":["list",["tag",93,1]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=Purchase",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":180
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":196
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":197
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":201
    },{
      "function":"__baut",
      "once_per_event":true,
      "vtp_tagId":"21002562",
      "vtp_uetqName":"uetq",
      "vtp_eventType":"PAGE_LOAD",
      "tag_id":205
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"HsE0CKDW8pABEJPXtNAD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":206
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":207
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":208
    },{
      "function":"__paused",
      "vtp_originalTagType":"bzi",
      "tag_id":209
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"mqA6CMD-5ZIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":210
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"828847995",
      "vtp_conversionLabel":"E_BECNaa5pIBEPvunIsD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":211
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":212
    },{
      "function":"__bzi",
      "once_per_event":true,
      "vtp_id":"374972",
      "tag_id":213
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":214
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":215
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":"https:\/\/ad.doubleclick.net\/ddm\/activity\/src=2542116;type=gwg;cat=udemy000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1;num=1?",
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":216
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":221
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":222
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":223
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":224
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"Bc8dCNaqmagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":228
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"715649091",
      "vtp_conversionLabel":"OR8bCLmumagBEMPgn9UC",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":229
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":374
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":375
    },{
      "function":"__sp",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableDynamicRemarketing":false,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":true,
      "vtp_url":["macro",7],
      "vtp_enableRdpCheckbox":true,
      "tag_id":376
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"GiYPCISDssMBEOSX7KMD",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":377
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":378
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=visit\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":387
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=purchase-success\u0026order_value=",["escape",["macro",6],12],"\u0026new=",["escape",["macro",23],12],"\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":388
    },{
      "function":"__img",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_url":["template","https:\/\/pixel.pointmediatracker.com\/kpi?c=udemy\u0026tag_id=288\u0026user_id=",["escape",["macro",21],12],"\u0026kpi=signup-success\u0026fpc=",["escape",["macro",22],12]],
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_randomNumber":["macro",18],
      "tag_id":389
    },{
      "function":"__awct",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":["macro",6],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"uRnACK7x898BEO3puaID",
      "vtp_rdp":false,
      "vtp_url":["macro",7],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableEnhancedConversionVariable":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "vtp_enableShoppingQualitySettings":false,
      "tag_id":429
    },{
      "function":"__gclidw",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableUrlPassthrough":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":true,
      "tag_id":430
    },{
      "function":"__cl",
      "tag_id":431
    },{
      "function":"__cl",
      "tag_id":432
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":433
    },{
      "function":"__cl",
      "tag_id":434
    },{
      "function":"__cl",
      "tag_id":435
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_344_340","164179_344_392","164179_344_46"],
      "vtp_uniqueTriggerId":"164179_344",
      "tag_id":436
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_340",
      "tag_id":437
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_392",
      "tag_id":439
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_344_46",
      "tag_id":441
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_386_385","164179_386_320"],
      "vtp_uniqueTriggerId":"164179_386",
      "tag_id":442
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_385",
      "tag_id":443
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_386_320",
      "tag_id":445
    },{
      "function":"__cl",
      "tag_id":446
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_415_340","164179_415_392","164179_415_46"],
      "vtp_uniqueTriggerId":"164179_415",
      "tag_id":447
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_340",
      "tag_id":448
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_392",
      "tag_id":450
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_415_46",
      "tag_id":452
    },{
      "function":"__cl",
      "tag_id":453
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_424_92","164179_424_425"],
      "vtp_uniqueTriggerId":"164179_424",
      "tag_id":454
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_92",
      "tag_id":455
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_424_425",
      "tag_id":457
    },{
      "function":"__tg",
      "vtp_triggerIds":["list","164179_426_425","164179_426_1"],
      "vtp_uniqueTriggerId":"164179_426",
      "tag_id":458
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_425",
      "tag_id":459
    },{
      "function":"__tg",
      "vtp_isListeningTag":true,
      "vtp_firingId":"164179_426_1",
      "tag_id":461
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/cl.qualaroo.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026!",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"isMember\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=document.body.getAttribute(\"data-clp-course-id\")||\"NA\",a=document.querySelector('[data-purpose\\x3d\"course-price-text\"]');a=a?a.textContent.replace(\"$\",\"\").trim().match(\/\\d+(?:\\.\\d+)?\/):null;void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",b),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",a[0]),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",b,a[0],{nonInteraction:1}));",["escape",["macro",28],8,16],"||fbq(\"track\",\"AddToCart\",\n{content_name:\"Shopping Cart\",content_ids:b,content_type:\"product\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=",["escape",["macro",39],8,16],".map(function(a){return a.buyableId}),c=",["escape",["macro",39],8,16],".map(function(a){course=a.courseAnalytics;return{id:a.buyableId,quantity:1,course_avg_rating:course.course_avg_rating,course_category:course.course_category,course_instructor_name:course.course_instructor_name,course_language:course.course_language,course_length_minutes:course.course_length_minutes,course_locale:course.course_locale,course_num_enrollments:course.course_num_enrollments,course_subcategory:course.course_subcategory,\ncourse_topic:course.course_topic}});",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"Purchase\",{content_ids:b,content_type:\"product\",contents:c,order_id:",["escape",["macro",40],8,16],",value:",["escape",["macro",6],8,16],",currency:\"USD\",user_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],",is_first_paid_purchase:",["escape",["macro",23],8,16],"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"SignupSuccess\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"\u0026\u0026fbq(\"init\",\"1457291081167286\");fbq(\"trackCustom\",\"NewUserPurchase\",{value:",["escape",["macro",6],8,16],",currency:\"USD\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",1,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E",["escape",["macro",28],8,16],"||fbq(\"trackCustom\",\"LinkshareSignupClick\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);ire(\"identify\",{customerId:",["escape",["macro",42],8,16],",customerEmail:",["escape",["macro",43],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"aff\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=new XMLHttpRequest;a.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);a.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");a.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");a.send(JSON.stringify({type:\"paid_acq\"}))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n  \u003Cscript type=\"text\/javascript\"\u003E(function(a){window.DataLayer||(window.DataLayer={});DataLayer.events||(DataLayer.events={});DataLayer.events.SPIVersion=DataLayer.events.SPIVersion||\"3.2\";DataLayer.events.SiteSection=\"1\";var b=document.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=a;a=document.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document.location.protocol+\"\/\/intljs.rmtag.com\/111655.ct.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":203
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var Q={affiliateConfig:{ranMID:\"39197\",discountType:\"item\",includeStatus:\"false\",tagType:\"mop\",allowCommission:(\"linkshare\"===",["escape",["macro",50],8,16],").toString()},displayConfig:{rdMID:\"8712\"},orderid:",["escape",["macro",41],8,16],",currency:\"USD\",customerStatus:\"CUSTOMER_STATUS\",conversionType:\"Sale\",customerID:",["escape",["macro",42],8,16],",discountCode:",["escape",["macro",44],8,16],",taxAmount:0,optionalData:{},lineitems:[{quantity:1,unitPrice:",["escape",["macro",45],8,16],"\/100,unitPriceLessTax:",["escape",["macro",45],8,16],"\/100,SKU:",["escape",["macro",51],8,16],",\nproductName:",["escape",["macro",51],8,16],"}]};!function(e,m,y){var f=e.rakutenDataLayerName||\"DataLayer\";e[f]=e[f]||{};e[f].events=e[f].events||{};e[f].events.SPIVersion=\"3.4.1\";e[f].Sale=e[f].Sale||{};e[f].Sale.Basket=e[f].Sale.Basket||{};y.Ready=e[f].Sale.Basket.Ready\u0026\u0026e[f].Sale.Basket.Ready+1||1;e[f].Sale.Basket=y;var J=function(a){for(var b=a+\"\\x3d\",c=m.cookie.split(\";\"),d=0;d\u003Cc.length;d++){for(a=c[d];\" \"==a.charAt(0);)a=a.substring(1,a.length);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\ny=function(a){var b=a||\"\",c={};if(a||(b=J(\"rmStore\")),b){for(;b!==decodeURIComponent(b);)b=decodeURIComponent(b);a=b.split(\"|\");for(b=0;b\u003Ca.length;b++)c[a[b].split(\":\")[0]]=a[b].split(\":\")[1]}return c};var I={};I=y();var g=function(a,b,c,d){c=c||\"\";d=d||{};a=I[a||\"\"];b=d[b||\"\"];c=(a=(d=d.ignoreCookie||!1)?0:a)||b||c;return c=(\"string\"!=typeof c||\"false\"!==c.toLowerCase())\u0026\u0026c,c},K=function(a,b,c,d,e){var f=m.createElement(a),g=-1\u003Cm.location.protocol.indexOf(\"s\")?\"https:\":\"http:\",q;for(q in b=b.replace(\"https:\",\ng),f.src=b,d=d||{},\"script\"==a?d.type=d.type||\"text\/javascript\":(d.style=\"display:none;\",\"img\"==a\u0026\u0026(d.alt=\"\",d.height=\"1\",d.width=\"1\")),d)d.hasOwnProperty(q)\u0026\u0026f.setAttribute(q,d[q]);a=m.getElementsByTagName(c);a=a.length?a[0]:m.getElementsByTagName(\"script\")[0].parentElement;e\u0026\u0026(f.onload=e,f.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||e()});a.appendChild(f)},L=function(a){var b=new Date;b=b.getUTCFullYear()+(\"0\"+(b.getUTCMonth()+1)).slice(-2)+(\"0\"+b.getUTCDate()).slice(-2)+\n(\"0\"+b.getUTCHours()).slice(-2)+(\"0\"+b.getUTCMinutes()).slice(-2);return\"NoOID_\"+(a?a+\"_\":\"\")+Math.round(1E5*Math.random())+\"_\"+b},N=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=b||a.affiliateConfig||{},c=g(\"amid\",\"ranMID\",\"\",b)||a.ranMID;if(!c)return!1;var d=\"undefined\"==typeof b.allowCommission||\"false\"!==b.allowCommission;if(!d||!(a.orderid||a.lineitems\u0026\u0026a.lineitems.length))return!1;var R=g(\"adn\",\"domain\",\"track.linksynergy.com\",b),n=g(\"atm\",\"tagType\",\"pixel\",b);d=g(\"adr\",\n\"discountType\",\"order\",b);var k=g(\"acs\",\"includeStatus\",\"false\",b),q=g(\"arto\",\"removeOrderTax\",\"false\",b),A=g(\"artp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"artd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"atr\",\"taxRate\",a.taxRate||0,b),z=g(\"ald\",\"land\",!1,{})||(b.land\u0026\u0026!0===b.land?J(\"ranLandDateTime\"):b.land)||!1,M=g(\"atrv\",\"tr\",!1,{})||(b.tr\u0026\u0026!0===b.tr?J(\"ranSiteID\"):b.tr)||!1,G=g(\"acv\",\"centValues\",\"true\",b),v=g(\"ancc\",\"nonCentCurrencies\",\"JPY\",b);p=Math.abs(+p);var r=(100+p)\/100;b=a.orderid||L(c);\nb=encodeURIComponent(b);var w=a.currency||\"\";w=encodeURIComponent(w.toUpperCase());var B=!1;if(w\u0026\u0026v){v=(v+\"\").split(\",\");for(var l=0;l\u003Cv.length;l++)v[l]==w\u0026\u0026(B=!0)}var m=function(a){return B\u0026\u0026(a=Math.round(a)),G\u0026\u0026\"false\"!==G?(a*=100,a=Math.round(a)):a=Math.round(100*a)\/100,a+\"\"};v=a.taxAmount?Math.abs(+a.taxAmount):0;var C=a.discountAmount?Math.abs(+a.discountAmount):0;l=a.discountAmountLessTax?Math.abs(+a.discountAmountLessTax):0;!l\u0026\u0026C\u0026\u0026u\u0026\u0026p\u0026\u0026(l=C\/r);l=l||C;u=\"ep\";\"mop\"===n\u0026\u0026(u=\"eventnvppixel\");\nC=(a.customerStatus||\"\")+\"\";n=\"\";C\u0026\u0026(k\u0026\u0026\"EXISTING\"==C.toUpperCase()||k\u0026\u0026\"RETURNING\"==C.toUpperCase())\u0026\u0026(n=\"R_\");k=[];for(var E=C=0;E\u003C(a.lineitems?a.lineitems.length:0);E++)if(a.lineitems[E]){var F=!1,h=e.JSON?JSON.parse(JSON.stringify(a.lineitems[E])):a.lineitems[E],y=+h.quantity||0,D=+h.unitPrice||0,t=+h.unitPriceLessTax;D=t||D||0;A\u0026\u0026p\u0026\u0026!t\u0026\u0026(D\/=r);D*=y;for(var H=0;H\u003Ck.length;H++)t=k[H],t.SKU===h.SKU\u0026\u0026(F=!0,t.quantity+=y,t.totalValue+=D);F||(h.quantity=y,h.totalValue=D,k.push(h));C+=D}F=r=p=A=\"\";\nt={};for(E=0;E\u003Ck.length;E++){h=k[E];D=encodeURIComponent(h.SKU);H=h.totalValue;y=h.quantity;var I=encodeURIComponent(h.productName)||\"\";\"item\"===d.toLowerCase()\u0026\u0026l\u0026\u0026(H-=l*H\/C);h=h.optionalData;for(var x in h)h.hasOwnProperty(x)\u0026\u0026(t[x]=t[x]||\"\",t[x]+=encodeURIComponent(h[x])+\"|\");A+=n+D+\"|\";p+=y+\"|\";r+=m(H)+\"|\";F+=n+I+\"|\"}A=A.slice(0,-1);p=p.slice(0,-1);r=r.slice(0,-1);F=F.slice(0,-1);l\u0026\u0026(l=m(l));v\u0026\u0026(v=m(v));l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(A+=\"|\"+n+\"DISCOUNT\",F+=\"|\"+n+\"DISCOUNT\",p+=\"|0\",r+=\"|-\"+l);\nq\u0026\u0026v\u0026\u0026(A+=\"|\"+n+\"ORDERTAX\",p+=\"|0\",r+=\"|-\"+v,F+=\"|\"+n+\"ORDERTAX\");c=\"https:\/\/\"+R+\"\/\"+u+\"?mid\\x3d\"+c;c+=\"\\x26ord\\x3d\"+b;c+=z?\"\\x26land\\x3d\"+z:\"\";c+=M?\"\\x26tr\\x3d\"+M:\"\";c+=\"\\x26cur\\x3d\"+w;c+=\"\\x26skulist\\x3d\"+A;c+=\"\\x26qlist\\x3d\"+p;c+=\"\\x26amtlist\\x3d\"+r;c+=\"\\x26img\\x3d1\";c+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;l\u0026\u0026\"item\"===d.toLowerCase()\u0026\u0026(c+=\"\\x26discount\\x3d\"+l);h=a.optionalData||{};for(x in a.discountCode\u0026\u0026(h.coupon=a.discountCode),a.customerStatus\u0026\u0026(h.custstatus=a.customerStatus),a.customerID\u0026\u0026\n(h.custid=a.customerID),l\u0026\u0026(h.disamt=l),h)h.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"\\x3d\"+encodeURIComponent(h[x]));for(x in t)t.hasOwnProperty(x)\u0026\u0026(c+=\"\\x26\"+encodeURIComponent(x)+\"list\\x3d\"+t[x].slice(0,-1),l\u0026\u0026\"order\"===d.toLowerCase()\u0026\u0026(c+=\"|\"),v\u0026\u0026q\u0026\u0026(c+=\"|\"));c+=\"\\x26namelist\\x3d\"+F;if(8E3\u003Cc.length){for(a=8E3;0\u003Ca;)if(\"\\x26\"==c.charAt(a)){c=c.slice(0,a);break}else a--;c+=\"\\x26trunc\\x3dtrue\"}K(\"img\",c,\"body\")},O=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},\nb=b||a.displayConfig||{},c=g(\"dmid\",\"rdMID\",\"\",b);if(!c||!a.orderid\u0026\u0026!a.conversionType)return!1;var d=g(\"dtm\",\"tagType\",\"js\",b),y=g(\"ddn\",\"domain\",\"tags.rd.linksynergy.com\",b),n=g(\"dis\",\"includeStatus\",\"false\",b),k=g(\"dcomm\",\"allowCommission\",\"notset\",b),q=g(\"duup\",\"useUnitPrice\",\"false\",b),A=g(\"drtp\",\"removeTaxFromProducts\",\"false\",b),u=g(\"drtd\",\"removeTaxFromDiscount\",\"false\",b),p=g(\"dtr\",\"taxRate\",a.taxRate||0,b);b=\"\";\"true\"===k||!0===k||\"1\"===k||1===k?b=\"1\":(\"false\"===k||!1===k||\"0\"===k||0===\nk)\u0026\u0026(b=\"0\");d=\"js\"===d||\"if\"===d||\"img\"===d?d:\"js\";k=\"script\";\"if\"===d?k=\"iframe\":\"img\"===d\u0026\u0026(k=\"img\");\"true\"!==q\u0026\u0026!0!==q\u0026\u0026\"1\"!==q\u0026\u00261!==q||(q=!0);var z=(a.customerStatus||\"\")+\"\",m=\"\";z\u0026\u0026n\u0026\u0026(\"EXISTING\"==z.toUpperCase()||\"RETURNING\"==z.toUpperCase())\u0026\u0026(m=\"R_\");(n=a.orderid)||(n=L((a.conversionType+\"\").toLowerCase()+\"_\"+c));n=encodeURIComponent(m+n);m=encodeURIComponent(a.currency||\"\");z=0;var G=\"\";p=Math.abs(+p);var v=(100+p)\/100,r=a.discountAmount?Math.abs(+a.discountAmount):0,w=a.discountAmountLessTax?\nMath.abs(+a.discountAmountLessTax):0;!w\u0026\u0026r\u0026\u0026u\u0026\u0026p\u0026\u0026(w=r\/v);w=w||r;w=isNaN(w)?0:w;for(u=0;u\u003C(a.lineitems?a.lineitems.length:0);u++)if(a.lineitems[u]){r=+a.lineitems[u].quantity;var B=+a.lineitems[u].unitPriceLessTax*r;(!B||q)\u0026\u0026(A\u0026\u0026p?B=+a.lineitems[u].unitPrice\/v*r:B=+a.lineitems[u].unitPrice*r);B=isNaN(B)?0:B;z+=B;G+=encodeURIComponent(a.lineitems[u].SKU)+\",\"}z=Math.round(100*(z-w))\/100;G=G.slice(0,-1);a=\"https:\/\/\"+y+\"\/\"+d+\"\/\"+c;a+=\"\/?pt\\x3dconv\";a+=\"\\x26orderNumber\\x3d\"+n;a+=\"\\x26spi\\x3d\"+e[f].events.SPIVersion;\nz\u0026\u0026(a+=\"\\x26price\\x3d\"+z);m\u0026\u0026(a+=\"\\x26cur\\x3d\"+m);b\u0026\u0026(a+=\"\\x26tvalid\\x3d\"+b);G\u0026\u0026(a+=\"\\x26prodID\\x3d\"+G);K(k,a,\"body\")},P=function(){var a=e[f]\u0026\u0026e[f].Sale\u0026\u0026e[f].Sale.Basket?e[f].Sale.Basket:{},b=a.searchConfig||{},c=1024,d=encodeURIComponent(\"...TRUNCATED\"),m=g(\"smid\",\"rsMID\",\"\",b);if(!m)return!1;var n=g(\"said\",\"accountID\",\"113\",b),k=g(\"sclid\",\"clickID\",\"\",b),q=encodeURIComponent(g(\"sct\",\"conversionType\",a.conversionType\u0026\u0026\"sale\"!==(a.conversionType+\"\").toLowerCase()?a.conversionType:\"conv\",b));K(\"script\",\n\"https:\/\/services.xg4ken.com\/js\/kenshoo.js?cid\\x3d\"+m,\"body\",null,function(){var b={};if(b.conversionType=q,b.revenue=0,b.currency=encodeURIComponent(a.currency||\"USD\"),b.orderId=encodeURIComponent(a.orderid||L(q)),b.promoCode=encodeURIComponent(a.discountCode||\"\"),k\u0026\u0026(b.ken_gclid=encodeURIComponent(k)),b.discountAmount=+(a.discountAmount||0),b.discountAmount=isNaN(b.discountAmount)?0:Math.abs(b.discountAmount),b.customerStatus=encodeURIComponent(a.customerStatus||\"\"),b.productIDList=\"\",b.productNameList=\n\"\",a.lineitems\u0026\u0026a.lineitems.length){for(var e=0;e\u003Ca.lineitems.length;e++)a.lineitems[e]\u0026\u0026(b.revenue+=+(a.lineitems[e].unitPrice||0)*+a.lineitems[e].quantity,b.productIDList+=(a.lineitems[e].SKU||\"NA\")+\",\",b.productNameList+=(a.lineitems[e].productName||\"NA\")+\",\");b.revenue=Math.round(100*(b.revenue-b.discountAmount))\/100;b.productIDList=encodeURIComponent(b.productIDList.slice(0,-1));b.productNameList=encodeURIComponent(b.productNameList.slice(0,-1));b.productIDList.length\u003Ec\u0026\u0026(b.productIDList=b.productIDList.substring(0,\nc-d.length)+d);b.productNameList.length\u003Ec\u0026\u0026(b.productNameList=b.productNameList.substring(0,c-d.length)+d)}kenshoo.trackConversion(n,m,b)})};e[f].SPI={readRMCookie:J,processRMStoreCookie:y,readRMStoreValue:g,sRAN:N,sDisplay:O,sSearch:P,addElement:K,rmStore:I};N();O();P()}(window,document,Q)})();\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"SIGNUP\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":218
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow.ym(53931514,\"reachGoal\",\"ADD_TO_CART\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":219
    },{
      "function":"__html",
      "setup_tags":["list",["tag",2,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.ym(53931514,\"reachGoal\",\"PURCHASE\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,e,f,a,b,c){d.qp||(a=d.qp=function(){a.qp?a.qp.apply(a,arguments):a.queue.push(arguments)},a.queue=[],b=document.createElement(e),b.async=!0,b.src=f,c=document.getElementsByTagName(e)[0],c.parentNode.insertBefore(b,c))}(window,\"script\",\"https:\/\/a.quora.com\/qevents.js\");qp(\"init\",\"1fab027e63e94ad4b34e2e8d70e972d9\");qp(\"track\",\"ViewContent\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/q.quora.com\/_\/ad\/1fab027e63e94ad4b34e2e8d70e972d9\/pixel?tag=ViewContent\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":225
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar adb_head=document.getElementsByTagName(\"head\")[0],adb_tag=document.createElement(\"script\");adb_tag.src=\"https:\/\/udemy.benesse.co.jp\/js_udemy\/AppMeasurement_js.js\";adb_tag.defer=!0;adb_head.appendChild(adb_tag);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":231
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,d,a,e){b[a]=b[a]||[];b[a].push({t:(new Date).getTime(),event:\"snippetRun\"});b=c.getElementsByTagName(d)[0];c=c.createElement(d);a=\"paypalDDL\"!==a?\"\\x26m\\x3d\"+a:\"\";c.async=!0;c.src=\"https:\/\/www.paypal.com\/tagmanager\/pptm.js?t\\x3dxo\\x26id\\x3d\"+e+a;b.parentNode.insertBefore(c,b)})(window,document,\"script\",\"paypalDDL\",\"udemy.com\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":379
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",95,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.paypalDDL=window.paypalDDL||[];paypalDDL.push({event:\"txnSuccess\",txn_id:",["escape",["macro",40],8,16],",tpv:",["escape",["macro",6],8,16],",curr:\"USD\",prcd:",["escape",["macro",44],8,16],",srce:\"other\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":380
    },{
      "function":"__html",
      "metadata":["map"],
      "consent":["list"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/s.yimg.jp\/images\/listing\/tool\/cv\/ytag.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.yjDataLayer=window.yjDataLayer||[];function ytag(){yjDataLayer.push(arguments)}ytag({type:\"ycl_cookie\",config:{ycl_use_non_cookie_storage:!0}});ytag({type:\"yjad_retargeting\",config:{yahoo_retargeting_id:\"L7W82OXY21\",yahoo_retargeting_label:\"\"}});ytag({type:\"yss_retargeting\",config:{yahoo_ss_retargeting_id:\"1001117028\",yahoo_sstag_custom_params:{}}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"N7oaCJGWlccBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"VJAD6LZA35U102W9UT6686135\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",97,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async type=\"text\/gtmscript\"\u003Eytag({type:\"yss_conversion\",config:{yahoo_conversion_id:\"1001117028\",yahoo_conversion_label:\"BCAiCKantscBEJ3bq7wC\",yahoo_conversion_value:\"0\"}});ytag({type:\"yjad_conversion\",config:{yahoo_ydn_conv_io:\"dSxK7VIOLDUlhexqraaE\",yahoo_ydn_conv_label:\"A1D9GUOZCCX1QBPLQ7K686506\",yahoo_ydn_conv_transaction_id:\"\",yahoo_ydn_conv_value:\"0\"}});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(a,b){if(!a.rdt){var c=a.rdt=function(){c.sendEvent?c.sendEvent.apply(c,arguments):c.callQueue.push(arguments)};c.callQueue=[];a=b.createElement(\"script\");a.src=\"https:\/\/www.redditstatic.com\/ads\/pixel.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)}}(window,document);rdt(\"init\",\"t2_65f22gux\");rdt(\"track\",\"PageVisit\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":395
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",100,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"SignUp\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":397
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",100,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Erdt(\"track\",\"Purchase\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":398
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o0f51\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":400
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",103,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Etwq(\"track\",\"Signup\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":401
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",103,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Etwq(\"track\",\"Purchase\",{value:",["escape",["macro",52],8,16],",currency:\"USD\",num_items:\"1\"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":402
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,d,f,b,c,e){a.mejord||(b=a.mejord=function(){b.tq.push(arguments)},a._mejord||(a._mejord=b),b.tq=[],b.version=\"2.0.14-1\",a=\"script\",(c=d.createElement(a)).async=!0,c.src=f,(e=d.getElementsByTagName(a)[0]).parentNode.insertBefore(c,e))}(window,document,\"\/\/tag.measured.com\/10031\/x474bb8\/mejord-gear.js\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":405
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",106,0]],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Emejord(\"init\",\"10031\/x474bb8\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":406
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",107,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(){var a=[];",["escape",["macro",39],8,16],"\u0026\u0026(a=",["escape",["macro",39],8,16],".map(function(b){return{id:b.buyableId}}));return a}_mejord.helper={adaptProductsArray:function(a){if(a)return a.map(function(b){return{id:b}})},getEventParams:function(){return{products:c()||[],product:c()[0]||{},orderId:",["escape",["macro",40],8,16],"||\"\",revenue:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",value:isNaN(",["escape",["macro",6],8,16],")?0:",["escape",["macro",6],8,16],",shippingValue:0,tax:0,discount:0,currency:\"USD\",customerId:",["escape",["macro",2],8,16],"||\n\"\",custom:{adwords:{dimensionCohortIndex:21}}}}}})();\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function d(a){a=c[a]?c[a]():[];for(var b=0;b\u003Ca.length;b++){var e=a[b];window.dataLayer=window.dataLayer||[];var f=_mejord.helper.getEventParams();mejord(\"track\",e,f)}}var c={\"gtm.js\":function(){var a=[\"pageview\"];return a},transaction_purchase:function(){var a=[\"checkout\"];return a}};d(",["escape",["macro",48],8,16],")})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":408
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",107,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"isMember\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":412
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",107,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar courseId=document.body.getAttribute(\"data-clp-course-id\")||\"NA\";mejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(){fbq(\"track\",\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:courseId,content_type:\"product\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":414
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",107,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.body.getAttribute(\"data-clp-course-id\");a\u0026\u0026mejord(\"ready\",\"facebook\",function(b){fbq(\"track\",\"ViewContent\",{content_ids:a,content_type:\"product\",course_avg_rating:",["escape",["macro",29],8,16],",course_category:",["escape",["macro",30],8,16],",course_instructor_name:",["escape",["macro",31],8,16],",course_language:",["escape",["macro",24],8,16],",course_length_minutes:",["escape",["macro",32],8,16],",course_locale:",["escape",["macro",33],8,16],",course_num_enrollments:",["escape",["macro",34],8,16],",course_subcategory:",["escape",["macro",35],8,16],",course_topic:",["escape",["macro",36],8,16],",\nuser_language:",["escape",["macro",25],8,16],",user_locale:",["escape",["macro",37],8,16],",user_location:",["escape",["macro",26],8,16],",has_made_paid_purchase:",["escape",["macro",27],8,16],"})})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":416
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",107,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord.instance.state.context.dataLayer=[];mejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"LinkshareSignupClick\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":418
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",107,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Emejord(\"ready\",\"facebook\",function(a){fbq(\"trackCustom\",\"SignupSuccess\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":420
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"\/tapen\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.js"
    },{
      "function":"_gt",
      "arg0":["macro",4],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/mobile\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"localhost"
    },{
      "function":"_cn",
      "arg0":["macro",13],
      "arg1":"add-to-cart"
    },{
      "function":"_cn",
      "arg0":["macro",17],
      "arg1":"signup"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/teaching\/"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"instructor_analytics"
    },{
      "function":"_ew",
      "arg0":["macro",0],
      "arg1":"signupsuccess=1"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2307940\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306314\/"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/cart\/subscribe\/course\/2306248\/"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"udemy.com"
    },{
      "function":"_eq",
      "arg0":["macro",24],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"course-data-ready"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"undefined"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"KZ|RU|BY"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"false"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",1],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/apps\/admin"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"gtm.triggerGroup"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_344($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"true"
    },{
      "function":"_gt",
      "arg0":["macro",5],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_eq",
      "arg0":["macro",48],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_386($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_426($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_424($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",12],
      "arg1":"(^$|((^|,)164179_415($|,)))"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",3,70]],
    [["if",6,7],["add",4,8,9,10,14,19,20,24,27,28,29,31,34,35,38,41,43,45,66,86,87,92,93,99,102,105]],
    [["if",4,5],["add",5],["block",3,7,16,37,39,42,71,1,76,81,84,88,2,94,95,97,100,103]],
    [["if",5],["add",5,16,46,76,100,103,47,48,50,51,52,56,59,60,64,65,68]],
    [["if",5,9],["unless",8],["add",6,15]],
    [["if",10,11],["add",7]],
    [["if",5,12],["add",11,79]],
    [["if",13,14,15],["add",12,80]],
    [["if",5,16],["add",13,23,26]],
    [["if",5,17],["add",15]],
    [["if",5,18],["add",15]],
    [["if",5,19],["add",15],["block",81]],
    [["if",5,17,20],["add",15]],
    [["if",5,21],["add",15]],
    [["if",5,22],["add",15]],
    [["if",5,23],["add",15]],
    [["if",5,24],["add",15]],
    [["if",5,25],["add",15]],
    [["if",15,30],["add",17,31,33,74,91]],
    [["if",15,31],["add",18]],
    [["if",5,32],["add",21]],
    [["if",33],["add",22]],
    [["if",5,34],["add",25,31,32,36,38,40,44,77,90,98,101,104]],
    [["if",5,35],["add",30]],
    [["if",5,36],["add",30]],
    [["if",5,37],["add",30]],
    [["if",0,5,38],["add",37,39,84,94,97]],
    [["if",0,5],["unless",1,39],["add",42,58,81,88,0]],
    [["if",5,40],["add",49]],
    [["if",42],["unless",41],["add",53,61]],
    [["if",3],["unless",43],["add",54,62]],
    [["if",3],["add",55,63]],
    [["if",3,44],["add",57]],
    [["if",3,45],["add",67,69]],
    [["if",5,26],["add",71],["block",16,81,89,96,100,103]],
    [["if",5,46],["unless",47],["add",71]],
    [["if",48,49],["add",71]],
    [["if",5,51],["add",1]],
    [["if",53,54],["add",72]],
    [["if",3,55],["add",73]],
    [["if",56,57],["add",75]],
    [["if",6,58],["add",78]],
    [["if",6,7,38],["add",82,83]],
    [["if",61,62,63,64],["add",85]],
    [["if",62,64],["add",89]],
    [["if",53,65],["add",2]],
    [["if",53,66],["add",95]],
    [["if",53,67],["add",96]],
    [["if",5,68],["add",106,107,108]],
    [["if",6,7,68],["add",108]],
    [["if",3,55,68],["add",109]],
    [["if",15,30,68],["add",110]],
    [["if",53,68,69],["add",111]],
    [["if",13,14,15,68],["add",112]],
    [["if",5,34,68],["add",113]],
    [["if",5,27],["block",16,81,89,96,100,103]],
    [["if",5,28],["block",16,81,89,96,100,103]],
    [["if",5,29],["block",16,81,89,96,100,103]],
    [["if",5,39],["block",71,1]],
    [["if",5,50],["block",71]],
    [["if",5,52],["block",1]],
    [["if",5,59],["block",81]],
    [["if",5,60],["block",81]]]
},
"runtime":[[50,"__bzi",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","setInWindow"]],["c","_linkedin_data_partner_id",[17,[15,"a"],"id"]],["b","https://snap.licdn.com/li.lms-analytics/insight.min.js",[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__bzi":{"access_globals":{"keys":[{"key":"_linkedin_data_partner_id","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js"]}}}

,"security_groups":{
"nonGoogleScripts":["__bzi"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,da=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Bg:!0},ja={};try{ja.__proto__=ia;ha=ja.Bg;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ri=b.prototype},ma=this||self,qa=function(a){if(a&&a!=ma)return oa(a.document);null===pa&&(pa=oa(ma.document));return pa},ra=/^[\w+/_-]+[=]{0,2}$/,pa=null,oa=function(a){var b=a.querySelector&&a.querySelector("script[nonce]");if(b){var c=b.nonce||b.getAttribute("nonce");
if(c&&ra.test(c))return c}return""},ua=function(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"},xa=function(a,b){function c(){}c.prototype=b.prototype;a.ri=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ki=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}},ya=function(a){return a};var za=function(a,b){this.a=a;this.i=b};var Aa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},Ba=function(){this.B={};this.m=!1;this.F={}};Ba.prototype.get=function(a){return this.B["dust."+a]};Ba.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.B[a]=b))};Ba.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var Ca=function(a){var b=[],c;for(c in a.B)a.B.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new Ba;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(Aa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"===a){if(!Aa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else Aa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"===a?this.length():Aa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.Bc=function(){for(var a=Ca(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var Da=function(a,b){if(Aa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.B[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return Aa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var Ea=function(){function a(f,g){if(b[f]){if(b[f].sc+g>b[f].max)throw Error("Quota exceeded");b[f].sc+=g}}var b={},c=void 0,d=void 0,e={Rh:function(f){c=f},df:function(){c&&a(c,1)},Th:function(f){d=f},La:function(f){d&&a(d,f)},mi:function(f,g){b[f]=b[f]||{sc:0};b[f].max=g},rh:function(f){return b[f]&&b[f].sc||0},reset:function(){b={}},Zg:a};e.onFnConsume=e.Rh;e.consumeFn=e.df;e.onStorageConsume=e.Th;e.consumeStorage=e.La;e.setMax=e.mi;e.getConsumed=e.rh;e.reset=e.reset;e.consume=e.Zg;return e};var Fa=function(a,b){this.F=a;this.R=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new Ba;this.a=this.B=void 0};Fa.prototype.add=function(a,b){Ga(this,a,b,!1)};var Ga=function(a,b,c,d){if(!a.i.m)if(a.F.La(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
Fa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.La(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};Fa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};Fa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Ha=function(a){var b=new Fa(a.F,a);a.B&&(b.B=a.B);b.R=a.R;b.a=a.a;return b};var Ia=function(){},Ja=function(a){return"function"==typeof a},m=function(a){return"string"==typeof a},Ka=function(a){return"number"==typeof a&&!isNaN(a)},La=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Na=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Oa=function(a,b){if(a&&La(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Pa=function(a,b){if(!Ka(a)||
!Ka(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ra=function(a,b){for(var c=new Qa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Sa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ta=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Va=function(a){return Math.round(Number(a))||0},Wa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Xa=function(a){var b=[];if(La(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ya=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Za=function(){return(new Date).getTime()},Qa=function(){this.prefix="gtm.";this.values={}};Qa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Qa.prototype.get=function(a){return this.values[this.prefix+a]};
var $a=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},ab=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},cb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},db=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},eb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},gb=function(a,b){var c=B;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=Na(b,d))return}return d},
hb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ib=function(a){var b=[];Sa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var jb=function(a,b){Ba.call(this);this.a=a;this.R=b};la(jb,Ba);jb.prototype.toString=function(){return this.a};jb.prototype.Bc=function(){return new k(Ca(this))};jb.prototype.i=function(a,b){a.F.df();return this.R.apply(mb(this,a),Array.prototype.slice.call(arguments,1))};var mb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return La(d)?nb(e,d):d};c.prototype.F=function(d){return ob(this.m,d)};c.prototype.B=function(){return b.F};return new c(a,b)};
jb.prototype.Pa=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var ob=function(a,b){for(var c,d=0;d<b.length&&!(c=nb(a,b[d]),c instanceof za);d++);return c},nb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof jb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.B;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var pb=function(){Ba.call(this)};la(pb,Ba);pb.prototype.Bc=function(){return new k(Ca(this))};var qb={control:function(a,b){return new za(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.B().La(a.length+f.length);return new jb(a,function(){return function(g){var h=Ha(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),n=0;n<l.length;n++)if(l[n]=this.a(l[n]),l[n]instanceof za)return l[n];for(var p=e.get("length"),q=
0;q<p;q++)q<l.length?h.add(e.get(q),l[q]):h.add(e.get(q),void 0);h.add("arguments",new k(l));var t=ob(h,f);if(t instanceof za)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.B();b.La(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.La(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.B(),c=new pb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.La(g);c.set(e,f)}return c},undefined:function(){}};var rb=function(){this.m=Ea();this.a=new Fa(this.m)},sb=function(a,b,c){var d=new jb(b,c);d.m=!0;a.a.set(b,d)};rb.prototype.yc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};rb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=nb(this.a,arguments[c]);return b};rb.prototype.B=function(a,b){var c=Ha(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=nb(c,arguments[e]);return d};var tb=function(a){if(a instanceof tb)return a;this.qa=a};tb.prototype.toString=function(){return String(this.qa)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ub=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,vb=function(a){if(null==a)return String(a);var b=ub.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},wb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},xb=function(a){if(!a||"object"!=vb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!wb(a,"constructor")&&!wb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||wb(a,b)},E=function(a,b){var c=b||("array"==vb(a)?[]:{}),d;for(d in a)if(wb(a,d)){var e=a[d];"array"==vb(e)?("array"!=vb(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):xb(e)?(xb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var Ab=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n=Ca(h),p=0;p<n.length;p++)l[n[p]]=g(h.get(n[p]))},g=function(h){var l=Na(d,h);if(-1<l)return e[l];if(h instanceof k){var n=[];d.push(h);e.push(n);for(var p=h.Bc(),q=0;q<p.length();q++)n[p.get(q)]=g(h.get(p.get(q)));return n}if(h instanceof pb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof jb){var r=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=zb(u[v],b,!!c);var x=b?b.F:Ea(),y=new Fa(x);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(r);f(h,r);return r}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},zb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n in h)h.hasOwnProperty(n)&&l.set(n,g(h[n]))},g=function(h){var l=Na(d,
h);if(-1<l)return e[l];if(La(h)||Ta(h)){var n=new k([]);d.push(h);e.push(n);for(var p in h)h.hasOwnProperty(p)&&n.set(p,g(h[p]));return n}if(xb(h)){var q=new pb;d.push(h);e.push(q);f(h,q);return q}if("function"===typeof h){var t=new jb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Ab(this.a(v[x]),b,!!c);return g((0,this.m.R)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var r=typeof h;if(null===h||"string"===r||"number"===r||"boolean"===r)return h;};return g(a)};var Bb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Cb=function(a){if(void 0===a||La(a)||xb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Db={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Bb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):Da(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Bb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):Da(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Eb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Fb=new za("break"),Gb=new za("continue"),Hb=function(a,b){return this.a(a)+this.a(b)},Ib=function(a,b){return this.a(a)&&this.a(b)},Jb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Na(Eb,b))return zb(a[b].apply(a,Bb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof jb){var e=Bb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Na(Db.supportedMethods,b)){var f=Bb(c);
f.unshift(this.m);return Db[b].apply(a,f)}}if(a instanceof jb||a instanceof pb){if(a.has(b)){var g=a.get(b);if(g instanceof jb){var h=Bb(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof jb?a.a:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Bb(c))}if(a instanceof tb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Kb=function(a,b){a=this.a(a);if("string"!==typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Lb=function(a){var b=Ha(this.m),c=ob(b,Array.prototype.slice.apply(arguments));if(c instanceof za)return c},Mb=function(){return Fb},Nb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof za)return d}},Ob=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ga(b,d,e,
!0)}}},Pb=function(){return Gb},Qb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Rb=function(a,b){return this.a(a)/this.a(b)},Sb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof tb,d=b instanceof tb;return c||d?c&&d?a.qa==b.qa:!1:a==b},Tb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ub(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=ob(f,d);if(g instanceof za){if("break"===g.a)break;if("return"===g.a)return g}}}function Vb(a,b,c){if("string"===typeof b)return Ub(a,function(){return b.length},function(f){return f},c);if(b instanceof pb||b instanceof k||b instanceof jb){var d=b.Bc(),e=d.length();return Ub(a,function(){return e},function(f){return d.get(f)},c)}}
var Wb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){d.set(a,e);return d},b,c)},Xb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},Yb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Vb(function(e){var f=Ha(d);f.add(a,e);return f},b,c)},$b=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){d.set(a,e);return d},b,c)},ac=
function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){var f=Ha(d);Ga(f,a,e,!0);return f},b,c)},bc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Zb(function(e){var f=Ha(d);f.add(a,e);return f},b,c)};
function Zb(a,b,c){if("string"===typeof b)return Ub(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof k)return Ub(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var cc=function(a,b,c,d){function e(p,q){for(var t=0;t<f.length();t++){var r=f.get(t);q.add(r,p.get(r))}}var f=this.a(a);if(!(f instanceof k))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.m;d=this.a(d);var h=Ha(g);for(e(g,h);nb(h,b);){var l=ob(h,d);if(l instanceof za){if("break"===l.a)break;if("return"===l.a)return l}var n=Ha(g);e(h,n);nb(n,c);h=n}},dc=function(a){a=this.a(a);var b=this.m,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},ec=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof pb||a instanceof k||a instanceof jb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:Aa(b)&&(c=a[b]);else if(a instanceof tb)return;return c},gc=function(a,b){return this.a(a)>this.a(b)},
hc=function(a,b){return this.a(a)>=this.a(b)},ic=function(a,b){a=this.a(a);b=this.a(b);a instanceof tb&&(a=a.qa);b instanceof tb&&(b=b.qa);return a===b},jc=function(a,b){return!ic.call(this,a,b)},kc=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof za)return e},mc=function(a,b){return this.a(a)<this.a(b)},nc=function(a,b){return this.a(a)<=this.a(b)},oc=function(a,b){return this.a(a)%this.a(b)},pc=function(a,b){return this.a(a)*this.a(b)},qc=function(a){return-this.a(a)},
rc=function(a){return!this.a(a)},sc=function(a,b){return!Sb.call(this,a,b)},tc=function(){return null},uc=function(a,b){return this.a(a)||this.a(b)},vc=function(a,b){var c=this.a(a);this.a(b);return c},wc=function(a){return this.a(a)},xc=function(a){return Array.prototype.slice.apply(arguments)},yc=function(a){return new za("return",this.a(a))},zc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof jb||
a instanceof k||a instanceof pb)&&a.set(b,c);return c},Ac=function(a,b){return this.a(a)-this.a(b)},Bc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!La(d)||!La(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),f instanceof za){var l=f.a;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=this.a(e[e.length-1]),f instanceof za&&("return"===f.a||"continue"===
f.a)))return f},Dc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},Ec=function(a){a=this.a(a);return a instanceof jb?"function":typeof a},Fc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Gc=function(a,b,c,d){var e=this.a(d);if(this.a(c)){var f=this.F(e);if(f instanceof za){if("break"===f.a)return;if("return"===f.a)return f}}for(;this.a(a);){var g=this.F(e);if(g instanceof za){if("break"===g.a)break;if("return"===g.a)return g}this.a(b)}},
Hc=function(a){return~Number(this.a(a))},Ic=function(a,b){return Number(this.a(a))<<Number(this.a(b))},Jc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},Lc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},Mc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Nc=function(a,b){return Number(this.a(a))^Number(this.a(b))},Oc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Qc=function(){this.a=new rb;Pc(this)};Qc.prototype.yc=function(a){return Rc(this.a.i(a))};
var Tc=function(a,b){return Rc(Sc.a.B(a,b))},Pc=function(a){var b=function(d,e){var f=a.a,g=String(e);qb.hasOwnProperty(d)&&sb(f,g||d,qb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){sb(a.a,String(d),e)};c(0,Hb);c(1,Ib);c(2,Jb);c(3,Kb);c(53,Lb);c(4,Mb);c(5,Nb);c(52,Ob);c(6,Pb);c(9,Nb);c(50,Qb);c(10,Rb);c(12,Sb);c(13,Tb);c(47,Wb);c(54,Xb);c(55,Yb);c(63,cc);c(64,$b);c(65,ac);c(66,bc);c(15,dc);c(16,ec);c(17,ec);c(18,gc);c(19,hc);c(20,ic);c(21,jc);c(22,kc);
c(23,mc);c(24,nc);c(25,oc);c(26,pc);c(27,qc);c(28,rc);c(29,sc);c(45,tc);c(30,uc);c(32,vc);c(33,vc);c(34,wc);c(35,wc);c(46,xc);c(36,yc);c(43,zc);c(37,Ac);c(38,Bc);c(39,Dc);c(40,Ec);c(41,Fc);c(42,Gc);c(58,Hc);c(57,Ic);c(60,Jc);c(61,Lc);c(56,Mc);c(62,Nc);c(59,Oc)},Vc=function(){var a=Sc,b=Uc();sb(a.a,"require",b)},Wc=function(a,b){a.a.a.R=b};
function Rc(a){if(a instanceof za||a instanceof jb||a instanceof k||a instanceof pb||a instanceof tb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Xc=[],Yc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Zc=function(a){return Yc[a]},$c=/[\x00\x22\x26\x27\x3c\x3e]/g;var dd=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,ed={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},fd=function(a){return ed[a]};
Xc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(dd,fd)+"'"}};var nd=/['()]/g,od=function(a){return"%"+a.charCodeAt(0).toString(16)};Xc[12]=function(a){var b=
encodeURIComponent(String(a));nd.lastIndex=0;return nd.test(b)?b.replace(nd,od):b};var pd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,qd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},rd=function(a){return qd[a]};Xc[16]=function(a){return a};var td;
var ud=[],vd=[],wd=[],xd=[],yd=[],zd={},Ad,Bd,Cd,Dd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ed=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=zd[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(d&&b&&b.af&&b.af(a[f]),e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):td(c,e,b)},Gd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&
(d[e]=Fd(a[e],b,c));return d},Hd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=zd[b];return c?c.priorityOverride||0:0},Fd=function(a,b,c){if(La(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Fd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=ud[f];if(!g||b.yd(g))return;c[f]=!0;try{var h=Gd(g,b,c);h.vtp_gtmEventId=b.id;d=Ed(h,b);Cd&&(d=Cd.ah(d,h))}catch(y){b.rf&&b.rf(y,Number(f)),
d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Fd(a[l],b,c)]=Fd(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,p=1;p<a.length;p++){var q=Fd(a[p],b,c);Bd&&(n=n||q===Bd.ic);d.push(q)}return Bd&&n?Bd.eh(d):d.join("");case "escape":d=Fd(a[1],b,c);if(Bd&&La(a[1])&&"macro"===a[1][0]&&Bd.Dh(a))return Bd.Yh(d);d=String(d);for(var t=2;t<a.length;t++)Xc[a[t]]&&(d=Xc[a[t]](d));return d;case "tag":var r=a[1];if(!xd[r])throw Error("Unable to resolve tag reference "+r+".");return d=
{hf:a[2],index:r};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Id(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Id=function(a,b,c){try{return Ad(Gd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Jd=function(){var a=function(b){return{toString:function(){return b}}};return{Gf:a("consent"),Xd:a("convert_case_to"),Yd:a("convert_false_to"),Zd:a("convert_null_to"),$d:a("convert_true_to"),ae:a("convert_undefined_to"),Ci:a("debug_mode_metadata"),Ka:a("function"),rg:a("instance_name"),sg:a("live_only"),ug:a("malware_disabled"),vg:a("metadata"),Fi:a("original_vendor_template_id"),yg:a("once_per_event"),Re:a("once_per_load"),Ve:a("setup_tags"),We:a("tag_id"),Xe:a("teardown_tags")}}();var Kd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(Kd,Error);function Ld(a,b){if(La(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)Ld(a[c],b[c])}};var Md=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(Md,Error);var Nd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Pd=function(){return function(a,b){a instanceof Md||(a=new Md(a,Od));b&&a.a.push(b);throw a;}};function Od(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ka(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Qd=null,Td=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}var c=[],d=[];Qd=Rd(a);for(var e=0;e<vd.length;e++){var f=vd[e],g=Sd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var n=[],p=0;p<xd.length;p++)c[p]&&!d[p]&&(n[p]=!0);return n},Sd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Qd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Qd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Rd=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Id(wd[c],a));return b[c]}};var Ud={ah:function(a,b){b[Jd.Xd]&&"string"===typeof a&&(a=1==b[Jd.Xd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Jd.Zd)&&null===a&&(a=b[Jd.Zd]);b.hasOwnProperty(Jd.ae)&&void 0===a&&(a=b[Jd.ae]);b.hasOwnProperty(Jd.$d)&&!0===a&&(a=b[Jd.$d]);b.hasOwnProperty(Jd.Yd)&&!1===a&&(a=b[Jd.Yd]);return a}};var Vd=function(){this.a={}};function Wd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Kd(c,d,g);}}function Xd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Wd(e,b,d,g);Wd(f,b,d,g)}}}};var ae=function(a){var b=Yd.C,c=this;this.i=new Vd;this.a={};var d={},e=Xd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Sa(a,function(f,g){var h={};Sa(g,function(l,n){var p=Zd(l,n);h[l]=p.assert;d[l]||(d[l]=p.K)});c.a[f]=function(l,n){var p=h[l];if(!p)throw $d(l,{},"The requested permission "+l+" is not configured.");var q=Array.prototype.slice.call(arguments,0);p.apply(void 0,q);e.apply(void 0,q)}})},ce=function(a){return be.a[a]||
function(){}};function Zd(a,b){var c=Dd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=$d;try{return Ed(c)}catch(d){return{assert:function(e){throw new Kd(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function $d(a,b,c){return new Kd(a,b,c)};var de=!1;var ee={};ee.xi=Wa('');ee.kh=Wa('');var fe=de,ge=ee.kh,he=ee.xi;
var we=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},xe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;we(b,"/*")&&(b=b.slice(0,-2));we(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},ye=/^[a-z0-9-]+$/i,ze=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Be=function(a,b){var c;if(!(c=!Ae(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ye.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,n=b[g];if(!ze.exec(n))throw Error("Invalid Wildcard");var p=n.slice(8),q=p.slice(0,p.indexOf("/")),t;var r=l.hostname,u=q;if(0!==u.indexOf("*."))t=r.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=r.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:r.length===u.length?
!0:r.length!==u.length+v?!1:"."===r[v-1]}if(t){var x=p.slice(p.indexOf("/"));h=xe(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Ae=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Ce,De=function(){};(function(){function a(h,l){h=h||"";l=l||{};for(var n in b)b.hasOwnProperty(n)&&(l.Og&&(l["fix_"+n]=!0),l.kf=l.kf||l["fix_"+n]);var p={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var r=h.indexOf("--\x3e");if(0<=r)return{content:h.substr(4,r),length:r+3}},endTag:function(){var r=h.match(d);if(r)return{tagName:r[1],length:r[0].length}},atomicTag:function(){var r=q.startTag();
if(r){var u=h.slice(r.length);if(u.match(new RegExp("</\\s*"+r.tagName+"\\s*>","i"))){var v=u.match(new RegExp("([\\s\\S]*?)</\\s*"+r.tagName+"\\s*>","i"));if(v)return{tagName:r.tagName,Y:r.Y,content:v[1],length:v[0].length+r.length}}}},startTag:function(){var r=h.match(c);if(r){var u={};r[2].replace(e,function(v,x,y,w,z){var A=y||w||z||f.test(x)&&x||null,C=document.createElement("div");C.innerHTML=A;u[x]=C.textContent||C.innerText||A});return{tagName:r[1],Y:u,Nc:!!r[3],length:r[0].length}}},chars:function(){var r=
h.indexOf("<");return{length:0<=r?r:h.length}}},t=function(){for(var r in p)if(p[r].test(h)){var u=q[r]();return u?(u.type=u.type||r,u.text=h.substr(0,u.length),h=h.slice(u.length),u):null}};l.kf&&function(){var r=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.qf=function(){return this[this.length-1]};v.Ad=function(C){var D=this.qf();return D&&D.tagName&&D.tagName.toUpperCase()===C.toUpperCase()};v.$g=
function(C){for(var D=0,F;F=this[D];D++)if(F.tagName===C)return!0;return!1};var x=function(C){C&&"startTag"===C.type&&(C.Nc=r.test(C.tagName)||C.Nc);return C},y=t,w=function(){h="</"+v.pop().tagName+">"+h},z={startTag:function(C){var D=C.tagName;"TR"===D.toUpperCase()&&v.Ad("TABLE")?(h="<TBODY>"+h,A()):l.Pi&&u.test(D)&&v.$g(D)?v.Ad(D)?w():(h="</"+C.tagName+">"+h,A()):C.Nc||v.push(C)},endTag:function(C){v.qf()?l.mh&&!v.Ad(C.tagName)?w():v.pop():l.mh&&(y(),A())}},A=function(){var C=h,D=x(y());h=C;if(D&&
z[D.type])z[D.type](D)};t=function(){A();return x(y())}}();return{append:function(r){h+=r},ci:t,Ti:function(r){for(var u;(u=t())&&(!r[u.type]||!1!==r[u.type](u)););},clear:function(){var r=h;h="";return r},Ui:function(){return h},stack:[]}}var b=function(){var h={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";h.Wi="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";h.Vi=2===l.childNodes.length;return h}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;for(var g in b);Ce=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,t,r){var u,v=q&&q.length||0;for(u=0;u<v;u++)t.call(r,q[u],u)}function d(q,t,r){for(var u in q)q.hasOwnProperty(u)&&t.call(r,u,q[u])}function e(q,t){d(t,
function(r,u){q[r]=u});return q}function f(q,t){q=q||{};d(t,function(r,u){b(q[r])||(q[r]=u)});return q}function g(q){try{return n.call(q)}catch(r){var t=[];c(q,function(u){t.push(u)});return t}}var h={Fg:a,Gg:a,Hg:a,Ig:a,Pg:a,Qg:function(q){return q},done:a,error:function(q){throw q;},fi:!1},l=this;if(!l.postscribe){var n=Array.prototype.slice,p=function(){function q(r,u,v){var x="data-ps-"+u;if(2===arguments.length){var y=r.getAttribute(x);return b(y)?String(y):y}b(v)&&""!==v?r.setAttribute(x,v):
r.removeAttribute(x)}function t(r,u){var v=r.ownerDocument;e(this,{root:r,options:u,Ub:v.defaultView||v.parentWindow,cb:v,Ec:Ce("",{Og:!0}),nd:[r],Kd:"",Ld:v.createElement(r.nodeName),Rb:[],Sa:[]});q(this.Ld,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Sa,arguments);for(var r;!this.vc&&this.Sa.length;)r=this.Sa.shift(),"function"===typeof r?this.Vg(r):this.Ud(r)};t.prototype.Vg=function(r){var u={type:"function",value:r.name||r.toString()};this.Fd(u);r.call(this.Ub,this.cb);this.sf(u)};
t.prototype.Ud=function(r){this.Ec.append(r);for(var u,v=[],x,y;(u=this.Ec.ci())&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(y=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)v.push(u);this.Ai(v);x&&this.wh(u);y&&this.xh(u)};t.prototype.Ai=function(r){var u=this.Sg(r);u.Ze&&(u.wd=this.Kd+u.Ze,this.Kd+=u.ai,this.Ld.innerHTML=u.wd,this.yi())};t.prototype.Sg=function(r){var u=this.nd.length,v=[],x=[],y=[];c(r,function(w){v.push(w.text);if(w.Y){if(!/^noscript$/i.test(w.tagName)){var z=
u++;x.push(w.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==w.Y.id&&"ps-style"!==w.Y.id&&y.push("atomicTag"===w.type?"":"<"+w.tagName+" data-ps-proxyof="+z+(w.Nc?" />":">"))}}else x.push(w.text),y.push("endTag"===w.type?w.text:"")});return{Xi:r,raw:v.join(""),Ze:x.join(""),ai:y.join("")}};t.prototype.yi=function(){for(var r,u=[this.Ld];b(r=u.shift());){var v=1===r.nodeType;if(!v||!q(r,"proxyof")){v&&(this.nd[q(r,"id")]=r,q(r,"id",null));var x=r.parentNode&&q(r.parentNode,"proxyof");
x&&this.nd[x].appendChild(r)}u.unshift.apply(u,g(r.childNodes))}};t.prototype.wh=function(r){var u=this.Ec.clear();u&&this.Sa.unshift(u);r.src=r.Y.src||r.Y.Hi;r.src&&this.Rb.length?this.vc=r:this.Fd(r);var v=this;this.zi(r,function(){v.sf(r)})};t.prototype.xh=function(r){var u=this.Ec.clear();u&&this.Sa.unshift(u);r.type=r.Y.type||r.Y.TYPE||"text/css";this.Bi(r);u&&this.write()};t.prototype.Bi=function(r){var u=this.Ug(r);this.Ah(u);r.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=r.content:
u.appendChild(this.cb.createTextNode(r.content)))};t.prototype.Ug=function(r){var u=this.cb.createElement(r.tagName);u.setAttribute("type",r.type);d(r.Y,function(v,x){u.setAttribute(v,x)});return u};t.prototype.Ah=function(r){this.Ud('<span id="ps-style"/>');var u=this.cb.getElementById("ps-style");u.parentNode.replaceChild(r,u)};t.prototype.Fd=function(r){r.Uh=this.Sa;this.Sa=[];this.Rb.unshift(r)};t.prototype.sf=function(r){r!==this.Rb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Rb.shift(),this.write.apply(this,r.Uh),!this.Rb.length&&this.vc&&(this.Fd(this.vc),this.vc=null))};t.prototype.zi=function(r,u){var v=this.Tg(r),x=this.oi(v),y=this.options.Fg;r.src&&(v.src=r.src,this.ji(v,x?y:function(){u();y()}));try{this.zh(v),r.src&&!x||u()}catch(w){this.options.error(w),u()}};t.prototype.Tg=function(r){var u=this.cb.createElement(r.tagName);d(r.Y,function(v,x){u.setAttribute(v,x)});r.content&&(u.text=r.content);return u};t.prototype.zh=function(r){this.Ud('<span id="ps-script"/>');
var u=this.cb.getElementById("ps-script");u.parentNode.replaceChild(r,u)};t.prototype.ji=function(r,u){function v(){r=r.onload=r.onreadystatechange=r.onerror=null}var x=this.options.error;e(r,{onload:function(){v();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(r.readyState)&&(v(),u())},onerror:function(){var y={message:"remote script failed "+r.src};v();x(y);u()}})};t.prototype.oi=function(r){return!/^script$/i.test(r.nodeName)||!!(this.options.fi&&r.src&&r.hasAttribute("async"))};
return t}();l.postscribe=function(){function q(){var x=u.shift(),y;x&&(y=x[x.length-1],y.Gg(),x.stream=t.apply(null,x),y.Hg())}function t(x,y,w){function z(F){F=w.Qg(F);v.write(F);w.Ig(F)}v=new p(x,w);v.id=r++;v.name=w.name||v.id;var A=x.ownerDocument,C={close:A.close,open:A.open,write:A.write,writeln:A.writeln};e(A,{close:a,open:a,write:function(){return z(g(arguments).join(""))},writeln:function(){return z(g(arguments).join("")+"\n")}});var D=v.Ub.onerror||a;v.Ub.onerror=function(F,M,Q){w.error({msg:F+
" - "+M+":"+Q});D.apply(v.Ub,arguments)};v.write(y,function(){e(A,C);v.Ub.onerror=D;w.done();v=null;q()});return v}var r=0,u=[],v=null;return e(function(x,y,w){"function"===typeof w&&(w={done:w});w=f(w,h);x=/^#/.test(x)?l.document.getElementById(x.substr(1)):x.Ri?x[0]:x;var z=[x,y,w];x.Xh={cancel:function(){z.stream?z.stream.abort():z[1]=a}};w.Pg(z);u.push(z);v||q();return x.Xh},{streams:{},Si:u,Ji:p})}();De=l.postscribe}})();var Ee=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Fe={Fn:"function",DustMap:"Object",List:"Array"},G=function(a,b,c){for(var d=0;d<b.length;d++){var e=Ee.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],n=typeof l;if(null===l||"undefined"===n){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof jb?p="Fn":l instanceof k?p="List":l instanceof pb?p="DustMap":
l instanceof tb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Fe[h]||h)+".");}}};function Ge(a){return""+a}
function He(a,b){var c=[];return c};var Ie=function(a,b){var c=new jb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},Je=function(a,b){var c=new pb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ja(e)?c.set(d,Ie(a+"_"+d,e)):(Ka(e)||m(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var Ke=function(a,b){G(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new pb;return d=Je("AssertApiSubject",c)};var Le=function(a,b){G(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new pb;return d=Je("AssertThatSubject",c)};function Me(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(Ab(arguments[d],c));return zb(a.apply(null,b))}}var Oe=function(){for(var a=Math,b=Ne,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Me(a[e].bind(a)))}return c};var Pe=function(a){var b;return b};var Qe=function(a){var b;return b};var Re=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var Se=function(a){G(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Te=function(a){G(this.i.a,["message:?string"],arguments);};var Ue=function(a,b){G(this.i.a,["min:!number","max:!number"],arguments);return Pa(a,b)};var Ve=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.Ng.apply(null,Array.prototype.slice.call(arguments,1))};var We=function(){Ve(this,"read_container_data");var a=new pb;a.set("containerId",'GTM-7BF3X');a.set("version",'348');a.set("environmentName",'');a.set("debugMode",fe);a.set("previewMode",he);a.set("environmentMode",ge);a.m=!0;return a};var Xe=function(){return(new Date).getTime()};var Ye=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof jb)return"function";if(a instanceof tb){a=a.qa;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Ze=function(a){function b(c){return function(d){try{return c(d)}catch(e){(fe||he)&&a.call(this,e.message)}}}return{parse:b(function(c){return zb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Ab(c))})}};var $e=function(a){return Va(Ab(a,this.m))};var af=function(a){return Number(Ab(a,this.m))};var bf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var cf=function(a,b,c){var d=null,e=!1;return e?d:null};var Ne="floor ceil round max min abs pow sqrt".split(" ");var df=function(){var a={};return{sh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},ni:function(b,c){a[b]=c},reset:function(){a={}}}},ef=function(a,b){G(this.i.a,["apiName:!string","mock:?*"],arguments);};var ff=function(){this.a={};this.i={}};ff.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
ff.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Ja(b)?Ie(a,b):Je(a,b)};
var gf=function(a,b,c){if(a.i.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.a.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.i[b]=Ja(c)?Ie(b,c):Je(b,c)};function hf(){var a={};return a};var H={Ab:"_ee",ld:"_syn",Ii:"_uei",Gi:"_pci",Tc:"event_callback",bc:"event_timeout",fa:"gtag.config"};H.Ga="gtag.get";H.wa="purchase";H.nb="refund";H.Wa="begin_checkout";H.lb="add_to_cart";H.mb="remove_from_cart";H.Pf="view_cart";H.fe="add_to_wishlist";H.Fa="view_item";H.ee="view_promotion";H.de="select_promotion";H.ce="select_item";H.Yb="view_item_list";H.be="add_payment_info";H.Of="add_shipping_info";
H.za="value_key",H.ya="value_callback";H.ia="allow_ad_personalization_signals";H.bd="restricted_data_processing";H.ob="allow_google_signals";H.ja="cookie_expires";H.ac="cookie_update";H.xb="session_duration";H.na="user_properties";H.Ja="transport_url";H.N="ads_data_redaction";H.s="ad_storage";H.M="analytics_storage";H.Hf="region";H.If="wait_for_update";H.Ie=[H.wa,H.nb,H.Wa,H.lb,H.mb,H.Pf,H.fe,H.Fa,H.ee,H.de,H.Yb,H.ce,H.be,H.Of];H.He=[H.ia,H.ob,H.ac];H.Je=[H.ja,H.bc,H.xb];var jf={},kf=function(a,b){jf[a]=jf[a]||[];jf[a][b]=!0},lf=function(a){for(var b=[],c=jf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){kf("GTM",a)};function mf(a){if(Error.captureStackTrace)Error.captureStackTrace(this,mf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}xa(mf,Error);mf.prototype.name="CustomError";var nf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");mf.call(this,d+c[e])};xa(nf,mf);nf.prototype.name="AssertionError";var of=function(a,b){throw new nf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var pf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},qf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var rf,sf=function(){if(void 0===rf){var a=null,b=ma.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:ya,createScript:ya,createScriptURL:ya})}catch(c){ma.console&&ma.console.error(c.message)}rf=a}else rf=a}return rf};var uf=function(a,b){this.a=b===tf?a:""};uf.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var tf={};var vf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var wf;a:{var xf=ma.navigator;if(xf){var yf=xf.userAgent;if(yf){wf=yf;break a}}wf=""}var zf=function(a){return-1!=wf.indexOf(a)};var Bf=function(a,b,c){this.a=c===Af?a:""};Bf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var Cf=function(a){if(a instanceof Bf&&a.constructor===Bf)return a.a;of("expected object of type SafeHtml, got '"+a+"' of type "+ua(a));return"type_error:SafeHtml"},Af={},Ef=new Bf(ma.trustedTypes&&ma.trustedTypes.emptyHTML||"",0,Af);var Ff={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Gf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=Cf(Ef);return!c.parentElement}),Hf=function(a,b){if(a.tagName&&Ff[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Gf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Cf(b)};var If=function(a){var b=sf(),c=b?b.createHTML(a):a;return new Bf(c,null,Af)};var B=window,L=document,Jf=navigator,Kf=L.currentScript&&L.currentScript.src,Lf=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},Mf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Nf=function(a,b,c){var d=L.createElement("script");d.type="text/javascript";d.async=!0;var e,f=sf(),g=f?f.createScriptURL(a):a;e=new uf(g,tf);var h;a:{try{var l=d&&d.ownerDocument,n=l&&(l.defaultView||l.parentWindow);
n=n||ma;if(n.Element&&n.Location){h=n;break a}}catch(x){}h=null}if(h&&"undefined"!=typeof h.HTMLScriptElement&&(!d||!(d instanceof h.HTMLScriptElement)&&(d instanceof h.Location||d instanceof h.Element))){var p;var q=typeof d;if("object"==q&&null!=d||"function"==q)try{p=d.constructor.displayName||d.constructor.name||Object.prototype.toString.call(d)}catch(x){p="<object could not be stringified>"}else p=void 0===d?"undefined":null===d?"null":typeof d;of("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",p)}var t;e instanceof uf&&e.constructor===uf?t=e.a:(of("expected object of type TrustedResourceUrl, got '"+e+"' of type "+ua(e)),t="type_error:TrustedResourceUrl");d.src=t;var r=qa(d.ownerDocument&&d.ownerDocument.defaultView);r&&d.setAttribute("nonce",r);Mf(d,b);c&&(d.onerror=c);var u=qa();u&&d.setAttribute("nonce",u);var v=L.getElementsByTagName("script")[0]||L.body||L.head;v.parentNode.insertBefore(d,v);return d},Of=function(){if(Kf){var a=Kf.toLowerCase();if(0===a.indexOf("https://"))return 2;
if(0===a.indexOf("http://"))return 3}return 1},Pf=function(a,b){var c=L.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=L.body&&L.body.lastChild||L.body||L.head;d.parentNode.insertBefore(c,d);Mf(c,b);void 0!==a&&(c.src=a);return c},Qf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Rf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):
a.attachEvent&&a.attachEvent("on"+b,c)},Sf=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},Tf=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Uf=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Vf=function(a){var b=L.createElement("div");Hf(b,If("A<div>"+a+"</div>"));
b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Wf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Xf=function(a){Jf.sendBeacon&&Jf.sendBeacon(a)||Qf(a)},Yf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Zf={},$f=function(a){return void 0==Zf[a]?!1:Zf[a]};var ag=[];function bg(){var a=Lf("google_tag_data",{});a.ics||(a.ics={entries:{},set:cg,update:dg,addListener:eg,notifyListeners:fg,active:!1});return a.ics}
function cg(a,b,c,d,e,f){var g=bg();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},n=l.region,p=c&&m(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(p===e||(p===d?n!==e:!p&&!n)){var q=!!(f&&0<f&&void 0===l.update),t={region:p,initial:"granted"===b,update:l.update,quiet:q};h[a]=t;q&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,gg(a),fg(),kf("TAGGING",2))},f)}}}
function dg(a,b){var c=bg();c.active=!0;if(void 0!=b){var d=hg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=hg(a);f.quiet?(f.quiet=!1,gg(a)):g!==d&&gg(a)}}function eg(a,b){ag.push({cf:a,nh:b})}function gg(a){for(var b=0;b<ag.length;++b){var c=ag[b];La(c.cf)&&-1!==c.cf.indexOf(a)&&(c.vf=!0)}}function fg(a){for(var b=0;b<ag.length;++b){var c=ag[b];if(c.vf){c.vf=!1;try{c.nh({bf:a})}catch(d){}}}}
var hg=function(a){var b=bg().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},ig=function(a){return!(bg().entries[a]||{}).quiet},jg=function(){return $f("gtag_cs_api")?bg().active:!1},kg=function(a,b){bg().addListener(a,b)},lg=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!ig(b[e]))return!0;return!1}if(c()){var d=!1;kg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},mg=function(a,b){if(!1===hg(b)){var c=!1;kg([b],function(d){!c&&hg(b)&&(a(d),c=!0)})}};var ng=[H.s,H.M],og=function(a){var b=a[H.Hf];b&&I(40);var c=a[H.If];c&&I(41);for(var d=La(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<ng.length;f++){var g=ng[f],h=a[ng[f]],l=d[e];bg().set(g,h,l,"","",c)}},pg=function(a,b){for(var c=0;c<ng.length;c++){var d=ng[c],e=a[ng[c]];bg().update(d,e)}bg().notifyListeners(b)},qg=function(a){var b=hg(a);return void 0!=b?b:!0},rg=function(){for(var a=[],b=0;b<ng.length;b++){var c=hg(ng[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},sg=function(a,b){lg(a,b)};var ug=function(a){return tg?L.querySelectorAll(a):null},vg=function(a,b){if(!tg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!L.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},wg=!1;if(L.querySelectorAll)try{var xg=L.querySelectorAll(":root");xg&&1==xg.length&&xg[0]==L.documentElement&&(wg=!0)}catch(a){}var tg=wg;var Yd={},O=null,Lg=Math.random();Yd.C="GTM-7BF3X";Yd.nc="b41";Yd.Ei="";var Mg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Ng={__paused:!0,__tg:!0},Og;for(Og in Mg)Mg.hasOwnProperty(Og)&&(Ng[Og]=!0);var Pg="www.googletagmanager.com/gtm.js";
var Qg=Pg,Rg=Wa(""),Sg=null,Tg=null,Ug="//www.googletagmanager.com/a?id="+Yd.C+"&cv=348",Vg={},Wg={},Xg=function(){var a=O.sequence||1;O.sequence=a+1;return a};var Yg={},Zg=new Qa,$g={},ah={},dh={name:"dataLayer",set:function(a,b){E(hb(a,b),$g);bh()},get:function(a){return ch(a,2)},reset:function(){Zg=new Qa;$g={};bh()}},ch=function(a,b){return 2!=b?Zg.get(a):eh(a)},eh=function(a,b){var c=a.split(".");b=b||[];for(var d=$g,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Na(b,d))return}return d},fh=function(a,b){ah.hasOwnProperty(a)||(Zg.set(a,b),E(hb(a,b),$g),bh())},bh=function(a){Sa(ah,function(b,c){Zg.set(b,c);E(hb(b,
void 0),$g);E(hb(b,c),$g);a&&delete ah[b]})},gh=function(a,b,c){Yg[a]=Yg[a]||{};var d=1!==c?eh(b):Zg.get(b);"array"===vb(d)||"object"===vb(d)?Yg[a][b]=E(d):Yg[a][b]=d},hh=function(a,b){if(Yg[a])return Yg[a][b]},ih=function(a,b){Yg[a]&&delete Yg[a][b]};var lh={},mh=function(a,b){if(B._gtmexpgrp&&B._gtmexpgrp.hasOwnProperty(a))return B._gtmexpgrp[a];void 0===lh[a]&&(lh[a]=Math.floor(Math.random()*b));return lh[a]};var nh=/:[0-9]+$/,oh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},rh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ph(a.protocol)||ph(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(nh,"").toLowerCase());return qh(a,b,c,d,e)},qh=function(a,b,c,d,e){var f,g=ph(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=sh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(nh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||kf("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Na(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=oh(f,e,!1,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ph=function(a){return a?a.replace(":",
"").toLowerCase():""},sh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},th=function(a){var b=L.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||kf("TAGGING",1),c="/"+c);var d=b.hostname.replace(nh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},uh=function(a){function b(n){var p=n.split("=")[0];return 0>d.indexOf(p)?n:p+"=0"}function c(n){return n.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=th(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function vh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var xh=function(a,b,c,d){return wh(d)?vh(a,String(b||document.cookie),c):[]},Ah=function(a,b,c,d,e){if(wh(e)){var f=yh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=zh(f,function(g){return g.wc},b);if(1===f.length)return f[0].id;f=zh(f,function(g){return g.Ob},c);return f[0]?f[0].id:void 0}}};function Bh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=xh(b,f,!1,d).indexOf(c)}
var Fh=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!wh(c.Na))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ch(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.Oh);g=e(g,"samesite",
c.hi);c.ki&&(g=f(g,"secure"));var n=c.domain;if("auto"===n){for(var p=Dh(),q=void 0,t=!1,r=0;r<p.length;++r){var u="none"!==p[r]?p[r]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){q=x;continue}t=!0;if(!Eh(u,c.path)&&Bh(v,a,b,c.Na))return 0}if(q&&!t)throw q;return 1}n&&"none"!==n&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Eh(n,c.path)?1:Bh(g,a,b,c.Na)?0:1},Gh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Fh(a,b,c)};
function zh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function yh(a,b,c){for(var d=[],e=xh(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),wc:1*l[0]||1,Ob:1*l[1]||1}))}}return d}
var Ch=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Hh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ih=/(^|\.)doubleclick\.net$/i,Eh=function(a,b){return Ih.test(document.location.hostname)||"/"===b&&Hh.test(a)},Dh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Ih.test(e)||Hh.test(e)||a.push("none");
return a},wh=function(a){if(!$f("gtag_cs_api")||!a||!jg())return!0;if(!ig(a))return!1;var b=hg(a);return null==b?!0:!!b};var Jh=function(){for(var a=Jf.userAgent+(L.cookie||"")+(L.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Za()/1E3)].join(".")},Mh=function(a,b,c,d,e){var f=Kh(b);return Ah(a,f,Lh(c),d,e)},Nh=function(a,b,c,d){var e=""+Kh(c),f=Lh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Kh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Lh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Oh(a,b,c){var d,e=a.Nb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Za())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Ph=["1"],Qh={},Uh=function(a){var b=Rh(a.prefix);Qh[b]||Sh(b,a.path,a.domain)||(Th(b,Jh(),a),Sh(b,a.path,a.domain))};function Th(a,b,c){var d=Nh(b,"1",c.domain,c.path),e=Oh(c);e.Na="ad_storage";Gh(a,d,e)}function Sh(a,b,c){var d=Mh(a,b,c,Ph,"ad_storage");d&&(Qh[a]=d);return d}function Rh(a){return(a||"_gcl")+"_au"};function Vh(){for(var a=Wh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Xh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Wh,Yh;function Zh(a){Wh=Wh||Xh();Yh=Yh||Vh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|g>>4,p=(g&15)<<2|h>>6,q=h&63;e||(q=64,d||(p=64));b.push(Wh[l],Wh[n],Wh[p],Wh[q])}return b.join("")}
function $h(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),p=Yh[n];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}Wh=Wh||Xh();Yh=Yh||Vh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var bi;var fi=function(){var a=ci,b=di,c=ei(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Rf(L,"mousedown",d);Rf(L,"keyup",d);Rf(L,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},gi=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};ei().decorators.push(f)},hi=function(a,b,c){for(var d=ei().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,n=a,p=!!g.sameHost;if(l&&(p||n!==L.location.hostname))for(var q=0;q<l.length;q++)if(l[q]instanceof RegExp){if(l[q].test(n)){h=!0;break a}}else if(0<=n.indexOf(l[q])||p&&0<=l[q].indexOf(n)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&cb(e,g.callback())}}return e},ei=function(){var a=Lf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ii=/(.*?)\*(.*?)\*(.*)/,ji=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,ki=/^(?:www\.|m\.|amp\.)+/,li=/([^?#]+)(\?[^#]*)?(#.*)?/;function mi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var oi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Zh(String(d))))}var e=b.join("*");return["1",ni(e),e].join("*")},ni=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=bi)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}bi=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^bi[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},qi=function(){return function(a){var b=th(B.location.href),c=b.search.replace("?",""),d=oh(c,"_gl",!1,!0)||"";a.query=pi(d)||{};var e=rh(b,"fragment").match(mi("_gl"));a.fragment=pi(e&&e[3]||"")||{}}},ri=function(a){var b=qi(),c=ei();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(cb(d,e.query),a&&cb(d,e.fragment));return d},
pi=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ii.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var n=g[2],p=0;p<b;++p)if(n===ni(h,p)){l=!0;break a}l=!1}if(l){for(var q={},t=h?h.split("*"):[],r=0;r<t.length;r+=2)q[t[r]]=$h(t[r+1]);return q}}}}catch(u){}};
function si(a,b,c,d){function e(p){var q=p,t=mi(a).exec(q),r=q;if(t){var u=t[2],v=t[4];r=t[1];v&&(r=r+u+v)}p=r;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+n}d=void 0===d?!1:d;var f=li.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function ti(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=hi(b,1,c),e=hi(b,2,c),f=hi(b,3,c);if(db(d)){var g=oi(d);c?ui("_gl",g,a):vi("_gl",g,a,!1)}if(!c&&db(e)){var h=oi(e);vi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,p=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){vi(n,p,q,void 0);break a}if("form"===q.tagName.toLowerCase()){ui(n,p,q);break a}}"string"==typeof q&&si(n,p,q,void 0)}}
function vi(a,b,c,d){if(c.href){var e=si(a,b,c.href,void 0===d?!1:d);vf.test(e)&&(c.href=e)}}
function ui(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=L.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=si(a,b,c.action);vf.test(n)&&(c.action=n)}}}
var ci=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||ti(e,e.hostname)}}catch(g){}},di=function(a){try{if(a.action){var b=rh(th(a.action),"host");ti(a,b)}}catch(c){}},wi=function(a,b,c,d){fi();gi(a,b,"fragment"===c?2:1,!!d,!1)},xi=function(a,b){fi();gi(a,[qh(B.location,"host",!0)],b,!0,!0)},yi=function(){var a=L.location.hostname,b=ji.exec(L.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(ki,""),l=e.replace(ki,""),n;if(!(n=h===l)){var p="."+l;n=h.substring(h.length-p.length,h.length)===p}return n},zi=function(a,b){return!1===a?!1:a||b||yi()};var Ai=/^\w+$/,Bi=/^[\w-]+$/,Ci=/^~?[\w-]+$/,Di={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Ei=function(){if(!$f("gtag_cs_api")||!jg())return!0;var a=hg("ad_storage");return null==a?!0:!!a},Fi=function(a,b){ig("ad_storage")?Ei()?a():mg(a,"ad_storage"):b?kf("TAGGING",3):lg(function(){Fi(a,!0)},["ad_storage"])},Ii=function(a){var b=[];if(!L.cookie)return b;var c=xh(a,L.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Gi(c[d]);e&&-1===Na(b,e)&&b.push(e)}return Hi(b)};
function Ji(a){return a&&"string"==typeof a&&a.match(Ai)?a:"_gcl"}
var Li=function(){var a=th(B.location.href),b=rh(a,"query",!1,void 0,"gclid"),c=rh(a,"query",!1,void 0,"gclsrc"),d=rh(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||oh(e,"gclid",!1,void 0);c=c||oh(e,"gclsrc",!1,void 0)}return Ki(b,c,d)},Ki=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Bi))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":$f("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Ni=function(a){var b=Li();Fi(function(){Mi(b,a)})};
function Mi(a,b,c){function d(l,n){var p=Oi(l,e);p&&Gh(p,n,f)}b=b||{};var e=Ji(b.prefix);c=c||Za();var f=Oh(b,c,!0);f.Na="ad_storage";var g=Math.round(c/1E3),h=function(l){return["GCL",g,l].join(".")};a.aw&&(!0===b.Zi?d("aw",h("~"+a.aw[0])):d("aw",h(a.aw[0])));a.dc&&d("dc",h(a.dc[0]));a.gf&&d("gf",h(a.gf[0]));a.ha&&d("ha",h(a.ha[0]));a.gp&&d("gp",h(a.gp[0]))}
var Qi=function(a,b){var c=ri(!0);Fi(function(){for(var d=Ji(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Di[f]){var g=Oi(f,d),h=c[g];if(h){var l=Math.min(Pi(h),Za()),n;b:{for(var p=l,q=xh(g,L.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(Pi(q[t])>p){n=!0;break b}n=!1}if(!n){var r=Oh(b,l,!0);r.Na="ad_storage";Gh(g,h,r)}}}}Mi(Ki(c.gclid,c.gclsrc),b)})},Oi=function(a,b){var c=Di[a];if(void 0!==c)return b+c},Pi=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Gi(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ri=function(a,b,c,d,e){if(La(b)){var f=Ji(e),g=function(){for(var h={},l=0;l<a.length;++l){var n=Oi(a[l],f);if(n){var p=xh(n,L.cookie,void 0,"ad_storage");p.length&&(h[n]=p.sort()[p.length-1])}}return h};Fi(function(){wi(g,b,c,d)})}},Hi=function(a){return a.filter(function(b){return Ci.test(b)})},Si=function(a,b){for(var c=Ji(b.prefix),d={},e=0;e<a.length;e++)Di[a[e]]&&(d[a[e]]=Di[a[e]]);Fi(function(){Sa(d,function(f,g){var h=xh(c+g,L.cookie,void 0,"ad_storage");if(h.length){var l=h[0],n=Pi(l),
p={};p[f]=[Gi(l)];Mi(p,b,n)}})})};function Ti(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Ui=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(jg()){var c=Li();if(Ti(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);xi(function(){return d},3);xi(function(){var e={};return e._up="1",e},1)}}},Vi=function(){var a;if(Ei()){for(var b=[],c=L.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Rd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Rd]||(g[b[h].Rd]=[]),g[b[h].Rd].push({timestamp:l[1],ph:l[2]}))}a=g}else a={};return a};var Wi=/^\d+\.fls\.doubleclick\.net$/;function Xi(a,b){ig(H.s)?qg(H.s)?a():mg(a,H.s):b?I(42):sg(function(){Xi(a,!0)},[H.s])}function Yi(a){var b=th(B.location.href),c=rh(b,"host",!1);if(c&&c.match(Wi)){var d=rh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Zi(a,b,c){if("aw"==a||"dc"==a){var d=Yi("gcl"+a);if(d)return d.split(".")}var e=Ji(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!qg(H.s)&&c,g;g=Li()[a]||[];if(0<g.length)return f?["0"]:g}var h=Oi(a,e);return h?Ii(h):[]}
var $i=function(a){var b=Yi("gac");if(b)return!qg(H.s)&&a?"0":decodeURIComponent(b);var c=Vi(),d=[];Sa(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].ph);g=Hi(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},aj=function(a,b){var c=Li().dc||[];Xi(function(){Uh(b);var d=Qh[Rh(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;Xf(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var n=Rh(b.prefix),p=Qh[n];p&&Th(n,p,b)}})};var bj=/[A-Z]+/,cj=/\s/,dj=function(a){if(m(a)&&(a=Ya(a),!cj.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(bj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},fj=function(a){for(var b={},c=0;c<a.length;++c){var d=dj(a[c]);d&&(b[d.id]=d)}ej(b);var e=[];Sa(b,function(f,g){e.push(g)});return e};
function ej(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var gj=function(){var a=!1;return a};var ij=function(a,b,c,d){return(2===hj()||d||"http:"!=B.location.protocol?a:b)+c},hj=function(){var a=Of(),b;if(1===a)a:{var c=Qg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=L.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var wj=function(a){return qg(H.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=uh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})},xj=function(){var a;if(!(a=Rg)){var b;if(!0===B._gtmdgs)b=!0;else{var c=Jf&&Jf.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Va("1");return mh(1,100)<d?mh(2,2):-1},yj=function(a){var b;return b};var zj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ej=function(a){var b;ch("gtm.allowlist")&&I(52);b=ch("gtm.allowlist");b||(b=ch("gtm.whitelist"));b&&I(9);
var c=b&&eb(Xa(b),Aj),d;ch("gtm.blocklist")&&I(51);d=ch("gtm.blocklist");d||(d=ch("gtm.blacklist"));d||(d=ch("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Dj()&&(d=Xa(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Na(Xa(d),"google")&&I(2);var e=
d&&eb(Xa(d),Bj),f={};return function(g){var h=g&&g[Jd.Ka];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Wg[h]||[],n=a(h,l);if(b){var p;if(p=n)a:{if(0>Na(c,h))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>Na(c,l[q])){I(11);p=!1;break a}}else{p=!1;break a}p=!0}n=p}var t=!1;if(d){var r=0<=Na(e,h);if(r)t=r;else{var u=Ra(e,l||[]);u&&I(10);t=u}}var v=!n||t;v||!(0<=Na(l,"sandboxedScripts"))||c&&-1!==Na(c,"sandboxedScripts")||(v=Ra(e,Cj));return f[h]=v}},
Dj=function(){return zj.test(B.location&&B.location.hostname)};var Fj={active:!0,isAllowed:function(){return!0}},Gj=function(a){var b=O.zones;return b?b.checkState(Yd.C,a):Fj},Hj=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Ij=function(){},Jj=function(){};var Kj=!1,Lj=0,Mj=[];function Nj(a){if(!Kj){var b=L.createEventObject,c="complete"==L.readyState,d="interactive"==L.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Kj=!0;for(var e=0;e<Mj.length;e++)N(Mj[e])}Mj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Oj(){if(!Kj&&140>Lj){Lj++;try{L.documentElement.doScroll("left"),Nj()}catch(a){B.setTimeout(Oj,50)}}}var Pj=function(a){Kj?a():Mj.push(a)};var Qj={},Rj={},Sj=function(a,b,c,d){if(!Rj[a]||Ng[b]||"__zone"===b)return-1;var e={};xb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return Rj[a].tags.push(e)-1},Tj=function(a,b,c,d){if(Rj[a]){var e=Rj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Uj(a){for(var b=Qj[a]||[],c=0;c<b.length;c++)b[c]();Qj[a]={push:function(d){d(Yd.C,Rj[a])}}}
var Xj=function(a,b,c){Rj[a]={tags:[]};Ja(b)&&Vj(a,b);c&&B.setTimeout(function(){return Uj(a)},Number(c));return Wj(a)},Vj=function(a,b){Qj[a]=Qj[a]||[];Qj[a].push(ab(function(){return N(function(){b(Yd.C,Rj[a])})}))};function Wj(a){var b=0,c=0,d=!1;return{add:function(){c++;return ab(function(){b++;d&&b>=c&&Uj(a)})},Mg:function(){d=!0;b>=c&&Uj(a)}}};var Yj=function(){function a(d){return!Ka(d)||0>d?0:d}if(!O._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ka(dh.get("gtm.start"))?dh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Tg-b)}}};var ck={},dk=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},ek=!1;
var fk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Yj();return B[b]},gk=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=dk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},hk=function(a){};
var jk=function(a){},ik=function(){return B.GoogleAnalyticsObject||"ga"},kk=function(a,b){return function(){var c=dk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var pk=function(){return"&tc="+xd.filter(function(a){return a}).length},sk=function(){2022<=qk().length&&rk()},uk=function(){tk||(tk=B.setTimeout(rk,500))},rk=function(){tk&&(B.clearTimeout(tk),tk=void 0);void 0===vk||wk[vk]&&!xk&&!yk||(zk[vk]||Ak.Fh()||0>=Bk--?(I(1),zk[vk]=!0):(Ak.di(),Qf(qk()),wk[vk]=!0,Ck=Dk=Ek=yk=xk=""))},qk=function(){var a=vk;if(void 0===a)return"";var b=lf("GTM"),c=lf("TAGGING");return[Fk,wk[a]?"":"&es=1",Gk[a],b?"&u="+b:"",c?"&ut="+c:"",pk(),xk,yk,Ek?Ek:"",Dk,Ck,"&z=0"].join("")},
Hk=function(){return[Ug,"&v=3&t=t","&pid="+Pa(),"&rv="+Yd.nc].join("")},Ik="0.005000">Math.random(),Fk=Hk(),Jk=function(){Fk=Hk()},wk={},xk="",yk="",Ck="",Dk="",Ek="",vk=void 0,Gk={},zk={},tk=void 0,Ak=function(a,b){var c=0,d=0;return{Fh:function(){if(c<a)return!1;Za()-d>=b&&(c=0);return c>=a},di:function(){Za()-d>=b&&(c=0);c++;d=Za()}}}(2,1E3),Bk=1E3,Kk=function(a,b,c){if(Ik&&!zk[a]&&b){a!==vk&&(rk(),vk=a);var d,e=String(b[Jd.Ka]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");
d=e;var f=c+d;xk=xk?xk+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(zd[g]?"1":"2")+d;Ck=Ck?Ck+"."+h:"&ti="+h;uk();sk()}},Lk=function(a,b,c){if(Ik&&!zk[a]){a!==vk&&(rk(),vk=a);var d=c+b;yk=yk?yk+"."+d:"&epr="+d;uk();sk()}},Mk=function(a,b,c){};
var Nk=function(){return!1},Ok=function(){var a={};return function(b,c,d){}};function Pk(a,b,c,d){var e=xd[a],f=Qk(a,b,c,d);if(!f)return null;var g=Fd(e[Jd.Ve],c,[]);if(g&&g.length){var h=g[0];f=Pk(h.index,{J:f,I:1===h.hf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qk(a,b,c,d){function e(){if(f[Jd.ug])h();else{var x=Gd(f,c,[]);var z=Sj(c.id,String(f[Jd.Ka]),Number(f[Jd.We]),x[Jd.vg]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var F=Za()-D;Kk(c.id,xd[a],"5");Tj(c.id,z,"success",
F);g()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var F=Za()-D;Kk(c.id,xd[a],"6");Tj(c.id,z,"failure",F);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;Kk(c.id,f,"1");var C=function(){var F=Za()-D;Kk(c.id,f,"7");Tj(c.id,z,"exception",F);A||(A=!0,h())};var D=Za();try{Ed(x,c)}catch(F){C(F)}}}var f=xd[a],g=b.J,h=b.I,l=b.terminate;if(c.yd(f))return null;var n=Fd(f[Jd.Xe],c,[]);if(n&&n.length){var p=n[0],q=Pk(p.index,{J:g,I:h,terminate:l},c,d);if(!q)return null;g=q;h=2===p.hf?l:q}if(f[Jd.Re]||f[Jd.yg]){var t=f[Jd.Re]?yd:c.si,r=g,u=h;if(!t[a]){e=ab(e);
var v=Rk(a,t,e);g=v.J;h=v.I}return function(){t[a](r,u)}}return e}function Rk(a,b,c){var d=[],e=[];b[a]=Sk(d,e,c);return{J:function(){b[a]=Tk;for(var f=0;f<d.length;f++)d[f]()},I:function(){b[a]=Uk;for(var f=0;f<e.length;f++)e[f]()}}}function Sk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tk(a){a()}function Uk(a,b){b()};var Xk=function(a,b,c){for(var d=[],e=0;e<xd.length;e++)if(a[e]){var f=xd[e];var g=c.add();try{var h=Pk(e,{J:g,I:g,terminate:g},b,e);h?d.push({Df:e,wf:Hd(f),yc:h}):(Vk(e,b),g())}catch(n){g()}}c.Mg();d.sort(Wk);for(var l=0;l<d.length;l++)d[l].yc();return 0<d.length};function Wk(a,b){var c,d=b.wf,e=a.wf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.Df,h=b.Df;f=g>h?1:g<h?-1:0}return f}
function Vk(a,b){if(!Ik)return;var c=function(d){var e=b.yd(xd[d])?"3":"4",f=Fd(xd[d][Jd.Ve],b,[]);f&&f.length&&c(f[0].index);Kk(b.id,xd[d],e);var g=Fd(xd[d][Jd.Xe],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yk=!1,cl=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(Yk)return!1;Yk=!0}var d=Gj(b),e=!1;if(!d.active){var f=!0;if("gtm.js"===c){f=!1,e=!0,d=Gj(Number.MAX_SAFE_INTEGER);}if(f)return!1}Ik&&!zk[b]&&vk!==b&&(rk(),vk=b,Ck=xk="",Gk[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,uk());
var g={id:b,name:c,yd:Ej(d.isAllowed),si:[],rf:function(){I(6)},af:Zk(b)},h=Xj(b,a.eventCallback,a.eventTimeout);$k(b);var l=Td(g);e&&(l=al(l));var n=Xk(l,g,h);"gtm.js"!==c&&"gtm.sync"!==c||jk(Yd.C);switch(c){case "gtm.init":I(19),n&&I(20)}return bl(l,
n)};function Zk(a){return function(b){Ik&&(Cb(b)||Mk(a,"input",b))}}function $k(a){gh(a,"event",1);gh(a,"ecommerce",1);gh(a,"gtm");gh(a,"eventModel");}
function al(a){var b=[];for(var c=0;c<a.length;c++)a[c]&&Mg[String(xd[c][Jd.Ka])]&&(b[c]=!0);return b}function bl(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&xd[c]&&!Ng[String(xd[c][Jd.Ka])])return!0;return!1}function dl(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return th(""+c+b).href}}function el(a,b){return fl()?dl(a,b):void 0}function fl(){var a=!1;return a};var gl=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.J=function(){};this.I=function(){};this.eventId=void 0},hl=function(a){var b=new gl;b.eventModel=a;return b},il=function(a,b){a.targetConfig=b;return a},jl=function(a,b){a.containerConfig=b;return a},kl=function(a,b){a.a=b;return a},ll=function(a,b){a.globalConfig=b;return a},ml=function(a,b){a.J=b;return a},nl=function(a,b){a.I=b;return a};
gl.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var ol=function(a){function b(e){Sa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Sa(c,function(e){d.push(e)});return d};var pl;if(3===Yd.nc.length)pl="g";else{var ql="G";pl=ql}
var rl={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:pl,OPT:"o"},sl=function(a){var b=Yd.C.split("-"),c=b[0].toUpperCase(),d=rl[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Yd.nc.length){var g="w";f="2"+g}else f="";return f+d+Yd.nc+e};var tl=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var ul=function(){return zf("iPhone")&&!zf("iPod")&&!zf("iPad")};zf("Opera");zf("Trident")||zf("MSIE");zf("Edge");!zf("Gecko")||-1!=wf.toLowerCase().indexOf("webkit")&&!zf("Edge")||zf("Trident")||zf("MSIE")||zf("Edge");-1!=wf.toLowerCase().indexOf("webkit")&&!zf("Edge")&&zf("Mobile");zf("Macintosh");zf("Windows");zf("Linux")||zf("CrOS");var vl=ma.navigator||null;vl&&(vl.appVersion||"").indexOf("X11");zf("Android");ul();zf("iPad");zf("iPod");ul()||zf("iPad")||zf("iPod");wf.toLowerCase().indexOf("kaios");var wl=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var xl=function(){};var yl=function(a){if($f("tteai")){if(void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent)return 2}else if(void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0),void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0),void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==
a.listenerId&&"number"!==typeof a.listenerId)return 2;return a.cmpStatus&&"error"!==a.cmpStatus?0:3},zl=function(a,b){this.i=a;this.a=null;this.B={};this.R=0;this.F=void 0===b?500:b;this.m=null};la(zl,xl);var Bl=function(a){return"function"===typeof a.i.__tcfapi||null!=Al(a)};
zl.prototype.addEventListener=function(a){var b={},c=qf(function(){return a(b)}),d=0;-1!==this.F&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.F));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=yl(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Cl(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};zl.prototype.removeEventListener=function(a){a&&a.listenerId&&Cl(this,"removeEventListener",null,a.listenerId)};
var El=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var n=Dl(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:n&&Dl(a.purpose.consents,b)}else l=!0;else l=1===h?a.purpose&&a.vendor?Dl(a.purpose.legitimateInterests,
b)&&Dl(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Dl=function(a,b){return!(!a||!a[b])},Cl=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Al(a)){Fl(a);var f=++a.R;a.B[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Al=function(a){if(a.a)return a.a;a.a=wl(a.i,"__tcfapiLocator");return a.a},Fl=function(a){a.m||(a.m=function(b){try{var c,d;"string"===
typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.B[c.callId](c.returnValue,c.success)}catch(e){}},tl(a.i,a.m))};var Gl={1:0,3:0,4:0,7:3,9:3,10:3};function Hl(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var Il=Hl("",550),Jl=Hl("",500);function Kl(){var a=O.tcf||{};return O.tcf=a}
var Ll=function(a,b){this.m=a;this.a=b;this.i=Za();},Ml=function(a){},Nl=function(a){},Tl=function(){var a=Kl(),b=new zl(B,3E3),c=new Ll(b,a);if((Ol()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support)&&!a.active&&("function"===typeof B.__tcfapi||Bl(b))){a.active=!0;a.Pb={};Pl();var d=setTimeout(function(){Ql(a);Rl(a);d=null},Jl);try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)Ql(a),Rl(a),Ml(c);else{var f;if(!1===e.gdprApplies)f=Sl(),b.removeEventListener(e);
else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in Gl)if(Gl.hasOwnProperty(h))if("1"===h){var l=e,n=!0;n=void 0===n?!1:n;var p;var q=l;!1===q.gdprApplies?p=!0:(void 0===q.internalErrorState&&(q.internalErrorState=yl(q)),p="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===q.eventStatus)?!0:!1);g["1"]=p?!1===l.gdprApplies||"tcunavailable"===l.tcString||
void 0===l.gdprApplies&&!n||"string"!==typeof l.tcString||!l.tcString.length?!0:El(l,"1",0):!1}else g[h]=El(e,h,Gl[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.Pb=f,Rl(a),Ml(c))}}),Nl(c)}catch(e){d&&(clearTimeout(d),d=null),Ql(a),Rl(a)}}};function Ql(a){a.type="e";a.tcString="tcunavailable";a.Pb=Sl()}function Pl(){var a={};og((a.ad_storage="denied",a.wait_for_update=Il,a))}
var Ol=function(){var a=!1;a=!0;return a};function Sl(){var a={},b;for(b in Gl)Gl.hasOwnProperty(b)&&(a[b]=!0);return a}function Rl(a){var b={};pg((b.ad_storage=a.Pb["1"]?"granted":"denied",b))}
var Ul=function(){var a=Kl();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},Vl=function(){var a=Kl();return a.active?a.tcString||"":""},Wl=function(a){if(!Gl.hasOwnProperty(String(a)))return!0;var b=Kl();return b.active&&b.Pb?!!b.Pb[String(a)]:!0};function Xl(a,b,c){function d(p){var q;O.reported_gclid||(O.reported_gclid={});q=O.reported_gclid;var t=f+(p?"gcu":"gcs");if(!q[t]){q[t]=!0;var r=[],u=function(z,A){A&&r.push(z+"="+encodeURIComponent(A))},v="https://www.google.com";if(jg()){var x=qg(H.s);u("gcs",rg());p&&u("gcu","1");O.dedupe_gclid||(O.dedupe_gclid=""+Jh());u("rnd",O.dedupe_gclid);if((!f||g&&"aw.ds"!==g)&&qg(H.s)){var y=Ii("_gcl_aw");u("gclaw",y.join("."))}u("url",String(B.location).split(/[?#]/)[0]);u("dclid",Yl(b,h));!x&&b&&(v=
"https://pagead2.googlesyndication.com")}u("gdpr_consent",Vl());"1"===ri(!1)._up&&u("gtm_up","1");u("gclid",Yl(b,f));u("gclsrc",g);u("gtm",sl(!c));var w=v+"/pagead/landing?"+r.join("&");Xf(w)}}var e=Li(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),n=jg();if(l||n)n?sg(function(){d();qg(H.s)||mg(function(p){return d(!0,p.bf)},H.s)},[H.s]):d()}
function Yl(a,b){var c=a&&!qg(H.s);return b&&c?"0":b}var Zl=function(a){if(L.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!B.getComputedStyle)return!0;var c=B.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=B.getComputedStyle(d,
null))}return!1};var hm=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),im=["SCRIPT","IMG","SVG","PATH","BR"],jm=["BR"];function km(a){var b;if(a===L.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=km(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function lm(){var a;var b=[],c=L.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=im.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=jm.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,n=l.elements,p=[],q=0;q<n.length;q++){var t=n[q],r=t.textContent;t.value&&(r=t.value);if(r){var u=r.match(hm);if(u){var v=
u[0],x;if(B.location){var y=qh(B.location,"host",!0);x=0<=v.toLowerCase().indexOf(y)}else x=!1;x||p.push({element:t,Yi:v})}}}for(var w=[],z=10<p.length?"3":l.status,A=0;A<p.length&&10>A;A++){var C=p[A].element;w.push({querySelector:km(C),tagName:C.tagName,isVisible:!Zl(C),type:1})}return{elements:w,status:z}}var Vm=function(){var a=!0;Wl(7)&&Wl(9)&&Wl(10)||(a=!1);var b=!0;b=!1;b&&!Um()&&(a=!1);return a},Um=function(){var a=!0;Wl(3)&&Wl(4)||(a=!1);return a};function rn(){var a=O;return a.gcq=a.gcq||new sn}
var tn=function(a,b,c){rn().register(a,b,c)},un=function(a,b,c,d){rn().push("event",[b,a],c,d)},vn=function(a,b){rn().push("config",[a],b)},wn=function(a){rn().push("set",[a])},xn=function(a,b,c){rn().push("get",[a,b],c)},yn=function(a){return rn().getRemoteConfig(a)},zn={},An=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.a={};this.m=null;this.i=!1},Bn=function(a,b,c,d,e){this.type=a;this.m=b;this.ca=c||"";this.a=d;this.i=e},sn=function(){this.m={};this.i={};this.a=[]},
Cn=function(a,b){var c=dj(b);return a.m[c.containerId]=a.m[c.containerId]||new An},Dn=function(a,b,c){if(b){var d=dj(b);if(d&&1===Cn(a,b).status){Cn(a,b).status=2;var e={};Ik&&(e.timeoutId=B.setTimeout(function(){I(38);uk()},3E3));a.push("require",[e],d.containerId);zn[d.containerId]=Za();if(gj()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=el(c,g)||h;Nf(l)}}}},En=function(a,b,c,d){if(d.ca){var e=Cn(a,d.ca),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.ca]),l=E(e.containerConfig),n=E(e.a),p=E(a.i),q=ch("gtm.uniqueEventId"),t=dj(d.ca).prefix,r=nl(ml(ll(kl(jl(il(hl(g),h),l),n),p),function(){Lk(q,t,"2");}),
function(){Lk(q,t,"3");});try{Lk(q,t,"1");f(d.ca,b,d.m,r)}catch(u){Lk(q,t,"4");}}}};
sn.prototype.register=function(a,b,c){var d=Cn(this,a);if(3!==d.status){d.m=b;d.status=3;if(c){d.a=c}var e=dj(a),f=zn[e.containerId];if(void 0!==f){var g=O[e.containerId].bootstrap,h=e.prefix.toUpperCase();O[e.containerId]._spx&&(h=h.toLowerCase());var l=ch("gtm.uniqueEventId"),n=h,p=Za()-g;if(Ik&&!zk[l]){l!==vk&&(rk(),vk=l);var q=n+"."+Math.floor(g-f)+"."+Math.floor(p);
Dk=Dk?Dk+","+q:"&cl="+q}delete zn[e.containerId]}this.flush()}};sn.prototype.push=function(a,b,c,d){var e=Math.floor(Za()/1E3);Dn(this,c,b[0][H.Ja]||this.i[H.Ja]);this.a.push(new Bn(a,e,c,b,d));d||this.flush()};
sn.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Cn(this,c.ca).status&&!a)return;Ik&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Sa(c.a[0],function(p,q){E(hb(p,q),b.i)});break;case "config":var d=c.a[0],e=!!d[H.hc];delete d[H.hc];var f=Cn(this,c.ca),g=dj(c.ca),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.ca]={});f.i&&e||En(this,H.fa,d,c);f.i=!0;delete d[H.Ab];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.ca]);break;case "event":En(this,c.a[1],c.a[0],c);break;case "get":var l={},n=(l[H.za]=c.a[0],l[H.ya]=c.a[1],l);En(this,H.Ga,n,c);}this.a.shift()}};sn.prototype.getRemoteConfig=function(a){return Cn(this,a).a};var Fn=function(a,b,c){};var Gn=function(a,b,c,d){};var Hn=function(a){};var In=function(a,b,c){};var Jn=function(a,b){
return!0};var Kn=function(a,b){var c;return c};var Ln=function(a){};var Mn=!1,Nn=[];function On(){if(!Mn){Mn=!0;for(var a=0;a<Nn.length;a++)N(Nn[a])}}var Pn=function(a){Mn?N(a):Nn.push(a)};var Qn=function(a){G(this.i.a,["listener:!Fn"],arguments);Ve(this,"process_dom_events","window","load");Pn(Ab(a))};var Rn=function(a,b){var c;var e=!1;var f=zb(c,this.m,e);void 0===f&&void 0!==c&&I(45);return f};var Sn=function(a){var b;var f=!1;var g=zb(b,this.m,f);void 0===g&&void 0!==b&&I(45);return g};var Tn=function(a,b){var c=null,d=!1;
return zb(c,this.m,d)};var Un=function(a){var b;var h=!1;return zb(b,this.m,h)};var Vn=function(a){var b;return b};var Wn=function(a,b){b=void 0===b?!0:b;var c;return c};var Xn=function(a){var b=null;return b};var Yn=function(a,b){var c;return c};var Zn=function(a,b){var c;return c};var $n=function(a){var b="";return b};function ao(a,b){};var bo=function(a){var b="";return b};var co=function(){Ve(this,"get_user_agent");return B.navigator.userAgent};var eo=function(a,b){};var fo={},go=function(a,b,c,d){G(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Ve(this,"inject_script",a);var e=this.m,f=function(){b instanceof jb&&b.Pa(e)},g=function(){c instanceof jb&&c.Pa(e)};if(!d){Nf(a,f,g);return}var h=d;fo[h]?(fo[h].onSuccess.push(f),fo[h].onFailure.push(g)):(fo[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=fo[h].onSuccess,n=0;n<l.length;n++)N(l[n]);l.push=function(p){N(p);
return 0}},g=function(){for(var l=fo[h].onFailure,n=0;n<l.length;n++)N(l[n]);fo[h]=null},Nf(a,f,g));};var ho=function(){return!1},io={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var jo=function(){};var ko=function(a,b){var c=!1;return c};var lo=function(){var a="";return a};var mo=function(){var a="";return a};var no=function(a,b,c){};var oo=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var po=function(a,b,c){G(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Ve(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=B,g;for(g=0;g<e.length-1;g++){f=f[e[g]];if(void 0===f)return!1;}if(void 0===
f[e[g]]||c)return f[e[g]]=Ab(b,this.m,d),!0;return!1};function qo(a,b,c){};var ro=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var so=function(a,b,c){var d=this;};var to={},uo={};to.getItem=function(a){var b=null;return b};
to.setItem=function(a,b){};
to.removeItem=function(a){};to.clear=function(){};var vo=function(a){var b;return b};var Uc=function(){var a=new ff;gj()?(a.add("injectHiddenIframe",Ia),a.add("injectScript",Ia)):(a.add("injectHiddenIframe",eo),a.add("injectScript",go));var b=no;a.add("Math",Oe());a.add("TestHelper",hf());a.add("addEventCallback",Hn);a.add("aliasInWindow",Jn);a.add("assertApi",Ke);a.add("assertThat",Le);a.add("callInWindow",
Kn);a.add("callLater",Ln);a.add("copyFromDataLayer",Rn);a.add("copyFromWindow",Sn);a.add("createArgumentsQueue",Tn);a.add("createQueue",Un);a.add("decodeUri",Pe);a.add("decodeUriComponent",Qe);a.add("encodeUri",Re);a.add("encodeUriComponent",Se);a.add("fail",Te);a.add("fromBase64",Vn,!("atob"in B));a.add("generateRandom",Ue);a.add("getContainerVersion",We);a.add("getCookieValues",Wn);a.add("getQueryParameters",Yn);a.add("getReferrerQueryParameters",Zn);a.add("getReferrerUrl",$n);a.add("getTimestamp",
Xe);a.add("getTimestampMillis",Xe);a.add("getType",Ye);a.add("getUrl",bo);a.add("localStorage",io,!ho());a.add("logToConsole",jo);a.add("makeInteger",$e);a.add("makeNumber",af);a.add("makeString",bf);a.add("makeTableMap",cf);a.add("mock",ef);a.add("queryPermission",ko);a.add("readCharacterSet",lo);a.add("readTitle",mo);a.add("sendPixel",b);a.add("setCookie",oo);a.add("setInWindow",po);a.add("sha256",so);a.add("templateStorage",to);a.add("toBase64",vo,!("btoa"in B));a.add("JSON",Ze(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;
if(f){var g=f.Ib();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Sc,be;
function wo(){var a=data.runtime||[],b=data.runtime_lines;Sc=new Qc;xo();td=function(e,f,g){yo(f);var h=new pb;Sa(f,function(r,u){var v=zb(u);void 0===v&&void 0!==u&&I(44);h.set(r,v)});Sc.a.a.B=Pd();var l={Ng:ce(e),eventId:void 0!==g?g.id:void 0,Ib:function(){return e},log:function(){}};if(Nk()){var n=Ok(),p=void 0,q=void 0;l.da={i:{},a:function(r,u,v){1===u&&(p=r);7===u&&(q=v);n(r,u,v)},m:df()};l.log=function(r,u){if(p){var v=Array.prototype.slice.call(arguments,1);n(p,4,{level:r,source:q,message:v})}}}var t=
Tc(l,[e,h]);Sc.a.a.B=void 0;t instanceof za&&"return"===t.a&&(t=t.i);return Ab(t)};Vc();for(var c=0;c<a.length;c++){var d=a[c];if(!La(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&Ld(d,b[c]);Sc.yc(d)}}function yo(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ja(b)&&(a.gtmOnSuccess=function(){N(b)});Ja(c)&&(a.gtmOnFailure=function(){N(c)})}
function xo(){var a=Sc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Wc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function zo(a){void 0!==a&&Sa(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Wg[e]=Wg[e]||[];Wg[e].push(b)}})};var Ao="HA GF G UA AW DC".split(" "),Bo=!1,Co={},Do=!1;function Eo(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Tc]&&(c.eventCallback=b[H.Tc]),b[H.bc]&&(c.eventTimeout=b[H.bc]));return c}function Fo(){return Bo}
var Io={config:function(a){},event:function(a){var b=a[1];if(!(2>
a.length)&&m(b)){var c;if(2<a.length){if(!xb(a[2])&&void 0!=a[2]||3<a.length)return;c=a[2]}var d=Eo(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return Do=!0,Fo(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=be.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&xb(a[1])?b=E(a[1]):3==a.length&&m(a[1])&&(b={},xb(a[2])||La(a[2])?
b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){function b(){Fo()&&E(a[2],{subcommand:a[1]})}if(3===a.length){I(39);var c=Xg(),d=a[1];"default"===d?(b(),og(a[2])):"update"===d&&(b(),pg(a[2],c))}}};
Io.get=function(a){};var Jo={policy:!0};
var Ko=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Mo=function(a){var b=Lo(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var cp=function(a){if(bp(a))return a;this.a=a};cp.prototype.vh=function(){return this.a};var bp=function(a){return!a||"object"!==vb(a)||xb(a)?!1:"getUntrustedUpdateValue"in a};cp.prototype.getUntrustedUpdateValue=cp.prototype.vh;var dp=[],ep=!1,fp=function(a){return B["dataLayer"].push(a)},gp=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};function hp(a){var b=a._clear;Sa(a,function(d,e){"_clear"!==d&&(b&&fh(d,void 0),fh(d,e))});Sg||(Sg=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=Xg(),a["gtm.uniqueEventId"]=c,fh("gtm.uniqueEventId",c));return cl(a)}
function ip(){for(var a=!1;!ep&&0<dp.length;){ep=!0;delete $g.eventModel;bh();var b=dp.shift();if(null!=b){var c=bp(b);if(c){var d=b;b=bp(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=ch(g,1);if(La(h)||xb(h))h=E(h);ah[g]=h}}try{if(Ja(b))try{b.call(dh)}catch(v){}else if(La(b)){var l=
b;if(m(l[0])){var n=l[0].split("."),p=n.pop(),q=l.slice(1),t=ch(n.join("."),2);if(void 0!==t&&null!==t)try{t[p].apply(t,q)}catch(v){}}}else{if(Ta(b)){a:{var r=b;if(r.length&&m(r[0])){var u=Io[r[0]];if(u&&(!c||!Jo[r[0]])){b=u(r);break a}}b=void 0}if(!b){ep=!1;continue}}a=hp(b)||a}}finally{c&&bh(!0)}}ep=!1}return!a}
function jp(){var a=ip();try{Ko(B["dataLayer"],Yd.C)}catch(b){}return a}
var lp=function(){var a=Lf("dataLayer",[]),b=Lf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Pj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Pn(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new cp(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);dp.push.apply(dp,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return ip()&&h};var d=a.slice(0);dp.push.apply(dp,d);kp()&&N(jp)},kp=function(){var a=!0;return a};var mp={};mp.ic=new String("undefined");
var np=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===mp.ic?b:a[d]);return c.join("")}};np.prototype.toString=function(){return this.a("undefined")};np.prototype.valueOf=np.prototype.toString;mp.Ag=np;mp.jd={};mp.eh=function(a){return new np(a)};var op={};mp.ei=function(a,b){var c=Xg();op[c]=[a,b];return c};mp.ef=function(a){var b=a?0:1;return function(c){var d=op[c];if(d&&"function"===typeof d[b])d[b]();op[c]=void 0}};mp.Dh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};mp.Yh=function(a){if(a===mp.ic)return a;var b=Xg();mp.jd[b]=a;return'google_tag_manager["'+Yd.C+'"].macro('+b+")"};mp.Ph=function(a,b,c){a instanceof mp.Ag&&(a=a.a(mp.ei(b,c)),b=Ia);return{wd:a,J:b}};var pp=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Tf(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},qp=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},rp=function(a,b,c){qp(a)[b]=c},sp=function(a,b,c,d){var e=qp(a),f=$a(e,b,d);e[b]=c(f)},tp=function(a,b,c){var d=qp(a);return $a(d,b,c)};var up=["input","select","textarea"],vp=["button","hidden","image","reset","submit"],wp=function(a){var b=a.tagName.toLowerCase();return!Oa(up,function(c){return c===b})||"input"===b&&Oa(vp,function(c){return c===a.type.toLowerCase()})?!1:!0},xp=function(a){return a.form?a.form.tagName?a.form:L.getElementById(a.form):Wf(a,["form"],100)},yp=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(wp(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var zp=!!B.MutationObserver,Ap=void 0,Bp=function(a){if(!Ap){var b=function(){var c=L.body;if(c)if(zp)(new MutationObserver(function(){for(var e=0;e<Ap.length;e++)N(Ap[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Rf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Ap.length;e++)N(Ap[e])}))})}};Ap=[];L.body?b():N(b)}Ap.push(a)};var Np=B.clearTimeout,Op=B.setTimeout,S=function(a,b,c){if(gj()){b&&N(b)}else return Nf(a,b,c)},Pp=function(){return new Date},Qp=function(){return B.location.href},Rp=function(a){return rh(th(a),"fragment")},Sp=function(a){return sh(th(a))},Tp=function(a,b){return ch(a,b||2)},Up=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=fp(a)):d=fp(a);return d},Vp=function(a,b){B[a]=b},T=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},Wp=function(a,b,c){return xh(a,b,void 0===c?!0:!!c)},Xp=function(a,b,c){return 0===Gh(a,b,c)},Yp=function(a,b){if(gj()){b&&N(b)}else Pf(a,b)},Zp=function(a){return!!tp(a,"init",!1)},$p=function(a){rp(a,"init",!0)},aq=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Qg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(ij("https://","http://",c))},bq=function(a,
b){var c=a[b];return c},cq=function(a,b,c){Ik&&(Cb(a)||Mk(c,b,a))};
var dq=mp.Ph;function Aq(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Bq=new Qa;function Cq(a,b){function c(g){var h=th(g),l=rh(h,"protocol"),n=rh(h,"host",!0),p=rh(h,"port"),q=rh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,n,p,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Dq(a){return Eq(a)?1:0}
function Eq(a){var b=a.arg0,c=a.arg1;if(a.any_of&&La(c)){for(var d=0;d<c.length;d++){var e=E(a,{});E({arg1:c[d],any_of:void 0},e);if(Dq(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(r){}}f=!1}return f;case "_ew":return Aq(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Na(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,t=Bq.get(q);t||(t=new RegExp(c,p),Bq.set(q,t));n=t.test(b)}catch(r){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Cq(b,c)}return!1};var Fq={},Gq=encodeURI,W=encodeURIComponent,Hq=Qf;var Iq=function(a,b){if(!a)return!1;var c=rh(th(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Jq=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Fq.Eh=function(){var a=!1;return a};var tr=null,ur=[],vr=0,wr=null;function xr(){var a=Za()-vr;0<=a?(wr&&(B.clearTimeout(wr),wr=null),yr()):wr||(wr=B.setTimeout(function(){yr();wr=null},0-a))}function yr(){vr=Za();var a=ur;ur=[];var b,c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];b=c?c.call(a):{next:da(a)};for(var d=b.next();!d.done;d=b.next()){var e=d.value;e()}tr&&(tr.takeRecords(),ur.length||(tr&&(tr.disconnect(),tr=null),wr&&(B.clearTimeout(wr),wr=null)))};function as(){return B.gaGlobal=B.gaGlobal||{}}var bs=function(){var a=as();a.hid=a.hid||Pa();return a.hid},cs=function(a,b){var c=as();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Ks=function(a,b){var c;var d=ls(a);d?(js(d,a)||(I(25),a.abort()),c=d):c=void 0;var e=c,f;a:{var g=a.L[H.Xa];g?(g=""+g,gs(g,a)||(I(31),a.abort()),cs(g,qg(H.M)),f=g):(I(32),a.abort(),f="")}return{clientId:f,Af:e}};var Ls=window,Ms=document,Ns=function(a){var b=Ls._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Ls["ga-disable-"+a])return!0;try{var c=Ls.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=vh("AMP_TOKEN",String(Ms.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Ms.getElementById("__gaOptOutExtension")?!0:!1};function Qs(a){delete a.eventModel[H.Ab];Ts(a.eventModel)}var Ts=function(a){Sa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.na]||{};Sa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Ws=function(a,b,c){un(b,c,a)},Xs=function(a,b,c){un(b,c,a,!0)},Zs=function(a,b){};
function Ys(a,b){}var Z={b:{}};

Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=T("google_tag_manager");var d=c&&c.e&&c.e(b);cq(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();

Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=T("google_trackConversion");if(Ja(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Jq(a.vtp_customParams,
"key","value"));var h={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:sl()};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(h.google_conversion_value=a.vtp_eventValue),a.vtp_eventItems&&(h.google_gtag_event_data={items:a.vtp_eventItems}));a.vtp_rdp&&(h.google_restricted_data_processing=!0);a.vtp_userId&&(h.google_user_id=
a.vtp_userId);var l=Vl();(h.google_additional_params=h.google_additional_params||{}).gdpr_consent=l;f(h)||c()}else c()},e=function(){S(b,d,c)};jg()?sg(function(){qg(H.s)?e():mg(e,H.s)},[H.s]):(Yj(),e())})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){cq(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(hh(a.vtp_gtmEventId,"event"))})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=pp(c,"gtm.click");Up(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!Zp("cl")){var c=T("document");Rf(c,"click",a,!0);$p("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=T(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];cq(c,"j",a.vtp_gtmEventId);return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return Wp(a.vtp_name,Tp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],n=l.key;l.read&&e.push(n);l.write&&f.push(n);l.execute&&g.push(n)}return{assert:function(p,q,t){if(!m(t))throw d(p,{},"Key must be a string.");if("read"===q){if(-1<Na(e,t))return}else if("write"===q){if(-1<Na(f,t))return}else if("readwrite"===q){if(-1<Na(f,t)&&-1<Na(e,t))return}else if("execute"===q){if(-1<Na(g,t))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+q);throw d(p,{},"Prohibited "+q+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Pa(a.vtp_min,a.vtp_max)})}();
Z.b.tg=["google"],function(){function a(g){f.push(g);1<f.length||N(function(){var h=f.join(",");f=[];Up({event:"gtm.triggerGroup","gtm.triggers":h})})}function b(g,h){var l=c[h],n=l.indexOf(g);-1!==n&&(l.splice(n,1),l.length||a(h))}var c={},d={},e=[],f=[];(function(g){Z.__tg=g;Z.__tg.g="tg";Z.__tg.h=!0;Z.__tg.priorityOverride=0})(function(g){N(g.vtp_gtmOnSuccess);var h=g.vtp_uniqueTriggerId,l=g.vtp_triggerIds,n=g.vtp_firingId;
if(g.vtp_isListeningTag){var p=d[n];p?b(n,p):e.push(n)}else{c[h]=l;for(var q=0,t;t=l[q];q++)d[t]=h;for(var r=0;r<e.length;r++)b(e[r],h)}})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=Tp("gtm.url",1);c=c||Qp();var d=b[a("vtp_component")];if(!d||"URL"==d)return Sp(String(c));var e=th(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;g?La(h)?n=h:n=String(h).replace(/\s+/g,
"").split(","):n=[String(h)];for(var p=0;p<n.length;p++){var q=rh(e,"QUERY",void 0,void 0,n[p]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=rh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Tp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;cq(d,"v",a.vtp_gtmEventId);return d})}();
Z.b.tl=["google"],function(){function a(b){return function(){if(b.Bd&&b.Cd>=b.Bd)b.xd&&T("self").clearInterval(b.xd);else{b.Cd++;var c=Pp().getTime();Up({event:b.O,"gtm.timerId":b.xd,"gtm.timerEventNumber":b.Cd,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.Bd,"gtm.timerStartTime":b.Cf,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.Cf,"gtm.triggers":b.wi})}}}(function(b){Z.__tl=b;Z.__tl.g="tl";Z.__tl.h=!0;Z.__tl.priorityOverride=0})(function(b){N(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{O:b.vtp_eventName,Cd:0,interval:Number(b.vtp_interval),Bd:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),wi:String(b.vtp_uniqueTriggerId||"0"),Cf:Pp().getTime()};c.xd=T("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.b.ua=["google"],function(){function a(q){return qg(q)}function b(q,t){if(jg()&&!e[q]){var r=function(){var u=dk(),v="gtm"+Xg(),x=n(t),y={name:v};l(x,y,!0);u("create",q,y);u(function(){u.remove(v)})};mg(r,H.M);mg(r,H.s);e[q]=!0}}var c,d={},e={},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,
useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h={urlPassthrough:!0},l=function(q,t,r){var u=0;if(q)for(var v in q)if(!h[v]&&q.hasOwnProperty(v)&&(r&&f[v]||!r&&void 0===f[v])){var x=g[v]?Wa(q[v]):q[v];"anonymizeIp"!=v||x||
(x=void 0);t[v]=x;u++}return u},n=function(q){var t={};q.vtp_gaSettings&&E(Jq(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);E(Jq(q.vtp_fieldsToSet,"fieldName","value"),t);qg(H.M)||(t.storage="none");qg(H.s)||(t.allowAdFeatures=!1,t.storeGac=!1);Vm()||(t.allowAdFeatures=!1);Um()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);
return t},p=function(q){function t(ta,P){void 0!==P&&F("set",ta,P)}var r={},u={},v={},x={};if(q.vtp_gaSettings){var y=q.vtp_gaSettings;E(Jq(y.vtp_contentGroup,"index","group"),u);E(Jq(y.vtp_dimension,"index","dimension"),v);E(Jq(y.vtp_metric,"index","metric"),x);var w=E(y);w.vtp_fieldsToSet=void 0;w.vtp_contentGroup=void 0;w.vtp_dimension=
void 0;w.vtp_metric=void 0;q=E(q,w)}E(Jq(q.vtp_contentGroup,"index","group"),u);E(Jq(q.vtp_dimension,"index","dimension"),v);E(Jq(q.vtp_metric,"index","metric"),x);var z=n(q),A=fk(q.vtp_functionName);if(Ja(A)){var C="",D="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(D=q.vtp_trackerName,C=D+"."):(D="gtm"+Xg(),C=D+".");var F=function(ta){var P=[].slice.call(arguments,0);P[0]=C+P[0];A.apply(window,P)},M=function(ta,P){return void 0===P?P:ta(P)},Q=function(ta,P){if(P)for(var fb in P)P.hasOwnProperty(fb)&&
F("set",ta+fb,P[fb])},ba=function(){},ca={name:D};l(z,ca,!0);var va=q.vtp_trackingId||r.trackingId;A("create",va,ca);F("set","&gtm",sl(!0));
jg()&&(F("set","&gcs",rg()),b(va,q));z._x_19&&(null==Kf&&delete z._x_19,z._x_20&&!d[D]&&(d[D]=!0,A(kk(D,String(z._x_20)))));q.vtp_enableRecaptcha&&F("require","recaptcha","recaptcha.js");(function(ta,P){void 0!==q[P]&&F("set",ta,q[P])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",u);Q("dimension",v);Q("metric",x);var J={};l(z,J,!1)&&F("set",J);var K;
q.vtp_enableLinkId&&F("require","linkid","linkid.js");F("set","hitCallback",function(){var ta=z&&z.hitCallback;Ja(ta)&&ta();q.vtp_gtmOnSuccess()});if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ba());var V={hitType:"event",eventCategory:String(q.vtp_eventCategory||r.category),eventAction:String(q.vtp_eventAction||r.action),eventLabel:M(String,q.vtp_eventLabel||r.label),eventValue:M(Va,q.vtp_eventValue||
r.value)};l(K,V,!1);F("send",V);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==
q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(F("require","ec","ec.js"),ba());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var fc=
"_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","displayfeatures",void 0,{cookieName:fc})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Cc="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");F("require","adfeatures",{cookieName:Cc})}K?F("send","pageview",K):F("send","pageview");q.vtp_autoLinkDomains&&gk(C,q.vtp_autoLinkDomains,!!q.vtp_useHashAutoLink,!!q.vtp_decorateFormsAutoLink);
Wa(z.urlPassthrough)&&hk(C)}if(!c){var jd=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(jd="internal/"+jd);c=!0;var kd=el(z._x_19,"/analytics.js"),Df=ij("https:","http:","//www.google-analytics.com/"+jd,z&&!!z.forceSSL);S("analytics.js"===jd&&kd?kd:Df,function(){var ta=dk();ta&&ta.loaded||q.vtp_gtmOnFailure();},
q.vtp_gtmOnFailure)}}else N(q.vtp_gtmOnFailure)};(function(q){Z.__ua=q;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0})(function(q){sg(function(){p(q)},[H.M,H.s])})}();


Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!m(f))throw d(e,{},"Script URL must be a string.");try{if(Be(th(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();




Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){N(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||yi())&&Qi(a,h));Ni(h);Si(["aw","dc"],h);aj(g,h);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var n=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");Ri(a,n,b.vtp_urlPosition,!!b.vtp_formDecoration,l)}var p=Tp(H.N);Xl(!1,void 0!=p&&!1!==p);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&Ui()})}();
Z.b.aev=["google"],function(){function a(r,u){var v=hh(r,"gtm");if(v)return v[u]}function b(r,u,v,x){x||(x="element");var y=r+"."+u,w;if(p.hasOwnProperty(y))w=p[y];else{var z=a(r,x);if(z&&(w=v(z),p[y]=w,q.push(y),35<q.length)){var A=q.shift();delete p[A]}}return w}function c(r,u,v){var x=a(r,t[u]);return void 0!==x?x:v}function d(r,u){if(!r)return!1;var v=e(Qp());La(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<u.length;y++){var w=u[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(A){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(r))return!1}else{var z=w;if(0!=z.length){if(0<=e(r).indexOf(z))return!1;x.push(e(z))}}}return!Iq(r,x)}function e(r){n.test(r)||(r="http://"+r);return rh(th(r),"HOST",!0)}function f(r,u,v){switch(r){case "SUBMIT_TEXT":return b(u,"FORM."+r,g,"formSubmitElement")||v;case "LENGTH":var x=b(u,"FORM."+r,h);return void 0===x?v:x;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",
v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var w=a(u,"interactSequenceNumber");return void 0===w?v:w;default:return v}}function g(r){switch(r.tagName.toLowerCase()){case "input":return Tf(r,"value");case "button":return Uf(r);default:return null}}function h(r){if("form"===r.tagName.toLowerCase()&&r.elements){for(var u=0,v=0;v<r.elements.length;v++)wp(r.elements[v])&&
u++;return u}}function l(r,u,v){var x=a(r,"interactedFormField");return x&&Tf(x,u)||v}var n=/^https?:\/\//i,p={},q=[],t={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(r){Z.__aev=r;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=
0})(function(r){var u=r.vtp_gtmEventId,v=r.vtp_defaultValue,x=r.vtp_varType;switch(x){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||v;case "TEXT":return b(u,x,Uf)||v;case "URL":var w;a:{var z=String(a(u,"elementUrl")||v||""),A=th(z),C=String(r.vtp_component||"URL");switch(C){case "URL":w=z;break a;case "IS_OUTBOUND":w=d(z,r.vtp_affiliatedDomains);break a;default:w=rh(A,C,r.vtp_stripWww,r.vtp_defaultPages,r.vtp_queryKey)}}return w;case "ATTRIBUTE":var D;if(void 0===r.vtp_attribute)D=c(u,
x,v);else{var F=r.vtp_attribute,M=a(u,"element");D=M&&Tf(M,F)||v||""}return D;case "MD":var Q=r.vtp_mdValue,ba=b(u,"MD",Ip);return Q&&ba?Lp(ba,Q)||v:ba||v;case "FORM":return f(String(r.vtp_component||"SUBMIT_TEXT"),u,v);default:var ca=c(u,x,v);cq(ca,"aev",r.vtp_gtmEventId);return ca}})}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(g){var h=T("google_trackConversion"),l=g.gtm_onFailure;"function"==typeof h?h(g)||l():l()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}};(function(g){Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=
0})(function(g){function h(y,w,z){return"DATA_LAYER"===y?Tp(z):g[w]}function l(){u("gdpr_consent",Vl());}function n(){}function p(y){var w=!0;y&&n();w&&b.push(q)}Yj();var q={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:g.vtp_conversionId,google_conversion_label:g.vtp_conversionLabel,
google_conversion_value:g.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:g.vtp_gtmOnSuccess,gtm_onFailure:g.vtp_gtmOnFailure,google_gtm:sl()};q.google_gtm_experiments={capi:!0};g.vtp_rdp&&(q.google_restricted_data_processing=!0);void 0!=Tp(H.N)&&!1!==Tp(H.N)&&(q.google_gtm_url_processor=function(y){return y=wj(y)});var t=function(y){return function(w,z,A){var C=h(y,z,A);C&&(q[w]=C)}},
r=t("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");g.vtp_enableProductReporting&&(r=t(g.vtp_productReportingDataSource),r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items","vtp_items","items"),q.google_conversion_items&&
q.google_conversion_items.map&&(q.google_conversion_items=q.google_conversion_items.map(function(y){return{value:y.price,quantity:y.quantity,item_id:y.id}})));var u=function(y,w){void 0!==w&&((q.google_additional_conversion_params=q.google_additional_conversion_params||{})[y]=w)},v=function(y){return function(w,z,A,C){var D=h(y,z,A);C(D)&&u(w,D)}};(function(){})();g.vtp_transportUrl&&(q.google_transport_url=g.vtp_transportUrl);var x=el(g.vtp_transportUrl,"/pagead/conversion_async.js");x||(x=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");
g.vtp_enableNewCustomerReporting&&(r=v(g.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(y){return void 0!=y&&""!==y}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(y){return void 0!=y&&""!==y}));!g.hasOwnProperty("vtp_enableConversionLinker")||g.vtp_enableConversionLinker?(g.vtp_conversionCookiePrefix&&(q.google_gcl_cookie_prefix=g.vtp_conversionCookiePrefix),q.google_read_gcl_cookie_opt_out=!1):q.google_read_gcl_cookie_opt_out=!0;"1"===
ri(!1)._up&&u("gtm_up","1");l();(function(){jg()?sg(function(){l();var y=qg(H.s),w=!y&&void 0!=Tp(H.N)&&!1!==Tp(H.N);!g.vtp_transportUrl&&w&&(q.google_transport_url="https://pagead2.googlesyndication.com/");u("gcs",rg());p(y);y||mg(function(){l();q=E(q);!g.vtp_transportUrl&&q.google_transport_url&&delete q.google_transport_url;u("gcs",rg());u("gcu","1");p(!0)},H.s)},[H.s]):p(!0)})();a||(a=!0,S(x,f(),e(x)))})}();
Z.b.baut=["nonGoogleScripts"],function(){var a=!1;(function(b){Z.__baut=b;Z.__baut.g="baut";Z.__baut.h=!0;Z.__baut.priorityOverride=0})(function(b){var c=b.vtp_uetqName||"uetq",d=T(c,[],!0);if("VARIABLE_REVENUE"==b.vtp_eventType)d.push({gv:b.vtp_goalValue}),b.vtp_gtmOnSuccess();else if("CUSTOM"==b.vtp_eventType){var e={},f=function(g,h){void 0!==b[g]&&(e[h]=b[g])};f("vtp_goalValue","gv");f("vtp_eventCategory","ec");f("vtp_eventAction",
"ea");f("vtp_eventLabel","el");f("vtp_eventValue","ev");d.push(e);b.vtp_gtmOnSuccess()}else if(a)b.vtp_gtmOnSuccess();else try{S("//bat.bing.com/bat.js",function(){var g=pf(T("UET"),{ti:b.vtp_tagId,q:d});B[c]=g;g.push("pageLoad");b.vtp_gtmOnSuccess()},b.vtp_gtmOnFailure),a=!0}catch(g){N(b.vtp_gtmOnFailure)}})}();




Z.b.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.g="paused";Z.__paused.h=!0;Z.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();

Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var n=L.createElement("script");n.async=!1;n.type="text/javascript";n.id=h.id;n.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(n.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(n.src=p,Mf(n,l));d.insertBefore(n,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];h.firstChild;)q.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,q,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){Pj(function(){var g=O.postscribe,h={done:e},l=L.createElement("div");l.style.display="none";l.style.visibility="hidden";L.body.appendChild(l);try{g(l,d,h)}catch(n){N(f)}})};var c=function(d){if(L.body){var e=d.vtp_gtmOnFailure,f=dq(d.vtp_html,d.vtp_gtmOnSuccess,
e),g=f.wd,h=f.J;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(L.body,Vf(g),h,e)()}else Op(function(){c(d)},200)};Z.__html=c;Z.__html.g="html";Z.__html.h=
!0;Z.__html.priorityOverride=0}();




Z.b.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.g="img";Z.__img.h=!0;Z.__img.priorityOverride=0})(function(a){var b=Vf('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}Hq(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();




var $s={};$s.macro=function(a){if(mp.jd.hasOwnProperty(a))return mp.jd[a]},$s.onHtmlSuccess=mp.ef(!0),$s.onHtmlFailure=mp.ef(!1);$s.dataLayer=dh;$s.callback=function(a){Vg.hasOwnProperty(a)&&Ja(Vg[a])&&Vg[a]();delete Vg[a]};$s.bootstrap=0;$s._spx=!1;function at(){O[Yd.C]=$s;cb(Wg,Z.b);Bd=Bd||mp;Cd=Ud}
function bt(){Zf.gtm_3pds=!0;Zf.gtag_cs_api=!0;O=B.google_tag_manager=B.google_tag_manager||{};Tl();if(O[Yd.C]){var a=O.zones;a&&a.unregisterChild(Yd.C);}else{for(var b=data.resource||{},c=b.macros||[],d=
0;d<c.length;d++)ud.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)xd.push(e[f]);for(var g=b.predicates||[],h=0;h<g.length;h++)wd.push(g[h]);for(var l=b.rules||[],n=0;n<l.length;n++){for(var p=l[n],q={},t=0;t<p.length;t++)q[p[t][0]]=Array.prototype.slice.call(p[t],1);vd.push(q)}zd=Z;Ad=Dq;var r=data.permissions||{},u=data.sandboxed_scripts,v=data.security_groups;wo();be=new ae(r);if(void 0!==u)for(var x=["sandboxedScripts"],y=0;y<u.length;y++){var w=u[y].replace(/^_*/,"");Wg[w]=x}zo(v);at();lp();
Kj=!1;Lj=0;if("interactive"==L.readyState&&!L.createEventObject||"complete"==L.readyState)Nj();else{Rf(L,"DOMContentLoaded",Nj);Rf(L,"readystatechange",Nj);if(L.createEventObject&&L.documentElement.doScroll){var z=!0;try{z=!B.frameElement}catch(M){}z&&Oj()}Rf(B,"load",Nj)}Mn=!1;"complete"===L.readyState?On():Rf(B,"load",On);
a:{if(!Ik)break a;B.setInterval(Jk,864E5);}var F=O;F.postscribe||(F.postscribe=B.postscribe||De);Tg=(new Date).getTime();}}
(function(a){var e=!0;
e=!1;if(e){a();return}var f=function(){var n=B["google.tagmanager.debugui2.queue"];n||(n=[],B["google.tagmanager.debugui2.queue"]=n,Nf("https://www.googletagmanager.com/debug/bootstrap"));return n},g="x"===rh(B.location,"query",
!1,void 0,"gtm_debug");if(!g&&L.referrer){var h=th(L.referrer);g="tagassistant.google.com"===qh(h,"host")}if(!g){var l=xh("__TAG_ASSISTANT");g=l.length&&l[0].length}B.__TAG_ASSISTANT_API&&(g=!0);if(g&&Kf){f().push({messageType:"CONTAINER_STARTING",data:{scriptSource:Kf,resume:function(){a()}}});return}a()})(bt);

})()
