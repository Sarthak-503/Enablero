import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import AndroidIcon from '@mui/icons-material/Android';
import IOSIcon from '@mui/icons-material/Apple';
import AILogoIcon from '@mui/icons-material/Memory';
import WebIcon from '@mui/icons-material/Web';

const CategoryIcon = ({ category }: { category: string }) => {
  switch (category) {
    case 'TAG_ANDROID':
      return <AndroidIcon />;
    case 'TAG_WEB':
      return <WebIcon />;
    case 'TAG_AI':
      return <AILogoIcon />;
    case 'TAG_IOS':
      return <IOSIcon />;
    case 'TAG_ALL':
    default:
      return <AllInclusiveIcon />;
  }
};

export default CategoryIcon;
