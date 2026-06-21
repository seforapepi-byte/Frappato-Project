"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  Bike,
  BriefcaseBusiness,
  Building2,
  Check,
  Database,
  Globe2,
  Hotel,
  MapPinned,
  Network,
  Route,
  Send,
  ShoppingBag,
  UsersRound,
  Utensils,
  Wine
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ROUTE_CITIES, ROUTE_PATH, ROUTE_POIS, ROUTE_STATS } from "@/lib/route-data";

const heroMetrics = [
  ["4", "comuni"],
  ["260 km", "di circuito"],
  ["51", "punti di interesse"],
  ["9", "segmenti"],
  ["5", "target attivabili"],
  ["1", "rete territoriale"]
];

const infrastructure = [
  ["Tracciato", "260 km, 9 segmenti e 51 punti di interesse diventano un circuito leggibile.", Route],
  ["Rete", "Enti, cantine, ospitalità, food, bike service, spazi territoriali e imprese lavorano nella stessa direzione.", Network],
  ["Prodotti", "Bike / Gravel, Wine & Culture, Family Slow, Workation e Corporate Passport parlano a target reali.", ShoppingBag],
  ["Mercato", "Pacchetti, pass, voucher, kit e canali distributivi trasformano l’interesse in acquisto.", Globe2],
  ["Dati", "Richieste, vendite, flussi e stagionalità rendono il ritorno visibile e migliorabile.", Database]
] satisfies readonly [string, string, LucideIcon][];

const partnerBenefits = [
  {
    title: "Per enti e amministrazioni",
    icon: Building2,
    gain:
      "Una regia concreta per unire turismo, sviluppo locale, mobilità lenta, cultura, imprese e fondi pubblici.",
    value:
      "Un progetto candidabile, una narrazione territoriale comune, flussi più distribuiti e dati utili per decidere dove investire."
  },
  {
    title: "Per cantine, frantoi e produttori",
    icon: Wine,
    gain:
      "Il prodotto entra in un viaggio, in un pacchetto e in una motivazione precisa per scegliere il territorio.",
    value:
      "Degustazioni prenotabili, voucher, revenue sharing, storytelling condiviso e nuove occasioni di vendita prima e dopo la visita."
  },
  {
    title: "Per hotel, B&B e agriturismi",
    icon: Hotel,
    gain: "Nuovi motivi di soggiorno favoriscono arrivi, permanenze più lunghe e ritorni durante tutto l’anno.",
    value:
      "Pacchetti prenotabili, standard bike-friendly e workation-friendly, soggiorni più lunghi e accesso a target ad alta intenzione."
  },
  {
    title: "Per ristoranti, botteghe e artigiani",
    icon: Utensils,
    gain: "Il passaggio diventa sosta, assaggio, laboratorio e acquisto. Anche nei giorni feriali e nei mesi di spalla.",
    value:
      "Local Taste Pass, esperienze prenotabili, merchandising territoriale e connessioni commerciali con strutture, cantine e tour."
  },
  {
    title: "Per bike service, guide e incoming",
    icon: Bike,
    gain:
      "Una base di cicloturismo in Sicilia già strutturata su cui costruire servizi, esperienze e margini.",
    value:
      "Noleggio, assistenza, transfer bagagli, accompagnamento, tour outdoor e presenza nei touchpoint FRAPPATO TRAIL."
  },
  {
    title: "Per aziende e partner corporate",
    icon: BriefcaseBusiness,
    gain:
      "Una proposta B2B distintiva per team distribuiti, welfare aziendale, employer branding e temporary relocation.",
    value:
      "Corporate Workation Passport, permanenze da 7 a 90 giorni e accesso a Workation Station attivate attraverso accordi territoriali dedicati."
  }
];

const networkSteps = [
  ["Manifestazione di interesse", "Coinvolgiamo le realtà pronte a contribuire in modo concreto alla costruzione della rete."],
  ["Mappatura del ruolo", "Definiamo dove puoi generare più valore: accoglienza, vino, food, bike, cultura, workation, mobilità o servizi."],
  ["Standard essenziali", "Pochi requisiti chiari rendono l’esperienza affidabile: disponibilità, qualità, orari, voucher e servizi dedicati."],
  ["Ingresso nel prodotto", "I partner coerenti entrano in pacchetti, pass, kit, esperienze e calendario stagionale."],
  ["Comunicazione coordinata", "Sito, mappe, contenuti, newsletter, press trip e canali digitali portano sul mercato una voce comune."],
  ["Misurazione e crescita", "Richieste, voucher e vendite orientano le scelte. La rete evolve attraverso evidenze condivise."]
];

const products = [
  {
    title: "Bike / Gravel",
    image: "/images/Gravel.png",
    alt: "Ciclista gravel nel paesaggio mediterraneo della Sicilia sud-orientale",
    text: "Un prodotto di cicloturismo in Sicilia che attiva ospitalità bike-friendly, guide, noleggio, transfer, food, cantine e borghi."
  },
  {
    title: "Wine & Culture",
    image: "/images/WIne.png",
    alt: "Calici di vino al tramonto per l’offerta Wine and Culture",
    text: "Dal Cerasuolo di Vittoria al patrimonio culturale: degustazioni, tavole, guide, siti e ospitalità diventano un’unica esperienza acquistabile."
  },
  {
    title: "Family Slow",
    image: "/images/Family.png",
    alt: "Famiglia in bicicletta su una pista ciclabile",
    text: "Ritmo lento, accessibilità e scoperta: agriturismi, laboratori, guide e servizi junior costruiscono un’offerta familiare credibile."
  },
  {
    title: "Workation",
    image: "/images/Worker.png",
    alt: "Remote worker in uno spazio di lavoro territoriale contemporaneo",
    text: "Permanenze lunghe che portano domanda feriale ad alloggi, Workation Station, ristorazione, mobilità e servizi quotidiani."
  },
  {
    title: "Corporate Passport",
    image: "/images/27.png",
    alt: "Team aziendale riunito attorno a un tavolo di lavoro",
    text: "Un prodotto B2B per team retreat, welfare e lavoro distribuito, con servizi business ed esperienze territoriali coordinate."
  }
];

const workationPillars = [
  ["Postazioni attrezzate", "Scrivanie, sedute adeguate, prese, monitor dove possibile, area call e connessione verificata.", BriefcaseBusiness],
  ["Servizi quotidiani", "Lavanderia, transfer, grocery starter kit, locker, pulizia, mobilità leggera e orientamento ai servizi locali.", ShoppingBag],
  ["Accesso al territorio", "Cantine, frantoi, ristoranti, botteghe, percorsi in e-bike, eventi, resident dinner e attività stagionali.", MapPinned],
  ["Community", "Local host, skill swap, incontri con imprese, associazioni, scuole, giovani professionisti e residenti.", UsersRound]
] satisfies readonly [string, string, LucideIcon][];

