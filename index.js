let { name, email } = { name: "Jordan", email: "a1020805@idat.edu.pe" }

console.log(name) 
console.log(email)

let { name2, email2, ...rest} = { name2: "Jordan", email2: "a1020805@idat.edu.pe", city: "LIMA", state: "LIMA",
country: "PERU"};

console.log(name2) 
console.log(email2)
console.log(rest);

