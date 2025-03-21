import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-emerald-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Sistema de Usúarios</Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-indigo-200">Início</Link>
            <Link to="/register" className="hover:text-indigo-200">Cadastro</Link>
            <Link to="/users" className="hover:text-indigo-200">Lista de Usuários</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link 
              to="/" 
              className="block hover:text-indigo-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/register" 
              className="block hover:text-indigo-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Cadastro
            </Link>
            <Link 
              to="/users" 
              className="block hover:text-indigo-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Lista de Usuários
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}