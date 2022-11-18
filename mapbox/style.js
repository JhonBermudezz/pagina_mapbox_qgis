
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "Satelite_0": {
            "type": "raster",
            "tiles": ["https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"],
            "tileSize": 256
        },
        "ZonasRecidencials_1": {
            "type": "geojson",
            "data": json_ZonasRecidencials_1
        }
                    ,
        "ZonasVerdes_2": {
            "type": "geojson",
            "data": json_ZonasVerdes_2
        }
                    ,
        "Bosques_3": {
            "type": "geojson",
            "data": json_Bosques_3
        }
                    ,
        "Lotes_4": {
            "type": "geojson",
            "data": json_Lotes_4
        }
                    ,
        "ZonasDeserticas_5": {
            "type": "geojson",
            "data": json_ZonasDeserticas_5
        }
                    ,
        "Casas_6": {
            "type": "geojson",
            "data": json_Casas_6
        }
                    ,
        "Rios_7": {
            "type": "geojson",
            "data": json_Rios_7
        }
                    ,
        "FuentesHidricas_8": {
            "type": "geojson",
            "data": json_FuentesHidricas_8
        }
                    ,
        "ZonaParqueaderos_9": {
            "type": "geojson",
            "data": json_ZonaParqueaderos_9
        }
                    ,
        "Casas_10": {
            "type": "geojson",
            "data": json_Casas_10
        }
                    ,
        "ZonaApart_11": {
            "type": "geojson",
            "data": json_ZonaApart_11
        }
                    ,
        "Urbanizacion_C3_12": {
            "type": "geojson",
            "data": json_Urbanizacion_C3_12
        }
                    ,
        "ZonaNatural_C2_13": {
            "type": "geojson",
            "data": json_ZonaNatural_C2_13
        }
                    ,
        "Humanos_C2_14": {
            "type": "geojson",
            "data": json_Humanos_C2_14
        }
                    ,
        "Vegetacion_C3_15": {
            "type": "geojson",
            "data": json_Vegetacion_C3_15
        }
                    ,
        "RutasCorredorEcologico18N_16": {
            "type": "geojson",
            "data": json_RutasCorredorEcologico18N_16
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_Satelite_0_0",
            "type": "raster",
            "source": "Satelite_0"
        },
        {
            "id": "lyr_ZonasRecidencials_1_0",
            "type": "fill",
            "source": "ZonasRecidencials_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo'], 'Cabañas'], 0.524, ['==', ['get', 'Tipo'], 'Colegio'], 0.48, ['==', ['get', 'Tipo'], 'Hotel'], 0.488, ['==', ['get', 'Tipo'], 'Parcela'], 0.504, ['==', ['get', 'Tipo'], 'Residencia'], 0.496, 0], 'fill-color': ['case', ['==', ['get', 'Tipo'], 'Cabañas'], '#c823d1', ['==', ['get', 'Tipo'], 'Colegio'], '#c87ad4', ['==', ['get', 'Tipo'], 'Hotel'], '#e8da13', ['==', ['get', 'Tipo'], 'Parcela'], '#cb6511', ['==', ['get', 'Tipo'], 'Residencia'], '#6918cc', '#ffffff']}
        }
,
        {
            "id": "lyr_ZonasVerdes_2_0",
            "type": "fill",
            "source": "ZonasVerdes_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo'], 'arboles'], 0.516, 0], 'fill-color': ['case', ['==', ['get', 'Tipo'], 'arboles'], '#71ea77', '#ffffff']}
        }
,
        {
            "id": "lyr_Bosques_3_0",
            "type": "fill",
            "source": "Bosques_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo'], 'Arbol'], 0.451, ['==', ['get', 'Tipo'], 'Bosque'], 0.537, ['==', ['get', 'Tipo'], 'Disperción arboles'], 0.504, ['==', ['get', 'Tipo'], 'Potrero'], 0.512, 0], 'fill-color': ['case', ['==', ['get', 'Tipo'], 'Arbol'], '#6eee13', ['==', ['get', 'Tipo'], 'Bosque'], '#006212', ['==', ['get', 'Tipo'], 'Disperción arboles'], '#47d4b6', ['==', ['get', 'Tipo'], 'Potrero'], '#749506', '#ffffff']}
        }
