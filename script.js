function themeMode () {
    const html=document.documentElement
    html.classList.toggle("light")

    //selecionar a imagem
    const img =document.querySelector("#profile img")
    //fazer a troca da imagem
    if (html.classList.contains("ligth")){
    //se estiver no light altere a foto 
        img.setAttribute("src","./fotos/avatar_dark.png")
    }else{
    //se ñ pode manter a padrão
        img.setAttribute("src", "./fotos/avatar.png")
    }
}