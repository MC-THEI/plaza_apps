import { TitleTypes } from '../types/TitleTypes';

// HomeScreen -----------------------------------------------------------------
export const mainTitleHome: TitleTypes = {
  1: { mainTitle: 'Ihr Zuhause', subTitle: 'für den Augenblick' },
  2: { mainTitle: 'Your Home', subTitle: 'for the moment' },
};

export const hotelCardsTitle: TitleTypes = {
  1: { mainTitle: 'Unsere', subTitle: 'Hotels' },
  2: { mainTitle: 'Our', subTitle: 'Hotels' },
};

export const offersCardsTitle: TitleTypes = {
  1: { mainTitle: 'Unsere', subTitle: 'Angebote' },
  2: { mainTitle: 'Our', subTitle: 'Offers' },
};

export const searchButtonsTitle = {
  hotels: { 1: 'Hotel suchen', 2: 'Search Hotel' },
  offers: { 1: 'Angebot suchen', 2: 'Search Offer' },
};

// HotelScreen ---------------------------------------------------------------
export const hotelMenuButtonTitles = {
  call: { 1: 'Anrufen', 2: 'Call' },
  web: { 1: 'Web', 2: 'Web' },
  book: { 1: 'Buchen', 2: 'Book' },
  map: { 1: 'Karte', 2: 'Map' },
  door: { 1: 'Tür', 2: 'door' },
  straiv: { 1: 'Straiv', 2: 'Straiv' },
};

export const ratingTitle: TitleTypes = {
  1: { mainTitle: 'Bewertungen', subTitle: 'des Hotels' },
  2: { mainTitle: 'Rating', subTitle: 'of the hotel' },
};

export const informationTitle: TitleTypes = {
  1: { mainTitle: 'Informationen', subTitle: 'Für Ihren Aufenthalt' },
  2: { mainTitle: 'Information', subTitle: 'For your stay' },
};

export const facilitiesTitle: TitleTypes = {
  1: { mainTitle: 'Ausstattungen', subTitle: 'des Hotels' },
  2: { mainTitle: 'Hotel', subTitle: 'Facilities' },
};

// FavoritesScreen -------------------------------------------------------------

export const mainTitleFavorites = {
  1: { mainTitle: 'Ihre', subTitle: 'Favoriten' },
  2: { mainTitle: 'Your', subTitle: 'Favorites' },
};

export const mainTitleHotelFavorites = {
  1: { subTitle: 'Hotels' },
  2: { subTitle: 'Hotels' },
};
export const mainTitleOfferFavorites = {
  1: { subTitle: 'Angebote' },
  2: { subTitle: 'Offers' },
};

export const filterButtonsTitle = {
  hotels: { 1: 'Hotels', 2: 'Hotels' },
  offers: { 1: 'Angebote', 2: 'Offers' },
};

export const emptyFavoritesTitles = {
  emptyHotels: {
    1: 'Derzeit gibt es keine Hotel-Favoriten.',
    2: 'There are currently no hotel favorites.',
  },
  emptyOffers: {
    1: 'Derzeit gibt es keine Angebots-Favoriten.',
    2: 'There are currently no offer favorites.',
  },
  emptyList: {
    1: 'Es sind noch keine Favoriten gespeichert.',
    2: 'There are no favorites saved yet.',
  },
};

// OfferScreen -----------------------------------------------------------------

export const ourOfferTitle: TitleTypes = {
  1: { mainTitle: 'Unser Angebot', subTitle: 'für Sie' },
  2: { mainTitle: 'Our Offer', subTitle: 'for you' },
};

export const toHotel: TitleTypes = {
  1: { mainTitle: 'Zum', subTitle: 'Hotel' },
  2: { mainTitle: 'To the', subTitle: 'Hotel' },
};

//MapScreen -----------------------------------------------------------------
export const searchInputPlaceholder = {
  1: 'Hotel suchen ...',
  2: 'Search Hotels ...',
};

export const noResultsInfo = {
  1: 'Keine Ergebnisse',
  2: 'No results',
};

export const gpsAlert = {
  1: {
    title: 'Fehlende Berechtigung',
    message: 'Der Zugriff auf den Standort wurde verweigert',
  },
  2: {
    title: 'Missing Authorization',
    message: 'Access to the location has been denied',
  },
};
