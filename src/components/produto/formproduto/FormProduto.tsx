import React, { useState, useEffect } from 'react';
import { Produto } from '../../../models/Produto';
import { Categoria } from '../../../models/Categoria';

interface FormProdutoProps {
  produto?: Produto;
  categorias: Categoria[];
  onSubmit: (produto: Produto) => void;
  onCancel: () => void;
}

const FormProduto: React.FC<FormProdutoProps> = ({ produto, categorias, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Produto>({
    id: produto?.id || 0,
    nome: produto?.nome || '',
    descricao: produto?.descricao || '',
    preco: produto?.preco || 0,
    categoria: produto?.categoria || null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'categoria') {
      const selectedCategoria = categorias.find(cat => cat.id === parseInt(value));
      setFormData(prev => ({
        ...prev,
        categoria: selectedCategoria || null
      }));
    } else if (name === 'preco') {
      setFormData(prev => ({
        ...prev,
        [name]: parseFloat(value) || 0
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {produto ? 'Editar Produto' : 'Cadastrar Produto'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome do Produto
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
            Descrição
          </label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="preco" className="block text-sm font-medium text-gray-700 mb-1">
            Preço (R$)
          </label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={formData.preco}
            onChange={handleChange}
            min="0"
            step="0.01"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
            Categoria
          </label>
          <select
            id="categoria"
            name="categoria"
            value={formData.categoria?.id || ''}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map(categoria => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <div className="flex space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded font-medium transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-medium transition-colors"
          >
            {produto ? 'Atualizar' : 'Cadastrar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormProduto;