import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import MainLayoutComponent from './components/MainLayoutComponent'
import TreeComponent from './components/tree.component'
import darkTheme from './theme'

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
