import React from 'react';
import { Categoria } from '../../../models/Categoria';
import CardCategoria from '../cardcategoria/CardCategoria';

interface ListaCategoriaProps {
  categorias: Categoria[];
  onEdit?: (categoria: Categoria) => void;
  onDelete?: (categoria: Categoria) => void;
}

const ListaCategoria: React.FC<ListaCategoriaProps> = ({ categorias, onEdit, onDelete }) => {
  if (categorias.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">Nenhuma categoria encontrada.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categorias.map(categoria => (
        <CardCategoria
          key={categoria.id}
          categoria={categoria}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ListaCategoria;