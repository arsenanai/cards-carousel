(self.webpackChunk=self.webpackChunk||[]).push([[177],{99:(t,e,r)=>{r(465)},465:(t,e,r)=>{"use strict";r.r(e);var s=r(538);function n(t,e,r,s,n,i,a,o){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=r,l._compiled=!0),s&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=c):n&&(c=o?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),c)if(l.functional){l._injectStyles=c;var d=l.render;l.render=function(t,e){return c.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,c):[c]}return{exports:t,options:l}}const i=n({props:["card","index","size","visibleWidth","bus","cartItems"],data:function(){return{cardCardAdditionalClasses:"",cardCardAdditionalStyles:""}},created:function(){this.bus.$on("windowResized",this.windowResizeHandler),this.windowResizeHandler();try{this.card.enrolled=null!=this.card.enrolled}catch(t){}window.addEventListener("resize",this.windowResizeHandler)},mounted:function(){},destroyed:function(){window.removeEventListener("resize",this.windowResizeHandler)},methods:{getImageAlt:function(){return this.card.imageAlt?this.card.imageAlt:this.card.title},getImageThumbnail:function(){return this.card.imageURL},getURL:function(t){return t},backgroundImage:function(t){return"background-image: url('"+this.getURL(t)+"');"},getOriginalPrice:function(){return this.addCurrency(this.prettyNumber(this.card.regularPrice))},printPrice:function(){return this.card.enrolled?msg.goToCard:this.cartItems.includes(this.card.id)?msg.viewCart:0==this.card.price?msg.free:this.addCurrency(this.prettyNumber(this.card.price))},getButtonColor:function(){return this.card.enrolled||0==this.card.price?"card-btn-green":this.cartItems.includes(this.card.id)?"card-btn-blue-outline":"card-btn-blue"},prettyNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")},addCurrency:function(t){var e="";return options.currency.afterNumber||(e+=options.currency.value+" "),e+=t,options.currency.afterNumber&&(e+=" "+options.currency.value),e},isDiscounted:function(){return!this.card.enrolled&&!this.cartItems.includes(this.card.id)&&this.getDiscount()>0&&this.getDiscount()<100},truncate:function(t,e){return t},setCardSizes:function(){if(this.visibleWidth>=544)this.cardCardAdditionalClasses="w-64 max-w-64",this.cardCardAdditionalStyles="";else{var t=this.visibleWidth-32-32;this.cardCardAdditionalClasses="",this.cardCardAdditionalStyles="width: "+t+"px; max-width: "+t+"px;"}},windowResizeHandler:function(t){this.setCardSizes()},gap:function(t){if(this.index<this.size-1)return"mr-8"},getDiscount:function(){return Math.round(100-100*this.card.price/this.card.regularPrice)},getRating:function(){var t=0;return 0!=this.card.ratingCount&&(t=this.card.ratingSum/this.card.ratingCount),t>5&&(t=5),Number(t).toFixed(2)},getIndicesOf:function(t,e,r){var s=t.length;if(0==s)return[];var n,i=0,a=[];for(r||(e=e.toLowerCase(),t=t.toLowerCase());(n=e.indexOf(t,i))>-1;)a.push(n),i=n+s;return a},addToWishList:function(){},addToCart:function(){this.$emit("card-button-pressed",this.card.id)},linkTo:function(t){var e="#";e="card"==t?options.locale+"/cards/"+this.card.link:options.locale+"/profile/"+this.card.author_id,window.open(e,"_blank").focus()},forSale:function(){return!this.card.enrolled&&this.card.price>0&&this.getDiscount()<100&&!this.cartItems.includes(this.card.id)}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"inline-block whitespace-normal",class:t.gap(),attrs:{id:"card-"+t.index}},[r("div",{staticClass:"bg-white border border-greyBorder rounded-lg overflow-hidden flex flex-col mt-3 mb-14",class:t.cardCardAdditionalClasses,style:t.cardCardAdditionalStyles},[r("div",{staticClass:"relative pb-3/5 flex-none"},[r("img",{staticClass:"absolute h-full w-full object-cover",attrs:{src:t.getImageThumbnail(),alt:t.getImageAlt()}})]),t._v(" "),r("div",{staticClass:"flex-grow flex flex-col h-55"},[r("div",{staticClass:"p-4 flex-grow"},[r("p",{staticClass:"font-medium text-base leading-5 text-mainBlack mb-2 w-full cursor-pointer",on:{click:function(e){return t.linkTo("card")}}},[t._v("\n          "+t._s(t.truncate(t.card.title,40))+"\n        ")]),t._v(" "),r("p",{staticClass:"font-medium text-xs text-greyText truncate mb-2 cursor-pointer",on:{click:function(e){return t.linkTo("author")}}},[t._v("\n          "+t._s(t.card.author)+"\n        ")]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("span",{staticClass:"font-bold text-xs leading-3 text-yellowBrand "},[t._v(t._s(t.getRating()))]),t._v(" "),t._l(5,(function(e){return r("svg",{key:e,staticClass:"h-3.5 w-3.5 fill-current",class:e<=t.getRating()?"text-yellowBrand":"text-greySecondary",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z","fill-rule":"evenodd"}})])})),t._v(" "),r("span",{staticClass:"font-normal text-xs text-greyText"},[t._v("("+t._s(t.card.ratingCount)+")")])],2)]),t._v(" "),r("div",{staticClass:"px-4 pb-4 pt-3.5 border-t border-greyBorder flex-none"},[t.isDiscounted()?r("div",{staticClass:"flex items-center mb-2 h-5"},[t.isDiscounted()?r("span",{staticClass:"line-through font-normal text-sm text-greyText h-full"},[t._v(t._s(t.getOriginalPrice()))]):t._e(),t._v(" "),t.isDiscounted()?r("span",{staticClass:"ml-1 py-1 pr-1 pl-2 bg-contain bg-center bg-no-repeat font-normal text-xs leading-normal text-gray-50",style:t.backgroundImage("assets/icons/tag.svg")},[t._v("\n            "+t._s(t.getDiscount())+"%\n          ")]):t._e()]):t._e(),t._v(" "),r("button",{staticClass:"card-btn card-btn-sm",class:t.getButtonColor(),attrs:{disabled:0==t.card.enabled},on:{click:function(e){return t.addToCart()}}},[t.forSale()?r("img",{staticClass:"my-auto",attrs:{src:t.getURL("assets/icons/basket.svg"),alt:""}}):t._e(),t._v(" "),r("span",{staticClass:"my-auto"},[t._v(t._s(t.printPrice()))])])])])])])}),[],!1,null,null,null).exports;const a=n({props:["direction"]},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn-circle",on:{click:function(e){return t.$emit("click")}}},[r("svg",{staticClass:"absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 w-2 fill-current",attrs:{width:"9",height:"16",viewBox:"0 0 9 16",xmlns:"http://www.w3.org/2000/svg"}},["left"==t.direction?r("path",{attrs:{d:"M8.17275 14.8633L8.17225 14.8637C8.05277 14.9833 7.89034 15.0499 7.71791 15.0499C7.54475 15.0497 \n    7.37958 14.9829 7.26038 14.8637L7.2602 14.8635L0.832001 8.45584C0.703741 8.32766 0.622968 8.16627 0.622968 \n    8.00514L0.622968 8.00268C0.622968 7.83963 0.703762 7.67833 0.831835 7.55038C0.831876 7.55034 0.831918 7.5503 \n    0.831959 7.55026L7.27757 1.13666L7.2778 1.13643C7.52663 0.88776 7.93242 0.88776 8.18125 1.13643L8.18132 \n    1.13649L8.65399 1.60828C8.654 1.60829 8.65401 1.60829 8.65401 1.6083C8.77418 1.72831 8.84023 1.88789 8.84023 \n    2.05929C8.84023 2.23069 8.77418 2.39015 8.65403 2.51003L8.65399 2.51007L3.25956 7.89701L3.15328 \n    8.00315L3.25957 8.10929L8.64797 13.49C8.76825 13.6102 8.83437 13.7697 8.83437 13.941C8.83437 14.1123 8.76837 \n    14.2715 8.64823 14.3917C8.64814 14.3918 8.64805 14.3919 8.64797 14.392L8.17275 14.8633Z",stroke:"white","stroke-width":"0.3"}}):r("path",{attrs:{d:"M0.830183 1.13675L0.830676 1.13626C0.950161 1.01665 1.11259 0.950116 1.28502 0.950073C1.45818 \n    0.950266 1.62335 1.01707 1.74255 1.1363L1.74273 1.13648L8.17093 7.54416C8.29919 7.67234 8.37996 7.83373 \n    8.37996 7.99486V7.99732C8.37996 8.16037 8.29917 8.32167 8.17109 8.44962C8.17105 8.44966 8.17101 8.4497 \n    8.17097 8.44974L1.72536 14.8633L1.72513 14.8636C1.4763 15.1122 1.07051 15.1122 0.821681 14.8636L0.821614 \n    14.8635L0.348941 14.3917C0.348932 14.3917 0.348924 14.3917 0.348915 14.3917C0.228754 14.2717 0.162695 \n    14.1121 0.162695 13.9407C0.162695 13.7693 0.228752 13.6099 0.348899 13.49L0.348941 13.4899L5.74336 \n    8.10299L5.84965 7.99685L5.74336 7.89071L0.354962 2.51003C0.23468 2.38982 0.168557 2.23029 0.168557 \n    2.05897C0.168557 1.88769 0.234559 1.7285 0.354702 1.60829C0.354789 1.6082 0.354876 1.60812 0.354962 \n    1.60803L0.830183 1.13675Z",stroke:"white","stroke-width":"0.3"}})])])}),[],!1,null,null,null).exports;var o=n({props:["direction"]},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"relative h-5 w-2 text-mainBlack border-0 shadow-none bg-transparent p-0",on:{click:function(e){return t.$emit("click")}}},[r("svg",{staticClass:"absolute top-0 left-0 h-5 w-2 fill-current",attrs:{width:"9",height:"16",viewBox:"0 0 9 16",xmlns:"http://www.w3.org/2000/svg"}},["left"===t.direction?r("path",{attrs:{d:"M8.17275 14.8633L8.17225 14.8637C8.05277 14.9833 7.89034 15.0499 7.71791 15.0499C7.54475 15.0497 \n    7.37958 14.9829 7.26038 14.8637L7.2602 14.8635L0.832001 8.45584C0.703741 8.32766 0.622968 8.16627 0.622968 \n    8.00514L0.622968 8.00268C0.622968 7.83963 0.703762 7.67833 0.831835 7.55038C0.831876 7.55034 0.831918 7.5503 \n    0.831959 7.55026L7.27757 1.13666L7.2778 1.13643C7.52663 0.88776 7.93242 0.88776 8.18125 1.13643L8.18132 \n    1.13649L8.65399 1.60828C8.654 1.60829 8.65401 1.60829 8.65401 1.6083C8.77418 1.72831 8.84023 1.88789 8.84023 \n    2.05929C8.84023 2.23069 8.77418 2.39015 8.65403 2.51003L8.65399 2.51007L3.25956 7.89701L3.15328 \n    8.00315L3.25957 8.10929L8.64797 13.49C8.76825 13.6102 8.83437 13.7697 8.83437 13.941C8.83437 14.1123 8.76837 \n    14.2715 8.64823 14.3917C8.64814 14.3918 8.64805 14.3919 8.64797 14.392L8.17275 14.8633Z",stroke:"white","stroke-width":"0.3"}}):r("path",{attrs:{d:"M0.830183 1.13675L0.830676 1.13626C0.950161 1.01665 1.11259 0.950116 1.28502 0.950073C1.45818 \n    0.950266 1.62335 1.01707 1.74255 1.1363L1.74273 1.13648L8.17093 7.54416C8.29919 7.67234 8.37996 7.83373 \n    8.37996 7.99486V7.99732C8.37996 8.16037 8.29917 8.32167 8.17109 8.44962C8.17105 8.44966 8.17101 8.4497 \n    8.17097 8.44974L1.72536 14.8633L1.72513 14.8636C1.4763 15.1122 1.07051 15.1122 0.821681 14.8636L0.821614 \n    14.8635L0.348941 14.3917C0.348932 14.3917 0.348924 14.3917 0.348915 14.3917C0.228754 14.2717 0.162695 \n    14.1121 0.162695 13.9407C0.162695 13.7693 0.228752 13.6099 0.348899 13.49L0.348941 13.4899L5.74336 \n    8.10299L5.84965 7.99685L5.74336 7.89071L0.354962 2.51003C0.23468 2.38982 0.168557 2.23029 0.168557 \n    2.05897C0.168557 1.88769 0.234559 1.7285 0.354702 1.60829C0.354789 1.6082 0.354876 1.60812 0.354962 \n    1.60803L0.830183 1.13675Z",stroke:"white","stroke-width":"0.3"}})])])}),[],!1,null,null,null);const c=n({name:"cards-loop",components:{Card:i,CircleArrowButton:a,MobileArrowButton:o.exports},data:function(){return{cartItems:common.cartItems,cards:cardsArray,cursor:0,duration:300,perSlide:4,isAnimating:!1,visibleWidth:544,bus:new s.Z}},created:function(){this.cards.length>0&&(this.windowResizeHandler(),window.addEventListener("resize",this.windowResizeHandler))},destroyed:function(){this.cards.length>0&&window.removeEventListener("resize",this.windowResizeHandler)},methods:{getDivision:function(){return this.duration/10-1},cardWidth:function(){return this.visibleWidth>=544?256:this.visibleWidth-32-32},gap:function(){return 32},scrollTo:function(t,e){var r=this;if(this.preferReducedMotion())this.$refs.cardsSlider.scrollLeft=n,this.cursor=t;else if(!this.isAnimating){this.isAnimating=!0;var s=this.$refs.cardsSlider.scrollLeft,n=t*(this.cardWidth()+this.gap()),i=Math.abs(s-n),a=Math.floor(i/this.getDivision()),o=n>s?a:-a,c=setInterval((function(){i-a<=0?(r.$refs.cardsSlider.scrollLeft=n,r.isAnimating=!1,r.cursor=t,window.clearInterval(c)):(i-=a,r.$refs.cardsSlider.scrollLeft+=o)}),10)}},getCardsNumber:function(){var t=this;return t.$nextTick((function(){t.perSlide=Math.round(t.getSliderWidth()/this.cardWidth())})),this.perSlide},getSliderWidth:function(){return this.$refs.cardsSlider.offsetWidth},getURL:function(t){return templateDirectory+"/"+t},onMouseWheel:function(t){},getIndicator:function(t){return t%this.getCardsNumber()==0?t==this.cursor?this.getURL("assets/icons/rectangle.svg"):this.getURL("assets/icons/ellipse.svg"):null},getIndicesForCarousel:function(){for(var t=new Array,e=0;e<this.cards.length;e++)e%this.perSlide==0&&t.push(e);return t},windowResizeHandler:function(t){this.cursor=0,this.visibleWidth=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),this.perSlide=this.getCardsNumber(),this.bus.$emit("windowResized")},endIsReached:function(){return this.cursor>=this.cards.length-this.getCardsNumber()},preferReducedMotion:function(){var t=window.matchMedia("(prefers-reduced-motion: reduce)");return!(t&&!t.matches)},cursorInMiddle:function(){return!(this.cursor<2||this.cursor>this.cards.length-3)},cardButtonPressed:function(t){for(var e=-1,r=0;r<this.cartItems.length;r++)if(this.cartItems[r]==t){e=r;break}e>-1?this.cartItems.splice(e,1):this.cartItems.push(t)}}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.cards.length>0?r("div",{staticClass:"relative my-8"},[r("div",{ref:"cardsSlider",staticClass:"overflow-hidden whitespace-nowrap overscroll-none",attrs:{id:"cards-loop"}},t._l(t.cards,(function(e,s){return r("card",{key:s,ref:"card",refInFor:!0,attrs:{card:e,size:t.cards.length,cartItems:t.cartItems,visibleWidth:t.visibleWidth,index:s,bus:t.bus},on:{"card-button-pressed":t.cardButtonPressed}})})),1),t._v(" "),r("circle-arrow-button",{class:"absolute transform -translate-x-2/4 top-36 left-0 hidden laptop:block",attrs:{direction:"left",disabled:t.cursor<=0||t.isAnimating},on:{click:function(e){t.scrollTo(t.cursor-t.getCardsNumber(),e)}}}),t._v(" "),r("circle-arrow-button",{class:"absolute transform translate-x-2/4 top-36 right-0 hidden laptop:block",attrs:{direction:"right",disabled:t.endIsReached()||t.isAnimating},on:{click:function(e){t.scrollTo(t.cursor+t.getCardsNumber(),e)}}}),t._v(" "),r("div",{staticClass:"w-full absolute bottom-0 left-0 hidden laptop:flex flex-row justify-center items-center space-x-2.5"},t._l(t.getIndicesForCarousel(),(function(e){return r("img",{key:e,staticClass:"h-2 cursor-pointer",attrs:{src:t.getIndicator(e),disabled:t.isAnimating},on:{click:function(r){return t.scrollTo(e)}}})})),0),t._v(" "),r("div",{staticClass:"absolute bottom-0 left-1/2 w-full transform -translate-x-2/4 flex flex-row justify-between laptop:hidden"},[r("mobile-arrow-button",{attrs:{disabled:t.cursor<=0||t.isAnimating,direction:"left"},on:{click:function(e){t.scrollTo(t.cursor-t.getCardsNumber(),e)}}}),t._v(" "),r("span",{staticClass:"h-5 font-normal text-base leading-5 cursor-pointer border-activeSecondary",class:{"text-activeSecondary border-b":0==t.cursor,"text-greyText":t.cursor>0},attrs:{disabled:t.isAnimating},on:{click:function(e){return t.scrollTo(0)}}},[t._v("\n      1\n    ")]),t._v(" "),r("span",{staticClass:"h-5 font-normal text-base leading-5 border-activeSecondary",class:{"text-activeSecondary border-b":1==t.cursor,"text-greyText":1!=t.cursor},attrs:{disabled:t.isAnimating}},[t.cursor>=0&&t.cursor<3?r("span",{staticClass:"cursor-pointer",on:{click:function(e){return t.scrollTo(1)}}},[t._v("\n        2\n      ")]):r("span",[t._v("\n        ...\n      ")])]),t._v(" "),r("span",{staticClass:"h-5 font-normal text-base leading-5 border-activeSecondary",class:{"text-activeSecondary border-b":t.cursorInMiddle(),"text-greyText":!t.cursorInMiddle()},attrs:{disabled:t.isAnimating}},[t.cursor<3?r("span",{class:{"cursor-pointer":2!=t.cursor},on:{click:function(e){return t.scrollTo(2)}}},[t._v("\n        3\n      ")]):t.cursor>2&&t.cursor<t.cards.length-2?r("span",[t._v("\n        "+t._s(t.cursor+1)+"\n      ")]):r("span",{class:{"cursor-pointer":t.cursor!=t.cards.length-3},on:{click:function(e){return t.scrollTo(t.cards.length-3)}}},[t._v("\n        "+t._s(t.cards.length-2)+"\n      ")])]),t._v(" "),r("span",{staticClass:"h-5 font-normal text-base leading-5 border-activeSecondary",class:{"text-activeSecondary border-b":t.cursor==t.cards.length-2,"text-greyText":t.cursor!=t.cards.length-2},attrs:{disabled:t.isAnimating}},[t.cursor>t.cards.length-4&&t.cursor<t.cards.length?r("span",{staticClass:"cursor-pointer",on:{click:function(e){return t.scrollTo(t.cards.length-2)}}},[t._v("\n        "+t._s(t.cards.length-1)+"\n      ")]):r("span",[t._v("\n        ...\n      ")])]),t._v(" "),r("span",{staticClass:"h-5 font-normal text-base leading-5 border-activeSecondary cursor-pointer",class:{"text-activeSecondary border-b":t.cursor==t.cards.length-1,"text-greyText":t.cursor<t.cards.length-1},attrs:{disabled:t.isAnimating},on:{click:function(e){return t.scrollTo(t.cards.length-1)}}},[t._v(t._s(t.cards.length))]),t._v(" "),r("mobile-arrow-button",{attrs:{disabled:t.endIsReached()||t.isAnimating,direction:"right"},on:{click:function(e){t.scrollTo(t.cursor+t.getCardsNumber(),e)}}})],1)],1):r("div",[t._v("\n  No cards given\n")])}),[],!1,null,null,null).exports;s.Z.config.productionTip=!1;new s.Z({render:function(t){return t(c)}}).$mount("#cards-loop")},63:()=>{}},t=>{"use strict";var e=e=>t(t.s=e);t.O(0,[879,228],(()=>(e(99),e(63))));t.O()}]);