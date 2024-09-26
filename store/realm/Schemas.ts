// Schemas definieren
export const BrandSchema = {
  name: 'Brand',
  properties: {
    name: 'string',
    logo: 'string',
    iconLogo: 'string',
  },
};

export const ContactSchema = {
  name: 'Contact',
  properties: {
    telephone: 'string',
    email: 'string',
  },
};

export const LocationSchema = {
  name: 'Location',
  properties: {
    street: 'string',
    postal: 'string',
    city: 'string',
    state: 'string',
    country: 'string',
    longitude: 'double',
    latitude: 'double',
  },
};

export const HopaPropertySchema = {
  name: 'HopaProperty',
  properties: {
    id: 'int',
    description: 'string?',
    hopa_key: 'string?',
    icomoon_key: 'string?',
  },
};

export const RatingSchema = {
  name: 'Rating',
  properties: {
    toTen: 'double?',
    inWords: 'string?',
    TotalParticipants: 'double?',
    TotalParticipantsText: 'string?',
  },
};

export const PropertiesSchema = {
  name: 'Properties',
  properties: {
    breakfast: 'PropertyDetail?',
    parking: 'PropertyDetail?',
    dogs: 'PropertyDetail?',
    sauna: 'PropertyDetail?',
    garage: 'PropertyDetail?',
    fitness: 'PropertyDetail?',
  },
};

export const PropertyDetailSchema = {
  name: 'PropertyDetail',
  properties: {
    name: 'string',
    description: 'string?',
    price: 'string?',
    quantityBase: 'int?',
    quantityBaseText: 'string?',
  },
};

export const StraivSchema = {
  name: 'Straiv',
  properties: {
    linkDoor: 'string',
    linkStay: 'string',
  },
};

export const WbeSchema = {
  name: 'Wbe',
  properties: {
    link: 'string',
  },
};

export const InfoSchema = {
  name: 'Info',
  properties: {
    bestPrice: 'double?',
    bestPriceText: 'string?',
    validFrom: 'string?',
    validPeriodTitle: 'string?',
    validTo: 'string?',
  },
};

export const WbeOfferSchema = {
  name: 'WbeOffer',
  properties: {
    link: 'string',
    linkTitle: 'string',
  },
};

export const OfferHotelSchema = {
  name: 'OfferHotel',
  properties: {
    id: 'int',
    name: 'string',
  },
};

// Hotel Schema
export const OfferSchema = {
  name: 'Offer',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    description: 'string',
    searchTags: 'string',
    titlePicture: 'string',
    info: 'Info',
    wbe: 'Wbe',
    hotel: 'OfferHotel', // Verweis auf den Hotel-Schema
  },
};

// Hotel Schema
export const HotelSchema = {
  name: 'Hotel',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    titlePicture: 'string',
    titlePicturePortrait: 'string?',
    linkDetailPage: 'string',
    brand: 'Brand',
    contact: 'Contact',
    searchTags: 'string',
    location: 'Location',
    properties: 'Properties?',
    straiv: 'Straiv',
    wbe: 'Wbe',
    hopaProperties: 'HopaProperty[]',
    rating: 'Rating',
  },
};
