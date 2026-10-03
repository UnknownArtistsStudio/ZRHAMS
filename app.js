const places = [
  { topic: 'food', area: 'kreis34', name: 'Lidl, Pflanzschulstrasse 7', kind: 'Staple shop', copy: 'A useful discount anchor for Kreis 3 and 4. Make this the place for pantry food, breakfast, vegetables, freezer basics and drinks.', detail: 'Fixed fact · 8004 Zurich', url: 'https://www.lidl.ch/s/de-CH/filialfinder/zuerich/' },
  { topic: 'food', area: 'west', name: 'ALDI, Zollstrasse 58', kind: 'Josefstrasse discount anchor', copy: 'The close-to-home discount option for the weekly basket, toiletries and household consumables. Use it deliberately, then keep Migros for a genuine top-up rather than a second full shop.', detail: 'Fixed fact · 8005 Zurich', url: 'https://www.aldi-suisse.ch/de/filialen-und-oeffnungszeiten.html' },
  { topic: 'food', area: 'kreis34', name: 'Helvetiaplatz market', kind: 'Seasonal food', copy: 'A city market for the good things: seasonal produce, flowers and a more enjoyable grocery run. It is not automatically the cheapest basket.', detail: 'Fixed fact · Tuesday & Friday, 06:00-11:00', url: 'https://www.wirtschaftsfoerderung.stadt-zuerich.ch/de/stadtleben/veranstaltungen-und-bewilligungen/gewerbe-und-maerkte/maerkte/lebensmittelmaerkte.html' },
  { topic: 'food', area: 'west', name: 'Lidl, Förrlibuckstrasse 62', kind: 'Zurich West grocery', copy: 'A practical discount branch for a planned workday shop, rather than daily convenience-food spending in Zurich West.', detail: 'Fixed fact · 8005 Zurich', url: 'https://www.lidl.ch/s/de-CH/filialfinder/zuerich/' },
  { topic: 'food', area: 'kreis34', name: 'Kantonsschule Wiedikon cafeteria', kind: 'Practical lunch', copy: 'Publicly accessible cafeteria with a weekday lunch service. A credible low-friction lunch option when you are in Kreis 3.', detail: 'Fixed fact · 11:15-13:30 weekdays', url: 'https://www.zfv.ch/de/essen-gehen/cafeteria-kantonsschule-wiedikon' },
  { topic: 'food', area: 'kreis34', name: 'Ooki Izakaya Wiedikon', kind: 'One good lunch', copy: 'Recent daily menu listings show a CHF 23.50 set lunch. Good when you want a proper lunch, not a daily default.', detail: 'Price check · Zentralstrasse 53', url: 'https://lunchmenu.ch/mittagsmenu/zuerich?lang=en' },
  { topic: 'food', area: 'citywide', name: 'The picnic move', kind: 'Best-value social meal', copy: 'Pick up food at a normal supermarket, fill a bottle, and use the lake or river. Spend on one good bar after, if that is the point.', detail: 'Local price band · low cost / high return', url: 'https://www.stadt-zuerich.ch/trinkwasser' },
  { topic: 'setup', area: 'citywide', name: 'First 14 days: registration', kind: 'Arrival admin', copy: 'If you are taking up residence in Zurich, use the city’s eUmzugCH route for a new registration or tell the city about an address change. The city states a 14-day reporting window; check your permit and employer requirements separately.', detail: 'Fixed fact · City registration rules', url: 'https://www.stadt-zuerich.ch/umzug' },
  { topic: 'setup', area: 'citywide', name: 'Health insurance: compare the system, not the brand', kind: 'Major monthly cost', copy: 'Swiss basic insurance is compulsory for residents and the core benefits are set by law. Use the federal Priminfo tool for your postcode, model and deductible before adding any voluntary extras.', detail: 'Fixed fact · Official 2026 comparison', url: 'https://www.priminfo.admin.ch/en/' },
  { topic: 'setup', area: 'citywide', name: 'Pharmacy and non-emergency care', kind: 'Know before you need it', copy: 'Keep the city’s emergency-pharmacy and care page bookmarked. For a non-life-threatening medical issue in the canton, the AERZTEFON is 0800 33 66 55; call 144 for acute danger.', detail: 'Fixed fact · 24-hour guidance', url: 'https://www.zh.ch/de/gesundheit/notfall-rettung.html' },
  { topic: 'setup', area: 'citywide', name: 'SIM-only first', kind: 'Phone and data', copy: 'Do not buy a handset through a Swiss contract by default. Compare SIM-only offers against your actual data, EU roaming and contract needs; the cheapest promotion can have activation fees or a long minimum term.', detail: 'Fixed fact · 2026 offer comparison', url: 'https://www.moneyland.ch/en/mobile-plan-comparison' },
  { topic: 'setup', area: 'citywide', name: 'Choose home internet by address', kind: 'Utilities', copy: 'First check whether your rent already includes a connection or router. If you need your own plan, compare it at the exact address: fibre, cable and copper availability vary building by building, as do the offers.', detail: 'Fixed fact · Address-based comparison', url: 'https://www.moneyland.ch/en/internet-plan-comparison' },
  { topic: 'setup', area: 'citywide', name: 'Separate CHF spending from FX spending', kind: 'Banking and cards', copy: 'Use a CHF-capable card or account for local life, then compare total exchange-rate markups and ATM fees for euro or travel spending. Never accept a card terminal’s conversion to your home currency.', detail: 'Fixed fact · FX markups vary by issuer', url: 'https://www.moneyland.ch/en/payments-cash-withdrawals-outside-of-switzerland' },
  { topic: 'setup', area: 'citywide', name: 'Renter cover: check liability before contents', kind: 'Insurance beyond health', copy: 'Personal liability can cover claims for accidental damage to a rented home, while contents insurance covers your own belongings. Read the tenancy and policy scope before buying a bundle or duplicating cover you already have.', detail: 'Fixed fact · Tenant-damage cover explained', url: 'https://www.zurich.ch/en/services/knowledge/homes-and-building/household-insurance' },
  { topic: 'setup', area: 'citywide', name: 'Use the furnished flat before buying extras', kind: 'Home setup', copy: 'The Josefstrasse flat is already furnished. Photograph the inventory and condition at handover, learn the laundry and waste rules, then only buy a consumable or small extra after a real need appears.', detail: 'Practical checklist · do this first', url: 'https://www.stadt-zuerich.ch/umzug' },
  { topic: 'setup', area: 'west', name: 'Caritas Secondhand in Aussersihl', kind: 'Clothing without retail prices', copy: 'The Birmensdorferstrasse 50 flagship has men’s and women’s second-hand clothing, while the nearby Gold shop is for selected labels. Buy a practical winter layer here before paying full Zurich retail prices.', detail: 'Fixed fact · Birmensdorferstrasse 50 · 8004', url: 'https://www.caritas-secondhand.ch/standorte' },
  { topic: 'setup', area: 'citywide', name: 'Laundry: learn the house system first', kind: 'Everyday logistics', copy: 'Many Swiss flats use a shared laundry room and may have booking, payment or drying-room rules. If you need an outside self-service backup, Express Wäscherei on Winterthurerstrasse is open daily.', detail: 'Fixed fact · Winterthurerstrasse 62 · 07:00-22:00', url: 'https://search.ch/tel/zuerich/winterthurerstrasse-62/express-waescherei-self-service.en.html' },
  { topic: 'setup', area: 'citywide', name: 'The blue Züri-Sack is not optional', kind: 'Waste and recycling', copy: 'Use the official waste guide from day one: household rubbish goes in blue Züri-Sacks, while e-waste, bulky goods, chemicals and recyclables have separate routes. Dumping items outside is not a move-out strategy.', detail: 'Fixed fact · City disposal rules', url: 'https://www.stadt-zuerich.ch/entsorgen' },
  { topic: 'nightlife', area: 'kreis34', name: 'Olé Olé Bar', kind: 'Langstrasse institution', copy: 'Tiny, loud, late and thoroughly unpolished. Make this a no-pretence first stop rather than paying for a slick cocktail bar; the official city guide lists it as open daily until 04:00.', detail: 'Fixed fact · Langstrasse 138 · check current hours', url: 'https://oleolebar.ch/' },
  { topic: 'nightlife', area: 'kreis34', name: 'Gotthard Bar', kind: 'Music-first late bar', copy: 'A long-running Langstrasse bar with DJs, concerts and a deliberately unflashy feel. Check the programme and treat it as a music-led night rather than a generic drinks stop.', detail: 'Fixed fact · Langstrasse 63 · Thu-Sat late', url: 'https://www.gotthard-bar.ch/' },
  { topic: 'nightlife', area: 'kreis34', name: 'Hafenkneipe', kind: 'Indie pub with gigs', copy: 'A relaxed sailor-themed local with a proper beer list and regular intimate concerts. Better for a lingering drink and music than a costly club night.', detail: 'Fixed fact · Militärstrasse 12 · programme online', url: 'https://hafenkneipe.info/agenda/' },
  { topic: 'nightlife', area: 'kreis34', name: 'Roxy Musikbar', kind: 'Small live-music room', copy: 'A fresh Kreis 4 music bar with gigs, jams and a regular open mic. Look at the listing before going: it is a good-value alternative when the event suits you.', detail: 'Fixed fact · Zinistrasse 7 · events online', url: 'https://www.roxymusikbar.ch/' },
  { topic: 'nightlife', area: 'kreis34', name: 'Longstreet', kind: 'Hip-hop bar with a dance floor', copy: 'A Langstrasse institution with predominantly black music and a small upstairs dance floor. Better for a spontaneous late stop than paying for a formal club ticket.', detail: 'Fixed fact · Langstrasse 92 · check current hours', url: 'https://longstreetbar.ch/' },
  { topic: 'nightlife', area: 'west', name: 'Helsinki Klub', kind: 'Alternative live venue', copy: 'A small, characterful room for live acts and alternative culture near Hardbrücke. Programme and opening times vary, so use it as an event-led choice rather than a walk-in default.', detail: 'Fixed fact · Geroldstrasse 35 · check programme', url: 'https://www.helsinkiklub.ch/' },
  { topic: 'nightlife', area: 'west', name: 'Mata Hari', kind: 'Late Tiki-bar detour', copy: 'A deliberately theatrical Tiki bar at the north end of Langstrasse. It is a late-night option, not a cheap drinks default: go for the atmosphere and cap the round.', detail: 'Fixed fact · Langstrasse 237 · Tue-Sat late', url: 'https://www.matahari-bar.ch/' },
  { topic: 'nightlife', area: 'west', name: 'Moods', kind: 'Live music, not a generic club', copy: 'A Schiffbauplatz venue for jazz, funk, soul, global music and occasional hip-hop or R&B. Pick one strong bill rather than a random expensive night out; Friday and Saturday have post-concert parties.', detail: 'Fixed fact · Schiffbauplatz · programme online', url: 'https://moods.ch/' },
  { topic: 'nightlife', area: 'west', name: 'Bogen F', kind: 'Under-the-viaduct gigs', copy: 'A non-profit music room beneath the railway arches at Im Viadukt. Check the bill for a genuinely local-feeling concert rather than defaulting to a commercial club.', detail: 'Fixed fact · Viaduktstrasse 97 · programme online', url: 'https://www.bogenf.ch/' },
  { topic: 'nightlife', area: 'centre', name: 'El Lokal', kind: 'Eccentric Sihl-side bar', copy: 'A scruffy, characterful bar and live-music spot by the Sihl. It works as a central alternative to polished Old Town cocktails, especially when there is a concert on.', detail: 'Fixed fact · Gessnerallee 11 · live programme online', url: 'https://www.ellokal.ch/' },
  { topic: 'nightlife', area: 'centre', name: 'Stall 6', kind: 'Creative bar and live room', copy: 'A bar, club and theatre foyer in a former stable near the station. Use it for the programme, not a fixed idea of genre: its bill runs from concerts to comedy and DJ nights.', detail: 'Fixed fact · Gessnerallee 8 · Wed-Sat opening', url: 'https://live.gessnerallee.ch/de/visit/stall6' },
  { topic: 'nightlife', area: 'lake', name: 'Rote Fabrik', kind: 'Lakeside alternative culture', copy: 'A proper citywide destination in Wollishofen: concerts, film, theatre and club events in a former factory on the lake. Check the calendar; it is worth the tram or train when the bill is right.', detail: 'Fixed fact · Seestrasse 395 · programme online', url: 'https://rotefabrik.ch/' },
  { topic: 'nightlife', area: 'kreis34', name: 'Gonzo', kind: 'Non-electronic club', copy: 'The club pick for this brief: an underground Langstrasse room where the music policy is explicitly non-electronic. Check the night, door price and age requirement before committing.', detail: 'Fixed fact · Langstrasse 135 · event-dependent entry', url: 'https://www.zuerich.com/en/events-nightlife/clubs' },
  { topic: 'nightlife', area: 'centre', name: 'Pelikanbar', kind: 'One smarter drink', copy: 'A more polished option with cocktails and music, not a budget base. Use it for one intentional drink before a cheaper Langstrasse finish, rather than staying for a whole night.', detail: 'Fixed fact · Pelikanplatz · open late Thu-Sat', url: 'https://kaufleuten.ch/pelikanbar/' },
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
  { topic: 'transport', area: 'citywide', name: 'ZVV city travel', kind: 'Do the pass maths', copy: 'For occasional city trips, individual tickets are usually cleaner. Buy the monthly pass only after comparing your actual rides with the price.', detail: 'Fixed fact · Adult 1-2 zones CHF 4.60; monthly CHF 88', url: 'https://www.zvv.ch/en/travelcards-and-tickets/tickets/single-tickets.html' },
  { topic: 'transport', area: 'citywide', name: 'SBB Saver Day Pass', kind: 'Day-trip value', copy: 'For a planned Swiss day out, compare standard fare, Supersaver Ticket and Saver Day Pass. Early booking is where the value is.', detail: 'Fixed fact · From CHF 29 with Half Fare', url: 'https://www.sbb.ch/en/offers/find-saver-offers' },
  { topic: 'transport', area: 'citywide', name: 'Zuri Velo / PubliBike', kind: 'Occasional bike hire', copy: 'Useful when it replaces a taxi or a slow tram connection. Check the app for the live tariff, station and bike availability.', detail: 'Fixed fact · around 250 stations in 2026', url: 'https://www.stadt-zuerich.ch/de/mobilitaet/velo/angebote-fuer-das-velo.html' },
  { topic: 'life', area: 'citywide', name: 'Zurich fountains', kind: 'The simplest saving', copy: 'Carry a bottle. The city has more than 1,200 fountains with drinking-quality water. This beats buying water and soft drinks on the move.', detail: 'Fixed fact · Free', url: 'https://www.stadt-zuerich.ch/trinkwasser' },
  { topic: 'life', area: 'citywide', name: 'City pools and rinks', kind: 'Try before subscribing', copy: 'An adult single entry is CHF 8 across the city pool/rink system. Pay per visit until the habit is real; then compare multi-entry options.', detail: 'Fixed fact · CHF 8 adult entry', url: 'https://sportshop.stadt-zuerich.ch/de/eintritt' },
  { topic: 'life', area: 'citywide', name: 'Too Good To Go', kind: 'Rescue-food option', copy: 'Use the app for discounted surplus food from nearby cafes, bakeries, restaurants and supermarkets. Treat it as a flexible bonus, not your weekly meal plan: availability and contents vary.', detail: 'Fixed fact · Available in Switzerland', url: 'https://www.toogoodtogo.com/de-ch' },
  { topic: 'life', area: 'citywide', name: 'Public art walk', kind: 'Free visual culture', copy: 'Zurich has more than 1,300 public artworks. Use a self-guided architecture or public-art route for a free city afternoon rather than paying for a generic attraction.', detail: 'Fixed fact · Citywide', url: 'https://www.zuerich.com/en' },
  { topic: 'life', area: 'centre', name: 'Old Town spending rule', kind: 'Worth choosing, not defaulting', copy: 'Go for the walk, churches and galleries. Choose one historic meal or drink if you want it; skip generic Swiss menus and Bahnhofstrasse souvenir browsing.', detail: 'Local rule · no ticket required', url: 'https://www.zuerich.com/en/art-culture' }
];

