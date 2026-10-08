// Data store containing rich STS analysis and metadata for all actors
const actorsData = {
  center: {
    id: "center",
    title: "Pečující osoby a chůvy v DS",
    category: "people",
    categoryBadge: "Cílová skupina & Jádro",
    categoryColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    zone: "Střed zájmu (Zóna 0)",
    icon: "👥",
    isNonHuman: false,
    stsType: "Lidský klíčový aktér",
    stsDescription: "Centrální lidský uzel, na který se sbíhají tlaky rodičů, dětí, legislativy i technologií. Vykonává neviditelnou emocionální a organizační práci.",
    description: "Pečující osoby denně balancují mezi neustálou fyzickou péčí o batolata (přebalování, krmení, utěšování) a unavující mentální přípravou po večerech. Zkušené chůvy často jedou na autopilota a inovace odmítají; mladší bojují s diferenciací her a sháněním vizuálů.",
    friction: "Časový deficit, strach z neporozumění s rodiči při krizových momentech, únava a absence pracovních digitálních zařízení.",
    aiOpportunity: "Rychlá zkratka pro diplomatickou formulaci e-mailů rodičům a generování věkově přiměřených senzorických her (do 3 let).",
    connectedFlows: [
      { name: "Pravidla & provozní pokyny", type: "power", dir: "in", from: "manager" },
      { name: "Péče & senzorické hry", type: "data", dir: "out", to: "toddlers" },
      { name: "Očekávání & emoce", type: "emotions", dir: "in", from: "parents" },
      { name: "Generované texty & nápady", type: "data", dir: "in", from: "aichat" },
      { name: "Reporty & fotky", type: "data", dir: "out", to: "twigsee" },
      { name: "Večerní hledání inspirace", type: "emotions", dir: "out", to: "pinterest" },
      { name: "Tisk & mobilní obsluha", type: "data", dir: "out", to: "hardware" }
    ]
  },

  toddlers: {
    id: "toddlers",
    title: "Děti v dětské skupině (2,5–5 let)",
    category: "people",
    categoryBadge: "Lidé a skupiny",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    zone: "1. Kruh (Přímý kontakt)",
    icon: "👶",
    isNonHuman: false,
    stsType: "Smíšená věková skupina",
    stsDescription: "Pasivní příjemci programu s výraznými vývojovými rozdíly. Jejich věkové rozpětí (2,5 až 5 let) klade nároky na diferenciaci programu a bezpečnou stimulaci.",
    description: "Smíšená věková skupina s obrovskými vývojovými rozdíly. Dvouapůlleté děti potřebují senzomotorické hry a jednoduchost, pětileté děti předškolní přípravu a jemnou motoriku. Pro pečující osoby je nejnáročnější vymýšlet diferencované aktivity tak, aby se zabavily obě věkové hladiny současně.",
    friction: "Obtížná diferenciace programu pro mladší a starší děti v jedné skupině; riziko přehlcení mladších nebo nudy starších dětí.",
    aiOpportunity: "AI asistent pro tvorbu 2 paralelních variant aktivity (např. verze pro 2,5–3 roky a rozšířená verze pro 4–5 let na stejné téma).",
    connectedFlows: [
      { name: "Realizace diferencovaného programu a péče", type: "data", dir: "in", from: "center" }
    ]
  },

  parents: {
    id: "parents",
    title: "Rodiče malých dětí",
    category: "people",
    categoryBadge: "Lidé a skupiny",
    categoryColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    zone: "1. Kruh (Přímý kontakt)",
    icon: "👨‍👩‍👧",
    isNonHuman: false,
    stsType: "Lidský stakeholder & plátce",
    stsDescription: "Příjemci zpráv a klienti služby. Jejich úzkost ze separace generuje tlak na transparentnost a frekvenci komunikace ze strany chův.",
    description: "Rodiče svěřují své nejmenší děti do cizí péče poprvé v životě. Očekávají každodenní laskavé a detailní zprávy. Neobratně formulovaná zpráva o incidentu (kousnutí, pád) může vyvolat bouřlivý konflikt.",
    friction: "Emoční napětí, nedostatek času při předávání dětí, obavy o bezpečí a soukromí fotografií.",
    aiOpportunity: "AI jako diplomatický mediátor – pomáhá chůvě přeformulovat strohou zprávu do empatického a uklidňujícího tónu.",
    connectedFlows: [
      { name: "Očekávání & emoční nároky", type: "emotions", dir: "out", to: "center" },
      { name: "Platba školkovného", type: "money", dir: "out", to: "manager" },
      { name: "Příjem zpráv & fotografií", type: "data", dir: "in", from: "twigsee" }
    ]
  },

  manager: {
    id: "manager",
    title: "Vedoucí / Provozovatel DS",
    category: "institutions",
    categoryBadge: "Instituce a autority",
    categoryColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    zone: "1. Kruh (Provozní autorita)",
    icon: "🏢",
    isNonHuman: false,
    stsType: "Institucionální lidský aktér",
    stsDescription: "Držitel lokální moci a odpovědnosti. Filtruje státní požadavky směrem k personálu a schvaluje nákup pomůcek a software.",
    description: "Nese plnou právní a finanční odpovědnost za bezpečí dětí a udržení dotací od MPSV. Má zájem na hladkém chodu bez stížností rodičů a s minimálními dodatečnými náklady na licence.",
    friction: "Přetížení administrativou, fluktuace chův, obava ze sankcí při porušení GDPR u AI nástrojů.",
    aiOpportunity: "Šablony pro provozní řády, zprávy pro inspekce a automatizace komunikace s úřady.",
    connectedFlows: [
      { name: "MPSV personální standardy", type: "power", dir: "in", from: "mpsv" },
      { name: "Hygienické předpisy", type: "power", dir: "in", from: "hygiena" },
      { name: "Státní dotace na kapacitu", type: "money", dir: "in", from: "mpsv" },
      { name: "Příspěvky od rodičů", type: "money", dir: "in", from: "parents" },
      { name: "Pravidla a schvalování nástrojů", type: "power", dir: "out", to: "center" }
    ]
  },

  aichat: {
    id: "aichat",
    title: "AI Modely (ChatGPT / Claude)",
    category: "tech",
    categoryBadge: "Technologie a systémy",
    categoryColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    zone: "1. Kruh (Technologický asistent)",
    icon: "🤖",
    isNonHuman: true,
    stsType: "⚡ Nelidský generativní aktér",
    stsDescription: "Algoritmický systém transformující text na základě pravděpodobnostních modelů. Nemá reálné vědomí o tělesnosti batolat.",
    description: "Trénovaný na masivních webových datech. Bez specializovaného vedení (system promptu) trpí tzv. 'předškolkovým zkreslením' – navrhuje aktivity vyžadující stříhání nůžkami nebo složitá pravidla, která batolata nezvládnou.",
    friction: "Halucinace, neznalost české legislativy dětských skupin, nutnost psát dobré prompty.",
    aiOpportunity: "Vyladěné asistenty pro batolecí věk (prompt šablony: senzorické koše, básničky s pohybem, diplomatické odpovědi).",
    connectedFlows: [
      { name: "Čerpání inspirace z webu", type: "data", dir: "in", from: "pinterest" },
      { name: "Generované scénáře a texty", type: "data", dir: "out", to: "center" }
    ]
  },

  hardware: {
    id: "hardware",
    title: "Hardware (Mobil, Tiskárna)",
    category: "tech",
    categoryBadge: "Technologie a systémy",
    categoryColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    zone: "1. Kruh (Materiální zázemí)",
    icon: "🖨️",
    isNonHuman: true,
    stsType: "⚡ Nelidský materiální aktér",
    stsDescription: "Fyzické technologie tvořící kritické hrdlo. Určují, jaké digitální nápady lze vůbec přenést do hmatatelné reality.",
    description: "V dětských skupinách chůvy nemají vlastní stolní počítače. Vše dělají ve spěchu na osobních chytrých telefonech a materiály tisknou na sdílené tiskárně na chodbě (které často dochází toner nebo papír).",
    friction: "Malé displeje mobilů, absence služebních notebooků, nespolehlivý tisk.",
    aiOpportunity: "Výstupy optimalizované pro okamžitý tisk v černobílé verzi a responzivní mobilní rozhraní.",
    connectedFlows: [
      { name: "Příprava k tisku & mobilní práce", type: "data", dir: "in", from: "center" }
    ]
  },

  mpsv: {
    id: "mpsv",
    title: "MPSV (Ministerstvo práce)",
    category: "institutions",
    categoryBadge: "Instituce a autority",
    categoryColor: "bg-slate-500/20 text-slate-300 border-slate-500/30",
    zone: "2. Kruh (Zákonný rámec)",
    icon: "⚖️",
    isNonHuman: false,
    stsType: "Státní regulátor & donátor",
    stsDescription: "Vrcholný státní aktér definující samotnou existenci dětských skupin prostřednictvím zákona č. 247/2014 Sb. a dotačních výzev.",
    description: "Definuje standardy kvality péče, maximální počty dětí na jednu chůvu, hygienické a prostorové požadavky a poskytuje normativní financování.",
    friction: "Rigorózní kontrolní mechanismy, složité vykazování obsazenosti a docházky.",
    aiOpportunity: "Transparentní reporting a zjednodušení evidence naplňování standardů kvality.",
    connectedFlows: [
      { name: "Personální a provozní standardy", type: "power", dir: "out", to: "manager" },
      { name: "Státní dotace na místa v DS", type: "money", dir: "out", to: "manager" }
    ]
  },

  twigsee: {
    id: "twigsee",
    title: "Aplikace (Twigsee / Školka v mobilu)",
    category: "tech",
    categoryBadge: "Technologie a systémy",
    categoryColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    zone: "2. Kruh (Komunikační kanál)",
    icon: "📱",
    isNonHuman: true,
    stsType: "⚡ Nelidský zprostředkovatel (Mediátor)",
    stsDescription: "Software, který není pouhým nástrojem, ale strukturuje formát i frekvenci interakcí mezi chůvičkami a rodiči.",
    description: "Specializovaný informační systém pro správu docházky, omluvenek, fotografií a hromadných zpráv pro rodiče.",
    friction: "Riziko úniku fotografií, čas strávený nahráváním fotografií během provozu.",
    aiOpportunity: "Přímá integrace AI asistenta pro rychlé generování denních hlášení přímo v editačním poli aplikace.",
    connectedFlows: [
      { name: "Fotografie a denní hlášení", type: "data", dir: "in", from: "center" },
      { name: "Notifikace a přehled pro rodiče", type: "data", dir: "out", to: "parents" }
    ]
  },

  pinterest: {
    id: "pinterest",
    title: "Pinterest & Online sítě",
    category: "resources",
    categoryBadge: "Zdroje a inspirace",
    categoryColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    zone: "2. Kruh (Algoritmická inspirace)",
    icon: "📌",
    isNonHuman: true,
    stsType: "⚡ Nelidský algoritmický kurátor",
    stsDescription: "Doporučovací algoritmus, který podsouvá vizuálně dokonalé, avšak časově náročné a nerealistické nápady.",
    description: "Hlavní zdroj inspirace pro tvoření a hry v DS. Nutí chůvy trávit hodiny neplaceného večerního scrollování a vytváří nerealistická očekávání.",
    friction: "Časová ztráta (scrolling trap), nápady často nevhodné pro děti do 3 let.",
    aiOpportunity: "Okamžitá filtrace a konverze obrázkového nápadu na jednoduchý 3-krokový plán pro batolata.",
    connectedFlows: [
      { name: "Večerní neplacená příprava", type: "emotions", dir: "in", from: "center" },
      { name: "Trénovací data a trendy", type: "data", dir: "out", to: "aichat" }
    ]
  },

  hygiena: {
    id: "hygiena",
    title: "Hygiena a kontrolní orgány",
    category: "institutions",
    categoryBadge: "Instituce a dohled",
    categoryColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    zone: "2. Kruh (Bezpečnostní dohled)",
    icon: "🛡️",
    isNonHuman: false,
    stsType: "Kontrolní lidsko-právní orgán",
    stsDescription: "Orgány dohlížející na fyzické parametry prostředí (mikroklima, dezinfekce, manipulace s potravinami).",
    description: "Přísně reguluje materiály, se kterými děti přicházejí do styku (zákaz drobných vdechnutelných předmětů, toxických barev atd.).",
    friction: "Striktní regulace omezující použití některých kreativních AI nápadů bez ověření bezpečnosti.",
    aiOpportunity: "Bezpečnostní kontrolní filtr (AI asistent automaticky zkontroluje, zda navržená aktivita neobsahuje zakázané alergeny/materiály).",
    connectedFlows: [
      { name: "Hygienické normy & kontroly", type: "power", dir: "out", to: "manager" }
    ]
  }
};

