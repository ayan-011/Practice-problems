//  Maximum Fruits Harvested After at Most K Steps


// Fruits are available at some positions on an infinite x-axis. You are given a 2D integer array fruits where fruits[i] = [positioni, amounti] depicts amounti fruits at the position positioni. fruits is already sorted by positioni in ascending order, and each positioni is unique.

// You are also given an integer startPos and an integer k. Initially, you are at the position startPos. From any position, you can either walk to the left or right. It takes one step to move one unit on the x-axis, and you can walk at most k steps in total. For every position you reach, you harvest all the fruits at that position, and the fruits will disappear from that position.


 
function maxTotalFruits(fruits, startPos, k) {
    let maxFruits = 0;
    let total = 0;
    let left = 0;

    for (let right = 0; right < fruits.length; right++) {
        total += fruits[right][1];  // Add fruits at right pointer

        // While window is not walkable within k steps, move left
        while (left <= right && minSteps(fruits, left, right, startPos) > k) {
            total -= fruits[left][1];  // Remove fruits at left pointer
            left++;
        }

        maxFruits = Math.max(maxFruits, total);
    }

    return maxFruits;
}

// Helper to calculate minimum steps to collect fruits from left to right
function minSteps(fruits, left, right, startPos) {
    const leftPos = fruits[left][0];
    const rightPos = fruits[right][0];

    // Two ways: go left then right, or right then left
    return Math.min(
        Math.abs(startPos - leftPos) + (rightPos - leftPos),
        Math.abs(startPos - rightPos) + (rightPos - leftPos)
    );
}
