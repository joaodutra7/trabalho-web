import React from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, UserRoundCog } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Sistema de Cadastro de Usuários
      </h1>
      
      <p className="text-xl text-gray-600 mb-12">
        Bem-vindo ao sistema de gerenciamento de usuários!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <Link
          to="/register"
          className="p-6 bg-gradient-to-b from-blue-300 to-green-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <UserPlus size={48} className="mx-auto mb-4 text-white" />
          <h2 className="text-2xl text-white font-semibold mb-2">Cadastrar Usuário</h2>
          <p className="text-white">
            Adicionar um novo usuário
          </p>
        </Link>

        <Link
          to="/users"
          className="p-6 bg-gradient-to-b from-blue-300 to-green-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <UserRoundCog size={48} className="mx-auto mb-4 text-white" />
          <h2 className="text-2xl text-white font-semibold mb-2">Lista de Usuários</h2>
          <p className="text-white">
            Visualizar, editar ou remover usuários existentes
          </p>
        </Link>
      </div>
    </div>
  );
}