// Global state
let currentSelectedNode = "center";
let currentFlowFilter = "all";
let currentCategoryFilter = "all";
let isFlowAnimationActive = true;
let currentZoom = 1;
let currentTheme = "light";

// Initialize on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  selectNode("center");
  initModals();
});

// Theme Handling (Light / Dark Mode)
function initTheme() {
  const savedTheme = localStorage.getItem("ecosystem_theme") || "light";
  applyTheme(savedTheme);
}

function toggleTheme() {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
}

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("ecosystem_theme", theme);
  const html = document.documentElement;
  const themeIcon = document.getElementById("themeIcon");
  const themeText = document.getElementById("themeText");

  if (theme === "dark") {
    html.classList.add("dark");
    if (themeIcon) themeIcon.innerText = "☀️";
    if (themeText) themeText.innerText = "Světlý režim";
  } else {
    html.classList.remove("dark");
    if (themeIcon) themeIcon.innerText = "🌙";
    if (themeText) themeText.innerText = "Tmavý režim";
  }
}

// Select Node and populate inspector
function selectNode(nodeId) {
  const data = actorsData[nodeId];
  if (!data) return;

  currentSelectedNode = nodeId;

  // Update node visual state in SVG
  document.querySelectorAll(".node-item").forEach(el => {
    el.classList.remove("selected");
  });
  const selectedEl = document.getElementById(`node-${nodeId}`);
  if (selectedEl) {
    selectedEl.classList.add("selected");
  }

  // Populate Inspector
  document.getElementById("inspectorTitle").innerText = data.title;
  document.getElementById("inspectorTypeIcon").innerText = data.icon;
  document.getElementById("inspectorZoneBadge").innerText = data.zone;
  document.getElementById("inspectorCategoryBadge").innerText = data.categoryBadge;
  document.getElementById("inspectorCategoryBadge").className = `px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${data.categoryColor}`;
  
  // STS Optika
  document.getElementById("inspectorSTSType").innerText = data.stsType;
  document.getElementById("inspectorSTSText").innerText = data.stsDescription;

  // Texts
  document.getElementById("inspectorDesc").innerText = data.description;
  document.getElementById("inspectorFriction").innerText = data.friction;
  document.getElementById("inspectorAIOpp").innerText = data.aiOpportunity;
  document.getElementById("currentSelectedNodeName").innerText = data.title;

  // Connected flows list
  const flowsListEl = document.getElementById("inspectorFlowsList");
  flowsListEl.innerHTML = "";

  data.connectedFlows.forEach(flow => {
    const pill = document.createElement("span");
    const dirIcon = flow.dir === "in" ? "↓ Vstup" : "↑ Výstup";
    
    let colorClass = "bg-slate-800 text-slate-300 border-slate-700";
    if (flow.type === "power") colorClass = "bg-rose-950/70 text-rose-300 border-rose-800/60";
    if (flow.type === "money") colorClass = "bg-emerald-950/70 text-emerald-300 border-emerald-800/60";
    if (flow.type === "data") colorClass = "bg-sky-950/70 text-sky-300 border-sky-800/60";
    if (flow.type === "emotions") colorClass = "bg-purple-950/70 text-purple-300 border-purple-800/60";

    pill.className = `px-2.5 py-1 rounded-lg text-[11px] font-medium border flex items-center gap-1.5 ${colorClass}`;
    pill.innerHTML = `<strong>${dirIcon}:</strong> ${flow.name}`;
    flowsListEl.appendChild(pill);
  });

  // Highlight connections
  highlightConnectionsForNode(nodeId);
}

