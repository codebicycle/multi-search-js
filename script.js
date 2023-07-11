const stores = {
  "1": {"name": "dedeman.ro", "query": (searchTerm) => `https://beta.dedeman.ro/catalogsearch/result/v2/?q=${searchTerm}`},
  "2": {"name": "leroymerlin.ro", "query": (searchTerm) => `https://www.leroymerlin.ro/produse/search/${searchTerm}`},
  "3": {"name": "bricodepot.ro", "query": (searchTerm) => `https://www.bricodepot.ro/catalogsearch/result/?q=${searchTerm}`},
  "4": {"name": "mathaus.ro", "query": (searchTerm) => `https://mathaus.ro/search?pb=true&text=${searchTerm}`},
  "5": {"name": "hornbach.ro", "query": (searchTerm) => `https://www.hornbach.ro/s/${searchTerm}`},
}

const searchBox = document.getElementById('search')


function changeURL(event) {
  let searchTerm = encodeURI(searchBox.value)
  id = event.target.id
  queryFunc = stores[id]["query"]
  event.target.href = queryFunc(searchTerm)
}


function populate(stores) {
  ul = document.getElementById("stores")
  for (let id in stores) {
    let linkText = document.createTextNode(stores[id]["name"])

    let a = document.createElement('a')
    a.id = id
    a.href = '#'
    a.appendChild(linkText)

    a.addEventListener('click', changeURL, {'capture': true})

    let li = document.createElement('li')
    li.appendChild(a)

    ul.appendChild(li)
  }
}

populate(stores)