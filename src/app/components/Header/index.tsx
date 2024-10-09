// Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#C53030] text-white py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-medium">Gustavo Igor - Consultor Motorac</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:underline">Sobre</Link></li>
            <li><Link href="#models" className="hover:underline">Modelos</Link></li>
            <li><Link href="#contact" className="hover:underline">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
