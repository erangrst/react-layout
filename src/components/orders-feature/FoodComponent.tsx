import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import BakeryDiningIcon from '@mui/icons-material/BakeryDining'
import LocalPizzaIcon from '@mui/icons-material/LocalPizza'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu'
import BreadOrderComponent from './BreadOrderComponent'
import PizzaOrderComponent from './PizzaOrderComponent'

function FoodComponent() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                width: '100%',
                gap: 1,
                overflow: 'hidden',
            }}
        >
            <Stack direction="row" spacing={1}
                sx={{ flex: '0 0 auto', alignItems: 'center', minHeight: 'fit-content', }}>
                <Tooltip title="Bread Orders">
                    <IconButton color="primary" aria-label="bread orders">
                        <BakeryDiningIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Pizza Orders">
                    <IconButton color="secondary" aria-label="pizza orders">
                        <LocalPizzaIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Food Overview">
                    <IconButton color="success" aria-label="food overview">
                        <RestaurantMenuIcon />
                    </IconButton>
                </Tooltip>
            </Stack>

            <Box sx={{ width: '100%', flex: '0 0 auto', overflow: 'hidden', border: '3px solid yellow', marginBottom: '2rem' }}>
                <BreadOrderComponent />
            </Box>

            <Box sx={{ width: '100%', flex: '1 1 auto', minHeight: 0, overflow: 'hidden', border: '3px solid lightblue' }}>
                <PizzaOrderComponent />
            </Box>
        </Box>
    )
}

export default FoodComponent