,
        {
            "id": "lyr_Lotes_4_0",
            "type": "fill",
            "source": "Lotes_4",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo'], 'Achira'], 0.508, ['==', ['get', 'Tipo'], 'Apartamento'], 0.492, ['==', ['get', 'Tipo'], 'Armonia'], 0.496, ['==', ['get', 'Tipo'], 'Besaya'], 0.496, ['==', ['get', 'Tipo'], 'Bidasoa'], 0.484, ['==', ['get', 'Tipo'], 'Calionte'], 0.504, ['==', ['get', 'Tipo'], 'Capa Roja'], 0.504, ['==', ['get', 'Tipo'], 'Caracuey'], 0.504, ['==', ['get', 'Tipo'], 'Catatumbo'], 0.48, ['==', ['get', 'Tipo'], 'Chuspa'], 0.533, ['==', ['get', 'Tipo'], 'Concesionario'], 1.0, ['==', ['get', 'Tipo'], 'Dulceida'], 0.48, ['==', ['get', 'Tipo'], 'El amanecer'], 0.508, ['==', ['get', 'Tipo'], 'El camino'], 0.504, ['==', ['get', 'Tipo'], 'El Caura'], 0.512, ['==', ['get', 'Tipo'], 'El encanto'], 0.504, ['==', ['get', 'Tipo'], 'El potrillo'], 0.5, ['==', ['get', 'Tipo'], 'El Zancara'], 0.496, ['==', ['get', 'Tipo'], 'Finca Duero'], 0.508, ['==', ['get', 'Tipo'], 'Finca los Muelles'], 0.504, ['==', ['get', 'Tipo'], 'Finca Montesca'], 0.52, ['==', ['get', 'Tipo'], 'Finca Tulipan'], 0.5, ['==', ['get', 'Tipo'], 'Flor de mayo'], 0.5, ['==', ['get', 'Tipo'], 'Galipan'], 0.508, ['==', ['get', 'Tipo'], 'Granja'], 0.504, ['==', ['get', 'Tipo'], 'Granja battle'], 0.5, ['==', ['get', 'Tipo'], 'Granja los olivos'], 0.508, ['==', ['get', 'Tipo'], 'Granja Toronjil'], 0.492, ['==', ['get', 'Tipo'], 'Granja valle de oro'], 0.504, ['==', ['get', 'Tipo'], 'Granja wey'], 0.496, ['==', ['get', 'Tipo'], 'Guadalimar'], 0.5, ['==', ['get', 'Tipo'], 'Hotel'], 0.5, ['==', ['get', 'Tipo'], 'La narcea'], 0.533, ['==', ['get', 'Tipo'], 'La pastusa'], 0.5, ['==', ['get', 'Tipo'], 'Las cardones'], 0.484, ['==', ['get', 'Tipo'], 'Local'], 0.467, ['==', ['get', 'Tipo'], 'Los bueyes'], 0.516, ['==', ['get', 'Tipo'], 'Los mautes'], 0.504, ['==', ['get', 'Tipo'], 'Madretierra'], 0.512, ['==', ['get', 'Tipo'], 'Meta'], 0.504, ['==', ['get', 'Tipo'], 'Monte'], 0.5, ['==', ['get', 'Tipo'], 'Monte andre'], 0.504, ['==', ['get', 'Tipo'], 'Monte camelo'], 0.504, ['==', ['get', 'Tipo'], 'Monte maria'], 0.508, ['==', ['get', 'Tipo'], 'Orinoco'], 0.508, ['==', ['get', 'Tipo'], 'Parcela'], 0.496, ['==', ['get', 'Tipo'], 'parcela2'], 0.504, ['==', ['get', 'Tipo'], 'San Cristobal'], 0.504, ['==', ['get', 'Tipo'], 'SierraMadre'], 0.5, ['==', ['get', 'Tipo'], 'Super'], 0.504, ['==', ['get', 'Tipo'], 'Super Granja'], 0.504, ['==', ['get', 'Tipo'], 'Supermercado'], 0.52, ['==', ['get', 'Tipo'], 'Tamarindo'], 0.5, ['==', ['get', 'Tipo'], 'Terramar'], 0.508, ['==', ['get', 'Tipo'], 'Tienda'], 0.504, ['==', ['get', 'Tipo'], 'Tierra'], 0.549, ['==', ['get', 'Tipo'], 'Tulipan'], 0.496, ['==', ['get', 'Tipo'], 'Valle tormes'], 0.516, ['==', ['get', 'Tipo'], 'Valle verde'], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'Tipo'], 'Achira'], '#bec948', ['==', ['get', 'Tipo'], 'Apartamento'], '#6d7cd8', ['==', ['get', 'Tipo'], 'Armonia'], '#22ce2d', ['==', ['get', 'Tipo'], 'Besaya'], '#75f071', ['==', ['get', 'Tipo'], 'Bidasoa'], '#9d5dce', ['==', ['get', 'Tipo'], 'Calionte'], '#c4ed5c', ['==', ['get', 'Tipo'], 'Capa Roja'], '#cc5bef', ['==', ['get', 'Tipo'], 'Caracuey'], '#4ace95', ['==', ['get', 'Tipo'], 'Catatumbo'], '#65e3c6', ['==', ['get', 'Tipo'], 'Chuspa'], '#7ede39', ['==', ['get', 'Tipo'], 'Concesionario'], '#d19d2e', ['==', ['get', 'Tipo'], 'Dulceida'], '#b9cc65', ['==', ['get', 'Tipo'], 'El amanecer'], '#74d4a1', ['==', ['get', 'Tipo'], 'El camino'], '#7c2ada', ['==', ['get', 'Tipo'], 'El Caura'], '#e6732b', ['==', ['get', 'Tipo'], 'El encanto'], '#cc35e3', ['==', ['get', 'Tipo'], 'El potrillo'], '#e3685d', ['==', ['get', 'Tipo'], 'El Zancara'], '#ea5fb5', ['==', ['get', 'Tipo'], 'Finca Duero'], '#5c75c8', ['==', ['get', 'Tipo'], 'Finca los Muelles'], '#cbc96e', ['==', ['get', 'Tipo'], 'Finca Montesca'], '#7c6ad4', ['==', ['get', 'Tipo'], 'Finca Tulipan'], '#a1c878', ['==', ['get', 'Tipo'], 'Flor de mayo'], '#6212eb', ['==', ['get', 'Tipo'], 'Galipan'], '#b661e0', ['==', ['get', 'Tipo'], 'Granja'], '#d64682', ['==', ['get', 'Tipo'], 'Granja battle'], '#e8ac74', ['==', ['get', 'Tipo'], 'Granja los olivos'], '#cb64ae', ['==', ['get', 'Tipo'], 'Granja Toronjil'], '#ef3a3d', ['==', ['get', 'Tipo'], 'Granja valle de oro'], '#88e77b', ['==', ['get', 'Tipo'], 'Granja wey'], '#4aded9', ['==', ['get', 'Tipo'], 'Guadalimar'], '#5aa6e9', ['==', ['get', 'Tipo'], 'Hotel'], '#44ca68', ['==', ['get', 'Tipo'], 'La narcea'], '#4cf0b9', ['==', ['get', 'Tipo'], 'La pastusa'], '#71a5e9', ['==', ['get', 'Tipo'], 'Las cardones'], '#52ee6c', ['==', ['get', 'Tipo'], 'Local'], '#7a4fee', ['==', ['get', 'Tipo'], 'Los bueyes'], '#dd4f2f', ['==', ['get', 'Tipo'], 'Los mautes'], '#d9384b', ['==', ['get', 'Tipo'], 'Madretierra'], '#2a6cf0', ['==', ['get', 'Tipo'], 'Meta'], '#e8ba15', ['==', ['get', 'Tipo'], 'Monte'], '#c9714e', ['==', ['get', 'Tipo'], 'Monte andre'], '#40d476', ['==', ['get', 'Tipo'], 'Monte camelo'], '#30d0bb', ['==', ['get', 'Tipo'], 'Monte maria'], '#1194e0', ['==', ['get', 'Tipo'], 'Orinoco'], '#df4b7a', ['==', ['get', 'Tipo'], 'Parcela'], '#8dd518', ['==', ['get', 'Tipo'], 'parcela2'], '#8983e4', ['==', ['get', 'Tipo'], 'San Cristobal'], '#e41f4a', ['==', ['get', 'Tipo'], 'SierraMadre'], '#7fd0ee', ['==', ['get', 'Tipo'], 'Super'], '#67ef28', ['==', ['get', 'Tipo'], 'Super Granja'], '#cd14d3', ['==', ['get', 'Tipo'], 'Supermercado'], '#e86ed2', ['==', ['get', 'Tipo'], 'Tamarindo'], '#ef7ae5', ['==', ['get', 'Tipo'], 'Terramar'], '#68e046', ['==', ['get', 'Tipo'], 'Tienda'], '#d3be1f', ['==', ['get', 'Tipo'], 'Tierra'], '#e261a3', ['==', ['get', 'Tipo'], 'Tulipan'], '#4a4fe3', ['==', ['get', 'Tipo'], 'Valle tormes'], '#35c5e2', ['==', ['get', 'Tipo'], 'Valle verde'], '#3cdeea', '#ffffff']}
        }
