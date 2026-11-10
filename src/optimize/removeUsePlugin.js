import { cloneDeep } from "lodash-es";

const fn = (root) => {
    const cachedSearches = [];

    const getNode = (id) => {
        const cachedResult = cachedSearches.find((current) => current.attributes.id === id);
        const applyRecursiveSearch = (nodes) => {
            const isTarget = (node) => node.attributes.id === id;
            for (const node of nodes) {
                if (isTarget(node)) return node;
                const recursiveSearch = applyRecursiveSearch(node.children);
                if (recursiveSearch) return recursiveSearch;
            }
        };
        return cachedResult ? cachedResult : cloneDeep(applyRecursiveSearch(root.children));
    };

    const onEnter = (node, parentNode) => {
        const isUse = (node) => node.name === "use";
        const getId = (href) => /(?<=#)\w+/.exec(href)[0];
        if (!isUse(node)) return;
        const target = getNode(getId(node.attributes.href));
        if (!target) throw new Error(`Target doesn't exist for node = ${node}`);
        cachedSearches.push(target);
        parentNode.children[parentNode.children.indexOf(node)] = {
            ...target,
            attributes: { ...node.attributes, ...target.attributes, id: undefined },
        };
    };

    return { element: { enter: onEnter } };
};

export const removeUsePlugin = {
    name: "removeUsePlugin",
    description: "Replaces every use tag with its target",
    fn,
};
