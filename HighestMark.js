let mark=[33,42,46,78,49]
let highestMark=findHighestMark(mark)
console.log(highestMark)

function findHighestMark(mark){
    let highestMark=[0]
    for(let i=0; i<mark.length; i++)
    {
        highestMark=mark[i]>highestMark?mark[i]:highestMark
    }
    return highestMark
}