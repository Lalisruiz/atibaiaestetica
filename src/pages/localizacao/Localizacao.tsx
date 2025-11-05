
function Localizacao() {
  return (
    <>
    <section className="py-20 bg-linear-to-b from-[#f9f5f3] to-[#F4E4C1]">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#A7720E] mb-4">Localização</h2>
                <p className="text-xl text-gray-700">Rua Dr Luís Alberto Vieira dos Santos, 18 - São Paulo, SP</p>
            </div>
            
            <div className="w-full h-[600px] bg-linear-to-br from-gray-200 to-gray-300 rounded-2xl shadow-lg overflow-hidden">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.466704250206!2d-46.544568299999995!3d-23.116610299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cec1164ce8443d%3A0xd4dedda799d5db10!2sEDIF%C3%8DCIO%20CARRARO%20TOWER%20ATIBAIA!5e0!3m2!1spt-BR!2sbr!4v1762369489468!5m2!1spt-BR!2sbr" 
                    className="w-full h-full border-0" 
                    style={{ display: 'block' }}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </section>
    </>
  )
}

export default Localizacao