export interface IProperties {
  name: string;
  description: string;
  price: string;
  quantityBase: number;
  quantityBaseText: string;
}
export interface IHotel {
  id: number;
  name: string;
  searchTags: string;
  titlePicture: string;
  titlePicturePortrait: string;
  linkDetailPage: string;
  straiv: {
    linkStay: string;
    linkDoor: string;
  };
  hopaProperties: [
    { description: string; hopa_key: string; icomoon_key: string; id: number },
  ];
  brand: {
    name: string;
    logo: string;
    iconLogo: string;
  };
  contact: {
    email: string;
    telephone: string;
  };
  location: {
    city: string;
    country: string;
    postal: string;
    state: string;
    street: string;
    longitude: number;
    latitude: number;
  };
  properties: {
    breakfast: IProperties;
    parking: IProperties;
    sauna: IProperties;
    garage: IProperties;
    dogs: IProperties;
    fitness: IProperties;
  }[];

  rating: {
    TotalParticipants: number;
    TotalParticipantsText: string;
    inWords: string;
    toTen: number;
  };

  wbe: {
    link: string;
  };

  package: string;
}
