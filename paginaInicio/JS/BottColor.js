(() => {
const imagenes = [
    'https://i.pinimg.com/originals/55/45/8b/55458b0aab3b8ddaf284dbfcb403f205.jpg',
    'https://th.bing.com/th?id=OIF.v%2fDCi%2fGh%2bJQcExhIEAtsqg&r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
    'https://tse4.mm.bing.net/th/id/OIP.tn62VZScBBvKdbdRJjZBFwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
  
];

document.querySelectorAll('.colorBtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const idSeleccionado = e.currentTarget.id;
    const idNumerico = parseInt(e.currentTarget.id, 10);
    console.log('ID clickeado:', idSeleccionado);
    console.log('ID num:', idNumerico);
    index = (idNumerico - 1) % imagenes.length;
    document.getElementById('ProdColor').src = imagenes[index];
  });
});

})();