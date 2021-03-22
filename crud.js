const fs = require("fs");

// leer
const read = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      try {
        const parsedData = JSON.parse(data);
        console.log(parsedData);
      } catch (error) {
        console.log(error);
      }
    }
  });
};

// default del nuevo user a agregar:

const defaultUser = {
  user: "nuevo user",
  category: 3,
  address: "Encalada 12",
};

const passUser = JSON.stringify(defaultUser);
//extraer el argumento: destructuro el array, quiero el tercer param, puedo pasarle un valor default
const [, , arg3 = `${passUser}`] = process.argv;
const [, newUserToAdd = `${passUser}`] = arg3.split("=");
console.log(newUserToAdd); //pasar el mismo comando por la consola

//agregar un user:
const append = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      user.clientes.push(JSON.parse(newUserToAdd));
      fs.writeFile(
        "./clients/clients.json",
        JSON.stringify(user, null, 2),
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, "funciona!!");
          }
        }
      );
    }
  });
};

//borrar el último user!
const popLast = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      user.clientes.pop();
      fs.writeFile(
        "./clients/clients.json",
        JSON.stringify(user, null, 2),
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, "funciona!!");
          }
        }
      );
    }
  });
};

//elegir qué user borrar!
const eraseOne = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      user.clientes.splice(3, 1);
      fs.writeFile(
        "./clients/clients.json",
        JSON.stringify(user, null, 2),
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, "funciona!!");
          }
        }
      );
    }
  });
};

//modificar un user:
const update = () => {
  fs.readFile("./clients/clients.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const user = JSON.parse(data);
      user.clientes.splice(1, 1, {
        user: "nuevo user",
        category: 3,
        address: "Encalada 12",
      });
      fs.writeFile(
        "./clients/clients.json",
        JSON.stringify(user, null, 2),
        (err, success) => {
          if (err) {
            console.log(err);
          } else {
            console.log(success, "funciona!!");
          }
        }
      );
      console.log(user);
    }
  });
};

module.exports = { read, update, append, popLast, eraseOne };
