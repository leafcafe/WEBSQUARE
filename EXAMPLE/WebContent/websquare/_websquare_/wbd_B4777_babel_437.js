(self.webpackChunkwebpack_test = self.webpackChunkwebpack_test || []).push([[437], {
	4437: function(e, t, i) {
		"use strict"; i.r(t), i.d(t, { pageInherit: function() { return g } }); var r = i(484), n = i(2137), a = i(7757), o = i.n(a), s = i(9122), p = i(7827), c = i(1160), u = i(5841), l = i(8754), h = i(7870), g = function(e, t, i) { h.s.call(this, e, t, i) }; s.x.extend(g.prototype, h.s.prototype), g.prototype.defaultOptions = { pluginType: "uiplugin.pageInherit", pluginName: "pageInherit", userEvents: ["onpageInheritload"], useConfig: !0, src: "", tagname: "div", mode: "async", scope: !1, initScript: "", postScript: "", scopeVariable: "", cloneVariable: "", scopeFunction: "$w", scopeExternal: !1, scopeValue: "", isWidget: !1, params: "", popupParam: "", initStyle: !1, preload: !1, strictFrame: !1 }, g.prototype.initialize = function(e) { this.createFlag = !1, (e && "w2:pageInherit" === e.getTagName() || !0 === this.options.preload) && (this.createFlag = !0), this.frameDoc = null, this.pageInheritScript = [], this.lazyImportsArr = [], this.childAllControlList = [], this.userComponentList = [], this.userPluginList = [], this.scope = {}, this.scopeLazyList = [], this.scopeVariable = {}, "true" === this.options.initScript && "true" === p.v.getConfiguration("/WebSquare/pageInherit/initScript/@value") && (this.options.initScript = p.v.getConfiguration("/WebSquare/pageInherit/initScript")), "true" === this.options.postScript && "true" === p.v.getConfiguration("/WebSquare/pageInherit/postScript/@value") && (this.options.postScript = p.v.getConfiguration("/WebSquare/pageInherit/postScript")), this.options.scope && ("" == this.options.scopeVariable && (this.options.scopeVariable = p.v.getConfiguration("/WebSquare/spa/variable/@value") || ""), "" == this.options.cloneVariable && (this.options.cloneVariable = p.v.getConfiguration("/WebSquare/spa/variable/@clone") || ""), this.options.initScript && (this.options.initScript = l.D.scopingFuncBody(this.options.initScript, this.id, !0)), this.options.postScript && (this.options.postScript = l.D.scopingFuncBody(this.options.postScript, this.id, !0))), this.makeScopeVariable(), this.options.params && this.parseParameter(), this._ispageInheritPopup = !1, this._scriptLazy = !1, this._clearExecuteStatus() }, g.prototype.toHTML = function() { try { var e = [], t = this.options.tagname, i = "" == this.options.style ? "" : "style='" + this.options.style + "'", r = "" == this.options.tabIndex ? "" : "tabIndex='" + this.options.tabIndex + "'"; if (p.v.browserCheck.ie) { var n = p.v.browserVersion(); "6" != n && "7" != n && "8" != n || WebSquare.uiplugin.pageInherit.html5[t] && (t = WebSquare.uiplugin.pageInherit.html5[t]) } if (e.push("<" + t + " id='" + this.id + "' " + i + " class='w2pageInherit " + this.options.className + "' " + r + ">"), this.createFlag) for (var a = this.getChildren(), o = 0; o < a.length; o++)e.push(a[o].toHTML()); return e.push("</" + t + ">"), e.join("") } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.setChildAction = function(e) {
			try {
				var t = this.childControlList[0]; if (!t) return; t.preActivate(); var i = []; for (var r in WebSquare.DataCollection.activated = !0, WebSquare.DataCollection.comp) { var n = WebSquare.DataCollection.comp[r]; n && n.parentFrame === this.uuid && (n.activate(), i.push(n.uuid)) } WebSquare.uiplugin.pageInherit._increasePendingpageInheritCount(), WebSquare.uiplugin.pageInherit._addpageInheritPreorder(this.uuid), t.activate(), WebSquare.uiplugin.pageInherit._decreasePendingpageInheritCount(), WebSquare.uiplugin.pageInherit._addpageInheritPostorder(this.uuid), t.render = null, t.onComplete(); for (var a = 0; a < i.length; a++)WebSquare.idCache[i[a]].completed || WebSquare.idCache[i[a]].onComplete(); var o = this.getSrc(); if ("executed" === WebSquare.scriptSectionExcuteFlag) !0 === p.v.scriptPrecedence ? (WebSquare.uiplugin.pageInherit._execute("script"), WebSquare.uiplugin.pageInherit._execute("onpageload"), WebSquare.uiplugin.pageInherit._execute("postscript", { order: "postorder" })) : (WebSquare.uiplugin.pageInherit._execute("script", { order: "postorder", reverse: !0 }), WebSquare.uiplugin.pageInherit._execute("onpageload", { order: "postorder" })), WebSquare.uiplugin.pageInherit._execute("lazyscript"),
					WebSquare.uiplugin.pageInherit._isPending() || WebSquare.uiplugin.pageInherit._clearPending(); else if (!0 !== p.v.scriptPrecedence) for (a = 0; a < this.childControlList.length; a++)u.B.fireEvent(this.childControlList[a], "onpageload", o); u.B.fireEvent(this, "onpageInheritload", o)
			} catch (e) { c.w.printStackTrace(e, null, this) }
		}, g.prototype.setAction = function() { try { if (this.options.initStyle) { var e = document.getElementById(this.id).style.cssText, t = document.getElementById(this.id).getAttribute("class"); WebSquare.initStyle[this.id] = { style: e, className: t } } if (this.options.isWidget) return; this.createFlag ? this.setChildAction() : this.setSrc(this.options.src) } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.makeFrame = function() { var e = (0, n.Z)(o().mark((function e(t) { var i, r, n; return o().wrap((function(e) { for (; ;)switch (e.prev = e.next) { case 0: if (e.prev = 1, !(r = this.getSrc())) { e.next = 7; break } return e.next = 6, WebSquare.jsLoader._loadObj(this.getURL(r), null); case 6: i = e.sent; case 7: if (!i) { e.next = 18; break } return r && (n = WebSquare.jsLoader.getPageType(r)), this.frameDoc = WebSquare.jsLoader.getPageInfo(i, n), this.frameDoc.renderStartTime = new Date, e.next = 13, this.frameDoc.parsingPageInheritBefore(!0, this); case 13: return this.appendModels(this.frameDoc.models, null, { appendModel: !this.options.scope || "scope" }), this.renderBody(t), this.appendSubmission(this.frameDoc.models), e.next = 18, this.frameDoc.parsingPageInheritAfter(!0, this); case 18: e.next = 23; break; case 20: e.prev = 20, e.t0 = e.catch(1), c.w.printStackTrace(e.t0, null, this); case 23: case "end": return e.stop() } }), e, this, [[1, 20]]) }))); return function(t) { return e.apply(this, arguments) } }(), g.prototype.initAsync = (0, n.Z)(o().mark((function e() { return o().wrap((function(e) { for (; ;)switch (e.prev = e.next) { case 0: return e.next = 2, this.makeFrame(); case 2: return e.abrupt("return", e.sent); case 3: case "end": return e.stop() } }), e, this) }))), g.prototype.appendModels = function(e, t, i) { try { if ("replace" == (i = i || {}).appendModel) return void this.replaceModels(e); if ("scope" == i.appendModel) return void this.scopeModels(e, t, i); var r = WebSquare.ModelUtil.getModelByID(t); if (r) for (var n = 0; n < e.length; n++) { if (i.appendModel) for (var a = r.instances[0].document, o = e[n].instances[0].document.childNodes, s = 0; s < o.length; s++)a.appendChild(o[s].cloneNode(!0)); r.binds = r.binds.concat(e[n].binds) } } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.appendSubmission = function(e) { try { if (WebSquare.ModelUtil.getModelByID()) for (var t = 0; t < e.length; t++) { for (WebSquare.pageInheritSubmissionList.length <= t && WebSquare.pageInheritSubmissionList.push(new Array); e[t].submissions.length > 0;)WebSquare.pageInheritSubmissionList[t].push(e[t].submissions.pop()); for (; e[t].workflows.length > 0;)WebSquare.pageInheritworkflowsList[t].push(e[t].workflows.pop()) } } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.replaceModels = function(e) { try { WebSquare.WebSquaredoc.models.splice(0, WebSquare.WebSquaredoc.models.length), WebSquare.WebSquaredoc.models = WebSquare.WebSquaredoc.models.concat(e) } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.scopeModels = function(e, t, i) { try { var r = WebSquare.ModelUtil.getModelByID(t); if (r && "scope" == i.appendModel) for (var n = 0; n < e.length; n++) { for (var a = r.instances[0].xmlNode.parentNode, o = e[n].instances, s = 0, p = o.length; s < p; s++) { for (var u = o[s].xmlNode.cloneNode(!0), l = u.firstChild; null != l && 1 != l.nodeType; l = l.nextSibling); var h = new WebSquare.Model.Instance(u, l, null); h.scope_id = this.id; var g = h.xmlNode; g.setAttribute("scopeId", this.id), r.instances.push(h), a.appendChild(g) } r.binds = r.binds.concat(e[n].binds) } } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.onComplete = function() { try { if (null != this.frame_dc_list) { for (var e = 0; e < this.frame_dc_list.length; e++)WebSquare.idCache[this.frame_dc_list[e]].completed || WebSquare.idCache[this.frame_dc_list[e]].onComplete(); delete this.frame_dc_list } h.s.prototype.onComplete.call(this) } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.renderBody = function(e) {
			var t, i, r, n = [], a = this.frameDoc.getType()
			; return "json" === a ? (n = WebSquare.jsonUtil.getNodesByTagName(this.frameDoc.getPageInfo(), "body"), t = WebSquare.jsonUtil.getAttribute(n[0], "class")) : t = (n = WebSquare.xml.getElementsByTagName(this.frameDoc.getPageInfo(), "body", p.v._XML_NAMESPACE.XHTML))[0].getAttribute("class"), t && this.addClass(t), WebSquare.cssManager.startCache(), this.options.scope ? r = this : WebSquare.strictModeFrame && (r = WebSquare.strictModeFrame), i = "json" === a ? WebSquare.controlFactory.createByJSON(null, null, n[0], r, this.uuid) : WebSquare.controlFactory.create(null, null, n[0], r, this.uuid), WebSquare.cssManager.endCache(), this.childControlList.push(i), this.render && (i.domStatus = "new"), i && (i.parentControl = this, i.options && i.options.firstTabID && !this.options.firstTabID && (this.options.firstTabID = i.options.firstTabID)), this.options.scope && (this.makeScope(this), this.makeLazyScopeVariable()), i && e && this._lazyActivation(), !!i
		}, g.prototype.lazyActivation = function() { try { if (!this.render) return; var e = this.childControlList[0]; this.render.innerHTML = e.toHTML(), "sync" === this.options.mode ? this.setChildAction({ preExecuted: !0 }) : l.D.setTimeout(this.setChildAction, { key: this.id + "_setChildAction", caller: this, delay: 1, args: [{ preExecuted: !0 }] }) } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype._lazyActivation = function() { try { if (p.v.executePointScript(4), WebSquare.externalScriptArr.length > 0) if ("sync" !== this.options.mode) { var e = this.uuid; WebSquare.externalScriptArr.push((function() { try { WebSquare.idCache[e].lazyActivation() } catch (e) { c.w.printStackTrace(e) } })), l.D.js.apply(null, WebSquare.externalScriptArr) } else { for (var t = 0; t < WebSquare.externalScriptArr.length; t++)WebSquare.BootLoader.globalEval(p.v.load(WebSquare.externalScriptArr[t])); this.lazyActivation() } else this.lazyActivation(); WebSquare.externalScriptArr = [] } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype._clearExecuteStatus = function() { try { this._executeStatus = { script: !1, onpageload: !1, postscript: !1, lazyscript: !1, onpageInheritload: !1 } } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.getSrc = function() { try { return this._getMsaSrc() } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype._getMsaSrc = function(e) { try { var t = this.options.src; return "" == t ? "" : p.v.getPageURL(t, { skipURL: !0, skipUri: !0, msaName: e || this._getMsaName() }) } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype._getMsaName = function() { try { if (this.options.msaName) return this.options.msaName; if (this.scope_obj) return this.scope_obj._getMsaName() } catch (e) { c.w.printStackTrace(e, null, this) } }, g._increasePendingpageInheritCount = function() { try { WebSquare.uiplugin.pageInherit.__pendingpageInheritCount < 0 && (WebSquare.uiplugin.pageInherit.__pendingpageInheritCount = 0), WebSquare.uiplugin.pageInherit.__pendingpageInheritCount++ } catch (e) { c.w.printStackTrace(e, null, this) } }, g._decreasePendingpageInheritCount = function() { try { WebSquare.uiplugin.pageInherit.__pendingpageInheritCount--, WebSquare.uiplugin.pageInherit.__pendingpageInheritCount <= 0 && (WebSquare.uiplugin.pageInherit.__pendingpageInheritCount = 0) } catch (e) { c.w.printStackTrace(e, null, this) } }, g._isPending = function() { return WebSquare.uiplugin.pageInherit.__pendingpageInheritCount > 0 }, g._addpageInheritPreorder = function(e) { try { WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.push(e) } catch (e) { c.w.printStackTrace(e, null, this) } }, g._addpageInheritPostorder = function(e) { try { WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.push(e) } catch (e) { c.w.printStackTrace(e, null, this) } }, g._execute = function(e, t) {
			try {
				if (void 0 !== t && null != t || (t = {}), WebSquare.uiplugin.pageInherit._isPending()) return; var i = "postorder" === t.order ? WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.slice(0) : WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.slice(0); if (i.length <= 0) return; switch (!0 === t.reverse && i.reverse(), e) {
					case "script": for (var r = "", n = 0; n < i.length; n++) {
						!0 !== (s = WebSquare.idCache[i[n]])._executeStatus.script && (s._executeStatus.script = !0,
							s.frameDoc && "string" == typeof s.frameDoc.scriptSection && s.frameDoc.scriptSection && (r += WebSquare.scriptIdentifier + s.getURL(s.getSrc()) + '";', r += s.frameDoc.scriptSection))
					} "executed" === WebSquare.scriptSectionExcuteFlag || !0 === t.preExecuted ? WebSquare.BootLoader.globalEval(r) : WebSquare.scriptSection += r; break; case "onpageload": for (n = 0; n < i.length; n++) { if (!0 !== (s = WebSquare.idCache[i[n]])._executeStatus.onpageload) { s._executeStatus.onpageload = !0; for (var a = 0; a < s.childControlList.length; a++)u.B.fireEvent(s.childControlList[a], "onpageload", s.getSrc()) } } break; case "postscript": for (r = "", n = 0; n < i.length; n++) { !0 !== (s = WebSquare.idCache[i[n]])._executeStatus.postscript && (s._executeStatus.postscript = !0, s.frameDoc && "string" == typeof s.options.postScript && s.options.postScript && (r += WebSquare.scriptIdentifier + s.getURL(s.getSrc()) + '";', r += s.options.postScript)) } WebSquare.BootLoader.globalEval(r); break; case "lazyscript": var o = []; for (n = 0; n < i.length; n++) { !0 !== (s = WebSquare.idCache[i[n]])._executeStatus.lazyscript && (s._executeStatus.lazyscript = !0, s.frameDoc && s.lazyImportsArr && s.lazyImportsArr.length > 0 && (o = o.concat(s.lazyImportsArr), s.lazyImportsArr = [])) } o.length > 0 && "executed" === WebSquare.scriptSectionExcuteFlag && l.D.js.apply(null, o); break; case "onpageInheritload": for (n = 0; n < i.length; n++) { var s; !0 !== (s = WebSquare.idCache[i[n]])._executeStatus.onpageInheritload && (s._executeStatus.onpageInheritload = !0, u.B.fireEvent(s, "onpageInheritload", s.getSrc())) }
				}
			} catch (e) { c.w.printStackTrace(e, null, this) }
		}, g._clearPending = function(e) { try { void 0 !== e && null != e || (e = {}); for (var t = { pendingpageInheritCount: WebSquare.uiplugin.pageInherit.__pendingpageInheritCount, pendingpageInheritPreOrderList: WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.slice(0), pendingpageInheritPostOrderList: WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.slice(0) }; WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.length > 0;) { (i = WebSquare.idCache[WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList.pop()]) && !0 !== e.keepStatus && i._clearExecuteStatus() } for (; WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.length > 0;) { var i; (i = WebSquare.idCache[WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList.pop()]) && !0 !== e.keepStatus && i._clearExecuteStatus() } return WebSquare.uiplugin.pageInherit.__pendingpageInheritCount = 0, t } catch (e) { c.w.printStackTrace(e, null, this) } }, g._setPending = function(e) { try { WebSquare.uiplugin.pageInherit.__pendingpageInheritCount = e.pendingpageInheritCount, WebSquare.uiplugin.pageInherit.__pendingpageInheritPreOrderList = e.pendingpageInheritPreOrderList.slice(0), WebSquare.uiplugin.pageInherit.__pendingpageInheritPostOrderList = e.pendingpageInheritPostOrderList.slice(0) } catch (e) { c.w.printStackTrace(e, null, this) } }, g.appendModel = function(e, t) { try { var i = WebSquare.ModelUtil.getModelByID(); if (i) for (var r = 0; r < e.length; r++)for (var n = e[r]; n.length > 0;) { var a = n.pop(); a.parentElement = i.element, a[t].push(a) } } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.getWindow = function() { try { return this.options.scope ? this.scope : window } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype.makeScopeVariable = function() { try { var e = 0; if (this.options.scope && this.options.scopeVariable) for (var t = this.options.scopeVariable.split(","), i = 0; i < t.length; i++) { var r = t[i].wq_trim(), n = e > 0 ? String(e) : ""; e++, this._makeScopeVariable(r, WebSquare.noConflictFunction + n) } if (this.options.scope && this.options.cloneVariable) for (t = this.options.cloneVariable.split(","), i = 0; i < t.length; i++) { var a = t[i].wq_trim(); n = e > 0 ? String(e) : ""; e++, this._makeScopeVariable(a, WebSquare.noConflictFunction + n, !0) } } catch (e) { c.w.printStackTrace(e, null, this) } }, g.prototype._makeScopeVariable = function(e, t, i) {
			try {
				if (this.scopeVariable[e] = {}, i && "object" === (0, r.Z)(window[e]) && null != window[e]) { ({})[WebSquare.noConflict] = !0, this.scopeVariable[e] = p.v._copyCommon(e, this) } if (this.scope[e] = this.scopeVariable[e], window[this.id + "_" + e] = this.scopeVariable[e], this.options.scopeFunction) {
					this.scopeVariable[e][this.options.scopeFunction] = new WebSquare.uiplugin.pageInherit.scope(this.uuid); var n = this.scopeVariable[e][this.options.scopeFunction]; for (var a in WebSquare.api) "data" !== a && "comp" !== a && null == n[a] && (n[a] = WebSquare.api[a]); for (var o in n.data = new WebSquare.uiplugin.pageInherit.scope.data(this.id), n.model = new WebSquare.uiplugin.pageInherit.scope.model(this.id), n.bigDecimal = new WebSquare.uiplugin.pageInherit.scope.bigDecimal(this.id), n.bigDecimal._scopeId = this.id, n.id = this.id + "_", WebSquare.api.data) null == n.data[o] && "function" == typeof WebSquare.api.data && (n.data[o] = WebSquare.api.data[o]); this.options.scopeFunction !== WebSquare.noConflict && null != window[e] && null == window[e][this.options.scopeFunction] && s.x.extend(window[e][this.options.scopeFunction], WebSquare.api), t && (this.scope[t] = this.scopeVariable[e][this.options.scopeFunction])
				}
			} catch (e) { c.w.printStackTrace(e, null, this) }
		}, g.prototype.makeLazyScopeVariable = function() { try { if (this.options.scope && this.options.scopeVariable) { var e = this.options.scopeVariable; this.options.cloneVariable && (e += "," + this.options.cloneVariable); for (var t = e.split(","), i = 0; i < t.length; i++)for (var r = t[i].wq_trim(), n = i > 0 ? String(i) : "", a = WebSquare.noConflictFunction + n, o = 0; o < this.scopeLazyList.length; o++)WebSquare.idCache[this.scopeLazyList[o]].scope[r] = this.scopeVariable[r], WebSquare.idCache[this.scopeLazyList[o]].scope[a] = this.scopeVariable[r][this.options.scopeFunction] } } catch (e) { c.w.printStackTrace(e, null, this) } }, g.__pendingpageInheritCount = 0, g.__pendingpageInheritPreOrderList = [], g.__pendingpageInheritPostOrderList = []
	}
}]);