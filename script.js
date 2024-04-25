function themeMode () {
    const html=document.documentElement
    html.classList.toggle("light")

    //selecionar a imagem
    const img =document.querySelector("#profile img")
    //fazer a troca da imagem
    if (html.classList.contains("light")){
    //se estiver no light altere a foto 
        img.setAttribute("src","./fotos/avatar_dark.png")
    }else{
    //se ñ pode manter a padrão
        img.setAttribute("src", "./fotos/avatar.png")
    }


    if (html.classList.contains("light")) {
        img.alt = "Uma self com uma parede barnca no fundo, Matheus esta usando um oculos com armação preta com um filtro mais claro";
    } else {
        img.alt = "Uma self com uma parede barnca no fundo, Matheus esta usando um oculos com armação preta com um filtro mais dark";
    }
}