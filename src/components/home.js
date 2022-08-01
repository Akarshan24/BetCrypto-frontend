import Header from './header';
import Tournaments from './tournaments';
import Trending from './trending';
import Support from './support';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
const Home = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <>
      <Header />
      <Box sx={{ width: '100%' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
            <TabList onChange={handleChange} centered>
              <Tab label="Trending" value="1" />
              <Tab label="Tournaments" value="2" />
              <Tab label="Support" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" ><Trending /></TabPanel>
          <TabPanel value="2"><Tournaments /></TabPanel>
          <TabPanel value="3"><Support /></TabPanel>
        </TabContext>

      </Box>
    </>
  )
}
export default Home;