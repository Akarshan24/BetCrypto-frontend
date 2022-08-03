import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 400,
    lineHeight: '200px',
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });
const footballMatchCardList = () => {
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
                    {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                        <Item key={elevation} elevation={elevation}>
                            {`elevation=${elevation}`}
                        </Item>
                    ))}
                </Box>
            </Grid>
        </Grid>
    );
}

export default footballMatchCardList