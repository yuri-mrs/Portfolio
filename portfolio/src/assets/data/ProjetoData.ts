import React from 'react';

interface ProjetoData {
  id: number;
  titulo: string;
  descricao: string;
  github: string;
  page: string;
}

export const ProjetosData: ProjetoData[] = [
  {
    id: 1,
    titulo: "Piano virtual",
    descricao: "Página principal do sistema",
    github: "",
    page: "",
  },
  {
    id: 2,
    titulo: "Detona ralph",
    descricao: "Informações do projeto",
    github: "",
    page: "",
  },
  {
    id: 3,
    titulo: "Pokedex",
    descricao: "Preferências do usuário",
    github: "",
    page: "",
  },
];
