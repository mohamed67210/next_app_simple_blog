 var domain;
 export const SECRET_KEY= "helloword"

// dans le cas ou le site est deja mis en ligne
if (process.env.NODE_ENV === "production") {
    // on met le nom de domain ici
    
} else {
    domain ='http://localhost:3000/api'
}

export default  domain;
