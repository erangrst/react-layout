import { Box, Typography } from '@mui/material'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'

type TreeNode = {
    id: string
    label: string
    children?: TreeNode[]
}

const treeData: TreeNode[] = [
    {
        id: 'sales',
        label: 'Sales',
        children: [
            {
                id: 'sales-west',
                label: 'West Region',
                children: [{ id: 'sales-west-accounts', label: 'Enterprise Accounts' }],
            },
            {
                id: 'sales-east',
                label: 'East Region',
                children: [{ id: 'sales-east-accounts', label: 'SMB Accounts' }],
            },
        ],
    },
    {
        id: 'operations',
        label: 'Operations',
        children: [
            {
                id: 'ops-logistics',
                label: 'Logistics',
                children: [{ id: 'ops-warehouse', label: 'Warehouse' }],
            },
        ],
    },
    {
        id: 'finance',
        label: 'Finance',
        children: [
            {
                id: 'finance-reporting',
                label: 'Reporting',
                children: [{ id: 'finance-monthly', label: 'Monthly Reports' }],
            },
        ],
    },
    {
        id: 'support',
        label: 'Support',
        children: [
            {
                id: 'support-tier1',
                label: 'Tier 1',
                children: [{ id: 'support-tier1-knowledge', label: 'Knowledge Base' }],
            },
        ],
    },
    {
        id: 'hr',
        label: 'Human Resources',
        children: [
            {
                id: 'hr-recruiting',
                label: 'Recruiting',
                children: [{ id: 'hr-interviews', label: 'Interviews' }],
            },
        ],
    },
]

function renderTreeItems(nodes: TreeNode[]) {
    return nodes.map((node) => (
        <TreeItem key={node.id} itemId={node.id} label={node.label}>
            {node.children ? renderTreeItems(node.children) : null}
        </TreeItem>
    ))
}

function TreeComponent() {
    return (
        <Box sx={{ maxWidth: 720, mx: 'auto', p: 2 }}>
            <Typography variant="h5" gutterBottom>
                Organization Tree
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                A hierarchical tree view with five root categories and a three-level structure.
            </Typography>

            <SimpleTreeView
                aria-label="organization tree"
                defaultExpandedItems={treeData.map((node) => node.id)}
                sx={{ bgcolor: 'background.default', borderRadius: 2, p: 1 }}
            >
                {renderTreeItems(treeData)}
            </SimpleTreeView>
        </Box>
    )
}

export default TreeComponent
