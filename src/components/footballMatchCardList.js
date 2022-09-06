import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import FootballMatchCard from './footballMatchCard';
import footballMatch from '../features/footballMatch';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
    lineHeight: '200px',
}));

const FootballMatchCardList = (props) => {
    const footballMatch = useSelector(state => state.footballMatch);
    const matchList = useState(footballMatch.filter(x => x.value.tournament === props.tournament.value.name))
    //console.log(matchList);
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
                                    <FootballMatchCard match={match.value} tournamentId={props.tournament.key} />
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