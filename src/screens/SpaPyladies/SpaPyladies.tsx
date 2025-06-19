import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  Twitter,
  Send,
  MessageCircle,
  ArrowUp,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";

  //Images from Assets
import project from "../../assets/project.png";
import workshop from "../../assets/workshop.png";
import event from "../../assets/event.png";
import members from "../../assets/members.png";
import logo from "../../assets/logo.png";
import hero from "../../assets/hero.png";
import about from "../../assets/about.png";

export const SpaPyladies = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Social media data
  const socialMedia = [
    {
      name: "Instagram",
      icon: <InstagramIcon className="w-[62px] h-[62px] text-white" strokeWidth={2.2} />,
      href: "https://www.instagram.com/pyladiesfloripa/",
    },
    {
      name: "Telegram",
      icon: <Send className="w-[62px] h-[62px] text-white" strokeWidth={2.2} />,
      href: "https://web.telegram.org/a/#-1001885479242",
    },
    {
      name: "Youtube",
      icon: <YoutubeIcon className="w-[77px] h-[77px] text-white" strokeWidth={2.2} />,
      href: "https://www.youtube.com/@PyladiesFloripa",
    },
    {
      name: "Linkedin",
      icon: <LinkedinIcon className="w-[62px] h-[62px] text-white" strokeWidth={2.2} />,
      href: "https://www.linkedin.com/company/pyladies-floripa/posts/?feedView=all",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-[62px] h-[62px] text-white" strokeWidth={2.2} />,
      href: "https://x.com/FloripaPyladies",
    },
    {
      name: "Facebook",
      icon: <FacebookIcon className="w-[62px] h-[62px] text-white" strokeWidth={2.2} />,
      href: "https://www.facebook.com/pyladiesfloripa",
    },
  ];

  // Navigation items
  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Participe", href: "#participe" },
    { name: "Membros", href: "#membros" },
    { name: "Parceiros", href: "#parceiros" },
    { name: "Contato", href: "#contato" },
  ];

  // Partner placeholders
  const partners = Array(5).fill({ name: "Partner", logo: null });

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Navigation */}
      <header className="w-full h-[133px] bg-[#4a9cb4]">
        <div className="relative w-full h-full flex items-center px-4 md:px-20">
          <img
            className="w-[106px] h-[110px]"
            alt="Pyladies"
            src={logo}
          />
          <div className="ml-4 md:ml-8 [font-family:'Jaro',Helvetica] font-normal text-white text-3xl md:text-5xl tracking-[-0.91px]">
            PyLadies Floripa
          </div>

          {/* Desktop Menu */}
          <nav className="ml-auto hidden md:block">
            <ul className="flex gap-5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="[font-family:'Inter',Helvetica] font-medium text-white text-3xl tracking-[-0.61px] hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Hamburger for mobile */}
          <button
            className="ml-auto md:hidden p-2 text-white"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Abrir menu"
          >
            <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Mobile Dropdown */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#4a9cb4] z-50 flex flex-col items-center py-4 md:hidden shadow-lg animate-fade-in">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block w-full text-center py-2 text-white text-3xl [font-family:'Inter',Helvetica] hover:bg-[#357a8a]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full h-[400px] md:h-[864px] relative overflow-hidden flex items-center justify-center">
        <img
          className="w-full h-full object-cover object-center"
          alt="Techladies"
          src={hero}
          style={{ display: 'block', margin: 0, padding: 0 }}
        />
        <div className="absolute w-11/12 max-w-3xl h-auto bottom-8 left-1/2 transform -translate-x-1/2 shadow-[3px_5px_5px_#000000c9]">
          <div className="[text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] [font-family:'Jaro',Helvetica] font-normal text-white text-2xl md:text-[64px] text-center tracking-[-1.22px] leading-tight md:leading-[73px]">
            Se junte a nossa comunidade de <br />
            mulheres em Python!
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="sobre"
        className="w-full max-w-[1168px] mx-auto mt-16 mb-16"
      >
        <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
          <div className="w-full md:w-[638px] flex-shrink-0 flex flex-col justify-center">
            <div className="relative">
              <Separator className="w-[120px] h-[5px] bg-[#dd8b20]" />
              <h2 className="mt-4 ml-[61px] [font-family:'Metrophobic',Helvetica] font-bold text-[#0d1e30] text-[32px] tracking-[-0.74px] leading-[48px] text-left">
                Sobre
              </h2>
              <div className="mt-8 md:mt-14 [font-family:'Inter',Helvetica] font-medium text-[#0d1e30] text-base md:text-2xl tracking-[-0.55px] leading-7 md:leading-9">
                A PyLadies Floripa é uma comunidade que incentiva a
                participação de mulheres (cis, trans e pessoas não binárias)
                na programação, com foco na linguagem Python.
                <br />
                <br />
                Nosso objetivo é criar um ambiente acolhedor, inclusivo e
                colaborativo, onde todas possam aprender, compartilhar
                conhecimentos e crescer profissionalmente.
                <br />
                Por meio de eventos, workshops, cursos e mentorias, apoiamos
                iniciantes e fortalecemos a presença feminina na tecnologia.
                <br />
                <br />
                Faça parte da nossa comunidade!
                <br /> Você não está sozinha! 💻💞
              </div>
            </div>
          </div>
          <div className="w-full md:w-[534px] flex-shrink-0 flex justify-center md:justify-end mt-8 md:mt-0 md:self-end md:mt-[72px]">
            <img
              className="w-full max-w-[350px] md:max-w-[534px] h-auto md:h-[479px] object-cover"
              alt="PyLadies Floripa Group"
              src={about}
            />
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfy1Ojw_amXBH5G0nLbF3AplMvpDtqy_z2lVG70SAaJcdJs-g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <Button asChild className="w-full max-w-[400px] h-[56px] bg-[#dd8b20] rounded-[50px] shadow-[0px_4px_4px_#00000040]">
              <span className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-extrabold text-white text-base md:text-lg text-center tracking-[-0.46px]">
                FAÇA PARTE DAS PYLADIES FLORIPA
              </span>
            </Button>
          </a>
        </div>
      </section>

      {/* Participate Section */}
      <section id="participe" className="w-full max-w-[1156px] mx-auto">
        <div className="relative">
          <Separator className="w-[120px] h-[5px] bg-[#dd8b20]" />
          <h2 className="mt-4 ml-[39px] [font-family:'Metrophobic',Helvetica] font-bold text-[#0d1e30] text-[32px] tracking-[-0.74px] leading-[48px] text-left">
            Participe
          </h2>

          {/* Events */}
          <div className="mt-16 flex gap-24">
            <img
              className="w-[291px] h-[508px] object-cover"
              alt="Pyladies floripa event"
              src={event}
            />
            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[-0.55px] leading-9">
              Eventos
              <br />
              <br />
              Nossos eventos são momentos de conexão, aprendizado e
              fortalecimento da comunidade. Realizamos meetups, palestras,
              rodas de conversa e encontros que promovem a troca de
              experiências e o apoio entre mulheres na tecnologia.
              <br />
              <br />
              Aqui, você encontra um espaço seguro e acolhedor para aprender,
              compartilhar, se inspirar e crescer na carreira, sempre cercada
              de pessoas que acreditam na inclusão e no poder da comunidade.
            </div>
          </div>

          {/* Projects */}
          <div className="mt-16 flex gap-24">
            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[-0.55px] leading-9">
              Projetos
              <br />
              <br />
              Nossos projetos são oportunidades de colocar a mão na massa,
              colaborar e gerar impacto real. Acreditamos que, aprendendo
              juntas, podemos criar soluções, desenvolver habilidades e
              construir uma comunidade mais forte e diversa.
              <br />
              <br />
              Participar dos projetos é uma forma de aplicar seus
              conhecimentos, ganhar experiência prática, fazer networking e
              crescer junto com outras mulheres que também estão trilhando
              seus caminhos na tecnologia.
            </div>
            <img
              className="w-[291px] h-[508px] object-cover ml-auto"
              alt="Foto projetos"
              src={project}
            />
          </div>

          {/* Workshops */}
          <div className="mt-16 flex gap-24">
            <img
              className="w-[291px] h-[508px] object-cover"
              alt="Foto workshop"
              src={workshop}
            />
            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[-0.55px] leading-9">
              Workshops
              <br />
              <br />
              Nossos workshops são feitos para quem quer aprender na prática.
              Abordamos temas como Python, desenvolvimento web, ciência de
              dados, carreira e outras ferramentas que ajudam no
              desenvolvimento profissional e pessoal.
              <br />
              <br />
              São encontros dinâmicos, pensados para acolher desde quem está
              começando até quem quer aprofundar seus conhecimentos.
              Aprendemos juntas, trocamos experiências e fortalecemos nossa
              presença na tecnologia.
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfy1Ojw_amXBH5G0nLbF3AplMvpDtqy_z2lVG70SAaJcdJs-g/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <Button asChild className="w-full max-w-[400px] h-[56px] bg-[#dd8b20] rounded-[50px] shadow-[0px_4px_4px_#00000040]">
              <span className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-extrabold text-white text-base md:text-lg text-center tracking-[-0.46px]">
                FAÇA PARTE DAS PYLADIES FLORIPA
              </span>
            </Button>
          </a>
        </div>
      </section>

      {/* Members Section */}
      <section id="membros" className="w-full max-w-[1103px] mx-auto mt-16">
        <div className="relative">
          <Separator className="w-[120px] h-[5px] bg-[#dd8b20]" />
          <h2 className="mt-6 ml-[23px] [font-family:'Metrophobic',Helvetica] font-bold text-[#0d1e30] text-[32px] tracking-[-0.74px] leading-[48px] text-left">
            Membros
          </h2>
          <div className="mt-16 flex gap-14">
            <div className="[font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[-0.46px] leading-8 max-w-[746px]">
              Nossos membros incluem iniciantes que estão dando os primeiros
              passos na área, desenvolvedoras experientes, pesquisadoras,
              entusiastas e aliadas que apoiam a inclusão e diversidade no
              setor.
              <br />
              <br />
              Aqui, cada membro tem a oportunidade de aprender, ensinar e
              crescer junto com a comunidade. Valorizamos a troca de
              conhecimentos, a colaboração e o apoio mútuo, criando um
              ambiente seguro e acolhedor para todas.
              <br />
              <br />
              Quer fazer parte dessa rede? Junte-se a nós e ajude a
              transformar o cenário da tecnologia! 🚀🐍💜
            </div>
            <img
              className="w-[297px] h-[386px]"
              alt="Pyladies floripa members"
              src={members}
            />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="parceiros" className="w-full max-w-[1229px] mx-auto mt-16">
        <div className="relative">
          <Separator className="w-[120px] h-[5px] bg-[#dd8b20]" />
          <h2 className="mt-6 ml-0 [font-family:'Metrophobic',Helvetica] font-bold text-[#0d1e30] text-[32px] tracking-[-0.74px] leading-[48px] text-left">
            Parceiros
          </h2>

          <div className="mt-16 flex justify-center gap-[77px]">
            {partners.map((partner, index) => (
              <Card key={index} className="w-[149px] h-[129px] bg-[#d9d9d9]">
                <CardContent className="p-0 h-full flex items-center justify-center">
                  {/* Partner logo would go here */}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 [font-family:'Inter',Helvetica] font-medium text-black text-2xl tracking-[-0.46px] leading-8">
            Juntas somos mais fortes! 💪<br />
            Agradecemos aos parceiros que apoiam nossa missão de inclusão na
            tecnologia.
            <br />
            Sua empresa também pode caminhar com a gente.
            <br />
            Vamos construir um futuro mais diverso?
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfy1Ojw_amXBH5G0nLbF3AplMvpDtqy_z2lVG70SAaJcdJs-g/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-center"
            >
              <Button asChild className="w-full max-w-[400px] h-[56px] bg-[#dd8b20] rounded-[50px] shadow-[0px_4px_4px_#00000040]">
                <span className="[text-shadow:0px_4px_4px_#00000040] [font-family:'Inter',Helvetica] font-extrabold text-white text-base md:text-lg text-center tracking-[-0.46px] uppercase">
                  Seja Nosso Parceiro
                </span>
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contato" className="w-full h-[245px] mt-16 relative bg-[#4a9cb4]">
        <div className="w-full h-full bg-[url(/shape-with-text.svg)] bg-[100%_100%]">
          <div className="absolute w-full top-[46px] text-center">
            <h2 className="[font-family:'Inter',Helvetica] font-extrabold text-[#fffafa] text-5xl tracking-[-0.91px]">
              Contato
            </h2>
          </div>

          <div className="absolute w-[542px] h-[77px] top-[118px] left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-8">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="absolute w-[75px] h-[76px] top-24 right-[104px] bg-[url(/free-icon-1--7--1.svg)] bg-[100%_100%]" />
        </div>
      </footer>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#4a9cb4] hover:bg-[#357a8a] text-white rounded-full shadow-lg p-3 transition-colors border-4 border-[#dd8b20]"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};
