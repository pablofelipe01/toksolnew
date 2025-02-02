import type { NextPage } from 'next'
import Head from 'next/head'

const PrivacyPolicy: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Política de Privacidad - Tok Sol Dao</title>
        <meta name="description" content="Política de privacidad de Tok Sol Dao" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <article className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">Política de Privacidad de Tok Sol Dao</h1>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              Última actualización: 02 de febrero de 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">1. Introducción</h2>
              <p className="text-gray-700 mb-4">
                Tok Sol Dao, representada por Pablo Acevedo (`nosotros``, `nuestro``, o `la empresa`), 
                se compromete a proteger la privacidad de nuestros usuarios. Esta Política de Privacidad 
                describe cómo recopilamos, usamos, almacenamos y protegemos su información cuando utiliza 
                nuestros servicios, incluyendo nuestras aplicaciones móviles, sitios web y servicios 
                relacionados (`Servicios`).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">2. Información que Recopilamos</h2>
              
              <h3 className="text-xl font-medium mb-3 text-gray-800">2.1 Información proporcionada por el usuario</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Información de perfil (nombre, dirección de correo electrónico, número de teléfono)</li>
                <li>Contenido generado por el usuario</li>
                <li>Mensajes y comunicaciones</li>
                <li>Información de pago</li>
              </ul>

              <h3 className="text-xl font-medium mb-3 text-gray-800">2.2 Información recopilada automáticamente</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Datos de uso y actividad</li>
                <li>Información del dispositivo</li>
                <li>Datos de ubicación</li>
                <li>Cookies y tecnologías similares</li>
                <li>Metadatos</li>
              </ul>
            </section>

            {/* Continuar con el resto de las secciones siguiendo el mismo patrón */}
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">11. Contacto</h2>
              <p className="text-gray-700 mb-4">
                Para preguntas sobre esta política o sus derechos de privacidad:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">Tok Sol Dao</p>
                <p className="text-gray-700">Atención: Pablo Acevedo</p>
                <p className="text-gray-700">Email: pablofelipe@mac.com</p>
                <p className="text-gray-700">Teléfono: +57 320 473 5546</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">12. Consentimiento</h2>
              <p className="text-gray-700">
                Al usar nuestros servicios, usted acepta esta Política de Privacidad y el 
                procesamiento de su información como se describe aquí.
              </p>
            </section>
          </div>
        </article>
      </main>
    </div>
  )
}

export default PrivacyPolicy