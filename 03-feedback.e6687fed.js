!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=o);var n=o("1WSnx"),a=document.querySelector(".feedback-form"),l=document.querySelector("input"),u=document.querySelector("textarea"),i="feedback-form-state";function c(){output.textContent=localStorage.getItem(i)||""}c(),a.addEventListener("input",(0,n.throttle)((function(e){e.preventDefault();var t={email:l.value,message:u.value};localStorage.setItem(i,JSON.stringify(t)),c()}),500)),a.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:l.value,message:u.value}),a.reset(),localStorage.removeItem(i)}));var s=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}}(i);s&&(l.value=s.email,u.value=s.message)}();
//# sourceMappingURL=03-feedback.e6687fed.js.map
