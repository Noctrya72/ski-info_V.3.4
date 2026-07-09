const stations = {
    Alpes: {
        "Les 2 Alpes": {
            lat: 45.003,
            lon: 6.122,
            url: "https://www.les2alpes.com",
            webcam: "https://www.les2alpes.com/webcams",
            plan: "https://www.skipass-2alpes.com/media/download/dalb2c/cms/media/PLANS/Plan_hiver_Les2Alpes_AEON.pdf"
        },

        "Avoriaz": {
            lat: 46.192,
            lon: 6.777,
            url: "https://www.avoriaz.com",
            webcam: "https://www.avoriaz.com/hiver/webcams",
            plan: "https://www.portesdusoleil.com/app/uploads/lesportesdusoleil/2025/10/PDS_PLAN_HIVER_656x396_AVORIAZ_WEB.pdf"
        },

        "Morzine": {
            lat: 46.180,
            lon: 6.707,
            url: "https://www.morzine-avoriaz.com",
            webcam: "https://www.morzine-avoriaz.com/webcams",
            plan: "https://pass.lesgets.com/wp-content/uploads/2025/10/SoleGets-PlanPistesH2025-2026.pdf"
        },

        "Les Gets": {
            lat: 46.156,
            lon: 6.664,
            url: "https://www.lesgets.com",
            webcam: "https://www.lesgets.com/webcams",
            plan: "https://pass.lesgets.com/wp-content/uploads/2025/10/SoleGets-PlanPistesH2025-2026.pdf"
        },

        "Flaine": {
            lat: 46.007,
            lon: 6.694,
            url: "https://www.flaine.com",
            webcam: "https://www.flaine.com/webcams",
            plan: "https://www.flaine.com/wp-content/uploads/2025/11/GM_PlanPistes_25_26_HD.pdf"
        },

        "Samoëns": {
            lat: 46.082,
            lon: 6.726,
            url: "https://www.samoens.com",
            webcam: "https://www.samoens.com/webcams",
            plan: "https://www.grand-massif.com/content/uploads/2025/12/GM_PlanPistes-1.pdf"
        },

        "Le Grand-Bornand": {
            lat: 45.942,
            lon: 6.427,
            url: "https://www.legrandbornand.com",
            webcam: "https://www.legrandbornand.com/webcams",
            plan: "https://www.legrandbornand.com/app/uploads/legrandbornand/2025/06/Plan-pistes-ski-alpin_24-25.pdf"
        },

        "Alpe d'Huez": {
            lat: 45.090,
            lon: 6.068,
            url: "https://www.alpedhuez.com",
            webcam: "https://www.alpedhuez.com/webcams",
            plan: "https://www.alpedhuez.com/wp-content/uploads/2025/11/PLAN-DES-PISTES-HIVER-2025-2026.pdf"
        },

        "Val Thorens (3 vallées)": {
            lat: 45.297,
            lon: 6.580,
            url: "https://www.valthorens.com",
            webcam: "https://www.valthorens.com/fr/webcams",
            plan: "https://www.valthorens.com/app/uploads/2024/11/plan-val-thorens-orelle-zoom-legende-bd.pdf"
        },

        "Tignes": {
            lat: 45.469,
            lon: 6.907,
            url: "https://www.tignes.net",
            webcam: "https://www.tignes.net/webcams",
            plan: "https://public.tignes.net/TIGNES.NET/BROCHURES/PDP_TIGNES_VALDISERE.pdf"
        },

        "La Plagne": {
            lat: 45.506,
            lon: 6.677,
            url: "https://www.la-plagne.com",
            webcam: "https://www.la-plagne.com/sites/default/files/brochures/pdf/PlanPistesLaPlagneParadiski.pdf",
            plan: "https://www.la-plagne.com/fr/plan-des-pistes"
        },
        "Chamonix": {
            lat: 45.924,
            lon: 6.869,
            url: "https://www.chamonix.com",
            webcam: "https://www.chamonix.com/webcams",
            plan: "https://www.chamonix.com/sites/default/files/media/brochures/Plan_VALLEE_Hiver%281%29.pdf"
        },
        "Megève": {
            lat: 45.857,
            lon: 6.617,
            url: "https://www.megeve.com",
            webcam: "https://www.megeve.com/webcams",
            plan: "https://www.datocms-assets.com/146703/1734512761-plan_megeve_hiver.pdf?dl=plan_megeve_hiver.pdf"
        },

        "Courchevel (3 vallées)": {
            lat: 45.415,
            lon: 6.634,
            url: "https://www.courchevel.com",
            webcam: "https://www.courchevel.com/fr/webcams",
            plan: "https://www.les3vallees.com/media/download/plan-courchevel.pdf"
        },

        "Les Arcs": {
            lat: 45.572,
            lon: 6.827,
            url: "https://www.lesarcs.com",
            webcam: "https://www.lesarcs.com/webcams",
            plan: "https://www.lesarcs.com/uploads/pics/plan-pistes-paradiski-2019_01.pdf"
        },

        "Serre Chevalier": {
            lat: 44.948,
            lon: 6.579,
            url: "https://www.serre-chevalier.com",
            webcam: "https://www.serre-chevalier.com/fr/webcams",
            plan: "https://www.serre-chevalier.com/sites/default/files/2025-10/plan-pistes-serre-chevalier-2025-2026.pdf"
        },

        "Val d'Isère": {
            lat: 45.445739,
            lon: 6.977606,
            url: "https://www.valdisere.com",
            webcam: "https://www.valdisere.com/webcams",
            plan: "https://www.valdisere.com/app/uploads/valdisere/2025/10/TI-x-VI-PlanDesPistes-RECTO-20251017.pdf"
        },

        "La Clusaz": {
            lat: 45.903722,
            lon: 6.423481,
            url: "https://www.laclusaz.com",
            webcam: "https://www.laclusaz.com/webcams",
            plan: "https://www.laclusaz.com/ski/plan-des-pistes/"
        },

        "Alpe du Grand Serre": {
            lat: 45.023517,
            lon: 5.862517,
            url: "https://www.matheysine-tourisme.com/fr/alpedugrandserre/",
            webcam: "https://www.matheysine-tourisme.com/fr/alpedugrandserre/webcams/",
            plan: "https://media.matheysine-tourisme.com/filer_public/7d/9b/7d9bc29b-9406-4330-b06f-970ada3dd32e/web_skirando_alpegrandserre.pdf",
        },

        "Chamrousse": {    
            lat: 45.109653,
            lon: 5.875792,
            url: "https://www.chamrousse.com/hiver",
            webcam: "https://www.chamrousse.com/webcams.html",
            plan: "https://www.chamrousse.com/medias/images/info_pages/plan-domaine-alpin-ski-et-luge-park-chamrousse-2025-2026-basse-definition-bd-3365.pdf",
        },

        "Saint Sorlin d'Arves (Les Sybelles)": {
            lat: 45.218261,
            lon: 6.230328,
            url: "https://www.saintsorlindarves.com/",
            webcam: "https://www.saintsorlindarves.com/webcams",
            plan: "https://www.sja73.com/medias/images/info_pages/plan-des-pistes-les-sybelles-2025-2026-969.pdf",
        },

        "Les Saisies (espace diamant)": {
            lat: 45.758800,
            lon: 6.535506,
            url: "https://www.lessaisies.com/",
            webcam: "https://www.lessaisies.com/webcams/",
            plan: "https://www.lessaisies.com/app/uploads/les-saisies/2024/01/espace-diamant-hiver-2023-2024_HD.pdf",
        },

        "Valloire": {
            lat: 45.164497,
            lon: 6.430956,
            url: "https://www.valloire.net/",
            webcam: "https://www.valloire.net/webcams-valloire/",
            plan: "https://www.valloire.com/medias/images/prestataires/plan-des-pistes-de-valloire-valmeinier-372.pdf",
        },

        "Val Cenis": {
            lat: 45.274581,
            lon: 6.816975,
            url: "https://www.valcenis.com/",
            webcam: "https://www.valcenis.com/webcams/",
            plan: "https://www.cgh-residences.com/documents/plan-pistes/plan-pistes-valcenis.pdf",
        },

        "Montgenèvre": {
            lat: 44.929961,
            lon: 6.722583,
            url: "https://montgenevre.com/",
            webcam: "https://montgenevre.com/hiver/en-direct/webcams-montgenevre",
            plan: "https://montgenevre.com/wp-content/uploads/2020/03/plan_mtg_2020.pdf",
        },

        "Orcières": {
            lat: 44.697378,
            lon: 6.322239,
            url: "https://www.orcieres.com/",
            webcam: "https://www.orcieres.com/live/webcams/",
            plan: "https://www.orcieres.com/app/uploads/orcieres/2025/09/Plan_des_pistes_Orcieres_2024_2025.pdf",
        },

        "Pralognan-la-Vanoise": {
            lat: 45.380867,
            lon: 6.722864,
            url: "https://www.pralognan.com/",
            webcam: "https://www.pralognan.com/webcams/",
            plan: "https://piste-maps.co.uk/pistemaps/France/Pralognan-La-Vanoise-Piste-Ski-Map-2024-25.pdf",
        },

        "Valmorel": {
            lat: 45.459142,
            lon: 6.443286,
            url: "https://www.valmorel.com/",
            webcam: "https://www.valmorel.com/webcams/",
            plan: "https://skipass.valmorel.com/media/download/valmorelb2c/cms/media/HIVER/Plan%20des%20pistes/plan%20des%20pistes%2025-26%20complet.pdf",
        },
    
    },

    Pyrénées: {
        "Grand Tourmalet": {
            lat: 42.909,
            lon: 0.142,
            url: "https://www.n-py.com/fr/grand-tourmalet",
            webcam: "https://www.n-py.com/fr/grand-tourmalet/webcams",
            plan: "https://www.n-py.com/fr/grand-tourmalet"
        },

        "Pas de la Case": {
            lat: 42.542,
            lon: 1.733,
            url: "https://www.grandvalira.com",
            webcam: "https://www.grandvalira.com/fr/webcams",
            plan: "https://www.grandvalira.com/fr/plan-des-pistes"
        },

        "Peyragudes": {
            lat: 42.789864,
            lon: 0.446364,
            url: "https://peyragudes.com/",
            webcam: "https://peyragudes.com/webcams-live/",
            plan: "https://peyragudes.com/wp-content/uploads/2024/04/Plan-des-pistes-compresse-peyragudes-ALPIN-2023-2024_0.pdf",
        },
    },
};

