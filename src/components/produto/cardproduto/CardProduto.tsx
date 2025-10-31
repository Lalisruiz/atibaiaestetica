import React from 'react';
import { Produto } from '../../../models/Produto';

interface CardProdutoProps {
  produto: Produto;
  onEdit?: (produto: Produto) => void;
  onDelete?: (produto: Produto) => void;
}

const CardProduto: React.FC<CardProdutoProps> = ({ produto, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{produto.nome}</h3>
        <p className="text-gray-600 text-sm mt-1">{produto.descricao}</p>
      </div>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-green-600">
          R$ {produto.preco?.toFixed(2)}
        </span>
      </div>
      
      <div className="mb-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
          {produto.categoria?.nome}
        </span>
      </div>
      
      <div className="flex space-x-2">
        {onEdit && (
          <button
            onClick={() => onEdit(produto)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
          >
            Editar
          </button>
        )}
        {onDelete && (
          <button
            onClick={() => onDelete(produto)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors"
          >
            Excluir
          </button>
        )}
      </div>
    </div>
  );
};

export default CardProduto;