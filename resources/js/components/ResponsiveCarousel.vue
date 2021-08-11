<template>
<div class="relative my-8" v-if="cards.length>0">
  <!-- main carousel start -->
  <div id="cards-loop" class="overflow-hidden whitespace-nowrap overscroll-none" ref="cardsSlider">
    <slot></slot>
  </div>
  <!-- main carousel end -->
  <slot name="indicators"></slot>
</div>
</template>

<script>
import CardCard from './../components/CardCard'
import CircleArrowButton from './../components/CircleArrowButton'
import MobileArrowButton from './../components/MobileArrowButton'
import Vue from 'vue'

export default {
  name: 'cards-loop',
  components: {
    CardCard,
    CircleArrowButton,
    MobileArrowButton,
  },
  data() {
    return {
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
    this.windowResizeHandler()
    window.addEventListener("resize", this.windowResizeHandler);
    //console.log(common.cartItems)
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResizeHandler);
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
          return this.getURL('spa/assets/icons/rectangle.svg')
        else
          return this.getURL('spa/assets/icons/ellipse.svg')
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
    }
  },
}
</script>