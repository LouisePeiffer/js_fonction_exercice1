// Exo 1
let addition = (a,b) => {
    return a + b
}

let nb = addition(10, 5)
console.log(nb);

// Exo 2
let sous = (c,d) => {
    return c-d
}

let sousRes = sous(10, 5)
console.log(sousRes);

// Exo 3
let mult = (e,f) => {
    return e*f
}

let multip = mult(10, 5)
console.log(multip);

// Exo 4
let div = (g,h) => {
    return g/h
}

let division = div(10, 5)
console.log(division);

// Exo 5
let fonc = (el1, el2) => {
    return el1%el2
}

let foncDivRest = fonc(40, 17)
console.log(foncDivRest);

// Exo 6
let carre = (coucou) => {
    return coucou*coucou
}

let ress = carre(10)
console.log(ress);

// Exo 7
let expo = (salut, bitch) => {
    return Math.pow(salut, bitch)
}

let etDoonc = expo(3,6)
console.log(etDoonc);

// Exo 8
let cap = (hey) => {
    return hey.charAt(0).toUpperCase() + hey.slice(1).toLowerCase() 
}
let dascap = cap("salUt")
console.log(dascap);

// Exo 9
let chi = prompt('Un nombre?')
let op = prompt('* - + /')
let chi2 = prompt('Un autre nombre?')
let calcul = (a,b,c) => {
    console.log(a);
    console.log(b);
    console.log(c);
    switch (b) {
        case '-':
            return a-c
        case '*':
            return a*c
        case '/':
            return a/c
        case '+':
            return a+c
            break;
    
        default:
            return alert('No bueno')
            break;
    }
}
console.log(calcul(chi,op,chi2));