const workationStandards = [
  ["Connessione verificata", "Fibra o connessione stabile, speed test periodici, rete Wi-Fi protetta, backup 4G/5G dove possibile e indicazioni chiare sulla qualità della connessione.", Globe2],
  ["Postazioni ergonomiche", "Scrivanie comode, sedute adeguate, prese elettriche accessibili, illuminazione corretta e spazio per laptop, monitor e materiali personali.", BriefcaseBusiness],
  ["Area call e focus work", "Almeno una zona adatta a videochiamate, riunioni leggere o lavoro concentrato, con buona privacy acustica e disponibilità segnalata.", Network],
  ["Orari e accesso chiari", "Modalità di accesso definite, orari comunicati, referente locale, prenotazione semplice e istruzioni pratiche per utilizzo e assistenza.", Check],
  ["Servizi quotidiani vicini", "Ristorazione, alimentari, farmacia, lavanderia, attività outdoor, parcheggio bici e trasporto locale raggiungibili con mobilità leggera.", ShoppingBag],
  ["Accoglienza territoriale", "Welcome briefing, mappa del circuito, FRAPPATO Resident Card, contatti utili e suggerimenti su partner, esperienze e servizi del nodo.", MapPinned],
  ["Sicurezza e comfort", "Ambiente pulito, curato, accessibile e ben illuminato, con servizi adeguati, acqua, climatizzazione o ventilazione e locker dove possibile.", Hotel],
  ["Identità FRAPPATO TRAIL", "Segnaletica riconoscibile, materiali coordinati, QR code informativi, presenza nel sito e inserimento nella mappa digitale della rete.", Route],
  ["Community e relazione", "Local host, resident dinner, skill swap, eventi professionali e contatti con imprese, associazioni, scuole e operatori locali.", UsersRound],
  ["Raccolta dati e qualità", "Un sistema semplice registra accessi, durata, servizi richiesti, feedback, partner attivati e livello di soddisfazione.", Database]
] satisfies readonly [string, string, LucideIcon][];

const stationChecklist = [
  "Connessione stabile verificata",
  "Postazioni comode",
  "Area call",
  "Referente locale",
  "Servizi essenziali vicini",
  "Mappa e orientamento",
  "Resident Card",
  "Pulizia e comfort",
  "Identità FRAPPATO TRAIL",
  "Raccolta feedback"
];

const workationSteps = [
  ["Scegli il nodo", "Vittoria, Comiso/Pedalino, Acate, Chiaramonte Gulfi o Scoglitti."],
  ["Prenota il soggiorno", "Alloggio accreditato, agriturismo, B&B o soluzione workation-friendly."],
  ["Accedi alla Workation Station", "Postazione, connessione, area call, supporto locale e servizi essenziali."],
  ["Attiva la Resident Card", "Convenzioni, mobilità, esperienze, servizi quotidiani e accesso ai partner."],
  ["Vivi il territorio", "Wine experience, Local Taste Pass, e-bike, eventi, cene di comunità e incontri professionali."],
  ["Misura l’impatto", "Presenze, servizi utilizzati, partner attivati, durata media del soggiorno e valore generato."]
];

const workationNodes = [
  ["Vittoria", "Nodo urbano, vitivinicolo e culturale. Ideale per servizi, cantine, centro storico, ristorazione e connessioni con imprese locali."],
  ["Comiso / Pedalino", "Nodo logistico e tecnico vicino all’Aeroporto Pio La Torre. Ideale per arrivi, bike service, cultura del vino e accesso rapido al circuito."],
  ["Chiaramonte Gulfi", "Nodo panoramico, rurale e gastronomico. Ideale per soggiorni immersivi, olio, quiete, lavoro concentrato e turismo slow."],
  ["Acate", "Nodo storico, agricolo e memoriale. Ideale per rigenerazione di spazi, cultura locale, paesaggio del Dirillo e produttori."],
  ["Scoglitti", "Nodo costiero per soggiorni fuori stagione, mare, mercato del pescatore, lavoro vista Mediterraneo e mobilità dolce verso l’entroterra."]
];

const workationPartnerValue = [
  ["Strutture ricettive", "Soggiorni più lunghi, tariffe progressive, occupazione in bassa stagione e posizionamento workation-friendly.", Hotel],
  ["Presìdi pubblico-privati", "Palazzi storici, immobili pubblici, strutture ricettive e spazi rigenerati acquisiscono nuove funzioni attraverso partnership dedicate.", Building2],
  ["Ristoranti, bar e botteghe", "Consumi feriali, colazioni, pranzi, pause lavoro, cene, spesa quotidiana e convenzioni locali.", Utensils],
  ["Cantine, frantoi e produttori", "Esperienze prenotabili fuori orario di lavoro, degustazioni, visite, Local Taste Pass e vendita post-visita.", Wine],
  ["Bike service e mobilità", "E-bike Mobility Pass, noleggio settimanale, assistenza e percorsi casa-lavoro-servizi.", Bike],
  ["Enti e amministrazioni", "Destagionalizzazione, rigenerazione di spazi, attrazione di competenze, dati di utilizzo e vitalità nei centri.", Building2]
] satisfies readonly [string, string, LucideIcon][];

const passportIncludes = [
  ["Accesso alle Workation Station", "Postazioni prenotabili nei nodi del circuito, connessione verificata e spazi per call, focus work e meeting leggeri."],
  ["Alloggi accreditati", "Strutture selezionate per soggiorni da 7 a 90 giorni, con scrivania, comfort, tranquillità e tariffe progressive."],
  ["FRAPPATO Resident Card", "Convenzioni, servizi locali, orientamento, vantaggi partner e accesso alle esperienze del circuito."],
  ["Mobility & Local Life", "E-bike, transfer, locker, lavanderia, grocery starter kit, ristorazione convenzionata e servizi quotidiani."],
  ["Esperienze territoriali", "Cantine, frantoi, percorsi culturali, cene di comunità, attività stagionali e incontri con imprese locali."],
  ["Dashboard per aziende", "Report su utilizzo, durata dei soggiorni, servizi attivati, feedback e impatto generato sul territorio."]
];

