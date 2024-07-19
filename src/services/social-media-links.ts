import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { SocialMediaLinkItemType, SOCIALMEDIA_LINK_HREF } from '@/types';
import { SvgIconComponent } from '@mui/icons-material';

export const socialMediaLinks: Array<SocialMediaLinkItemType> = [
  {
    id: 1,
    active: true,
    icon: XIcon as React.ElementType<SvgIconComponent>,
    href: SOCIALMEDIA_LINK_HREF.X,
    priority: 1,
  },
  {
    id: 2,
    active: true,
    icon: LinkedInIcon as React.ElementType<SvgIconComponent>,
    href: SOCIALMEDIA_LINK_HREF.LINKEDIN,
    priority: 2,
  },
  {
    id: 3,
    active: true,
    icon: YouTubeIcon as React.ElementType<SvgIconComponent>,
    href: SOCIALMEDIA_LINK_HREF.YOUTUBE,
    priority: 3,
  },
  {
    id: 4,
    active: true,
    icon: FacebookIcon as React.ElementType<SvgIconComponent>,
    href: SOCIALMEDIA_LINK_HREF.FACEBOOK,
    priority: 4,
  },
  {
    id: 5,
    active: true,
    icon: InstagramIcon as React.ElementType<SvgIconComponent>,
    href: SOCIALMEDIA_LINK_HREF.INSTAGRAM,
    priority: 5,
  },
];
