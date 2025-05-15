
import React,{useState} from 'react';
import { Box } from '@mui/material';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

const Layout = () => {
 
  const contentItems = [
  { id: 1, title: 'Meta' },
  { id: 2, title: 'Content_16_1up', subtitle: 'Hulu selection', code: 'BL' },
  { id: 3, title: 'Banner A2_null', subtitle: 'Coming Soon', code: 'RD' },
  { id: 4, title: 'Banner A3_null', subtitle: 'Hulu selection', code: 'BU' },
  { id: 5, title: 'Banner A4_null', subtitle: 'Coming Soon', code: 'GN' },
  { id: 6, title: 'Banner A5_null', subtitle: 'Hulu selection', code: 'OR' },
  { id: 7, title: 'Banner A6_null', subtitle: 'Coming Soon', code: 'PR' },
  { id: 8, title: 'Banner A7_null', subtitle: 'Hulu selection', code: 'BR' },
  { id: 9, title: 'Banner A8_null', subtitle: 'Coming Soon', code: 'BL' },
];


  const [selectedTitle, setSelectedTitle] = useState(contentItems[0].title);
  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw' , gap: 1}} >
      <LeftPanel onItemSelect={setSelectedTitle} contentItems={contentItems} />
      <RightPanel  title={selectedTitle} />
    </Box>
  );
};

export default Layout;
