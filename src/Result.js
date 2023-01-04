// import logo from './images/omikuji.png';
import './Result.css';
import { React } from "react";
// import { Link } from 'react-router-dom';

const resultMap = [
    {"大吉":{"title":"カンナ 大吉",
        "description":"万事、長い目で見ればおおよそ上手くいくでしょう。あなたを信じる、あなたの仲間達を信じて突き進みましょう",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=320x1024:format=jpg/path/se095f67148f22699/image/i56b8836b47ee522d/version/1668526927/image.jpg"}},
    {"中吉":{"title":"イグサ 中吉",
        "description":"時に上手くいかないこともありますが、仲間想いのあなたの努力は決して無駄にはなりません。最後まであきらめずにがんばりましょう。",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=308x1024:format=jpg/path/se095f67148f22699/image/ifb69ce0f4475be7f/version/1669618323/image.jpg"}},
    {"中吉":{"title":"イマリ 中吉",
        "description":"人一倍人情熱いあなたの想いはきっと誰かを守る力となるでしょう。ただ、時には近くのものをよく見てみることも大事ですよ。何かに気付くことがあるかもしれません",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=320x1024:format=jpg/path/se095f67148f22699/image/i86f622b9e3cbc63c/version/1668581563/image.jpg"}},
    {"吉":{"title":"ユヅ 吉",
        "description":"健気で時に頑固なあなたの意思や振る舞いは、誰かを惹きつけたり勇気づけたりすることでしょう。",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=320x1024:format=jpg/path/se095f67148f22699/image/ic9ef7aa04f85824a/version/1668512189/image.jpg"}},
    {"吉":{"title":"バァバ 吉",
        "description":"あなたの聖母の如き慈悲深い心は誰かの拠り所や帰る場所となることでしょう。しかし周りをよく見ることも忘れずに。",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=310x1024:format=jpg/path/se095f67148f22699/image/i47fc73d2a955d9c1/version/1668845563/image.jpg"}},
    {"小吉":{"title":"ウツギ 小吉",
        "description":"お調子者のあなたはだいたいのことを難なく乗り越えてしまうでしょう。しかし調子に乗りすぎるといつしか不幸が訪れてしまうかもしれないのでほどほどに。",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=320x1024:format=jpg/path/se095f67148f22699/image/i85f1886ea6a38aac/version/1668677986/image.jpg"}},
    // {"小吉":{"title":"アリウム 小吉", "description":"", "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=310x1024:format=jpg/path/se095f67148f22699/image/i1b8d4e9a6e0cd5cf/version/1668678448/image.jpg"}},
    {"小吉":{"title":"アオイ 小吉",
        "description":"清く気高いその精神で、己の信念を貫くことで道は開けるでしょう。しかし時には方の力を抜くことも必要です。",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=310x1024:format=jpg/path/se095f67148f22699/image/i3e38624541eb84d6/version/1668678214/image.jpg"}},
    {"末吉":{"title":"アヤメ 末吉",
        "description":"己が使命を全うしようとするその力強い意志はきっと何かを成し遂げるでしょう。ただあとほんの少しだけ注意力が必要かもしれません。",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=310x1024:format=jpg/path/se095f67148f22699/image/i8b431de3baf3e24f/version/1668845293/image.jpg"}},
    {"凶":{"title":"キョウ 凶",
        "description":"悪事がバレて、自分はおろか大切な人まで危険に晒してしまうかもしれません。悪いこともほどほどにしておきましょう。",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=320x1024:format=jpg/path/se095f67148f22699/image/ibd49751ea6d326ec/version/1668512503/image.jpg"}},
    {"大凶":{"title":"リンドウ 大凶",
        "description":"信じていたものに裏切られ、自害するほどの悲しみと絶望に陥ってしまうかもしれません。もし復讐など企てているのであればやめたほうがいいかもしれません。",
        "img":"https://image.jimcdn.com/app/cms/image/transf/dimension=310x1024:format=jpg/path/se095f67148f22699/image/ic823a4566a1e689e/version/1668845233/image.jpg"}},
    // {"":{"title":"", "description":"", "img":""}},
    ]

function Result() {
    var index = Math.floor(Math.random() * resultMap.length);
    var resultData = resultMap[index]
    console.log("resultData: ", resultData)
    console.log("type: ", typeof(resultData))
    console.log("values: ", Object.values(resultData))
    var result = Object.values(resultData)[0]
  return (
    <div className="Result">
        <header className="Result-header">
            <img src={result.img}
            className="Result-logo"
            alt="omikuji" />
            <div className="ref">画像引用元: https://www.react-apc.com/</div>
            <h2>おみくじ結果：{result.title}</h2>
            {result.description}
        </header>
    </div>
  );
}

export default Result;
