// 課題4-1: 数当てゲーム

// 乱数を使って正解を作る
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let end = 0;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
kaisu = kaisu +1;
document.querySelector('span#kaisu').textContent = kaisu;
  // ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新

  // ここから: テキストボックスに指定された数値を yoso に代入する
  let yoso = document.querySelector('input#yosou').value;
  // ここまで: テキストボックスに指定された数値を yoso に代入する
  
  // ここから: 正解判定する
  if(kaisu > 3 || end == 99){
    document.querySelector('p#result').textContent = '答えは'+ kotae +'でした.すでにゲームは終わっています';

  }else if(yoso == kotae){
    document.querySelector('p#result').textContent = '正解です.おめでとう!';
    end = 99;

  }else if(kaisu == 3){
    document.querySelector('p#result').textContent = 'まちがい. 残念でした答えは' + kotae + 'です';

  }else if(yoso < kotae){
    document.querySelector('p#result').textContent = 'まちがい. 答えはもっと大きいですよ';

  }else if(yoso > kotae){
    document.querySelector('p#result').textContent = 'まちがい. 答えはもっと小さいですよ';
  }
  // 　　　　  正解/不正解のときのメッセージを表示する
  // ここまで: 正解判定する
}

// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let b = document.querySelector('button#answer');
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録
b.addEventListener('click', hantei);