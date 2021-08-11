(self["webpackChunk"] = self["webpackChunk"] || []).push([["/public/js/app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/apps/CardsLoopApp.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/apps/CardsLoopApp.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/Card */ "./resources/js/components/Card.vue");
/* harmony import */ var _components_CircleArrowButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/CircleArrowButton */ "./resources/js/components/CircleArrowButton.vue");
/* harmony import */ var _components_MobileArrowButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/MobileArrowButton */ "./resources/js/components/MobileArrowButton.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'cards-loop',
  components: {
    Card: _components_Card__WEBPACK_IMPORTED_MODULE_0__.default,
    CircleArrowButton: _components_CircleArrowButton__WEBPACK_IMPORTED_MODULE_1__.default,
    MobileArrowButton: _components_MobileArrowButton__WEBPACK_IMPORTED_MODULE_2__.default
  },
  data: function data() {
    return {
      cartItems: common.cartItems,
      cards: cardsArray,
      cursor: 0,
      duration: 300,
      //in milliseconds
      perSlide: 4,
      isAnimating: false,
      visibleWidth: 544,
      bus: new vue__WEBPACK_IMPORTED_MODULE_3__.default()
    };
  },
  created: function created() {
    if (this.cards.length > 0) {
      this.windowResizeHandler();
      window.addEventListener("resize", this.windowResizeHandler);
    }
  },
  destroyed: function destroyed() {
    if (this.cards.length > 0) {
      window.removeEventListener("resize", this.windowResizeHandler);
    }
  },
  methods: {
    getDivision: function getDivision() {
      return this.duration / 10 - 1;
    },
    cardWidth: function cardWidth() {
      if (this.visibleWidth >= 544) {
        //static for tablet
        return 256;
      } else {
        //dynamic for mobile
        return this.visibleWidth - 32 - 32;
      }
    },
    gap: function gap() {
      return 32;
    },
    scrollTo: function scrollTo(index, event) {
      var _this = this;

      if (this.preferReducedMotion()) {
        this.$refs.cardsSlider.scrollLeft = d;
        this.cursor = index;
      } else {
        if (!this.isAnimating) {
          this.isAnimating = true;
          var i = this.$refs.cardsSlider.scrollLeft;
          var d = index * (this.cardWidth() + this.gap());
          var dx = Math.abs(i - d);
          var st = Math.floor(dx / this.getDivision());
          var s = d > i ? st : -st;
          var slideTimer = setInterval(function () {
            if (dx - st <= 0) {
              _this.$refs.cardsSlider.scrollLeft = d;
              _this.isAnimating = false;
              _this.cursor = index;
              window.clearInterval(slideTimer);
            } else {
              dx -= st;
              _this.$refs.cardsSlider.scrollLeft += s;
            }
          }, 10);
        }
      }
    },
    getCardsNumber: function getCardsNumber() {
      var that = this;
      that.$nextTick(function () {
        that.perSlide = Math.round(that.getSliderWidth() / this.cardWidth());
      });
      return this.perSlide;
    },
    getSliderWidth: function getSliderWidth() {
      return this.$refs.cardsSlider.offsetWidth;
    },
    getURL: function getURL(address) {
      //console.log(templateDirectory +"/"+ address);
      return templateDirectory + "/" + address;
    },
    onMouseWheel: function onMouseWheel($event) {//console.log("mouse wheel event: "+$event)
    },
    getIndicator: function getIndicator(index) {
      if (index % this.getCardsNumber() == 0) {
        if (index == this.cursor) return this.getURL('assets/icons/rectangle.svg');else return this.getURL('assets/icons/ellipse.svg');
      } else return null;
    },
    getIndicesForCarousel: function getIndicesForCarousel() {
      var r = new Array();

      for (var i = 0; i < this.cards.length; i++) {
        if (i % this.perSlide == 0) r.push(i);
      }

      return r;
    },
    windowResizeHandler: function windowResizeHandler(e) {
      this.cursor = 0;
      this.visibleWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0); //this.$refs.card.windowResizeHandler()

      this.perSlide = this.getCardsNumber();
      this.bus.$emit('windowResized'); //this.$refs.card.windowResizeHandler(e)
    },
    endIsReached: function endIsReached() {
      return this.cursor >= this.cards.length - this.getCardsNumber();
    },
    preferReducedMotion: function preferReducedMotion() {
      var mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (!mediaQuery || mediaQuery.matches) return true;else return false;
    },
    cursorInMiddle: function cursorInMiddle() {
      //(cursor<2 || cursor>cards.length-3)
      return !(this.cursor < 2 || this.cursor > this.cards.length - 3);
    },
    cardButtonPressed: function cardButtonPressed($event) {
      var found = -1;

      for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i] == $event) {
          found = i;
          break;
        }
      }

      if (found > -1) this.cartItems.splice(found, 1);else this.cartItems.push($event);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['card', 'index', 'size', 'visibleWidth', 'bus', 'cartItems'],
  data: function data() {
    return {
      cardCardAdditionalClasses: '',
      cardCardAdditionalStyles: ''
    };
  },
  created: function created() {
    this.bus.$on('windowResized', this.windowResizeHandler);
    this.windowResizeHandler();

    try {
      /*var str = this.card.imageMeta
      var onlyName = this.card.imageURL.split('/')[2].replace('.jpg','')
      //console.log(onlyName)
      var is = this.getIndicesOf(onlyName+"-600x", str)
      var t
      for(var i=0;i<is.length;i++){
        t = this.card.imageMeta.substring(is[i],is[i]+onlyName.length+12)
        if(!t.includes(onlyName+'-600x600.jpg')){
          //console.log('osy durus: '+t)
          this.card.imageURL = this.card.imageURL.replace(onlyName+".jpg",t)
        }
      }*/

      /*this.card.id = Number(this.card.id)
      this.card.ratingCount = Number(this.card.ratingCount)
      this.card.ratingSum = Number(this.card.ratingSum)
      this.card.regularPrice = Number(this.card.regularPrice)
      this.card.price = Number(this.card.price)*/
      this.card.enrolled = this.card.enrolled != null ? true : false;
    } catch (error) {//ignore, original image will be loaded
    }

    window.addEventListener("resize", this.windowResizeHandler);
  },
  mounted: function mounted() {},
  destroyed: function destroyed() {
    window.removeEventListener("resize", this.windowResizeHandler);
  },
  methods: {
    getImageAlt: function getImageAlt() {
      if (this.card.imageAlt) return this.card.imageAlt;else return this.card.title;
    },
    getImageThumbnail: function getImageThumbnail() {
      return (
        /*options.uploadsURL+"/"+*/
        this.card.imageURL
      );
    },
    getURL: function getURL(address) {
      //console.log(templateDirectory +"/"+ address);
      return (
        /*templateDirectory +"/"+*/
        address
      );
    },
    backgroundImage: function backgroundImage(address) {
      return "background-image: url('" + this.getURL(address) + "');";
    },
    getOriginalPrice: function getOriginalPrice() {
      return this.addCurrency(this.prettyNumber(this.card.regularPrice));
    },
    printPrice: function printPrice() {
      //console.log("includes: "+this.cartItems.includes(this.card.id))
      if (this.card.enrolled) return msg.goToCard;else if (this.cartItems.includes(this.card.id)) return msg.viewCart;else if (this.card.price == 0) return msg.free;else return this.addCurrency(this.prettyNumber(this.card.price));
    },
    getButtonColor: function getButtonColor() {
      if (this.card.enrolled || this.card.price == 0) return 'card-btn-green';else if (this.cartItems.includes(this.card.id)) return 'card-btn-blue-outline';else return 'card-btn-blue';
    },
    prettyNumber: function prettyNumber(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    addCurrency: function addCurrency(number) {
      var res = '';
      if (!options.currency.afterNumber) res += options.currency.value + " ";
      res += number;
      if (options.currency.afterNumber) res += " " + options.currency.value;
      return res;
    },
    isDiscounted: function isDiscounted() {
      return !this.card.enrolled && !this.cartItems.includes(this.card.id) && this.getDiscount() > 0 && this.getDiscount() < 100;
    },
    truncate: function truncate(title, ml) {
      var r = title;
      /*.substring(0,ml);
      if(title.length>ml)
      r=r+"..."*/

      return r;
    },
    setCardSizes: function setCardSizes() {
      if (this.visibleWidth >= 544) {
        //tablet and above
        this.cardCardAdditionalClasses = 'w-64 max-w-64';
        this.cardCardAdditionalStyles = '';
      } else {
        //mobile
        var cw = this.visibleWidth - 32 - 32;
        this.cardCardAdditionalClasses = '';
        this.cardCardAdditionalStyles = 'width: ' + cw + 'px; ' + 'max-width: ' + cw + 'px;';
      }
    },
    windowResizeHandler: function windowResizeHandler(e) {
      //this.visibleWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      this.setCardSizes(); //console.log(this.visibleWidth)
      //console.log('handler called...')
    },
    gap: function gap(size) {
      if (this.index < this.size - 1) return 'mr-8';
    },
    getDiscount: function getDiscount() {
      return Math.round(100 - 100 * this.card.price / this.card.regularPrice);
    },
    getRating: function getRating() {
      var r = 0;
      if (this.card.ratingCount != 0) r = this.card.ratingSum / this.card.ratingCount; // checking due to adding faker library

      if (r > 5) r = 5;
      return Number(r).toFixed(2);
    },
    getIndicesOf: function getIndicesOf(searchStr, str, caseSensitive) {
      var searchStrLen = searchStr.length;

      if (searchStrLen == 0) {
        return [];
      }

      var startIndex = 0,
          index,
          indices = [];

      if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
      }

      while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
      }

      return indices;
    },
    addToWishList: function addToWishList() {//to do
    },
    addToCart: function addToCart() {
      //to do

      /*var link = '#'
      if(this.card.enrolled || this.card.price==0)
        link = options.locale + "/cards/" + this.card.link
      else if(this.cartItems.includes(this.card.id))
        link = options.locale + "/cart"
      else
        link = "?add-to-cart="+this.card.id
      console.log(link)
      window.open(link);*/
      this.$emit('card-button-pressed', this.card.id);
    },
    linkTo: function linkTo(where) {
      //to do
      var link = '#';

      if (where == 'card') {
        link = options.locale + "/cards/" + this.card.link;
      } else {
        link = options.locale + "/profile/" + this.card.author_id;
      } //console.log(link)


      window.open(link, '_blank').focus();
    },
    forSale: function forSale() {
      return !this.card.enrolled && this.card.price > 0 && this.getDiscount() < 100 && !this.cartItems.includes(this.card.id);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CircleArrowButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CircleArrowButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['direction']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MobileArrowButton.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MobileArrowButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['direction']
});

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./usages/cards-loop */ "./resources/js/usages/cards-loop.js");

