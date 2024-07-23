import { SvgIconComponent } from '@mui/icons-material';
import { FieldError } from 'react-hook-form';
import { StaticImageData } from 'next/image';

export enum COMPONENT {
  BOTH = 'BOTH',
  NAVBAR = 'NAVBAR',
  FOOTER = 'FOOTER',
}

export enum LINK_HREF {
  SERVICES = '/services',
  CASE_STUDIES = '/case-studies',
  ABOUT_US = '/about-us',
  CONTACT_US = '/contact-us',
  TERMS_AND_CONDITIONS = '/terms-and-conditions',
  PRIVACY_POLICY = '/privacy-policy',
  SITEMAP = '/sitemap',
}

export enum SOCIALMEDIA_LINK_HREF {
  FACEBOOK = 'https://www.facebook.com/enablero',
  INSTAGRAM = 'https://www.instagram.com/enablero/',
  LINKEDIN = 'https://www.linkedin.com/company/enablero/',
  YOUTUBE = 'https://www.youtube.com/@enablero',
  X = 'https://x.com/enableroinc',
}

export type LinkItemType = {
  id: number;
  active: boolean;
  label: string;
  href: LINK_HREF;
  for: COMPONENT;
  priority: number;
};

export type SocialMediaLinkItemType = {
  id: number;
  active: boolean;
  icon?: React.ElementType<SvgIconComponent>;
  href: SOCIALMEDIA_LINK_HREF;
  priority: number;
};

export type contactFormType = {
  firstname: string;
  lastname: string;
  email: string;
  contact: string;
  services: string[];
  contactPrefer: string;
  subject: string;
  message: string;
};

export interface PortfolioProjectType {
  id: number;
  tag: string;
  title: string;
  description: string;
  portfolioImage: StaticImageData;
  clientlogo: StaticImageData | string;
}

export type ServicesType = {
  id: number;
  title: string;
  description: string;
  icon: string;
  keyFeatures: string[];
  technologies?: string[];
  featured: boolean;
};

export type CommonFormHelperTextProps = {
  error?: FieldError;
};

export type StatisticsType = {
  heading:string;
  description:string;

};