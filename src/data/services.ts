export interface Service {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  icon: string;
  gradient: string;
  glowColor: string;
  ctaText: string;
  ctaLink: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Mantenimiento preventivo y correctivo de equipos de cómputo',
    description: 'Limpieza interna, cambio de pasta térmica, diagnóstico de hardware y optimización de software. Evitamos fallas antes de que detengan tu operación en Cali.',
    shortDescription: 'Limpieza, diagnóstico, reparación y optimización de computadores.',
    image: '/evidencias/manteniemto_trabajando.png',
    icon: 'IconDeviceLaptop',
    gradient: 'linear-gradient(135deg, hsl(217 91% 60% / 0.9) 0%, hsl(187 90% 46% / 0.7) 100%)',
    glowColor: 'hsl(217 91% 60%)',
    ctaText: 'Ver servicio',
    ctaLink: '/servicios/mantenimiento-computadores',
  },
  {
    id: 2,
    title: 'Diseño e instalación de redes cableadas',
    description: 'Diseño, montaje y puesta en marcha de redes cableadas para oficinas, colegios y bodegas. Desde un punto de red hasta un edificio completo.',
    shortDescription: 'Diseño y montaje de redes cableadas para empresas.',
    image: '/evidencias/redes_trabajando.jpg',
    icon: 'IconNetwork',
    gradient: 'linear-gradient(135deg, hsl(187 90% 46% / 0.9) 0%, hsl(160 84% 42% / 0.7) 100%)',
    glowColor: 'hsl(187 90% 46%)',
    ctaText: 'Ver servicio',
    ctaLink: '/servicios/instalacion-redes-empresariales',
  },
  
  {
    id: 4,
    title: 'Configuración de routers, switches y equipos de red',
    description: 'Configuración de routers, switches y access points: VLANs, QoS, VPN y direccionamiento. Dejamos la red documentada y funcionando.',
    shortDescription: 'VLANs, QoS, VPN y configuración de equipos de red.',
    image: '/evidencias/redes_trabajando.jpg',
    icon: 'IconRouter',
    gradient: 'linear-gradient(135deg, hsl(187 90% 46% / 0.9) 0%, hsl(38 92% 52% / 0.7) 100%)',
    glowColor: 'hsl(38 92% 52%)',
    ctaText: 'Ver servicio',
    ctaLink: '/servicios/configuracion-routers-switches',
  },
  {
    id: 5,
    title: 'Soporte técnico para empresas y hogares',
    description: 'Diagnóstico y reparación de equipos, impresoras, software y red. Atención presencial en Cali y remota, con planes mensuales para empresas.',
    shortDescription: 'Diagnóstico y reparación, presencial en Cali y a distancia.',
    image: '/evidencias/alguien_codeando.jpg',
    icon: 'IconHeadset',
    gradient: 'linear-gradient(135deg, hsl(262 83% 58% / 0.9) 0%, hsl(217 91% 60% / 0.7) 100%)',
    glowColor: 'hsl(262 83% 58%)',
    ctaText: 'Ver servicio',
    ctaLink: '/servicios/soporte-tecnico',
  },

  
  {
    id: 8,
    title: 'Desarrollo y mantenimiento de sitios web a medida',
    description: 'Diseño, desarrollo y mantenimiento de páginas web con panel administrable, formularios y servicios backend: bases de datos, API y despliegue.',
    shortDescription: 'Sitios web, backend, bases de datos y mantenimiento continuo.',
    image: '/evidencias/codeando_sitio_web.jpg',
    icon: 'IconCpu',
    gradient: 'linear-gradient(135deg, hsl(240 60% 40% / 0.9) 0%, hsl(187 90% 46% / 0.7) 100%)',
    glowColor: 'hsl(240 60% 40%)',
    ctaText: 'Ver servicio',
    ctaLink: '/servicios/desarrollo-web-backend',
  },

  {
    id: 10,
    title: 'Ensamblaje de computadores personalizados',
    description: 'Armamos el computador que necesitas según tu presupuesto y objetivos. Seleccionamos los componentes adecuados para gaming, trabajo, estudio, diseño, programación y otras tareas, buscando el mejor equilibrio entre rendimiento, calidad y precio. Te asesoramos en la elección de cada componente y realizamos el ensamblaje del equipo.',
    shortDescription: 'Computadores a medida según tu presupuesto, necesidades y rendimiento esperado.',
    image: '/evidencias/alguien_codeando.jpg',
    icon: 'IconCpu',
    gradient: 'linear-gradient(135deg, hsl(262 83% 58% / 0.9) 0%, hsl(217 91% 60% / 0.7) 100%)',
    glowColor: 'hsl(262 83% 58%)',
    ctaText: 'Cotizar computador',
    ctaLink: '/servicios/ensamblaje-computadores',
  },

];

export const getServicesForCarousel = (): Service[] => {
  const duplicated = [...services, ...services, ...services];
  return duplicated;
};
