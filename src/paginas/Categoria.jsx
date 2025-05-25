import { useParams } from 'react-router-dom';
import ListaProductos from '../components/listados/ListaProductos';
import productosMock from '../utils/productosMock';
import './Categoria.css';

const categoriasMap = {
  'cover-duvets': 'Cover duvets',
  'cubiertos': 'Cubiertos',
  'lampara-velas': 'Lámpara de velas',
  'alfombras': 'Alfombras lavables',
  'vajillas': 'Vajillas',
  'accesorios': 'Accesorios',
  'lamparas': 'Lámparas',
  'lentes': 'Lentes',
  'gorras': 'Gorras',
  'ofertas': 'Ofertas Especiales'
};

const Categoria = () => {
  const { id } = useParams();
  const nombreCategoria = categoriasMap[id] || id;

  let productosFiltrados = productosMock.filter(p => p.categoria === id);

  if (id === 'ofertas') {
    productosFiltrados = productosMock.filter(p => p.oferta && p.oferta !== '');
  }

  return (
    <div className="categoria-page">
      <h1 className="categoria-titulo">{nombreCategoria}</h1>
      {productosFiltrados.length > 0 ? (
        <>
          <p className="categoria-descripcion">
            {id === 'ofertas' 
              ? 'Encuentra las mejores ofertas y liquidaciones en productos seleccionados'
              : `Explora nuestra selección de ${nombreCategoria.toLowerCase()}`
            }
          </p>
          <ListaProductos productos={productosFiltrados} />
        </>
      ) : (
        <div className="mensaje-vacio">No hay productos en esta categoría por el momento.</div>
      )}
    </div>
  );
};

export default Categoria; 