import { Box, Typography } from '@mui/material'
import { SimpleTreeView, TreeItem } from '@mui/x-tree-view'
import { treeData, TreeNode } from '../data/tree.data'

function renderTreeItems(nodes: TreeNode[]) {
    return nodes.map((node) => (
        <TreeItem key={node.id} itemId={node.id} label={node.label}>
            {node.children ? renderTreeItems(node.children) : null}
        </TreeItem>
    ))
}

function TreeComponent() {
    return (
        <Box >
            <Typography>
                Organization Tree
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                A hierarchical tree view with 10 root categories, 10 children per root, and 3 to 5 child items per child.
            </Typography>

            <SimpleTreeView
                // defaultExpandedItems={treeData.map((node) => node.id)}
                sx={{ bgcolor: 'background.default', borderRadius: 2, p: 1 }}
            >
                {renderTreeItems(treeData)}
            </SimpleTreeView>
        </Box>
    )
}

export default TreeComponent
