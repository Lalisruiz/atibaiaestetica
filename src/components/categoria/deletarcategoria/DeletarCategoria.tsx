import React from 'react';
import { Categoria } from '../../../models/Categoria';

interface DeletarCategoriaProps {
  categoria: Categoria;
  onConfirm: (categoria: Categoria) => void;
  onCancel: () => void;
}

const DeletarCategoria: React.FC<DeletarCategoriaProps> = ({ categoria, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Confirmar Exclusão</h2>
          <p className="text-gray-600">
            Tem certeza que deseja excluir a categoria "{categoria.nome}"?
          </p>
          <p className="text-sm text-red-600 mt-2">
            Esta ação não pode ser desfeita e todos os produtos desta categoria serão afetados.
          </p>
        </div>
        
        <div className="flex space-x-3">
          <button
            onClick={onCancel}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded font-medium transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={() => onConfirm(categoria)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded font-medium transition-colors"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletarCategoria;