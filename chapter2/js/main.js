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
    ok: false
  }
});



