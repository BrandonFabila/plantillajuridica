import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Es adaptable a mi negocio?",
    answer: "Si, añadimos la informacion que nos proporciones de tu negocio(imagenes, contacto, ubicacion, ofertas y productos.).",
  },
  {
    question: "¿Cual es el precio total?",
    answer: "El precio total sin añadir alguna otra seccion es de $3500 MXN, los requisitos extra aumentan el precio.",
  },
  {
    question: "¿Incluye certificado SSL?",
    answer:
      "Si, la adquisicion de tu Landing Page incluye de manera gratuita dominio y certificado SSL por y hasta 1 año. Posterior al tiempo deberas cubrir el precio del dominio.",
  },
  {
    question: "¿Ofrecen soporte tecnico? ",
    answer:
      "Si, solucionamos cualquier inconveniente que tenga tu pagina despues de la entrega.",
  },
  {
    question: "Tiempo de entrega ",
    answer:
      "Despues del pago inicial del 50% se entrega de 3 a 5 habiles y su liquidacion se realiza maximo en 3 días posteriores a la entrega.",
  },
];

export default Faq;