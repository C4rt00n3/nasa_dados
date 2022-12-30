export interface iAuthContext {
  children: React.ReactNode;
}

export type IRover = {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
};
export type ICamera = {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
};

export type IPhotosItem = {
  id: number;
  sol: number;
  camera: ICamera;
  img_src: string;
  earth_date: string;
  rover: IRover;
};
export type IData = {
  photos: IPhotosItem[];
};
export type IRootObject = {
  data: IData;
};
export interface IProviderValue {
  itens: IPhotosItem[];
  backup: IPhotosItem[];
  setRover: React.Dispatch<React.SetStateAction<string>>;
  setIten: React.Dispatch<React.SetStateAction<IPhotosItem[]>>;
  setBackup: React.Dispatch<React.SetStateAction<IPhotosItem[]>>;
  setSun: React.Dispatch<React.SetStateAction<number>>;
  sun: number;
  rover: string;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  filteCams(name: string): Promise<void>;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  check: boolean;
}
