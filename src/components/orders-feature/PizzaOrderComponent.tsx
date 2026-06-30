import { Box } from '@mui/material'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { pizzaOrders } from '../../data/pizza-order.data'
import { PizzaOrder } from '../../models/pizza-order.model'

const columns: GridColDef<PizzaOrder>[] = [
    { field: 'id', headerName: 'ID', flex: 0.8, minWidth: 90 },
    { field: 'customerName', headerName: 'Customer Name', flex: 1.2, minWidth: 160 },
    { field: 'pizzaType', headerName: 'Pizza Type', flex: 1, minWidth: 140 },
    { field: 'quantity', headerName: 'Quantity', flex: 0.7, minWidth: 100, type: 'number' },
    { field: 'price', headerName: 'Price', flex: 0.8, minWidth: 100, type: 'number' },
    { field: 'status', headerName: 'Status', flex: 0.9, minWidth: 130 },
]

function PizzaOrderComponent() {
    return (
        <Box sx={{ height: '100%', width: '100%', overflow: 'hidden' }}>
            <DataGrid
                rows={pizzaOrders}
                columns={columns}
                className="PizzaOrder"
                hideFooter
                hideFooterSelectedRowCount
                pageSizeOptions={[]}
                disableRowSelectionOnClick
                sx={{
                    border: 0,
                    height: '100%',
                    width: '100%',
                    '& .MuiDataGrid-columnHeaders': {
                        bgcolor: 'background.default',
                    },
                }}
            />
        </Box>
    )
}

export default PizzaOrderComponent
