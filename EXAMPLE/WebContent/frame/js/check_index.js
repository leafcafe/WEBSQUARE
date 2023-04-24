const IS_ANDROID = /Android/.test(navigator.userAgent);
const IS_IPHONE = /iPhone/.test(navigator.userAgent) || /iPhone/.test(navigator.platform);
const IS_IPAD = /iPad/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream;
const IS_IPOD = /iPod/.test(navigator.userAgent);
const IS_BLACKBERRY = /BlackBerry/.test(navigator.userAgent);
const IS_WEBOS = /webOS/.test(navigator.userAgent);
const URL_PC = "/websquare/websquare.html?w2xPath=/mainContainer.xml";
const URL_MOBILE = "/websquare/websquare.html?w2xPath=/mainContainer_mobile.xml";

const MAIN_URL = (IS_ANDROID || IS_IPHONE || IS_IPAD || IS_IPOD || IS_BLACKBERRY) ? URL_MOBILE : URL_PC;