,
        {
            "id": "lyr_ZonasDeserticas_5_0",
            "type": "fill",
            "source": "ZonasDeserticas_5",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo'], 'Desertica'], 0.496, ['==', ['get', 'Tipo'], 'Desforestada'], 0.512, ['==', ['get', 'Tipo'], 'SinVegetacion'], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'Tipo'], 'Desertica'], '#abca61', ['==', ['get', 'Tipo'], 'Desforestada'], '#d8b155', ['==', ['get', 'Tipo'], 'SinVegetacion'], '#d9163d', '#ffffff']}
        }
,
        {
            "id": "lyr_Casas_6_0",
            "type": "circle",
            "source": "Casas_6",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Tipo'], 'Bodega'], ['/', 7.142857142857142, 2], ['==', ['get', 'Tipo'], 'Casa'], ['/', 7.142857142857142, 2], ['==', ['get', 'Tipo'], 'Casa Alejada'], ['/', 7.142857142857142, 2], ['==', ['get', 'Tipo'], 'Casa Principal'], ['/', 7.142857142857142, 2], 0], 'circle-color': ['case', ['==', ['get', 'Tipo'], 'Bodega'], '#79e788', ['==', ['get', 'Tipo'], 'Casa'], '#87c1e0', ['==', ['get', 'Tipo'], 'Casa Alejada'], '#8024d1', ['==', ['get', 'Tipo'], 'Casa Principal'], '#cf7b92', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'Tipo'], 'Bodega'], 1.0, ['==', ['get', 'Tipo'], 'Casa'], 1.0, ['==', ['get', 'Tipo'], 'Casa Alejada'], 1.0, ['==', ['get', 'Tipo'], 'Casa Principal'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'Tipo'], 'Bodega'], 1, ['==', ['get', 'Tipo'], 'Casa'], 1, ['==', ['get', 'Tipo'], 'Casa Alejada'], 1, ['==', ['get', 'Tipo'], 'Casa Principal'], 1, 0], 'circle-stroke-color': ['case', ['==', ['get', 'Tipo'], 'Bodega'], '#232323', ['==', ['get', 'Tipo'], 'Casa'], '#232323', ['==', ['get', 'Tipo'], 'Casa Alejada'], '#232323', ['==', ['get', 'Tipo'], 'Casa Principal'], '#232323', '#000000']}
        }
,
        {
            "id": "lyr_Rios_7_0",
            "type": "line",
            "source": "Rios_7",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'Tipo'], 'Rio'], 0.9285714285714285, ['==', ['get', 'Tipo'], 'Rio pequeño'], 0.9285714285714285, 0], 'line-opacity': ['case', ['==', ['get', 'Tipo'], 'Rio'], 1.0, ['==', ['get', 'Tipo'], 'Rio pequeño'], 1.0, 0], 'line-color': ['case', ['==', ['get', 'Tipo'], 'Rio'], '#1bddff', ['==', ['get', 'Tipo'], 'Rio pequeño'], '#3e70ef', '#ffffff']}
        }
,
        {
            "id": "lyr_FuentesHidricas_8_0",
            "type": "fill",
            "source": "FuentesHidricas_8",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo'], 'Caño'], 1.0, ['==', ['get', 'Tipo'], 'Lago'], 1.0, 0], 'fill-color': ['case', ['==', ['get', 'Tipo'], 'Caño'], '#39ddec', ['==', ['get', 'Tipo'], 'Lago'], '#3a5ce6', '#ffffff']}
        }
