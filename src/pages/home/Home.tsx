import { PersonIcon, PlusCircleIcon, SmileyIcon } from '@phosphor-icons/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#f9f5f3] to-[#F4E4C1]  ">
      <article id="home" className="py-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">

            <div className="flex-1 text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Unindo tecnologia e ciência a serviço da sua beleza
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Proporcionamos os melhores tratamentos estéticos faciais e corporais com tecnologia de ponta e profissionais altamente qualificados.
              </p>
              <button className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                Faça seu agendamento
              </button>
            </div>


            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md aspect-square  rounded-3xl shadow-2xl flex items-center justify-center">
                <img className='rounded-3xl' src="https://i.ibb.co/q30P48MZ/cristiane-ferreiranegocios-com-proposito-cced0583.webp" alt="foto do profissional" />
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="py-20  ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className="card p-8 rounded-2xl  text-center bg-white/20 ">
              <div className="w-20 h-20 mx-auto mb-6  flex items-center justify-center">
                <SmileyIcon size={80} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Estética Facial</h3>
              <p className="text-gray-600">Proporciona cuidados específicos para o rosto através das mais modernas técnicas</p>
            </div>


            <div className="card bg-white/20 p-8 rounded-2xl  text-center   ">
              <div className="w-20 h-20 mx-auto mb-6  flex items-center justify-center">
                <PersonIcon size={80} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Estética Corporal</h3>
              <p className="text-gray-600">Tratamentos corporais personalizados para seu bem-estar</p>
            </div>


            <div className="card bg-white/20 p-8 rounded-2xl text-center">
              <div className="w-20 h-20 mx-auto mb-6  flex items-center justify-center">
               <PlusCircleIcon size={80} className="text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pré e Pós-Operatório</h3>
              <p className="text-gray-600">Cuidados especializados para recuperação e saúde da pele</p>
            </div>


          </div>
        </div>
      </article>

    
    </section>
  );
};

export default Home;