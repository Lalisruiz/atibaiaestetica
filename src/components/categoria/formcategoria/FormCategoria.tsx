import React, { useState } from 'react';
import { Categoria } from '../../../models/Categoria';

interface FormCategoriaProps {
  categoria?: Categoria;
  onSubmit: (categoria: Categoria) => void;
  onCancel: () => void;
}

const FormCategoria: React.FC<FormCategoriaProps> = ({ categoria, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Categoria>({
    id: categoria?.id || 0,
    nome: categoria?.nome || '',
    descricao: categoria?.descricao || ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {categoria ? 'Editar Categoria' : 'Cadastrar Categoria'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
            Nome da Categoria
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
            {categoria ? 'Atualizar' : 'Cadastrar'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCategoria;