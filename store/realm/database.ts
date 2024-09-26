import Realm from 'realm';
import {
  BrandSchema,
  ContactSchema,
  HopaPropertySchema,
  HotelSchema,
  InfoSchema,
  LocationSchema,
  OfferHotelSchema,
  OfferSchema,
  PropertiesSchema,
  PropertyDetailSchema,
  RatingSchema,
  StraivSchema,
  WbeOfferSchema,
  WbeSchema,
} from './Schemas';
import { IOffer } from '../../types/OfferTypes';
import { IHotel } from '../../types/HotelTypes';

// Gemeinsame Realm-Instanz initialisieren
const plazaAppDb = new Realm({
  schema: [
    BrandSchema,
    ContactSchema,
    LocationSchema,
    RatingSchema,
    PropertiesSchema,
    PropertyDetailSchema,
    HotelSchema,
    StraivSchema,
    WbeSchema,
    HopaPropertySchema,
    OfferSchema,
    InfoSchema,
    WbeOfferSchema,
    OfferHotelSchema,
  ],
});

export const saveHotelsInRealm = async (hotels: IHotel[]) => {
  plazaAppDb.write(() => {
    hotels.forEach((hotelData) => {
      const cleanHotelData = JSON.parse(JSON.stringify(hotelData));

      const dynamicProps = {};
      for (const [key, value] of Object.entries(cleanHotelData.properties)) {
        dynamicProps[key] = value;
      }

      const hopaProps = cleanHotelData.hopaProperties.map((hopa) => ({
        id: hopa.id,
        description: hopa.description,
        hopa_key: hopa.hopa_key,
        icomoon_key: hopa.icomoon_key,
      }));

      plazaAppDb.create('Hotel', {
        id: hotelData.id,
        name: hotelData.name,
        linkDetailPage: hotelData.linkDetailPage,
        titlePicture: hotelData.titlePicture,
        titlePicturePortrait: hotelData.titlePicturePortrait,
        searchTags: hotelData.searchTags,
        brand: {
          name: hotelData.brand.name,
          logo: hotelData.brand.logo,
          iconLogo: hotelData.brand.iconLogo,
        },
        contact: {
          telephone: hotelData.contact.telephone,
          email: hotelData.contact.email,
        },
        location: {
          street: hotelData.location.street,
          postal: hotelData.location.postal,
          city: hotelData.location.city,
          state: hotelData.location.state,
          country: hotelData.location.country,
          longitude: hotelData.location.longitude,
          latitude: hotelData.location.latitude,
        },
        properties: dynamicProps,
        straiv: hotelData.straiv,
        wbe: hotelData.wbe,
        hopaProperties: hopaProps,
        rating: {
          toTen: hotelData.rating.toTen,
          inWords:
            typeof hotelData.rating.inWords === 'boolean'
              ? ''
              : hotelData.rating.inWords,
          TotalParticipants: hotelData.rating.TotalParticipants,
          TotalParticipantsText: hotelData.rating.TotalParticipantsText,
        },
      });
    });
  });
};

export const saveOffersInRealm = async (offers: IOffer[]) => {
  plazaAppDb.write(() => {
    offers.forEach((offer) => {
      plazaAppDb.create('Offer', {
        id: offer.id,
        name: offer.name,
        description: offer.description,
        searchTags: offer.searchTags,
        titlePicture: offer.titlePicture,
        info: {
          bestPrice: offer.info.bestPrice,
          bestPriceText: offer.info.bestPriceText,
          validFrom: offer.info.validFrom,
          validPeriodTitle: offer.info.validPeriodTitle,
          validTo: offer.info.validTo,
        },
        wbe: {
          link: offer.wbe.link,
          linkTitle: offer.wbe.linkTitle,
        },
        hotel: {
          name: offer.hotel.name,
          id: offer.hotel.id,
        },
      });
    });
  });
};

export const getHotelsFromDb = async () => {
  return plazaAppDb.objects('Hotel');
};

export const getOffersFormDb = async () => {
  return plazaAppDb.objects('Offer');
};

export function getDataFromDB(dataName: string) {
  return plazaAppDb.objects(dataName);
}

export const clearHotelsFromDb = async () => {
  plazaAppDb.write(() => {
    plazaAppDb.delete('Hotel');
  });
};

export const clearOffersFromDb = async () => {
  plazaAppDb.write(() => {
    plazaAppDb.delete('Offer');
  });
};

export const clearDb = async () => {
  plazaAppDb.write(() => {
    plazaAppDb.deleteAll();
  });
};
