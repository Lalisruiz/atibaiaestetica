
function Espaco() {
  return (
   <>
    <section id="espaco" className="py-20 bg-linear-to-b from-[#f9f5f3] to-[#F4E4C1]">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#A7720E] mb-4">Nosso Espaço</h2>
                <p className="text-xl text-gray-700">Conheça nosso ambiente acolhedor e moderno</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-[#A7720E]">
                            <svg className="w-20 h-20 mx-auto mb-4" viewBox="0 0 100 100" fill="currentColor">
                                <rect x="20" y="30" width="60" height="40" rx="5"/>
                                <path d="M30 50 L45 65 L70 40" fill="none" stroke="white" stroke-width="4"/>
                            </svg>
                            <p className="font-semibold">Recepção</p>
                        </div>
                    </div>
                </div>
                
             
             
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-[#A7720E]">
                            <svg className="w-20 h-20 mx-auto mb-4" viewBox="0 0 100 100" fill="currentColor">
                                <rect x="25" y="40" width="50" height="30" rx="3"/>
                                <rect x="35" y="25" width="30" height="10" rx="2"/>
                            </svg>
                            <p className="font-semibold">Sala de Atendimento</p>
                        </div>
                    </div>
                </div>
                
              
              
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl shadow-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center text-[#A7720E]">
                            <svg className="w-20 h-20 mx-auto mb-4" viewBox="0 0 100 100" fill="currentColor">
                                <circle cx="50" cy="40" r="15"/>
                                <rect x="35" y="60" width="30" height="25" rx="3"/>
                            </svg>
                            <p className="font-semibold">Ambiente Acolhedor</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   </>
  )
}

export default Espaco