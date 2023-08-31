let usuarios = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 28 }
];

usuarios.forEach((usuario) => {
    usuario.edad++;
});

console.log(usuarios);