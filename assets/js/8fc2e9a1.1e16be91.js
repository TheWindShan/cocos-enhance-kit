"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[700],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(a),d=r,k=s["".concat(o,".").concat(d)]||s[d]||m[d]||l;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},5624:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={sidebar_position:1,description:"\u5728\u6e38\u620f\u5f00\u53d1\u4e2d\u4eab\u53d7\u4e0d\u7528\u5173\u6ce8 Draw Call \u7684\u5feb\u4e50\u3002"},o="\u65b0 UI \u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357",u={unversionedId:"start-guide/batcher-guide",id:"version-1.0.0/start-guide/batcher-guide",title:"\u65b0 UI \u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357",description:"\u5728\u6e38\u620f\u5f00\u53d1\u4e2d\u4eab\u53d7\u4e0d\u7528\u5173\u6ce8 Draw Call \u7684\u5feb\u4e50\u3002",source:"@site/versioned_docs/version-1.0.0/start-guide/batcher-guide.md",sourceDirName:"start-guide",slug:"/start-guide/batcher-guide",permalink:"/cocos-service-pack/docs/start-guide/batcher-guide",draft:!1,tags:[],version:"1.0.0",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"\u5728\u6e38\u620f\u5f00\u53d1\u4e2d\u4eab\u53d7\u4e0d\u7528\u5173\u6ce8 Draw Call \u7684\u5feb\u4e50\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8\u6307\u5357",permalink:"/cocos-service-pack/docs/start-guide/start-guide-intro"},next:{title:"\u8fdb\u9636\u5408\u6279\u6307\u5357",permalink:"/cocos-service-pack/docs/start-guide/advance-batcher-guide"}},c={},m=[{value:"\u4ec0\u4e48\u662f\u591a\u7eb9\u7406\u6e32\u67d3\uff1f",id:"\u4ec0\u4e48\u662f\u591a\u7eb9\u7406\u6e32\u67d3",level:2},{value:"\u542f\u7528\u52a8\u6001\u5408\u56fe",id:"\u542f\u7528\u52a8\u6001\u5408\u56fe",level:2},{value:"\u5145\u5206\u5229\u7528\u52a8\u6001\u5408\u56fe",id:"\u5145\u5206\u5229\u7528\u52a8\u6001\u5408\u56fe",level:2},{value:"\u653e\u5bbd\u80fd\u53c2\u4e0e\u5408\u56fe\u7684\u7eb9\u7406\u5c3a\u5bf8\u9650\u5236",id:"\u653e\u5bbd\u80fd\u53c2\u4e0e\u5408\u56fe\u7684\u7eb9\u7406\u5c3a\u5bf8\u9650\u5236",level:3},{value:"\u65e0\u9700\u7ba1\u7406\u52a8\u6001\u56fe\u96c6\uff0c\u53ea\u9700\u8981\u91ca\u653e\u8d44\u6e90",id:"\u65e0\u9700\u7ba1\u7406\u52a8\u6001\u56fe\u96c6\u53ea\u9700\u8981\u91ca\u653e\u8d44\u6e90",level:3},{value:"\u66f4\u52a0\u7ec6\u81f4\u5730\u4f18\u5316\u56fe\u96c6\u7684\u4f7f\u7528\u6548\u7387",id:"\u66f4\u52a0\u7ec6\u81f4\u5730\u4f18\u5316\u56fe\u96c6\u7684\u4f7f\u7528\u6548\u7387",level:3},{value:"Label \u4e0d\u518d\u662f\u5408\u6279\u5669\u68a6",id:"label-\u4e0d\u518d\u662f\u5408\u6279\u5669\u68a6",level:2},{value:"\u8131\u80ce\u6362\u9aa8\u7684 Char \u7f13\u5b58\u6a21\u5f0f",id:"\u8131\u80ce\u6362\u9aa8\u7684-char-\u7f13\u5b58\u6a21\u5f0f",level:3},{value:"\u515c\u5e95\u7684 Bitmap \u7f13\u5b58\u6a21\u5f0f",id:"\u515c\u5e95\u7684-bitmap-\u7f13\u5b58\u6a21\u5f0f",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:2}],s={toc:m};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u65b0-ui-\u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357"},"\u65b0 UI \u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357"),(0,l.kt)("p",null,"\u5728\u5b98\u65b9\u6587\u6863\u7684\u8fdb\u9636\u4e3b\u9898\u4e2d\u6709\u4e00\u4e2a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.cocos.com/creator/2.4/manual/zh/advanced-topics/ui-auto-batch.html"},"UI \u6e32\u67d3\u6279\u6b21\u5408\u5e76\u6307\u5357"),"\uff0c\u6279\u6b21\u5408\u5e76\u4e00\u76f4\u662f\u6e38\u620f\u5f00\u53d1\u4e2d\u91cd\u8981\u7684\u4f18\u5316\u624b\u6bb5\uff0c\u5982\u679c\u4f60\u672a\u9605\u8bfb\u8fc7\u5b98\u65b9\u7684\u6307\u5357\uff0c\u53ef\u4ee5\u5148\u9605\u8bfb\u4e00\u904d\u3002"),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("strong",{parentName:"p"},"\u591a\u7eb9\u7406\u6e32\u67d3"),"\u3001",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u52a8\u6001\u56fe\u96c6")," \u7b49\u7279\u6027\u51fa\u73b0\u540e\uff0c\u5728\u8fdb\u884c\u6279\u6b21\u5408\u5e76\u65f6\u53ef\u4ee5\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u4e14\u81ea\u52a8\u5316\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u4ec0\u4e48\u662f\u591a\u7eb9\u7406\u6e32\u67d3"},"\u4ec0\u4e48\u662f\u591a\u7eb9\u7406\u6e32\u67d3\uff1f"),(0,l.kt)("p",null,"\u5728\u4ee5\u524d\u7684\u8ba4\u8bc6\u91cc\uff0c\u6211\u4eec\u77e5\u9053\u76f8\u90bb\u7684\u8282\u70b9\u4f7f\u7528\u4e0d\u540c\u7684\u7eb9\u7406\uff08Texture\uff09\u4f1a\u5bfc\u81f4\u4e0d\u80fd\u5408\u5e76\u6279\u6b21\u3002"),(0,l.kt)("p",null,"\u5176\u6839\u672c\u539f\u56e0\u662f\u7eb9\u7406\u662f\u4f7f\u7528 uniform \u53d8\u91cf\u4f20\u7ed9\u7740\u8272\u5668\u7684\uff0c\u800c\u9700\u8981\u5408\u5e76\u6279\u6b21\u7684\u8bdd\u4e0d\u5141\u8bb8\u6bcf\u6b21\u6e32\u67d3\u90fd\u62e5\u6709\u4e0d\u540c\u7684 uniform \u53d8\u91cf\u503c\u3002"),(0,l.kt)("p",null,'\u670d\u52a1\u5305\u5b9e\u73b0\u7684\u662f\u5148\u8bbe\u7f6e\u591a\u4e2a uniform \u53d8\u91cf\uff0c\u6bd4\u5982\u5c06 8 \u5f20\u7eb9\u7406\u5199\u5165\u5230 "texture1" "texture2" "texture3"... \u7684 8 \u4e2a uniform \u53d8\u91cf\u4e2d\uff0c\u7136\u540e\u5728\u7740\u8272\u5668\u91cc\u518d\u5224\u65ad\u5e94\u8be5\u5728\u6e32\u67d3\u65f6\u4f7f\u7528\u54ea\u4e2a uniform \u53d8\u91cf\u3002'),(0,l.kt)("p",null,"\u8fd9\u6837\u7684\u8bdd\u5982\u679c\u6240\u6709\u6e32\u67d3\u90fd\u53ea\u7528\u8fd9 8 \u5f20\u7eb9\u7406\uff0c\u5c31\u90fd\u80fd\u5408\u5e76\u4e3a 1 \u4e2a\u6279\u6b21\u3002"),(0,l.kt)("p",null,"\u8fd9\u8981\u6c42\u8bbe\u5907\u652f\u6301\u91c7\u6837\u591a\u4e2a\u7eb9\u7406\uff0c\u800c\u5728\u73b0\u4ee3\u7edd\u5927\u591a\u6570\u8bbe\u5907\u4e2d\u90fd\u81f3\u5c11\u652f\u6301\u91c7\u6837 8 \u5f20\u7eb9\u7406\uff0c\u6240\u4ee5\u8fd9\u4e0d\u662f\u95ee\u9898\u3002"),(0,l.kt)("p",null,'\u5f53\u7136\u9664\u4e86\u8fd9\u79cd\u65b9\u6cd5\uff0c\u8fd8\u6709\u53e6\u5916\u51e0\u79cd\u8fdb\u884c\u591a\u7eb9\u7406\u5408\u6279\u7684\u65b9\u6cd5\uff0c\u4f8b\u5982 "Texture Array" \u548c "Bindless"\uff0c\u4f46\u90fd\u6709\u5b9e\u7528\u6027\u4e0e\u517c\u5bb9\u6027\u7684\u95ee\u9898\u3002'),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u5b9e\u73b0\u7684\u591a\u7eb9\u7406\u6e32\u67d3\u5e76\u4e0d\u662f\u6ca1\u6709\u5f0a\u7aef\u7684\uff1a"),(0,l.kt)("p",{parentName:"div"},"\u56e0\u4e3a\u4f1a\u591a\u4f20\u9012\u4e00\u4e2a\u9876\u70b9\u5c5e\u6027\uff0c\u5e76\u4e14\u9700\u8981\u5728\u7740\u8272\u5668\u4e2d\u53bb\u5224\u65ad\u8be5\u4f7f\u7528\u54ea\u4e2a\u7eb9\u7406\uff0c\u5bfc\u81f4",(0,l.kt)("strong",{parentName:"p"},"\u5408\u5e76\u6279\u6b21\u5e76\u4e0d\u4e00\u5b9a\u4f1a\u63d0\u5347\u6027\u80fd"),"\u3002"),(0,l.kt)("p",{parentName:"div"},"\u6240\u4ee5\u6211\u4eec\u5efa\u8bae\u5728\u591a\u4e2a\u6863\u6b21\u8bbe\u5907\u4e2d\u5b9e\u9645\u6d4b\u8bd5\u9879\u76ee\u662f\u5426\u4f7f\u7528\u591a\u7eb9\u7406\u6e32\u67d3\u7684\u6027\u80fd\u5dee\u8ddd\u3002"),(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u5bf9\u8fd9\u79cd\u6280\u672f\u6709\u6240\u62c5\u5fc3\uff0c\u53ef\u4ee5\u770b\u770b\u8fd9\u4e9b\uff1a"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"PixiJS \u5f15\u64ce\u5728 2016 \u5e74\u53d1\u5e03\u7684 v4 \u7248\u672c\u5c31\u5df2\u7ecf\u6b63\u5f0f\u5b9e\u88c5\u4e86\u591a\u7eb9\u7406\u6e32\u67d3\u673a\u5236")," ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/goodboy-digital/gpu-multi-texture-sprite-batching-21c90ae8f89b"},"\u8d44\u6599\u51fa\u5904"),"\u3002"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"Phaser \u5f15\u64ce\u5728 v4 \u4e0e v3 \u7248\u672c\u90fd\u5b9e\u88c5\u4e86\u591a\u7eb9\u7406\u6e32\u67d3\u673a\u5236\uff082019 - 2020\u5e74\uff09"),(0,l.kt)("a",{parentName:"p",href:"https://www.patreon.com/posts/39665256"},"\u8d44\u6599\u51fa\u5904"),"\u3002"))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u542f\u7528\u52a8\u6001\u5408\u56fe"},"\u542f\u7528\u52a8\u6001\u5408\u56fe"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u5f00\u53d1\u4e2d\u6211\u4eec\u901a\u5e38\u4f1a\u5173\u95ed\u52a8\u6001\u56fe\u96c6\uff0c\u66f4\u503e\u5411\u4e8e\u9760\u9759\u6001\u56fe\u96c6\u6216\u8005\u81ea\u52a8\u56fe\u96c6\u8fbe\u5230\u964d\u4f4e Draw Call \u7684\u76ee\u7684\u3002"),(0,l.kt)("p",null,"\u4e0d\u4f7f\u7528\u52a8\u6001\u56fe\u96c6\u6700\u91cd\u8981\u7684\u539f\u56e0\u662f\u5176\u4e0d\u80fd\u590d\u7528\u56fe\u96c6\u7684\u5e9f\u5f03\u533a\u57df\uff0c\u968f\u7740\u6e38\u620f\u7684\u8fd0\u884c\u52a8\u6001\u56fe\u96c6\u4f1a\u5b8c\u5168\u7528\u5b8c\u3002"),(0,l.kt)("p",null,"\u5f15\u64ce\u53ea\u63d0\u4f9b\u4e86\u5728\u5207\u6362\u573a\u666f\uff08Scene\uff09\u540e\u91cd\u7f6e\u6240\u6709\u56fe\u96c6\u7684\u673a\u5236\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u4f46\u5bf9\u4e8e\u5927\u90e8\u5206\u9879\u76ee\u6765\u8bf4\uff0c\u8fd9\u79cd\u6cbb\u6807\u4e0d\u6cbb\u672c\u7684\u673a\u5236\u57fa\u672c\u7b49\u4e8e\u6ca1\u6709\u89e3\u51b3\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u670d\u52a1\u5305\u51e0\u4e4e\u91cd\u6784\u4e86\u6574\u4e2a\u52a8\u6001\u5408\u56fe\u7cfb\u7edf\uff0c\u4f60\u53ef\u4ee5\u8003\u8651\u91cd\u65b0\u542f\u7528\u52a8\u6001\u5408\u56fe\u4e86\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5f00\u542f\u52a8\u6001\u56fe\u96c6\u5e38\u89c1\u7684\u53cd\u5bf9\u610f\u89c1\u662f\uff1a"),(0,l.kt)("p",{parentName:"div"},"\u5728\u90e8\u5206\u5c0f\u6e38\u620f\u5e73\u53f0\u91cc\uff0c\u542f\u7528\u52a8\u6001\u56fe\u96c6\u4f1a\u6709\u4fdd\u7559 Image \u5bf9\u8c61\u5bfc\u81f4\u5185\u5b58\u5360\u7528\u5927\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",{parentName:"div"},"\u5efa\u8bae\uff1a"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u6d4b\u8bd5\u662f\u5426\u542f\u7528\u52a8\u6001\u56fe\u96c6\u7684\u5185\u5b58\u5360\u7528\u5dee\u8ddd\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u6ca1\u6709\u4e00\u79cd\u53ef\u80fd\uff0c\u53ea\u662f\u8bf4\u53ef\u80fd\uff0c\u5185\u5b58\u5360\u7528\u5927\u66f4\u591a\u662f\u56e0\u4e3a\u4f60\u7684\u9879\u76ee\u6839\u672c\u6ca1\u505a\u4efb\u4f55\u8d44\u6e90\u91ca\u653e\u5462\uff1f")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u5145\u5206\u5229\u7528\u52a8\u6001\u5408\u56fe"},"\u5145\u5206\u5229\u7528\u52a8\u6001\u5408\u56fe"),(0,l.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\u53ea\u9700\u8981\u4fdd\u6301\u52a8\u6001\u56fe\u96c6\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u5373\u53ef\uff0c\u5982\u679c\u51fa\u73b0\u52a8\u6001\u56fe\u96c6\u5f88\u591a\u7eb9\u7406\u4e0d\u4f1a\u6253\u5165\u6216\u8005\u56fe\u96c6\u5f88\u5feb\u7528\u5b8c\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u53c2\u8003\u4ee5\u4e0b\u5efa\u8bae\u8c03\u6574\u3002"),(0,l.kt)("h3",{id:"\u653e\u5bbd\u80fd\u53c2\u4e0e\u5408\u56fe\u7684\u7eb9\u7406\u5c3a\u5bf8\u9650\u5236"},"\u653e\u5bbd\u80fd\u53c2\u4e0e\u5408\u56fe\u7684\u7eb9\u7406\u5c3a\u5bf8\u9650\u5236"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u52a8\u6001\u56fe\u96c6\u4f1a\u81ea\u52a8\u8fdb\u884c\u591a\u7eb9\u7406\u5408\u6279\uff0c\u4f60\u53ef\u4ee5\u653e\u5fc3\u5730\u4f7f\u7528\u591a\u8fbe 7 \u5f20\u56fe\u96c6\u800c\u4e0d\u7528\u62c5\u5fc3\u4ea4\u53c9\u6e32\u67d3\u5bfc\u81f4\u7684\u6253\u65ad\u6279\u6b21\uff01")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u6839\u636e\u9879\u76ee\u7684\u5177\u4f53\u60c5\u51b5\u6765\u653e\u5bbd\u80fd\u53c2\u4e0e\u5408\u56fe\u7684\u7eb9\u7406\u5c3a\u5bf8\u9650\u5236\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"cc.dynamicAtlasManager.maxFrameSize = 1024;     // \u63a8\u8350 512\u30011024 \u751a\u81f3 2048\n")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u670d\u52a1\u5305\u4f1a\u81ea\u52a8\u5c06\u56fe\u96c6\u7684\u6700\u5927\u6570\u91cf\u8c03\u6574\u81f3\uff08\u8bbe\u5907\u80fd\u540c\u65f6\u91c7\u6837\u7eb9\u7406\u6570 - Char \u7f13\u5b58\u6a21\u5f0f\u81ea\u52a8\u5408\u6279\u56fe\u96c6\u6570\uff09\uff0c\u8fd9\u4e2a\u503c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"7"),"\u3002"))),(0,l.kt)("h3",{id:"\u65e0\u9700\u7ba1\u7406\u52a8\u6001\u56fe\u96c6\u53ea\u9700\u8981\u91ca\u653e\u8d44\u6e90"},"\u65e0\u9700\u7ba1\u7406\u52a8\u6001\u56fe\u96c6\uff0c\u53ea\u9700\u8981\u91ca\u653e\u8d44\u6e90"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u52a8\u6001\u5408\u56fe\u4f1a\u5728\u7eb9\u7406\u88ab\u91ca\u653e\u7684\u540c\u65f6\u91ca\u653e\u5176\u5728\u52a8\u6001\u56fe\u96c6\u4f7f\u7528\u7684\u7a7a\u95f4\u3002")),(0,l.kt)("p",null,"\u5982\u679c\u52a8\u6001\u56fe\u96c6\u7684\u4f7f\u7528\u91cf\u4e00\u76f4\u5728\u589e\u957f\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u505a\u4e86\u8d44\u6e90\u91ca\u653e\uff0c\u56e0\u4e3a\u4f60\u4e0d\u9700\u8981\u5173\u5fc3\u52a8\u6001\u56fe\u96c6\u7684\u4f7f\u7528\u60c5\u51b5\uff0c\u53ea\u9700\u8981\u505a\u597d\u5e94\u6709\u7684\u8d44\u6e90\u91ca\u653e\u5c31\u80fd\u4fdd\u6301\u52a8\u6001\u56fe\u96c6\u7684\u957f\u671f\u6709\u6548\u3002"),(0,l.kt)("h3",{id:"\u66f4\u52a0\u7ec6\u81f4\u5730\u4f18\u5316\u56fe\u96c6\u7684\u4f7f\u7528\u6548\u7387"},"\u66f4\u52a0\u7ec6\u81f4\u5730\u4f18\u5316\u56fe\u96c6\u7684\u4f7f\u7528\u6548\u7387"),(0,l.kt)("p",null,"\u9664\u4e86\u901a\u8fc7\u8c03\u6574\u7eb9\u7406\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"packable")," \u5c5e\u6027\u53ef\u4ee5\u63a7\u5236\u7eb9\u7406\u662f\u5426\u4f1a\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\u4e4b\u5916\uff0c\u670d\u52a1\u5305\u63d0\u4f9b\u4e86",(0,l.kt)("strong",{parentName:"p"},"\u63a7\u5236\u7ec4\u4ef6\u662f\u5426\u9ed8\u8ba4\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\uff0c\u63a7\u5236\u5355\u4e2a\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"),"\u7684\u65b0\u7279\u6027\u3002"),(0,l.kt)("p",null,"\u53ef\u524d\u5f80 ",(0,l.kt)("a",{parentName:"p",href:"/cocos-service-pack/docs/user-guide/dynamic-batcher/dynamic-batcher-intro"},"\u52a8\u6001\u5408\u56fe")," \u7684\u6587\u6863\u4e86\u89e3\u8be6\u60c5\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u8003\u8651\u5c06\u7eb9\u7406\u5c3a\u5bf8\u9650\u5236\u653e\u5bbd\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"2048"),"\uff0c\u8fd9\u542c\u8d77\u6765\u8c8c\u4f3c\u6709\u70b9\u79bb\u8c31\uff0c\u4f46\u53ea\u8981\u89c4\u5212\u5f97\u5f53\u786e\u5b9e\u53ef\u884c\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7981\u6b62\u4f18\u5316\u7a0b\u5ea6\u6709\u9650\u4f46\u5c3a\u5bf8\u5de8\u5927\u7684\u7eb9\u7406\u53c2\u4e0e\u52a8\u6001\u5408\u56fe"),(0,l.kt)("li",{parentName:"ul"},"\u5206\u6a21\u5757\u5b58\u653e\u8d44\u6e90\uff0c\u7981\u6b62\u51b7\u95e8\uff08\u5982\u6d3b\u52a8\u754c\u9762\uff09\u7684\u7eb9\u7406\u53c2\u4e0e\u52a8\u6001\u5408\u56fe\u6216\u5c3d\u65e9\u5730\u91ca\u653e\u6389"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u8d44\u6e90\u592a\u591a\u7684\u9879\u76ee\u4e2d\uff0c\u53ef\u8003\u8651\u63a7\u5236\u754c\u9762\u7684\u6e32\u67d3\u7ec4\u4ef6\u662f\u5426\u53c2\u4e0e\u52a8\u6001\u5408\u56fe")),(0,l.kt)("p",null,"\u5b8c\u6210\u4e0a\u9762\u51e0\u70b9\u8fd9\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u5de5\u4f5c\u91cf\uff0c\u4f46\u80fd\u5c06\u52a8\u6001\u56fe\u96c6\u7528\u5728\u5200\u5203\u4e0a\uff0c\u53d1\u6325\u66f4\u5927\u7684\u4f5c\u7528\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"label-\u4e0d\u518d\u662f\u5408\u6279\u5669\u68a6"},"Label \u4e0d\u518d\u662f\u5408\u6279\u5669\u68a6"),(0,l.kt)("p",null,"\u5728\u4e4b\u524d\u7684\u5f00\u53d1\u4e2d\u6211\u4eec\u53ef\u80fd\u4f1a\u4f7f\u7528\u5b57\u4f53\u56fe\u96c6\u3001\u8c03\u6574\u8282\u70b9\u987a\u5e8f\u3001\u751a\u81f3\u4fee\u6539\u6e32\u67d3\u6d41\u7a0b\u6765\u89e3\u51b3 Label \u7684\u6027\u80fd\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u4e5f\u662f\u56e0\u4e3a\u5f15\u64ce\u63d0\u4f9b\u7684 Bitmap \u548c Char \u4e24\u79cd\u7f13\u5b58\u6a21\u5f0f\u5728\u7a0d\u5927\u4e00\u70b9\u7684\u9879\u76ee\u4e0a\u663e\u5f97\u529b\u6240\u4e0d\u53ca\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Bitmap \u7f13\u5b58\u6a21\u5f0f\uff1a\u5b57\u4f53\u7eb9\u7406\u4f1a\u6253\u5165\u52a8\u6001\u56fe\u96c6\uff0c\u4f46\u52a8\u6001\u56fe\u96c6\u5374\u65e0\u6cd5\u590d\u7528\uff0c\u968f\u7740\u6e38\u620f\u7684\u8fdb\u884c\uff0c\u56fe\u96c6\u7528\u5b8c\u5219\u76f4\u63a5\u5931\u53bb\u4f5c\u7528\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Char \u7f13\u5b58\u6a21\u5f0f\u7684\u7f3a\u70b9\uff1a\u8fd8\u662f\u65e0\u6cd5\u590d\u7528\uff0c\u5e76\u4e14\u53ea\u6709\u4e00\u5f20\u56fe\u96c6\uff0c\u56fe\u96c6\u7528\u5b8c\u5219\u76f4\u63a5\u65e0\u6cd5\u6e32\u67d3\uff0c\u5e94\u8be5\u6ca1\u4eba\u80fd\u63a5\u53d7\u6e38\u620f\u53ef\u80fd\u8dd1\u7740\u8dd1\u7740\u5b57\u5c31\u5168\u90e8\u6d88\u5931\u4e86\u7684\u60c5\u51b5\u3002"))),(0,l.kt)("p",null,"\u4f46\u73b0\u5728\u4f60\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e24\u79cd\u7f13\u5b58\u6a21\u5f0f\u4e86\uff0c\u670d\u52a1\u5305\u91cd\u6784\u4e86 Char \u7f13\u5b58\u6a21\u5f0f\uff0c\u9664\u4e86\u89e3\u51b3\u4e86\u4e0d\u80fd\u590d\u7528\u7684\u95ee\u9898\u4e4b\u5916\uff0c\u8fd8\u652f\u6301\u4e86\u591a\u7eb9\u7406\u6e32\u67d3\uff0c\u6240\u4ee5\u65e2\u80fd\u4e0e\u52a8\u6001\u56fe\u96c6\u5408\u6279\uff0c\u8fd8\u6709\u6700\u591a 8 \u5f20\u5b57\u7b26\u56fe\u96c6\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,l.kt)("h3",{id:"\u8131\u80ce\u6362\u9aa8\u7684-char-\u7f13\u5b58\u6a21\u5f0f"},"\u8131\u80ce\u6362\u9aa8\u7684 Char \u7f13\u5b58\u6a21\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u8be5\u9009\u62e9\u4ec0\u4e48\u7f13\u5b58\u6a21\u5f0f\uff0c\u90a3\u5c31\u9047\u4e8b\u4e0d\u51b3\uff0c\u5148\u9009 Char \u7f13\u5b58\u6a21\u5f0f\u3002")),(0,l.kt)("p",null,"\u867d\u7136 Char \u6a21\u5f0f\u4e5f\u6709\u4e00\u4e9b\u7f3a\u70b9\uff0c\u4f46\u7531\u4e8e\u5b83\u65e2\u80fd\u4e0e\u52a8\u6001\u56fe\u96c6\u4e00\u8d77\u5408\u6279\uff0c\u8fd8\u662f\u662f\u6309\u5b57\u7b26\u8fdb\u884c\u590d\u7528\u7684\uff0c\u6240\u4ee5\u76f8\u6bd4 Bitmap \u6a21\u5f0f\u5b83\u6709\u7740\u66f4\u9ad8\u7684\u6027\u80fd\u4f18\u52bf\u3002"),(0,l.kt)("p",null,"\u4e0d\u7528\u62c5\u5fc3\u5b57\u7b26\u56fe\u96c6\u4f1a\u88ab\u7528\u5b8c\uff0c\u5185\u90e8\u4f1a\u7528\u5f15\u7528\u8ba1\u6570\u81ea\u52a8\u91ca\u653e\u5e9f\u5f03\u5b57\u7b26\u6240\u5360\u7528\u7684\u7a7a\u95f4\u3002"),(0,l.kt)("p",null,"\u4f46 Char \u7f13\u5b58\u6a21\u5f0f\u4e0d\u9002\u5408\u4e0b\u9762\u7684\u573a\u666f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u663e\u793a\u5e26\u6709\u50cf emoji \u7684\u5b57\u7d20\u7c07\u7684\u5b57\u7b26\u4e32\uff0c\u8fd9\u79cd\u5b57\u7b26\u4e32\u73b0\u5728\u4e0d\u80fd\u88ab\u5b8c\u7f8e\u5730\u5206\u5272\u6210\u5355\u4e2a\u5b57\u7b26\uff0c\u6240\u4ee5 Char \u7f13\u5b58\u6a21\u5f0f\u4e5f\u5c31\u4e0d\u80fd\u6b63\u5e38\u663e\u793a\u4e86\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u4e0a\u6761\uff0c\u50cf\u804a\u5929\u6d88\u606f\u3001\u8f93\u5165\u6846\u8fd9\u7c7b\u4e0d\u53ef\u63a7\u7684\u5185\u5bb9\u6587\u672c\u90fd\u4e0d\u5efa\u8bae\u7528 Char \u7f13\u5b58\u6a21\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},"Char \u7f13\u5b58\u6a21\u5f0f\u4e0d\u652f\u6301\u4e00\u4e9b\u5b57\u4f53\u6837\u5f0f\uff0c\u53ef\u4ee5\u5728\u5b98\u65b9\u6587\u6863\u4e2d\u4e86\u89e3\u8be6\u60c5\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5de8\u5927\u7684\u5b57\u4f53\u5927\u5c0f\uff08\u6bd4\u5982\u51e0\u767e\u7684\uff09\u53ef\u80fd\u4f1a\u77ac\u95f4\u5360\u6ee1\u6574\u5f20\u5b57\u7b26\u56fe\u96c6\uff0c\u5b57\u7b26\u56fe\u96c6\u867d\u7136\u6709 8 \u5f20\u4f46\u4e5f\u4e0d\u80fd\u8fd9\u4e48\u970d\u970d\u3002")),(0,l.kt)("h3",{id:"\u515c\u5e95\u7684-bitmap-\u7f13\u5b58\u6a21\u5f0f"},"\u515c\u5e95\u7684 Bitmap \u7f13\u5b58\u6a21\u5f0f"),(0,l.kt)("p",null,"\u5373\u4f7f\u4e0d\u80fd\u9009\u62e9 Char \u7f13\u5b58\u6a21\u5f0f\uff0cBitmap \u7f13\u5b58\u6a21\u5f0f\u4e5f\u80fd\u6210\u4e3a\u6279\u6b21\u7684\u6700\u540e\u4e00\u9053\u9632\u7ebf\u3002"),(0,l.kt)("p",null,"\u5728\u89e3\u51b3\u4e86\u52a8\u6001\u56fe\u96c6\u7684\u590d\u7528\u95ee\u9898\u540e\uff0cBitmap \u7f13\u5b58\u6a21\u5f0f\u7684\u7eb9\u7406\u4e5f\u4f1a\u4f7f\u7528\u5f15\u7528\u8ba1\u6570\u81ea\u52a8\u91ca\u653e\uff0c\u5e76\u4e14\u4e0d\u4f1a\u6709 Char \u7f13\u5b58\u6a21\u5f0f\u65e0\u6cd5\u663e\u793a\u5b57\u7d20\u7c07\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u4f46\u5f53\u7136\uff0cBitmap \u7f13\u5b58\u6a21\u5f0f\u4e5f\u4e0d\u662f\u4e07\u80fd\u7684\uff0c\u5982\u679c\u9047\u5230\u4e86\u4e0b\u9762\u8fd9\u79cd\u60c5\u51b5\uff0c\u5c31\u9700\u8981\u8003\u8651\u4f7f\u7528\u8c03\u6574\u8282\u70b9\u987a\u5e8f\u8fd9\u6837\u7684\u8001\u529e\u6cd5\u6765\u89e3\u51b3\u4e86\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5de8\u5927\u7684\u5b57\u4f53\u5927\u5c0f\u4e5f\u4f1a\u77ac\u95f4\u5360\u6ee1\u6574\u5f20\u52a8\u6001\u56fe\u96c6\uff0c\u52a8\u6001\u56fe\u96c6\u4e5f\u4e0d\u80fd\u8fd9\u4e48\u970d\u970d\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u5927\u91cf\u7684 Label \u9700\u9891\u7e41\u6539\u53d8\u6587\u672c\u7684\u60c5\u51b5\u4e0b\uff0c\u8bf7\u4f7f\u7528\u6027\u80fd\u5206\u6790\u5de5\u5177\u68c0\u67e5\u52a8\u6001\u56fe\u96c6\u7684\u6027\u80fd\u6d88\u8017\uff0c\u907f\u514d\u5408\u6279\u7684\u5f0a\u5927\u4e8e\u5229\u3002")),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u65e0\u8bba\u4f7f\u7528\u54ea\u79cd\u7f13\u5b58\u6a21\u5f0f\uff0c\u5728\u505a\u7f29\u653e\u52a8\u753b\u65f6\u4e0d\u8981\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"p"},"fontSize")," \u5c5e\u6027\u8fdb\u884c\u7f13\u52a8\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u6bcf\u5e27\u90fd\u9700\u8981\u91cd\u65b0\u751f\u6210\u6587\u5b57\u7eb9\u7406\uff0c\u9020\u6210\u5de8\u5927\u7684\u6027\u80fd\u8d1f\u62c5\uff0c\u53ef\u4ee5\u4f7f\u7528\u8282\u70b9\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"scale")," \u6765\u4ee3\u66ff\u3002"))),(0,l.kt)("h3",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Char \u7f13\u5b58\u6a21\u5f0f\u6240\u4f7f\u7528\u7684\u5b57\u7b26\u56fe\u96c6\u4e0e\u52a8\u6001\u56fe\u96c6\u4e0d\u662f\u4e00\u4e2a\u4e1c\u897f"))),(0,l.kt)("p",null,"\u6709\u591a\u79cd\u56e0\u7d20\u5bfc\u81f4\u6ca1\u6709\u8ba9 Char \u7f13\u5b58\u6a21\u5f0f\u76f4\u63a5\u4f7f\u7528\u52a8\u6001\u56fe\u96c6\u6765\u5b9e\u73b0\uff0c\u8fd9\u4e2a\u539f\u56e0\u5728 Char \u7f13\u5b58\u6a21\u5f0f\u7684\u539f\u7406\u6587\u6863\u4e2d\u6709\u8be6\u7ec6\u89e3\u91ca\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Char \u7f13\u5b58\u6a21\u5f0f\u4f9d\u7136\u4e0d\u80fd\u5728\u56fe\u96c6\u7528\u5b8c\u7684\u60c5\u51b5\u4e0b\u6b63\u5e38\u6e32\u67d3"))),(0,l.kt)("p",null,"\u539f\u56e0\u6709\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6211\u4eec\u8ba4\u4e3a 8 \u5f20\u6570\u91cf\u5df2\u7ecf\u591f\u591a\u4e86\uff0c8 \u5f20\u90fd\u7528\u5b8c\u7684\u60c5\u51b5\u5927\u90e8\u5206\u662f\u6ca1\u6709\u5408\u7406\u642d\u914d\u4f7f\u7528\u4e24\u79cd\u7f13\u5b58\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"8 \u5f20\u662f\u591a\u7eb9\u7406\u6e32\u67d3\u7684\u4e0a\u9650\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u8d85\u8fc7 8 \u5f20\uff0c1 \u4e2a Label \u6709 100 \u4e2a\u5b57\uff0c\u5c31\u53ef\u80fd\u6709 100 \u4e2a Draw Call")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u65b0\u5408\u6279\u6307\u5357\u7684\u5168\u90e8\u5185\u5bb9\u4e86\uff0c\u7a0d\u5fae\u603b\u7ed3\u4e00\u4e0b\u6e32\u67d3\u6279\u6b21\u5408\u5e76\u7684\u51e0\u4e2a\u8981\u70b9\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u542f\u7528\u52a8\u6001\u5408\u56fe\uff0c\u53ea\u9700\u8981\u5408\u7406\u5730\u91ca\u653e\u8d44\u6e90\u5373\u53ef\u4fdd\u6301\u52a8\u6001\u5408\u56fe\u7684\u4e00\u76f4\u6709\u6548"),(0,l.kt)("li",{parentName:"ul"},"Label \u4f18\u5148\u4f7f\u7528 Char \u7f13\u5b58\u6a21\u5f0f\uff0c\u4e0d\u9002\u5408\u5219\u4f7f\u7528 Bitmap \u7f13\u5b58\u6a21\u5f0f"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4f18\u5148\u8003\u8651\u4fee\u6539\u8282\u70b9\u987a\u5e8f\u8fd9\u79cd\u9700\u8981\u7ef4\u62a4\u6210\u672c\u7684\u4f18\u5316\u65b9\u5f0f")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u6279\u6b21\u5408\u5e76\u8fd8\u6709\u7740\u66f4\u9ad8\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u9605\u8bfb ",(0,l.kt)("a",{parentName:"p",href:"/cocos-service-pack/docs/start-guide/advance-batcher-guide"},"\u8fdb\u9636\u5408\u6279\u6307\u5357"),"\u3002"))}d.isMDXComponent=!0}}]);