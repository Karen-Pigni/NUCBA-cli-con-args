const { read, update, append, popLast, eraseOne } = require("./crud");

console.clear();

append()

//nota: correrlo en consola con args si se quiere hacer append:
// node index --user='{"user":"pam","category":4,"address":"Cabildo 26"}'


//para correr las funciones:
//npm i -g run-func
//aggregar al package.json:
//    "append":  "run-func crud.js append"