/*
Recursively Searching Through a Nested Object (DOM-like or JSON)
*/

const tree = {
    tag: "div",
    children: [
        { tag: "span", children: [] },
        {
            tag: "section",
            children: [
                { tag: "p", children: [] },
                { tag: "button", children: [] },
            ]
        }
    ]
};

function findTag(node, targetTag) {
    if (node.tag === targetTag) {
        return true;
    }
    for (const child of node.children) {
        if (findTag(child, targetTag)) {
            return true;
        }
    }

    return false;
}

console.log(findTag(tree, "button")); // Output: true
console.log(findTag(tree, "table"));  // Output: false



/*
💡 Where this is useful in testing:
Validating if a specific element exists in a nested UI structure (e.g., component trees).
Searching deeply nested config or test data.
*/