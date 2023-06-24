import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

// import benefitOneImg from "../public/img/benefit-one.png";
import benefitOneImg from "../public/img/asesoramiento.png";
// import benefitTwoImg from "../public/img/muestra.png";
import benefitTwoImg from "../public/img/JUSTICIA.png";

const benefitOne = {
  title: "Resalta hasta 3 de tus servicios o produtos sin precio adicional",
  desc: "Resalta tu primer beneficio o una característica de tu producto. También puede contener una imagen o ilustración como en el ejemplo junto con algunos puntos.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Entiende a tus clientes",
      desc: "Explica de manera breve tu objetivo.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Impulsa tus ventas",
      desc: "Añade informacion a tu objetivo.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Obten su atención",
      desc: "Finaliza con una llamada a la acción.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Ofrece otro servicio aquí",
  desc: "Puedes utilizar esta capa para impuzar algun otro de tus servicios incluyendo puntos, llamada a la accion y una ilustracion.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Diseño responsive",
      desc: "Diseño de pagina responsivo, first mobile.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Desarrollado con Next.js & TailwindCSS",
      desc: "Mejora buenas practicas de SEO y rendimiento visual.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Tema claro y oscuro",
      desc: "Configura a tu gusto el tema. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
