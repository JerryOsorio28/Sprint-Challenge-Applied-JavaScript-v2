// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const article = 'article'
const index = 'index'

const tabs = document.querySelector('.card')
console.log(tabs)

axios.get('https://lambda-times-backend.herokuapp.com/articles/')
.then (data => {
    const articles = data.data.articles
    // console.log(data.data.articles)

    articles.forEach(data => {
        //----- Create a new element
        const newArticle = Cards(data)
        console.log(newArticle)
        //----- Give element content
     
        //----- Append element in correct location
        
    
            // console.log(tabs)
        })


})
.then (data => {
    // console.log('try again')
})

function Cards (){
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');
//---------------------------setup structure of elements
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)
//---------------------------set class names
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
//---------------------------set text content
    headline.textContent = '{Headline of article}'  
    // img.src = `data.data.articles.${article}.${index}.authorPhoto`

return card
}

Cards();