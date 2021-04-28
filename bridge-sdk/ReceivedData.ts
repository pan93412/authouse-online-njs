export type AuthouseCoreData =
  | {}
  | AuthouseLightData
  | TempertureData
  | PM25Data;

export interface AuthouseLightData {
  light_enabled: boolean;
}

export function IsAuthouseLightData(
  data: AuthouseCoreData
): data is AuthouseLightData {
  return typeof (data as AuthouseLightData).light_enabled === "boolean";
}

export interface TempertureData {
  humidity: string;
  temperature: string;
}

export function IsTempertureData(
  data: AuthouseCoreData
): data is TempertureData {
  const d = data as TempertureData;

  return typeof d.humidity === "string" && typeof d.temperature === "string";
}

export interface PM25Data {
  working: boolean;
  value: string;
  raw_value: string;
}

export function IsPM25Data(data: AuthouseCoreData): data is PM25Data {
  const d = data as PM25Data;

  return (
    typeof d.working === "boolean" &&
    typeof d.value === "string" &&
    typeof d.raw_value === "string"
  );
}
