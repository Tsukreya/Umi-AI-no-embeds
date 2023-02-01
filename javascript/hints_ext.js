
// hints no longer work iirc
globalThis.titles = {
    ...globalThis.titles,
    "Verbose logging": "Displays UmiAI log messages. Useful when prompt crafting, or debugging file-path errors.",
    "Cache files": "Cache .txt and .yaml files at runtime. Speeds up prompt generation. Disable if you're editing wildcard files to see changes instantly.",
    "Same prompt in batch": 'Same prompt will be used for all generated images in a batch.',
    '**negative keywords**': 'Collect and add **negative keywords** from wildcards to Negative Prompts. Needed for fine-tuned UMI Preset Prompts.',
    'Static wildcards': 'Always picks the same random/wildcard options when using a static seed.'
};

/**
 * apng-canvas v2.0.1
 * @copyright 2011, 2015 David Mzareulyan
 * @link https://github.com/davidmz/apng-canvas
 * @license MIT
 */
!function t(e,n,r){function i(a,s){if(!n[a]){if(!e[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var c=n[a]={exports:{}};e[a][0].call(c.exports,function(t){var n=e[a][1][t];return i(n?n:t)},c,c.exports,t,e,n,r)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){(function(n,r){(function(){"use strict";function i(t){return"function"==typeof t||"object"==typeof t&&null!==t}function o(t){return"function"==typeof t}function a(t){return"object"==typeof t&&null!==t}function s(t){H=t}function u(t){K=t}function c(){return function(){n.nextTick(p)}}function f(){return function(){V(p)}}function l(){var t=0,e=new z(p),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function h(){var t=new MessageChannel;return t.port1.onmessage=p,function(){t.port2.postMessage(0)}}function d(){return function(){setTimeout(p,1)}}function p(){for(var t=0;Z>t;t+=2){var e=et[t],n=et[t+1];e(n),et[t]=void 0,et[t+1]=void 0}Z=0}function A(){try{var e=t,n=e("vertx");return V=n.runOnLoop||n.runOnContext,f()}catch(r){return d()}}function v(){}function m(){return new TypeError("You cannot resolve a promise with itself")}function g(){return new TypeError("A promises callback cannot return that same promise.")}function w(t){try{return t.then}catch(e){return ot.error=e,ot}}function y(t,e,n,r){try{t.call(e,n,r)}catch(i){return i}}function _(t,e,n){K(function(t){var r=!1,i=y(n,e,function(n){r||(r=!0,e!==n?P(t,n):N(t,n))},function(e){r||(r=!0,C(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&i&&(r=!0,C(t,i))},t)}function b(t,e){e._state===rt?N(t,e._result):e._state===it?C(t,e._result):T(e,void 0,function(e){P(t,e)},function(e){C(t,e)})}function E(t,e){if(e.constructor===t.constructor)b(t,e);else{var n=w(e);n===ot?C(t,ot.error):void 0===n?N(t,e):o(n)?_(t,e,n):N(t,e)}}function P(t,e){t===e?C(t,m()):i(e)?E(t,e):N(t,e)}function x(t){t._onerror&&t._onerror(t._result),I(t)}function N(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&K(I,t))}function C(t,e){t._state===nt&&(t._state=it,t._result=e,K(x,t))}function T(t,e,n,r){var i=t._subscribers,o=i.length;t._onerror=null,i[o]=e,i[o+rt]=n,i[o+it]=r,0===o&&t._state&&K(I,t)}function I(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,i,o=t._result,a=0;a<e.length;a+=3)r=e[a],i=e[a+n],r?R(n,r,i,o):i(o);t._subscribers.length=0}}function B(){this.error=null}function O(t,e){try{return t(e)}catch(n){return at.error=n,at}}function R(t,e,n,r){var i,a,s,u,c=o(n);if(c){if(i=O(n,r),i===at?(u=!0,a=i.error,i=null):s=!0,e===i)return void C(e,g())}else i=r,s=!0;e._state!==nt||(c&&s?P(e,i):u?C(e,a):t===rt?N(e,i):t===it&&C(e,i))}function U(t,e){try{e(function(e){P(t,e)},function(e){C(t,e)})}catch(n){C(t,n)}}function L(t,e){var n=this;n._instanceConstructor=t,n.promise=new t(v),n._validateInput(e)?(n._input=e,n.length=e.length,n._remaining=e.length,n._init(),0===n.length?N(n.promise,n._result):(n.length=n.length||0,n._enumerate(),0===n._remaining&&N(n.promise,n._result))):C(n.promise,n._validationError())}function D(t){return new st(this,t).promise}function j(t){function e(t){P(i,t)}function n(t){C(i,t)}var r=this,i=new r(v);if(!Q(t))return C(i,new TypeError("You must pass an array to race.")),i;for(var o=t.length,a=0;i._state===nt&&o>a;a++)T(r.resolve(t[a]),void 0,e,n);return i}function k(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(v);return P(n,t),n}function F(t){var e=this,n=new e(v);return C(n,t),n}function S(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function G(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function M(t){this._id=ht++,this._state=void 0,this._result=void 0,this._subscribers=[],v!==t&&(o(t)||S(),this instanceof M||G(),U(this,t))}function q(){var t;if("undefined"!=typeof r)t=r;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=dt)}var Y;Y=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var V,H,J,Q=Y,Z=0,K=({}.toString,function(t,e){et[Z]=t,et[Z+1]=e,Z+=2,2===Z&&(H?H(p):J())}),W="undefined"!=typeof window?window:void 0,$=W||{},z=$.MutationObserver||$.WebKitMutationObserver,X="undefined"!=typeof n&&"[object process]"==={}.toString.call(n),tt="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,et=new Array(1e3);J=X?c():z?l():tt?h():void 0===W&&"function"==typeof t?A():d();var nt=void 0,rt=1,it=2,ot=new B,at=new B;L.prototype._validateInput=function(t){return Q(t)},L.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},L.prototype._init=function(){this._result=new Array(this.length)};var st=L;L.prototype._enumerate=function(){for(var t=this,e=t.length,n=t.promise,r=t._input,i=0;n._state===nt&&e>i;i++)t._eachEntry(r[i],i)},L.prototype._eachEntry=function(t,e){var n=this,r=n._instanceConstructor;a(t)?t.constructor===r&&t._state!==nt?(t._onerror=null,n._settledAt(t._state,e,t._result)):n._willSettleAt(r.resolve(t),e):(n._remaining--,n._result[e]=t)},L.prototype._settledAt=function(t,e,n){var r=this,i=r.promise;i._state===nt&&(r._remaining--,t===it?C(i,n):r._result[e]=n),0===r._remaining&&N(i,r._result)},L.prototype._willSettleAt=function(t,e){var n=this;T(t,void 0,function(t){n._settledAt(rt,e,t)},function(t){n._settledAt(it,e,t)})};var ut=D,ct=j,ft=k,lt=F,ht=0,dt=M;M.all=ut,M.race=ct,M.resolve=ft,M.reject=lt,M._setScheduler=s,M._setAsap=u,M._asap=K,M.prototype={constructor:M,then:function(t,e){var n=this,r=n._state;if(r===rt&&!t||r===it&&!e)return this;var i=new this.constructor(v),o=n._result;if(r){var a=arguments[r-1];K(function(){R(r,i,a,o)})}else T(n,i,t,e);return i},"catch":function(t){return this.then(null,t)}};var pt=q,At={Promise:dt,polyfill:pt};"function"==typeof define&&define.amd?define(function(){return At}):"undefined"!=typeof e&&e.exports?e.exports=At:"undefined"!=typeof this&&(this.ES6Promise=At),pt()}).call(this)}).call(this,t("VCmEsw"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{VCmEsw:2}],2:[function(t,e,n){function r(){}var i=e.exports={};i.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.postMessage&&window.addEventListener;if(t)return function(t){return window.setImmediate(t)};if(e){var n=[];return window.addEventListener("message",function(t){var e=t.source;if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift();r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}}return function(t){setTimeout(t,0)}}(),i.title="browser",i.browser=!0,i.env={},i.argv=[],i.on=r,i.addListener=r,i.once=r,i.off=r,i.removeListener=r,i.removeAllListeners=r,i.emit=r,i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")}},{}],3:[function(t,e,n){"use strict";var r=function(){this.width=0,this.height=0,this.numPlays=0,this.playTime=0,this.frames=[],this.play=function(){i||o||(this.rewind(),i=!0,requestAnimationFrame(s))},this.rewind=function(){e=0,n=0,r=null,i=!1,o=!1},this.addContext=function(t){if(a.length>0){var e=a[0].getImageData(0,0,this.width,this.height);t.putImageData(e,0,0)}a.push(t),t._apng_animation=this},this.removeContext=function(t){var e=a.indexOf(t);-1!==e&&(a.splice(e,1),0===a.length&&this.rewind(),"_apng_animation"in t&&delete t._apng_animation)},this.isPlayed=function(){return i},this.isFinished=function(){return o};var t=this,e=0,n=0,r=null,i=!1,o=!1,a=[],s=function(t){for(;i&&t>=e;)u(t);i&&requestAnimationFrame(s)},u=function(s){var u=n++%t.frames.length,c=t.frames[u];if(0==u&&(a.forEach(function(e){e.clearRect(0,0,t.width,t.height)}),r=null,2==c.disposeOp&&(c.disposeOp=1)),r&&1==r.disposeOp?a.forEach(function(t){t.clearRect(r.left,r.top,r.width,r.height)}):r&&2==r.disposeOp&&a.forEach(function(t){t.putImageData(r.iData,r.left,r.top)}),r=c,r.iData=null,2==r.disposeOp&&(r.iData=a[0].getImageData(c.left,c.top,c.width,c.height)),0==c.blendOp&&a.forEach(function(t){t.clearRect(c.left,c.top,c.width,c.height)}),a.forEach(function(t){t.drawImage(c.img,c.left,c.top)}),0==t.numPlays||n/t.frames.length<t.numPlays){for(0==e&&(e=s);s>e+t.playTime;)e+=t.playTime;e+=c.delay}else i=!1,o=!1}};e.exports=r},{}],4:[function(t,e,n){"use strict";for(var r=new Uint32Array(256),i=0;256>i;i++){for(var o=i,a=0;8>a;a++)o=1&o?3988292384^o>>>1:o>>>1;r[i]=o}e.exports=function(t,e,n){e=e||0,n=n||t.length-e;for(var i=-1,o=e,a=e+n;a>o;o++)i=i>>>8^r[255&(i^t[o])];return-1^i}},{}],5:[function(t,e,n){(function(e){"use strict";var n=t("./support-test"),r=t("./parser"),i=t("./loader"),o=e.APNG={};o.checkNativeFeatures=n.checkNativeFeatures,o.ifNeeded=n.ifNeeded,o.parseBuffer=function(t){return r(t)};var a={};o.parseURL=function(t){return t in a||(a[t]=i(t).then(r)),a[t]},o.animateContext=function(t,e){return o.parseURL(t).then(function(t){return t.addContext(e),t.play(),t})},o.animateImage=function(t){return t.setAttribute("data-is-apng","progress"),o.parseURL(t.src).then(function(e){t.setAttribute("data-is-apng","yes");var n=document.createElement("canvas");n.width=e.width,n.height=e.height,Array.prototype.slice.call(t.attributes).forEach(function(t){-1==["alt","src","usemap","ismap","data-is-apng","width","height"].indexOf(t.nodeName)&&n.setAttributeNode(t.cloneNode(!1))}),n.setAttribute("data-apng-src",t.src),""!=t.alt&&n.appendChild(document.createTextNode(t.alt));var r="",i="",o=0,a="";""!=t.style.width&&"auto"!=t.style.width?r=t.style.width:t.hasAttribute("width")&&(r=t.getAttribute("width")+"px"),""!=t.style.height&&"auto"!=t.style.height?i=t.style.height:t.hasAttribute("height")&&(i=t.getAttribute("height")+"px"),""!=r&&""==i&&(o=parseFloat(r),a=r.match(/\D+$/)[0],i=Math.round(n.height*o/n.width)+a),""!=i&&""==r&&(o=parseFloat(i),a=i.match(/\D+$/)[0],r=Math.round(n.width*o/n.height)+a),n.style.width=r,n.style.height=i;var s=t.parentNode;s.insertBefore(n,t),s.removeChild(t),e.addContext(n.getContext("2d")),e.play()},function(){t.setAttribute("data-is-apng","no")})},o.releaseCanvas=function(t){var e=t.getContext("2d");"_apng_animation"in e&&e._apng_animation.removeContext(e)}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./loader":6,"./parser":7,"./support-test":8}],6:[function(t,e,n){"use strict";var r=r||t("es6-promise").Promise;e.exports=function(t){return new r(function(e,n){var r=new XMLHttpRequest;r.open("GET",t),r.responseType="arraybuffer",r.onload=function(){200==this.status?e(this.response):n(this)},r.send()})}},{"es6-promise":1}],7:[function(t,e,n){"use strict";var r=r||t("es6-promise").Promise,i=t("./animation"),o=t("./crc32"),a=new Uint8Array([137,80,78,71,13,10,26,10]);e.exports=function(t){var e=new Uint8Array(t);return new r(function(t,n){for(var r=0;r<a.length;r++)if(a[r]!=e[r])return void n("Not a PNG file (invalid file signature)");var o=!1;if(s(e,function(t){return"acTL"==t?(o=!0,!1):!0}),!o)return void n("Not an animated PNG");var h=[],p=[],v=null,m=null,g=new i;if(s(e,function(t,e,n,r){switch(t){case"IHDR":v=e.subarray(n+8,n+8+r),g.width=u(e,n+8),g.height=u(e,n+12);break;case"acTL":g.numPlays=u(e,n+8+4);break;case"fcTL":m&&g.frames.push(m),m={},m.width=u(e,n+8+4),m.height=u(e,n+8+8),m.left=u(e,n+8+12),m.top=u(e,n+8+16);var i=c(e,n+8+20),o=c(e,n+8+22);0==o&&(o=100),m.delay=1e3*i/o,m.delay<=10&&(m.delay=100),g.playTime+=m.delay,m.disposeOp=f(e,n+8+24),m.blendOp=f(e,n+8+25),m.dataParts=[];break;case"fdAT":m&&m.dataParts.push(e.subarray(n+8+4,n+8+r));break;case"IDAT":m&&m.dataParts.push(e.subarray(n+8,n+8+r));break;case"IEND":p.push(l(e,n,12+r));break;default:h.push(l(e,n,12+r))}}),m&&g.frames.push(m),0==g.frames.length)return void n("Not an animated PNG");for(var w=0,y=new Blob(h),_=new Blob(p),b=0;b<g.frames.length;b++){m=g.frames[b];var E=[];E.push(a),v.set(d(m.width),0),v.set(d(m.height),4),E.push(A("IHDR",v)),E.push(y);for(var P=0;P<m.dataParts.length;P++)E.push(A("IDAT",m.dataParts[P]));E.push(_);var x=URL.createObjectURL(new Blob(E,{type:"image/png"}));delete m.dataParts,E=null,m.img=document.createElement("img"),m.img.onload=function(){URL.revokeObjectURL(this.src),w++,w==g.frames.length&&t(g)},m.img.onerror=function(){n("Image creation error")},m.img.src=x}})};var s=function(t,e){var n=8;do{var r=u(t,n),i=h(t,n+4,4),o=e(i,t,n,r);n+=12+r}while(o!==!1&&"IEND"!=i&&n<t.length)},u=function(t,e){var n=0;n+=t[0+e]<<24>>>0;for(var r=1;4>r;r++)n+=t[r+e]<<8*(3-r);return n},c=function(t,e){for(var n=0,r=0;2>r;r++)n+=t[r+e]<<8*(1-r);return n},f=function(t,e){return t[e]},l=function(t,e,n){var r=new Uint8Array(n);return r.set(t.subarray(e,e+n)),r},h=function(t,e,n){var r=Array.prototype.slice.call(t.subarray(e,e+n));return String.fromCharCode.apply(String,r)},d=function(t){return[t>>>24&255,t>>>16&255,t>>>8&255,255&t]},p=function(t){for(var e=[],n=0;n<t.length;n++)e.push(t.charCodeAt(n));return e},A=function(t,e){var n=t.length+e.length,r=new Uint8Array(new ArrayBuffer(n+8));r.set(d(e.length),0),r.set(p(t),4),r.set(e,8);var i=o(r,4,n);return r.set(d(i),n+4),r}},{"./animation":3,"./crc32":4,"es6-promise":1}],8:[function(t,e,n){(function(n){"use strict";var r=r||t("es6-promise").Promise,i=function(t){var e=null;return function(n){return e||(e=new r(t)),n&&e.then(n),e}},o=i(function(t){var e=document.createElement("canvas"),r={TypedArrays:"ArrayBuffer"in n,BlobURLs:"URL"in n,requestAnimationFrame:"requestAnimationFrame"in n,pageProtocol:"http:"==location.protocol&&"https:"==location.protocol,canvas:"getContext"in document.createElement("canvas"),APNG:!1};if(r.canvas){var i=new Image;i.onload=function(){var n=e.getContext("2d");n.drawImage(i,0,0),r.APNG=0===n.getImageData(0,0,1,1).data[3],t(r)},i.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg=="}else t(r)}),a=function(t){return"undefined"==typeof t&&(t=!1),o().then(function(e){if(e.APNG&&!t)reject();else{var n=!0;for(var r in e)e.hasOwnProperty(r)&&"APNG"!=r&&(n=n&&e[r])}})};e.exports={checkNativeFeatures:o,ifNeeded:a}}).call(this,"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"es6-promise":1}]},{},[5]);

function respondToVisibility(element, callback) {
    var options = {
      root: document.documentElement,
    };
  
    var observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        callback(entry.intersectionRatio > 0);
      });
    }, options);
  
    observer.observe(element);
  }

window.onload = () => {
    console.log('UmiAI loaded', window.APNG)

    const interval = setInterval(() => {
        const root = document.getElementsByTagName('gradio-app')?.[0]?.shadowRoot;
        console.log(root);
        if (root) {
            clearInterval(interval);
            
            const cards = root.querySelectorAll('.card');
            
            for (let card of cards) {
                const url = card.style.backgroundImage.replace('url("', '').replace('")', '');

                let over;
                let out;

                respondToVisibility(card, (visible) => {
                    if (visible) {
                        window.APNG.parseURL(url).then((apng) => {
                            const canvas = document.createElement("canvas");
                            canvas.width = 512;
                            canvas.height = 768;
                            canvas.style.transform = 'scale(0.44)';
                            canvas.style.transformOrigin = 'top left';
                            card.prepend(canvas);
        
                            apng.addContext(canvas.getContext("2d"));
                            apng.play();
                            setTimeout(() => apng.rewind(), 100);

                            card.style.backgroundImage = 'none';

                            over = () => {
                                apng.play();
                            };

                            out = () => {
                                apng.rewind();
                            };

                            card.addEventListener('mouseover', over);
                            card.addEventListener('mouseout', out);                            
                        });
                    } else {
                        card.getElementsByTagName('canvas')?.[0]?.remove();
                        card.removeEventListener('mouseover', over);
                        card.removeEventListener('mouseout', out);
                    }
                });
            }
        }
    }, 100);

    window.APNG.parseURL("./APNG-cube.png").then((apng) => {
        const canvas = document.createElement("canvas");
        canvas.width = apng.width;
        canvas.height = apng.height;
        document.getElementById("p").appendChild(canvas);
        
        apng.addContext(canvas.getContext("2d"));
        apng.play();
        
        document.getElementById("play-btn").addEventListener("click", () => {
            apng.play();
        });
        
        document.getElementById("stop-btn").addEventListener("click", () => {
            apng.rewind();
        });
    });
}
