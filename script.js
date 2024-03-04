const stores = [
  { "name": "compari.ro", "query": (keyword) => `https://www.compari.ro/CategorySearch.php?st=${keyword}`, "tags": ["compare"] },
  { "name": "price.ro", "query": (keyword) => `https://www.price.ro/index.php?action=q&text=${keyword}&submit=Cauta`, "tags": ["compare"] },
  { "name": "hagglezon.com", "query": (keyword) => `https://www.hagglezon.com/en/s/${keyword}`, "tags": ["compare"] },

  { "name": "dedeman", "query": (keyword) => `https://www.dedeman.ro/ro/catalogsearch/result/v2?q=${keyword}`, "tags": ["DIY"] },
  { "name": "leroymerlin", "query": (keyword) => `https://www.leroymerlin.ro/produse/search/${keyword}`, "tags": ["DIY"] },
  { "name": "bricodepot", "query": (keyword) => `https://www.bricodepot.ro/catalogsearch/result/?q=${keyword}`, "tags": ["DIY"] },
  { "name": "mathaus", "query": (keyword) => `https://mathaus.ro/search?pb=true&text=${keyword}`, "tags": ["DIY"] },
  { "name": "hornbach", "query": (keyword) => `https://www.hornbach.ro/s/${keyword}`, "tags": ["DIY"] },

  { "name": "olx Iasi", "query": (keyword) => `https://www.olx.ro/iasi_39939/q-${keyword}`, "tags": ["marketplace"] },

  { "name": "emag", "query": (keyword) => `https://www.emag.ro/search/${keyword}`, "tags": ["e-store"] },
  { "name": "altex", "query": (keyword) => `https://altex.ro/cauta/?q=${keyword}`, "tags": ["e-store"] },

  { "name": "hotukdeals", "query": (keyword) => `https://www.hotukdeals.com/search?q=${keyword}`, "tags": ["deals"] },
  { "name": "mydealz", "query": (keyword) => `https://www.mydealz.de/search?q=${keyword}`, "tags": ["deals"] },

  { "name": "hotukdeals travel", "query": (keyword) => `https://www.hotukdeals.com/tag/travel`, "tags": ["travel deals"] },
  { "name": "mydealz travel", "query": (keyword) => `https://www.mydealz.de/gruppe/reisen`, "tags": ["travel deals"] },

  { "name": "printre carti", "query": (keyword) => `https://www.printrecarti.ro/?cauta=${keyword}`, "tags": ["anticariat"] },
  { "name": "targul cartii", "query": (keyword) => `https://www.targulcartii.ro/cauta/${keyword}`, "transform": slugify, "tags": ["anticariat"] },
  { "name": "anticexlibris", "query": (keyword) => `https://www.anticexlibris.ro/produse/categorie?cid=-1&q=${keyword}`, "tags": ["anticariat"] },
  { "name": "anticariat-doamnei", "query": (keyword) => `https://anticariat-doamnei.com/search/?q=${keyword}`, "tags": ["anticariat"] },
  { "name": "anticariat-ursu", "query": (keyword) => `https://anticariat-ursu.ro/index.php?route=product/search&search=${keyword}`, "tags": ["anticariat"] },
  { "name": "anticariat.net", "query": (keyword) => `https://www.anticariat.net/cautare-rezultate.php?t=${keyword}`, "tags": ["anticariat"] },
  { "name": "casa literelor", "query": (keyword) => `https://www.casaliterelor.ro/searchanise/result?q=${keyword}`, "tags": ["anticariat"] },
  { "name": "anticariat-unu", "query": (keyword) => `https://www.anticariat-unu.ro/cautare?keyword=${keyword}`, "tags": ["anticariat"] },
  { "name": "carti-online", "query": (keyword) => `https://www.carti-online.ro/?s=${keyword}&search_id=product&post_type=product`, "tags": ["anticariat"] },
]

const searchBox = document.getElementById('search-box')

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w-]+/g, '')        // Remove all non-word chars
        .replace(/--+/g, '-')           // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '')             // Trim - from end of text
    }

function changeURL(event) {
  let id = event.target.dataset.id
  let queryFunc = stores[id]["query"]
  let transform = stores[id]["transform"] || ((x) => x)
  let keyword = encodeURI(transform(searchBox.value))
  event.target.href = queryFunc(keyword)
}

function populate(stores) {
  pushIds(stores)
  let tags = storesToTags(stores)

  for (let tag in tags) {
    let tagText = document.createTextNode(tag)
    let span = document.createElement('span')
    span.appendChild(tagText)
    let ul = document.createElement('ul')

    for (let store of tags[tag]) {
      let linkText = document.createTextNode(store["name"])

      let a = document.createElement('a')
      a.dataset.id = store["id"]
      a.href = '#'
      a.appendChild(linkText)

      a.addEventListener('mouseenter', changeURL, { 'capture': true })

      let li = document.createElement('li')
      li.appendChild(a)

      ul.appendChild(li)
    }

    let storesBox = document.getElementById("stores-box")
    storesBox.appendChild(span)
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