const openingHours = {
  'Lidl, Pflanzschulstrasse 7': 'Mon–Fri 08:00–20:00 · Sat 08:00–18:00',
  'ALDI, Zollstrasse 58': 'Mon–Sat 08:00–21:00 · Sun closed',
  'Helvetiaplatz market': 'Tue & Fri 06:00–11:00',
  'Lidl, Förrlibuckstrasse 62': 'Mon–Sat 07:30–21:00 · Sun closed',
  'Kantonsschule Wiedikon cafeteria': 'Weekdays 11:15–13:30',
  'Ooki Izakaya Wiedikon': 'Lunch service · check the current service day before travelling',
  'The picnic move': 'Any time · supermarket and weather dependent',
  'First 14 days: registration': 'Online 24/7 · in-person services use city office hours',
  'Health insurance: compare the system, not the brand': 'Online comparison · 24/7',
  'Pharmacy and non-emergency care': 'AERZTEFON guidance 24/7 · individual pharmacies vary',
  'SIM-only first': 'Online 24/7 · shop hours vary by provider',
  'Choose home internet by address': 'Online comparison · 24/7',
  'Separate CHF spending from FX spending': 'Banking apps and cards · 24/7',
  'Renter cover: check liability before contents': 'Online research · 24/7',
  'Use the furnished flat before buying extras': 'Do this before move-in / handover',
  'Caritas Secondhand in Aussersihl': 'Mon–Fri 10:00–18:30 · Sat 10:00–17:00',
  'Laundry: learn the house system first': 'Self-service backup daily 07:00–22:00',
  'The blue Züri-Sack is not optional': 'Rules online 24/7 · collection follows your address schedule',
  'Olé Olé Bar': 'Daily · late, listed until 04:00',
  'Gotthard Bar': 'Thu–Sat · late; check the current event listing',
  'Hafenkneipe': 'Evenings and gigs · programme-dependent',
  'Roxy Musikbar': 'Event nights · programme-dependent',
  'Longstreet': 'Late bar hours · check the current listing before a late arrival',
  'Helsinki Klub': 'Ticketed event nights · doors vary by bill',
  'Mata Hari': 'Tue–Sat · late; verify tonight’s close',
  'Moods': 'Ticketed shows and post-concert nights · programme-dependent',
  'Bogen F': 'Ticketed event nights · programme-dependent',
  'El Lokal': 'Evenings and shows · programme-dependent',
  'Stall 6': 'Wed–Sat · programme-dependent',
  'Rote Fabrik': 'Event-dependent · check the calendar before travelling',
  'Gonzo': 'Event nights only · check door time, age rule and ticket price',
  'Pelikanbar': 'Thu–Sat · late; verify current close',
  'Migros Museum': 'Tue–Fri 12:00–18:00 · Thu until 20:00 · Sat–Sun 11:00–17:00 · Mon closed',
  'Kunsthaus on Wednesday': 'Wed 10:00–20:00 · free collection access; verify exhibition hours',
  'Swiss National Museum': 'Tue–Sun 10:00–17:00 · Thu until 19:00 · Mon closed',
  'UZH museums & collections': 'Hours vary by collection · check the museum before travelling',
  'Lindenhof viewpoint': 'Outdoor public space · accessible at any time',
  'Kreis 4 & 5 street-art walk': 'Outdoor public space · accessible at any time',
  'Uetliberg Planet Trail': 'Outdoor trail · daylight is best; check weather and last transport home',
  'ZVV ActionPass museum offers': 'Offer and participating venue hours vary · check the current window',
  'Lake Zurich': 'Outdoor public space · accessible at any time',
  'UZH Botanical Garden': 'Daily · seasonal closing time; check before a winter visit',
  'Stadtgärtnerei': 'Daily 09:00–17:30',
  'Oberer Letten': 'Seasonal · check opening date, water conditions and weather',
  'ZVV city travel': 'Tickets and timetable online 24/7',
  'SBB Saver Day Pass': 'Online 24/7 · availability and price change by travel date',
  'Zuri Velo / PubliBike': 'App 24/7 · bike and station availability live',
  'Zurich fountains': 'Outdoor public points · accessible at any time',
  'City pools and rinks': 'Facility-specific · check the selected pool or rink before travelling',
  'Too Good To Go': 'App 24/7 · collection window is shown on each listing',
  'Public art walk': 'Outdoor public space · accessible at any time',
  'Old Town spending rule': 'Public streets 24/7 · individual venues vary'
};

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
  document.getElementById('guide-cards').innerHTML = matches.map(place => `<article class="guide-card"><div class="card-top"><span class="tag">${place.kind}</span><span class="area-tag">${areaNames[place.area]}</span></div><h3>${place.name}</h3><p>${place.copy}</p><p class="hours-line"><span>Hours / availability</span>${openingHours[place.name] || 'Check the live listing before travelling'}</p><p class="detail"><a href="${place.url}" target="_blank" rel="noreferrer">Explore + current hours ↗</a></p></article>`).join('');
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

