import Country from "../src/countries/country.model.js";
import Place from "../src/places/place.model.js";

const seedData = [
    {
        nombre: "Francia",
        bandera: "🇫🇷",
        places: [
            { nombre: "Torre Eiffel", descripcion: "Monumento más famoso de París y símbolo de Francia.", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Torre_Eiffel_at_night.jpg/250px-Torre_Eiffel_at_night.jpg" },
            { nombre: "Museo del Louvre", descripcion: "Museo muy importante donde se encuentra la Mona Lisa.", imagen: "https://www.franciaturismo.net/es/wp-content/uploads/sites/17/paris-louvre-piramide-hd.jpg" },
            { nombre: "Montmartre", descripcion: "Barrio artístico y romántico, famoso por el Sagrado Corazón.", imagen: "https://www.civitatis.com/f/francia/paris/guia/montmartre-m.jpg" }
        ]
    },
    {
        nombre: "España",
        bandera: "🇪🇸",
        places: [
            { nombre: "La Sagrada Familia", descripcion: "Basílica famosa de Barcelona diseñada por Gaudí.", imagen: "https://images.adsttc.com/media/images/5ff4/88a7/63c0/17cd/f900/0527/medium_jpg/shutterstock_397537417.jpg" },
            { nombre: "Parque Güell", descripcion: "Parque colorido con mosaicos y vistas de la ciudad.", imagen: "https://www.barcelo.com/guia-turismo/wp-content/uploads/park-guell-1.jpg" },
            { nombre: "Las playas de la ciudad", descripcion: "Playas urbanas ideales para relajarse y disfrutar del mar.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQayyA_pRvLYe7FhFT-8-nGpksPG9qlyuvaZg&s" }
        ]
    },
    {
        nombre: "Estados Unidos",
        bandera: "🇺🇸",
        places: [
            { nombre: "Times Square", descripcion: "Zona famosa por sus luces y pantallas gigantes.", imagen: "https://www.exp1.com/wp-content/uploads/sites/7/2020/06/Times-Square-1-1-1024x678.jpg" },
            { nombre: "Central Park", descripcion: "Gran parque en Nueva York para pasear y descansar.", imagen: "https://static.anuevayork.com/wp-content/uploads/2020/06/13180423/Que-ver-en-Central-Park-Rutas-a-pie-y-en-bicicleta.jpg" },
            { nombre: "Estatua de la Libertad", descripcion: "Símbolo de libertad y uno de los monumentos más conocidos.", imagen: "https://content-historia.nationalgeographic.com.es/medio/2023/10/10/captura-de-pantalla-2023-10-10-a-las-17-32-30_5cfff97a_231010173416_1280x1515.jpg" }
        ]
    },
    {
        nombre: "Italia",
        bandera: "🇮🇹",
        places: [
            { nombre: "El Coliseo", descripcion: "Antiguo anfiteatro romano y símbolo de Roma.", imagen: "https://media.meer.com/attachments/765ed06d8b78952fec85a1e401b67810871820fd/store/fill/1090/613/203f3e0c3169ef0b84e500deae142122017255340720775ac01f5b15af82/El-Coliseo-al-atardecer-Roma-Italia.jpg" },
            { nombre: "El Foro Romano", descripcion: "Ruinas del centro político de la antigua Roma.", imagen: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/01/foro-pal.jpg" },
            { nombre: "El Vaticano", descripcion: "Estado más pequeño del mundo y sede del Papa.", imagen: "https://www.walksinsiderome.com/_next/image/?url=https%3A%2F%2Fwww.walksinsiderome.com%2Fuploads%2F2022%2F09%2Fvatican-early-morning-private-tour.jpg&w=1920&q=75" }
        ]
    },
    {
        nombre: "Turquía",
        bandera: "🇹🇷",
        places: [
            { nombre: "Santa Sofía", descripcion: "Monumento histórico famoso por su arquitectura.", imagen: "https://media.vaticannews.va/media/content/dam-archive/vaticannews/multimedia/2020/06/02/2020.06.02-Chiesa-Santa-Sofia-in-Turchia.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg" },
            { nombre: "La Mezquita Azul", descripcion: "Mezquita conocida por sus azulejos azules.", imagen: "https://www.barcelo.com/guia-turismo/wp-content/uploads/mezquita-azul.jpg" },
            { nombre: "El Gran Bazar", descripcion: "Mercado tradicional lleno de tiendas y colores.", imagen: "https://www.viajestravelstore.com/archivos/imagenes/202208/gran-bazar-estambul.jpg" }
        ]
    },
    {
        nombre: "México",
        bandera: "🇲🇽",
        places: [
            { nombre: "Cancún", descripcion: "Destino turístico famoso por sus playas y hoteles.", imagen: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2024/09/ok-cancun.jpg" },
            { nombre: "Playa del Carmen", descripcion: "Ciudad costera con ambiente relajado y turístico.", imagen: "https://www.cataloniahotels.com/es/guia-de-viajes/wp-content/uploads/2017/10/41787392400_eca30235eb_b.jpg" },
            { nombre: "Tulum", descripcion: "Zona arqueológica maya junto al mar.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS97EVQI4zrJkLlqV2WC9PX76msCSu3UpdNA&s" }
        ]
    },
    {
        nombre: "Reino Unido",
        bandera: "🇬🇧",
        places: [
            { nombre: "Big Ben", descripcion: "Reloj famoso y símbolo de Londres.", imagen: "https://sacyr.com/documents/121856245/121935538/IMG+0+Big+Ben.jpeg" },
            { nombre: "Palacio de Buckingham", descripcion: "Residencia oficial del rey.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3IHMCVq8Qy6yfO3VHYpwM1tK_iDw2ZRXIOg&s" },
            { nombre: "Museo Británico", descripcion: "Museo con objetos históricos de todo el mundo.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4iQPudhUJycmBav27WnBtO5AOkwEuTniXA&s" }
        ]
    },
    {
        nombre: "Alemania",
        bandera: "🇩🇪",
        places: [
            { nombre: "El Muro de Berlín", descripcion: "Restos del muro que dividió la ciudad.", imagen: "https://www.expedia.mx/stories/wp-content/uploads/2021/11/0_EFXPRX.jpg" },
            { nombre: "La Puerta de Brandeburgo", descripcion: "Monumento histórico y símbolo de Berlín.", imagen: "https://3.bp.blogspot.com/_sD9yQTE5QZQ/TFaWmxa_AcI/AAAAAAAAIjU/lGZYPfVa7sI/s1600/PUERTA+DE+BRANDENBURGO+6.jpg" },
            { nombre: "La Isla de los Museos", descripcion: "Conjunto de museos famosos a orillas del río.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3CVGxKuaELVkE1BU1H298F40jemVGyDh4A&s" }
        ]
    },
    {
        nombre: "Grecia",
        bandera: "🇬🇷",
        places: [
            { nombre: "La Acrópolis", descripcion: "Antigua ciudad con templos históricos.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjcPpxNTNqvY-w4-SOb7zazY_yDCtwI_Jqw&s" },
            { nombre: "El barrio de Plaka", descripcion: "Barrio tradicional con calles y tiendas.", imagen: "https://freetouratenea.com/wp-content/uploads/2024/03/Calle-en-Plaka.jpg" },
            { nombre: "Santorini", descripcion: "Isla famosa por sus casas blancas y vistas al mar.", imagen: "https://media.cntraveller.com/photos/611be9bb69410e829d87e0c2/16:9/w_2560%2Cc_limit/Blue-domed-church-along-caldera-edge-in-Oia-Santorini-greece-conde-nast-traveller-11aug17-iStock.jpg" }
        ]
    },
    {
        nombre: "Austria",
        bandera: "🇦🇹",
        places: [
            { nombre: "Palacio de Schönbrunn", descripcion: "Antiguo palacio imperial de Viena.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDO934M3AEc_EaUgi9I0bsrleOONu6qDtFg&s" },
            { nombre: "Ópera Estatal", descripcion: "Famosa ópera de Viena.", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe1-1m4V_Nf5L9mSG20PLgv1JD__cxv9RsIg&s" },
            { nombre: "Catedral de San Esteban", descripcion: "Catedral histórica y símbolo de Viena.", imagen: "https://fotografias.lasexta.com/clipping/cmsimages01/2019/03/08/2FC6B9B7-513D-4D87-A769-D67191042666/98.jpg" }
        ]
    }
];

export const seedDatabase = async () => {
    try {
        const countryCount = await Country.countDocuments();
        if (countryCount > 0) {
            console.log("Seeding omitido: La colección de países no está vacía.");
            return;
        }

        console.log("Iniciando carga de datos iniciales...");

        for (const countryItem of seedData) {
            const { places, ...countryInfo } = countryItem;

            // Crear el país
            const country = await Country.create(countryInfo);

            // Crear los lugares asociados
            const placesToCreate = places.map(place => ({
                ...place,
                pais: country._id
            }));

            await Place.insertMany(placesToCreate);
            console.log(`- Datos cargados para ${countryInfo.nombre}`);
        }

        console.log("Carga de datos iniciales completada exitosamente.");
    } catch (error) {
        console.error("Error al ejecutar el seeder:", error);
    }
};
