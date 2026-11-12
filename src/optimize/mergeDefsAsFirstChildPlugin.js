const fn = (root) => {
    const isDef = (node) => node.name === "def";
    const isRootNode = (node) => node === root.children[0];
    const defs = [];

    const onEnter = (node, parentNode) => {
        if (!isDef(node)) return;
        const isTarget = (current) => current === node;
        defs.push(node);
        parentNode.children = parentNode.children.filter((child) => !isTarget(child));
    };

    const onExit = (node) => {
        if (!isRootNode(node)) return;
        const extractChildren = ({ children }) => children;
        node.children = [
            {
                type: "element",
                name: "def",
                children: defs.flatMap(extractChildren),
                attributes: [],
            },
            ...node.children,
        ];
    };

    return { element: { enter: onEnter, exit: onExit } };
};

export const mergeDefsAsFirstChildPlugin = {
    name: "mergeDefsAsFirstChildPlugin",
    description: "Merges every def and sets it as the first child of svg",
    fn,
};
