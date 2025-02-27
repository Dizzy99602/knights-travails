function knightMoves(start, end) {
  // Define all 8 possible moves for a knight
  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  // Check if a position is within the chessboard
  function isValid(position) {
    const [x, y] = position;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // BFS to find the shortest path
  const queue = [[start]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    // If the current position is the destination, return the path
    if (current[0] === end[0] && current[1] === end[1]) {
      return path;
    }

    // Explore all possible moves
    for (const move of moves) {
      const next = [current[0] + move[0], current[1] + move[1]];
      if (isValid(next) && !visited.has(next.toString())) {
        visited.add(next.toString());
        queue.push([...path, next]);
      }
    }
  }

  // If no path is found (though the problem assumes there is always a path)
  return null;
}

// Example usage:
const path = knightMoves([3, 3], [4, 3]);
console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
path.forEach((position) => console.log(position));
