import React from 'react';
import { Categoria } from '../../../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
  onEdit?: (categoria: Categoria) => void;
  onDelete?: (categoria: Categoria) => void;
}

const CardCategoria: React.FC<CardCategoriaProps> = ({ categoria, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{categoria.nome}</h3>
        <p className="text-gray-600 text-sm mt-1">{categoria.descricao}</p>
      </div>
      
      <div className="flex space-x-2">
        {onEdit && (
          <button
            onClick={() => onEdit(categoria)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
          >
            Editar
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(categoria)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
          >
            Excluir
          </button>
        )}
      </div>
    </div>
  );
};

export default CardCategoria;