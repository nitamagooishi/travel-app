
//予約用アプリｌやることリスト、持ち物リストの行追加
//add-1
    const funcAdd_1 = function(){
    //旅程表に時間、やること、メモの入力欄を追加
    const neWTr = document.createElement("tr");
    const newTd = document.createElement("td");  
    const timeInput = document.createElement("input");
    timeInput.type="time";
    const timeText = document.createElement("textarea");
    timeText.type="text";
    timeText.style.width="250px";
    timeText.placeholder="やること・行く場所";
    const timeText2 = document.createElement("textarea");
    timeText2.type="text";
    timeText2.placeholder="めも";
    timeText2.style.width="180px"; 
    //削除ボタンを押したら、その行を削除
    const newDelite = document.createElement("button");
    newDelite.textContent="×";
    newDelite.style.marginRight="10px"; 
    newTd.appendChild(timeInput);
    newTd.appendChild(timeText);
    newTd.appendChild(timeText2);
    newTd.appendChild(newDelite);

        //削除ボタンを押したら、その行を削除
        const table = document.querySelector(".ryotei-a table");
        newDelite.addEventListener("click", function(){
            table.removeChild(neWTr);
            saveAllLists();
        })
    neWTr.appendChild(newTd);
    table.appendChild(neWTr);
    };        

    //add-2
    const funcAdd_2 = function(){
        //予約アプリに入力欄を追加
        const neWTr = document.createElement("tr");
        const newTd = document.createElement("td");  
        const newInput = document.createElement("input");
        newInput.type="text";
        newInput.placeholder="アプリ名：〇〇用";
        newTd.appendChild(newInput);        
        //削除ボタンを追加
        const table = document.querySelector(".app-a table");
        const newDelite = document.createElement("button");
        newDelite.textContent="×";
        newDelite.style.marginRight="10px";
        newTd.appendChild(newDelite);
        //削除ボタンを押したら、その行を削除  
        newDelite.addEventListener("click", function(){
            table.removeChild(neWTr);
            saveAllLists();
        })  
    neWTr.appendChild(newTd);
    table.appendChild(neWTr);
    };

    //add-3,add-4
    const funcAdd_3 = function(){
        //やることリスト、持ち物蘭に入力欄とチェックボックスを追加
        const neWTr = document.createElement("tr");
        const newTd = document.createElement("td");  
        const newInput = document.createElement("input");
        newInput.type="text"; 
        const newCheckbox = document.createElement("input");
        const newDelite = document.createElement("button");
        newDelite.textContent="×";
        newDelite.style.marginRight="10px";
        newCheckbox.type="checkbox";
        //チェックボックスにチェックが入ったら、文字に取り消し線を入れる
        newTd.appendChild(newCheckbox);
        newTd.appendChild(newInput);
        newTd.appendChild(newDelite);  
        
        //削除ボタンを押したら、その行を削除
        const table = document.querySelector(".yarukoto-a table");
        newDelite.addEventListener("click", function(){
            table.removeChild(neWTr);
            saveAllLists();
        });
        newCheckbox.addEventListener("change",function(){
            if(newCheckbox.checked){
                newInput.style.textDecoration="line-through";
                newInput.style.color="gray";
            }else{
                newInput.style.textDecoration="none";
                newInput.style.color="#3E0703";
            };
        });
    neWTr.appendChild(newTd);
    table.appendChild(neWTr);                           
    };

    const funcAdd_4 = function(){
        //やることリスト、持ち物蘭に入力欄とチェックボックスを追加
        const neWTr = document.createElement("tr");
        const newTd = document.createElement("td");  
        const newInput = document.createElement("input");
        newInput.type="text"; 
        const newCheckbox = document.createElement("input");
        const newDelite = document.createElement("button");
        newDelite.textContent="×";
        newDelite.style.marginRight="10px";
        newCheckbox.type="checkbox";
        //チェックボックスにチェックが入ったら、文字に取り消し線を入れる
        newTd.appendChild(newCheckbox);
        newTd.appendChild(newInput);
        newTd.appendChild(newDelite);  
        
        //削除ボタンを押したら、その行を削除
        const table = document.querySelector(".mochimono-a table");
        newDelite.addEventListener("click", function(){
            table.removeChild(neWTr);
            saveAllLists();
        });
        newCheckbox.addEventListener("change",function(){
            if(newCheckbox.checked){
                newInput.style.textDecoration="line-through";
                newInput.style.color="gray";
            }else{
                newInput.style.textDecoration="none";
                newInput.style.color="#3E0703";
            };
        });
    neWTr.appendChild(newTd);
    table.appendChild(neWTr);                           
    };

const adds = ["add-1","add-2","add-3","add-4"];

