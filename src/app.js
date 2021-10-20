console.log("Merhaba kodlama io.")


//JS type safe değildir
let dolarBugun =9.30

let dolarDun = 9.20
{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 // bu yapılmaz çünkü const sadece bir sabit değer tutar
console.log(euroDun)

//array
//camelCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for(let i = 0 ; i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")