/***/ }),

/***/ "./resources/js/usages/cards-loop.js":
/*!*******************************************!*\
  !*** ./resources/js/usages/cards-loop.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _apps_CardsLoopApp_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../apps/CardsLoopApp.vue */ "./resources/js/apps/CardsLoopApp.vue");

vue__WEBPACK_IMPORTED_MODULE_0__.default.config.productionTip = false;

var cardsLoop = new vue__WEBPACK_IMPORTED_MODULE_0__.default({
  render: function render(h) {
    return h(_apps_CardsLoopApp_vue__WEBPACK_IMPORTED_MODULE_1__.default);
  }
}).$mount('#cards-loop');

/***/ }),

/***/ "./resources/css/app.scss":
/*!********************************!*\
  !*** ./resources/css/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/apps/CardsLoopApp.vue":
/*!********************************************!*\
  !*** ./resources/js/apps/CardsLoopApp.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CardsLoopApp_vue_vue_type_template_id_6c8a0289___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardsLoopApp.vue?vue&type=template&id=6c8a0289& */ "./resources/js/apps/CardsLoopApp.vue?vue&type=template&id=6c8a0289&");
/* harmony import */ var _CardsLoopApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardsLoopApp.vue?vue&type=script&lang=js& */ "./resources/js/apps/CardsLoopApp.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CardsLoopApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CardsLoopApp_vue_vue_type_template_id_6c8a0289___WEBPACK_IMPORTED_MODULE_0__.render,
  _CardsLoopApp_vue_vue_type_template_id_6c8a0289___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/apps/CardsLoopApp.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Card.vue":
