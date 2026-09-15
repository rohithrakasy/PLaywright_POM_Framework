export function generatePhnNum(){

    const fetchRandomNum = Math.floor(1000000000+Math.random()*9000000000);

    console.log("Random Number: "+ fetchRandomNum);

    return fetchRandomNum.toString();
}

export function generateDotNumber(){

    const generateDot = Math.floor(1000000+Math.random()* 9000000);

    return generateDot;
}