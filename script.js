document.addEventListener('DOMContentLoaded', function() {
  console.log('ページが読み込まれました！');

  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburgerMenu && navMenu) {
    hamburgerMenu.addEventListener('click', () => {
      console.log('ハンバーガーメニューがクリックされました');
      hamburgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  } else {
    console.error('ハンバーガーメニューまたはナビメニューの要素が見つかりません');
  }

  // バリデーションの関数
  function validateEmail() {
      const emailField = document.querySelector('input[name="emailAddress"]');
      const email = emailField.value;
      const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

      if (!emailPattern.test(email)) {
          alert("メールアドレスが無効です。");
          return false;
      }
      return true;
  }

  function validateName() {
      const nameField = document.querySelector('input[name="entry.1000020"]');
      const name = nameField.value;
      const invalidCharsPattern = /[^a-zA-Zぁ-んァ-ヶー一-龠・ー\s]/;
      const onlySpacesPattern = /^\s*$/;

      if (invalidCharsPattern.test(name)) {
          alert("氏名に無効な文字が含まれています。数字や特定の記号は使用できません。");
          return false;
      }

      if (onlySpacesPattern.test(name)) {
          alert("氏名が空白のみです。正しい氏名を入力してください。");
          return false;
      }

      return true;
  }

  function validatePhoneNumber() {
      const phoneField = document.querySelector('input[name="entry.1000022"]');
      const phone = phoneField.value;
      const phonePattern = /^\d{11}$/;
      const repeatingNumbersPattern = /^(\d)\1\1/;

      if (!phonePattern.test(phone)) {
          alert("電話番号は11桁の数字で入力してください。");
          return false;
      }

      if (repeatingNumbersPattern.test(phone)) {
          alert("電話番号が無効です。");
          return false;
      }

      return true;
  }

  // フォームの送信時にバリデーションを実行
  document.querySelector('form').addEventListener('submit', function(event) {
      if (!validateEmail() || !validateName() || !validatePhoneNumber()) {
          event.preventDefault(); // フォームの送信をキャンセル
      }
  });
});