,
        {
            "id": "lyr_ZonaParqueaderos_9_0",
            "type": "fill",
            "source": "ZonaParqueaderos_9",
            "layout": {},
            "paint": {'fill-opacity': 0.5, 'fill-color': '#729b6f'}
        }
,
        {
            "id": "lyr_Casas_10_0",
            "type": "circle",
            "source": "Casas_10",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Tipo'], 'Casa'], ['/', 7.142857142857142, 2], ['==', ['get', 'Tipo'], 'Construcci'], ['/', 7.142857142857142, 2], 0], 'circle-color': ['case', ['==', ['get', 'Tipo'], 'Casa'], '#24c6cc', ['==', ['get', 'Tipo'], 'Construcci'], '#df26d9', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'Tipo'], 'Casa'], 1.0, ['==', ['get', 'Tipo'], 'Construcci'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'Tipo'], 'Casa'], 1, ['==', ['get', 'Tipo'], 'Construcci'], 1, 0], 'circle-stroke-color': ['case', ['==', ['get', 'Tipo'], 'Casa'], '#232323', ['==', ['get', 'Tipo'], 'Construcci'], '#232323', '#000000']}
        }
,
        {
            "id": "lyr_ZonaApart_11_0",
            "type": "fill",
            "source": "ZonaApart_11",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo'], 'Agroforestra'], 0.484, ['==', ['get', 'Tipo'], 'Aparta'], 0.463, ['==', ['get', 'Tipo'], 'Apartaestudio'], 0.52, ['==', ['get', 'Tipo'], 'Apartamento'], 0.488, ['==', ['get', 'Tipo'], 'Bloque c'], 0.488, ['==', ['get', 'Tipo'], 'BloqueC'], 0.5, ['==', ['get', 'Tipo'], 'Campestre a'], 0.504, ['==', ['get', 'Tipo'], 'Campestre b'], 0.512, ['==', ['get', 'Tipo'], 'Campestre C'], 0.504, ['==', ['get', 'Tipo'], 'Casa'], 0.5, ['==', ['get', 'Tipo'], 'Casa campestre'], 0.504, ['==', ['get', 'Tipo'], 'Centauros'], 0.508, ['==', ['get', 'Tipo'], 'Centauros a'], 0.504, ['==', ['get', 'Tipo'], 'Centauros b'], 0.5, ['==', ['get', 'Tipo'], 'Centauros C'], 0.496, ['==', ['get', 'Tipo'], 'Colondrinas'], 0.549, ['==', ['get', 'Tipo'], 'Condominio'], 0.48, ['==', ['get', 'Tipo'], 'El herradero'], 0.52, ['==', ['get', 'Tipo'], 'El remanso'], 0.504, ['==', ['get', 'Tipo'], 'El trebol'], 0.5, ['==', ['get', 'Tipo'], 'Familia Centauros'], 0.512, ['==', ['get', 'Tipo'], 'finca'], 0.549, ['==', ['get', 'Tipo'], 'Finca'], 0.504, ['==', ['get', 'Tipo'], 'Hotel'], 0.516, ['==', ['get', 'Tipo'], 'La fontana'], 0.5, ['==', ['get', 'Tipo'], 'Las Colondrinas'], 0.504, ['==', ['get', 'Tipo'], 'Parcelacion'], 0.508, ['==', ['get', 'Tipo'], 'Remanso a'], 0.504, ['==', ['get', 'Tipo'], 'Remanso B'], 0.488, ['==', ['get', 'Tipo'], 'RosaBlanca'], 0.496, ['==', ['get', 'Tipo'], 'Torreb'], 0.504, ['==', ['get', 'Tipo'], 'Trebol A'], 0.504, ['==', ['get', 'Tipo'], 'Trebol b'], 0.512, ['==', ['get', 'Tipo'], 'Uniminuto'], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'Tipo'], 'Agroforestra'], '#e76ceb', ['==', ['get', 'Tipo'], 'Aparta'], '#eb6fda', ['==', ['get', 'Tipo'], 'Apartaestudio'], '#531be3', ['==', ['get', 'Tipo'], 'Apartamento'], '#ea11a9', ['==', ['get', 'Tipo'], 'Bloque c'], '#de8c7c', ['==', ['get', 'Tipo'], 'BloqueC'], '#4b3cd3', ['==', ['get', 'Tipo'], 'Campestre a'], '#cf7685', ['==', ['get', 'Tipo'], 'Campestre b'], '#2c37db', ['==', ['get', 'Tipo'], 'Campestre C'], '#26ce0f', ['==', ['get', 'Tipo'], 'Casa'], '#4b7dc8', ['==', ['get', 'Tipo'], 'Casa campestre'], '#81cb45', ['==', ['get', 'Tipo'], 'Centauros'], '#a7de49', ['==', ['get', 'Tipo'], 'Centauros a'], '#5ad560', ['==', ['get', 'Tipo'], 'Centauros b'], '#f03c3c', ['==', ['get', 'Tipo'], 'Centauros C'], '#12cfe0', ['==', ['get', 'Tipo'], 'Colondrinas'], '#73f0ba', ['==', ['get', 'Tipo'], 'Condominio'], '#25cbbd', ['==', ['get', 'Tipo'], 'El herradero'], '#edd968', ['==', ['get', 'Tipo'], 'El remanso'], '#6616c8', ['==', ['get', 'Tipo'], 'El trebol'], '#ef578a', ['==', ['get', 'Tipo'], 'Familia Centauros'], '#c979a4', ['==', ['get', 'Tipo'], 'finca'], '#e4ea39', ['==', ['get', 'Tipo'], 'Finca'], '#9828dd', ['==', ['get', 'Tipo'], 'Hotel'], '#6ed5ba', ['==', ['get', 'Tipo'], 'La fontana'], '#74b5cb', ['==', ['get', 'Tipo'], 'Las Colondrinas'], '#dc5912', ['==', ['get', 'Tipo'], 'Parcelacion'], '#ca9c3a', ['==', ['get', 'Tipo'], 'Remanso a'], '#90d277', ['==', ['get', 'Tipo'], 'Remanso B'], '#b11cda', ['==', ['get', 'Tipo'], 'RosaBlanca'], '#5ad877', ['==', ['get', 'Tipo'], 'Torreb'], '#d98a36', ['==', ['get', 'Tipo'], 'Trebol A'], '#0f80d1', ['==', ['get', 'Tipo'], 'Trebol b'], '#758dd9', ['==', ['get', 'Tipo'], 'Uniminuto'], '#37dd79', '#ffffff']}
        }
