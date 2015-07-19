$(function () {
	var 火 = new Firebase("https://hacker-news.firebaseio.com/");
	var ໆ = "http://news.ycombinator.com/";
	$("#誤").hide();
	$("form").submit(function () {
		火.child("v0/user/" + $("#username").val()).on("value", function(結果) { 
			var 人 = 結果.val();
			if (人 && 人.created) {
				var 時 = new Date(人.created * 1e3);
				var YYYYMMDDhhmmss = 時.toISOString().slice(0,19).replace(/[-T:]/g,"");
				var ꜛ = "https://web.archive.org/web/".concat(YYYYMMDDhhmmss, "/", ໆ);
				$('body').fadeOut();
				location = ꜛ;
			} else {
				$("#誤").show();
			}
		});
		return false;
	});
});