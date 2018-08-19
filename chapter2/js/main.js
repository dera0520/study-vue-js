var state = {count: 0}
var app = new Vue({
  el: "#app",
  data: {
    state: state,

    message1: "Vue.js!!", // messageは変化を検知できるようになる。

    // 初期データの例-st
    // なるべく後から代入されるデータと同じ型で定義しておく
    newTodoText: "",
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null,
    // 初期データの例-ed

    // オブジェクトデータ
    message2: {
      value: "はろはろー"
    },
    // 配列
    list: ["🍎", "🍌", "🍓"],
    num: 1,
    scroll: 0,
  },
  mounted: function () {
    this.scroll = 100; //要素のスクロール量を操作
  }
});
state.count++; // state.countはリアクティブデータになっている。

var app2 = new Vue({
  el: "#app2",
  data: {
    count: 0,
    isChild: true,
    isActive: false,
    textColor: 'red',
    bgColor: 'lightgray'
  },
  methods: {
    increment: function () {
      this.count += 1;

      // コールバック関数のなかだと this が別のものになってしまうので注意
      console.log(this);
      setTimeout(function () {
        console.log(this)
      });

    }
  }
});

var app3 = new Vue({
  el: "#app3",
  data: {
    classObject: {
      child: true,
      'is-active' : false
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    item: {
      id: 1,
      src: 'image/test.png',
      alt: 'アイテム1',
      width: 200,
      height:200
    }
  }
});

// SVGのデータバインド
var app4 = new Vue({
  el: "#app4",
  data: {
    radius: 50
  }
});


// テンプレートによる条件分岐
var app5 = new Vue({
  el: "#app5",
  data: {
    loaded: false,
    ok: false,
    name: 'ドルムキマイラ',
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラえもん', hp: 1010 },
    ],
    text: 'わーるどかっぷ',
  },
  created: function () {

    // 外部からのデータ読み込みの例
    // apiからjson取得
    // axiosを使用した例
    // axios.get('list.json').then(function () {
    //   this.list = response.data;
    // }.bind(this)).catch(function (e) {
    //   console.error(e);
    // });
  },
  methods: {
    // 追加ボタンをクリックしたときのイベントハンドラ
    doAdd: function () {

      // リストの更新の注意
      // 以下２つの場合、更新を検知しない
      // 1.インデックスの数値を使った配列要素の更新
      // 2.後から追加されたプロパティの更新
      // this.list = [];              // これはプロパティの更新
      // this.list[0].name = 'new';   // これはプロパティの更新
      // this.list[0] = 'new';        // これは配列要素の更新なのでNG!!

      // リストの追加
      let max = this.list.reduce(function (a, b) {
        return a > b.id ? a : b.id
      }, 0);
      this.list.push({
        id: max + 1,
        name: this.name,
        hp: 1987
      });
    },
    doRemove: function (index) {
      // 受け取ったインデックスの位置から1個の要素を削除
      // push,pup,shift,unshift,splice,sort,reverseなどが可能
      // これらの配列メソッドは対象の配列を直接変更します。
      this.list.splice(index, 1);
    },
    doChange: function (index) {
      // こんな書き方はできない
      // this.list[0] = { id: 1, name: 'キングスライム', hp: 500 };

      // グローバルAPIを使って更新する
      this.$set(this.list, 0, {id: 1, name: 'キングスライム', hp: 500});
    },
    // doAddProperty: function () {
    //   this.list.forEach(function (item) {
    //     this.$set(item, 'active', false);
    //   }, this);
    // },
    doAttack: function (index) {
      this.list[index].hp -= 10;
    }
  }
});


/**
 * 実DOMへのアクセス
 */
var app6 = new Vue({
  el: "#app6",
  mounted: function () {
    // $elや$refsは仮想DOMでは無いため描画処理の最適化をしません。
    // 操作するたびに描画をするため、DOMの更新に使用するには向いていない事に注意。
    // また、更新を行ってもデータに変更があった場合に上書きされる事がある。
    console.log("+++++++++++++");
    console.log(this.$el);
    console.log('-------------');
    console.log(this.$refs.hello);
  }
});

var app7 = new Vue({
  el: "#app7",
  data: {
    url: "https://google.com",
    message: "いえーい",
    strongMessage: "<strong>いえーい<strong>"
  }
});