,
        {
            "id": "lyr_Urbanizacion_C3_12_0",
            "type": "fill",
            "source": "Urbanizacion_C3_12",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Propiedad'], 'Aserradero'], 0.467, ['==', ['get', 'Propiedad'], 'Bodega'], 0.516, ['==', ['get', 'Propiedad'], 'Bodega serlogyc'], 0.512, ['==', ['get', 'Propiedad'], 'Cabaña san luis'], 0.512, ['==', ['get', 'Propiedad'], 'Cache group'], 0.52, ['==', ['get', 'Propiedad'], 'Campestre las guacamaya'], 0.492, ['==', ['get', 'Propiedad'], 'Casa'], 0.508, ['==', ['get', 'Propiedad'], 'Casa campestre'], 0.516, ['==', ['get', 'Propiedad'], 'Club campestre'], 0.508, ['==', ['get', 'Propiedad'], 'Condiminio campestre'], 0.504, ['==', ['get', 'Propiedad'], 'Condominio campestre'], 0.496, ['==', ['get', 'Propiedad'], 'Condominio club'], 0.508, ['==', ['get', 'Propiedad'], 'Finca'], 0.508, ['==', ['get', 'Propiedad'], 'Finca buenviento'], 0.504, ['==', ['get', 'Propiedad'], 'Finca campestre'], 0.516, ['==', ['get', 'Propiedad'], 'Finca dos rosales'], 0.488, ['==', ['get', 'Propiedad'], 'Finca el descanso'], 0.504, ['==', ['get', 'Propiedad'], 'Finca el paraiso'], 0.492, ['==', ['get', 'Propiedad'], 'Finca la sofia'], 0.5, ['==', ['get', 'Propiedad'], 'Finca las palmas'], 0.5, ['==', ['get', 'Propiedad'], 'Finca luis'], 0.5, ['==', ['get', 'Propiedad'], 'Finca maximena'], 0.492, ['==', ['get', 'Propiedad'], 'Finca miuler'], 0.504, ['==', ['get', 'Propiedad'], 'Finca niña'], 0.508, ['==', ['get', 'Propiedad'], 'Finca nuevo amanecer'], 0.5, ['==', ['get', 'Propiedad'], 'Finca rancho colonial'], 0.496, ['==', ['get', 'Propiedad'], 'Finca real camino'], 0.496, ['==', ['get', 'Propiedad'], 'Finca san jose'], 0.508, ['==', ['get', 'Propiedad'], 'Finca san juan'], 0.5, ['==', ['get', 'Propiedad'], 'Finca sueño'], 0.504, ['==', ['get', 'Propiedad'], 'Finca villa'], 0.504, ['==', ['get', 'Propiedad'], 'Finca villa evita'], 0.496, ['==', ['get', 'Propiedad'], 'Hacienda la primavera'], 0.508, ['==', ['get', 'Propiedad'], 'Hawai'], 0.5, ['==', ['get', 'Propiedad'], 'Iglesia adoracion'], 0.508, ['==', ['get', 'Propiedad'], 'La finquita'], 0.508, ['==', ['get', 'Propiedad'], 'La fontana'], 0.484, ['==', ['get', 'Propiedad'], 'La maria'], 0.488, ['==', ['get', 'Propiedad'], 'La mini'], 0.508, ['==', ['get', 'Propiedad'], 'Lote la calleja'], 0.496, ['==', ['get', 'Propiedad'], 'Oasis del llano'], 0.5, ['==', ['get', 'Propiedad'], 'Parcelacion san carlos'], 0.496, ['==', ['get', 'Propiedad'], 'Parque la florida'], 0.508, ['==', ['get', 'Propiedad'], 'Quinta santa ana'], 0.492, ['==', ['get', 'Propiedad'], 'San diego'], 0.496, ['==', ['get', 'Propiedad'], 'Terreno'], 0.504, ['==', ['get', 'Propiedad'], 'Vereda barcelona'], 0.484, ['==', ['get', 'Propiedad'], 'Villa humberto'], 0.504, ['==', ['get', 'Propiedad'], 'Villa nopal'], 0.488, ['==', ['get', 'Propiedad'], 'Villa primavera'], 0.484, ['==', ['get', 'Propiedad'], 'Waluma'], 0.463, 0], 'fill-color': ['case', ['==', ['get', 'Propiedad'], 'Aserradero'], '#402de9', ['==', ['get', 'Propiedad'], 'Bodega'], '#567beb', ['==', ['get', 'Propiedad'], 'Bodega serlogyc'], '#c15eef', ['==', ['get', 'Propiedad'], 'Cabaña san luis'], '#e2c052', ['==', ['get', 'Propiedad'], 'Cache group'], '#9dcc46', ['==', ['get', 'Propiedad'], 'Campestre las guacamaya'], '#8064e6', ['==', ['get', 'Propiedad'], 'Casa'], '#ded484', ['==', ['get', 'Propiedad'], 'Casa campestre'], '#4171cb', ['==', ['get', 'Propiedad'], 'Club campestre'], '#80e4b2', ['==', ['get', 'Propiedad'], 'Condiminio campestre'], '#1483d3', ['==', ['get', 'Propiedad'], 'Condominio campestre'], '#58ca84', ['==', ['get', 'Propiedad'], 'Condominio club'], '#77c838', ['==', ['get', 'Propiedad'], 'Finca'], '#e17cea', ['==', ['get', 'Propiedad'], 'Finca buenviento'], '#e59966', ['==', ['get', 'Propiedad'], 'Finca campestre'], '#da6bd8', ['==', ['get', 'Propiedad'], 'Finca dos rosales'], '#ea8a77', ['==', ['get', 'Propiedad'], 'Finca el descanso'], '#eb72a3', ['==', ['get', 'Propiedad'], 'Finca el paraiso'], '#76e987', ['==', ['get', 'Propiedad'], 'Finca la sofia'], '#ef4c54', ['==', ['get', 'Propiedad'], 'Finca las palmas'], '#2bb2d0', ['==', ['get', 'Propiedad'], 'Finca luis'], '#3ce542', ['==', ['get', 'Propiedad'], 'Finca maximena'], '#91e589', ['==', ['get', 'Propiedad'], 'Finca miuler'], '#cf3b30', ['==', ['get', 'Propiedad'], 'Finca niña'], '#66c839', ['==', ['get', 'Propiedad'], 'Finca nuevo amanecer'], '#ebeb4c', ['==', ['get', 'Propiedad'], 'Finca rancho colonial'], '#de1234', ['==', ['get', 'Propiedad'], 'Finca real camino'], '#9965d8', ['==', ['get', 'Propiedad'], 'Finca san jose'], '#6567d6', ['==', ['get', 'Propiedad'], 'Finca san juan'], '#d410a3', ['==', ['get', 'Propiedad'], 'Finca sueño'], '#71e8b8', ['==', ['get', 'Propiedad'], 'Finca villa'], '#4fceb9', ['==', ['get', 'Propiedad'], 'Finca villa evita'], '#5867c9', ['==', ['get', 'Propiedad'], 'Hacienda la primavera'], '#8461ca', ['==', ['get', 'Propiedad'], 'Hawai'], '#97cb57', ['==', ['get', 'Propiedad'], 'Iglesia adoracion'], '#3fcfc8', ['==', ['get', 'Propiedad'], 'La finquita'], '#b8ce71', ['==', ['get', 'Propiedad'], 'La fontana'], '#2e81e0', ['==', ['get', 'Propiedad'], 'La maria'], '#c137e4', ['==', ['get', 'Propiedad'], 'La mini'], '#6adae2', ['==', ['get', 'Propiedad'], 'Lote la calleja'], '#ebaf46', ['==', ['get', 'Propiedad'], 'Oasis del llano'], '#c82c58', ['==', ['get', 'Propiedad'], 'Parcelacion san carlos'], '#da20c1', ['==', ['get', 'Propiedad'], 'Parque la florida'], '#e0612f', ['==', ['get', 'Propiedad'], 'Quinta santa ana'], '#cf6baa', ['==', ['get', 'Propiedad'], 'San diego'], '#a35bda', ['==', ['get', 'Propiedad'], 'Terreno'], '#72d05b', ['==', ['get', 'Propiedad'], 'Vereda barcelona'], '#cd7e29', ['==', ['get', 'Propiedad'], 'Villa humberto'], '#2acb9d', ['==', ['get', 'Propiedad'], 'Villa nopal'], '#20a8e2', ['==', ['get', 'Propiedad'], 'Villa primavera'], '#b4ca0f', ['==', ['get', 'Propiedad'], 'Waluma'], '#cf1374', '#ffffff']}
        }