const corporateBenefits = [
  ["Employer branding", "Un benefit distintivo legato a lavoro flessibile, qualità della vita e cultura del territorio."],
  ["Retention", "Un’esperienza concreta che rafforza motivazione, fiducia e appartenenza."],
  ["Team experience", "Piccoli team lavorano in un contesto operativo diverso mantenendo piena continuità."],
  ["Welfare aziendale", "Un servizio esperienziale che unisce lavoro, benessere, mobilità lenta e territorio."],
  ["Semplicità organizzativa", "Un unico accesso coordina spazi, alloggi, servizi locali, esperienze e supporto operativo."],
  ["Impatto territoriale", "La presenza aziendale attiva strutture, ristorazione, servizi, produttori e operatori locali."]
];

const corporateTargets = [
  "Aziende tech, digitali, creative e consulenziali.",
  "Team distribuiti o ibridi.",
  "HR e People & Culture manager.",
  "Aziende interessate a welfare ed employer branding.",
  "Imprese che vogliono offrire periodi di lavoro temporaneo in Sicilia.",
  "Team che cercano una destinazione per retreat produttivi.",
  "Organizzazioni interessate a networking territoriale, cultura locale e impatto."
];

const valueSources = [
  ["Quote partner", "Sostengono standard, strumenti comuni, presidio commerciale e qualità della rete."],
  ["Pacchetti", "Combinano alloggio, vino, bici, cultura, food e servizi in esperienze con un prezzo e un mercato."],
  ["Voucher e pass", "Generano vendite, tracciano i passaggi e distribuiscono valore tra gli operatori coinvolti."],
  ["Kit e merchandising", "Creano marginalità, memoria di viaggio e opportunità per la filiera produttiva locale."],
  ["Workation", "Porta permanenze più lunghe, domanda feriale e consumi quotidiani distribuiti durante l’anno."],
  ["Corporate Passport", "Apre un canale B2B verso aziende, team, welfare ed employer branding."]
];

const governance = [
  ["Comitato di destinazione", "Enti, GAL, Comuni e soggetti pubblici custodiscono visione, priorità territoriali e accesso ai fondi.", Building2],
  ["Rete partner", "Gli operatori costruiscono il prodotto reale: servizi, accoglienza, disponibilità ed esperienze.", UsersRound],
  ["Struttura operativa", "Destination management, marketing, partner care, booking, dati e controllo qualità trasformano la visione in lavoro quotidiano.", Network]
] satisfies readonly [string, string, LucideIcon][];

const pilotGoals = [
  "Selezionare le manifestazioni di interesse più solide.",
  "Mappare operatori, disponibilità e servizi reali.",
  "Definire standard bike-friendly e workation-friendly.",
  "Portare sul mercato i primi pacchetti vendibili.",
  "Coinvolgere un nucleo di partner fondatori.",
  "Attivare una prima narrazione comune.",
  "Misurare domanda, conversioni e criticità."
];

const partnerOptions = [
  "Comune / ente pubblico",
  "GAL / DMO / fondazione",
  "Cantina / produttore",
  "Struttura ricettiva",
  "Ristorante / bottega / artigiano",
  "Bike service / guida / tour operator",
  "Partner speciale workation / spazio rigenerato",
  "Azienda corporate",
  "Sponsor / brand partner",
  "Altro"
];

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`kicker ${light ? "kicker--light" : ""}`}>{children}</p>;
}

