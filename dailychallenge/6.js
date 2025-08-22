//  Find the Maximum Number of Fruits Collected





// There is a game dungeon comprised of n x n rooms arranged in a grid.

// You are given a 2D array fruits of size n x n, where fruits[i][j] represents the number of fruits in the room (i, j). Three children will play in the game dungeon, with initial positions at the corner rooms (0, 0), (0, n - 1), and (n - 1, 0).

// The children will make exactly n - 1 moves according to the following rules to reach the room (n - 1, n - 1):

//     The child starting from (0, 0) must move from their current room (i, j) to one of the rooms (i + 1, j + 1), (i + 1, j), and (i, j + 1) if the target room exists.
//     The child starting from (0, n - 1) must move from their current room (i, j) to one of the rooms (i + 1, j - 1), (i + 1, j), and (i + 1, j + 1) if the target room exists.
//     The child starting from (n - 1, 0) must move from their current room (i, j) to one of the rooms (i - 1, j + 1), (i, j + 1), and (i + 1, j + 1) if the target room exists.

// When a child enters a room, they will collect all the fruits there. If two or more children enter the same room, only one child will collect the fruits, and the room will be emptied after they leave.

// Return the maximum number of fruits the children can collect from the dungeon.





var maxCollectedFruits = function(fruits) {
    const n = fruits.length;
    let total = 0;

    for (let i = 0; i < n; i++) {
        total += fruits[i][i];
    }

    let rightPath = Array(3).fill(0);
    rightPath[0] = fruits[0][n - 1];

    let bottomPath = Array(3).fill(0);
    bottomPath[0] = fruits[n - 1][0];

    let window = 2;

    for (let step = 1; step < n - 1; step++) {
        const newRight = Array(window + 2).fill(0);
        const newBottom = Array(window + 2).fill(0);

        for (let dist = 0; dist < window; dist++) {
            let left = dist - 1 >= 0 ? rightPath[dist - 1] : 0;
            let mid = rightPath[dist];
            let right = dist + 1 < rightPath.length ? rightPath[dist + 1] : 0;
            newRight[dist] = Math.max(left, mid, right) + fruits[step][n - 1 - dist];

            left = dist - 1 >= 0 ? bottomPath[dist - 1] : 0;
            mid = bottomPath[dist];
            right = dist + 1 < bottomPath.length ? bottomPath[dist + 1] : 0;
            newBottom[dist] = Math.max(left, mid, right) + fruits[n - 1 - dist][step];
        }

        rightPath = newRight;
        bottomPath = newBottom;

        if (window - n + 4 + step <= 1) {
            window++;
        } else if (window - n + 3 + step > 1) {
            window--;
        }
    }

    return total + rightPath[0] + bottomPath[0];
};
