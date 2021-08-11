<template>
<div class="relative my-8" v-if="cards.length>0">
  <!-- main carousel start -->
  <div id="cards-loop" class="overflow-hidden whitespace-nowrap overscroll-none" ref="cardsSlider">
      <card
        v-for="(card,index) in cards"
        :key="index"
        :card="card"
        :size="cards.length"
        :cartItems="cartItems"
        :visibleWidth="visibleWidth"
        :index="index"
        :bus="bus"
        ref="card"
        @card-button-pressed="cardButtonPressed"
      />
  </div>
  <!-- main carousel end -->
  <!-- circle arrow navigation start -->
  
  <circle-arrow-button
    :direction='"left"'
    :class="'absolute transform -translate-x-2/4 top-36 left-0 hidden laptop:block'"
    @click="scrollTo(cursor-getCardsNumber(),$event)"
    :disabled="cursor<=0 || isAnimating"  
  />
  <circle-arrow-button
    :direction='"right"'
    :class="'absolute transform translate-x-2/4 top-36 right-0 hidden laptop:block'"
    @click="scrollTo(cursor+getCardsNumber(),$event)"
    :disabled="endIsReached() || isAnimating" 
  />
  <div class="w-full absolute bottom-0 left-0 hidden laptop:flex flex-row justify-center items-center space-x-2.5">
    <img class="h-2 cursor-pointer" v-for="index in getIndicesForCarousel()"
      :key="index"
      :src="getIndicator(index)"
      @click="scrollTo(index)"
      :disabled="isAnimating"
    />
  </div>
  <!-- circle arrow navigation end -->
  <!-- mobile navigation start -->
  <div class="absolute bottom-0 left-1/2 w-full transform -translate-x-2/4 flex flex-row justify-between laptop:hidden">
    <!-- arrow left button start -->
    <mobile-arrow-button @click="scrollTo(cursor-getCardsNumber(),$event)"
    :disabled="cursor<=0 || isAnimating" :direction="'left'"
    />
    <!-- arrow left button end -->
    <!-- digits navigation start -->
    <span class="h-5 font-normal text-base leading-5 cursor-pointer border-activeSecondary"
      :class="{'text-activeSecondary border-b': cursor==0, 'text-greyText': cursor>0}"
      @click="scrollTo(0)"
      :disabled="isAnimating"
    >
      1
    </span>
    <span class="h-5 font-normal text-base leading-5 border-activeSecondary"
      :class="{'text-activeSecondary border-b': cursor==1, 'text-greyText': cursor!=1}"
      :disabled="isAnimating"
    >
      <span class="cursor-pointer" v-if="cursor>=0 && cursor<3" @click="scrollTo(1)">
        2
      </span>
      <span v-else>
        ...
      </span>
    </span>
    <span class="h-5 font-normal text-base leading-5 border-activeSecondary"
      :class="{'text-activeSecondary border-b': cursorInMiddle(), 'text-greyText': !cursorInMiddle()}"
      :disabled="isAnimating"
    >
      <span :class="{'cursor-pointer':cursor!=2}" v-if="cursor<3" @click="scrollTo(2)">
        3
      </span>
      <span v-else-if="cursor>2 && cursor<cards.length-2">
        {{cursor+1}}
      </span>
      <span :class="{'cursor-pointer':cursor!=cards.length-3}" v-else @click="scrollTo(cards.length-3)">
        {{cards.length-2}}
      </span>
    </span>
    <span class="h-5 font-normal text-base leading-5 border-activeSecondary"
      :class="{'text-activeSecondary border-b': cursor==cards.length-2, 'text-greyText': cursor!=cards.length-2}"
      :disabled="isAnimating"
    >
      <span class="cursor-pointer" v-if="cursor>cards.length-4 && cursor<cards.length"
        @click="scrollTo(cards.length-2)">
        {{cards.length-1}}
      </span>
      <span v-else>
        ...
      </span>
    </span>
    <span class="h-5 font-normal text-base leading-5 border-activeSecondary cursor-pointer"
      :class="{'text-activeSecondary border-b': cursor==cards.length-1, 'text-greyText': cursor<cards.length-1}"
      @click="scrollTo(cards.length-1)"
      :disabled="isAnimating"
    >{{cards.length}}</span>
    <!-- digits navigation end -->
    <!-- arrow right button start -->
    <mobile-arrow-button @click="scrollTo(cursor+getCardsNumber(),$event)"
    :disabled="endIsReached() || isAnimating" :direction="'right'"
    />
    <!-- arrow right button end -->
  </div>
  <!-- mobile navigation end -->
