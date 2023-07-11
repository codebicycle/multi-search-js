const stores = [
  {"name": "dedeman.ro", "query": (searchTerm) => `https://www.dedeman.ro/ro/catalogsearch/result/v2?q=${searchTerm}`, "tags": ["DIY"]},
  {"name": "leroymerlin.ro", "query": (searchTerm) => `https://www.leroymerlin.ro/produse/search/${searchTerm}`, "tags": ["DIY"]},
  {"name": "bricodepot.ro", "query": (searchTerm) => `https://www.bricodepot.ro/catalogsearch/result/?q=${searchTerm}`, "tags": ["DIY"]},
  {"name": "mathaus.ro", "query": (searchTerm) => `https://mathaus.ro/search?pb=true&text=${searchTerm}`, "tags": ["DIY"]},
  {"name": "hornbach.ro", "query": (searchTerm) => `https://www.hornbach.ro/s/${searchTerm}`, "tags": ["DIY"]},
]


const searchBox = document.getElementById('search-box')


function changeURL(event) {
  let searchTerm = encodeURI(searchBox.value)
  let id = event.target.dataset.id
  let queryFunc = stores[id]["query"]
  event.target.href = queryFunc(searchTerm)
}


function populate(stores) {
  pushIds(stores)
  let tags = storesToTags(stores)

  for (let tag in tags) {
    let tagText = document.createTextNode(tag)
    let h2 = document.createElement('h2')
    h2.appendChild(tagText)
    let ul = document.createElement('ul')
    
    for (let store of tags[tag]) {
      let linkText = document.createTextNode(store["name"])

      let a = document.createElement('a')
      a.dataset.id = store["id"]
      a.href = '#'
      a.appendChild(linkText)

      a.addEventListener('click', changeURL, {'capture': true})

      let li = document.createElement('li')
      li.appendChild(a)

      ul.appendChild(li)
    }

    let storesBox = document.getElementById("stores-box")
    storesBox.appendChild(h2)
    storesBox.appendChild(ul)
  }
}

function storesToTags(stores) {
  // Transpose the stores list to an object with tags as keys
  let tags = {}
  for (let store of stores) {
    for (let tag of store["tags"]) {
      if (tag in tags) {
        tags[tag].push(store)
      } else {
        tags[tag] = [store]
      }
    }
  }
  return tags
}

function pushIds(list) {
  // Add the array index to the composing objects as 'id'
  for (let [index, el] of list.entries()) {
    el['id'] = index.toString()
  }
}

// main
populate(stores)