/*!******************************************!*\
  !*** ./resources/js/components/Card.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=b9bc2c0a& */ "./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/components/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/CircleArrowButton.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/CircleArrowButton.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CircleArrowButton_vue_vue_type_template_id_18e66550___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CircleArrowButton.vue?vue&type=template&id=18e66550& */ "./resources/js/components/CircleArrowButton.vue?vue&type=template&id=18e66550&");
/* harmony import */ var _CircleArrowButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CircleArrowButton.vue?vue&type=script&lang=js& */ "./resources/js/components/CircleArrowButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CircleArrowButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CircleArrowButton_vue_vue_type_template_id_18e66550___WEBPACK_IMPORTED_MODULE_0__.render,
  _CircleArrowButton_vue_vue_type_template_id_18e66550___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CircleArrowButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/MobileArrowButton.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/MobileArrowButton.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MobileArrowButton_vue_vue_type_template_id_751f9984___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileArrowButton.vue?vue&type=template&id=751f9984& */ "./resources/js/components/MobileArrowButton.vue?vue&type=template&id=751f9984&");
/* harmony import */ var _MobileArrowButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileArrowButton.vue?vue&type=script&lang=js& */ "./resources/js/components/MobileArrowButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MobileArrowButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MobileArrowButton_vue_vue_type_template_id_751f9984___WEBPACK_IMPORTED_MODULE_0__.render,
  _MobileArrowButton_vue_vue_type_template_id_751f9984___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MobileArrowButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/apps/CardsLoopApp.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/apps/CardsLoopApp.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsLoopApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardsLoopApp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/apps/CardsLoopApp.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsLoopApp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/CircleArrowButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/CircleArrowButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleArrowButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CircleArrowButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CircleArrowButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleArrowButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/MobileArrowButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/MobileArrowButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileArrowButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileArrowButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MobileArrowButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileArrowButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/apps/CardsLoopApp.vue?vue&type=template&id=6c8a0289&":
