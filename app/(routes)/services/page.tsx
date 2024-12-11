import { CoverParticles } from "@/components/cover-particles";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
           <CoverParticles/>
            <TransitionPage />
            <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
                <div className="max-w-[450px]">

                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">Mis <span className="font-bold text-teal-400"> servicios.</span></h1>
                    <p className="mb-3 text-xl text-gray-300">Ofrezco servicios fullstack, desarrollando interfaces con Next.js y React.js, y sistemas backend escalables. Implemento pasarelas de pago seguras y personalizadas, y también diseño logotipos y marcas optimizadas para SEO. Desarrollo aplicaciones completas, integrando APIs, gestionando bases de datos y asegurando despliegues eficientes en la nube.</p>
                    <button className="px-3 py-2 rounded-lg bg-teal-400 hover:bg-teal-400/65">Contacta conmigo</button>
                </div>

                {/* SLIDER */}
                <div>
                    <SliderServices />
                </div>
            </div>
        </>
    );
}

export default ServicesPage;