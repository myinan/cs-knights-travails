function knightMoves(start, end) {
  // Define possible moves for the knight
  const moves = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  // Initialize the queue for BFS
  const queue = [[start]];
  // Set to keep track of visited squares
  const visited = new Set([start.toString()]);

  // Check if the given square is within the chessboard
  function isValid(square) {
    const [x, y] = square;
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // Perform BFS
  while (queue.length > 0) {
    const path = queue.shift();
    const currentSquare = path[path.length - 1];

    // Check if the knight has reached the destination
    if (currentSquare[0] === end[0] && currentSquare[1] === end[1]) {
      console.log(
        `You made it in ${path.length - 1} moves!  Here's your path:`,
      );
      path.forEach((square) => {
        console.log(square);
      });
      return path;
    }

    // Generate next possible moves
    moves.forEach((move) => {
      const newSquare = [
        currentSquare[0] + move[0],
        currentSquare[1] + move[1],
      ];

      // Check if the new square is valid and not visited
      if (isValid(newSquare) && !visited.has(newSquare.toString())) {
        visited.add(newSquare.toString());
        queue.push([...path, newSquare]);
      }
    });
  }

  // If no path is found
  console.log("No valid path found.");
  return null;
}

/* Driver Script */
knightMoves([0, 0], [1, 2]);
knightMoves([0, 0], [3, 3]);
knightMoves([3, 3], [0, 0]);
knightMoves([0, 0], [7, 7]);
