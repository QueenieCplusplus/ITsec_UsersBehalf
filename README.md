# ITsec_UsersBehalf
針對使用者的資安攻擊

# Attacks thru Input

    輸入包含 DOM 範疇的焦點、鍵盤、滑鼠與指標、表單、IFrame。

此子議題，以 IFrame 作為描述攻擊過程的例子，身為 DOM 紀錄功能的網頁實例，其遍覽 DOM 內部所有頁框，試著掛鉤 SOP 的每個 IFrames，作為掛鉤的源頭。

這意味著，針對掛鉤住的任何子頁框而言，其包含 DOM 事件紀錄。此 code 展示了利用函數建立起掛鉤子腳本元素的目的，最後利用迴圈遍覽每一個 IFrames 或是 ChildFrames，並附加腳本 Script 至頁框的 Body 中。

https://github.com/QueenieCplusplus/ITsec_UsersBehalf/blob/master/Hooker.js

# Attacks via Social Tool

    社交工具包含視窗、全螢幕、UI、Phishing、偽造電子簽章、偽造軟體更新。

此子議題，以 Gmail 的 Phishing 作為描述攻擊過程的例子，這類動態的、內嵌的 Ｐhishing，其攻擊腳本範例情詳 code。

https://github.com/QueenieCplusplus/ITsec_UsersBehalf/blob/master/Phishing.js

# Attacks on Privacy

    對瀏覽器暫存的潛在持續的個人訊息進行擷取 (包含攝影機、麥克風、密碼管理器)。
