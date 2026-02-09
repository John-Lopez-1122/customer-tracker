let customer = [            // Array
    ["Joe"],
    ["Joe@joemail.joe"],
    [112.23, 72.65, 165.33]

]

console.log(`Name: ${customer[0]}`) // Console show
console.log(`Email: ${customer[1]}`)
console.log(`Purchase: ${customer[2][0]}`)

customer[0].push("Trevor") // Name change
customer[0].shift()