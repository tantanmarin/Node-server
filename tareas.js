const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function agregarTarea() {
  rl.question('Indicador de la tarea: ', (indicador) => {
    rl.question('Descripción de la tarea: ', (descripcion) => {
      tareas.push({ indicador, descripcion, completada: false });
      mostrarTareas();
      rl.close();
    });
  });
}

function eliminarTarea() {
  rl.question('Indicador de la tarea a eliminar: ', (indicador) => {
    const index = tareas.findIndex(tarea => tarea.indicador === indicador);
    if (index !== -1) {
      tareas.splice(index, 1);
      mostrarTareas();
    } else {
      console.log('No se encontró la tarea.');
    }
    rl.close();
  });
}

function completarTarea() {
  rl.question('Indicador de la tarea a completar: ', (indicador) => {
    const tarea = tareas.find(tarea => tarea.indicador === indicador);
    if (tarea) {
      tarea.completada = true;
      mostrarTareas();
    } else {
      console.log('No se encontró la tarea.');
    }
    rl.close();
  });
}

function mostrarTareas() {
  console.log('Lista de tareas:');
  tareas.forEach(tarea => {
    const estado = tarea.completada ? 'Completada' : 'No completada';
    console.log(`${tarea.indicador}: ${tarea.descripcion} - ${estado}`);
  });
}

rl.question('¿Qué función deseas ejecutar? (agregar/eliminar/completar): ', (respuesta) => {
  if (respuesta === 'agregar') {
    agregarTarea();
  } else if (respuesta === 'eliminar') {
    eliminarTarea();
  } else if (respuesta === 'completar') {
    completarTarea();
  } else {
    console.log('Función no reconocida.');
    rl.close();
  }
});
