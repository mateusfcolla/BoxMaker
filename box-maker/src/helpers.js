function randomDefaultColor(){
    let rgb = [0, 1, 2]
    for(let i = 0; i<3; i++){
        let random = Math.floor(Math.random() * 255);
        rgb[i] = random;
    }
    return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

export default randomDefaultColor;