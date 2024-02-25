export type Hosting = {
  title: string;
  description?: string;
  stars?: number;
  address: { street: string; city: string };
  distanceKM: number;
  priceRange: HostingPriceRange;
  commodities?: string[];
  type: HostingType;
  url: string;
  image?: string;
};

export type HostingPriceRange = 1 | 2 | 3;
export type HostingType = 'hotel' | 'cottage' | 'house';

export type HostingSort = 'kmAsc' | 'priceAsc' | 'priceDesc';