</div>
<div v-else>
  No cards given
</div>
</template>

<script>
import Card from './../components/Card'
import CircleArrowButton from './../components/CircleArrowButton'
import MobileArrowButton from './../components/MobileArrowButton'
import Vue from 'vue'

export default {
  name: 'cards-loop',
  components: {
    Card,
    CircleArrowButton,
    MobileArrowButton,
  },
  data() {
    return {
      cartItems: common.cartItems,
      cards: cardsArray,
      cursor: 0,
      duration: 300, //in milliseconds
      perSlide: 4,
      isAnimating: false,
      visibleWidth: 544,
      bus: new Vue(),
    }
  },
  created() {
    if(this.cards.length>0){
      this.windowResizeHandler()
      window.addEventListener("resize", this.windowResizeHandler);
    }
  },
  destroyed() {
    if(this.cards.length>0){
      window.removeEventListener("resize", this.windowResizeHandler);
    }
  },
  methods: {
    getDivision: function(){
      return this.duration/10-1;
    },
    cardWidth: function(){
      if(this.visibleWidth>=544){
        //static for tablet
        return 256
      }else{
        //dynamic for mobile
        return this.visibleWidth-32-32
      }
    },
    gap: function(){
      return 32
    },
    scrollTo: function(index, event){
      if(this.preferReducedMotion()){
        this.$refs.cardsSlider.scrollLeft = d;
        this.cursor=index
      }else{
        if(!this.isAnimating){
          this.isAnimating = true
          var i = this.$refs.cardsSlider.scrollLeft
          var d = index*(this.cardWidth()+this.gap())
          var dx = Math.abs(i-d)
          var st = Math.floor(dx/this.getDivision())
          var s = (d>i)?st:-st;
          var slideTimer = setInterval(()=>{
            if(dx-st<=0){
              this.$refs.cardsSlider.scrollLeft = d;
              this.isAnimating = false
              this.cursor=index
              window.clearInterval(slideTimer);
            }else{
              dx-=st;
              this.$refs.cardsSlider.scrollLeft += s;
            }
          }, 10)
        }
      }
    },
    getCardsNumber: function(){
      const that = this
      that.$nextTick(function () {
        that.perSlide = Math.round(that.getSliderWidth()/this.cardWidth())
      })
      return this.perSlide
    },
    getSliderWidth: function(){
      return this.$refs.cardsSlider.offsetWidth
    },
    getURL: function(address){
        //console.log(templateDirectory +"/"+ address);
        return templateDirectory +"/"+ address;
    },
    onMouseWheel: function($event){
      //console.log("mouse wheel event: "+$event)
    },
    getIndicator: function(index){
      if(index%this.getCardsNumber()==0){
        if(index==this.cursor)
          return this.getURL('assets/icons/rectangle.svg')
        else
          return this.getURL('assets/icons/ellipse.svg')
      }else
        return null
    },
    getIndicesForCarousel: function(){
      var r = new Array()
      for(var i=0;i<this.cards.length; i++){
        if(i%this.perSlide==0)
          r.push(i)
      }
      return r
    },
    windowResizeHandler(e) {
      this.cursor=0
      this.visibleWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      //this.$refs.card.windowResizeHandler()
      this.perSlide = this.getCardsNumber()
      this.bus.$emit('windowResized')
      //this.$refs.card.windowResizeHandler(e)
    },
    endIsReached: function(){
      return (this.cursor>=(this.cards.length-this.getCardsNumber()));
    },
    preferReducedMotion: function(){
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (!mediaQuery || mediaQuery.matches)
        return true;
      else 
        return false;
    },
    cursorInMiddle: function(){
      //(cursor<2 || cursor>cards.length-3)
      return !(this.cursor<2 || this.cursor>this.cards.length-3)
    },
    cardButtonPressed: function($event){
      var found = -1
        for(var i=0;i<this.cartItems.length;i++)
          if(this.cartItems[i]==$event){
            found = i
            break
          }
        if(found>-1)
          this.cartItems.splice(found,1)
        else
          this.cartItems.push($event)
    }
  },
}
</script>
