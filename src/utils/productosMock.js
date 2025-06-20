const productos = [
  {
    id: 1,
    nombre: 'Cover Duvet Minimalista Gris',
    precio: 1200,
    precioOriginal: 1200,
    imagen: 'https://m.media-amazon.com/images/I/71RvU9sfvbL.jpg',
    oferta: '',
    rating: 5,
    categoria: 'cover-duvets',
    descripcion: 'Funda de edredón en algodón premium, diseño minimalista en tono gris suave.'
  },
  {
    id: 2,
    nombre: 'Cover Duvet Rayas Azul y Blanco',
    precio: 980,
    precioOriginal: 1250,
    imagen: 'https://m.media-amazon.com/images/I/71zCLCEkleL.jpg',
    oferta: 'Oferta',
    rating: 4,
    categoria: 'cover-duvets',
    descripcion: 'Elegante funda con rayas azul marino y blanco, incluye fundas de almohada.'
  },
  {
    id: 3,
    nombre: 'Lámpara Candelabro Vintage',
    precio: 750,
    precioOriginal: 750,
    imagen: 'https://m.media-amazon.com/images/I/71KLKZorVSL._AC_UF894,1000_QL80_.jpg',
    oferta: '',
    rating: 4,
    categoria: 'lampara-velas',
    descripcion: 'Candelabro de metal envejecido con múltiples brazos, estilo vintage romántico.'
  },
  {
    id: 4,
    nombre: 'Portavelas Cristal Moderno',
    precio: 320,
    precioOriginal: 420,
    imagen: 'https://m.media-amazon.com/images/I/71OoWVBmabL.jpg',
    oferta: 'Oferta',
    rating: 5,
    categoria: 'lampara-velas',
    descripcion: 'Set de portavelas de cristal transparente con base dorada, diseño contemporáneo.'
  },
  {
    id: 5,
    nombre: 'Alfombra Persa Moderna',
    precio: 1800,
    precioOriginal: 1800,
    imagen: 'https://cdn.shopify.com/s/files/1/2394/4001/files/alfombras-espacios-modernos-1_480x480.jpg?v=1615819745',
    oferta: '',
    rating: 5,
    categoria: 'alfombras',
    descripcion: 'Alfombra persa moderna con diseño geométrico en tonos beige y azul, perfecta para salas y dormitorios.'
  },
  {
    id: 6,
    nombre: 'Sillón Blanco Acolchonado',
    precio: 1100,
    precioOriginal: 1400,
    imagen: 'https://i.ebayimg.com/thumbs/images/g/IWMAAOSwM9tn6Cz5/s-l1200.jpg',
    oferta: 'Oferta',
    rating: 4,
    categoria: 'muebles',
    descripcion: 'Elegante sillón blanco tapizado con botones, perfecto para sala de estar moderna.'
  },
  {
    id: 7,
    nombre: 'Vajilla Artesanal Terracota',
    precio: 1650,
    precioOriginal: 1650,
    imagen: 'https://static.vecteezy.com/system/resources/previews/014/444/466/large_2x/handmade-ceramic-crockery-made-of-clay-of-brown-terracotta-color-photo.jpg',
    oferta: '',
    rating: 5,
    categoria: 'vajillas',
    descripcion: 'Vajilla de 20 piezas en cerámica terracota, acabado mate y diseño rústico.'
  },
  {
    id: 8,
    nombre: 'Vajilla Porcelana Azul Cobalto',
    precio: 1350,
    precioOriginal: 1680,
    imagen: 'https://i.etsystatic.com/20783895/r/il/bd732f/5081666815/il_fullxfull.5081666815_nb6b.jpg',
    oferta: 'Liquidación',
    rating: 4,
    categoria: 'vajillas',
    descripcion: 'Elegante vajilla de porcelana con detalles en azul cobalto, 16 piezas.'
  },
  {
    id: 9,
    nombre: 'Cubiertos Acero Inoxidable Premium',
    precio: 890,
    precioOriginal: 890,
    imagen: 'https://m.media-amazon.com/images/I/811AqACe1OL._AC_UF894,1000_QL80_.jpg',
    oferta: '',
    rating: 5,
    categoria: 'cubiertos',
    descripcion: 'Set de 24 piezas en acero inoxidable pulido, diseño clásico y duradero.'
  },
  {
    id: 10,
    nombre: 'Cubiertos Vintage Dorados',
    precio: 650,
    precioOriginal: 850,
    imagen: 'https://cemacogt.vtexassets.com/arquivos/ids/362198/972625_1.jpg?v=638439139260670000?v=1766510859&width=227&height=192&aspect=true',
    oferta: 'Oferta',
    rating: 4,
    categoria: 'cubiertos',
    descripcion: 'Cubiertos con acabado dorado vintage, mangos ornamentados, 20 piezas.'
  },
  {
    id: 11,
    nombre: 'Lámpara Colgante Industrial',
    precio: 1450,
    precioOriginal: 1450,
    imagen: 'https://lyadesign.es/cdn/shop/products/Lampara-Industriale-Colgante-Grande.jpg?v=1722695195',
    oferta: '',
    rating: 5,
    categoria: 'lamparas',
    descripcion: 'Lámpara colgante estilo industrial con acabado en metal negro mate.'
  },
  {
    id: 12,
    nombre: 'Lámpara de Mesa Nórdica',
    precio: 780,
    precioOriginal: 950,
    imagen: 'https://store.forlight.com/1567-large_default/lampara-de-mesa-de-madera-y-textil-nuts.jpg',
    oferta: 'Liquidación',
    rating: 4,
    categoria: 'lamparas',
    descripcion: 'Lámpara de mesa con base de madera clara y pantalla de lino blanco.'
  },
  {
    id: 13,
    nombre: 'Lentes de Sol Aviador Clásico',
    precio: 850,
    precioOriginal: 850,
    imagen: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop&crop=center',
    oferta: '',
    rating: 5,
    categoria: 'lentes',
    descripcion: 'Lentes aviador con marco dorado y cristales polarizados, protección UV400.'
  },
  {
    id: 14,
    nombre: 'Lentes Redondos Retro',
    precio: 420,
    precioOriginal: 580,
    imagen: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop&crop=center',
    oferta: 'Oferta',
    rating: 4,
    categoria: 'lentes',
    descripcion: 'Lentes redondos estilo retro con marco de acetato negro y cristales ahumados.'
  },
  {
    id: 15,
    nombre: 'Gorra Snapback Urbana',
    precio: 380,
    precioOriginal: 380,
    imagen: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&h=500&fit=crop&crop=center',
    oferta: '',
    rating: 4,
    categoria: 'gorras',
    descripcion: 'Gorra snapback en negro con logo bordado, estilo urbano contemporáneo.'
  },
  {
    id: 16,
    nombre: 'Gorra Dad Hat Lavada',
    precio: 290,
    precioOriginal: 350,
    imagen: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&h=500&fit=crop&crop=center',
    oferta: 'Liquidación',
    rating: 3,
    categoria: 'gorras',
    descripcion: 'Gorra dad hat en tono lavado, ajuste cómodo y estilo relajado.'
  },
  {
    id: 17,
    nombre: 'Set de Escritorio Minimalista',
    precio: 420,
    precioOriginal: 420,
    imagen: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&h=500&fit=crop&crop=center',
    oferta: '',
    rating: 5,
    categoria: 'muebles',
    descripcion: 'Escritorio minimalista con espacio para laptop y accesorios, diseño moderno y funcional.'
  },
  {
    id: 18,
    nombre: 'Set de Accesorios para Gimnasio',
    precio: 180,
    precioOriginal: 240,
    imagen: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop&crop=center',
    oferta: 'Oferta',
    rating: 4,
    categoria: 'deportes',
    descripcion: 'Kit completo de ejercicio con mancuernas y accesorios para gimnasio en casa.'
  },
  {
    id: 19,
    nombre: 'Organizador de Joyería Giratorio',
    precio: 450,
    precioOriginal: 600,
    imagen: 'https://m.media-amazon.com/images/I/61SUfBBw6IL._AC_UF894,1000_QL80_.jpg',
    oferta: 'Oferta',
    rating: 5,
    categoria: 'accesorios',
    descripcion: 'Organizador giratorio de 3 niveles para joyería, con espejo y compartimentos.'
  },
  {
    id: 20,
    nombre: 'Set de Macetas Decorativas',
    precio: 320,
    precioOriginal: 400,
    imagen: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop&crop=center',
    oferta: '',
    rating: 4,
    categoria: 'accesorios',
    descripcion: 'Set de 3 macetas de cerámica en diferentes tamaños, ideales para plantas de interior.'
  },
  {
    id: 21,
    nombre: 'Portallaves Decorativo',
    precio: 280,
    precioOriginal: 350,
    imagen: 'https://m.media-amazon.com/images/I/71EHtYEIn8L._AC_UF894,1000_QL80_.jpg',
    oferta: '',
    rating: 4,
    categoria: 'accesorios',
    descripcion: 'Portallaves de pared con diseño moderno, incluye 6 ganchos y bandeja para objetos pequeños.'
  },
  {
    id: 22,
    nombre: 'Set de Cojines Decorativos',
    precio: 550,
    precioOriginal: 700,
    imagen: 'https://cloudfront.dico.com.mx/media/catalog/product/cache/e5313a059d82e47a0dd0c73b13afb6be/d/e/decorativo-moderna-cojin-decorativo-multicolor-mogri_dec84246s1-dcw-1.jpg',
    oferta: 'Oferta',
    rating: 5,
    categoria: 'accesorios',
    descripcion: 'Set de 4 cojines decorativos con diferentes diseños geométricos, fundas removibles.'
  },
  {
    id: 23,
    nombre: 'Organizador de Baño',
    precio: 380,
    precioOriginal: 450,
    imagen: 'https://hexibo.com/wp-content/uploads/2020/11/He91a2903b65c4b3aaa48c03684a316b4F.jpg',
    oferta: '',
    rating: 4,
    categoria: 'accesorios',
    descripcion: 'Organizador de baño con múltiples compartimentos, resistente al agua y fácil de limpiar.'
  },
  {
    id: 24,
    nombre: 'Espejo Decorativo Redondo',
    precio: 890,
    precioOriginal: 1100,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sqUiVbDN7t_Ev1N8z2WXGFdYy1fCf9QZ2w&s',
    oferta: 'Oferta',
    rating: 5,
    categoria: 'accesorios',
    descripcion: 'Espejo redondo con marco dorado, diámetro 60cm, perfecto para sala o dormitorio.'
  },
  {
    id: 25,
    nombre: 'Set de Velas Aromáticas',
    precio: 420,
    precioOriginal: 520,
    imagen: 'https://m.media-amazon.com/images/I/81z-g9rGkWL.jpg',
    oferta: '',
    rating: 4,
    categoria: 'accesorios',
    descripcion: 'Set de 3 velas aromáticas con diferentes fragancias, duración aproximada 30 horas cada una.'
  },
  {
    id: 26,
    nombre: 'Organizador de Escritorio',
    precio: 290,
    precioOriginal: 350,
    imagen: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&h=500&fit=crop&crop=center',
    oferta: '',
    rating: 4,
    categoria: 'accesorios',
    descripcion: 'Organizador de escritorio con múltiples compartimentos, ideal para papelería y accesorios.'
  }
];

export { productos as productosMock };
export default productos;