const presenceStorageKey = 'zrhams-presence-v1';
const presenceTargetStorageKey = 'zrhams-presence-target-v1';
const presenceLocationLabels = { zurich: 'Zürich', switzerland: 'Elsewhere in Switzerland', amsterdam: 'Amsterdam', elsewhere: 'Elsewhere' };

function getPresenceEntries() {
  try {
    const entries = JSON.parse(window.localStorage.getItem(presenceStorageKey) || '[]');
    return Array.isArray(entries) ? entries : [];
  } catch {
    return [];
  }
}

function savePresenceEntries(entries) {
  window.localStorage.setItem(presenceStorageKey, JSON.stringify(entries));
}

function getZurichToday() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Zurich', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const value = Object.fromEntries(parts.filter(part => part.type !== 'literal').map(part => [part.type, part.value]));
  return `${value.year}-${value.month}-${value.day}`;
}

function updatePresenceYearOptions(entries) {
  const selector = document.getElementById('presence-year');
  const currentYear = new Date().getFullYear();
  const selected = selector.value || String(currentYear);
  const years = [...new Set([currentYear, ...entries.map(entry => Number(String(entry.date).slice(0, 4))).filter(Boolean)])].sort((first, second) => second - first);
  selector.innerHTML = years.map(year => `<option value="${year}">${year}</option>`).join('');
  selector.value = years.includes(Number(selected)) ? selected : String(currentYear);
}

