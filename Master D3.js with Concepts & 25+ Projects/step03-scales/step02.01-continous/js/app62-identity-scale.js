// d3.scaleIdentity()
let identityScale = d3.scaleIdentity();
console.log('identityScale', identityScale)
console.log('identityScale.domain()', identityScale.domain())
console.log('identityScale.range()', identityScale.range())

// domain is linked to range
identityScale.domain([10, 100])
console.log('identityScale.domain()', identityScale.domain())
console.log('identityScale.range()', identityScale.range())

identityScale.domain([20, 40])
console.log('identityScale.domain()', identityScale.domain())
console.log('identityScale.range()', identityScale.range())