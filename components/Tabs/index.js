// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topicsClass = document.querySelector('.topics')

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(data => {
//-------------------------------------- Target articles
    const trendingTopicsTabs = data.data.topics
    //  console.log(data.data.topics[0])  
//-------------------------------------- Target specific article on the list with a forEach loop
    trendingTopicsTabs.forEach(data => {
    //---------------------------------- Create a new topic
    const topics = Topics(data)
    //---------------------------------- Append topic in correct location
    topicsClass.appendChild(topics)
    })
})
.catch(data => {
    // console.log ('try again')
})

function Topics () {
    const tab = document.createElement('div')
    const javascript = document.createElement('a')
    const bootstrap = document.createElement('a')
    const technology = document.createElement('a')
    const jquery = document.createElement('a')
    const nodeJs = document.createElement('a')
//---------------------------setup structure of elements
    topicsClass.appendChild(javascript)
    topicsClass.appendChild(bootstrap)
    topicsClass.appendChild(technology)
    topicsClass.appendChild(jquery)
    topicsClass.appendChild(nodeJs)
//---------------------------set classes
    javascript.classList.add('tab')
    bootstrap.classList.add('tab')
    bootstrap.classList.add('tab')
    technology.classList.add('tab')
    jquery.classList.add('tab')
    nodeJs.classList.add('tab')
//---------------------------set text content
    javascript.textContent = 'Javascript'
    bootstrap.textContent = 'Bootstrap'
    technology.textContent = 'Technology'
    jquery.textContent = 'JQuery'
    nodeJs.textContent = 'NodeJs'
}
