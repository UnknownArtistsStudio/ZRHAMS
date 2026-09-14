const places = [
  { topic: 'food', area: 'kreis34', name: 'Lidl, Pflanzschulstrasse 7', kind: 'Staple shop', copy: 'A useful discount anchor for Kreis 3 and 4. Make this the place for pantry food, breakfast, vegetables, freezer basics and drinks.', detail: 'Fixed fact · 8004 Zurich', url: 'https://www.lidl.ch/s/de-CH/filialfinder/zuerich/' },
  { topic: 'food', area: 'kreis34', name: 'Helvetiaplatz market', kind: 'Seasonal food', copy: 'A city market for the good things: seasonal produce, flowers and a more enjoyable grocery run. It is not automatically the cheapest basket.', detail: 'Fixed fact · Tuesday & Friday, 06:00-11:00', url: 'https://www.wirtschaftsfoerderung.stadt-zuerich.ch/de/stadtleben/veranstaltungen-und-bewilligungen/gewerbe-und-maerkte/maerkte/lebensmittelmaerkte.html' },
  { topic: 'food', area: 'west', name: 'Lidl, Förrlibuckstrasse 62', kind: 'Zurich West grocery', copy: 'A practical discount branch for a planned workday shop, rather than daily convenience-food spending in Zurich West.', detail: 'Fixed fact · 8005 Zurich', url: 'https://www.lidl.ch/s/de-CH/filialfinder/zuerich/' },
  { topic: 'food', area: 'kreis34', name: 'Kantonsschule Wiedikon cafeteria', kind: 'Practical lunch', copy: 'Publicly accessible cafeteria with a weekday lunch service. A credible low-friction lunch option when you are in Kreis 3.', detail: 'Fixed fact · 11:15-13:30 weekdays', url: 'https://www.zfv.ch/de/essen-gehen/cafeteria-kantonsschule-wiedikon' },
  { topic: 'food', area: 'kreis34', name: 'Ooki Izakaya Wiedikon', kind: 'One good lunch', copy: 'Recent daily menu listings show a CHF 23.50 set lunch. Good when you want a proper lunch, not a daily default.', detail: 'Price check · Zentralstrasse 53', url: 'https://lunchmenu.ch/mittagsmenu/zuerich?lang=en' },
  { topic: 'food', area: 'citywide', name: 'The picnic move', kind: 'Best-value social meal', copy: 'Pick up food at a normal supermarket, fill a bottle, and use the lake or river. Spend on one good bar after, if that is the point.', detail: 'Local price band · low cost / high return', url: 'https://www.stadt-zuerich.ch/trinkwasser' },
  { topic: 'culture', area: 'west', name: 'Migros Museum', kind: 'Free contemporary art', copy: 'A genuine free culture default in the Löwenbräu complex. Make it an after-work plan, then decide whether you want to pay for dinner.', detail: 'Fixed fact · Free · Thu until 20:00', url: 'https://migrosmuseum.ch/en/museum' },
  { topic: 'culture', area: 'centre', name: 'Kunsthaus on Wednesday', kind: 'Free collection day', copy: 'The collection is free for everyone on Wednesdays. This is the day to see it if you do not need a paid temporary exhibition.', detail: 'Fixed fact · Heimplatz 1', url: 'https://www.kunsthaus.ch/en/besuch-planen/besucherinfos/' },
  { topic: 'culture', area: 'centre', name: 'Swiss National Museum', kind: 'Pay once, use well', copy: 'Adult admission is CHF 13, while the annual pass is CHF 35. The free Simply Zurich exhibition makes a good low-cost city introduction.', detail: 'Fixed fact · Museumstrasse 2', url: 'https://www.landesmuseum.ch/en/your-visit/tickets' },
  { topic: 'culture', area: 'citywide', name: 'UZH museums & collections', kind: 'Free academic culture', copy: 'The University of Zurich’s museums and collections are free. Use the Natural History Museum, archaeology, ethnography or the Science Pavilion as a no-cost cultural day.', detail: 'Fixed fact · Free entry', url: 'https://www.uzh.ch/en/explore/museums.html' },
  { topic: 'culture', area: 'centre', name: 'Lindenhof viewpoint', kind: 'Free city view', copy: 'A hilltop stop above the Old Town for river, rooftops and Grossmünster views. Make it part of an Old Town walk, then choose one paid stop only if you want it.', detail: 'Tip credited to ZurichGuru · Free', url: 'https://zurichguru.com/guide/free-and-cheap-things-to-do-in-zurich/' },
  { topic: 'culture', area: 'kreis34', name: 'Kreis 4 & 5 street-art walk', kind: 'Self-guided city walk', copy: 'Walk the railway arches and Zurich West rather than paying for a generic activity. It is a useful way to see the less postcard-perfect side of the city.', detail: 'Tip credited to ZurichGuru · Free', url: 'https://zurichguru.com/guide/free-and-cheap-things-to-do-in-zurich/' },
  { topic: 'culture', area: 'citywide', name: 'Uetliberg Planet Trail', kind: 'Low-cost day out', copy: 'An easy 7.17 km, two-hour hike from Uetliberg to Felsenegg with lake and Alpine views. The walk itself is free; pay only for the transport you need.', detail: 'Fixed fact · 2 hours · 7.17 km', url: 'https://www.zuerich.com/en/visit/nature/planet-trail-hike-from-uetliberg-to-felsenegg' },
  { topic: 'culture', area: 'citywide', name: 'ZVV ActionPass museum offers', kind: 'Seasonal value', copy: 'An autumn 2026 offer includes free admission at several museums, including Kunsthaus and Landesmuseum. Use it only if the date and pass fit your plan.', detail: 'Fixed fact · Check current offer window', url: 'https://www.zvv.ch/de/freizeit-und-events/actionpass/vorteile/museen-zh.html' },
  { topic: 'culture', area: 'lake', name: 'Lake Zurich', kind: 'Free luxury', copy: 'Walk, swim, picnic or watch sunset. A lakeside meal can be worth it for the view; bottled drinks and tourist add-ons usually are not.', detail: 'Always available · Bring water', url: 'https://www.stadt-zuerich.ch/trinkwasser' },
  { topic: 'culture', area: 'lake', name: 'UZH Botanical Garden', kind: 'Free green hour', copy: 'A free, quiet botanical garden with roughly 8,000 types of plant and tropical houses. It is one of the best no-spend resets near the lake.', detail: 'Fixed fact · Zollikerstrasse 107', url: 'https://www.uzh.ch/en/explore/museums/botanischer-garten.html' },
  { topic: 'culture', area: 'citywide', name: 'Stadtgärtnerei', kind: 'Free tropical houses', copy: 'The City Gardening Centre has public greenhouses, park and exhibitions open free every day. It is a better low-cost outing than another cafe afternoon.', detail: 'Fixed fact · Daily 09:00-17:30', url: 'https://www.stadt-zuerich.ch/stadtgaertnerei.html' },
  { topic: 'culture', area: 'west', name: 'Oberer Letten', kind: 'Summer essential', copy: 'A free river pool with a 400m Limmat swimming route near Limmatplatz, intended for swimmers. Check season and water conditions first.', detail: 'Fixed fact · Free entry', url: 'https://www.stadt-zuerich.ch/de/stadtleben/sport-und-erholung/sport-und-badeanlagen/sommerbaeder/oberer-letten.html' },
  { topic: 'transport', area: 'citywide', name: 'ZVV city travel', kind: 'Do the pass maths', copy: 'For occasional city trips, individual tickets are usually cleaner. Buy the monthly pass only after comparing your actual rides with the price.', detail: 'Fixed fact · Adult 1-2 zones CHF 4.70; monthly CHF 88', url: 'https://www.zvv.ch/en/travelcards-and-tickets/tickets/single-tickets.html' },
  { topic: 'transport', area: 'citywide', name: 'SBB Saver Day Pass', kind: 'Day-trip value', copy: 'For a planned Swiss day out, compare standard fare, Supersaver Ticket and Saver Day Pass. Early booking is where the value is.', detail: 'Fixed fact · From CHF 29 with Half Fare', url: 'https://www.sbb.ch/en/offers/find-saver-offers' },
  { topic: 'transport', area: 'citywide', name: 'Zuri Velo / PubliBike', kind: 'Occasional bike hire', copy: 'Useful when it replaces a taxi or a slow tram connection. Check the app for the live tariff, station and bike availability.', detail: 'Fixed fact · around 250 stations in 2026', url: 'https://www.stadt-zuerich.ch/de/mobilitaet/velo/angebote-fuer-das-velo.html' },
  { topic: 'life', area: 'citywide', name: 'Zurich fountains', kind: 'The simplest saving', copy: 'Carry a bottle. The city has more than 1,200 fountains with drinking-quality water. This beats buying water and soft drinks on the move.', detail: 'Fixed fact · Free', url: 'https://www.stadt-zuerich.ch/trinkwasser' },
  { topic: 'life', area: 'citywide', name: 'City pools and rinks', kind: 'Try before subscribing', copy: 'An adult single entry is CHF 8 across the city pool/rink system. Pay per visit until the habit is real; then compare multi-entry options.', detail: 'Fixed fact · CHF 8 adult entry', url: 'https://sportshop.stadt-zuerich.ch/de/eintritt' },
  { topic: 'life', area: 'citywide', name: 'Too Good To Go', kind: 'Rescue-food option', copy: 'Use the app for discounted surplus food from nearby cafes, bakeries, restaurants and supermarkets. Treat it as a flexible bonus, not your weekly meal plan: availability and contents vary.', detail: 'Fixed fact · Available in Switzerland', url: 'https://www.toogoodtogo.com/de-ch' },
  { topic: 'life', area: 'citywide', name: 'Public art walk', kind: 'Free visual culture', copy: 'Zurich has more than 1,300 public artworks. Use a self-guided architecture or public-art route for a free city afternoon rather than paying for a generic attraction.', detail: 'Fixed fact · Citywide', url: 'https://www.zuerich.com/en/inform-plan/useful-information-and-services/zurich-on-a-budget' },
  { topic: 'life', area: 'centre', name: 'Old Town spending rule', kind: 'Worth choosing, not defaulting', copy: 'Go for the walk, churches and galleries. Choose one historic meal or drink if you want it; skip generic Swiss menus and Bahnhofstrasse souvenir browsing.', detail: 'Local rule · no ticket required', url: 'https://www.zuerich.com/en/art-culture' }
];

