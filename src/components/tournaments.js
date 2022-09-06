import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { OK } from '../constants';
import { useSelector } from 'react-redux';
import FootballMatchCardList from './footballMatchCardList';
import footballTournament from '../features/footballTournament';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);
    const tournament = useSelector(state => state.footballTournament);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const loadTabs = () => {
        {
            let ctr = 0;
            return tournament.map(x =>
                <TabPanel value={value} index={ctr++}><FootballMatchCardList tournament={x} /></TabPanel>
            )
        }
    }

    return (
        <Box
            sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100%' }}
        >
            <Tabs
                orientation="vertical"
                value={value}
                variant="scrollable"
                visibleScrollbar="true"
                onChange={handleChange}
                sx={{ overflowY: 'visible' }}
            >
                {tournament.map(x =>
                    x.value.matches > 0 ? <Tab label={x.value.name} /> : <></>
                )}
            </Tabs>
            {loadTabs()}
        </Box>
    );
}