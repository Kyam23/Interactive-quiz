const showTime = () => {
    var date = new Date()
    var h = date.getHours().toString().padStart(2, "0")
    var m = date.getMinutes().toString().padStart(2, "0")
    var s = date.getSeconds().toString().padStart(2, "0")
    
    var time = h + ":" + m + ":" + s 
    document.getElementById("time").innerText = time
    
    if (s ==2
    ) {
        alert("ting ting tinining tingting tinining tinininininining!")
        clearInterval(showTime)
    }
    
}
setInterval(showTime, 1000)