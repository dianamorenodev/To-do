//seleccion de elementos

//seleccionar un elemento de html
const input = document.querySelector("input");

//boton de agregar
const addBtn = document.querySelector(".btn-add");

//agregar (si se pone all luego de queryselector selecciona todo)
//Lista de elementos
const ul = document.querySelector("ul");

//lista vacia (mensaje de lista vacia)
const empty = document.querySelector(".empty")


//eventos (son las acciones que se hacen: modificar, agregar, eliminar)

//eventlistener se refiere a un llamado que esta pendiente de la actividad sobre el elemento para ejecutar algo
addBtn.addEventListener("click", (e) => {

  //impedir que se recargue la pagina al clickear el button
  e.preventDefault();

  //el valor de input se guarda dentro de text
  const text = input.value;
  //creamos un elemento tipo lista y lo guardanmos en li
  const li = document.createElement("li");
  //creamos un elemento p y lo guardamos en p
  const p = document.createElement("p");

  //guardamos el contenido de text dentro del p que creamos antes
  p.textContent = text;

  //el metodo appendchild se usa para trazar la ruta a meterse dentro del contenedor que guarda al hijo
  li.appendChild(p); //agregamos el elemento p a li
  ul.appendChild(li); //agregamos el elemento li a ul
  li.appendChild(addDeleteBtn()) //agregamos la funcion que creamos abajo
  input.value = "";
})

//funcion para eliminar li, p, txt
function addDeleteBtn() {
  //crear una constante que 
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  //crear evento
  deleteBtn.addEventListener("click", (e) => {

    const item = e.target.parentElement;
    ul.removeChild(item)
  })
  return deleteBtn;
};
