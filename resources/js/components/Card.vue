<template>
<div class="inline-block whitespace-normal" :class="gap()" :id="'card-'+index">
  <div class="bg-white border border-greyBorder rounded-lg overflow-hidden flex flex-col mt-3 mb-14"
    :class="cardCardAdditionalClasses" :style="cardCardAdditionalStyles">
    <div class="relative pb-3/5 flex-none">
      <img class="absolute h-full w-full object-cover" :src="getImageThumbnail()" :alt="getImageAlt()">
      <!--<button class="wish-btn absolute h-8 w-8 rounded-full top-4 right-4 bg-gray-800 bg-opacity-10 backdrop-filter backdrop-blur"
        @click="addToWishList()"
        >
        <img class="wish-btn-img w-3.5 h-3.5 m-auto" />
      </button>-->
    </div>
    <div class="flex-grow flex flex-col h-55">
      <div class="p-4 flex-grow">
        <p class="font-medium text-base leading-5 text-mainBlack mb-2 w-full cursor-pointer" @click="linkTo('card')">
          {{ truncate(card.title,40) }}
        </p>
        <p class="font-medium text-xs text-greyText truncate mb-2 cursor-pointer" @click="linkTo('author')">
          {{ card.author }}
        </p>
        <div class="flex items-center">
          <span class="font-bold text-xs leading-3 text-yellowBrand ">{{ getRating() }}</span>
          <svg v-for="i in 5" :key="i" :class="i <= getRating() ? 'text-yellowBrand' : 'text-greySecondary'" class="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.133 20.333c-1.147.628-2.488-.387-2.269-1.718l.739-4.488-3.13-3.178c-.927-.943-.415-2.585.867-2.78l4.324-.654 1.934-4.083a1.536 1.536 0 0 1 2.804 0l1.934 4.083 4.324.655c1.282.194 1.794 1.836.866 2.78l-3.129 3.177.739 4.488c.219 1.331-1.122 2.346-2.269 1.718L12 18.214l-3.867 2.119z" fill-rule="evenodd"/>
          </svg>
          <span class="font-normal text-xs text-greyText">({{ card.ratingCount }})</span>
        </div>
      </div>
      <div class="px-4 pb-4 pt-3.5 border-t border-greyBorder flex-none">
        <div class="flex items-center mb-2 h-5" v-if="isDiscounted()">
          <span class="line-through font-normal text-sm text-greyText h-full" 
          v-if="isDiscounted()">{{getOriginalPrice()}}</span>
          <span class="ml-1 py-1 pr-1 pl-2 bg-contain bg-center bg-no-repeat font-normal text-xs leading-normal text-gray-50"
          v-if="isDiscounted()" :style="backgroundImage('assets/icons/tag.svg')"
          >
            {{getDiscount()}}%
          </span>
        </div>
        <button class="card-btn card-btn-sm" :disabled="card.enabled==false" :class="getButtonColor()"
          @click="addToCart()">
          <img v-if="forSale()" class="my-auto" :src="getURL('assets/icons/basket.svg')" alt=""/>
          <span class="my-auto">{{printPrice()}}</span>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['card','index','size','visibleWidth','bus','cartItems'],
  data() {
    return {
      cardCardAdditionalClasses: '',
      cardCardAdditionalStyles: '',
    }
  },
  created() {
    this.bus.$on('windowResized', this.windowResizeHandler)
    this.windowResizeHandler()
    try{
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
      this.card.enrolled = (this.card.enrolled!=null)?true:false;
    }catch(error){
      //ignore, original image will be loaded
    }
    window.addEventListener("resize", this.windowResizeHandler);
  },
  mounted(){
    
  },
  destroyed() {
    window.removeEventListener("resize", this.windowResizeHandler);
  },
  methods:{
      getImageAlt: function(){
          if(this.card.imageAlt)
            return this.card.imageAlt
          else
            return this.card.title
      },
      getImageThumbnail: function(){
        return /*options.uploadsURL+"/"+*/this.card.imageURL
      },
      getURL: function(address){
          //console.log(templateDirectory +"/"+ address);
          return /*templateDirectory +"/"+*/ address;
      },
      backgroundImage: function(address){
        return "background-image: url('"+this.getURL(address)+"');"
      },
      getOriginalPrice: function(){
        return this.addCurrency(
          this.prettyNumber(this.card.regularPrice)
        )
      },
      printPrice: function(){
        //console.log("includes: "+this.cartItems.includes(this.card.id))
        if(this.card.enrolled)
          return msg.goToCard
        else if(this.cartItems.includes(this.card.id))
          return msg.viewCart
        else if(this.card.price==0)
          return msg.free
        else
          return this.addCurrency(
            this.prettyNumber(this.card.price)
          )
      },
      getButtonColor: function(){
        if(this.card.enrolled || this.card.price==0)
          return 'card-btn-green'
        else if(this.cartItems.includes(this.card.id))
          return 'card-btn-blue-outline' 
        else
          return 'card-btn-blue'
      },
      prettyNumber: (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      },
      addCurrency: function(number){
        var res = ''
        if(!options.currency.afterNumber)
          res += options.currency.value+" "
        res += number
        if(options.currency.afterNumber)
          res += " "+options.currency.value
        return res
      },
      isDiscounted: function(){
        return !this.card.enrolled && !this.cartItems.includes(this.card.id) && this.getDiscount()>0 && this.getDiscount()<100
      },
      truncate: function(title,ml){
        var r = title/*.substring(0,ml);
        if(title.length>ml)
          r=r+"..."*/
        return r
      },
      setCardSizes:function(){
        if(this.visibleWidth>=544){
          //tablet and above
          this.cardCardAdditionalClasses = 'w-64 max-w-64'
          this.cardCardAdditionalStyles = ''
        }else{
          //mobile
          var cw = this.visibleWidth-32-32;
          this.cardCardAdditionalClasses = ''
          this.cardCardAdditionalStyles = 'width: '+cw+'px; '+'max-width: '+cw+'px;';
        }
      },
      windowResizeHandler(e) {
        //this.visibleWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
        this.setCardSizes()
        //console.log(this.visibleWidth)
        //console.log('handler called...')
      },
      gap: function(size){
        if(this.index<this.size-1)
          return 'mr-8'
      },
      getDiscount: function(){
        return Math.round(100-100*this.card.price/this.card.regularPrice)
      },
      getRating: function(){
        var r = 0
        if(this.card.ratingCount!=0)
          r = this.card.ratingSum/this.card.ratingCount
        // checking due to adding faker library
        if(r>5)
          r = 5
        return Number(r).toFixed(2)
      },
      getIndicesOf: function(searchStr, str, caseSensitive) {
        var searchStrLen = searchStr.length;
        if (searchStrLen == 0) {
            return [];
        }
        var startIndex = 0, index, indices = [];
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
      addToWishList: function(){
        //to do
      },
      addToCart: function(){
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
        this.$emit('card-button-pressed',this.card.id)
      },
      linkTo: function(where){
        //to do
        var link = '#'
        if(where=='card'){
          link = options.locale + "/cards/" + this.card.link
        }else{
          link = options.locale + "/profile/" + this.card.author_id 
        }
        //console.log(link)
        window.open(link, '_blank').focus();
      },
      forSale: function(){
        return (!this.card.enrolled 
        && (this.card.price>0 && this.getDiscount()<100) 
        && !this.cartItems.includes(this.card.id))
      },
  }
}
</script>