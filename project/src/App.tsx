import { ChevronDown } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  const residentialSlides = [
    {
      title: "Sala de Estar",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80",
    },
    {
      title: "Cozinha",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    },
    {
      title: "Quarto",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    },
    {
      title: "Quarto Kids",
      image: "/img/quarto-kids.svg",
    },
    {
      title: "Hall de elevador",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    },
    {
      title: "Área de Serviço",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    },
    {
      title: "Área de Lazer",
      image: "/img/area-lazer.svg",
    },
    {
      title: "Banheiro",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    },
    {
      title: "Banheiro-Social",
      image: "/img/banheiro-social",
    },
    {
      title: "Escritório Home-Office",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80",
    },
  ];

  const corporateSlides = [
    {
      title: "Clínicas",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80",
    },
    {
      title: "Consultórios",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80",
    },
    {
      title: "Recepção",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80",
    },
    {
      title: "Copa",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80",
    },
    {
      title: "Circulação",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80",
    },
    {
      title: "Lojas",
      image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&q=80",
    },
  ];
  const clientes = [
    {
      title: "Escritórios",
      image: "https://images.unsplash.com/photo-1562184552-a00401f9b4c6?auto=format&fit=crop&q=80",
    },
    {
      title: "Espaços Comerciais",
      image: "https://images.unsplash.com/photo-1556742400-b5b7c5126b57?auto=format&fit=crop&q=80",
    },
    {
      title: "Salas de Reunião",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="wave-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-center items-center h-24">
            <div className="text-center">
              <h1 className="text-3xl font-playfair font-bold text-red-600 tracking-wide">
                ART STAR
              </h1>
              <p className="text-sm font-playfair text-gray-800 tracking-widest uppercase">
                Movelaria
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80"
            alt="Luxury furniture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              Transformamos sonhos em móveis de alto padrão
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Combinando tecnologia de ponta, materiais de qualidade superior e durabilidade incomparável.
            </p>
            <a
              href="#contato"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Solicite um orçamento
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>
      {/* About Us Section */}
      <section className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 mx-4 max-w-md sm:max-w-lg">
          <h3 className="text-4xl font-bold mb-6 text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Quem Somos
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Há 25 anos, transformamos sonhos em realidade.
            Nossa missão vai além de fabricar móveis; criamos peças únicas que refletem
            a personalidade e os desejos de nossos clientes.
            <br />
            <br />
            Cada projeto é tratado com perfeição em cada detalhe, unindo tecnologia de
            ponta, materiais de alta qualidade e a experiência de profissionais dedicados
            para entregar móveis que impressionam pela durabilidade e sofisticação.
          </p>
        </div>
      </section>

      {/* Residential Environment Slide */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-playfair font-bold mb-8 text-center">
            Ambientes Residencial
          </h3>
          <Slider {...settings}>
            {residentialSlides.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-md ">
                  {item.title}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Corporate Environment Slide */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-playfair font-bold mb-8 text-center">
            Ambientes Corporativo
          </h3>
          <Slider {...settings}>
            {corporateSlides.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-md">
                  {item.title}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Other Environments Slide */}
      <section className="py-5 pb-10 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-playfair font-bold mb-8 text-center">
            Principais Parcerias
          </h3>
          <Slider {...settings} autoplay={true} autoplaySpeed={3000}>
            {clientes.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 text-white px-4 py-2 rounded-md">
                  {item.title}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4">Art Star</h3>
              <p className="text-gray-400">
                Transformando ambientes com móveis de alto padrão desde [ano].
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4">Horário de Funcionamento</h3>
              <p className="text-gray-400">
                Segunda a Sexta<br />
                8h às 18h
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4">Contato</h3>
              <p className="text-gray-400">
                Telefone: (XX) XXXX-XXXX<br />
                Email: contato@artstar.com.br
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Art Star Movelaria. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
