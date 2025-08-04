//  Fruit Into Baskets



// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

//     You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
//     Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
//     Once you reach a tree with fruit that cannot fit in your baskets, you must stop.



var totalFruit = function(fruits) {
    let maxFruits = 0;
    let start = 0;
    let basket = new Map();

    for (let end = 0; end < fruits.length; end++) {
        let fruit = fruits[end];
        basket.set(fruit, (basket.get(fruit) || 0) + 1);

        while (basket.size > 2) {
            let leftFruit = fruits[start];
            basket.set(leftFruit, basket.get(leftFruit) - 1);
            if (basket.get(leftFruit) === 0) {
                basket.delete(leftFruit);
            }
            start++;
        }

        maxFruits = Math.max(maxFruits, end - start + 1);
    }

    return maxFruits;
};
