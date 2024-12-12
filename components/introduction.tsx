import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid h-screen p-6 py-20 md:py-0 md:grid-cols-2 place-items-center ml-36 mt-16">
                <div className="flex flex-col px-9 py-3 ">
                    <h1 className="mb-5 leading-tight text-center md:text-left text-5xl md:mb-10 ">Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-teal-400"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                    ¡Hola! Soy Manuel Jiménez, un desarrollador Full Stack. Me dedico a crear soluciones digitales que combinan funcionalidad y diseño, buscando siempre ofrecer la mejor experiencia a los usuarios. Me apasiona resolver problemas a través de la tecnología y ayudar a hacer realidad ideas innovadoras. Estoy en constante aprendizaje y siempre listo para nuevos retos.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="https://wa.link/vatytn"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-teal-400 border-teal-400 rounded-xl hover:shadow-xl hover:shadow-teal-400" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
