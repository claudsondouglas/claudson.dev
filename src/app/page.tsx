import Marquee from "@/components/Marquee"
import Section from "@/components/Section"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: 'Claudson',
  description: 'A 3 anos resolvendo problemas através de códigos criativos e eficientes',
  openGraph: {
    title: "Portifólio",
    description: "A 3 anos resolvendo problemas através de códigos criativos e eficientes",
    siteName: "claudson.dev"
  }
}

export default function Home() {
  return (
    <>
      <header className='h-[90vh] bg-primary flex flex-col relative'>
        <div className='max-w-screen-xl mx-auto h-full flex justify-center items-center w-full relative z-20'>
          <div className='text-center px-10 lg:px-0'>
            <span className='text-primary-darkmore block'>console.log</span>
            <h1 className='text-3xl sm:text-5xl text-center leading-relaxed'>
              Olá mundo, eu sou
              <span className='text-4xl sm:text-6xl block font-bold'>Claudson Paulino</span>
            </h1>
            <p className='mt-5'>
              A 3 anos resolvendo problemas através de códigos <u className='text-accent'>criativos e eficientes</u>
            </p>
            <a className='bg-accent text-white mt-10 inline-block px-14 lg:px-24 py-4 rounded' href="https://wa.me/558491065838">
              Falar no whatsapp
            </a>
          </div>
        </div>
        <div className='absolute bottom-0 inset-x-0 overflow-hidden'>
          <div className='bg-gradient-to-b from-primary to-transparent absolute inset-0 z-10'></div>
          <img src="/header.png" className='w-full min-w-[1000px] object-cover object-center mix-blend-multiply' />
        </div>
      </header>
      <Marquee />
      <main className="">
        <Section id="sobre" spaceBottom={false}>
          <div className='grid lg:grid-cols-3 lg:gap-10'>
            <div className='lg:col-span-3 bg-accent-neutral p-10 md:p-20'>
              <div>
                <h2 className='text-4xl font-bold mb-3'>Desenvolvedor</h2>
                <p className='lg:text-lg text-body'>
                  Sou um profissional versátil na área de desenvolvimento, atuando como desenvolvedor Full-Stack e também desempenhando papéis cruciais em DevOps, experiência do usuário (UX) e análise de dados. Meu compromisso com a qualidade é uma parte fundamental do meu trabalho, garantindo que todos os projetos atendam aos mais altos padrões.

                  Faço parte da equipe da Websocorro, uma empresa líder que gera resultados milionários no mundo do marketing. A minha estratégia para assegurar a excelência em sites, landing pages e sistemas é baseada na utilização de tecnologias de ponta e na aplicação das melhores práticas, abrangendo testes, padrões de projeto, versionamento e arquitetura.
                </p>
              </div>

              <div className="flex gap-2 mt-10">
                <img src="/icons/javascript.svg" className="w-[40px]" />
                <img src="/icons/nativo-de-reagir.svg" className="w-[40px]" />
                <img src="/icons/next.js.svg" className="w-[40px]" />
                <img src="/icons/tailwindcss.svg" className="w-[40px]" />
                <img src="/icons/typescript.svg" className="w-[40px]" />
              </div>
            </div>
            <div className='bg-primary-lightness p-10 md:p-20 lg:p-10 flex flex-col justify-between'>
              <div>
                <h3 className='text-2xl font-bold mb-2'>UX & UI</h3>
                <p className='text-body'>
                  Meu interesse surgiu como uma ferramenta valiosa para aprimorar a qualidade de projetos e otimizar as interfaces de websites e sistemas, buscando proporcionar uma experiência superior aos usuários.
                </p>
              </div>

              <div className="flex gap-2 mt-10">
                <img src="/icons/figma.svg" className="w-[40px]" />
              </div>
            </div>
            <div className='bg-primary-lightness p-10 md:p-20 lg:p-10 flex flex-col justify-between'>
              <div>
                <h3 className='text-2xl font-bold mb-2'>Cientista de dados</h3>
                <p className='text-body'>
                  Minha trajetória profissional envolve a análise de dados e a criação de gráficos para projetos, e essa experiência diária consolidou meu interesse na área.
                </p>
              </div>
              <div className="flex gap-2 mt-10">
                <img src="/icons/python.svg" className="w-[40px]" />
                <img src="/icons/pandas.svg" className="w-[40px]" />
              </div>
            </div>
            <div className='bg-primary-lightness p-10 md:p-20 lg:p-10 flex flex-col justify-between'>
              <div>
                <h3 className='text-2xl font-bold mb-2'>DevOps</h3>
                <p className='text-body'>
                  Optei por utilizar o Linux como meu sistema operacional por um extenso período, o que me permitiu ganhar experiência no sistema de servidores. Isso reforçou minha competência na gestão de servidores.
                </p>
              </div>

              <div className="flex gap-2 mt-10">
                <img src="/icons/linux.svg" className="w-[40px]" />
                <img src="/icons/ec2.svg" className="w-[40px]" />
                <img src="/icons/nginx.svg" className="w-[40px]" />
                <img src="/icons/git.svg" className="w-[40px]" />
                <img src="/icons/pm2.svg" className="w-[40px]" />
              </div>
            </div>
          </div>
          <div className='text-center mt-7'>
            <a href='https://www.linkedin.com/in/claudson-p-81813a122/' className='mx-auto'>Veja mais sobre formações, certificações e experiências no linkedin</a>
          </div>
        </Section>

        <Section id="trabalhos" spaceBottom={false}>
          <h2 className='text-4xl font-bold mb-3'>Trabalhos</h2>

          <div className='grid lg:grid-cols-3 gap-10'>
            <div className='flex flex-col justify-between gap-5'>
              <div>
                <img src="/trabalhos/ladrilhos-saltense.png" className='rounded-lg border-gray-50 border-2' />
                <div className='mt-5'>
                  <h3 className='text-2xl font-bold text-gray-600'>Simulador Ladrilhos Saltense</h3>
                  <p className='text-gray-500'>
                    Projeto otimizou simulador da Ladrilhos Saltense, empresa de 1950 em Salto/SP, permitindo escolher ladrilhos, pintura, rejunte e solicitar orçamento online.
                  </p>
                </div>
              </div>
              <a href='https://simulador.ladrilhosaltense.com.br/' target='_blank'>
                🌎 simulador.ladrilhosaltense.com.br
              </a>
            </div>

            <div className='flex flex-col justify-between gap-5'>
              <div>
                <img src="/trabalhos/inteligencia-para-o-sucesso.png" className='rounded-lg border-gray-50 border-2' />
                <div className='mt-5'>
                  <h3 className='text-2xl font-bold text-gray-600'>Inteligência para o Sucesso</h3>
                  <p className='text-gray-500'>
                    Projeto de página de lançamento para um curso de mentoria sobre Desenvolvimento Humano e Autoconhecimento.
                  </p>
                </div>
              </div>
              <a href='https://vpi.voceporinteiro.com/' target='_blank'>
                🌎 vpi.voceporinteiro.com
              </a>
            </div>
          </div>
        </Section>

        <Section id="projetos" spaceBottom={true}>
          <h2 className='text-4xl font-bold mb-3'>Projetos pessoais</h2>
          <div className='grid lg:grid-cols-3 gap-10'>
            <div className='flex flex-col justify-between gap-5'>
              <div>
                <img src="/projetos/delivre.png" className='rounded-lg border-gray-50 border-2' />
                <div className='mt-5'>
                  <h3 className='text-2xl font-bold text-gray-600'>Delivre</h3>
                  <p className='text-gray-500'>
                    solução digital de cardápio projetada para ajudar pequenas empresas a melhorar a eficiência de seus processos de atendimento ao cliente
                  </p>
                </div>
              </div>
              <a href='https://delivre.claudson.dev' target='_blank'>
                🌎 delivre.claudson.dev
              </a>
            </div>
          </div>
        </Section>

        <Section id="contato" container={true} background="accent-neutral">
          <div className='flex flex-col md:flex-row gap-10 justify-between max-w-screen-xl mx-auto items-center text-gray-500'>
            <h2 className='text-4xl font-bold mb-3 max-w-sm text-gray-700'> Precisa de algo? Fala comigo! 😉</h2>
            <div className='flex flex-col text-center'>
              <a className='bg-accent text-white inline-block px-14 lg:px-24 py-4 rounded' href="https://wa.me/558491065838">
                Falar no whatsapp
              </a>
              ou
              <a href='mailto:contato@claudson.dev'>
                Me manda um email <b>contato@claudson.dev</b>
              </a>
            </div>
          </div>
        </Section>
      </main>
    </>
  )
}
