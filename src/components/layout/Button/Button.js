import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
    palette: {
        gold: {
            main: "#d4af37",
        }},
});

export default function BasicButtons() {
    return (
        <ThemeProvider theme={theme}>
            <Stack spacing={2} direction="row">
                <Button variant="contained" color='gold'>See More</Button>
            </Stack>
        </ThemeProvider>
    );
}