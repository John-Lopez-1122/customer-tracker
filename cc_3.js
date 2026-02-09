let customer = [            // Array
    ["Joe","Joe@joemail.joe", [112.23, 72.65, 165.33]],
    ["Twilight","sparkle@equestriamail.magic", [98.71, 238.97, 64.72]],
    ["Celestia","Celestia@royalmail.queen", [98.37, 49.83, 247.98]]
]

customer.forEach(element => {
    const name = element[0]
    const email = element[1]
    const orders = element[2]

    console.log(`${name} | ${email} | Orders: ${orders}`)
});

customer.push(["Trevor", "TPIndustries.eyefind.info", [78.28, 276.12, 33.12]]) // change
customer.shift()

customer[0][1] = ("sparkle@royalmail.queen") // email change

customer[2][2].push(612.23) // New purchase

customer.forEach(element => {
    const name = element[0]
    const email = element[1]
    const orders = element[2]

    console.log(`${name} | ${email} | Amount of orders: ${orders.length}`)
});