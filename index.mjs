// Import libraries
import "./styles.css";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Create spots
const SPOTS = [
  {
    key: "SIPA HQ (HiFi Collective)",
    coords: [34.07525631, -118.2815269],
    image: "sipa-hq.png",
    popupHtml:
      "<b>SIPA HQ (HiFi Collective)</b><br>" +
      "SIPA, Inc. was founded in 1972 in response to community concerns re. Pilipino youth gang delinquency.  Today the organization serves the Pilipino diaspora in Los Angeles County.",
  },
  {
    key: "littleManilaLT",
    coords: [34.05035, -118.24165],
    image: "little-manila.png",
    popupHtml:
      "<b>Little Manila (Little Tokyo/DTLA)</b><br>" +
      "Corner of Los Angeles St & 1st St, original “Little Manila” (1920s–1940s).",
  },
  {
    key: "littleManilaFigTemple",
    coords: [34.06065, -118.25085],
    image: "fig-temple.png",
    popupHtml:
      "<b>Temple & Figueroa Filipino Enclave</b><br>" +
      "Before Historic Filipinotown, there was Little Manila. There is no visible Little Manila today; " +
      "the community was displaced by civic center redevelopment and freeway construction. <br><br>",
  },
  {
    key: "echoParkLibrary",
    coords: [34.0666, -118.2598],
    image: "echo-park-library.png",
    popupHtml:
      "<b>Echo Park Branch Library</b><br>" +
      "Philippine Heritage Collection and proposed rededication in honor of Carlos Bulosan.",
  },
  {
    key: "luzonPlaza",
    coords: [34.06825, -118.26565],
    image: "luzon-plaza.png",
    popupHtml:
      "<b>Luzon Plaza / Bahay Apartments</b><br>" +
      "Temple & Bonnie Brae; Luzon Plaza and the “Bahay” apartments, illustrating gentrification and high eviction rates.",
  },
  {
    key: "valorMonument",
    coords: [34.0636, -118.2716],
    image: "valor-monument.png",
    popupHtml:
      "<b>Filipino WWII Veterans “Valor” Monument</b><br>" +
      "Monument honoring Filipino WWII veterans at Lake Street Park.",
  },
  {
    key: "templeCorridor",
    coords: [34.0717, -118.2771],
    image: "temple-corridor.png",
    popupHtml:
      "<b>Temple Street Corridor</b><br>" +
      "Driving west along Temple: notice community institutions including FASGI and SIPA.",
  },
  {
    key: "beverlyCorridor",
    coords: [34.0709, -118.2738],
    image: "beverly-corridor.png",
    popupHtml:
      "<b>Beverly Blvd Corridor</b><br>" +
      "HiFi “port of entry” corridor: former Bahamian restaurant site, Monty Manibog law office, " +
      "Philippine National Bank office, KDI office, Fil-Am Arts theater space, and the “Bev on Beverly” project & mural.",
  },
  {
    key: "unidadPark",
    coords: [34.0669, -118.2706],
    image: "unidad-park.png",
    popupHtml:
      "<b>Unidad Park & Community Garden</b><br>" +
      "Mural “A Glorious History, A Golden Legacy” by Eliseo Art Silva, Filipinotown Gateway, historic St. Columban Church, " +
      "and nearby Belmont High School where Joseph Ileto studied.",
  },
  {
    key: "First & Los Angeles – Little Manila",
    coords: [34.0529, -118.2444],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>First Street &amp; Los Angeles Street</h3>
      <p><strong>Historic District (no longer extant)</strong></p>
      <p>Little Manila, circa 1920s–1940s, served as a cultural-economic hub for mostly male Filipino laborers.</p>
      <p>
        <a href="https://cup.columbia.edu/book/creating-masculinity-in-los-angeless-little-manila/9780231115926/" target="_blank">
          More info
        </a>
      </p>
    `,
  },
  {
    key: "Temple & Figueroa – Filipino Colony",
    coords: [34.0592, -118.2505],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Temple Street &amp; Figueroa Street</h3>
      <p><strong>"Filipino Colony" (no longer extant)</strong></p>
      <p>Carlos Bulosan lived at 714½ W. Temple St. ("Casitas Apartments") from 1936–1937 and at 1026 W. Third St. from 1942–1948.</p>
      <p>
        <a href="https://content.lib.washington.edu/exhibits/bulosan/bibliography.html" target="_blank">Bibliography</a><br/>
        <a href="https://depts.washington.edu/civilr/images/bulosan/105-WF-2457.pdf" target="_blank">Archival document</a>
      </p>
    `,
  },
  {
    key: "Echo Park Branch Library",
    coords: [34.0695, -118.2588],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Echo Park Branch Library</h3>
      <p><strong>1410 W. Temple Street</strong></p>
      <p>The library hosts the Carlos Bulosan Book Club (since 2017) and the Philippine Heritage Collection (since 2012).</p>
      <p>
        <a href="https://friendsofechoparklibrary.org/" target="_blank">Friends of Echo Park Library</a><br/>
        <a href="https://carlosbulosanbookclub.org/" target="_blank">Carlos Bulosan Book Club</a>
      </p>
    `,
  },
  {
    key: "The Park's Finest",
    coords: [34.0667, -118.2608],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>The Park's Finest</h3>
      <p><strong>1267 W. Temple Street</strong></p>
      <p>Popular Filipino-American BBQ restaurant established in 2009.</p>
      <p>
        <a href="https://www.theparksfinest.com/" target="_blank">Website</a>
      </p>
    `,
  },
  {
    key: "Tribal Café",
    coords: [34.0663, -118.265],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Tribal Café</h3>
      <p><strong>1651 W. Temple Street</strong></p>
      <p>Filipino-owned café, originally "Traveler's Café," once located at 808 W. Temple St. near Figueroa and patronized by Carlos Bulosan.</p>
      <p>
        <a href="https://tribalcafe.com/" target="_blank">Website</a>
      </p>
    `,
  },
  {
    key: "FACLA – Filipino Cultural Center",
    coords: [34.067, -118.2666],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Filipino American Community of Los Angeles (FACLA)</h3>
      <p><strong>1740 W. Temple Street</strong></p>
      <p>Established in 1945; in 1965, FACLA built its Filipino Cultural Center building.</p>
      <p>
        <a href="https://www.facebook.com/faclalosangeles" target="_blank">FACLA Facebook</a>
      </p>
    `,
  },
  {
    key: "Valiant Women Mural",
    coords: [34.0669, -118.2659],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Mural: "Valiant Women" (Mga Magigiting na Babae)</h3>
      <p><strong>1714 W. Temple Street</strong></p>
      <p>2025 mural by artists Maryrose Mendoza and Christine Morla honoring valiant Filipino women.</p>
      <p>
        <a href="https://www.maryrosecmendoza.com/mga-magiting-na-babae-valiant-women" target="_blank">Project page</a>
      </p>
    `,
  },
  {
    key: "Kubo Restaurant",
    coords: [34.0686, -118.2731],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Kubo Restaurant (formerly Bahay Kubo)</h3>
      <p><strong>2330 W. Temple Street</strong></p>
      <p>Filipino comfort food served turo-turo cafeteria style.</p>
      <p>
        <a href="https://bahaykuborestaurant.twupro.com/" target="_blank">Website</a>
      </p>
    `,
  },
  {
    key: "Dollar Hits",
    coords: [34.0692, -118.2759],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Dollar Hits</h3>
      <p><strong>2422 W. Temple Street</strong></p>
      <p>Filipino street food spot known for grill-your-own meat skewers.</p>
      <p>
        <a href="https://dollarhitsstreetfood.com/" target="_blank">Website</a>
      </p>
    `,
  },
  {
    key: "HiFi Lights Public Art",
    coords: [34.0703, -118.2655],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>"HiFi Lights" Filipino Public Art</h3>
      <p><strong>West Temple St. between Union Ave. &amp; Vendome St.</strong></p>
      <p>Fifty-four lightposts at 17 bus shelters (2017), designed by Roel Punzalan, expressing kapwa (shared humanity), lakbay (journey), and kapayapaan (peace &amp; harmony).</p>
      <p>
        <a href="https://busstophub.metro.net/street-light-improvements-in-historic-filipinotown-los-angeles-ca/" target="_blank">Project info</a><br/>
        <a href="https://www.youtube.com/watch?v=EnoRB0Mk00g" target="_blank">Video</a>
      </p>
    `,
  },
  {
    key: "SIPA – Search to Involve Pilipino Americans",
    coords: [34.0704, -118.2835],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Search to Involve Pilipino Americans, Inc. (SIPA)</h3>
      <p><strong>3200 W. Temple Street</strong></p>
      <p>Founded in 1972 to address Pilipino youth gang issues; today serves the wider Pilipino diaspora of Los Angeles County.</p>
      <p>
        <a href="https://www.sipacares.org/" target="_blank">Website</a>
      </p>
    `,
  },
  {
    key: "Western Gateway – Historic Filipinotown",
    coords: [34.0789, -118.2723],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Western Gateway: Historic Filipinotown</h3>
      <p><strong>Temple Street at Silver Lake Blvd.</strong></p>
      <p>Monument marker dedicated in 2014, next to the Temple Street Bridge over Silver Lake Blvd. built in 1934.</p>
      <p>
        <a href="https://laecovillage.wordpress.com/2014/02/20/new-historic-filipinotown-western-gateway-dedicated-today/" target="_blank">Article</a>
      </p>
    `,
  },
  {
    key: "FASGI",
    coords: [34.0701, -118.2704],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Filipino American Services Group, Inc. (FASGI)</h3>
      <p><strong>135 N. Park View Ave.</strong></p>
      <p>Community-based organization providing services and programs for Filipino and immigrant communities.</p>
      <p>
        <a href="https://fasgi.org/" target="_blank">Website</a>
      </p>
    `,
  },
  {
    key: "Filipino WWII Veterans Memorial – Valor",
    coords: [34.0693, -118.2736],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Filipino WWII Veterans Memorial "Valor"</h3>
      <p><strong>227 N. Lake Street (Lake Street Park)</strong></p>
      <p>2006 public art memorial by Cheryl Gaulke with granite monoliths and benches honoring Filipino World War II veterans.</p>
      <p>
        <a href="https://cherigaulke.com/portfolio/filipino-wwii-veterans-memorial/" target="_blank">Artist page</a><br/>
        <a href="https://www.latimes.com/archives/la-xpm-2006-nov-12-me-filipino12-story.html" target="_blank">LA Times article</a><br/>
        <a href="https://cherigaulke.wordpress.com/2006/11/11/dedication-of-filipino-wwii-veterans-memorial/" target="_blank">Dedication blog</a>
      </p>
    `,
  },
  {
    key: "Filipino Christian Church",
    coords: [34.0697, -118.266],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Filipino Christian Church</h3>
      <p><strong>301 N. Union Avenue</strong></p>
      <p>Historic-Cultural Monument on the National Register of Historic Places, rooted in the first wave of Filipino immigration to Los Angeles.</p>
      <p>
        <a href="https://www.nps.gov/places/filipino-christian-church.htm" target="_blank">NPS entry</a><br/>
        <a href="https://apiahip.org/everyday/day-84-filipino-christian-church-los-angeles-california" target="_blank">APIAHiP feature</a>
      </p>
    `,
  },
  {
    key: "Saint Columban Church",
    coords: [34.0695, -118.2684],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Saint Columban Church</h3>
      <p><strong>125 Loma Drive</strong></p>
      <p>Converted from an 1892 firehouse in 1947; the present church was built in 1967 and has been a Filipino community hub since the late 1940s.</p>
      <p>
        <a href="https://stcolumbanla.org/" target="_blank">Website</a>
      </p>
    `,
  },
  {
    key: "Unidad Park & Mural – A Glorious History, A Golden Legacy",
    coords: [34.0619, -118.2657],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Unidad Park &amp; Mural: "A Glorious History, A Golden Legacy"</h3>
      <p><strong>1650 Beverly Blvd.</strong></p>
      <p>1995 mural by Eliseo Art Silva, the largest Filipino American mural in the U.S., honoring Filipino history; the park opened in 2007.</p>
      <p>
        <a href="https://www.lanlt.org/unidad-park-community-garden" target="_blank">LANLT page</a><br/>
        <a href="https://sparcinla.org/silva/" target="_blank">SPARC profile</a><br/>
        <a href="https://pza.culture.lacity.gov/portfolio_page/historic-filipinotown-filipino-americans-a-glorious-history-a-golden-legacy-mural-at-unidad-park" target="_blank">City of LA arts</a><br/>
        <a href="https://www.eliseoartsilva.com/" target="_blank">Eliseo Art Silva</a>
      </p>
    `,
  },
  {
    key: "Historic Filipinotown Mural – Ilocano LA",
    coords: [34.0626, -118.27],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Mural: "Historic Filipinotown"</h3>
      <p><strong>Temple Street &amp; Rosemont Avenue</strong></p>
      <p>2025 mural by Ilocano LA celebrating the stories and culture of Historic Filipinotown.</p>
    `,
  },
  {
    key: "Mosaic Mural by Bodeck Luna",
    coords: [34.0618, -118.2709],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Mural: Mosaic Mural by Bodeck Luna</h3>
      <p><strong>1800 Beverly Boulevard</strong></p>
      <p>2025 mosaic mural by artist Bodeck Luna adding contemporary Filipino visual narratives to Beverly Boulevard.</p>
      <p>
        <a href="https://www.bodeckluna.com/" target="_blank">Artist website</a>
      </p>
    `,
  },
  {
    key: "Eastern Gateway – Talang Gabay",
    coords: [34.0641, -118.269],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Eastern Gateway: Historic Filipinotown – "Talang Gabay: Our Guiding Star"</h3>
      <p><strong>Beverly Blvd. at Loma Drive</strong></p>
      <p>Thirty-foot-tall, 80-foot-wide gateway arch designed by Eliseo Art Silva, unveiled in 2022 over Beverly Boulevard.</p>
      <p>
        <a href="https://www.eastwestbank.com/ReachFurther/en/News/Article/Historic-Filipinotown-Eastern-Gateway" target="_blank">East West Bank article</a><br/>
        <a href="https://asianjournal.com/usa/southerncalifornia/los-angeles/our-guiding-star-cultural-gateway-installed-in-las-historic-filipinotown/" target="_blank">Asian Journal story</a>
      </p>
    `,
  },
  {
    key: "Pilipino Workers Center (PWC)",
    coords: [34.0655, -118.2646],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Pilipino Workers Center (PWC)</h3>
      <p><strong>153 Glendale Blvd.</strong></p>
      <p>Grassroots nonprofit founded in 1997 organizing low-wage and immigrant Pilipinx communities.</p>
      <p>
        <a href="https://www.pwcsc.org/" target="_blank">Website</a>
      </p>
    `,
  },
  {
    key: "Fil-Am Arts Headquarters",
    coords: [34.0656, -118.2647],
    image: "sipa-hq.png",
    popupHtml: `
      <h3>Fil-Am Arts, Inc. – Headquarters</h3>
      <p><strong>153 Glendale Blvd.</strong></p>
      <p>501(c)(3) nonprofit that promotes FilAm and Pilipino culture through arts programming and the annual Festival of Philippine Arts and Culture (FPAC).</p>
      <p>
        <a href="https://filamarts-fpac.org/" target="_blank">Website</a>
      </p>
    `,
  },
];

// Import images for spots
import sipaHqImg from "sipa-hq.png";
import littleManilaImg from "littlemanila.png";
import figTempleImg from "fig-temple.png";
import echoParkImg from "echo-park-library.png";
import luzonPlazaImg from "luzon-plaza.png";
import valorImg from "valor-monument.png";
import templeCorridorImg from "temple-corridor.png";
import beverlyCorridorImg from "beverly-corridor.png";
import unidadParkImg from "unidad-park.png";

// Ensure images are imported
const IMAGE_MAP = {
  "sipa-hq.png": sipaHqImg,
  "little-manila.png": littleManilaImg,
  "fig-temple.png": figTempleImg,
  "echo-park-library.png": echoParkImg,
  "luzon-plaza.png": luzonPlazaImg,
  "valor-monument.png": valorImg,
  "temple-corridor.png": templeCorridorImg,
  "beverly-corridor.png": beverlyCorridorImg,
  "unidad-park.png": unidadParkImg,
};

// IMPORT MAP
const map = L.map("map", {
  center: [34.07525631, -118.2815269],
  zoom: 15,
  minZoom: 13,
  maxZoom: 20,
  zoomControl: false, // optional: hides +/– buttons
  maxBounds: [
    [33.937, -118.404], // SW a bit further out
    [34.191, -118.095], // NE a bit further out
  ],
});

// This controls what image is at the back of the map
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors © CARTO",
  subdomains: "abcd",
  maxZoom: 20,
}).addTo(map);

// This actually imports the diff spots, making them visible on map
SPOTS.forEach((spot) => {
  const icon = L.icon({
    iconUrl: IMAGE_MAP[spot.image],
    iconSize: [50, 50],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  L.marker(spot.coords, { icon }).addTo(map).bindPopup(spot.popupHtml);
});

// Idk
const laBounds = L.latLngBounds(
  [34.047621678045076, -118.24700573862224], // southwest corner (approx)
  [34.05550536497346, -118.23874675652449] // northeast corner (approx)
);
const laOverlay = L.imageOverlay(
  "sanborn-little-manila.png",
  laBounds,
  {
    opacity: 100, // How much is the overlay
  }
);
laOverlay.addTo(map);

const sanbornBounds = [
  [34.047621678045076, -118.24700573862224], // SW
  [34.05550536497346, -118.23874675652449], // NE
];

// new toggle
const laToggle = document.getElementById("la-overlay-toggle");
laOverlay.setOpacity(0);
laToggle.addEventListener("change", (e) => {
  const visible = e.target.checked;
  laOverlay.setOpacity(visible ? 1.0 : 0.0);
  if (visible) {
    map.panTo([34.05035, -118.24165]);
  }
});

// FOR FLYING TO DIFF LOCATIONS
function computeDuration(nextLat, nextLng) {
  const currentCenter = map.getCenter();
  const distance = map.distance(
    [currentCenter.lat, currentCenter.lng],
    [nextLat, nextLng]
  ); // meters

  // base duration in seconds
  const base = 0.8;
  const perKm = 0.6; // extra seconds per km

  const km = distance / 1000;
  let duration = base + km * perKm;

  // clamp so very near / very far still feel ok
  if (duration < 0.6) duration = 0.6;
  if (duration > 4) duration = 4;

  return duration;
}

let currentSpotIndex = 0;
function goToSpot(indexChange) {
  currentSpotIndex =
    (currentSpotIndex + indexChange + SPOTS.length) % SPOTS.length;

  const spot = SPOTS[currentSpotIndex];
  if (!spot) return;

  const [lat, lng] = spot.coords;
  const duration = computeDuration(lat, lng);

  map.flyTo([lat, lng], 18, {
    duration: duration,
  });
}

// FUNCTINOALITY: MOVE FWD/BWD
document
  .getElementById("move-forward")
  .addEventListener("click", () => goToSpot(+1));

document
  .getElementById("move-backward")
  .addEventListener("click", () => goToSpot(-1));

const tourButtons = document.getElementById("tour-buttons");
const tourToggle = document.getElementById("show-tour-buttons");

tourButtons.classList.add("hidden");

tourToggle.addEventListener("change", () => {
  if (tourToggle.checked) {
    tourButtons.classList.remove("hidden");
  } else {
    tourButtons.classList.add("hidden");
  }
});
