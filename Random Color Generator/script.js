let getColor = () =>{
    let random = Math.floor(Math.random() * 16777215);
    let color = "#" + random.toString(16);
    console.log(random,color);
    document.getElementById("color-code").innerText = color;
    document.body.style.backgroundColor = color;

    navigator.clipboard.writeText(color);
}
document.getElementById("btn").addEventListener("click",getColor);

getColor();