window.onload = () => {
    afficherMassifs();
};

async function getMeteo(lat, lon) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
        );

        const data = await response.json();

        return data.current_weather || {
            temperature: "--",
            windspeed: "--",
            winddirection: "--"
        };
    } catch (error) {
        console.error(error);

        return {
            temperature: "--",
            windspeed: "--",
            winddirection: "--"
        };
    }
}

function afficherMassifs() {
    const liste = document.getElementById("liste");
    const fiche = document.getElementById("fiche");

    fiche.innerHTML = "";

    liste.innerHTML = "<h2>Choisis ton massif</h2>";

    for (const massif in stations) {
        const btn = document.createElement("button");

        btn.className = "massif";
        btn.textContent = massif;

        btn.addEventListener("click", () => {
            afficherStations(massif);
        });

        liste.appendChild(btn);
    }
}

function retourMassifs() {
    afficherMassifs();
}

function afficherStations(massif) {
    const liste = document.getElementById("liste");
    const fiche = document.getElementById("fiche");

    fiche.innerHTML = "";

    liste.innerHTML = `
        <h2>${massif}</h2>

        <button class="back" onclick="retourMassifs()">
            ↩️ Retour aux massifs
        </button>
    `;

    for (const station in stations[massif]) {
        const btn = document.createElement("button");

        btn.className = "station";
        btn.textContent = station;

        btn.addEventListener("click", () => {
            afficherFiche(massif, station);
        });

        liste.appendChild(btn);
    }
}

