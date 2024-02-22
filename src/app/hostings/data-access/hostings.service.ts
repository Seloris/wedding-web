import { Injectable, computed, signal } from '@angular/core';
import { Hosting, HostingType } from '../models/hosting';

@Injectable({
  providedIn: 'root',
})
export class HostingsService {
  filter = signal<HostingType>('hotel');
  filteredHostings = computed(() => {
    return this.hostings().filter((hosting) => this.filter() === hosting.type);
  });

  private hostings = signal(ALL_HOSTINGS);
  constructor() {}
}

const ALL_HOSTINGS: Hosting[] = [
  {
    title: 'Hôtel du Dauphin',
    description: 'De préférence, réserver au 02 33 84 18 00',
    address: { street: 'Place De La Halle', city: "61300 L'Aigle" },
    distanceKM: 7,
    priceRange: 2,
    type: 'hotel',
    stars: 3,
    url: 'https://aigle.brithotel.fr/',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Hôtel du Cygne',
    address: { street: '31 rue Saint Barthélémy', city: "61300 L'Aigle" },
    distanceKM: 7,
    priceRange: 1,
    type: 'hotel',
    stars: 2,
    url: 'https://hotelrestaurantducygne-laigle.fr/',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Le Clos Saint-Germain',
    description: 'Sur le site Charme et tradition ou sur Booking',
    address: { street: '3 rue Georges Clémenceau ', city: '27250 Rugles' },
    distanceKM: 7,
    priceRange: 2,
    type: 'cottage',
    url: 'https://www.booking.com/hotel/fr/le-clos-saint-germain-rugles.fr.html',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: "L'Évidence",
    description: 'Piscine',
    address: { street: '13 rue du Général de Gaulle ', city: '27250 Rugles' },
    distanceKM: 7,
    priceRange: 3,
    type: 'cottage',
    url: 'https://sonata.hotel-detail-check.com/maison-d-39-hotes-l-39-evidence-france',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Chambre Rétro Chic chez Caroline',
    description: 'Sur Airbnb ou sur Booking. Piscine',
    address: { city: '27250 Rugles', street: '' },
    distanceKM: 7,
    priceRange: 3,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/53757991?source_impression_id=p3_1708451738_zwAaZ7SLMJKv8fM1',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Gîte en Normandie',
    description: 'Maison pour 3 personnes',
    address: { street: 'rue du Bois des Brosses. ', city: '27250 Rugles' },
    distanceKM: 7,
    priceRange: 3,
    type: 'cottage',
    url: 'https://www.booking.com/hotel/fr/gite-en-normandie.fr.html',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Logement plain-pied nature',
    description: '190 € pour 2 nuits, 4 personnes.',
    address: { city: "Saint-Martin d'Ecublei", street: '' },
    distanceKM: 2,
    priceRange: 2,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/949873916941254957?source_impression_id=p3_1708452908_H5mauOle%2F86daN8I',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Château de Transière',
    description: 'Avec piscine.',
    address: { city: '27250 Ambenai', street: '' },
    distanceKM: 6,
    priceRange: 3,
    type: 'cottage',
    url: 'https://www.booking.com/hotel/fr/chambre-d-hote-chateau-de-transieres.fr.html',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Escale normande - Chez Michelle',
    description: 'Sur Airbnb ou appeler le 07 60 60 91 57',
    address: { city: "61300 L'Aigle", street: '' },
    distanceKM: 7,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/4372673',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Studio Terrasse',
    description: '130 € pour 2 nuits',
    address: { city: "61300 L'Aigle", street: '' },
    distanceKM: 7,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/43555831',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: "Centre L'Aigle - Agréable maison bien rénovée",
    description: '170 € pour 2 personnes, 240 € pour 6 personnes',
    address: { city: "61300 L'Aigle", street: '' },
    distanceKM: 7,
    priceRange: 2,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/581061254175552330',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Petit manoir chez Dom',
    address: { city: '61550 Saint-Nicolas-de-Sommaire', street: '' },
    distanceKM: 9,
    priceRange: 2,
    type: 'cottage',
    url: 'https://fr.airbnb.ca/rooms/933949922193254845',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Rouge Maison',
    description: 'Plusieurs chambres (90 €) et gîte 4 personnes (130 €).',
    address: { street: '5 route de Rouge Maison 5 D45', city: '27330 Bois-Normand-près-Lyre' },
    distanceKM: 15,
    priceRange: 2,
    type: 'cottage',
    url: 'https://www.booking.com/hotel/fr/rouge-maison-bois-normand-pres-lyre.fr.html',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Maison Myjune Cosy cottage à Rai',
    description: 'Pour 4 personnes, 2 chambres,100 m2.  330 € pour 2 nuits.',
    address: { city: '61270 Rai', street: '' },
    distanceKM: 12,
    priceRange: 3,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/939788327535250397',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Roulotte',
    description: 'Pour 4 personnes',
    address: { street: 'Le Préamont Couvains', city: '61550 Marnefer' },
    distanceKM: 16,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.booking.com/hotel/fr/roulotte-la-ferte-en-ouche.fr.html',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Château du Mesnil',
    address: { street: '2 rue du chat', city: '27330 La Vieille-Lyre' },
    distanceKM: 15,
    priceRange: 2,
    type: 'cottage',
    url: 'https://fr.hotels.com/ho675874/chateau-du-mesnil-la-vieille-lyre-france/',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Chambre et chevaux chez Mina',
    address: { city: '27250 Chambord', street: '' },
    distanceKM: 15,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/32467314',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: "Chambre d'hôtes Le Buisson",
    description: 'Chambre de charme à la ferme (site Charme et tradition). Chez M. et Mme Thouret.',
    address: { city: '61270 Écorcei', street: '' },
    distanceKM: 15,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.charme-traditions.com/fr/chambres-d-hotes/org/2996/le-buisson',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Gîte familial indépendant à la ferme',
    description: ' De 1 à 6 personnes, sur Airbnb',
    address: { city: '61270 La Chapelle-Viel', street: '' },
    distanceKM: 15,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/939790362438355126',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Le Bôquet',
    description: 'Pour 4 personnes (3 lits)',
    address: { city: '27330 La Haye-Saint-Sylvestre', street: '' },
    distanceKM: 18,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/24985538',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Petite maison de campagne',
    description: 'Pour 3 personnes, 2 nuits 210 €',
    address: { city: 'La Ferté-en-Ouche', street: '' },
    distanceKM: 19,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/988261894495082650',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Four à pain',
    description: '2 nuits 170 €',
    address: { city: '61190 Irai', street: '' },
    distanceKM: 19,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.airbnb.fr/rooms/43911360',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Au Manoir de la Barre',
    address: { street: '1 Grande Rue', city: '27330 La Barre-en-Ouche' },
    distanceKM: 20,
    priceRange: 2,
    type: 'cottage',
    url: 'https://www.booking.com/hotel/fr/au-manoir-de-la-barre.tl.html',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Château du Blanc Buisson',
    address: { city: '27330 Mesnil-en-Ouche', street: '' },
    distanceKM: 20,
    priceRange: 3,
    type: 'cottage',
    url: 'https://www.blancbuisson.com/',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Le Garance',
    address: { street: '66 rue Clémenceau', city: '27160 Breteuil' },
    distanceKM: 20,
    priceRange: 1,
    type: 'cottage',
    url: 'https://www.legarance.fr/',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Chez Élo',
    description: 'Maison 100m2 avec jardin pour 6 personnes (3 chambres). 290 € pour 2 nuits.',
    address: { city: "61300 Saint-Martin d'Écublei", street: '' },
    distanceKM: 2,
    priceRange: 1,
    type: 'house',
    url: 'https://www.airbnb.fr/rooms/761435425357926103',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Maison de 3 chambres',
    description:
      'Avec jardin clos et wifi (Booking – ou Airbnb : 300 € pour 2 nuits). Maison 3 chambres pour 6 personnes.',
    address: { street: '12 rue des Landes', city: '27250 Chéronvilliers' },
    distanceKM: 7,
    priceRange: 1,
    type: 'house',
    url: 'https://www.airbnb.fr/rooms/7926855',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'Gîte normand avec piscine couverte',
    description: '6 personnes, 350 € pour 2 nuits.',
    address: { city: '27250 Neaufles-Auvergny', street: '' },
    distanceKM: 9,
    priceRange: 2,
    type: 'house',
    url: 'https://www.airbnb.fr/rooms/35434478',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: "Maison d'hôtes",
    description: 'Avec jardin, 6 personnes, 3 chambres, 2 salles de bain. 100 € la nuit.',
    address: { street: ' Rue du Moulin', city: '61300 Crulai' },
    distanceKM: 15,
    priceRange: 2,
    type: 'house',
    url: 'https://www.airbnb.fr/rooms/10241453',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: 'La Grange du Bois Germain',
    description: 'Villa 4 chambres : 340 €  pour 8 personnes. 06 48 67 10 36',
    address: { street: '1A route des Platanes', city: '27250 Saint-Antonin-de-Sommaire' },
    distanceKM: 6,
    priceRange: 2,
    type: 'house',
    url: 'https://www.airbnb.fr/rooms/852979640002839649',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: "Le Refuge de l'Abbaye",
    description: 'Gîte ou chambres individuelles. 06 85 19 55 13 ou Booking.',
    address: { city: '61550 Saint-Evroult-Notre-Dame-du-Bois', street: '' },
    distanceKM: 20,
    priceRange: 2,
    type: 'house',
    url: 'https://www.gites-de-france-orne.com/location-vacances-Gite-Saint-evroult-notre-dame-du-bois-61G880.html',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
  {
    title: "L'Ajoussienne",
    description: 'Maison de 3 chambres pour 6 personnes. 350€ le week-end.',
    address: { street: ' 2 route de Bernay', city: '27410 Ajou' },
    distanceKM: 23,
    priceRange: 1,
    type: 'house',
    url: 'https://www.lajoussienne.com/',
    image:
      'https://www.normandie-tourisme.fr/wp-content/uploads/wpetourisme/hotel-du-dauphin-2.jpg',
  },
];
