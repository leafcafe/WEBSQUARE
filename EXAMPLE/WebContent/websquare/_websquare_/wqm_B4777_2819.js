(self.webpackChunkwebpack_test = self.webpackChunkwebpack_test || []).push([[2819], {
	2819: (t, e, i) => {
		"use strict"; i.r(e), i.d(e, { anchor: () => h }); var o = i(2981), n = i(2085), s = i(1960), r = i(3082), a = i(6615), h = function(t, e, i) { a.s.call(this, t, e, i) }; o.x.extend(h.prototype, a.s.prototype), h.prototype.defaultOptions = { useConfig: !0, pluginType: "uiplugin.anchor", pluginName: "anchor", userEvents: ["onclick", "ontooltipshow", "ontooltiphide"], outerDiv: !0, clickEventElement: "anchor", label: "", href: "", name: "", target: "", title: "", tabIndex: "", useLocale: !1, localeRef: "", disabled: !1, escape: !0, enableReadOnly: !1 }, h.prototype.htmlStr1 = ["<div id='", , "' ", , " class='w2anchor ", , "'><a href='", , "' ", , ">", , "</a></div>"], h.prototype.htmlStr2 = ["<a id='", , "' ", , " class='w2anchor2 ", , "' href='", , "' ", , ">", , "</a>"], h.prototype.initialize = function(t) { try { if (t) { var e = WebSquare.WebSquareparser.parseLabel(t); e && (this.options.label = e.value) } } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.toHTML = function() { try { var t = this.options.outerDiv ? this.htmlStr1 : this.htmlStr2; t[1] = this.id, t[3] = this.options.style ? 'style="' + this.options.style + '"' : "", t[5] = this.options.className; var e = this.options.href ? this.options.href : "javascript:void(null);"; e.indexOf("javascript:") >= 0 && (e = e.replace(/'/g, '"')), t[7] = e, t[9] = (this.options.name ? ' name="' + this.options.name + '"' : "") + (this.options.target ? ' target="' + this.options.target + '"' : "") + (this.options.title ? ' title="' + this.options.title + '"' : "") + ("" == this.options.tabIndex ? "" : ' tabIndex="' + this.options.tabIndex + '"') + (this.options.role ? ' role="' + this.options.role + '"' : ""); var i = this.options.label; if (this.options.useLocale && this.options.localeRef) { var o = this.getLocaleValue(this.options.localeRef); o && (i = o) } return i = this.options.escape ? WebSquare.xml._encode(i) : i, t[11] = i, t.join("") } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.setAction = function() { try { if (this.options.nextTabID && this.setNextTabID(this.options.nextTabID, this.scope_id), this.dom.anchor = "A" == this.render.tagName ? this.render : this.render.firstChild, this.setVerticalAlign(), this.modelControl.isBinded()) { var t = this.modelControl.getData(); this.setValueNM(t) } this.options.outerDiv && "outerDiv" === this.options.clickEventElement ? this.event.addListener(this.render, "onclick", this.event.bindAsEventListener(this, this.handleClickEvent)) : this.event.addListener(this.dom.anchor, "onclick", this.event.bindAsEventListener(this, this.handleClickEvent)), this.event.addListener(this.dom.anchor, "onkeydown", this.event.bindAsEventListener(this, this.handleKeydownEvent)) } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.refresh = function() { try { if (this.modelControl.isBinded()) { var t = this.modelControl.getData(); this.setValueNM(t) } } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.setVerticalAlign = function() { try { var t = "top", e = this.options.style.toLowerCase(); if (e.match(/vertical-align[\s]*:[\s]*middle/) ? t = "middle" : e.match(/vertical-align[\s]*:[\s]*bottom/) && (t = "bottom"), "top" == t); else { var i = this.getStyleValue("height"); if (i.indexOf("px") > -1) { i = parseInt(i); var o = parseInt(this.getStyleValue("padding-top")) || 0, s = parseInt(this.getStyleValue("font-size")) || 0, r = 0; "middle" == t ? r = Math.floor((i - s) / 2) : "bottom" == t && (r = Math.floor(i - s)), r + o > 0 && i - r > 0 && (this.setStyle("paddingTop", r + o + "px"), this.setStyle("height", i - r + "px")) } } } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.setValue = function(t) { try { this.setValueNM(t), this.modelControl.setData(t) } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.setValueNM = function(t) { try { if (r.D.isNull(t)) return; t = t.toString(), this.options.label = t, this.options.escape && (t = WebSquare.xml._encode(t)), this.dom.anchor && (this.dom.anchor.innerHTML = t) } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.getValue = function() { try { return this.options.label } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.handleClickEvent = function(t) {
			try {
				var e = s.B.getTarget(t); if (e && this.options.outerDiv && e === this.render) return void this.dom.anchor.click(); "" == this.options.href.wq_trim() && s.B.stopEvent(t),
					s.B.fireEvent(this, "onclick")
			} catch (t) { n.w.printStackTrace(t, null, this) }
		}, h.prototype.handleKeydownEvent = function(t) { try { var e; if (9 == (t.charCode ? t.charCode : t.keyCode)) if (t.shiftKey) { if (null != WebSquare.tabOrder[this.id] && null != WebSquare.tabOrder[this.id].preTabID) if (s.B.preventDefault(t), e = r.D.getPreTabbableComp(this.id)) return void e.focus() } else if (null != WebSquare.tabOrder[this.id] && null != WebSquare.tabOrder[this.id].nextTabID) if (s.B.preventDefault(t), e = r.D.getNextTabbableComp(this.id)) return void e.focus() } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.setHref = function(t) { try { this.options.href = t, this.dom.anchor.href = t } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.getHref = function() { try { return this.dom.anchor.href } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.setDisabled = function(t) { try { if ("boolean" != typeof t) return !1; this.options.outerDiv && (this.dom.anchor.disabled = t), a.s.prototype.setDisabled.call(this, t), t ? this.addClass(this.render, "w2anchor_disabled") : this.removeClass(this.render, "w2anchor_disabled") } catch (t) { n.w.printStackTrace(t) } return t }, h.prototype.setRef = function(t) { try { this.modelControl.isBinded() || (this.modelControl.useRef = !0), this.options.ref = t, this.modelControl.setRef(t), this.refresh() } catch (t) { n.w.printStackTrace(t) } }, h.prototype.getDataListInfo = function() { try { var t = {}; return this.modelControl.isDataCollectionRefBinded ? (t.ref = this.options.ref, t.id = this.modelControl.dataCollectionRefInfo.dataComp.id, t) : null } catch (t) { n.w.printStackTrace(t) } }, h.prototype.focus = function() { try { this.dom.anchor.focus() } catch (t) { n.w.printStackTrace(t, null, this) } }, h.prototype.unbindRef = function() { try { this.modelControl.isBinded() && (this.options.ref = "", this.modelControl.unbindRef(), this.refresh()) } catch (t) { n.w.printStackTrace(t) } }
	}
}]);