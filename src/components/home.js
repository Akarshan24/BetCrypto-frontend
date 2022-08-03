import Header from './header';
import Tournaments from './tournaments';
import Trending from './trending';
import Support from './support';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMatchListForTournamentService, getTournamentsService } from '../service/footballService';
import { OK } from '../constants';
import { add } from '../features/football';
const Home = () => {
  const [value, setValue] = useState('1');
  const footballTournamentToMatch = useSelector(state => state.football);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  // Runs on page load/reloading only
  useEffect(() => {
    console.log("Called")
    const loadData = async () => {
      const response = await getTournamentsService();
      if (response.status === OK) {
        const data = response.response;
        Object.entries(data).map(async tournament => {
          const res = await getMatchListForTournamentService(tournament[1].tournamentId);
          if (res.status === OK) {
            const matchList = res.response;
            const id = tournament[1].tournamentId;
            const name = tournament[1].tournament;
            dispatch(add({ key: name, value: { tournamentId: id, matchList } }));
          }
        });
      }
    };
    loadData();
  }, [])
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