// Highlight connected lines and dimmed other nodes
function highlightConnectionsForNode(nodeId) {
  const lines = document.querySelectorAll(".flow-line");
  const nodes = document.querySelectorAll(".node-item");

  // If in a general flow filter, respect it unless explicitly clicking
  lines.forEach(line => {
    const source = line.getAttribute("data-source");
    const target = line.getAttribute("data-target");

    if (source === nodeId || target === nodeId) {
      line.classList.add("highlighted");
      line.classList.remove("dimmed");
    } else {
      line.classList.remove("highlighted");
      if (currentFlowFilter === "all") {
        line.classList.remove("dimmed");
      } else {
        line.classList.add("dimmed");
      }
    }
  });
}

function highlightConnectedNodes() {
  highlightConnectionsForNode(currentSelectedNode);
}

// Set Flow filter (All, Power, Money, Data, Emotions)
function setFlowFilter(type) {
  currentFlowFilter = type;

  // Update pills styling
  document.querySelectorAll(".flow-pill").forEach(pill => {
    if (pill.getAttribute("data-flow") === type) {
      pill.classList.add("active-pill");
    } else {
      pill.classList.remove("active-pill");
    }
  });

  // Badge notification
  const badge = document.getElementById("activeFilterBadge");
  badge.classList.remove("hidden");
  
  const names = {
    all: "Všechny toky",
    power: "Moc a pravidla (Červená)",
    money: "Finance a dotace (Zelená)",
    data: "Data a obsah (Modrá)",
    emotions: "Emoce a neviditelná práce (Fialová)"
  };
  badge.innerText = `Filtr: ${names[type] || type}`;

  // Filter SVG Lines
  const lines = document.querySelectorAll(".flow-line");
  lines.forEach(line => {
    const flowType = line.getAttribute("data-flow-type");
    if (type === "all" || flowType === type) {
      line.classList.remove("dimmed");
      line.style.strokeOpacity = "1";
      line.style.strokeWidth = flowType === "power" ? "2.8" : "2.4";
    } else {
      line.classList.add("dimmed");
      line.style.strokeOpacity = "0.08";
      line.style.strokeWidth = "1";
    }
  });
}

