function numRegions(graph) {
    let count = 0;
    let visited = new Set();

    for (let node in graph) {
        if (!visited.has(node)) {
            visited.add(node);
            count++;
        }
        graph[node].forEach(neighbor => {
            if (!visited.has(neighbor)) {
                visited.add(neighbor)
            }
        })
    }

    return count;
}

module.exports = {
    numRegions
};
