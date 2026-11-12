const defsName = "defs";

const fn = () => {
    const isClipPath = (node) => node.name === "clipPath";
    const isDefs = (node) => node.name === defsName;

    const onEnter = (node, parentNode) => {
        if (!isClipPath(node)) return;
        if (isDefs(parentNode)) return;

        parentNode.children[parentNode.children.indexOf(node)] = {
            type: "element",
            name: defsName,
            children: [{ ...node }],
            attributes: [],
        };
    };

    return { element: { enter: onEnter } };
};

export const wrapClipPathInDefsPlugin = {
    name: "wrapClipPathInDefsPlugin",
    description: "Wraps every clipPath in a defs (if it isn't already)",
    fn,
};
