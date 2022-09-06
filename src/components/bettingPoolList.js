import React, { useState } from 'react'
import { useEffect } from 'react';
import { OK } from '../constants';
import { getMatchFromIdService, getPoolsFromMatchService } from '../service/footballService';
import { determineSlot } from '../utils/footballUtils';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import BettingPool from './bettingPool';
import { useParams } from 'react-router';
const BettingPoolList = (props) => {
    const [pools, setPools] = useState([]);
    console.log(pools)
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 400,
        lineHeight: '200px',
    }));
    useEffect(() => { setPools(props.pools); }, [props.pools])
    return (
        <Grid container spacing={2}>

            <Grid item xs={6}>
                <Box
                    sx={{
                        p: 2,
                        bgcolor: 'background.default',
                        display: 'grid',
                        gridTemplateColumns: { md: '1200px' },
                        gap: 2,
                    }}
                >
                    {
                        pools.length > 0
                            ?
                            pools.map(pool => (
                                <Item elevation={12}>
                                    <BettingPool pool={pool} />
                                </Item>
                            ))

                            :
                            <>No matches</>
                    }
                </Box>
            </Grid>
        </Grid>
    )
}

export default BettingPoolList