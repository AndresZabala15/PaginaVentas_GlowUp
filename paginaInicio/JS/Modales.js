//Funciones abrir modal contactanos
(() => {
  document.getElementById(`abrirModal`).onclick =function(e){
    e.preventDefault();
    document.getElementById(`pestaña_modal_contacto`).style.display = `block`;
  }

  document.getElementById(`cerrarModal`).onclick =function(){
    document.getElementById(`pestaña_modal_contacto`).style.display = `none`;
  }

  window.onclick = function(event){
    if(event.target == document.getElementById(`pestaña_modal_contacto`)){
      document.getElementById(`pestaña_modal_contacto`).style.display = `none`
    }
  }
})();

(() => {
  document.getElementById('abrirModalCompra').addEventListener('click', () => {
      fetch('paginaInicio/Modal/ModalCom.html')    // Esta línea toma la información del Html 
        .then(res => res.text())
        .then(html => {
          const contenedor = document.createElement('div');  // crea un modal donde se aplicara la inforamción del HTML
          contenedor.innerHTML = html;
          document.body.appendChild(contenedor);
          document.getElementById('PestañaModalCompras').style.display = 'block';
        

          document.getElementById(`cerrarModalCompra`).onclick =function(){
    document.getElementById(`PestañaModalCompras`).style.display = `none`;
  }

  window.onclick = function(event){
    if(event.target == document.getElementById(`PestañaModalCompras`)){
      document.getElementById(`PestañaModalCompras`).style.display = `none`
    }
  }
    });
  });
    
})();

  //funcion abrir modal mapa

  document.getElementById(`idModal_mapa`).onclick = function(e){
    e.preventDefault();
    document.getElementById(`modal_mapa`).style.display = `block`;
  }

  document.getElementById(`cerrarModal_mapa`).onclick = function(){
    document.getElementById(`modal_mapa`).style.display = `none`;
  }

window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal_mapa');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

//funcion abrir modal mapa footer

  document.getElementById(`idModal_mapa_footer`).onclick = function(e){
    e.preventDefault();
    document.getElementById(`modal_mapa`).style.display = `block`;
  }

  document.getElementById(`cerrarModal_mapa`).onclick = function(){
    document.getElementById(`modal_mapa`).style.display = `none`;
  }

window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal_mapa');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
  });