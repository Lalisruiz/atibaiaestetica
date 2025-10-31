import axios from 'axios';
import type { Produto } from '../models/Produto';
import type { Categoria } from '../models/Categoria';

// Configuração base do Axios
const api = axios.create({
  baseURL: 'http://localhost:8080/api', // Altere para a URL da sua API
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptors para tratamento de erros
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na API:', error);
    return Promise.reject(error);
  }
);

// Serviços para Produtos
export const produtoService = {
  // Buscar todos os produtos
  getAll: async (): Promise<Produto[]> => {
    const response = await api.get<Produto[]>('/produtos');
    return response.data;
  },

  // Buscar produto por ID
  getById: async (id: number): Promise<Produto> => {
    const response = await api.get<Produto>(`/produtos/${id}`);
    return response.data;
  },

  // Criar novo produto
  create: async (produto: Omit<Produto, 'id'>): Promise<Produto> => {
    const response = await api.post<Produto>('/produtos', produto);
    return response.data;
  },

  // Atualizar produto
  update: async (id: number, produto: Omit<Produto, 'id'>): Promise<Produto> => {
    const response = await api.put<Produto>(`/produtos/${id}`, produto);
    return response.data;
  },

  // Deletar produto
  delete: async (id: number): Promise<void> => {
    await api.delete(`/produtos/${id}`);
  },

  // Buscar produtos por categoria
  getByCategoria: async (categoriaId: number): Promise<Produto[]> => {
    const response = await api.get<Produto[]>(`/produtos/categoria/${categoriaId}`);
    return response.data;
  },
};

// Serviços para Categorias
export const categoriaService = {
  // Buscar todas as categorias
  getAll: async (): Promise<Categoria[]> => {
    const response = await api.get<Categoria[]>('/categorias');
    return response.data;
  },

  // Buscar categoria por ID
  getById: async (id: number): Promise<Categoria> => {
    const response = await api.get<Categoria>(`/categorias/${id}`);
    return response.data;
  },

  // Criar nova categoria
  create: async (categoria: Omit<Categoria, 'id'>): Promise<Categoria> => {
    const response = await api.post<Categoria>('/categorias', categoria);
    return response.data;
  },

  // Atualizar categoria
  update: async (id: number, categoria: Omit<Categoria, 'id'>): Promise<Categoria> => {
    const response = await api.put<Categoria>(`/categorias/${id}`, categoria);
    return response.data;
  },

  // Deletar categoria
  delete: async (id: number): Promise<void> => {
    await api.delete(`/categorias/${id}`);
  },
};

// Exportação da instância do axios para uso direto se necessário
export default api;