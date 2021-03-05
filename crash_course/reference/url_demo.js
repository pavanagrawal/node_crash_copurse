const url = require('url')

const myUrl = new URL("http://www.bioiq.com/hello.html?id=34223&status=active")

// Serialized URL
console.log(myUrl)
console.log(myUrl.href)

console.log(myUrl.search)

console.log(myUrl.searchParams)

myUrl.searchParams.append('abcd', '2122')

console.log(myUrl.searchParams)

myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))