// Filter by 4 Categories
function filterCategory(cat) {
  currentCategoryFilter = cat;
  const nodes = document.querySelectorAll(".node-item");

  nodes.forEach(node => {
    const id = node.id.replace("node-", "");
    const data = actorsData[id];
    if (!data) return;

    if (cat === "all") {
      node.classList.remove("dimmed");
    } else if (cat === "non-human") {
      if (data.isNonHuman) {
        node.classList.remove("dimmed");
        node.classList.add("highlighted");
      } else {
        node.classList.add("dimmed");
        node.classList.remove("highlighted");
      }
    } else {
      if (data.category === cat) {
        node.classList.remove("dimmed");
        node.classList.add("highlighted");
      } else {
        node.classList.add("dimmed");
        node.classList.remove("highlighted");
      }
    }
  });
}

// Toggle Animation of Flow Lines
function toggleFlowAnimation() {
  isFlowAnimationActive = !isFlowAnimationActive;
  const lines = document.querySelectorAll(".flow-line");
  const icon = document.getElementById("animIcon");

  lines.forEach(line => {
    if (isFlowAnimationActive) {
      line.classList.add("animated-flow");
    } else {
      line.classList.remove("animated-flow");
    }
  });

  if (isFlowAnimationActive) {
    icon.classList.remove("text-slate-500");
    icon.classList.add("text-emerald-400");
  } else {
    icon.classList.remove("text-emerald-400");
    icon.classList.add("text-slate-500");
  }
}

