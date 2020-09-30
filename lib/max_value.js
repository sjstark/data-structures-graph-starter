function maxValue(node, visited = new Set()) {
  if (visited.has(node)) return -Infinity;
  visited.add(node);
  let values = [];
  // if (!visited.has(node)) {
  values.push(node.val);
  // }
  node.neighbors.forEach((neighbor) => {
    //  if (visited.has(neighbor)) {
    values.push(maxValue(neighbor, visited));
    //  }
  });
  return Math.max(...values);
}

module.exports = {
  maxValue,
};
