import React from 'react';
import { Produto } from '../../../models/Produto';
import CardProduto from '../cardproduto/CardProduto';

interface ListaProdutoProps {
  produtos: Produto[];
  onEdit?: (produto: Produto) => void;
  onDelete?: (produto: Produto) => void;
}

const ListaProduto: React.FC<ListaProdutoProps> = ({ produtos, onEdit, onDelete }) => {
  if (produtos.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500 text-lg">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {produtos.map(produto => (
        <CardProduto
          key={produto.id}
          produto={produto}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ListaProduto;