// Scenarios Handler
function applyScenario(scenarioKey) {
  closeModal("modalScenarios");

  if (scenarioKey === "scenario1") {
    // Diplomatický e-mail: Chůva + AI + Twigsee + Rodiče
    selectNode("aichat");
    setFlowFilter("data");
    highlightSpecificNodes(["center", "aichat", "twigsee", "parents"]);
  } else if (scenarioKey === "scenario2") {
    // Senzorická hra: Pinterest + AI + Chůva + Batolata + Hardware
    selectNode("pinterest");
    setFlowFilter("data");
    highlightSpecificNodes(["pinterest", "aichat", "center", "hardware", "toddlers"]);
  } else if (scenarioKey === "scenario3") {
    // MPSV kontrola a GDPR: MPSV + Vedoucí + Chůva + Twigsee + Hygiena
    selectNode("mpsv");
    setFlowFilter("power");
    highlightSpecificNodes(["mpsv", "manager", "center", "twigsee", "hygiena"]);
  }
}

function highlightSpecificNodes(nodeIds) {
  document.querySelectorAll(".node-item").forEach(node => {
    const id = node.id.replace("node-", "");
    if (nodeIds.includes(id)) {
      node.classList.remove("dimmed");
      node.classList.add("highlighted");
    } else {
      node.classList.add("dimmed");
      node.classList.remove("highlighted");
    }
  });
}

// Zoom / Scale Controls
function zoomMap(factor) {
  currentZoom *= factor;
  if (currentZoom < 0.7) currentZoom = 0.7;
  if (currentZoom > 2.0) currentZoom = 2.0;
  applyZoom();
}

function resetZoom() {
  currentZoom = 1;
  applyZoom();
  setFlowFilter("all");
  filterCategory("all");
  document.getElementById("categorySelector").value = "all";
  selectNode("center");
}

function applyZoom() {
  const container = document.getElementById("svgContainer");
  container.style.transform = `scale(${currentZoom})`;
}

// Modal handling
function initModals() {
  const btnMethodology = document.getElementById("btnMethodology");
  const btnScenarios = document.getElementById("btnScenarios");
  const btnReset = document.getElementById("btnResetView");

  if (btnMethodology) {
    btnMethodology.addEventListener("click", () => openModal("modalMethodology"));
  }
  if (btnScenarios) {
    btnScenarios.addEventListener("click", () => openModal("modalScenarios"));
  }
  if (btnReset) {
    btnReset.addEventListener("click", resetZoom);
  }

  // Close modals on Escape key or backdrop click
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal("modalMethodology");
      closeModal("modalScenarios");
    }
  });

  document.querySelectorAll(".fixed.inset-0").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
    });
  });
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}
