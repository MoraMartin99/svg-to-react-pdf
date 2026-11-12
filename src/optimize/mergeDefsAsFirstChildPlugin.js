const defsName = "defs";

const fn = (root) => {
    const isDefs = (node) => node.name === defsName;
    const isRootNode = (node) => node === root.children[0];
    const defsList = [];

    const onEnter = (node, parentNode) => {
        if (!isDefs(node)) return;
        const isTarget = (current) => current === node;
        defsList.push(node);
        parentNode.children = parentNode.children.filter((child) => !isTarget(child));
    };

    const onExit = (node) => {
        if (!isRootNode(node)) return;
        const extractChildren = ({ children }) => children;
        node.children = [
            {
                type: "element",
                name: defsName,
                children: defsList.flatMap(extractChildren),
                attributes: [],
            },
            ...node.children,
        ];
    };

    return { element: { enter: onEnter, exit: onExit } };
};

export const mergeDefsAsFirstChildPlugin = {
    name: "mergeDefsAsFirstChildPlugin",
    description: "Merges every defs and sets it as the first child of svg",
    fn,
};
