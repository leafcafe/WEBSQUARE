var Html = Class.create({

	initialize: function() {
		this.contents = $("contents");
		this.iframe = $("content").down();
		this.contents.on("click", "li", this.click.bind(this));
		this.load();
		this.windowResized();
		window.onresize = this.windowResized.bind(this);

		this.hash = window.location.hash;
		new PeriodicalExecuter(function(pe) {
			var h = window.location.hash;
			if (h && this.hash !== h) {
				this.load();
				this.hash = h;
			}
		}.bind(this), 0.5);
	},

	load: function() {
		var a;
		var hash = window.location.hash;
		if (hash) {
			hash = hash.substring(1);
			a = this.contents.select("a").find(function(each) {
				return each.getAttribute("href").endsWith(hash);
			});
			if (a) {
				this.iframe.src = hash;
				var li = a.up("li");
				this.select(li);
				while (li) {
					if (li.hasClassName("closed")) {
						li.removeClassName("closed");
						li.addClassName("opened");
					}
					li = li.up("li");
				}
				return;
			}
		}
		a = this.contents.down("a");
		this.iframe.src = this.getHref(a);
		this.select(a.up("li"));
	},

	windowResized: function() {
		this.contents.setStyle({
			height: document.viewport.getHeight() + "px"
		});
	},

	click: function(event) {
		var a = event.findElement("a");
		if (a) {
			this.select(a.up("li"));
			var href = this.getHref(a);
			window.location.hash = href;
		} else {
			var li = event.findElement("li");
			if (li.hasClassName("closed")) {
				li.removeClassName("closed");
				li.addClassName("opened");
			} else if (li.hasClassName("opened")) {
				li.removeClassName("opened");
				li.addClassName("closed");
			}
		}
		event.stop();
	},

	select: function(item) {
		if (this.selected) {
			this.selected.removeClassName("selected");
		}
		item.addClassName("selected");
		this.selected = item;
	},

	getHref: function(a) {
		var result = a.getAttribute("href");
		var i = result.indexOf("/");
		return i === -1 ? result : result.substring(i + 1);
	}

});

document.observe("dom:loaded", function(event) {
	new Html();
});