const presets = {
  lean: { total: 700, values: [280, 80, 30, 25, 15, 45, 40, 35, 75, 75] },
  balanced: { total: 1350, values: [380, 180, 100, 88, 25, 70, 140, 90, 175, 102] },
  social: { total: 2565, values: [500, 400, 250, 160, 45, 110, 350, 200, 400, 150] }
};
const categories = ['Groceries & home food', 'Eating out / takeaway', 'Coffee & alcohol', 'Local transport', 'Phone & data', 'Household & toiletries', 'Sport, culture & nightlife', 'Clothing, gifts & misc', 'Trips / weekend fund', 'Contingency'];
let currentPreset = 'balanced';

const money = value => new Intl.NumberFormat('en-CH', { style: 'currency', currency: 'CHF', maximumFractionDigits: 0 }).format(value);
const areaNames = { kreis34: 'Kreis 3 & 4', west: 'Zurich West', centre: 'Centre & Old Town', lake: 'Lake & Enge', citywide: 'Citywide' };

function renderGuide() {
  const topic = document.querySelector('.tab.active').dataset.topic;
  const area = document.getElementById('area-filter').value;
  const matches = places.filter(place => (topic === 'all' || place.topic === topic) && (area === 'all' || place.area === area || place.area === 'citywide'));
  document.getElementById('guide-cards').innerHTML = matches.map(place => `<article class="guide-card"><div class="card-top"><span class="tag">${place.kind}</span><span class="area-tag">${areaNames[place.area]}</span></div><h3>${place.name}</h3><p>${place.copy}</p><p class="detail"><a href="${place.url}" target="_blank" rel="noreferrer">${place.detail} ↗</a></p></article>`).join('');
}

function renderInputs(values) {
  document.getElementById('budget-inputs').innerHTML = categories.map((category, index) => `<div class="budget-row"><label for="budget-${index}">${category}</label><input id="budget-${index}" type="range" min="0" max="800" step="5" value="${values[index]}"><output for="budget-${index}">${money(values[index])}</output></div>`).join('');
  document.querySelectorAll('.budget-row input').forEach(input => input.addEventListener('input', updateTotals));
  updateTotals();
}

function updateTotals() {
  const monthly = Number(document.getElementById('monthly-budget').value) || 0;
  const values = [...document.querySelectorAll('.budget-row input')].map(input => Number(input.value));
  document.querySelectorAll('.budget-row output').forEach((output, index) => output.textContent = money(values[index]));
  const allocated = values.reduce((sum, value) => sum + value, 0);
  const remaining = monthly - allocated;
  document.getElementById('weekly-total').textContent = `${money(Math.round(monthly / 4.33))} / week`;
  document.getElementById('allocated').textContent = money(allocated);
  const remainingEl = document.getElementById('remaining');
  remainingEl.textContent = money(remaining);
  remainingEl.style.color = remaining < 0 ? '#d65f43' : '#102c43';
  updateDualHome();
}

function updateDualHome() {
  const salary = Number(document.getElementById('annual-salary').value) || 0;
  const payments = Number(document.getElementById('salary-payments').value) || 12;
  const zurichRent = Number(document.getElementById('zurich-rent').value) || 0;
  const otherHomeEur = Number(document.getElementById('other-home-eur').value) || 0;
  const exchangeRate = Number(document.getElementById('eur-chf').value) || 0;
  const monthlyGross = salary / payments;
  const totalHousing = zurichRent + (otherHomeEur * exchangeRate);
  const monthlyLifestyle = Number(document.getElementById('monthly-budget').value) || 0;
  document.getElementById('monthly-gross').textContent = salary ? money(monthlyGross) : '-';
  document.getElementById('total-housing').textContent = totalHousing ? money(totalHousing) : '-';
  document.getElementById('housing-share').textContent = salary && totalHousing ? `${((totalHousing / monthlyGross) * 100).toFixed(1)}%` : '-';
  document.getElementById('after-housing').textContent = salary ? money(monthlyGross - totalHousing) : '-';
  document.getElementById('after-lifestyle').textContent = salary ? money(monthlyGross - totalHousing - monthlyLifestyle) : '-';
}

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => { document.querySelector('.tab.active').classList.remove('active'); tab.classList.add('active'); renderGuide(); }));
document.getElementById('area-filter').addEventListener('change', renderGuide);
document.querySelectorAll('.preset').forEach(button => button.addEventListener('click', () => { document.querySelector('.preset.active').classList.remove('active'); button.classList.add('active'); currentPreset = button.dataset.preset; document.getElementById('monthly-budget').value = presets[currentPreset].total; renderInputs(presets[currentPreset].values); }));
document.getElementById('monthly-budget').addEventListener('input', updateTotals);
['annual-salary', 'zurich-rent', 'other-home-eur', 'eur-chf'].forEach(id => document.getElementById(id).addEventListener('input', updateDualHome));
document.getElementById('salary-payments').addEventListener('change', updateDualHome);
document.getElementById('reset-budget').addEventListener('click', () => { document.getElementById('monthly-budget').value = presets[currentPreset].total; renderInputs(presets[currentPreset].values); });
renderGuide();
renderInputs(presets.balanced.values);
