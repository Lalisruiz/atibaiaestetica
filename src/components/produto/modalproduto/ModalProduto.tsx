import React from 'react';
import { Produto } from '../../../models/Produto';

interface ModalProdutoProps {
  produto: Produto;
  isOpen: boolean;
  onClose: () => void;
}

const ModalProduto: React.FC<ModalProdutoProps> = ({ produto, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full mx-4 max-h-screen overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{produto.nome}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Descrição
            </h3>
            <p className="mt-1 text-gray-900">{produto.descricao}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Preço
            </h3>
            <p className="mt-1 text-2xl font-bold text-green-600">
              R$ {produto.preco?.toFixed(2)}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Categoria
            </h3>
            <span className="mt-1 inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {produto.categoria?.nome}
            </span>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded font-medium transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalProduto;