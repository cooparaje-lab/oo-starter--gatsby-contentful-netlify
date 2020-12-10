import styled from "@emotion/styled"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import tw from "twin.macro"
import reactLogo from "../assets/animations/contact-us.json"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./algolia.css"

//import Fade from "react-reveal/Fade"
const LicenciaComponent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    })
  }, [])

  return (
    <>
      <Layout>
        <SEO title="Documento Legal Super Importante" />
        <Licencia>
          <div className="absolute top-0 left-0 right-0 z-0 h-screen bg-react-logo">
            <div id="react-logo" className="w-full h-full" />
          </div>
          <div className="flex flex-col w-full py-6 md:pb-8 ">
            <h1 className="font-serif text-4xl font-extrabold leading-tight md:text-6xl">
              Documento legal super importante
            </h1>
          </div>

          <div className="custom-shape-divider-bottom">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </Licencia>
        <Text className="relative z-10 px-3 bg-white md:p-6">
          <p className="text-center transition-opacity duration-300 transform opacity-50 hover:opacity-100">
            <small>
              imagen de{" "}
              <a
                target="_blank"
                className="border-b border-transparent hover:border-blue-200"
                rel="noopener noreferrer"
                href="https://lottiefiles.com/jigneshgajjar"
              >
                Jignesh Gajjar
              </a>{" "}
              y se puede editar haciendo{" "}
              <a
                target="_blank"
                className="border-b border-transparent hover:border-blue-200"
                rel="noopener noreferrer"
                href="https://edit.lottiefiles.com/?src=https%3A%2F%2Fassets2.lottiefiles.com%2Fpackages%2Flf20_bp1bwvhv.json"
              >
                click aquí
              </a>
            </small>
          </p>
          <article className="max-w-xl pt-6 mx-auto">
            <a
              href="https://css-tricks.com/license/"
              class="font-bold border-b border-indigo-500 hover:bg-blue-700 hover:text-white text-2xl text-center w-full block mb-12"
              target="_blank"
              rel="noopener noreferrer"
            >
              inspirado de la licencia de css-tricks.com
            </a>
            <p>
              Podría decir que no me importa con{" "}
              <i>lo que podrías llegar a hacer con lo que sea</i> que aquí
              encuentres. <b>Podría decir que no</b> aunque la verdad sea que me
              importa y muchisimo.
            </p>
            <ul>
              <li>
                {" "}
                <p>
                  Ojalá que lo uses (sin créditos) en tu sitio comercial y te
                  vuelvas rico.
                </p>
              </li>
              <li>
                {" "}
                <p>
                  Ojalá que lo uses en el trabajo para impresionar a tu jefe y
                  obtengas un gran y jugozo aumento.
                </p>
              </li>
              <li>
                <p>
                  Ojalá que te ayude a crear algo importante para vos y que eso
                  que manifiestes impresione a alguien que te parezca genial. Te
                  cases y tengas bebés super inteligentes, bonitos y tranquilos.
                </p>
              </li>
              <li>
                {" "}
                <p>
                  Ojalá que algo de esto pueda inspirarte y que te sirva en una
                  publicación o algo que quieras escribir, y que eso que
                  publiques sea mucho más popular y asombroso que esta web.
                </p>
              </li>
            </ul>

            <p>
              <cite className="block mt-12 font-mono text-2xl bont-bold">
                La clave es compartir
              </cite>
            </p>

            <p>
              Quisiera que internet crezca y mejore. Y durante el curso de los
              últimos años, lo comunitario ha sido cercado, y todo, desde la
              agricultura hasta el agua fue privatizándose sin pensar en el
              verdadero costo de los recursos que no pueden ser renovados.
            </p>
            <p>
              Vivimos en una constelación de sistemas complejos. Y es imposible
              para cualquier persona, organización o país entender en
              aislamiento este complejo sistema.
            </p>
            <p>
              Ser{" "}  
               <i>"protectores de lo privado"</i> no nos ha llevado para
              nada por ese camino.
            </p>
            <p>
              Entiendo que otras personas puedan sentirse diferentes acerca de
              esto y puedan tener (o no) razones semi-legítimas para proteger su
              código, diseño, arte, escritura, trabajo o lo que sea.
            </p>
            <p>
              Me encuentro colaborando también en algunos proyectos de código
              cerrado.
            </p>
            <p>Este en particular no es uno de esos.</p>
            <h4 tw="text-2xl text-center mt-12 text-white font-mono">
              ¡Dicho eso, <br/>por favor,<br/> sentite libre,<br/>y desde ya,<br/> Muchas gracias!
            </h4>
          </article>
        </Text>
      </Layout>
    </>
  )
}

export default LicenciaComponent

const Licencia = styled.section`
  ${tw`relative flex flex-col items-center justify-start py-6 text-center bg-blue-200`}
  min-height: 80vh;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");

  h1 {
    ${tw`pt-12 text-blue-900 md:pt-2`}
  }

  body.dark & {
    ${tw`bg-blue-900 border-gray-800 from-teal-900 to-blue-900 `}

    p {
      ${tw`text-blue-300 `}
    }
    h1 {
      ${tw`text-blue-100`}
    }
  }
`

const Text = styled.section`
  ${tw`font-sans text-lg `}
  p {
    ${tw`my-4 leading-relaxed text-blue-800`}
  }

  body.dark & {
    ${tw`bg-blue-800`}

    p {
      ${tw`my-4 leading-relaxed text-blue-300`}
    }
  }

  ul {
    ${tw`mb-6`}
    
    li {
    ${tw`pl-6 ml-12 text-white list-disc`}
    max-width: 27rem;
    }
  }
`