document.getElementById(adds[0]).addEventListener("click", funcAdd_1);
document.getElementById(adds[1]).addEventListener("click", funcAdd_2);
document.getElementById(adds[2]).addEventListener("click", funcAdd_3);
document.getElementById(adds[3]).addEventListener("click", funcAdd_4);


//データを保存する
document.addEventListener("input", function (e) {
    if (e.target.matches('input[type="text"], textarea')) {
    saveAllLists();
}
});

document.addEventListener("change", function (e) {
    if (e.target.matches('input[type="checkbox"]')) {
    saveAllLists();

    // 取り消し線処理もここでOK！
    const input = e.target.nextElementSibling;
    if (input && input.tagName === "INPUT") {
        input.style.textDecoration = e.target.checked ? "line-through" : "none";
        input.style.color = e.target.checked ? "gray" : "#3E0703";
    }}
});

const templateButton = [
"パスポート",
"ビザ(VISA、査証)",
"航空券(eチケット)",
"財布",
"現金(日本円、現地通貨)",
"クレジットカード",
"各種証明書のコピー",
"証明写真(4.5×3.5cm)2枚",
"海外用キャッシュカード",
"スーツケースベルト",
"セキュリティポーチ",
"予備の袋（エコバッグ等）",
"モバイルバッテリー",
"カメラ（＋充電器）",
"海外用電源プラグ変換アダプター",
"常備薬",
"歯ブラシ・歯磨き粉",
"タオル",
"ハンカチ・ティッシュ",
"ウェットティッシュ",
"シャンプー・コンディショナー・ボディソープ",
"洗顔料",
"コンタクトレンズ（ケース・保存液）",
"めがね",
"日焼け止め",
"絆創膏",
"化粧品",
"メイク落とし",
"マスク",
"ネックピロー（空気枕）",
"スリッパ",
"下着",
"靴下",
"着替え",
"上着",
"パジャマ",
"帽子",
"アクセサリー類",
"雨具",
"ヘアゴム"]

//持ち物リストのテンプレを追加する
document.getElementById("template").addEventListener("click", function(){
    const table = document.querySelector(".mochimono-a" + " table");
    for(let i=0; i<templateButton.length; i++){
        const neWTr = document.createElement("tr");
        const newTd = document.createElement("td");

        const newCheckbox = document.createElement("input");
        newCheckbox.type="checkbox";

        const newInput = document.createElement("input");
        newInput.type="text"
        newInput.value=templateButton[i];

        const newDelite = document.createElement("button");
        newDelite.textContent="×";
        newDelite.style.marginRight="10px";

        newDelite.addEventListener("click", function(){
            neWTr.remove();
            saveAllLists();
        })

        newCheckbox.addEventListener("click", function(){
            newInput.style.textDecoration = newCheckbox.checked ? "line-through": "none" ;
            newInput.style.color= newCheckbox.checked ? "grey" :"#3E0703" ;
        })

        newTd.appendChild(newCheckbox);
        newTd.appendChild(newInput);
        newTd.appendChild(newDelite);
        neWTr.appendChild(newTd);
        table.appendChild(neWTr);
    }

        saveAllLists();
}
);

//旅行日数を計算し、文章を追加
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");

endDate.addEventListener("change", function(){
    const start = new Date(startDate.value);
    const end = new Date(endDate.value);

    const culTime = end - start;
    const culDate = Math.ceil((culTime / (1000 * 60 * 60 * 24)+1));
    const message = document.createElement("div");
    message.textContent=`${culDate}日間の旅程表を追加したよ🚢 `;
    message.style.margin="30px 30px";
    message.style.fontSize="15px";
    message.style.textDecorationLine="underline";
    const date = document.querySelector(".date");
    date.appendChild(message);

    // 最初のテンプレートは Day 1 として表示
    const original = document.getElementById("content-1");
    original.style.display = "block";
    original.style.display = "flex";
    original.querySelector(".ryotei-title h4").textContent = "旅程表 -Day 1-";

    const clones = document.querySelectorAll(".content-1.clone");
    clones.forEach(el => el.remove());

    //Day 1 をコピーして、旅行日数分の旅程表を追加する
    for(let i =2; i<=culDate; i++){
    const clone = original.cloneNode(true);
    clone.classList.add("clone"); 
    clone.querySelector(".ryotei-title h4").textContent = `旅程表 -Day ${i}-`;
    const original3 = document.getElementById("content-3");
    original3.appendChild(clone);
    }

    clone.addEventListener("click", function (e) {
        if (e.target.matches(".add-1")) {
        funcAdd_1();
    } else if (e.target.matches(".add-2")) {
        funcAdd_2();
    } else {
        return;
    }
});

saveAllLists();

});
