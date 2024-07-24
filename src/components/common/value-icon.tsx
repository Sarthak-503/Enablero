import React from 'react';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import VisibilityIcon from '@mui/icons-material/Visibility';

interface ValueIconProps {
  // value: 'TAG_ACCESSIBILITY' | 'TAG_RUN' | 'TAG_FAVORITE' | 'TAG_SCHOOL' | 'TAG_VERIFIED' | 'TAG_HOT' | 'TAG_SECURITY' | 'TAG_PUBLIC' | 'TAG_VISIBILITY' | 'TAG_DEFAULT';
  label:string;
}

const ValueIcon = ({ value }:{value :string} )=> { 
  switch (value) { 
    case 'EMPOWERMENT_ICON':
      return <AccessibilityNewIcon />;
    case 'NIMBLENESS_ICON':
      return <DirectionsRunIcon />;
    case 'ACCOUNTABILITY_ICON':
      return  <VerifiedUserIcon />;
    case 'BOLDNESS_ICON':
      return <WhatshotIcon  />;
    case 'LEARNING_ICON':
      return <SchoolIcon/>;
    case 'EMPATHY_ICON':
      return <FavoriteIcon />;
    case 'RELIABILITY_ICON':
      return <SecurityIcon />;
    case 'OPENNESS_ICON':
      return <PublicIcon />;
    default:
      return <AccessibilityNewIcon />;
  }
};

export default ValueIcon;