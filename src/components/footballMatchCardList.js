import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import FootballMatchCard from './footballMatchCard';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
    lineHeight: '200px',
}));

const FootballMatchCardList = (props) => {
    const football = useSelector(state => state.football);
    //console.log(football);
    const tournament = useState(football.filter(x => x.key === props.name))
    //console.log(tournament);
    const matchList = useState(tournament[0][0]['value']['matchList']);
    console.log(matchList);
    return (
        <Grid container spacing={2}>

            <Grid item xs={6}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '650px 650px' },
                        gap: 2,
                    }}
                >
                    {
                        matchList[0].length > 0
                            ?
                            matchList[0].map(match => (
                                <Item elevation={12}>
                                    <FootballMatchCard data={match} />
                                </Item>
                            ))

                            :
                            <>No matches</>
                    }
                </Box>
            </Grid>
        </Grid>
    );
}

export default FootballMatchCardList