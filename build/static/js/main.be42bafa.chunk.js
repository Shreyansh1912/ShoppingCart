(this["webpackJsonpredux-example"]=this["webpackJsonpredux-example"]||[]).push([[0],{60:function(e,t,a){e.exports=a.p+"static/media/speaker.4a0dbe85.jpg"},63:function(e,t,a){e.exports={products:"Products_products__3ah7Q"}},65:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/smartphone.67a48767.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/book.028978f4.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/speaker.4a0dbe85.jpg"},80:function(e,t,a){e.exports=a(99)},85:function(e,t,a){},86:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){e.exports=a.p+"static/media/smartphone.67a48767.jpg"},96:function(e,t,a){e.exports=a.p+"static/media/book.028978f4.jpg"},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=(a(85),a(27)),l=a(11),s=(a(86),a(14)),m=a(20),u=a(135),d=a(138),p=a(140),E=a(141),h=a(147),v=a(62),f=a.n(v),y=(a(91),Object(u.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},tool:{position:"relative"}}})));var g=Object(s.b)((function(e){return{cart:e.cart}}))((function(e){var t=e.cart,a=void 0===t?[]:t,c=y(),i=Object(n.useState)(0),l=Object(m.a)(i,2),s=l[0],u=l[1];return Object(n.useEffect)((function(){var e=0;a.forEach((function(t){e+=t.qty})),u(e)}),[a,s]),r.a.createElement("div",{className:c.root},r.a.createElement(d.a,{style:{backgroundColor:"#badc58"},position:"static"},r.a.createElement(p.a,{className:c.tool},r.a.createElement(E.a,{variant:"h6",className:c.title},r.a.createElement(o.b,{to:"/",style:{color:"#2f3542"}},"Redux Shopping")),r.a.createElement(o.b,{to:"/cart",style:{color:"#2f3542"}},r.a.createElement(h.a,{color:"inherit"},"Cart",r.a.createElement(f.a,{style:{marginLeft:"12%",marginRight:"1%"}}),r.a.createElement("span",{className:"cartNumber",style:{}},s))))))})),b=a(63),j=a.n(b),O=a(142),N=a(145),C=a(144),w=a(143),T=(a(94),Object(u.a)({root:{maxWidth:345,marginBottom:"5%"},media:{height:"40vh"}}));var x=Object(s.b)(null,(function(e){return console.log(e),{loadCurrentItem:function(t){return e({type:"LOAD_CURRENT_ITEM",payload:{item:t}})},addToCart:function(t){return e({type:"ADD_TO_CART",payload:{id:t}})}}}))((function(e){var t=e.product,a=e.addToCart,n=e.loadCurrentItem,c=Object(l.g)(),i=T();return r.a.createElement(O.a,{className:i.root},r.a.createElement(w.a,{className:i.media,image:t.image,title:t.title}),r.a.createElement(C.a,{className:i.cardstyle},r.a.createElement(E.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p",style:{height:"26vh"}},t.description),r.a.createElement("br",null),r.a.createElement(E.a,{variant:"h5",align:"center",color:"textPrimary"},t.price,"\xa0\u20b9")),r.a.createElement(N.a,null,r.a.createElement(h.a,{size:"small",color:"primary",onClick:function(){n(t),c.push("/product/".concat(t.id))}},"View Item"),r.a.createElement(h.a,{size:"small",color:"primary",onClick:function(){return a(t.id)}},"Add to Cart")))})),k=(a(95),a(96),a(60),Object(s.b)((function(e){return{products:e.products}}))((function(e){var t=e.products;return r.a.createElement("div",{className:j.a.products},t.map((function(e){return r.a.createElement(x,{key:e.id,product:e})})))}))),A=(a(97),a(98),a(64)),S=a.n(A);var _=Object(s.b)(null,(function(e){return{removeFromCart:function(t){return e({type:"REMOVE_FROM_CART",payload:{id:t}})},adjustQty:function(t,a){return e({type:"UPDATE_QTY",payload:{id:t,qty:a}})}}}))((function(e){var t=e.item,a=e.adjustQty,c=e.removeFromCart,i=Object(n.useState)(t.qty),o=Object(m.a)(i,2),l=o[0],s=o[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement("div",{className:"itemContainer"},r.a.createElement("div",{className:"imgc"},r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("div",{className:"desc"},r.a.createElement("div",{className:"itemName"},r.a.createElement("h3",null,t.title)),r.a.createElement("div",{className:"itemQuantity"},r.a.createElement("label",{htmlFor:"qty"},"Qty"),r.a.createElement("input",{min:"1",type:"number",id:"qty",name:"qty",value:l,onChange:function(e){e.target.value>0&&(s(e.target.value),a(t.id,e.target.value))}})),r.a.createElement("div",{className:"itemdesc"},r.a.createElement("p",{style:{color:"#222f3e",fontFamily:"cursive",textAlign:"justify"}},t.description)),r.a.createElement("div",{className:"pc"},r.a.createElement(h.a,{variant:"contained",color:"secondary",onClick:function(){return c(t.id)}},r.a.createElement(S.a,null),"Delete"),r.a.createElement("h3",{style:{marginTop:"1%",marginLeft:"4%"}},"\u20b9 ",t.price)))))})),R=a(146),B={SAVE10:{name:"SAVE10",discount:10},SAVE20:{name:"SAVE20",discount:20},ABCD:{name:"ABCD",discount:15}};var D=Object(s.b)((function(e){return{cart:e.cart}}))((function(e){var t=e.cart,a=void 0===t?[]:t,c=Object(n.useState)(0),i=Object(m.a)(c,2),o=i[0],l=i[1],s=Object(n.useState)(0),u=Object(m.a)(s,2),d=u[0],p=u[1],E=Object(n.useState)(""),v=Object(m.a)(E,2),f=v[0],y=v[1],g=Object(n.useState)(!0),b=Object(m.a)(g,2),j=b[0],O=b[1],N=Object(n.useState)(null),C=Object(m.a)(N,2),w=C[0],T=C[1],x=Object(n.useState)(null),k=Object(m.a)(x,2),A=k[0],S=k[1];return Object(n.useEffect)((function(){var e=0,t=0;a.forEach((function(a){e+=a.qty,t+=a.qty*a.price})),p(e),l(t)}),[a]),r.a.createElement(r.a.Fragment,null,0==a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Your cart is empty")):r.a.createElement("div",{className:"container-div"},r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"header"},r.a.createElement("h3",{style:{paddingTop:"2%",paddingLeft:"2%",marginBottom:"3%"}},"Shopping Cart")),r.a.createElement("div",{className:"added"},a.map((function(e){return r.a.createElement(_,{key:e.id,item:e})})))),r.a.createElement("div",{className:"details-c"},r.a.createElement("div",{className:"details"},r.a.createElement("h4",{style:{textAlign:"center",paddingTop:"5%"}},"Cart Summary"),r.a.createElement("div",{style:{textAlign:"center",marginBottom:"5%",marginTop:"5%"}},r.a.createElement("span",null,"Subtotal (",d," items) : "),r.a.createElement("span",{style:{fontWeight:"bold"}},"\u20b9 ",o)),r.a.createElement(r.a.Fragment,null,1==j?r.a.createElement("div",{className:"coupon"},r.a.createElement(R.a,{value:f,style:{marginRight:"2%"},id:"standard-basic",label:"Enter code",onChange:function(e){y(e.target.value)}}),r.a.createElement(h.a,{variant:"outlined",size:"small",onClick:function(){console.log(f);var e=f.trim().toUpperCase(),t=B[e];if(void 0==t)console.log("Coupon is not applicable"),T(!1),O(!1);else{T(!0),O(!1),console.log(t.discount);var a=o/100*t.discount,n=Math.trunc(o-a);S(o),l(n)}}},"Apply")):r.a.createElement(r.a.Fragment,null,1==w?r.a.createElement("div",{className:"smsg"},r.a.createElement("h4",null,"Code applied !"),r.a.createElement("div",{className:"revert"},r.a.createElement(h.a,{onClick:function(){l(A),S(null),T(null),O(!0),y("")},size:"small",variant:"contained",color:"secondary"},"Revert"))):r.a.createElement("div",{className:"fmsg"},r.a.createElement("h4",null,"Not valid !"),r.a.createElement("div",{className:"revert"},r.a.createElement(h.a,{onClick:function(){T(null),O(!0),y("")},size:"small",variant:"contained",color:"secondary"},"Try Again"))))),r.a.createElement("div",{className:"checkout"},r.a.createElement(h.a,{variant:"contained",color:"primary"},"Proceed To Buy"))))))})),q=a(65),I=a.n(q),F=a(66),M=a.n(F),P=Object(s.b)((function(e){return{current:e.currentItem}}),(function(e){return{addToCart:function(t){return e({type:"ADD_TO_CART",payload:{id:t}})}}}))((function(e){var t=e.current,a=e.addToCart;return r.a.createElement("div",{className:"s-container"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"img",src:t.image,alt:t.title})),r.a.createElement("div",{className:"detailss"},r.a.createElement("h1",{className:"p-name"},t.title),r.a.createElement("p",{style:{color:"#d63031",marginBottom:"5%"}},r.a.createElement("span",{style:{color:"grey"}},"M.R.P."),"\xa0 \u20b9 ",t.price),r.a.createElement("h4",{style:{color:"#2d3436",marginBottom:"4%"}},"Description"),r.a.createElement("p",{className:"description"},t.description),r.a.createElement(h.a,{style:{backgroundColor:"#e67e22",marginTop:"5%"},onClick:function(){return a(t.id)},className:I.a.details__addBtn},r.a.createElement(M.a,null),"\xa0 Add To Cart")))}));var Q=Object(s.b)((function(e){return{current:e.currentItem}}))((function(e){var t=e.current;return r.a.createElement(o.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(g,null),r.a.createElement(l.d,null,r.a.createElement(l.b,{exact:!0,path:"/",component:k}),r.a.createElement(l.b,{exact:!0,path:"/cart",component:D}),t?r.a.createElement(l.b,{exact:!0,path:"/product/:id",component:P}):r.a.createElement(l.a,{to:"/"}))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(37),W=a(71),L=a(15),z=a(67),U=a.n(z),G=a(68),Y=a.n(G),J=a(69),H=a.n(J),X={products:[{id:1,title:"Smartphone",description:"This smartphone is not just a sight to behold but also comes equipped with innovative features\n             that will keep you productive and entertained. Its Helio G85 Gaming Processor ensures that you stay\n              on top of the leaderboard while gaming. Its 16.5 cm (6.5) Mini-drop Fullscreen ensures an immersive\n               experience while gaming, streaming content, and more. ",price:2e4,image:U.a},{id:2,title:"Bluetooth Speaker",description:"With the Bluetooth speaker, you can enjoy motivational, dance, or instrumental music whenever you want. \n            It ensures an immersive listening experience with its 52 mm full-range driver so that you can stay entertained\n             wherever you are. With an IPX7 rating, it ensures water resistance so that you can listen to music by\n              the poolside without a worry in the world.",price:999,image:H.a},{id:3,title:"Book",description:"The land of Meluha is an empire created by Lord Rama, and it is ruled by the Suryavanshis. This empire \n            is powerful and proud, however, the Saraswati river that is their source of water is slowing drying up. \n            On top of that, the empire is at war with the Chandravanshis who have allied with The Nagas, a group of \n            sinister and deformed human beings who have extraordinary martial art skills.",price:250,image:Y.a}],currentItem:null,cart:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=e.products.find((function(e){return e.id==t.payload.id})),n=e.cart.find((function(e){return e.id==t.payload.id}));return Object(L.a)(Object(L.a)({},e),{},{cart:n?e.cart.map((function(e){return e.id==t.payload.id?Object(L.a)(Object(L.a)({},e),{},{qty:e.qty+1}):e})):[].concat(Object(W.a)(e.cart),[Object(L.a)(Object(L.a)({},a),{},{qty:1})])});case"LOAD_CURRENT_ITEM":return Object(L.a)(Object(L.a)({},e),{},{currentItem:t.payload.item});case"UPDATE_QTY":return Object(L.a)(Object(L.a)({},e),{},{cart:e.cart.map((function(e){return e.id==t.payload.id?Object(L.a)(Object(L.a)({},e),{},{qty:t.payload.qty}):e}))});case"REMOVE_FROM_CART":return Object(L.a)(Object(L.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!=t.payload.id}))});default:return e}},K=a(70),Z=Object(V.createStore)($,Object(K.composeWithDevTools)());i.a.render(r.a.createElement(s.a,{store:Z},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[80,1,2]]]);
//# sourceMappingURL=main.be42bafa.chunk.js.map