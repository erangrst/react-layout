import { CssBaseline, ThemeProvider } from '@mui/material'
import darkTheme from './theme'
import MainLayoutComponent from './components/layout-feature/MainLayoutComponent';

export function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <MainLayoutComponent>
                {/* <Typography variant="h1" gutterBottom>
                    Page content area
                </Typography>
                <Typography variant="body1" >
                    The third row expands to fill the remaining vertical space. Replace this area with your routed pages, dashboards, or workspace components.
                </Typography>
                <TreeComponent /> */}
            </MainLayoutComponent>
        </ThemeProvider>
    )
}
