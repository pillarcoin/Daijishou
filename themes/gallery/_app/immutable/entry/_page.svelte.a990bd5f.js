import{S as K,i as V,s as O,k as g,a as G,q as N,l as b,m as y,c as H,r as j,h,J as F,n as u,b as E,G as p,u as B,H as D,e as J,v as Y,d as R,f as Z,g as M,o as ce,K as fe,y as x,z as ee,A as te,B as le,L as ue,M as me}from"../chunks/index.5d69f454.js";function _e(n){let e,a,t,l,i,r,f,s=n[0].platformWallpapersPackName+"",m,o,_,P,W=n[0].platformWallpapersPackDescription+"",L,C,T,U,q=n[0].platformWallpapersPackAuthors+"",S;return{c(){e=g("article"),a=g("h2"),t=g("a"),l=g("img"),f=G(),m=N(s),_=G(),P=g("p"),L=N(W),C=G(),T=g("p"),U=N("by "),S=N(q),this.h()},l(k){e=b(k,"ARTICLE",{class:!0});var d=y(e);a=b(d,"H2",{class:!0});var A=y(a);t=b(A,"A",{href:!0,class:!0});var I=y(t);l=b(I,"IMG",{src:!0,alt:!0,class:!0}),f=H(I),m=j(I,s),I.forEach(h),A.forEach(h),_=H(d),P=b(d,"P",{});var w=y(P);L=j(w,W),w.forEach(h),C=H(d),T=b(d,"P",{class:!0});var c=y(T);U=j(c,"by "),S=j(c,q),c.forEach(h),d.forEach(h),this.h()},h(){F(l.src,i=""+(window.baseUri+n[0].platformWallpapersPackPreviewThumbnailPath))||u(l,"src",i),u(l,"alt",r=n[0].platformWallpapersPackName),u(l,"class","svelte-1u0s6yv"),u(t,"href",o="#/theme/"+n[0].platformWallpapersPackRootPath),u(t,"class","svelte-1u0s6yv"),u(a,"class","svelte-1u0s6yv"),u(T,"class","meta"),u(e,"class","svelte-1u0s6yv")},m(k,d){E(k,e,d),p(e,a),p(a,t),p(t,l),p(t,f),p(t,m),p(e,_),p(e,P),p(P,L),p(e,C),p(e,T),p(T,U),p(T,S)},p(k,[d]){d&1&&!F(l.src,i=""+(window.baseUri+k[0].platformWallpapersPackPreviewThumbnailPath))&&u(l,"src",i),d&1&&r!==(r=k[0].platformWallpapersPackName)&&u(l,"alt",r),d&1&&s!==(s=k[0].platformWallpapersPackName+"")&&B(m,s),d&1&&o!==(o="#/theme/"+k[0].platformWallpapersPackRootPath)&&u(t,"href",o),d&1&&W!==(W=k[0].platformWallpapersPackDescription+"")&&B(L,W),d&1&&q!==(q=k[0].platformWallpapersPackAuthors+"")&&B(S,q)},i:D,o:D,d(k){k&&h(e)}}}function he(n,e,a){let{item:t}=e;return n.$$set=l=>{"item"in l&&a(0,t=l.item)},[t]}class pe extends K{constructor(e){super(),V(this,e,he,_e,O,{item:0})}}function re(n,e,a){const t=n.slice();return t[1]=e[a],t}function ve(n){let e,a;return{c(){e=g("p"),a=N("loading..."),this.h()},l(t){e=b(t,"P",{class:!0});var l=y(e);a=j(l,"loading..."),l.forEach(h),this.h()},h(){u(e,"class","loading svelte-e2aq2r")},m(t,l){E(t,e,l),p(e,a)},p:D,i:D,o:D,d(t){t&&h(e)}}}function de(n){let e,a,t=n[0],l=[];for(let r=0;r<t.length;r+=1)l[r]=ne(re(n,t,r));const i=r=>R(l[r],1,1,()=>{l[r]=null});return{c(){for(let r=0;r<l.length;r+=1)l[r].c();e=J()},l(r){for(let f=0;f<l.length;f+=1)l[f].l(r);e=J()},m(r,f){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(r,f);E(r,e,f),a=!0},p(r,f){if(f&1){t=r[0];let s;for(s=0;s<t.length;s+=1){const m=re(r,t,s);l[s]?(l[s].p(m,f),M(l[s],1)):(l[s]=ne(m),l[s].c(),M(l[s],1),l[s].m(e.parentNode,e))}for(Y(),s=t.length;s<l.length;s+=1)i(s);Z()}},i(r){if(!a){for(let f=0;f<t.length;f+=1)M(l[f]);a=!0}},o(r){l=l.filter(Boolean);for(let f=0;f<l.length;f+=1)R(l[f]);a=!1},d(r){fe(l,r),r&&h(e)}}}function ne(n){let e,a;return e=new pe({props:{item:n[1]}}),{c(){x(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,l){te(e,t,l),a=!0},p(t,l){const i={};l&1&&(i.item=t[1]),e.$set(i)},i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){le(e,t)}}}function we(n){let e,a,t,l;const i=[de,ve],r=[];function f(s,m){return s[0]?0:1}return e=f(n),a=r[e]=i[e](n),{c(){a.c(),t=J()},l(s){a.l(s),t=J()},m(s,m){r[e].m(s,m),E(s,t,m),l=!0},p(s,[m]){let o=e;e=f(s),e===o?r[e].p(s,m):(Y(),R(r[o],1,1,()=>{r[o]=null}),Z(),a=r[e],a?a.p(s,m):(a=r[e]=i[e](s),a.c()),M(a,1),a.m(t.parentNode,t))},i(s){l||(M(a),l=!0)},o(s){R(a),l=!1},d(s){r[e].d(s),s&&h(t)}}}function ge(n,e,a){let t;return ce(async()=>{fetch("../platform_wallpapers_packs/").then(l=>l.json()).then(l=>{a(0,t=l.platformWallpapersPackList),window.baseUri=l.baseUri,window.scrollTo(0,0)})}),[t]}class be extends K{constructor(e){super(),V(this,e,ge,we,O,{})}}function ie(n,e,a){const t=n.slice();return t[2]=e[a],t}function oe(n){let e,a=n[2].matchPlatformShortname+"",t,l,i,r,f,s,m;return{c(){e=g("h3"),t=N(a),l=G(),i=g("a"),r=g("img"),this.h()},l(o){e=b(o,"H3",{});var _=y(e);t=j(_,a),_.forEach(h),l=H(o),i=b(o,"A",{href:!0,target:!0,class:!0});var P=y(i);r=b(P,"IMG",{src:!0,alt:!0,class:!0}),P.forEach(h),this.h()},h(){F(r.src,f=window.baseUri+window.id+"/"+n[2].filename)||u(r,"src",f),u(r,"alt",s=n[2].matchPlatformShortname),u(r,"class","svelte-1lju1ys"),u(i,"href",m=window.baseUri+window.id+"/"+n[2].filename),u(i,"target","_blank"),u(i,"class","svelte-1lju1ys")},m(o,_){E(o,e,_),p(e,t),E(o,l,_),E(o,i,_),p(i,r)},p(o,_){_&1&&a!==(a=o[2].matchPlatformShortname+"")&&B(t,a),_&1&&!F(r.src,f=window.baseUri+window.id+"/"+o[2].filename)&&u(r,"src",f),_&1&&s!==(s=o[2].matchPlatformShortname)&&u(r,"alt",s),_&1&&m!==(m=window.baseUri+window.id+"/"+o[2].filename)&&u(i,"href",m)},d(o){o&&h(e),o&&h(l),o&&h(i)}}}function ke(n){let e,a,t,l,i,r,f,s,m,o=n[0].name+"",_,P,W,L=n[0].description+"",C,T,U,q,S=n[0].authors+"",k,d,A,I=n[0].wallpaperList,w=[];for(let c=0;c<I.length;c+=1)w[c]=oe(ie(n,I,c));return{c(){e=g("a"),a=N("« back"),t=G(),l=g("article"),i=g("img"),s=G(),m=g("h1"),_=N(o),P=G(),W=g("p"),C=N(L),T=G(),U=g("p"),q=N("by "),k=N(S),d=G(),A=g("div");for(let c=0;c<w.length;c+=1)w[c].c();this.h()},l(c){e=b(c,"A",{href:!0,class:!0});var $=y(e);a=j($,"« back"),$.forEach(h),t=H(c),l=b(c,"ARTICLE",{class:!0});var v=y(l);i=b(v,"IMG",{class:!0,src:!0,alt:!0}),s=H(v),m=b(v,"H1",{class:!0});var z=y(m);_=j(z,o),z.forEach(h),P=H(v),W=b(v,"P",{});var ae=y(W);C=j(ae,L),ae.forEach(h),T=H(v),U=b(v,"P",{class:!0});var Q=y(U);q=j(Q,"by "),k=j(Q,S),Q.forEach(h),v.forEach(h),d=H(c),A=b(c,"DIV",{class:!0});var se=y(A);for(let X=0;X<w.length;X+=1)w[X].l(se);se.forEach(h),this.h()},h(){u(e,"href",n[1]),u(e,"class","svelte-1lju1ys"),u(i,"class","thumb svelte-1lju1ys"),F(i.src,r=window.baseUri+window.id+"/"+n[0].previewThumbnailFilename)||u(i,"src",r),u(i,"alt",f=n[0].platformWallpapersPackName),u(m,"class","svelte-1lju1ys"),u(U,"class","meta"),u(l,"class","svelte-1lju1ys"),u(A,"class","art")},m(c,$){E(c,e,$),p(e,a),E(c,t,$),E(c,l,$),p(l,i),p(l,s),p(l,m),p(m,_),p(l,P),p(l,W),p(W,C),p(l,T),p(l,U),p(U,q),p(U,k),E(c,d,$),E(c,A,$);for(let v=0;v<w.length;v+=1)w[v]&&w[v].m(A,null)},p(c,[$]){if($&2&&u(e,"href",c[1]),$&1&&!F(i.src,r=window.baseUri+window.id+"/"+c[0].previewThumbnailFilename)&&u(i,"src",r),$&1&&f!==(f=c[0].platformWallpapersPackName)&&u(i,"alt",f),$&1&&o!==(o=c[0].name+"")&&B(_,o),$&1&&L!==(L=c[0].description+"")&&B(C,L),$&1&&S!==(S=c[0].authors+"")&&B(k,S),$&1){I=c[0].wallpaperList;let v;for(v=0;v<I.length;v+=1){const z=ie(c,I,v);w[v]?w[v].p(z,$):(w[v]=oe(z),w[v].c(),w[v].m(A,null))}for(;v<w.length;v+=1)w[v].d(1);w.length=I.length}},i:D,o:D,d(c){c&&h(e),c&&h(t),c&&h(l),c&&h(d),c&&h(A),fe(w,c)}}}function $e(n,e,a){let{item:t}=e,{returnTo:l}=e;return n.$$set=i=>{"item"in i&&a(0,t=i.item),"returnTo"in i&&a(1,l=i.returnTo)},[t,l]}class Pe extends K{constructor(e){super(),V(this,e,$e,ke,O,{item:0,returnTo:1})}}const{window:ye}=me;function Ee(n){let e,a;return e=new be({}),{c(){x(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,l){te(e,t,l),a=!0},p:D,i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){le(e,t)}}}function We(n){let e,a;return e=new Pe({props:{item:n[0],returnTo:"#/top/"}}),{c(){x(e.$$.fragment)},l(t){ee(e.$$.fragment,t)},m(t,l){te(e,t,l),a=!0},p(t,l){const i={};l&1&&(i.item=t[0]),e.$set(i)},i(t){a||(M(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){le(e,t)}}}function Te(n){let e,a,t,l,i,r;const f=[We,Ee],s=[];function m(o,_){return o[0]?0:1}return a=m(n),t=s[a]=f[a](n),{c(){e=g("main"),t.c(),this.h()},l(o){e=b(o,"MAIN",{class:!0});var _=y(e);t.l(_),_.forEach(h),this.h()},h(){u(e,"class","svelte-gxd8oy")},m(o,_){E(o,e,_),s[a].m(e,null),l=!0,i||(r=ue(ye,"hashchange",n[1]),i=!0)},p(o,[_]){let P=a;a=m(o),a===P?s[a].p(o,_):(Y(),R(s[P],1,1,()=>{s[P]=null}),Z(),t=s[a],t?t.p(o,_):(t=s[a]=f[a](o),t.c()),M(t,1),t.m(e,null))},i(o){l||(M(t),l=!0)},o(o){R(t),l=!1},d(o){o&&h(e),s[a].d(),i=!1,r()}}}function Ue(n,e,a){let t;async function l(){const i=window.location.hash.slice(1);i.startsWith("/theme")?(window.id=i.slice(6),a(0,t=await fetch(`../platform_wallpapers_packs/${window.id}`).then(r=>r.json())),window.scrollTo(0,0)):i.startsWith("/")&&(a(0,t=null),window.id=null)}return ce(l),[t,l]}class Ie extends K{constructor(e){super(),V(this,e,Ue,Te,O,{})}}export{Ie as default};
