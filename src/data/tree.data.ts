export type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[];
};

export const treeData: TreeNode[] = Array.from({ length: 10 }, (_, rootIndex) => {
  const rootId = `root-${rootIndex + 1}`;

  return {
    id: rootId,
    label: `Root ${rootIndex + 1}`,
    children: Array.from({ length: 10 }, (_, childIndex) => {
      const childId = `${rootId}-child-${childIndex + 1}`;
      const itemCount = 3 + ((rootIndex + childIndex) % 3);

      return {
        id: childId,
        label: `Child ${childIndex + 1}`,
        children: Array.from({ length: itemCount }, (_, itemIndex) => ({
          id: `${childId}-item-${itemIndex + 1}`,
          label: `Item ${itemIndex + 1}`,
        })),
      };
    }),
  };
});