,
        {
            "id": "lyr_ZonaNatural_C2_13_0",
            "type": "fill",
            "source": "ZonaNatural_C2_13",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'tipo'], 'Bosque'], 0.5, ['==', ['get', 'tipo'], 'Pastizal'], 0.5, 0], 'fill-color': ['case', ['==', ['get', 'tipo'], 'Bosque'], '#b78cea', ['==', ['get', 'tipo'], 'Pastizal'], '#73cd9a', '#ffffff']}
        }
,
        {
            "id": "lyr_Humanos_C2_14_0",
            "type": "fill",
            "source": "Humanos_C2_14",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Tipo'], 'Afcetacion Humana'], 0.504, ['==', ['get', 'Tipo'], 'Afectacion Humana'], 0.516, ['==', ['get', 'Tipo'], 'Barrio El Rubi'], 0.508, ['==', ['get', 'Tipo'], 'Bodegas Eternit'], 0.504, ['==', ['get', 'Tipo'], 'Casa Campestre'], 0.512, ['==', ['get', 'Tipo'], 'Colegio Juan Campestre'], 0.508, ['==', ['get', 'Tipo'], 'Colegio Los Centauros'], 0.504, ['==', ['get', 'Tipo'], 'Condominio El Caracoli'], 0.508, ['==', ['get', 'Tipo'], 'Condominio El Carcoli'], 0.504, ['==', ['get', 'Tipo'], 'Escuela de formacion'], 0.504, ['==', ['get', 'Tipo'], 'Gimnasio Campestre'], 0.504, ['==', ['get', 'Tipo'], 'Hotel Campestre'], 0.5, ['==', ['get', 'Tipo'], 'Hotel La Tonga'], 0.5, ['==', ['get', 'Tipo'], 'Instituto Lider'], 0.504, ['==', ['get', 'Tipo'], 'Molino Pacande'], 0.504, ['==', ['get', 'Tipo'], 'Muebles Luxur & Art'], 0.508, ['==', ['get', 'Tipo'], 'PankaCocina Gourmet'], 0.516, ['==', ['get', 'Tipo'], 'Produnova'], 0.492, ['==', ['get', 'Tipo'], 'Proteinas Del Oriente'], 0.537, ['==', ['get', 'Tipo'], 'Residencia'], 0.504, ['==', ['get', 'Tipo'], 'Serpet Llanos'], 0.508, ['==', ['get', 'Tipo'], 'Via del amor'], 0.504, 0], 'fill-color': ['case', ['==', ['get', 'Tipo'], 'Afcetacion Humana'], '#6e95dd', ['==', ['get', 'Tipo'], 'Afectacion Humana'], '#cf65b6', ['==', ['get', 'Tipo'], 'Barrio El Rubi'], '#ecd476', ['==', ['get', 'Tipo'], 'Bodegas Eternit'], '#be5be8', ['==', ['get', 'Tipo'], 'Casa Campestre'], '#6813d6', ['==', ['get', 'Tipo'], 'Colegio Juan Campestre'], '#90dd81', ['==', ['get', 'Tipo'], 'Colegio Los Centauros'], '#4726d8', ['==', ['get', 'Tipo'], 'Condominio El Caracoli'], '#acde40', ['==', ['get', 'Tipo'], 'Condominio El Carcoli'], '#38ead5', ['==', ['get', 'Tipo'], 'Escuela de formacion'], '#c85d5b', ['==', ['get', 'Tipo'], 'Gimnasio Campestre'], '#e04de2', ['==', ['get', 'Tipo'], 'Hotel Campestre'], '#cc395e', ['==', ['get', 'Tipo'], 'Hotel La Tonga'], '#6772e8', ['==', ['get', 'Tipo'], 'Instituto Lider'], '#d0d754', ['==', ['get', 'Tipo'], 'Molino Pacande'], '#6bc8a4', ['==', ['get', 'Tipo'], 'Muebles Luxur & Art'], '#1eb3ca', ['==', ['get', 'Tipo'], 'PankaCocina Gourmet'], '#0cd120', ['==', ['get', 'Tipo'], 'Produnova'], '#e76e3e', ['==', ['get', 'Tipo'], 'Proteinas Del Oriente'], '#1693e6', ['==', ['get', 'Tipo'], 'Residencia'], '#33cf6a', ['==', ['get', 'Tipo'], 'Serpet Llanos'], '#dfae76', ['==', ['get', 'Tipo'], 'Via del amor'], '#8ee153', '#ffffff']}
        }
