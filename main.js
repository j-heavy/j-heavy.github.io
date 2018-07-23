(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter48699458 = new Ya.Metrika({ id:48699458, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");

(function () {
	var el = document.getElementById('disqus_thread');

	window.addEventListener('scroll', checkPosition);
	window.addEventListener('load', checkPosition);

	function checkPosition () {
    	var rect = el.getBoundingClientRect()
    	if (rect.top < window.innerHeight) {
        	window.removeEventListener('scroll', checkPosition);
        	window.removeEventListener('load', checkPosition);
        	loadDisqus();
   		}
	};

	function loadDisqus (){
		var disqus_config = function () {
			this.page.url = document.location.href;  
			this.page.identifier = "{{ page.id }}"; 
		};
		var d = document, s = d.createElement('script');
		s.src = 'https://heavy-blog.disqus.com/embed.js';
		s.setAttribute('data-timestamp', +new Date());
		(d.head || d.body).appendChild(s);
	};
})();