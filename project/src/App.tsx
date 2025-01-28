import { ChevronDown } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import areaDeLazer from "/src/img/area-lazer.jpeg";
import banheiroSocial from "/src/img/banheiro-social.jpeg";
import banheiro from "/src/img/banheiro.jpeg";
import salaDeEstar from "/src/img/sala-de-estar.jpeg";
import salaDeJantar from "/src/img/sala-de-jantar.jpeg";
import cozinha from "/src/img/cozinha.jpeg";
import quarto from "/src/img/quarto.jpeg";
import quartoKids from "/src/img/quarto-kids.svg";
import hallDeElevador from "/src/img/hall-de-elevador.jpeg";
import areaDeServico from "/src/img/area-de-servico.jpeg";
import escritorioHomeOffice from "/src/img/escritorio-home-office.jpeg";
import clinicas from "/src/img/clinicas.jpeg";
import consultorios from "/src/img/consultorio.jpeg";
import recepcao from "/src/img/recepcao.jpeg";
import copa from "/src/img/copa.jpeg";
import lojas from "/src/img/loja.jpeg";

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
      image: salaDeEstar,
    },
    {
      title: "Sala de Jantar",
      image: salaDeJantar,
    },
    {
      title: "Cozinha",
      image: cozinha,
    },
    {
      title: "Quarto",
      image: quarto,
    },
    {
      title: "Quarto Kids",
      image: quartoKids,
    },
    {
      title: "Hall de elevador",
      image: hallDeElevador,
    },
    {
      title: "Área de Serviço",
      image: areaDeServico,
    },
    {
      title: "Área de Lazer",
      image: areaDeLazer,
    },
    {
      title: "Banheiro Master",
      image: banheiro,
    },
    {
      title: "Banheiro Social",
      image: banheiroSocial,
    },
    {
      title: "Escritório Home-Office",
      image: escritorioHomeOffice,
    },
  ];

  const corporateSlides = [
    {
      title: "Clínicas",
      image: clinicas,
    },
    {
      title: "Consultórios",
      image: consultorios,
    },
    {
      title: "Recepção",
      image: recepcao,
    },
    {
      title: "Copa",
      image: copa,
    },
    {
      title: "Lojas",
      image: lojas,
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
              Transformamos sonhos em realidade
            </h2>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Combinando tecnologia de ponta, materiais de qualidade e durabilidade incomparável.
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
 {/* About Us Section */}
<section className="min-h-screen flex items-center justify-center bg-gray-100">
  <div className="bg-white shadow-lg rounded-lg p-8 mx-4 max-w-md sm:max-w-lg">
    <h3
      className="text-4xl font-bold mb-6 text-center"
      style={{ fontFamily: "'Cormorant Garamond', serif" }}
    >
      Quem Somos
    </h3>
    <p
      className="text-lg text-gray-700 leading-relaxed text-center"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      Há 25 anos, transformamos sonhos em realidade.
      Nossa missão vai além de fabricar móveis; criamos peças únicas que refletem
      a personalidade e os desejos de nossos clientes.
      <br />
      <br />
      Cada projeto é tratado com perfeição em cada detalhe, unindo tecnologia de
      ponta, materiais de alta qualidade e a experiência de profissionais dedicados
      para entregar móveis que impressionam pela durabilidade e sofisticação.
    </p>
    <div className="mt-8 text-center">
      <p
        className="text-gray-700 text-lg mb-2"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Conheça mais sobre nossos serviços no Instagram!
      </p>
      <a
        href="https://www.instagram.com/artsatarmovelaria/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 mr-2"
        >
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.422.403.55.2.94.434 1.352.846.413.413.646.803.846 1.352.163.451.349 1.251.403 2.422.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.422-.2.55-.434.94-.846 1.352-.413.413-.803.646-1.352.846-.451.163-1.251.349-2.422.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.422-.403-.55-.2-.94-.434-1.352-.846-.413-.413-.646-.803-.846-1.352-.163-.451-.349-1.251-.403-2.422-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.422.2-.55.434-.94.846-1.352.413-.413.803-.646 1.352-.846.451-.163 1.251-.349 2.422-.403 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.012 7.052.07 5.759.128 4.638.351 3.752.678c-.909.338-1.684.773-2.46 1.548-.776.776-1.21 1.551-1.548 2.46-.327.886-.55 2.007-.608 3.3C-.012 8.332 0 8.756 0 12s-.012 3.668.07 4.948c.058 1.293.281 2.414.608 3.3.338.909.773 1.684 1.548 2.46.776.776 1.551 1.21 2.46 1.548.886.327 2.007.55 3.3.608 1.281.058 1.705.07 4.948.07s3.668-.012 4.948-.07c1.293-.058 2.414-.281 3.3-.608.909-.338 1.684-.773 2.46-1.548.776-.776 1.21-1.551 1.548-2.46.327-.886.55-2.007.608-3.3.058-1.281.07-1.705.07-4.948s-.012-3.668-.07-4.948c-.058-1.293-.281-2.414-.608-3.3-.338-.909-.773-1.684-1.548-2.46-.776-.776-1.551-1.21-2.46-1.548-.886-.327-2.007-.55-3.3-.608C15.668-.012 15.244 0 12 0zm0 5.838c-3.405 0-6.162 2.757-6.162 6.162S8.595 18.162 12 18.162s6.162-2.757 6.162-6.162S15.405 5.838 12 5.838zm0 10.162c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
        </svg>
        Nosso Instagram
      </a>
    </div>
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
