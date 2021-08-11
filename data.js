var templateDirectory = ''
var options = {
    currency: {
        afterNumber: true,
        value: '₽',
    },
    locale: 'ru',
    uploadsURL: '',
}

var isFrontPage = true;

var msg = {
    goToCard: 'Continue Card',
    free: 'Free',
    viewCart: 'View Cart'
}

var common = {
    cartItems: []
}
var cardsArray = []

var size = Math.floor(Math.random() * (50 - 5) ) + 5;
for(var i=1;i<size+1;i++){
    cardsArray.push(
        {
            id:i,
            title:faker.commerce.productName(),
            link:faker.lorem.slug(),
            author_id:faker.datatype.string(),
            author:faker.commerce.productDescription(),
            price:faker.commerce.price(),
            regularPrice:faker.commerce.price(),
            imageURL:"https://picsum.photos/id/"+i+"/200/300",
            enrolled:null,
            ratingSum:faker.datatype.float(),
            ratingCount:faker.datatype.number()
        }
    )
}