import React from 'react';
import { MapPin, Phone, Clock, InstagramLogo, FacebookLogo } from '@phosphor-icons/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F4E4C1] to-[#D4AF37] py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo Section */}
          <div className="space-y-4">
            <img 
              src="https://i.ibb.co/99601sS7/logolrestetica-Photoroom-1.png" 
              alt="LR Estética Logo" 
              className="w-48 h-auto object-contain mt-16" 
            />
          </div>          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#2C2416]">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-[#2C2416]" />
                <span className="text-[#2C2416] font-medium">+55 93058-0653</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-[#2C2416] mt-1" />
                <div className="text-[#2C2416] font-medium">
                  <p>Rua Dr Luís Alberto Vieira dos Santos, 18</p>
                  <p>Edifício Carraro Tower</p>
                  <p>Atibaia, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Horário e Redes Sociais */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-[#2C2416]">Horário de Funcionamento</h4>
            <div className="flex items-start space-x-3">
              <Clock size={20} className="text-[#2C2416] mt-1" />
              <div className="text-[#2C2416] font-medium">
                <p>Segunda a Sexta</p>
                <p>Somente com horário marcado</p>
              </div>
            </div>
            
            {/* Redes Sociais */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="https://www.facebook.com/people/LR-Est%C3%A9tica-Avan%C3%A7ada/61572310883810/?mibextid=wwXIfr&rdid=gA004o94wweTSCmP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CTQDkg7kH%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2C2416] hover:bg-[#FFF8E7] text-[#F4E4C1] hover:text-[#2C2416] p-3 rounded-full transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookLogo size={24} />
              </a>
              <a 
                href="https://www.instagram.com/atibaiaestetica/" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2C2416] hover:bg-[#FFF8E7] text-[#F4E4C1] hover:text-[#2C2416] p-3 rounded-full transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramLogo size={24} />
              </a>
              <a 
                href="#" 
                className="bg-[#2C2416] hover:bg-[#FFF8E7] text-[#F4E4C1] hover:text-[#2C2416] p-3 rounded-full transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#2C2416]/20 mt-8 pt-6 text-center">
          <p className="text-[#2C2416] font-medium">
            © 2025 LR Estética. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;