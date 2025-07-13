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
      fetch('paginaInicio/Modal/ModalCom.html')
        .then(res => res.text())
        .then(html => {
          const contenedor = document.createElement('div');
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