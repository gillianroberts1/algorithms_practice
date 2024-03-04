/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}


 n= number of flowers to plant => 1

 1 0 0 0 1 => planted bed
 x x 1 x 
   i

 x x 1 x x => true (n=1)
 x x   x x => false (n=2)

 if i = 1 then (i +=2) 


 plantable >= n

 */
 var canPlaceFlowers = function (flowerbed, n) {
    let plantable = 0;


    flowerbed.forEach((_value, index) => {
        const prev = index - 1
        const next = index + 1
        console.log("loop:", index)

        console.log({prev}, 'previous', flowerbed[prev])
        console.log({index},'current', flowerbed[index])
        console.log({next}, 'next', flowerbed[next])

        if (!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]) {
            plantable++
            flowerbed[index] = 1
            console.log({plantable})
        }

    })


    return plantable >= n


};

var canPlaceFlowers = function(flowerbed, n) {
    let curr = 0;
    let prev = curr-1;
    let next = curr+1;
    let noAdj = 0;

    for(curr; curr < flowerbed.length; prev++, curr++, next++) {
        if(!flowerbed[prev] && !flowerbed[curr] && !flowerbed[next]) {
            noAdj++;
            flowerbed[curr] = 1;
        }
    }
    return noAdj >= n;
};