function renderPresence() {
  const entries = getPresenceEntries();
  updatePresenceYearOptions(entries);
  const year = document.getElementById('presence-year').value;
  document.getElementById('presence-year-label').textContent = year;
  const yearEntries = entries.filter(entry => String(entry.date).startsWith(`${year}-`));
  const actual = yearEntries.filter(entry => entry.status === 'actual');
  const planned = yearEntries.filter(entry => entry.status === 'planned');
  const zurichDays = actual.filter(entry => entry.location === 'zurich').length;
  const swissDays = actual.filter(entry => ['zurich', 'switzerland'].includes(entry.location)).length;
  const workDays = actual.filter(entry => entry.workInSwitzerland).length;
  document.getElementById('presence-zurich-days').textContent = zurichDays;
  document.getElementById('presence-swiss-days').textContent = swissDays;
  document.getElementById('presence-work-days').textContent = workDays;
  document.getElementById('presence-planned-days').textContent = planned.length;
  const target = Number(document.getElementById('presence-target').value);
  document.getElementById('presence-target-result').textContent = target
    ? `${zurichDays} actual Zürich days recorded · ${Math.max(0, target - zurichDays)} to your personal planning target. This is not a residency test.`
    : 'Optional: set a number for planning only. It is not a residency test.';
  const records = document.getElementById('presence-records');
  if (!yearEntries.length) {
    records.innerHTML = '<p class="presence-empty">No days recorded for this year yet. Start with your move-in, office days and any planned weekend away.</p>';
    return;
  }
  records.innerHTML = [...yearEntries].sort((first, second) => String(second.date).localeCompare(String(first.date))).map(entry => `<article class="presence-record"><time datetime="${escapeHtml(entry.date)}">${escapeHtml(entry.date)}</time><div><strong>${escapeHtml(presenceLocationLabels[entry.location] || 'Unspecified')}</strong><p>${entry.workInSwitzerland ? 'Worked in Switzerland' : 'No Switzerland work recorded'}${entry.note ? ` · ${escapeHtml(entry.note)}` : ''}</p></div><span class="presence-badge ${entry.status === 'actual' ? 'actual' : ''}">${escapeHtml(entry.status)}</span><button class="presence-delete" type="button" data-presence-id="${escapeHtml(entry.id)}" aria-label="Remove ${escapeHtml(entry.date)} record">Remove</button></article>`).join('');
}

