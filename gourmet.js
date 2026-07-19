
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("検索結果1件目");
  console.log("店舗名: "+data.results.shop[0].name); 
  console.log("住所: "+data.results.shop[0].address);
  console.log("予算: "+data.results.shop[0].budget.name);
  console.log("営業時間: "+data.results.shop[0].open);
  console.log("最寄駅: "+data.results.shop[0].station_name);
  
  console.log("検索結果2件目");
  console.log("店舗名: "+data.results.shop[1].name);
  console.log("住所: "+data.results.shop[1].address);
  console.log("予算: "+data.results.shop[1].budget.name);
  console.log("営業時間: "+data.results.shop[1].open);
  console.log("最寄駅: "+data.results.shop[1].station_name);

}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {
let result = document.querySelector('#result');
result.remove();

let div = document.createElement('div');
document.body.insertAdjacentElement('beforeend', div);
div.setAttribute('id', 'result');

let zentai = document.createElement('div');
zentai.setAttribute('id', 'zentai');
div.insertAdjacentElement('beforeend', zentai);

for (let i = 0; i < data.results.shop.length; i++) {

  let d = document.createElement('div');
  zentai.insertAdjacentElement('beforeend', d);
  let ul = document.createElement('ul');
  d.insertAdjacentElement('beforeend', ul);
  let li = document.createElement('li');
  ul.insertAdjacentElement('beforeend', li);
  let h2 = document.createElement('h2');
  li.insertAdjacentElement('beforeend', h2);
  h2.textContent = "検索結果" + (i + 1) + "件目";
  let h3 = document.createElement('h3');
  d.insertAdjacentElement('beforeend', h3);
  h3.textContent = "店舗名：" + data.results.shop[i].name;
  let p1 = document.createElement('p');
  d.insertAdjacentElement('beforeend', p1);
  p1.textContent = "住所：" + data.results.shop[i].address;
  let p2 = document.createElement('p');
  d.insertAdjacentElement('beforeend', p2);
  p2.textContent = "予算：" + data.results.shop[i].budget.name;
  let p3 = document.createElement('p');
  d.insertAdjacentElement('beforeend', p3);
  p3.textContent = "営業時間：" + data.results.shop[i].open;
  let p4 = document.createElement('p');
  d.insertAdjacentElement('beforeend', p4);
  p4.textContent = "最寄駅：" + data.results.shop[i].station_name;
}


}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector('#sendRequest');
b.addEventListener('click', sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let genre = document.querySelector('#key').value;

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json';
    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);      

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
   let data = resp.data;
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること