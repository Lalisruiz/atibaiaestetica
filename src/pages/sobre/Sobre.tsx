
function Sobre() {
  return (
    <>
     <section id="sobre" className="py-20 bg-linear-to-b from-[#F4E4C1] to-[#f9f5f3]">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              

                <div className="flex-1">
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#A7720E]" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2 L15 8 L22 9 L17 14 L18 21 L12 18 L6 21 L7 14 L2 9 L9 8 Z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Sobre Dr.</h3>
                        </div>
                        <p className="text-[#6D450D] leading-relaxed">
                            Especialista em estética facial e corporal, com formação avançada e experiência sólida em procedimentos estéticos. Comprometida em oferecer os melhores tratamentos personalizados.
                        </p>
                    </div>
                    
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#A7720E]" viewBox="0 0 24 24" fill="currentColor">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M8 12 L11 15 L16 9" fill="none" stroke="white" stroke-width="2"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800">Projeto de Beleza Avançada</h3>
                        </div>
                        <p className="text-[#6D450D] leading-relaxed">
                            Nossa clínica une tecnologia de ponta com conhecimento científico para proporcionar resultados excepcionais.
                        </p>
                    </div>
                    
                    <div className="bg-[#F4E4C1] border-l-4 border-[#A7720E] p-6 rounded-r-lg mb-8">
                        <p className="text-lg font-semibold text-gray-800">
                            Acesse a melhor escolha sobre Projeto e Beleza Estético
                        </p>
                    </div>
                    
                    <button className="btn-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                        Agende sua consulta
                    </button>
                </div>
                
              
              
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md aspect-3/4 bg-linear-to-br from-pink-200 via-pink-300 to-pink-400 rounded-3xl shadow-2xl flex items-center justify-center">
                        <div className="text-center text-white">
                        <img className="w-full rounded-4xl" src="https://i.ibb.co/rGwvDRvT/Captura-de-tela-2025-11-03-205002.png" alt="" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Sobre