function downloadPresenceCsv() {
  const entries = getPresenceEntries().sort((first, second) => String(first.date).localeCompare(String(second.date)));
  const quote = value => `"${String(value ?? '').replaceAll('"', '""')}"`;
  const rows = [['Date', 'Location', 'Record', 'Worked in Switzerland', 'Note'], ...entries.map(entry => [entry.date, presenceLocationLabels[entry.location] || entry.location, entry.status, entry.workInSwitzerland ? 'Yes' : 'No', entry.note || ''])];
  const blob = new Blob([rows.map(row => row.map(quote).join(',')).join('\n')], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'zrhams-presence-log.csv';
  link.click();
  URL.revokeObjectURL(url);
}

const departureStops = [
  { id: '8591218', target: 'kalkbreite-departures', name: 'Kalkbreite / Bahnhof Wiedikon' },
  { id: '8503011', target: 'wiedikon-departures', name: 'Bahnhof Wiedikon' },
  { id: '8591257', target: 'limmatplatz-departures', name: 'Limmatplatz' },
  { id: '8591322', target: 'roentgenstrasse-departures', name: 'Röntgenstrasse' }
];

const escapeHtml = value => String(value).replace(/[&<>'"]/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);

function plannedOrPredictedDeparture(item) {
  return item.stop.prognosis?.departure || item.stop.departure;
}

function renderDepartures(targetId, board) {
  const target = document.getElementById(targetId);
  const now = Date.now();
  const upcoming = board
    .filter(item => new Date(plannedOrPredictedDeparture(item)).getTime() >= now - 30000)
    .slice(0, 5);

  if (!upcoming.length) {
    target.innerHTML = '<p class="departure-status">No upcoming departures returned. Open ZVV for the live board.</p>';
    return;
  }

  target.innerHTML = upcoming.map(item => {
    const departure = new Date(plannedOrPredictedDeparture(item));
    const minutes = Math.max(0, Math.round((departure.getTime() - now) / 60000));
    const line = `${item.category || ''} ${item.number || ''}`.trim();
    const delay = Number(item.stop.delay || 0);
    const delayText = delay > 0 ? `<span class="departure-delay">+${delay} min</span>` : '';
    return `<div class="departure-row"><span class="departure-line">${escapeHtml(line)}</span><span class="departure-destination">${escapeHtml(item.to || 'Destination unavailable')}</span><span class="departure-time">${minutes === 0 ? 'now' : `${minutes} min`}${delayText}</span></div>`;
  }).join('');
}

async function loadLiveDepartures() {
  const notes = [...document.querySelectorAll('.departure-note')];
  try {
    const responses = await Promise.all(departureStops.map(stop => fetch(`https://transport.opendata.ch/v1/stationboard?id=${stop.id}&limit=10`)));
    if (responses.some(response => !response.ok)) throw new Error('Departure feed unavailable');
    const boards = await Promise.all(responses.map(response => response.json()));
    boards.forEach((board, index) => renderDepartures(departureStops[index].target, board.stationboard || []));
    notes.forEach(note => { note.textContent = `Live timetable and forecast data via the Swiss public-transport feed. Updated ${new Intl.DateTimeFormat('en-CH', { hour: '2-digit', minute: '2-digit' }).format(new Date())}; refreshes every minute.`; });
  } catch (error) {
    departureStops.forEach(stop => {
      document.getElementById(stop.target).innerHTML = '<p class="departure-status">Live departures are unavailable right now. Open ZVV for the current board.</p>';
    });
    notes.forEach(note => { note.textContent = 'Live timetable data is temporarily unavailable. Use the ZVV planner for the current board.'; });
  }
}

const weatherCodes = {
  0: { icon: '☀', label: 'Clear' }, 1: { icon: '⛅', label: 'Mostly clear' }, 2: { icon: '⛅', label: 'Partly cloudy' }, 3: { icon: '☁', label: 'Cloudy' },
  45: { icon: '〰', label: 'Fog' }, 48: { icon: '〰', label: 'Rime fog' }, 51: { icon: '🌦', label: 'Light drizzle' }, 53: { icon: '🌦', label: 'Drizzle' },
  55: { icon: '🌧', label: 'Heavy drizzle' }, 61: { icon: '🌦', label: 'Light rain' }, 63: { icon: '🌧', label: 'Rain' }, 65: { icon: '🌧', label: 'Heavy rain' },
  71: { icon: '🌨', label: 'Light snow' }, 73: { icon: '🌨', label: 'Snow' }, 75: { icon: '🌨', label: 'Heavy snow' }, 80: { icon: '🌦', label: 'Showers' },
  81: { icon: '🌧', label: 'Showers' }, 82: { icon: '⛈', label: 'Heavy showers' }, 95: { icon: '⛈', label: 'Thunderstorm' }
};

function weatherInfo(code) {
  return weatherCodes[code] || { icon: '◌', label: 'Conditions unavailable' };
}

async function loadWeather() {
  const current = document.getElementById('weather-current');
  const detail = document.getElementById('weather-current-detail');
  const forecast = document.getElementById('weather-forecast');
  const note = document.getElementById('weather-note');
  try {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=47.3744&longitude=8.5213&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FZurich&forecast_days=6');
    if (!response.ok) throw new Error('Weather feed unavailable');
    const data = await response.json();
    const now = weatherInfo(data.current.weather_code);
    current.innerHTML = `<span class="weather-icon">${now.icon}</span><strong>${Math.round(data.current.temperature_2m)}°C</strong>`;
    detail.textContent = `${now.label} · feels like ${Math.round(data.current.apparent_temperature)}°C · wind ${Math.round(data.current.wind_speed_10m)} km/h`;
    forecast.innerHTML = data.daily.time.map((date, index) => {
      const day = weatherInfo(data.daily.weather_code[index]);
      const dayName = new Intl.DateTimeFormat('en-GB', { weekday: 'short' }).format(new Date(`${date}T12:00:00`));
      return `<article class="weather-day"><span>${dayName}</span><span class="weather-icon" aria-label="${day.label}">${day.icon}</span><strong>${Math.round(data.daily.temperature_2m_max[index])}° / ${Math.round(data.daily.temperature_2m_min[index])}°</strong><small>${data.daily.precipitation_probability_max[index] ?? 0}% rain</small></article>`;
    }).join('');
    note.textContent = `Live forecast via Open-Meteo · updated ${new Intl.DateTimeFormat('en-CH', { hour: '2-digit', minute: '2-digit' }).format(new Date())}. Check MeteoSwiss before weather-sensitive plans.`;
  } catch (error) {
    current.innerHTML = '<span class="weather-icon">◌</span><strong>Unavailable</strong>';
    detail.textContent = 'The live forecast could not load. Open MeteoSwiss for the current view.';
    forecast.innerHTML = '<p class="weather-status">Live forecast unavailable right now. The seasonal clothing guide above still applies.</p>';
    note.textContent = 'Live forecast temporarily unavailable. Use MeteoSwiss before weather-sensitive plans.';
  }
}

function addFoodRatings() {
  const ratings = {
    'Kalkucina': ['Google', '4.9', '34'],
    'Simply Soup': ['Google', '4.4', '79'],
    'Bebek': ['Google', '4.2', '2,538'],
    'Oh My Greek': ['Google', '4.7', '2,595'],
    'Markthalle IM VIADUKT': ['Google', '4.6', '699'],
    'mi-te': ['Community', '4.3', '26'],
    'Restaurant Markthalle': ['Google', '4.3', '2,141'],
    'Les Halles': ['Google', '4.4', '2,196'],
    'Gerold Chuchi': ['Google', '4.5', '493'],
    'Frau Gerolds Garten': ['Google', '4.5', '7,106'],
    'Napulé Josefstrasse': ['Google', '4.0', '219'],
    'La Brea': ['Google', '4.3', '925'],
    'El Luchador': ['Google', '4.2', '945'],
    'La Taquería': ['Google', '4.5', '2,357'],
    'Roots': ['Google', '4.3', '142'],
    'Roots Kitchen at On': ['Google', '4.4', '41'],
    'The Lemon Grass': ['Google', '4.2', '273'],
    'Lou’s': ['Google', '4.6', '789']
  };

  document.querySelectorAll('.nearby-card h3, .k5-card h3, .josef-nearby-card h3, .food-bars-list h4').forEach(heading => {
    const rating = ratings[heading.textContent.trim()];
    const description = heading.nextElementSibling;
    if (!rating || !description || description.classList.contains('review-score')) return;
    const score = document.createElement('p');
    const value = document.createElement('strong');
    const detail = document.createElement('span');
    score.className = 'review-score';
    value.textContent = `${rating[0]} ★ ${rating[1]}`;
    detail.textContent = `${rating[2]} reviews · checked 3 Oct 2026`;
    score.append(value, detail);
    description.insertAdjacentElement('afterend', score);
  });
}

document.querySelectorAll('.tab').forEach(tab => tab.addEventListener('click', () => { document.querySelector('.tab.active').classList.remove('active'); tab.classList.add('active'); renderGuide(); }));
document.getElementById('area-filter').addEventListener('change', renderGuide);
document.querySelectorAll('.preset').forEach(button => button.addEventListener('click', () => { document.querySelector('.preset.active').classList.remove('active'); button.classList.add('active'); currentPreset = button.dataset.preset; document.getElementById('monthly-budget').value = presets[currentPreset].total; renderInputs(presets[currentPreset].values); }));
document.getElementById('monthly-budget').addEventListener('input', updateTotals);
['annual-salary', 'zurich-rent', 'other-home-eur', 'eur-chf'].forEach(id => document.getElementById(id).addEventListener('input', updateDualHome));
document.getElementById('salary-payments').addEventListener('change', updateDualHome);
document.getElementById('reset-budget').addEventListener('click', () => { document.getElementById('monthly-budget').value = presets[currentPreset].total; renderInputs(presets[currentPreset].values); });
document.getElementById('presence-date').value = getZurichToday();
document.getElementById('presence-target').value = window.localStorage.getItem(presenceTargetStorageKey) || '';
document.getElementById('presence-form').addEventListener('submit', event => {
  event.preventDefault();
  const date = document.getElementById('presence-date').value;
  if (!date) return;
  const entry = {
    id: date,
    date,
    location: document.getElementById('presence-location').value,
    status: document.getElementById('presence-status').value,
    workInSwitzerland: document.getElementById('presence-work').checked,
    note: document.getElementById('presence-note').value.trim()
  };
  const entries = getPresenceEntries();
  const existing = entries.findIndex(item => item.date === date);
  if (existing >= 0) entries[existing] = entry;
  else entries.push(entry);
  savePresenceEntries(entries);
  document.getElementById('presence-status-message').textContent = existing >= 0 ? `Updated ${date}.` : `Saved ${date}.`;
  renderPresence();
});
document.getElementById('presence-year').addEventListener('change', renderPresence);
document.getElementById('presence-target').addEventListener('input', event => {
  window.localStorage.setItem(presenceTargetStorageKey, event.target.value);
  renderPresence();
});
document.getElementById('presence-records').addEventListener('click', event => {
  const button = event.target.closest('.presence-delete');
  if (!button) return;
  savePresenceEntries(getPresenceEntries().filter(entry => entry.id !== button.dataset.presenceId));
  document.getElementById('presence-status-message').textContent = 'Record removed.';
  renderPresence();
});
document.getElementById('presence-export').addEventListener('click', downloadPresenceCsv);
renderGuide();
renderInputs(presets.balanced.values);
renderPresence();
addFoodRatings();
loadLiveDepartures();
window.setInterval(loadLiveDepartures, 60000);
loadWeather();
