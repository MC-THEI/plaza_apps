export interface IOffer {
  id: number;
  subtitle: string;
  name: string;
  description: string;
  info: {
    validPeriodTitle: string;
    validFrom: string;
    validTo: string;
    bestPrice: number;
    bestPriceText: string;
  };
  wbe: {
    link: string;
    linkTitle: string;
  };
  hotel: {
    id: number;
    name: string;
  };
  location: {
    city: string;
    country: string;
  };
  package: string;
  titlePicture: string;
  brand: {
    name: string;
    logo: string;
    iconLogo: string;
  };
  searchTags: string;
}
