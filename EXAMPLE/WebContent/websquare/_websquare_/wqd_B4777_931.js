(self.webpackChunkwebpack_test = self.webpackChunkwebpack_test || []).push([[931], {
	5931: (t, e, i) => {
		"use strict"; i.r(e), i.d(e, { fwSparkChart: () => h }); var s = i(2981), o = i(1656), a = i(2085), r = i(3082), n = i(7275), l = i(6615), h = function(t, e, i) { l.s.call(this, t, e, i) }; s.x.extend(h.prototype, l.s.prototype), h.prototype.defaultOptions = { pluginType: "uiplugin.fwSparkChart", pluginName: "fwSparkChart", useConfig: !0, accessibility: !1, chartType: "sparkline", seriesType: "simple", version: "3.7" }, h.prototype.initialize = function(t) { this.fcObj = null, this.chartObj = {}, this.attributeObj = null }, h.prototype.initAsync = async function() { "undefined" == typeof FusionCharts && ("3.15" === this.options.version || !this.options.version && "3.15" == o.v.getConfiguration("/WebSquare/fusionchart/version/@value") ? (this.options.version = "3.15", await inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js")) : "3.13" === this.options.version || !this.options.version && "3.13" == o.v.getConfiguration("/WebSquare/fusionchart/version/@value") ? (this.options.version = "3.13", await inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js")) : "3.11" == this.options.version || !this.options.version && "3.11" == o.v.getConfiguration("/WebSquare/fusionchart/version/@value") ? (this.options.version = "3.11", await inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js")) : await inquires("externalJS/FusionCharts3.7/FusionCharts_all.js")) }, h.prototype.toHTML = function() { var t = [], e = "" == this.options.style ? "" : "style='" + this.options.style + "'"; return t.push("<div id='" + this.id + "' " + e + " class='w2fwSparkChart " + this.options.className + "'>"), t.push("</div>"), t.join("") }, h.prototype.setAction = function() { try { if (this.fcObj = new FusionCharts(this.options.chartType, "fw_spark_" + this.id, "100%", this.render.offsetHeight || "100%"), this.setDefaultOption(), this.modelControl.isDataCollectionRefBinded) { var t, e = this.modelControl.dataCollectionRefInfo.dataComp; if ("simple" == this.options.seriesType.toLowerCase()) { if (e.getRowCount() > 0) (t = e.getFusionChartSimpleData(this.options.chartType, this.options.labelNode, this.options.seriesNode, this.options.valueNode)) ? ("3" === FusionCharts.version[0] && "13" === FusionCharts.version[1] && (t = { dataset: [t] }), this.setJSONData(t)) : n.k.printLog(this.id + " : Simple seriesType does not support") } else if (e.getRowCount() > 0) (t = e.getFusionChartData(this.options.chartType, this.options.labelNode, this.options.seriesColumns)) && ("3" === FusionCharts.version[0] && "13" === FusionCharts.version[1] && (t = { dataset: [t] }), this.setJSONData(t)) } } catch (t) { a.w.printStackTrace(t) } }, h.prototype.refresh = function() { try { if (this.modelControl.isDataCollectionRefBinded) { var t, e = this.modelControl.dataCollectionRefInfo.dataComp; if ("simple" == this.options.seriesType.toLowerCase()) (t = e.getFusionChartSimpleData(this.options.chartType, this.options.labelNode, this.options.seriesNode, this.options.valueNode)) ? ("3" === FusionCharts.version[0] && "13" === FusionCharts.version[1] && (t = { dataset: [t] }), this.setJSONData(t)) : n.k.printLog(this.id + " : Simple seriesType does not support"); else (t = e.getFusionChartData(this.options.chartType, this.options.labelNode, this.options.seriesColumns)) && ("3" === FusionCharts.version[0] && "13" === FusionCharts.version[1] && (t = { dataset: [t] }), this.setJSONData(t)) } } catch (t) { a.w.printStackTrace(t) } }, h.prototype.setJSONData = function(t) { try { this.chartObj = t, this.draw() } catch (t) { a.w.printStackTrace(t) } }, h.prototype.getJSONData = function() { try { return this.fcObj.getJSONData() } catch (t) { a.w.printStackTrace(t) } }, h.prototype.fc = function() { try { return FusionCharts.items["fw_spark_" + this.id] } catch (t) { a.w.printStackTrace(t) } }, h.prototype.draw = function() { try { null != this.attributeObj && this._setChartAttribute(this.attributeObj), null != this.attributeObj && (this.chartObj.chart = this.attributeObj); var t = this.fc(); t.setJSONData(this.chartObj), t.isActive() || t.render(this.id), 1 == this.options.accessibility && this.setAccessibility(!0) } catch (t) { a.w.printStackTrace(t) } }, h.prototype.setDefaultOption = function() {
			try {
				var t = {
					showborder: "1", animation: "1", bgcolor: "FFFFFF", canvasbgcolor: "FFFFFF",
					showplotborder: "0", divlinethickness: "1", canvasbordercolor: "FFFFFF", showalternatehgridcolor: "0", showvalues: "0", plotgradientcolor: "", showalternatevgridcolor: "0", divlinecolor: "b3b3b3", bordercolor: "b3b3b3", use3dlighting: "0", showshadow: "0", formatnumberscale: "0", plotFillColor: "#0075c2", highColor: "#1aaf5d", lowColor: "#8e0000", showHoverEffect: "1"
				}; for (var e in t) this.attributeObj && void 0 !== this.attributeObj[e] && (t[e] = this.attributeObj[e]); this.setChartAttribute(t)
			} catch (t) { a.w.printStackTrace(t) }
		}, h.prototype.setChartAttribute = function(t) { try { for (var e in null == this.attributeObj && (this.attributeObj = {}), t) t.hasOwnProperty(e) && (this.attributeObj[e.toLowerCase()] = t[e]) } catch (t) { a.w.printStackTrace(t) } }, h.prototype._setChartAttribute = function(t) { try { this.chartObj.chart = t } catch (t) { a.w.printStackTrace(t) } }, h.prototype.getChartAttribute = function(t) { try { return FusionCharts.items["fw_spark_" + this.id].getChartAttribute(t) } catch (t) { a.w.printStackTrace(t) } }, h.prototype.setChartColumnRef = function(t, e, i) { try { if (t = r.D.isNull(t) ? this.options.ref : t, e = r.D.isNull(e) ? this.options.labelNode : e, i = r.D.isNull(i) ? this.options.seriesColumns : i, this.options.ref != t) { "" != this.options.ref && this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id); var s = t.replace("data:", ""); WebSquare.api.data[s].addChild(r.D.getComponentById(this.id)) } this.options.ref = t, this.options.labelNode = e, this.options.seriesColumns = i, this.modelControl.useRef = !0, this.modelControl.setRef(t), this.refresh() } catch (t) { a.w.printStackTrace(t) } }, h.prototype.setChartColumnSimpleRef = function(t, e, i, s) { try { if (t = r.D.isNull(t) ? this.options.ref : t, e = r.D.isNull(e) ? this.options.labelNode : e, i = r.D.isNull(i) ? this.options.seriesNode : i, s = r.D.isNull(s) ? this.options.valueNode : s, this.options.ref != t) { "" != this.options.ref && this.modelControl.dataCollectionRefInfo.dataComp.removeChild(this.id); var o = t.replace("data:", ""); WebSquare.api.data[o].addChild(r.D.getComponentById(this.id)) } this.options.ref = t, this.options.labelNode = e, this.options.seriesNode = i, this.options.valueNode = s, this.modelControl.useRef = !0, this.modelControl.setRef(t), this.refresh() } catch (t) { a.w.printStackTrace(t) } }, h.prototype.exportJSChart = function(t) { try { t || (t = "jpg"); var e = this.options.id || "fusionChart", i = this.getSVGString(); if (i) { var r = encodeURI(i + "ExportType=" + t + "ExportFileName=" + e), n = s.x._resourceURI + "engine/servlet/exportFusionChart.jsp"; o.v.download(n, r, "post") } } catch (t) { a.w.printStackTrace(t) } }, h.prototype.getSVGString = function() { try { var t = this.fc().getSVGString(); if (t) return t = (t = (t = (t = (t = t.wq_replaceAll('shape-rendering="default"', "shape-rendering='auto'")).wq_replaceAll('visibility=""', "visibility='inherit'")).wq_replaceAll('text-anchor="undefined"', "text-anchor='start'")).wq_replaceAll("1e-006", "0.000001")).wq_replaceAll('font-family="15"', 'font-family="Verdana"'); n.k.printLog("not found svg object") } catch (t) { a.w.printStackTrace(t) } }, h.prototype.setAccessibility = function(t) {
			try {
				if (1 == t) { var e = "", i = ""; if (null == document.getElementById("accessibility_" + this.id)) { var s = this.render; (p = document.createElement("ul")).id = "accessibility_" + this.id, WebSquare.style.addClass(p, "w2fusionchart_accessibility"); var o = this.chartObj, r = this.attributeObj.caption, n = document.createElement("li"); r && (n.innerHTML = "title : " + r, p.appendChild(n)); for (var l = 0; l < o.data.length; l++) { var h = document.createElement("li"); o.data[l] ? (e = o.data[l].label ? o.data[l].label : o.data[l].LABEL, i = o.data[l].value ? o.data[l].value : o.data[l].VALUE) : (e = "", i = ""), h.innerHTML = "label : " + e + ", value : " + i, p.appendChild(h) } s.insertBefore(p, s.lastChild) } else { var p; (p = document.getElementById("accessibility_" + this.id)).innerHTML = ""; o = this.chartObj, r = this.attributeObj.caption, n = document.createElement("li"); r && (n.innerHTML = "title : " + r, p.appendChild(n)); for (l = 0; l < o.data.length; l++) { h = document.createElement("li"); o.data[l] ? (e = o.data[l].label ? o.data[l].label : o.data[l].LABEL, i = o.data[l].value ? o.data[l].value : o.data[l].VALUE) : (e = "", i = ""), h.innerHTML = "label : " + e + ", value : " + i, p.appendChild(h) } } } else {
					var c = this.render, u = c.getElementsByClassName("w2fusionchart_accessibility"); null != u && 0 != u.length && (u = u[0], c.removeChild(u)), c = null, u = null
				}
			} catch (t) { a.w.printStackTrace(t) }
		}, h.prototype.getDataListInfo = function() { try { var t = {}; if (this.modelControl.isDataCollectionRefBinded) { var e = this.options.ref.replace("data:", ""); return t.id = e.slice(0), "simple" == this.options.seriesType.toLowerCase() ? (t.ref = this.options.ref, t.labelNode = this.options.labelNode, t.serieNode = this.options.seriesNode, t.valueNode = this.options.valueNode) : (t.ref = this.options.ref, t.labelNode = this.options.labelNode, t.seriesColumns = this.options.seriesColumns), t } return null } catch (t) { a.w.printStackTrace(t) } }
	}
}]);