
function dot_product(v1,v2){
        let dot  = 0
    for(let i = 0 ; i < v1.length ; i++){
            dot += v1[i]*v2[i]
    }
    if (dot === 0){
        console.log('vectors are orthogonal')
    }
    return `dot(scalar) = ${dot}`
}
console.log(dot_product([1,2],[2,-1]))
