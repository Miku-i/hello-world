var banner = document.getElementById('banner');
		var img = banner.getElementsByClassName('bannerimg');
		var left = banner.getElementsByClassName('left')[0];
		var right = banner.getElementsByClassName('right')[0];
		var li = banner.getElementsByClassName('round')[0].getElementsByTagName('li');


		var num = 0;

		run();
		timer = setInterval(run, 2000);


		function run() {

			if (num >= img.length) {
				num = 0;
			}

			showImg(num);
			num++;
		}

		function showImg(n) {

			for (var i = 0; i < img.length; i++) {
				img[i].style.opacity = 0;
				li[i].style.background = '';
			}

			img[n].style.opacity = 1;
			li[n].style.background = 'white';
		}


		for (var i = 0; i < li.length; i++) {
			(function(m) {
				li[m].onmousemove = function() {
					clearInterval(timer);
					showImg(m);
					num = m;
					timer = setInterval(run, 2000);
				}
			})(i);
		}

		right.onclick = function() {
			clearInterval(timer);

			num = num >= img.length ? 0 : num;

			showImg(num);
			run();
			timer = setInterval(run, 2000);
		}

		left.onclick = function() {
			clearInterval(timer);

			if (num == 1) {
				num = img.length - 1;
			} else {
				num -= 2;
			}

			showImg(num);
			run();
			timer = setInterval(run, 2000);
		}
