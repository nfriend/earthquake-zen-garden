// Provides type safety for a subset of the properties in data.json

export interface EarthquakeData {
  data: {
    features: EarthquakeDataFeature[];
  };
}

export interface EarthquakeDataFeature {
  properties: {
    title: string;
    time: number;
    mag: number;
  };
  id: string;
}
