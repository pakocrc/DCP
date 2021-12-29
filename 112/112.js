// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

/// Daily Coding Problem #112

/// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. 
/// Assume that each node in the tree also has a pointer to its parent.

class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.data = value
    }
}

let root;
let path1 = [];
let path2 = [];

/// Finds the path from root node to given root of the tree.
function findLCA(n1, n2) {
    path1 = []
    path2 = []
    return findLCAInternal(root, n1, n2)
}

function findLCAInternal(root, n1, n2) {
    if (!findPath(root, n1, path1) || !findPath(root, n2, path2)) {
        console.log(path1.length > 0 ? "n1 is present" : "n1 is missing")
        console.log(path2.length > 0 ? "n2 is present" : "n2 is missing")
        return -1
    }

    let i;
    for (i = 0; i < path1.length; i++) {
        if (path1[i] != path2[i]) {
            break
        }
    }

    return path1[i - 1]
}

/// Finds the path from root node to
/// given root of the tree, Stores the
/// path in a vector path[], returns true
/// if path exists otherwise false
function findPath(root, n, path) {
    // base case
    if (root == null) {
        return false;
    }

    path.push(root.data)

    if (root.data == n) {
        return true
    }

    if (root.left != null && findPath(root.left, n, path)) {
        return true
    }

    if (root.right != null && findPath(root.right, n, path)) {
        return true
    }

    path.pop()

    return false
}

root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log("# LCA - DCP #112")
console.log("LCA(4, 5) = " + findLCA(4, 5))
console.log("LCA(4, 6) = " + findLCA(4, 6))
console.log("LCA(3, 4) = " + findLCA(3, 4))
console.log("LCA(2, 4) = " + findLCA(2, 4))
console.log("LCA(6, 7) = " + findLCA(6, 7))