(()=>{"use strict";var e={9573:(e,t,n)=>{n.r(t),n.d(t,{default:()=>te});var r=n(5004),a=n(6792),o=n(1054),i=n(3287),s=n(6434),l=n(5288),c=n(2629),d=n(4818),u=n(1366),f=function(e){var t=e.title,n=e.onPress;return(0,c.jsx)(l.default,{style:g.button,onPress:n,children:(0,c.jsxs)(o.default,{style:g.buttonText,children:[" ",t," "]})})};var g=a.default.create({container:{flex:1,alignItems:"center",justifyContent:"flex-start",paddingTop:"5%"},headerText:{color:"white",fontSize:67,fontFamily:"Times New Roman",letterSpacing:3,textAlign:"center"},chefText:{color:"white",fontSize:37,fontFamily:"Avenir",letterSpacing:7,textAlign:"center",paddingTop:10,paddingBottom:20},subText:{color:"#d4081d",fontSize:30,fontFamily:"Times New Roman",textAlign:"center",letterSpacing:1,width:300,paddingBottom:30},logo:{width:150,height:150,marginTop:50,marginBottom:50,borderRadius:150,paddingBottom:"5%"},button:{flexDirection:"row",alignItems:"center",marginVertical:40,height:40,marginBottom:10,borderRadius:40,backgroundColor:"rgba(255 255 255/ 0.5)"},buttonText:{textTransform:"uppercase",color:"#f04713",fontFamily:"Avenir",fontWeight:"bold",letterSpacing:3,fontSize:20,textDecorationLine:"none",marginLeft:10}});const h=function(e){var t=e.navigation;return(0,c.jsxs)(s.default,{source:u,style:g.container,children:[(0,c.jsx)(i.default,{source:d,style:g.logo}),(0,c.jsx)(o.default,{style:g.headerText,children:"Welcome"}),(0,c.jsx)(o.default,{style:g.chefText,children:"CHEF"}),(0,c.jsx)(o.default,{style:g.subText,children:"Let's assess your culinary skills!"}),(0,c.jsx)(f,{title:"Start Assessment",onPress:function(){return t.navigate("StartAssesment")}})]})};var p=n(885),x=n(7593),m=n(5326),b=n(9385),v=n(3624),y=n(4504),j=[{title:"What is the term for rapidly boiling and then plunging vegetables into ice water to retain their color and texture?",data:["Searing","Roasting","Blanching","Grilling"],index:0},{title:"What is the ideal temperature for cooking chicken to ensure its safe to eat?",data:["145\xb0F (63\xb0C)","160\xb0F (71\xb0C)","175\xb0F (79\xb0C)","165\xb0F (74\xb0C)"],index:1},{title:"Which ingredient is commonly used to thicken soups and stews?",data:["Flour","Sugar","Vinegar","Soy sauce"],index:2},{title:"What is the technique of cutting food into long, thin strips called?",data:["Mince","Dice","Julienne","Grate"],index:3},{title:'What is the technique of "deglazing" in cooking?',data:["Reducing liquid by boiling","Adding alcohol to deglaze the pan","Searing meat quickly","Grating cheese"],index:4},{title:'How is "parboiling" different from boiling?',data:["Parboiling uses less water","Parboiling uses higher heat","Parboiling is a shorter cooking time","Parboiling involves adding oil"],index:5},{title:"What is the process of cooking food in a vacuum-sealed bag in a water bath at a precise temperature called?",data:["Braising","Grilling","Poaching","Sous-vide"],index:6},{title:'What is the technique of "emulsion" in cooking?',data:["Mixing two immiscible liquids","Reducing a sauce","Grilling over an open flame","Searing meat quickly"],index:7},{title:"What is the process of cooking food in a water bath at low temperatures for an extended period called?",data:["Roasting","Braising","Poaching","Steaming"],index:8},{title:'In baking, what is the purpose of using a "sponge" or "starter" in sourdough bread recipes?',data:["To add sweetness","To improve texture","To reduce rising time","To develop flavor"],index:9},{title:'What is the primary ingredient in a classic "B\xe9chamel" sauce?',data:["Cream","Tomato","Flour and butter","Wine"],index:10},{title:"What type of knife cut produces very small cubes and is often used for vegetables in a mirepoix?",data:["Brunoise","Julienne","Chiffonade","Tourne"],index:11},{title:"What is the primary difference between a b\xe9chamel sauce and a velout\xe9 sauce?",data:["The type of milk used","The type of stock used","The addition of cream","The cooking time"],index:12},{title:'What is the purpose of a "mirepoix" in cooking?',data:["To add a sweet flavor","To thicken sauces","To provide a base flavor","To garnish dishes"],index:13},{title:"What type of knife is often used for making intricate cuts and decorative garnishes in fruits and vegetables?",data:["Chef's knife","Paring knife","Nakiri knife","Utility knife"],index:14}],k=function(e){var t=e.title,n=e.onPress;return(0,c.jsx)(l.default,{style:O.button,onPress:n,children:(0,c.jsxs)(o.default,{style:O.buttonText,children:[" ",t," "]})})},C=[],w=0,T=[],S=function(e){var t=e.index,n=e.sectionIndex,a=(0,r.useState)(!1),o=(0,p.default)(a,2),i=o[0],s=o[1];return(0,c.jsx)(m.default,{style:[O.checkboxBase,i&&O.checkboxChecked],onPress:function(){return function(){switch(n){case 0:case 3:case 5:case 10:case 13:T[n]?!0===i&&(s(!i),2===t&&(C[n]=!i),T[n]=!1):(s(!i),T[n]=!0,2===t&&(C[n]=!i));break;case 1:case 6:case 9:T[n]?!0===i&&(s(!i),3===t&&(C[n]=!i),T[n]=!1):(s(!i),T[n]=!0,3===t&&(C[n]=!i));break;case 2:case 7:case 11:T[n]?!0===i&&(s(!i),0===t&&(C[n]=!i),T[n]=!1):(s(!i),T[n]=!0,0===t&&(C[n]=!i));break;case 4:case 8:case 12:case 14:T[n]?!0===i&&(s(!i),1===t&&(C[n]=!i),T[n]=!1):(s(!i),T[n]=!0,1===t&&(C[n]=!i))}}()},children:i&&(0,c.jsx)(y.default,{name:"checkmark",size:24,color:"white"})})},O=a.default.create({container:{flex:2,paddingTop:22,paddingBottom:22},appTitle:{fontFamily:"Avenir",textAlign:"center",paddingBottom:22,fontSize:22},sectionHeader:{backgroundColor:"",paddingStart:12,paddingTop:20,paddingBottom:20,textAlign:"left",fontFamily:"Avenir",fontSize:20,backgroundColor:"rgba(247,247,247,1.0)"},checkboxContainer:{flexDirection:"row",alignItems:"center",margin:10},item:{marginLeft:8,fontWeight:500,fontSize:18,padding:16},checkboxBase:{width:24,height:24,alignContent:"center",borderRadius:4,borderWidth:2,borderColor:"#ff0000",backgroundColor:"transparent"},checkboxChecked:{backgroundColor:"#ff0000"},button:{flexDirection:"row",alignItems:"center",marginVertical:40,height:40,marginBottom:10,borderRadius:40,backgroundColor:"rgba(255 255 255/ 0.5)"},buttonText:{textTransform:"uppercase",color:"#f04713",fontFamily:"Avenir",fontWeight:"bold",letterSpacing:3,fontSize:20,textDecorationLine:"none",marginLeft:10}});const I=function(e){var t=e.navigation;return(0,c.jsxs)(b.default,{style:O.container,children:[(0,c.jsx)(o.default,{style:O.appTitle,children:"Select the box with the correct answer:"}),(0,c.jsx)(x.default,{stickySectionHeadersEnabled:!1,sections:j,renderSectionHeader:function(e){var t=e.section;return(0,c.jsx)(o.default,{style:O.sectionHeader,children:t.title})},renderItem:function(e){var t=e.item,n=e.index,r=e.section;return(0,c.jsxs)(b.default,{style:O.checkboxContainer,children:[(0,c.jsx)(S,{index:n,sectionIndex:r.index}),(0,c.jsx)(o.default,{style:O.item,children:t})]})},keyExtractor:function(e){return`basicListEntry-${e}`}}),(0,c.jsx)(k,{title:"Finish",onPress:function(){return function(){for(var e=0;e<C.length;e++)!0===C[e]&&w++;w<4?v.default.alert("Congratulation","You are a Newbie. You may start at the Newbie Level"):w<7?v.default.alert("Congratulation","You are a Novice. You may start at the Novice Level"):w<10?v.default.alert("Congratulation","You are a Intermediate Cook. You may start at the Mid-Tier Level"):w<13?v.default.alert("Congratulation","You are a Advance Cook. You may start at the Advance Level"):v.default.alert("Congratulation","You are a Expert Cook. You may start at the Expert Level"),t.navigate("LevelMap")}()}})]})};n(8350);a.default.create({container:{flex:1,alignItems:"center",justifyContent:"flex-start",paddingTop:"7%"},headerText:{textTransform:"uppercase",color:"white",fontFamily:"Avenir-Roman",fontSize:45,textAlign:"center"},button:{flexDirection:"row",alignItems:"center",marginVertical:40,height:60,marginBottom:10,borderRadius:40,backgroundColor:"rgba(255 255 255/ 0.5)"},buttonText:{textTransform:"uppercase",color:"#995c1f",fontFamily:"Arial Rounded MT Bold",fontSize:40,textDecorationLine:"none",marginLeft:10}});var P=n(3224),L=n(4942);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,L.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const A=a.default.create({container:{flex:1,backgroundColor:"transparent",alignItems:"center",justifyContent:"flex-start",paddingTop:0},overlay:M(M({},a.default.absoluteFillObject),{},{backgroundColor:"transparent",justifyContent:"center",alignItems:"center"}),background:{flex:1,resizeMode:"cover",justifyContent:"center",alignItems:"center"},backgroundTest:{flex:1,backgroundColor:"blue"},headerText:{color:"white",fontSize:24,textAlign:"center"},headerTextLevel:{color:"black",fontSize:32,textAlign:"left"},logo:{width:300,height:300,marginTop:50,borderRadius:150},levelIntroImage:{width:430,height:200,marginTop:50},assesmentButton:{flexDirection:"row",alignItems:"center",marginBottom:10},buttonText:{color:"black",textDecorationLine:"none",marginLeft:10},buttonContainer:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginBottom:10},checkbox:{marginLeft:-5},contentContainer:{flex:1,justifyContent:"flex-start",alignItems:"center"},levelNodes:{width:200,height:200,borderRadius:100,backgroundColor:"salmon",justifyContent:"center",alignItems:"center",marginBottom:30,borderColor:"black",borderWidth:2},levelNodeText:{fontSize:24,fontWeight:"bold",color:"white"},LevelMapContainer:{flex:1,flexDirection:"column",alignItems:"center"},aCircle:{backgroundColor:"blue",width:300,height:300,marginTop:50,borderRadius:150},pointsContainer:{position:"absolute",top:100,right:10},pointsText:{fontSize:24}});var W=n(9645),z=function(e){var t=e.level,n=e.onPress;return(0,c.jsx)(l.default,{onPress:n,children:(0,c.jsx)(b.default,{style:A.levelNodes,children:(0,c.jsx)(o.default,{style:A.levelNodeText,children:t})})})};const R=function(e){for(var t=e.navigation,n=[],r=function(e){n.push((0,c.jsx)(z,{level:e,onPress:function(){t.navigate("Recipes")}},e))},a=1;a<21;a++)r(a);return(0,c.jsx)(P.default,{style:{flex:1},children:(0,c.jsx)(s.default,{source:W,style:A.background,children:(0,c.jsx)(b.default,{style:A.LevelMapContainer,children:n})})})};var F=n(5705),D=n(566),N=n(8711),E=n(1935),Y=n(5861),_=n(3426),G=n(8661),q=n(962),H=n(8899),V=n(8287);n(1366);function J(){var e=(0,r.useState)([]),t=(0,p.default)(e,2),n=t[0],a=t[1],o=(0,r.useState)(""),i=(0,p.default)(o,2),s=i[0],l=i[1],d=function(){var e=(0,Y.default)((function*(){var e=yield fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),t=yield e.json();a(t.categories)}));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){d()}),[]);return(0,c.jsxs)(b.default,{children:[(0,c.jsx)(G.default,{children:(0,c.jsx)(G.default.Content,{title:"Glossary"})}),(0,c.jsx)(q.default,{placeholder:"search",value:s,onChangeText:function(e){return l(e)}}),(0,c.jsx)(P.default,{children:n.map((function(e){return(0,c.jsxs)(H.default,{children:[(0,c.jsx)(H.default.Cover,{source:{uri:e.strCategoryThumb}}),(0,c.jsx)(H.default.Title,{title:e.strCategory}),(0,c.jsx)(H.default.Content,{children:(0,c.jsx)(V.default,{children:e.strCategoryDescription})})]},e.idCategory)}))}),(0,c.jsx)(_.default,{style:"auto"})]})}function U(e){e.navigation;return(0,c.jsx)(b.default,{style:{flex:1,alignItems:"center",justifyContent:"center"},children:(0,c.jsx)(o.default,{style:{fontSize:26,fontWeight:"bold"},children:"Setting"})})}var $="Level",K="Setting",Q="Glossary",X=(0,N.default)();function Z(){return(0,c.jsxs)(X.Navigator,{initialRouteName:$,screenOptions:function(e){var t=e.route;return{tabBarIcon:function(e){var n,r=e.focused,a=e.color,o=e.size,i=t.name;return i===$?n=r?"restaurant":"restaurant-outline":i===Q?n=r?"bookmarks":"bookmarks-outline":i===K&&(n=r?"settings":"settings-outline"),(0,c.jsx)(E.default,{name:n,size:o,color:a})}}},children:[(0,c.jsx)(X.Screen,{name:$,component:R}),(0,c.jsx)(X.Screen,{name:Q,component:J}),(0,c.jsx)(X.Screen,{name:K,component:U})]})}function ee(){var e=(0,r.useState)([]),t=(0,p.default)(e,2),n=t[0],a=t[1],o=(0,r.useState)(""),i=(0,p.default)(o,2),s=i[0],l=i[1],d=function(){var e=(0,Y.default)((function*(){var e=yield fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"),t=yield e.json();a(t.meals)}));return function(){return e.apply(this,arguments)}}();(0,r.useEffect)((function(){d()}),[]);return(0,c.jsxs)(b.default,{children:[(0,c.jsx)(G.default,{children:(0,c.jsx)(G.default.Content,{title:"Let's begin!"})}),(0,c.jsx)(q.default,{placeholder:"search",value:s,onChangeText:function(e){return l(e)}}),(0,c.jsx)(P.default,{children:n.map((function(e){return(0,c.jsxs)(H.default,{children:[(0,c.jsx)(H.default.Cover,{source:{uri:e.strMealThumb}}),(0,c.jsx)(H.default.Title,{title:e.strMeal}),(0,c.jsx)(H.default.Content,{children:(0,c.jsxs)(V.default,{children:[e.strIngredient1," - ",e.strMeasure1,"\n",e.strIngredient2," - ",e.strMeasure2,"\n",e.strIngredient3," - ",e.strMeasure3,"\n",e.strIngredient4," - ",e.strMeasure4,"\n",e.strIngredient5," - ",e.strMeasure5,"\n",e.strIngredient6," - ",e.strMeasure6,"\n",e.strIngredient7," - ",e.strMeasure7,"\n",e.strIngredient8," - ",e.strMeasure8,"\n","\n",e.strInstructions,"\n","\n","\n"]})})]},e.idMeal)}))}),(0,c.jsx)(_.default,{style:"auto"})]})}function te(){var e=(0,D.default)();return(0,c.jsx)(F.default,{children:(0,c.jsxs)(e.Navigator,{children:[(0,c.jsx)(e.Screen,{name:"Home",component:h,options:{title:"Welcome",headerShown:!1,headerStyle:{backgroundColor:"lightsalmon"}}}),(0,c.jsx)(e.Screen,{name:"StartAssesment",component:I,options:{title:"Assesment"}}),(0,c.jsx)(e.Screen,{name:"LevelMap",component:Z,options:{headerShown:!1}}),(0,c.jsx)(e.Screen,{name:"Recipes",component:ee,options:{title:"Recipes"}})]})})}},9645:(e,t,n)=>{e.exports=n.p+"static/media/bg1.2f6f71ae5555c6cd5586.jpg"},4818:(e,t,n)=>{e.exports=n.p+"static/media/DingoLogo.e9365f856c7297f3930f.jpg"},8350:(e,t,n)=>{e.exports=n.p+"static/media/LevelMapBG.a72715a8b28725af4d7f.jpg"},1366:(e,t,n)=>{e.exports=n.p+"static/media/StartingBG.92569471e70a453fff78.jpg"}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,a,o]=e[d],s=!0,l=0;l<r.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,o<i&&(i=o));if(s){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,a,o]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,o,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(l)var d=l(n)}for(t&&t(r);c<i.length;c++)o=i[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[642],(()=>n(6271)));r=n.O(r)})();
//# sourceMappingURL=main.e4fd5f25.js.map