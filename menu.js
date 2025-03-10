// $(function () {
// 	var op = $("header");
// 	$(".toggle").click(function () {
// 		console.log("OK");
// 		op.toggleClass("open");
// 	});
// 	$(".nav a").click(function () {
// 		console.log("OK");
// 		op.toggleClass("open");
// 	});
// });


document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.getElementById("menu-toggle");
	const html = document.documentElement;
	const navLinks = document.querySelectorAll(".nav-link");

	// ハンバーガーボタンのクリックでメニューを開閉
	menuToggle.addEventListener("click", function () {
		html.classList.toggle("open");
		this.classList.toggle("is-active");
	});

	// ページ内リンクをクリックしたらメニューを閉じる
	navLinks.forEach(link => {
		link.addEventListener("click", function () {
			html.classList.remove("open");
			menuToggle.classList.remove("is-active");
		});
	});
});

