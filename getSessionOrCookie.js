//2019, 12/22, AM 7:30, by Queenie
// get Session || Cookie

// 利用 EverCookie 這駭客程式碼庫
// 利用文檔物件包含： cookie + userData + window

// 以下，先行建立 evercookie 物件

ec = new evercookie();

get_session_id: function() {

    var id = this.ec.evercookie_cookie("QHOOK");


    //檢查是否能識別此瀏覽器，若不能，則建立...
    if(typeof id == 'undefined'){

        var id = this.ec.evercookie_userdata("QHOOK")

    }

    if(typeof id == 'undefined'){

        var id = this.ec.evercookie_window("QHOOK")

    }

    //檢查是否能識別此瀏覽器，若不能，則建立一會話識別符
    if((typeof id == 'undefined') || (id == null)){

        id = this_gen_session_id();
        this.set_session_id(id);

    }

    return id;
}