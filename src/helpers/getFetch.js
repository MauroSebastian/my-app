let productos = [
    {
      id: '1',
      nombre: 'Harry Potter',
      descripcion: 'Zafa',
      price: '$ 500',
      stock: 5,
      img: 'https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.jpg'
    },
    {
      id: '2',
      nombre: 'El Señor de los Anillos',
      descripcion: 'Está bien',
      price: '$ 650',
      stock: 5,
      img: 'https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.jpg'
    },
    {
      id: '3',
      nombre: 'Una Historia sin Fin',
      descripcion: 'Bueno',
      price: '$ 950',
      stock: 5,
      img: 'https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.jpg'
    },
    {
      id: '4',
      nombre: 'Historia Argentina',
      descripcion: 'Resumen',
      price: '$ 650',
      stock: 5,
      img: 'https://http2.mlstatic.com/D_NQ_NP_722711-MLA42906730908_072020-O.jpg'
    },
  ];

export const getFetch = () => {
    return new Promise((resolve)=>{
       //acciones
       setTimeout(() => {
         resolve(productos)
       }, 2000)
       } )
   
   }