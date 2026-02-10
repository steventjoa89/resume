import { IconType } from "react-icons";

export interface ILink {
  title: string;
  href: string;
}

export interface IFooterMenuSection {
  title: string;
  menus?: ILink[];
  paragraphs?: string[];
}

export interface IContactTileData {
  icon: IconType;
  title: string;
  info: string;
}

export interface IProfessionalBackground {
  position: string;
  company: string;
  years: [string, string];
  description: string;
  highlights?: string[];
}

export interface IAcademicBackground {
  degree: string;
  field: string;
  university: string;
  country: string;
  years: [number, number];
  description: string;
}

export interface IProject {
  title: string;
  subtitle: string;
  year: number;
  image: string;
}

export interface IService {
  icon: IconType;
  title: string;
  description: string;
}
