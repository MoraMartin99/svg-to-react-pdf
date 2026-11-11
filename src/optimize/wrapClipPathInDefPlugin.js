const fn = () => {
    const isClipPath = (node) => node.name === "clipPath";
    const isDef = (node) => node.name === "def";

    const onEnter = (node, parentNode) => {
        if (!isClipPath(node)) return;
        if (isDef(parentNode)) return;

        parentNode.children[parentNode.children.indexOf(node)] = {
            type: "element",
            name: "def",
            children: [{ ...node }],
            attributes: [],
        };
    };

    return { element: { enter: onEnter } };
};

export const wrapClipPathInDefPlugin = {
    name: "wrapClipPathInDefPlugin",
    description: "Wraps every clipPath in a def (if it isn't already)",
    fn,
};
