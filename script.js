const searchBox = document.getElementById('search-box')

const websites = jsyaml.load(yamlData)

const transformFunctions = {
  slugify: slugify,
  identity: (x) => x,
}

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')        // Remove all non-word chars
    .replace(/--+/g, '-')           // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '')             // Trim - from end of text
}


function updateURL(event) {
  let id = event.target.dataset.id
  let website = websites[id]
  let transform = website.function ? transformFunctions[website.function] : transformFunctions.identity
  let url = website.URLTemplate.replace('{}', encodeURI(transform(searchBox.value)))
  event.target.href = url
}

function fillPage() {
  pushIds(websites)
  let websitesByTag = groupByTag(websites)

  for (let tag in websitesByTag) {
    let tagText = document.createTextNode(tag)
    let span = document.createElement('span')
    span.appendChild(tagText)
    let ul = document.createElement('ul')

    for (let website of websitesByTag[tag]) {
      let linkText = document.createTextNode(website.name)

      let a = document.createElement('a')
      a.dataset.id = website.id
      a.href = '#'
      a.appendChild(linkText)

      a.addEventListener('mouseenter', updateURL, { 'capture': true })

      let li = document.createElement('li')
      li.appendChild(a)

      ul.appendChild(li)
    }

    let websitesBox = document.getElementById("websites-box")
    websitesBox.appendChild(span)
    websitesBox.appendChild(ul)
  }
}

function groupByTag(objects) {
  let tags = {}
  for (let obj of objects) {
    for (let tag of obj["tags"]) {
      if (tag in tags) {
        tags[tag].push(obj)
      } else {
        tags[tag] = [obj]
      }
    }
  }
  return tags
}

function pushIds(list) {
  // Given a list of objects, add the index as 'id' to each object
  // Updates the list in place
  for (let [index, el] of list.entries()) {
    el['id'] = index.toString()
  }
}

// main
fillPage()
