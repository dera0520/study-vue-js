var app = new Vue({
  /**
   * マウントする要素
   */
  el: "#app",

  /**
   * アプリケーションで使用するデータ。オブジェクトや配列も登録可能
   */
  data: {
    message: "はろー Vue.js !!",
    list: ["岩手", "秋田", "青森"],
    show: true
  },

  /**
   * 算出プロパティ
   * dataと似たように扱うことのできる、関数によって算出されたデータ。
   */
  computed: {
    computedMessage: function() {
      return this.message + "おなかすいたー";
    }
  },

  /**
   * 定義済みのイベント
   * beforeCreate : インスタンスが作成され、リアクティブの初期化がされる前
   * created : インスタンスの作成＆初期化後
   * beforeMount : インスタンスがマウントされる前
   * mounted : インスタンスがマウントされた後
   * beforeUpdte : データが変更され、DOMに適用される前
   * updated : データが変更され、DOMに適用された後
   * beforeDestroy : Vueインスタンスが破棄される前
   * destroited : Vueインスタンスが破棄された後
   * errorCaptured : 任意の子孫コンポーネントからエラーが補足された時
   */
  created: function() {
    console.log("created call!!");
  },

  /**
   * 自分で定義した関数
   */
  methods: {
    handleClick: function(event) {
      alert(event.target);
    }
  }
});

app.list.push("宮城");
console.log(app.list);
console.log(app.computedMessage);

