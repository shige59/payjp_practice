const pay = () => {
  const payjp = Payjp('pk_test_1b3f71e4b9b967fcd850c77e')// PAY.JPテスト公開鍵
  const form = document.getElementById('charge-form')
  form.addEventListener("submit", (e) => {
    console.log("フォーム送信時にイベント発火")
    e.preventDefault();
  });
};

window.addEventListener("turbo:load", pay);