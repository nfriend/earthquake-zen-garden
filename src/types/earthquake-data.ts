// Provides type safety for a subset of the properties in data.json

export interface EarthquakeData {
  profile: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    bio: string;
    avatarImage: string;
  };
  data: {
    features: EarthquakeDataFeature[];
  };
}

export interface EarthquakeDataFeature {
  properties: {
    title: string;
    time: number;
    mag: number;
    status: 'automatic' | 'reviewed';
    tsunami: number;
    type: string;
  };
  id: string;
}