function SectionHeading({
  kicker,
  title,
  intro,
  light = false
}: {
  kicker: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="section-heading">
      <Kicker light={light}>{kicker}</Kicker>
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function BenefitCard({ item, index }: { item: (typeof partnerBenefits)[number]; index: number }) {
  const Icon = item.icon;
  return (
    <article className="benefit-card">
      <div className="benefit-card__top">
        <span>0{index + 1}</span>
        <Icon aria-hidden="true" />
      </div>
      <h3>{item.title}</h3>
      <p className="benefit-card__label">Opportunità per il partner</p>
      <p>{item.gain}</p>
      <p className="benefit-card__label">Valore generato</p>
      <p>{item.value}</p>
    </article>
  );
}

function InteractiveTrailMap() {
  const pathRef = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [marker, setMarker] = useState({ x: 503.4, y: 342 });
  const [selectedPoiId, setSelectedPoiId] = useState<number>(1);
  const [selectedNodeName, setSelectedNodeName] = useState<string>("Vittoria");

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const point = path.getPointAtLength(path.getTotalLength() * (progress / 100));
    setMarker({ x: point.x, y: point.y });
  }, [progress]);

  const currentKm = (ROUTE_STATS.distanceKm * progress) / 100;
  const selectedPoi = ROUTE_POIS.find((poi) => poi.id === selectedPoiId) ?? ROUTE_POIS[0];
  const selectedNode = ROUTE_CITIES.find((node) => node.name === selectedNodeName) ?? ROUTE_CITIES[0];

  return (
    <div className="trail-map">
      <div className="trail-map__canvas">
        <svg
          viewBox="0 0 1000 610"
          role="img"
          aria-label="Mappa narrativa interattiva del circuito FRAPPATO TRAIL"
        >
          <defs>
            <linearGradient id="map-land" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#BEDBED" />
              <stop offset="52%" stopColor="#85BD3F" stopOpacity=".42" />
              <stop offset="100%" stopColor="#026D95" stopOpacity=".72" />
            </linearGradient>
            <pattern id="map-texture" width="34" height="34" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="7" r="1" fill="rgba(7,23,29,.12)" />
              <circle cx="25" cy="23" r=".8" fill="rgba(253,253,253,.2)" />
            </pattern>
            <filter id="marker-shadow" x="-100%" y="-100%" width="300%" height="300%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#07171d" floodOpacity=".6" />
            </filter>
          </defs>
          <rect width="1000" height="610" fill="url(#map-land)" />
          <rect width="1000" height="610" fill="url(#map-texture)" />
          <path className="trail-map__coast" d="M0 520 C120 495 205 535 302 505 S455 468 575 500 785 565 1000 490 L1000 610 L0 610 Z" />
          <path className="trail-map__contour" d="M15 120 C130 72 245 118 355 78 S570 48 715 88 875 76 988 36" />
          <path className="trail-map__contour trail-map__contour--two" d="M5 205 C145 145 250 215 395 164 S650 105 820 148 920 132 995 104" />
          <path className="trail-map__contour trail-map__contour--three" d="M38 430 C170 350 280 430 405 344 S665 250 820 304 930 268 995 220" />
          <path className="trail-map__secondary-road" d="M40 290 C180 260 265 315 390 270 S590 180 760 226 895 225 970 180" />
          <path className="trail-map__secondary-road" d="M220 570 C300 470 405 455 498 355 S660 280 900 98" />
          <path className="trail-map__terrain trail-map__terrain--one" d="M30 470 C160 390 260 445 380 350 S610 220 760 280 920 180 980 115" />
          <path className="trail-map__terrain trail-map__terrain--two" d="M25 170 C170 110 265 190 410 150 S650 45 790 95 915 80 985 45" />
          <path ref={pathRef} className="trail-map__route-base" d={ROUTE_PATH} pathLength="100" />
          <path
            className="trail-map__route-progress"
            d={ROUTE_PATH}
            pathLength="100"
            strokeDasharray={`${progress} ${100 - progress}`}
          />
          <g aria-label="51 punti di interesse del FRAPPATO TRAIL">
            {ROUTE_POIS.map((poi) => (
              <g
                key={poi.id}
                className={`trail-map__poi ${selectedPoiId === poi.id ? "is-selected" : ""}`}
                transform={`translate(${poi.x} ${poi.y})`}
                role="button"
                tabIndex={0}
                aria-label={`Punto di interesse ${poi.id}: ${poi.name}`}
                onClick={() => setSelectedPoiId(poi.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedPoiId(poi.id);
                  }
                }}
              >
                <circle r={selectedPoiId === poi.id ? 7 : 4} />
              </g>
            ))}
          </g>
          {ROUTE_CITIES.map((city) => (
            <g
              key={city.name}
              className={`trail-map__city ${selectedNodeName === city.name ? "is-selected" : ""}`}
              transform={`translate(${city.x} ${city.y})`}
              role="button"
              tabIndex={0}
              aria-label={`${city.name}: ${city.role}`}
              onClick={() => setSelectedNodeName(city.name)}
              onMouseEnter={() => setSelectedNodeName(city.name)}
              onFocus={() => setSelectedNodeName(city.name)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setSelectedNodeName(city.name);
                }
              }}
            >
              <circle r="8" />
              <circle r="3" />
              <text
                x={city.x > 800 ? -14 : 14}
                y="-12"
                textAnchor={city.x > 800 ? "end" : "start"}
              >
                {city.name}
              </text>
            </g>
          ))}
          <g
            className="trail-map__marker"
            transform={`translate(${marker.x} ${marker.y})`}
            filter="url(#marker-shadow)"
            aria-hidden="true"
          >
            <circle className="trail-map__bike-wheel" cx="-11" cy="7" r="7" />
            <circle className="trail-map__bike-wheel" cx="11" cy="7" r="7" />
            <path
              className="trail-map__bike-frame"
              d="M-11 7 L-3 -5 L4 7 L-11 7 M-3 -5 L8 -5 L11 7 M-6 -9 L-1 -9 M8 -5 L12 -10 M9 -10 L15 -10"
            />
            <circle className="trail-map__bike-hub" cx="-3" cy="-5" r="2.4" />
          </g>
        </svg>
        <div className="trail-map__identity">
          <span>MAPPA NARRATIVA DEL CIRCUITO</span>
          <strong>260 KM · 9 SEGMENTI · 51 POI</strong>
        </div>
        <div className="trail-map__node-card" aria-live="polite">
          <span>NODO TERRITORIALE</span>
          <strong>{selectedNode.name}</strong>
          <p>{selectedNode.role}</p>
        </div>
        <div className="trail-map__legend">
          <span><i className="trail-map__legend-line" /> Circuito</span>
          <span><i className="trail-map__legend-dot" /> Nodi territoriali</span>
          <span><i className="trail-map__legend-poi" /> 51 punti di interesse</span>
        </div>
      </div>
      <div className="trail-map__controls">
        <div className="trail-map__progress-copy">
          <span>Avanzamento sul circuito</span>
          <strong>{currentKm.toFixed(1)} km</strong>
          <p>{Math.round(progress)}% del tracciato</p>
        </div>
        <div className="trail-map__poi-detail" aria-live="polite">
          <span>Punto di interesse {String(selectedPoi.id).padStart(2, "0")} / 51</span>
          <strong>{selectedPoi.name}</strong>
          <p>Seleziona i marker rosa sulla mappa per esplorare tutti i luoghi inclusi nel GPX.</p>
          <label htmlFor="poi-selector">Esplora i punti di interesse</label>
          <select
            id="poi-selector"
            value={selectedPoiId}
            onChange={(event) => setSelectedPoiId(Number(event.target.value))}
          >
            {ROUTE_POIS.map((poi) => (
              <option key={poi.id} value={poi.id}>
                {String(poi.id).padStart(2, "0")} — {poi.name}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="trail-progress">Percorri il FRAPPATO TRAIL</label>
        <input
          id="trail-progress"
          type="range"
          min="0"
          max="100"
          step="0.5"
          value={progress}
          onChange={(event) => setProgress(Number(event.target.value))}
          aria-valuetext={`${currentKm.toFixed(1)} chilometri percorsi`}
        />
        <div className="trail-map__presets" aria-label="Seleziona una posizione sul tracciato">
          {[0, 25, 50, 75, 100].map((value) => (
            <button
              key={value}
              type="button"
              className={Math.round(progress) === value ? "is-active" : ""}
              onClick={() => setProgress(value)}
              aria-label={`Vai al ${value}% del tracciato`}
            >
              {value === 0 ? "Partenza" : `${value}%`}
            </button>
          ))}
        </div>
        <div className="trail-map__stats">
          <div><strong>260,45 km</strong><span>sviluppo GPX</span></div>
          <div><strong>2.573 m</strong><span>dislivello positivo</span></div>
          <div><strong>4.689</strong><span>punti traccia</span></div>
          <div><strong>51</strong><span>punti di interesse</span></div>
        </div>
      </div>
    </div>
  );
}

export function PartnerLanding() {
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".section .section-heading, .section article, .section .image-panel, .section .trail-map, .section blockquote, .section .workation-seo-box, .section .workation-cta, .final-cta__content"
      )
    );

    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");
    revealItems.forEach((item) => item.classList.add("reveal-item"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Vai all’inizio della pagina FRAPPATO TRAIL">
          <strong>FRAPPATO TRAIL</strong>
          <span>PARTNER NETWORK / SICILIA</span>
        </a>
        <nav aria-label="Navigazione principale">
          <a href="#tracciato">Tracciato</a>
          <a href="#benefici">Vantaggi</a>
          <a href="#rete">Come funziona</a>
          <a href="#workation">Workation</a>
          <a href="#modello">Modello</a>
          <a href="#pilota">Fase pilota</a>
        </nav>
        <a className="header-cta" href="#contatti" aria-label="Esplora le possibilità di rete">
          Entra nella rete <ArrowRight aria-hidden="true" />
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <video
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/1.png"
            aria-label="Ciclisti attraversano il territorio del Frappato Trail"
            onError={() => setVideoFailed(true)}
          >
            <source src="/video/frappato-trail.mp4" type="video/mp4" />
          </video>
          <div className="hero__overlay" aria-hidden="true" />
          {videoFailed ? <p className="video-status" role="status">Cover hero attiva</p> : null}
          <div className="hero__content">
            <Kicker>MOVE. THIS IS SICILY.</Kicker>
            <h1>FRAPPATO<br />TRAIL</h1>
            <p className="hero__headline">
              Entra nel circuito. Porta più lontano ciò che fai già bene.
            </p>
            <p className="hero__copy">
              FRAPPATO TRAIL mette in rete Vittoria, Acate, Comiso e Chiaramonte Gulfi attraverso 260 km di circuito
              ciclopedonale, 51 punti di interesse e prodotti dedicati a bike, vino, cultura e workation.
            </p>
            <p className="hero__copy hero__copy--promise">
              Tu continui a fare il tuo lavoro. La rete lo rende più visibile, prenotabile, misurabile e vendibile.
            </p>
            <div className="hero__actions">
              <a className="button button--primary" href="#contatti" aria-label="Esploriamo insieme la rete FRAPPATO TRAIL">
                Esploriamo insieme la rete <ArrowRight aria-hidden="true" />
              </a>
              <a className="button button--ghost" href="#benefici" aria-label="Scopri cosa può ricavarne il tuo ruolo">
                Scopri il valore per la tua organizzazione <ArrowDownRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero__metrics" aria-label="Metriche principali del progetto">
            {heroMetrics.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--light" id="opportunita">
          <div className="container split split--intro">
            <SectionHeading
              light
              kicker="01 / IL PUNTO DI PARTENZA"
              title="Un patrimonio già ricco, pronto a operare come sistema."
            />
            <div className="prose">
              <p>
                Qui esistono già vino, paesaggio agricolo, borghi, costa, archeologia, cultura materiale, imprese e
                comunità. FRAPPATO TRAIL offre a questo patrimonio una forma comune, riconoscibile e orientata al mercato.
              </p>
              <p>
                Cantine, strutture ricettive, luoghi culturali e servizi locali acquistano maggiore forza quando
                partecipano alla stessa esperienza e accompagnano il visitatore lungo più tappe del territorio.
              </p>
              <p>
                FRAPPATO TRAIL li connette in una rete partner per il turismo in Sicilia: un sistema di percorsi,
                standard, servizi e prodotti che rende l’offerta riconoscibile prima del viaggio e semplice da
                acquistare.
              </p>
              <p>
                È un modello di destination marketing fondato su asset reali e obiettivi misurabili: il Cerasuolo di
                Vittoria diventa esperienza, il turismo esperienziale a Ragusa diventa prodotto e la mobilità lenta
                genera nuove opportunità per l’economia locale.
              </p>
            </div>
          </div>
          <div className="container data-strip">
            {[
              ["7 milioni", "turisti in Sicilia"],
              ["5,1 notti", "permanenza media in provincia di Ragusa"],
              ["260 km", "tracciato ciclopedonale"],
              ["51 POI", "punti da rendere leggibili e fruibili"],
              ["1 rete", "per rendere il territorio commerciabile"]
            ].map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="container city-grid">
            {[
              ["/images/Vittoria.png", "Vittoria", "Palazzo storico nel centro di Vittoria"],
              ["/images/Acate.png", "Acate", "Vista aerea del Castello dei Principi di Biscari ad Acate"],
              ["/images/Comiso.png", "Comiso", "Architettura storica e cupola nel centro di Comiso"],
              ["/images/Chiaramonte.png", "Chiaramonte Gulfi", "Scorcio in pietra del borgo di Chiaramonte Gulfi"]
            ].map(([src, label, alt]) => (
              <figure key={label}>
                <Image src={src} alt={alt} fill sizes="(min-width: 900px) 25vw, 50vw" />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section section--blue" id="progetto">
          <div className="container split">
            <div>
              <SectionHeading
                kicker="02 / COS’È FRAPPATO TRAIL"
                title="Un’infrastruttura territoriale. Una destinazione integrata."
                intro="FRAPPATO TRAIL mette in relazione luoghi, operatori e mercato, valorizzando l’identità specifica di ogni partner."
              />
              <div className="prose prose--light">
                <p>
                  Strade secondarie, gravel, centri storici, cantine, siti archeologici, costa e servizi locali entrano
                  in una grammatica comune. Ogni nodo può accogliere, raccontare, vendere e far proseguire il viaggio.
                </p>
                <p className="promise">
                  La promessa è chiara: il tuo lavoro conserva la propria identità e acquisisce la forza commerciale di
                  una rete territoriale.
                </p>
              </div>
            </div>
            <div className="image-panel image-panel--tall">
              <Image
                src="/images/22.png"
                alt="Strada rurale tra campi agricoli vista dall’alto"
                fill
                sizes="(min-width: 900px) 45vw, 100vw"
              />
              <span>DAL TRACCIATO / AL PRODOTTO</span>
            </div>
          </div>
          <div className="container infrastructure-grid">
            {infrastructure.map(([title, text, Icon], index) => (
              <article key={title}>
                <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--map" id="tracciato">
          <div className="container split split--intro trail-intro">
            <SectionHeading
              kicker="03 / IL TRACCIATO"
              title="260 chilometri che connettono luoghi, servizi e opportunità."
            />
            <div className="prose prose--light">
              <p>
                Il tracciato GPX attraversa Vittoria, Acate, Comiso e Chiaramonte Gulfi lungo strade secondarie, tratti
                gravel, paesaggi agricoli, costa e centri urbani. La sua geometria offre una struttura concreta per
                organizzare accessi, tappe, servizi e prodotti turistici.
              </p>
              <p>
                Percorri la mappa per esplorare l’estensione dell’anello. Ogni avanzamento rappresenta nuove possibilità
                di attivazione per ospitalità, ristorazione, vino, mobilità, cultura e servizi tecnici.
              </p>
            </div>
          </div>
          <div className="container">
            <InteractiveTrailMap />
          </div>
          <div className="container trail-partner-note">
            <MapPinned aria-hidden="true" />
            <p>
              Per i partner, il tracciato è uno strumento di pianificazione: rende visibili i nodi di servizio, facilita
              la costruzione dei pacchetti e distribuisce i flussi lungo l’intero territorio.
            </p>
            <small>Rappresentazione narrativa e orientativa del circuito, basata sul tracciato GPX.</small>
          </div>
        </section>

        <section className="section section--dark benefits" id="benefici">
          <div className="container benefits__intro">
            <SectionHeading
              kicker="04 / IL RITORNO PER IL PARTNER"
              title="Il valore generato per ogni partner."
              intro="La rete amplia le occasioni commerciali, rafforza la presenza sul mercato e introduce strumenti per leggere il ritorno. Ogni categoria attiva benefici specifici e contribuisce alla costruzione della destinazione."
            />
            <div className="benefits__statement">
              <span>IL VANTAGGIO COMUNE</span>
              <p>Essere trovati dentro una destinazione che il mercato può capire, scegliere e acquistare.</p>
            </div>
          </div>
          <div className="container benefit-grid">
            {partnerBenefits.map((item, index) => <BenefitCard key={item.title} item={item} index={index} />)}
          </div>
          <aside className="container workation-partnership-note">
            <Building2 aria-hidden="true" />
            <div>
              <span>PARTNERSHIP SPECIALI PER LA WORKATION</span>
              <p>
                Le Workation Station sono infrastrutture territoriali da attivare attraverso accordi dedicati tra enti
                pubblici, strutture ricettive, operatori locali, soggetti privati e partner corporate. Palazzi storici,
                immobili pubblici, spazi rigenerati e luoghi lungo la costa possono diventare presìdi di lavoro e
                accoglienza con standard condivisi.
              </p>
            </div>
          </aside>
          <div className="container photo-duo">
            <div className="image-panel">
              <Image src="/images/19.png" alt="Vigneti e paesaggio agricolo siciliano visti dall’alto" fill sizes="50vw" />
              <span>PRODOTTO / TERRITORIO</span>
            </div>
            <div className="image-panel">
              <Image src="/images/10.png" alt="Spazio di lavoro territoriale con professionisti" fill sizes="50vw" />
              <span>LAVORO / PERMANENZA</span>
            </div>
          </div>
        </section>

        <section className="section section--partner" id="rete">
          <div className="container split split--intro">
            <SectionHeading
              light
              kicker="05 / PARTNER PROGRAMME"
              title="Un percorso chiaro, dall’adesione al mercato."
            />
            <div className="prose">
              <p>
                Il partner programme segue una sequenza precisa: capire il tuo ruolo, verificare gli standard, inserirti
                nei prodotti più coerenti, comunicare l’offerta e misurare i risultati. Visione e metodo procedono insieme.
              </p>
            </div>
          </div>
          <ol className="container step-list">
            {networkSteps.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section section--light" id="prodotti">
          <div className="container">
            <SectionHeading
              light
              kicker="06 / PRODOTTI"
              title="Esperienze riconoscibili. Prodotti pronti per il mercato."
              intro="FRAPPATO TRAIL trasforma gli itinerari in offerte chiare, costruite su target reali e capaci di distribuire valore tra partner complementari."
            />
          </div>
          <div className="container product-grid">
            {products.map((product, index) => (
              <article
                key={product.title}
                className={`product-card product-card--${index + 1} ${index === 0 ? "product-card--wide" : ""}`}
              >
                <div className="product-card__media">
                  <Image src={product.image} alt={product.alt} fill sizes={index === 0 ? "(min-width: 900px) 50vw, 100vw" : "(min-width: 900px) 25vw, 50vw"} />
                </div>
                <div className="product-card__content">
                  <span>0{index + 1}</span>
                  <h3>{product.title}</h3>
                  <p>{product.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section workation-intro" id="workation">
          <div className="container workation-hero">
            <div className="workation-hero__copy">
              <SectionHeading
                kicker="07 / WORKATION STATIONS"
                title="Una rete per lavorare bene, vivere il territorio e restare più a lungo."
                intro="Le Workation Station sono presìdi di lavoro e accoglienza distribuiti nei nodi del circuito FRAPPATO TRAIL. Trasformano la workation in un’esperienza organizzata: connessione affidabile, postazioni attrezzate, servizi locali, mobilità leggera, community e accesso al territorio."
              />
              <div className="prose prose--light">
                <p>
                  L’obiettivo è permettere a remote worker, freelance, team aziendali e professionisti ibridi di
                  lavorare da remoto in Sicilia mantenendo continuità operativa, qualità della vita e relazione con
                  luoghi, persone e imprese locali.
                </p>
              </div>
            </div>
            <div className="workation-hero__media">
              <Image
                src="/images/10.png"
                alt="Workation Station attrezzata per remote working nella Sicilia sud-orientale"
                fill
                sizes="(min-width: 900px) 46vw, 100vw"
              />
              <span>WORK / LIVE / CONNECT</span>
            </div>
          </div>
          <aside className="container workation-seo-box">
            <Globe2 aria-hidden="true" />
            <p>
              FRAPPATO TRAIL propone un modello di <strong>workation in Sicilia sud-orientale</strong> pensato per
              generare valore locale: soggiorni più lunghi, presenze fuori stagione, utilizzo di servizi quotidiani e
              nuove opportunità per strutture ricettive, Workation Station, ristorazione, mobilità, produttori, cantine e
              operatori culturali.
            </p>
          </aside>
        </section>

        <section className="section section--light workation-stations" aria-labelledby="workation-stations-title">
          <div className="container workation-block-heading">
            <Kicker light>WORKATION STATION SICILIA</Kicker>
            <h2 id="workation-stations-title">Cosa sono le Workation Station</h2>
            <p>
              Sono spazi di lavoro attrezzati e riconoscibili, collegati alla rete FRAPPATO TRAIL. Possono nascere in
              immobili pubblici, strutture ricettive, palazzi storici, spazi culturali o luoghi rigenerati dei quattro
              comuni, attraverso partnership speciali pubblico-private.
            </p>
            <p>
              Ogni stazione funziona come punto di accesso al territorio: un luogo dove lavorare, ricevere orientamento,
              incontrare altri professionisti, prenotare servizi locali e scoprire le esperienze del circuito.
            </p>
          </div>
          <div className="container workation-pillar-grid">
            {workationPillars.map(([title, text, Icon], index) => (
              <article key={title}>
                <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="container workation-standards">
            <div className="workation-standards__intro">
              <Kicker light>STANDARD WORKATION-FRIENDLY</Kicker>
              <h2>Standard essenziali per una Workation Station</h2>
              <p>
                Una Workation Station offre continuità lavorativa, comfort, orientamento e accesso reale al territorio.
                Standard condivisi permettono a remote worker, freelance, team aziendali e professionisti ibridi di
                lavorare bene e vivere la destinazione con semplicità.
              </p>
            </div>
            <div className="workation-standard-grid">
              {workationStandards.map(([title, text, Icon], index) => (
                <article key={title}>
                  <div className="workation-standard-grid__top">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="workation-quality">
              <blockquote>
                Una Workation Station efficace unisce tre livelli: lavoro affidabile, vita quotidiana semplice e
                relazione con il territorio. La qualità dello spazio genera fiducia, permanenza e valore per tutta la rete.
              </blockquote>
              <div>
                <span>MINI CHECKLIST / 10 STANDARD</span>
                <ul>
                  {stationChecklist.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--partner workation-flow">
          <div className="container split split--intro">
            <div className="workation-block-heading">
              <Kicker light>COME FUNZIONANO</Kicker>
              <h2>Dal nodo al soggiorno, in sei passaggi misurabili.</h2>
            </div>
            <div className="prose">
              <p>
                Il remote worker o il team aziendale sceglie un nodo, prenota un alloggio accreditato, accede alla
                Workation Station e riceve una FRAPPATO Resident Card per utilizzare servizi, convenzioni ed esperienze.
              </p>
              <p>
                La destinazione diventa semplice da abitare: ogni persona sa dove lavorare, come muoversi, dove mangiare
                e quali esperienze prenotare durante il soggiorno.
              </p>
            </div>
          </div>
          <ol className="container workation-step-list">
            {workationSteps.map(([title, text], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>

          <div className="container workation-nodes">
            <div className="workation-nodes__intro">
              <Kicker light>NODI TERRITORIALI</Kicker>
              <h2>Cinque nodi, una sola rete workation.</h2>
              <p>
                Le Workation Station distribuiscono i remote worker su più punti del circuito. Ogni nodo assume una
                funzione specifica e attiva partner complementari.
              </p>
            </div>
            <div className="workation-node-grid">
              {workationNodes.map(([title, text], index) => (
                <article key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="container workation-value">
            <div className="workation-value__heading">
              <Kicker light>VALORE PER I PARTNER</Kicker>
              <h2>Cosa generano per la rete locale</h2>
              <p>
                Le Workation Station trasformano il remote worker in un residente temporaneo attivo. La sua presenza
                si distribuisce nei giorni feriali, nei mesi di spalla e nei servizi ordinari del territorio, generando
                nuove occasioni di lavoro, maggiore continuità e una domanda più stabile.
              </p>
            </div>
            <div className="workation-value-grid">
              {workationPartnerValue.map(([title, text, Icon], index) => (
                <article key={title}>
                  <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section corporate-passport" id="corporate-passport">
          <div className="container corporate-passport__hero">
            <div>
              <SectionHeading
                kicker="CORPORATE WORKATION PASSPORT"
                title="Il pass aziendale per lavorare dalla Sicilia, dentro una destinazione organizzata."
                intro="Il Corporate Workation Passport è il prodotto B2B di FRAPPATO TRAIL per aziende con team ibridi, professionisti distribuiti e politiche HR orientate a flessibilità, benessere, retention ed employer branding."
              />
              <div className="prose prose--light">
                <p>
                  Dipendenti, piccoli team e gruppi di lavoro accedono alle Workation Station con servizi già
                  organizzati: postazioni attrezzate, connessione affidabile, alloggi accreditati, mobilità leggera,
                  supporto locale ed esperienze culturali e produttive fuori dall’orario di lavoro.
                </p>
              </div>
              <blockquote className="corporate-passport__statement">
                È un benefit produttivo in una destinazione con identità. L’azienda offre ai collaboratori giorni o
                settimane di remote working in Sicilia, dentro un sistema che integra lavoro, benessere, cultura e comunità.
              </blockquote>
            </div>
            <div className="corporate-passport__media">
              <Image
                src="/images/27.png"
                alt="Team aziendale durante una corporate workation e un team retreat in Sicilia"
                fill
                sizes="(min-width: 900px) 38vw, 100vw"
              />
              <span>B2B / PEOPLE / TERRITORY</span>
            </div>
          </div>

          <div className="container passport-module">
            <div className="passport-module__heading">
              <Kicker>COSA INCLUDE</Kicker>
              <h2>Un unico pass. Spazi, soggiorno e territorio coordinati.</h2>
            </div>
            <div className="passport-grid">
              {passportIncludes.map(([title, text], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="container corporate-benefits">
            <div className="corporate-benefits__visual">
              <Image
                src="/images/13.png"
                alt="Spazio di lavoro territoriale per team retreat, welfare aziendale e temporary relocation in Sicilia"
                fill
                sizes="(min-width: 900px) 42vw, 100vw"
              />
              <span>WORK / TEAM / RETREAT</span>
            </div>
            <div className="corporate-benefits__content">
              <Kicker>PERCHÉ CONVIENE ALLE AZIENDE</Kicker>
              <h2>La flessibilità diventa un’esperienza concreta.</h2>
              <p>
                Il Corporate Workation Passport rende il lavoro da remoto una formula organizzata, sicura e
                riconoscibile. Per HR, People & Culture e team manager diventa uno strumento di welfare aziendale
                workation, employer branding, retention, team experience e temporary relocation in Sicilia.
              </p>
              <div className="corporate-benefit-grid">
                {corporateBenefits.map(([title, text]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="container corporate-target">
            <div>
              <Kicker>A CHI È RIVOLTO</Kicker>
              <h2>Team e aziende che scelgono un nuovo modo di lavorare.</h2>
              <p>
                Un prodotto corporate workation dedicato a organizzazioni che cercano un team retreat in Sicilia,
                spazi workation in Sicilia e soluzioni di temporary relocation semplici da attivare.
              </p>
            </div>
            <ul>
              {corporateTargets.map((target) => <li key={target}><Check aria-hidden="true" />{target}</li>)}
            </ul>
          </div>

          <div className="container workation-cta">
            <div>
              <Kicker>ATTIVA LA RETE WORKATION</Kicker>
              <h2>Vuoi attivare una Workation Station o testare il Corporate Passport?</h2>
            </div>
            <div>
              <p>
                FRAPPATO TRAIL è aperto a strutture ricettive, enti, aziende e partner speciali interessati a
                costruire una rete workation nella Sicilia sud-orientale.
              </p>
              <p>
                Possiamo definire insieme il nodo, i servizi, i partner da coinvolgere e il modello capace di
                trasformare la workation in valore reale per il territorio.
              </p>
              <a
                className="button button--dark"
                href="#contatti"
                aria-label="Parliamo della rete workation FRAPPATO TRAIL"
              >
                Parliamo della rete workation <ArrowRight aria-hidden="true" />
              </a>
              <small>
                Scrivimi per proporre uno spazio, aderire come struttura workation-friendly o valutare il Corporate
                Workation Passport per la tua azienda.
              </small>
            </div>
          </div>
        </section>

        <section className="section section--blue" id="modello">
          <div className="container split">
            <div>
              <SectionHeading
                kicker="08 / MODELLO ECONOMICO"
                title="Un modello economico che distribuisce e misura il valore."
                intro="Investimento pubblico e ricavi di mercato svolgono ruoli diversi ma complementari: il primo abilita il sistema, i secondi ne sostengono la crescita."
              />
              <div className="prose prose--light">
                <p>
                  La regia sostiene piattaforma, comunicazione, standard, dati e controllo qualità. I partner incassano
                  dai servizi erogati. Il territorio guadagna permanenza, reputazione, competenze e una spesa più
                  distribuita.
                </p>
              </div>
            </div>
            <div className="image-panel image-panel--tall">
              <Image src="/images/4.png" alt="Strada panoramica immersa nel paesaggio verde" fill sizes="45vw" />
              <span>VALORE / DISTRIBUITO</span>
            </div>
          </div>
          <div className="container value-grid">
            {valueSources.map(([title, text], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <blockquote className="container big-quote">
            FRAPPATO TRAIL costruisce un sistema che facilita la visibilità, l’acquisizione di clienti, la vendita di
            esperienze e la misurazione del ritorno.
          </blockquote>
        </section>

        <section className="section section--light" id="governance">
          <div className="container split split--intro">
            <SectionHeading light kicker="09 / GOVERNANCE E FIDUCIA" title="Una visione condivisa, sostenuta da una regia precisa." />
            <div className="prose">
              <p>
                Responsabilità chiare, decisioni tempestive e una struttura operativa coordinano partner, prodotto,
                comunicazione, dati e qualità dell’esperienza.
              </p>
              <p>
                Per questo separiamo indirizzo pubblico, partecipazione degli operatori e gestione tecnica. Ognuno
                contribuisce dove può incidere davvero.
              </p>
            </div>
          </div>
          <div className="container governance-grid">
            {governance.map(([title, text, Icon], index) => (
              <article key={title}>
                <div><span>0{index + 1}</span><Icon aria-hidden="true" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section--dark pilot" id="pilota">
          <div className="container split">
            <div className="image-panel image-panel--tall">
              <Image src="/images/16.png" alt="Vista in prima persona di una bicicletta su un sentiero rurale" fill sizes="45vw" />
              <span>START / BUILD / MEASURE</span>
            </div>
            <div>
              <SectionHeading
                kicker="10 / FASE PILOTA"
                title="Una fase pilota selettiva, orientata ai risultati."
                intro="La fase pilota coinvolge i partner pronti, verifica i servizi disponibili e costruisce una prima versione del circuito capace di presentarsi al mercato."
              />
              <div className="prose prose--light">
                <p>
                  Segmenti prioritari, pacchetti pilota, pass, contenuti e calendario esperienziale diventano il banco
                  di prova. La domanda guida l’ottimizzazione e prepara una crescita fondata su dati concreti.
                </p>
              </div>
              <ul className="check-list">
                {pilotGoals.map((goal) => (
                  <li key={goal}><Check aria-hidden="true" />{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      <section className="final-cta" id="cta">
          <Image
            src="/images/3.png"
            alt="Ciclista davanti alla costa mediterranea della Sicilia"
            fill
            sizes="100vw"
          />
          <div className="final-cta__shade" aria-hidden="true" />
          <div className="container final-cta__content">
            <Kicker>11 / LET’S BUILD THE NETWORK</Kicker>
            <h2>
              <span>Costruiamo insieme.</span>
              <span>Una destinazione competitiva.</span>
            </h2>
            <p>
              FRAPPATO TRAIL cerca enti, operatori e imprese pronti a dare forma a una nuova infrastruttura per il
              turismo lento nella Sicilia sud-orientale.
            </p>
            <p>
              Partiamo dalle competenze e dai servizi della tua organizzazione, individuiamo il ruolo più efficace
              nella rete e valutiamo il valore che può essere generato.
            </p>
            <a className="button button--primary" href="#contatti" aria-label="Contattami per esplorare le possibilità di rete">
              Contattami per esplorare le possibilità di rete <ArrowRight aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section section--light contact" id="contatti">
          <div className="container split">
            <div>
              <SectionHeading
                light
                kicker="12 / MANIFESTAZIONE DI INTERESSE"
                title="Definiamo il tuo ruolo nella rete."
                intro="Presenta la tua attività, i servizi che puoi attivare e gli obiettivi che condividi per il territorio. Valuteremo insieme come FRAPPATO TRAIL può diventare una leva concreta per la tua organizzazione."
              />
              <div className="contact__direct">
                <span>CONTATTO DIRETTO</span>
                <strong>Sefora Pepi</strong>
                <p>Creative &amp; Brand Developer</p>
                <a href="mailto:hello@seforapepi.it">hello@seforapepi.it</a>
              </div>
            </div>
            <form
              className="contact-form"
              action="mailto:hello@seforapepi.it"
              method="post"
              encType="text/plain"
            >
              <label>Nome e cognome<input name="Nome e cognome" type="text" autoComplete="name" required /></label>
              <label>Azienda / Ente<input name="Azienda / Ente" type="text" autoComplete="organization" required /></label>
              <label>Ruolo<input name="Ruolo" type="text" autoComplete="organization-title" /></label>
              <label>Email<input name="Email" type="email" autoComplete="email" required /></label>
              <label>Telefono<input name="Telefono" type="tel" autoComplete="tel" /></label>
              <label>
                Che tipo di partner sei?
                <select name="Tipologia partner" defaultValue="" required>
                  <option value="" disabled>Seleziona una tipologia</option>
                  {partnerOptions.map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
              <label className="contact-form__message">Messaggio<textarea name="Messaggio" rows={6} required /></label>
              <button type="submit" className="button button--dark" aria-label="Esploriamo insieme la rete">
                Esploriamo insieme la rete <Send aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <strong>FRAPPATO TRAIL</strong>
          <span>Attraversare il territorio. Organizzare la destinazione.</span>
        </div>
        <div>
          <strong>Sefora Pepi</strong>
          <span>Creative &amp; Brand Developer</span>
          <a href="mailto:hello@seforapepi.it">hello@seforapepi.it</a>
        </div>
        <a href="#top" aria-label="Torna all’inizio della pagina">MOVE. THIS IS SICILY. ↑</a>
      </footer>
      <a className="mobile-cta" href="#contatti" aria-label="Entra nella rete FRAPPATO TRAIL">
        Entra nella rete <ArrowRight aria-hidden="true" />
      </a>
    </>
  );
}
