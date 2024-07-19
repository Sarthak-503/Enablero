import { COMPONENT, LinkItemType, LINK_HREF } from '@/types';

// Updated portfolio to "Case Studies"
export const links: Array<LinkItemType> = [
  {
    id: 1,
    label: 'SERVICES',
    href: LINK_HREF.SERVICES,
    for: COMPONENT.BOTH,
    priority: 1,
    active: true,
  },
  {
    id: 2,
    label: 'CASE_STUDIES',
    href: LINK_HREF.CASE_STUDIES,
    for: COMPONENT.BOTH,
    priority: 2,
    active: true,
  },
  {
    id: 3,
    label: 'ABOUT_US',
    href: LINK_HREF.ABOUT_US,
    for: COMPONENT.BOTH,
    priority: 3,
    active: true,
  },
  {
    id: 4,
    label: 'CONTACT_US',
    href: LINK_HREF.CONTACT_US,
    for: COMPONENT.BOTH,
    priority: 4,
    active: true,
  },
  {
    id: 5,
    label: 'TERMS_AND_CONDITIONS',
    href: LINK_HREF.TERMS_AND_CONDITIONS,
    for: COMPONENT.FOOTER,
    priority: 5,
    active: true,
  },
  {
    id: 6,
    label: 'PRIVACY_POLICY',
    href: LINK_HREF.PRIVACY_POLICY,
    for: COMPONENT.FOOTER,
    priority: 6,
    active: true,
  },
  {
    id: 7,
    label: 'SITEMAP',
    href: LINK_HREF.SITEMAP,
    for: COMPONENT.FOOTER,
    priority: 7,
    active: true,
  },
];