,
        {
            "id": "lyr_Vegetacion_C3_15_0",
            "type": "fill",
            "source": "Vegetacion_C3_15",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['==', ['get', 'Descrip'], 'cultivo cerca a corredor ecologico'], 0.248, ['==', ['get', 'Descrip'], 'zona boscosa'], 0.504, ['==', ['get', 'Descrip'], 'zona boscosa cerca a  la via villa sofmill'], 0.455, ['==', ['get', 'Descrip'], 'zona boscosa cerca a al barrio la niña maria'], 0.52, ['==', ['get', 'Descrip'], 'zona boscosa cerca a corredor ecologico'], 0.512, ['==', ['get', 'Descrip'], 'zona boscosa cerca al condominio campestre'], 0.508, ['==', ['get', 'Descrip'], 'zona boscosa cerca al corredor ecologico'], 0.5, ['==', ['get', 'Descrip'], 'zona boscosa cerca villa primavera'], 0.5, ['==', ['get', 'Descrip'], 'zona boscosa del corredor ecologico'], 0.5, ['==', ['get', 'Descrip'], 'zona boscosa kleiner fluss'], 0.504, ['==', ['get', 'Descrip'], 'zona boscosa via caracoli'], 0.512, ['==', ['get', 'Descrip'], 'zona boscosa via la maria'], 0.496, ['==', ['get', 'Descrip'], 'zona verde'], 0.504, ['==', ['get', 'Descrip'], 'zona verde cerca a condominio andes reservado'], 0.504, ['==', ['get', 'Descrip'], 'zona verde cerca a condomio andes reservado'], 0.524, ['==', ['get', 'Descrip'], 'zona verde cerca a la bodega'], 0.512, ['==', ['get', 'Descrip'], 'zona verde cerca a la glorieta el palmar'], 0.504, ['==', ['get', 'Descrip'], 'zona verde cerca a la hacienda la prima'], 0.5, ['==', ['get', 'Descrip'], 'zona verde cerca a la hasienda la prima'], 0.484, ['==', ['get', 'Descrip'], 'zona verde cerca a la vereda barcelona'], 0.512, ['==', ['get', 'Descrip'], 'zona verde cerca a la via del corredor ecologico'], 0.5, ['==', ['get', 'Descrip'], 'zona verde cerca a la via la maria'], 0.516, ['==', ['get', 'Descrip'], 'zona verde cerca a la via villa sofmill'], 0.537, ['==', ['get', 'Descrip'], 'zona verde cerca a oasis del llano'], 0.52, ['==', ['get', 'Descrip'], 'zona verde cerca a via caracoli'], 0.496, ['==', ['get', 'Descrip'], 'zona verde cerca a via la maria'], 0.504, ['==', ['get', 'Descrip'], 'zona verde cerca a villa gloria'], 0.524, ['==', ['get', 'Descrip'], 'zona verde cerca a villa nopal'], 0.52, ['==', ['get', 'Descrip'], 'zona verde cerca al cann'], 0.496, ['==', ['get', 'Descrip'], 'zona verde cerca vereda barcelona'], 0.508, ['==', ['get', 'Descrip'], 'zona verde cerca via caracoli'], 0.508, ['==', ['get', 'Descrip'], 'zona verde del corredor ecologico'], 0.537, ['==', ['get', 'Descrip'], 'zona verde por la via del corredor ecologico'], 0.573, 0], 'fill-color': ['case', ['==', ['get', 'Descrip'], 'cultivo cerca a corredor ecologico'], '#d7791a', ['==', ['get', 'Descrip'], 'zona boscosa'], '#becb68', ['==', ['get', 'Descrip'], 'zona boscosa cerca a  la via villa sofmill'], '#4f9ad3', ['==', ['get', 'Descrip'], 'zona boscosa cerca a al barrio la niña maria'], '#da67d8', ['==', ['get', 'Descrip'], 'zona boscosa cerca a corredor ecologico'], '#16a9de', ['==', ['get', 'Descrip'], 'zona boscosa cerca al condominio campestre'], '#d471e6', ['==', ['get', 'Descrip'], 'zona boscosa cerca al corredor ecologico'], '#2ad5a7', ['==', ['get', 'Descrip'], 'zona boscosa cerca villa primavera'], '#a6d537', ['==', ['get', 'Descrip'], 'zona boscosa del corredor ecologico'], '#eb7dc3', ['==', ['get', 'Descrip'], 'zona boscosa kleiner fluss'], '#e98940', ['==', ['get', 'Descrip'], 'zona boscosa via caracoli'], '#6dd5a6', ['==', ['get', 'Descrip'], 'zona boscosa via la maria'], '#430ef0', ['==', ['get', 'Descrip'], 'zona verde'], '#9754df', ['==', ['get', 'Descrip'], 'zona verde cerca a condominio andes reservado'], '#8779e2', ['==', ['get', 'Descrip'], 'zona verde cerca a condomio andes reservado'], '#f01452', ['==', ['get', 'Descrip'], 'zona verde cerca a la bodega'], '#c78ae5', ['==', ['get', 'Descrip'], 'zona verde cerca a la glorieta el palmar'], '#777adc', ['==', ['get', 'Descrip'], 'zona verde cerca a la hacienda la prima'], '#71dd86', ['==', ['get', 'Descrip'], 'zona verde cerca a la hasienda la prima'], '#d6d05c', ['==', ['get', 'Descrip'], 'zona verde cerca a la vereda barcelona'], '#69d03a', ['==', ['get', 'Descrip'], 'zona verde cerca a la via del corredor ecologico'], '#56d35a', ['==', ['get', 'Descrip'], 'zona verde cerca a la via la maria'], '#30d512', ['==', ['get', 'Descrip'], 'zona verde cerca a la via villa sofmill'], '#2bd16a', ['==', ['get', 'Descrip'], 'zona verde cerca a oasis del llano'], '#cc5d53', ['==', ['get', 'Descrip'], 'zona verde cerca a via caracoli'], '#d04b87', ['==', ['get', 'Descrip'], 'zona verde cerca a via la maria'], '#0dd6c2', ['==', ['get', 'Descrip'], 'zona verde cerca a villa gloria'], '#e12235', ['==', ['get', 'Descrip'], 'zona verde cerca a villa nopal'], '#0d5ad6', ['==', ['get', 'Descrip'], 'zona verde cerca al cann'], '#c9a36b', ['==', ['get', 'Descrip'], 'zona verde cerca vereda barcelona'], '#d5b43a', ['==', ['get', 'Descrip'], 'zona verde cerca via caracoli'], '#a1dd60', ['==', ['get', 'Descrip'], 'zona verde del corredor ecologico'], '#693acc', ['==', ['get', 'Descrip'], 'zona verde por la via del corredor ecologico'], '#e1724e', '#ffffff']}
        }
