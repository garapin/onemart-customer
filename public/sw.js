if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const r=e=>s(e,c),o={module:{uri:c},exports:t,require:r};i[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"a5290f0d1d22d4b8aba773b6dec04f4c"},{url:"/_next/static/-pF7ixjDCOUG5Zz2OZ_ii/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/-pF7ixjDCOUG5Zz2OZ_ii/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/13b76428-0698a033cd0f983e.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/164f4fb6-c8e9548cb5cf1279.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/222-a4c0f7117bd3afbf.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/25-b3708f3eb66924c6.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/69-c3e404310bfa6b61.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/755-82d777e057c2e118.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/8e1d74a4-f8791303361ceaba.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/9-fb2722aa69fa9e8c.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/907.71c14e3226deb85c.js",revision:"71c14e3226deb85c"},{url:"/_next/static/chunks/985.d7918cc76a2c3a54.js",revision:"d7918cc76a2c3a54"},{url:"/_next/static/chunks/ad2866b8-c0fdef9fc4bc4d39.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(app)/layout-c61f9926783b4043.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(app)/page-a121476b89718cc6.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(app)/profile/page-ce195cafeb4de4d0.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(app)/shop/page-f55e0121c28ea605.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(auth)/login/page-12f760b487d7c9ad.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(auth)/register/page-3aaa92a3d7631638.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(scanner)/add-to-cart/page-ea3abcd4d7ab71f0.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(shop)/cart/page-03f35b8fd071a694.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(shop)/history/page-4be333bd9361c7d8.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(shop)/payment-method/page-db69443c144592e1.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/(shop)/receipt/page-33562596f416d646.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/_not-found-580e0bae345a3561.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/app/layout-9a42f0d6e175086f.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/bc98253f.4575f909bf360142.js",revision:"4575f909bf360142"},{url:"/_next/static/chunks/fd9d1056-622f65bb492327d8.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/main-7367869c1406ff83.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/main-app-2aa351d234bced62.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-aafd5ef55ac944dc.js",revision:"-pF7ixjDCOUG5Zz2OZ_ii"},{url:"/_next/static/css/b04cc9e8134bf2c6.css",revision:"b04cc9e8134bf2c6"},{url:"/_next/static/css/d0228f1259b15b83.css",revision:"d0228f1259b15b83"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/images/bank.png",revision:"dbfaaee3bc12babe8d1918bf7072d45d"},{url:"/images/bca.png",revision:"b1a7c79656111907b77fd8b363dfc429"},{url:"/images/bni.png",revision:"d833bb118463e723d0329261df86497c"},{url:"/images/bri.png",revision:"c2346ad1c91ee1cad556fff7e7ee673f"},{url:"/images/credit.png",revision:"7d9cfe7dea484eaa864ec377cfd7655b"},{url:"/images/icon.png",revision:"e9d188f7ababe5ce1a4900cf68538652"},{url:"/images/mandiri.png",revision:"e2d5017286e449f88ba9a4a42939af57"},{url:"/images/qr-placeholder.png",revision:"e1c3036a2d14c9f92497eb63c51f8ae4"},{url:"/images/shopee.png",revision:"9c2db4a5c7ce0133503fc8552e808156"},{url:"/images/success.png",revision:"302a2cbae1c149f90e8c8333245e982a"},{url:"/manifest.json",revision:"928d9be5dfa2c5feb92d266026ea724f"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