function retourStations(massif) {
    afficherStations(massif);
}

async function afficherFiche(massif, station) {
    const fiche = document.getElementById("fiche");

    fiche.innerHTML = "<p>Chargement...</p>";

    const s = stations[massif][station];
    const meteo = await getMeteo(s.lat, s.lon);

    fiche.innerHTML = `
        <h2>🏔️ ${station}</h2>

        <p>🌡️ Température : ${meteo.temperature}°C</p>
        <p>💨 Vent : ${meteo.windspeed} km/h</p>
        <p>🧭 Direction : ${meteo.winddirection}°</p>

        <button onclick="window.open('${s.url}', '_blank')">
            🌐 Site officiel
        </button>

        <button onclick="window.open('${s.webcam}', '_blank')">
            📷 Webcam
        </button>

        <button onclick="window.open('${s.plan}', '_blank')">
            🗺️ Plan des pistes
        </button>

        <button class="back" onclick="retourStations('${massif}')">
            ↩️ Retour aux stations
        </button>
    `;
}

function rechercherStation() {
    const search = document.getElementById("search");

    if (!search) return;

    const valeur = search.value.toLowerCase();
    const boutons = document.querySelectorAll(".station");

    boutons.forEach((btn) => {
        btn.style.display = btn.textContent
            .toLowerCase()
            .includes(valeur)
            ? "inline-block"
            : "none";
    });
}