,
        {
            "id": "lyr_RutasCorredorEcologico18N_16_0",
            "type": "line",
            "source": "RutasCorredorEcologico18N_16",
            "layout": {},
            "paint": {'line-width': ['case', ['==', ['get', 'Tipo ruta'], 'Calle'], 2.357142857142857, ['==', ['get', 'Tipo ruta'], 'Carrera'], 2.357142857142857, ['==', ['get', 'Tipo ruta'], 'Diagonal'], 2.357142857142857, ['==', ['get', 'Tipo ruta'], 'Intersección'], 2.357142857142857, ['==', ['get', 'Tipo ruta'], 'Transversal'], 2.357142857142857, ['==', ['get', 'Tipo ruta'], 'Via'], 2.357142857142857, 0], 'line-opacity': ['case', ['==', ['get', 'Tipo ruta'], 'Calle'], 1.0, ['==', ['get', 'Tipo ruta'], 'Carrera'], 1.0, ['==', ['get', 'Tipo ruta'], 'Diagonal'], 1.0, ['==', ['get', 'Tipo ruta'], 'Intersección'], 1.0, ['==', ['get', 'Tipo ruta'], 'Transversal'], 1.0, ['==', ['get', 'Tipo ruta'], 'Via'], 1.0, 0], 'line-color': ['case', ['==', ['get', 'Tipo ruta'], 'Calle'], '#ff6d1f', ['==', ['get', 'Tipo ruta'], 'Carrera'], '#ff0000', ['==', ['get', 'Tipo ruta'], 'Diagonal'], '#fff530', ['==', ['get', 'Tipo ruta'], 'Intersección'], '#c4ad57', ['==', ['get', 'Tipo ruta'], 'Transversal'], '#ffff74', ['==', ['get', 'Tipo ruta'], 'Via'], '#5a136c', '#ffffff']}
        }
],
}