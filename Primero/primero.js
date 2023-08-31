
const tareas = [];

tareas.unshift("Tarea 1");
tareas.unshift("Tarea 2");
tareas.unshift("Tarea 3");

console.log("Lista antes del procesamiento:", tareas);


while (tareas.length > 0) {
    const tarea = tareas.shift();
    console.log("Procesando la tarea:", tarea);
}

console.log("Lista después del procesamiento:", tareas);