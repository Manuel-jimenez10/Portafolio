import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech, Github } from "lucide-react";

export const socialNetworks = [
  
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/manuel-jimenez-a86504217/",
    },
    {
        id: 5,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/Manuel-jimenez10",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Fullstack Project",
        subtitle: "PelisFlix",
        description: "Lidere la creacion de una aplicacion de peliculas, fue uno de mis primeros proyectos fullstack en la cual implemente base de datos no relacionales y un crud para agregar, eliminar y actualizar peliculas en la base de datos.",
        date: "Mar 2024",
    },
    {
        id: 2,
        title: "Ecommerce BackEnd",
        subtitle: "Ecommerce",
        description: "Desarrollé el backend de un ecommerce utilizando NestJS, implementando autenticación segura con JWT, documentación dinámica con OpenAPI Swagger, y gestión de imágenes con Cloudinary. Diseñé una arquitectura modular y escalable, siguiendo buenas prácticas para garantizar un sistema seguro, eficiente y fácil de mantener.",
        date: "Ago 2024",
    },
    {
        id: 3,
        title: "Aplicacion Gestion de Turnos",
        subtitle: "Consultorio",
        description: "Desarrollé una aplicación de gestión de citas para un consultorio dental, utilizando React para el frontend y Express.js con PostgreSQL y TypeORM en el backend. La aplicación permite a los usuarios agregar, eliminar y actualizar turnos de manera eficiente, con una interfaz intuitiva y una base de datos robusta para gestionar la información.",
        date: "Juli 22024",
    },
    {
        id: 4,
        title: "Reproductor de Peliculas",
        subtitle: "NexoTV",
        description: "En el proyecto NexoTV, una plataforma de entretenimiento tipo Netflix, contribuí como desarrollador backend enfocándome en áreas clave. Implementé las entidades principales y sus relaciones, desarrollé el CRUD para la gestión de contenido, y configuré Stripe para la gestión de pagos con sesiones de checkout personalizadas. También integré la lógica para asignar suscripciones gratuitas por defecto al registrarse, diseñé métricas para el seguimiento de suscripciones, y desplegué la aplicación en Render utilizando Docker. Además, redacté y documenté toda la lógica del backend mediante Apollo Server, garantizando un código claro y mantenible.",
        date: "Sep 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia Academica",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 4,
        text: "Proyectos realizados",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 2,
        text: "Idiomas",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "PelisFlix",
        image: "/Captura de pantalla 2024-05-14 225514.png",
        urlGithub: "https://github.com/Manuel-jimenez10/PelisFlixx",
    },
    {
        id: 2,
        title: "Ecommerce Backend",
        image: "/Captura de pantalla 2024-12-10 215828.png",
        urlGithub: "https://github.com/Manuel-jimenez10/PM4",
    },
    {
        id: 3,
        title: "Consultorio",
        image: "/Captura de pantalla 2024-12-10 220138.png",
        urlGithub: "https://github.com/Manuel-jimenez10/Consultorio",
    },
    {
        id: 4,
        title: "NexoTV",
        image: "/Captura de pantalla 2024-09-06 185550.png",
        urlGithub: "https://github.com/Manuel-jimenez10/nexotv-este-si",
    },
];