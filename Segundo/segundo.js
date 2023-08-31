const usuarios = [
    { nombre: "Juan", edad: 20 },
    { nombre: "Pedro", edad: 18 },
    { nombre: "María", edad: 25 },
    { nombre: "Luis", edad: 22 },
    { nombre: "Ana", edad: 19 },
    { nombre: "José", edad: 21 },
    { nombre: "Carmen", edad: 26 },
    { nombre: "David", edad: 17 },
    { nombre: "Marta", edad: 23 },
];

const filtrarMayoresEdad = (usuario) => {
    return usuario.edad >= 18;
};

const mayoresEdad = usuarios.filter(filtrarMayoresEdad);

console.log("Usuarios originales:");
console.log(usuarios);
console.log("Usuarios mayores de edad:");
console.log(mayoresEdad);