/*!***************************************************************************!*\
  !*** ./resources/js/apps/CardsLoopApp.vue?vue&type=template&id=6c8a0289& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsLoopApp_vue_vue_type_template_id_6c8a0289___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsLoopApp_vue_vue_type_template_id_6c8a0289___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CardsLoopApp_vue_vue_type_template_id_6c8a0289___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CardsLoopApp.vue?vue&type=template&id=6c8a0289& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/apps/CardsLoopApp.vue?vue&type=template&id=6c8a0289&");


/***/ }),

/***/ "./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_b9bc2c0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=b9bc2c0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&");


/***/ }),

/***/ "./resources/js/components/CircleArrowButton.vue?vue&type=template&id=18e66550&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/CircleArrowButton.vue?vue&type=template&id=18e66550& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleArrowButton_vue_vue_type_template_id_18e66550___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleArrowButton_vue_vue_type_template_id_18e66550___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CircleArrowButton_vue_vue_type_template_id_18e66550___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CircleArrowButton.vue?vue&type=template&id=18e66550& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CircleArrowButton.vue?vue&type=template&id=18e66550&");


/***/ }),

/***/ "./resources/js/components/MobileArrowButton.vue?vue&type=template&id=751f9984&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/MobileArrowButton.vue?vue&type=template&id=751f9984& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileArrowButton_vue_vue_type_template_id_751f9984___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileArrowButton_vue_vue_type_template_id_751f9984___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileArrowButton_vue_vue_type_template_id_751f9984___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MobileArrowButton.vue?vue&type=template&id=751f9984& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MobileArrowButton.vue?vue&type=template&id=751f9984&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/apps/CardsLoopApp.vue?vue&type=template&id=6c8a0289&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/apps/CardsLoopApp.vue?vue&type=template&id=6c8a0289& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.cards.length > 0
    ? _c(
        "div",
        { staticClass: "relative my-8" },
        [
          _c(
            "div",
            {
              ref: "cardsSlider",
              staticClass: "overflow-hidden whitespace-nowrap overscroll-none",
              attrs: { id: "cards-loop" }
            },
            _vm._l(_vm.cards, function(card, index) {
              return _c("card", {
                key: index,
                ref: "card",
                refInFor: true,
                attrs: {
                  card: card,
                  size: _vm.cards.length,
                  cartItems: _vm.cartItems,
                  visibleWidth: _vm.visibleWidth,
                  index: index,
                  bus: _vm.bus
                },
                on: { "card-button-pressed": _vm.cardButtonPressed }
              })
            }),
            1
          ),
          _vm._v(" "),
          _c("circle-arrow-button", {
            class:
              "absolute transform -translate-x-2/4 top-36 left-0 hidden laptop:block",
            attrs: {
              direction: "left",
              disabled: _vm.cursor <= 0 || _vm.isAnimating
            },
            on: {
              click: function($event) {
                _vm.scrollTo(_vm.cursor - _vm.getCardsNumber(), $event)
              }
            }
          }),
          _vm._v(" "),
          _c("circle-arrow-button", {
            class:
              "absolute transform translate-x-2/4 top-36 right-0 hidden laptop:block",
            attrs: {
              direction: "right",
              disabled: _vm.endIsReached() || _vm.isAnimating
            },
            on: {
              click: function($event) {
                _vm.scrollTo(_vm.cursor + _vm.getCardsNumber(), $event)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "w-full absolute bottom-0 left-0 hidden laptop:flex flex-row justify-center items-center space-x-2.5"
            },
            _vm._l(_vm.getIndicesForCarousel(), function(index) {
              return _c("img", {
                key: index,
                staticClass: "h-2 cursor-pointer",
                attrs: {
                  src: _vm.getIndicator(index),
                  disabled: _vm.isAnimating
                },
                on: {
                  click: function($event) {
                    return _vm.scrollTo(index)
                  }
                }
              })
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "absolute bottom-0 left-1/2 w-full transform -translate-x-2/4 flex flex-row justify-between laptop:hidden"
            },
            [
              _c("mobile-arrow-button", {
                attrs: {
                  disabled: _vm.cursor <= 0 || _vm.isAnimating,
                  direction: "left"
                },
                on: {
                  click: function($event) {
                    _vm.scrollTo(_vm.cursor - _vm.getCardsNumber(), $event)
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "h-5 font-normal text-base leading-5 cursor-pointer border-activeSecondary",
                  class: {
                    "text-activeSecondary border-b": _vm.cursor == 0,
                    "text-greyText": _vm.cursor > 0
                  },
                  attrs: { disabled: _vm.isAnimating },
                  on: {
                    click: function($event) {
                      return _vm.scrollTo(0)
                    }
                  }
                },
                [_vm._v("\n      1\n    ")]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "h-5 font-normal text-base leading-5 border-activeSecondary",
                  class: {
                    "text-activeSecondary border-b": _vm.cursor == 1,
                    "text-greyText": _vm.cursor != 1
                  },
                  attrs: { disabled: _vm.isAnimating }
                },
                [
                  _vm.cursor >= 0 && _vm.cursor < 3
                    ? _c(
                        "span",
                        {
                          staticClass: "cursor-pointer",
                          on: {
                            click: function($event) {
                              return _vm.scrollTo(1)
                            }
                          }
                        },
                        [_vm._v("\n        2\n      ")]
                      )
                    : _c("span", [_vm._v("\n        ...\n      ")])
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "h-5 font-normal text-base leading-5 border-activeSecondary",
                  class: {
                    "text-activeSecondary border-b": _vm.cursorInMiddle(),
                    "text-greyText": !_vm.cursorInMiddle()
                  },
                  attrs: { disabled: _vm.isAnimating }
                },
                [
                  _vm.cursor < 3
                    ? _c(
                        "span",
                        {
                          class: { "cursor-pointer": _vm.cursor != 2 },
                          on: {
                            click: function($event) {
                              return _vm.scrollTo(2)
                            }
                          }
                        },
                        [_vm._v("\n        3\n      ")]
                      )
                    : _vm.cursor > 2 && _vm.cursor < _vm.cards.length - 2
                    ? _c("span", [
                        _vm._v(
                          "\n        " + _vm._s(_vm.cursor + 1) + "\n      "
                        )
                      ])
                    : _c(
                        "span",
                        {
                          class: {
                            "cursor-pointer": _vm.cursor != _vm.cards.length - 3
                          },
                          on: {
                            click: function($event) {
                              return _vm.scrollTo(_vm.cards.length - 3)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.cards.length - 2) +
                              "\n      "
                          )
                        ]
                      )
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "h-5 font-normal text-base leading-5 border-activeSecondary",
                  class: {
                    "text-activeSecondary border-b":
                      _vm.cursor == _vm.cards.length - 2,
                    "text-greyText": _vm.cursor != _vm.cards.length - 2
                  },
                  attrs: { disabled: _vm.isAnimating }
                },
                [
                  _vm.cursor > _vm.cards.length - 4 &&
                  _vm.cursor < _vm.cards.length
                    ? _c(
                        "span",
                        {
                          staticClass: "cursor-pointer",
                          on: {
                            click: function($event) {
                              return _vm.scrollTo(_vm.cards.length - 2)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n        " +
                              _vm._s(_vm.cards.length - 1) +
                              "\n      "
                          )
                        ]
                      )
                    : _c("span", [_vm._v("\n        ...\n      ")])
                ]
              ),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass:
                    "h-5 font-normal text-base leading-5 border-activeSecondary cursor-pointer",
                  class: {
                    "text-activeSecondary border-b":
                      _vm.cursor == _vm.cards.length - 1,
                    "text-greyText": _vm.cursor < _vm.cards.length - 1
                  },
                  attrs: { disabled: _vm.isAnimating },
                  on: {
                    click: function($event) {
                      return _vm.scrollTo(_vm.cards.length - 1)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.cards.length))]
              ),
              _vm._v(" "),
              _c("mobile-arrow-button", {
                attrs: {
                  disabled: _vm.endIsReached() || _vm.isAnimating,
                  direction: "right"
                },
                on: {
                  click: function($event) {
                    _vm.scrollTo(_vm.cursor + _vm.getCardsNumber(), $event)
                  }
                }
              })
            ],
            1
          )
        ],
        1
      )
    : _c("div", [_vm._v("\n  No cards given\n")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Card.vue?vue&type=template&id=b9bc2c0a& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "inline-block whitespace-normal",
      class: _vm.gap(),
      attrs: { id: "card-" + _vm.index }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "bg-white border border-greyBorder rounded-lg overflow-hidden flex flex-col mt-3 mb-14",
          class: _vm.cardCardAdditionalClasses,
          style: _vm.cardCardAdditionalStyles
        },
        [
          _c("div", { staticClass: "relative pb-3/5 flex-none" }, [
            _c("img", {
              staticClass: "absolute h-full w-full object-cover",
              attrs: { src: _vm.getImageThumbnail(), alt: _vm.getImageAlt() }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "flex-grow flex flex-col h-55" }, [
            _c("div", { staticClass: "p-4 flex-grow" }, [
              _c(
                "p",
                {
                  staticClass:
                    "font-medium text-base leading-5 text-mainBlack mb-2 w-full cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.linkTo("card")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.truncate(_vm.card.title, 40)) +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass:
                    "font-medium text-xs text-greyText truncate mb-2 cursor-pointer",
                  on: {
                    click: function($event) {
                      return _vm.linkTo("author")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n          " + _vm._s(_vm.card.author) + "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex items-center" },
                [
                  _c(
                    "span",
                    {
                      staticClass:
                        "font-bold text-xs leading-3 text-yellowBrand "
                    },
                    [_vm._v(_vm._s(_vm.getRating()))]
                  ),
                  _vm._v(" "),
                  _vm._l(5, function(i) {
                    return _c(
                      "svg",
                      {
                        key: i,
                        staticClass: "h-3.5 w-3.5 fill-current",
                        class:
                          i <= _vm.getRating()
                            ? "text-yellowBrand"
                            : "text-greySecondary",
                        attrs: {
                          viewBox: "0 0 24 24",
                          xmlns: "http://www.w3.org/2000/svg"
                        }
                      },
                      [
                        _c("path", {
                          attrs: {
                            d:
                              "M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z",
                            "fill-rule": "evenodd"
                          }
                        })
                      ]
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "span",
                    { staticClass: "font-normal text-xs text-greyText" },
                    [_vm._v("(" + _vm._s(_vm.card.ratingCount) + ")")]
                  )
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "px-4 pb-4 pt-3.5 border-t border-greyBorder flex-none"
              },
              [
                _vm.isDiscounted()
                  ? _c("div", { staticClass: "flex items-center mb-2 h-5" }, [
                      _vm.isDiscounted()
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "line-through font-normal text-sm text-greyText h-full"
                            },
                            [_vm._v(_vm._s(_vm.getOriginalPrice()))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.isDiscounted()
                        ? _c(
                            "span",
                            {
                              staticClass:
                                "ml-1 py-1 pr-1 pl-2 bg-contain bg-center bg-no-repeat font-normal text-xs leading-normal text-gray-50",
                              style: _vm.backgroundImage("assets/icons/tag.svg")
                            },
                            [
                              _vm._v(
                                "\n            " +
                                  _vm._s(_vm.getDiscount()) +
                                  "%\n          "
                              )
                            ]
                          )
                        : _vm._e()
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "card-btn card-btn-sm",
                    class: _vm.getButtonColor(),
                    attrs: { disabled: _vm.card.enabled == false },
                    on: {
                      click: function($event) {
                        return _vm.addToCart()
                      }
                    }
                  },
                  [
                    _vm.forSale()
                      ? _c("img", {
                          staticClass: "my-auto",
                          attrs: {
                            src: _vm.getURL("assets/icons/basket.svg"),
                            alt: ""
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _c("span", { staticClass: "my-auto" }, [
                      _vm._v(_vm._s(_vm.printPrice()))
                    ])
                  ]
                )
              ]
            )
          ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CircleArrowButton.vue?vue&type=template&id=18e66550&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/CircleArrowButton.vue?vue&type=template&id=18e66550& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "btn-circle",
      on: {
        click: function($event) {
          return _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "svg",
        {
          staticClass:
            "absolute top-1/2 left-1/2 transform -translate-x-2/4 -translate-y-2/4 w-2 fill-current",
          attrs: {
            width: "9",
            height: "16",
            viewBox: "0 0 9 16",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _vm.direction == "left"
            ? _c("path", {
                attrs: {
                  d:
                    "M8.17275 14.8633L8.17225 14.8637C8.05277 14.9833 7.89034 15.0499 7.71791 15.0499C7.54475 15.0497 \n    7.37958 14.9829 7.26038 14.8637L7.2602 14.8635L0.832001 8.45584C0.703741 8.32766 0.622968 8.16627 0.622968 \n    8.00514L0.622968 8.00268C0.622968 7.83963 0.703762 7.67833 0.831835 7.55038C0.831876 7.55034 0.831918 7.5503 \n    0.831959 7.55026L7.27757 1.13666L7.2778 1.13643C7.52663 0.88776 7.93242 0.88776 8.18125 1.13643L8.18132 \n    1.13649L8.65399 1.60828C8.654 1.60829 8.65401 1.60829 8.65401 1.6083C8.77418 1.72831 8.84023 1.88789 8.84023 \n    2.05929C8.84023 2.23069 8.77418 2.39015 8.65403 2.51003L8.65399 2.51007L3.25956 7.89701L3.15328 \n    8.00315L3.25957 8.10929L8.64797 13.49C8.76825 13.6102 8.83437 13.7697 8.83437 13.941C8.83437 14.1123 8.76837 \n    14.2715 8.64823 14.3917C8.64814 14.3918 8.64805 14.3919 8.64797 14.392L8.17275 14.8633Z",
                  stroke: "white",
                  "stroke-width": "0.3"
                }
              })
            : _c("path", {
                attrs: {
                  d:
                    "M0.830183 1.13675L0.830676 1.13626C0.950161 1.01665 1.11259 0.950116 1.28502 0.950073C1.45818 \n    0.950266 1.62335 1.01707 1.74255 1.1363L1.74273 1.13648L8.17093 7.54416C8.29919 7.67234 8.37996 7.83373 \n    8.37996 7.99486V7.99732C8.37996 8.16037 8.29917 8.32167 8.17109 8.44962C8.17105 8.44966 8.17101 8.4497 \n    8.17097 8.44974L1.72536 14.8633L1.72513 14.8636C1.4763 15.1122 1.07051 15.1122 0.821681 14.8636L0.821614 \n    14.8635L0.348941 14.3917C0.348932 14.3917 0.348924 14.3917 0.348915 14.3917C0.228754 14.2717 0.162695 \n    14.1121 0.162695 13.9407C0.162695 13.7693 0.228752 13.6099 0.348899 13.49L0.348941 13.4899L5.74336 \n    8.10299L5.84965 7.99685L5.74336 7.89071L0.354962 2.51003C0.23468 2.38982 0.168557 2.23029 0.168557 \n    2.05897C0.168557 1.88769 0.234559 1.7285 0.354702 1.60829C0.354789 1.6082 0.354876 1.60812 0.354962 \n    1.60803L0.830183 1.13675Z",
                  stroke: "white",
                  "stroke-width": "0.3"
                }
              })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MobileArrowButton.vue?vue&type=template&id=751f9984&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/MobileArrowButton.vue?vue&type=template&id=751f9984& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass:
        "relative h-5 w-2 text-mainBlack border-0 shadow-none bg-transparent p-0",
      on: {
        click: function($event) {
          return _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "svg",
        {
          staticClass: "absolute top-0 left-0 h-5 w-2 fill-current",
          attrs: {
            width: "9",
            height: "16",
            viewBox: "0 0 9 16",
            xmlns: "http://www.w3.org/2000/svg"
          }
        },
        [
          _vm.direction === "left"
            ? _c("path", {
                attrs: {
                  d:
                    "M8.17275 14.8633L8.17225 14.8637C8.05277 14.9833 7.89034 15.0499 7.71791 15.0499C7.54475 15.0497 \n    7.37958 14.9829 7.26038 14.8637L7.2602 14.8635L0.832001 8.45584C0.703741 8.32766 0.622968 8.16627 0.622968 \n    8.00514L0.622968 8.00268C0.622968 7.83963 0.703762 7.67833 0.831835 7.55038C0.831876 7.55034 0.831918 7.5503 \n    0.831959 7.55026L7.27757 1.13666L7.2778 1.13643C7.52663 0.88776 7.93242 0.88776 8.18125 1.13643L8.18132 \n    1.13649L8.65399 1.60828C8.654 1.60829 8.65401 1.60829 8.65401 1.6083C8.77418 1.72831 8.84023 1.88789 8.84023 \n    2.05929C8.84023 2.23069 8.77418 2.39015 8.65403 2.51003L8.65399 2.51007L3.25956 7.89701L3.15328 \n    8.00315L3.25957 8.10929L8.64797 13.49C8.76825 13.6102 8.83437 13.7697 8.83437 13.941C8.83437 14.1123 8.76837 \n    14.2715 8.64823 14.3917C8.64814 14.3918 8.64805 14.3919 8.64797 14.392L8.17275 14.8633Z",
                  stroke: "white",
                  "stroke-width": "0.3"
                }
              })
            : _c("path", {
                attrs: {
                  d:
                    "M0.830183 1.13675L0.830676 1.13626C0.950161 1.01665 1.11259 0.950116 1.28502 0.950073C1.45818 \n    0.950266 1.62335 1.01707 1.74255 1.1363L1.74273 1.13648L8.17093 7.54416C8.29919 7.67234 8.37996 7.83373 \n    8.37996 7.99486V7.99732C8.37996 8.16037 8.29917 8.32167 8.17109 8.44962C8.17105 8.44966 8.17101 8.4497 \n    8.17097 8.44974L1.72536 14.8633L1.72513 14.8636C1.4763 15.1122 1.07051 15.1122 0.821681 14.8636L0.821614 \n    14.8635L0.348941 14.3917C0.348932 14.3917 0.348924 14.3917 0.348915 14.3917C0.228754 14.2717 0.162695 \n    14.1121 0.162695 13.9407C0.162695 13.7693 0.228752 13.6099 0.348899 13.49L0.348941 13.4899L5.74336 \n    8.10299L5.84965 7.99685L5.74336 7.89071L0.354962 2.51003C0.23468 2.38982 0.168557 2.23029 0.168557 \n    2.05897C0.168557 1.88769 0.234559 1.7285 0.354702 1.60829C0.354789 1.6082 0.354876 1.60812 0.354962 \n    1.60803L0.830183 1.13675Z",
                  stroke: "white",
                  "stroke-width": "0.3"
                }
              })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["public/css/app","/public/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);