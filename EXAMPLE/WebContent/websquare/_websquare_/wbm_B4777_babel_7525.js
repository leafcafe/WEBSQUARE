(self.webpackChunkwebpack_test = self.webpackChunkwebpack_test || []).push([[7525], {
	7525: function(t, e, i) {
		"use strict"; i.r(e), i.d(e, { fwRealtimeChart: function() { return p } }); var a = i(2137), s = i(7757), r = i.n(s), o = i(9122), n = i(7827), l = i(1160), h = i(8754), c = i(6079), d = i(7870), p = function(t, e, i) { d.s.call(this, t, e, i) }; o.x.extend(p.prototype, d.s.prototype), p.prototype.defaultOptions = { pluginType: "uiplugin.fwRealtimeChart", pluginName: "fwRealtimeChart", useConfig: !0, seriesType: "simple", plotColor: "2ec6c8,b5a1dd,5ab0ee,f4984e,d77a80,90bddc,fe5d55,b5dc59,9ea7b3,00ba84,878bb6,757a85", timeformat: "HH:mm:ss", version: "3.7" }, p.prototype.initialize = function(t) { this.fcObj = null, this.chartObj = {}, this.attributeObj = null, this.streamFlag = 0, this.intervals = null, this.updateData = null }, p.prototype.initAsync = (0, a.Z)(r().mark((function t() { return r().wrap((function(t) { for (; ;)switch (t.prev = t.next) { case 0: if ("undefined" != typeof FusionCharts) { t.next = 21; break } if ("3.15" !== this.options.version && (this.options.version || "3.15" != n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))) { t.next = 7; break } return this.options.version = "3.15", t.next = 5, inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js"); case 5: t.next = 21; break; case 7: if ("3.13" !== this.options.version && (this.options.version || "3.13" != n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))) { t.next = 13; break } return this.options.version = "3.13", t.next = 11, inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js"); case 11: t.next = 21; break; case 13: if ("3.11" != this.options.version && (this.options.version || "3.11" != n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))) { t.next = 19; break } return this.options.version = "3.11", t.next = 17, inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js"); case 17: t.next = 21; break; case 19: return t.next = 21, inquires("externalJS/FusionCharts3.7/FusionCharts_all.js"); case 21: case "end": return t.stop() } }), t, this) }))), p.prototype.toHTML = function() { var t = [], e = "" == this.options.style ? "" : "style='" + this.options.style + "'"; return t.push("<div id='" + this.id + "' " + e + " class='w2fwRealtimeChart " + this.options.className + "'>"), t.push("</div>"), t.join("") }, p.prototype.setAction = function() { try { var t, e = this; if (this.setDefaultOption(), this.modelControl.isDataCollectionRefBinded) { if ((t = this.modelControl.dataCollectionRefInfo.dataComp) && t.getRowCount() > 0) { var i = {}; i.plotColor = this.options.plotColor, this.chartObj = t.getRealtimeData(this.options.labelNode, this.options.seriesNode, this.options.valueNode, i), this.fcObj = new FusionCharts({ id: "fw_realtime_" + e.id, type: e.options.chartType, renderAt: e.id, width: e.render.offsetWidth, height: e.render.offsetHeight || "100%", dataFormat: "json", dataSource: e.chartObj, events: { drawComplete: function() { e._feedData() } } }), this.draw() } } else if (this.fcObj = new FusionCharts({ id: "fw_realtime_" + e.id, type: e.options.chartType, renderAt: e.id, width: "100%", height: e.render.offsetHeight || "100%", dataFormat: "json" }), this.options.dataStreamUrl && this.options.seriesArray) { this.chartObj.dataset || (this.chartObj.dataset = []); var a = this.options.seriesArray; a = a.wq_replaceAll("'", '"'), a = JSON.parse(a); for (var s = this.options.plotColor.split(","), r = 0; r < a.length; r++)a[r].color || (a[r].color = s[r]); for (var o = 0; o < a.length; o++)this.chartObj.dataset.push(a[o]); this.attributeObj.dataStreamURL = this.options.dataStreamUrl, this.attributeObj.refreshInterval = this.options.refreshInterval, this.attributeObj.dataStamp = this.options.dataStamp || "", this.attributeObj.showRTMenuItem = this.options.showRTMenuItem || 0, this.draw() } } catch (t) { l.w.printStackTrace(t) } }, p.prototype._feedData = function() {
			try {
				if ("" != this.options.ref) {
					var t = this; this.updateData = function() {
						var e = t.modelControl.dataCollectionRefInfo.dataComp, i = e.getAllJSON(), a = e.getColumnDistinctDataArray(t.options.seriesNode).length, s = t.options.valueNode; if (t.streamFlag >= i.length) { var r = WebSquare.ModelUtil.getSubmission(this.options.submissionId, null, { scope_id: this.scope_id }); WebSquare.ModelUtil.executeSubmission(r), t.streamFlag = 0 }
						for (var o = FusionCharts("fw_realtime_" + t.id), n = new Date, l = "", h = WebSquare.date.getFormattedDate(n, t.options.timeformat), c = t.streamFlag; c < a + t.streamFlag; c++)l += i[c][s] + "|"; l = l.substring(0, l.length - 1), t.streamFlag = t.streamFlag + a; var d = "&label=" + h + "&value=" + l; o.feedData(d)
					}, h.D.setInterval((function() { t.updateData() }), { caller: this, delay: 1e3 * this.options.refreshInterval, key: this.id + "_interval" })
				}
			} catch (t) { l.w.printStackTrace(t) }
		}, p.prototype.refresh = function() { try { var t, e = this; if (this.setDefaultOption(), this.modelControl.isDataCollectionRefBinded && (t = this.modelControl.dataCollectionRefInfo.dataComp) && t.getRowCount() > 0) { var i = {}; i.plotColor = this.options.plotColor, this.chartObj = t.getRealtimeData(this.options.labelNode, this.options.seriesNode, this.options.valueNode, i); var a = "fw_realtime_" + this.id; this.fcObj || FusionCharts.items[a] || (this.fcObj = new FusionCharts({ id: "fw_realtime_" + e.id, type: e.options.chartType, renderAt: e.id, width: "100%", height: e.render.offsetHeight || "100%", dataFormat: "json", dataSource: e.chartObj, events: { drawComplete: function() { e._feedData() } } }), this.draw()) } } catch (t) { l.w.printStackTrace(t) } }, p.prototype.fc = function() { try { return FusionCharts.items["fw_realtime_" + this.id] } catch (t) { l.w.printStackTrace(t) } }, p.prototype.draw = function() { try { if (null != this.attributeObj) for (var t in this.chartObj.chart || (this.chartObj.chart = {}), this.attributeObj) this.attributeObj.hasOwnProperty(t) && (this.chartObj.chart[t.toLowerCase()] = this.attributeObj[t]); this.fcObj.setJSONData(this.chartObj), this.fcObj.isActive() || this.fcObj.render(this.id) } catch (t) { l.w.printStackTrace(t) } }, p.prototype.setDefaultOption = function() {
			try {
				switch (this._realtimearea = function() { this.attributeObj = { showrealtimevalue: "1", yaxismaxvalue: "10", numdisplaysets: "10", bgColor: "#ffffff", canvasBgColor: "#ffffff", canvasBorderAlpha: "0", divlineAlpha: "100", divlineColor: "#999999", divlineThickness: "1", divLineDashed: "1", divLineDashLen: "1", divLineGapLen: "1", usePlotGradientColor: "0", showplotborder: "0", placeValuesInside: "1", rotateValues: "1", showXAxisLine: "1", xAxisLineThickness: "1", xAxisLineColor: "#999999", showAlternateHGridColor: "0", labeldisplay: "rotate", slantLabels: "1", showLegend: "1", showValues: "0", showRealTimeValue: "0" } }, this._realtimecolumn = function() { this.attributeObj = { showrealtimevalue: "1", yaxismaxvalue: "10", numdisplaysets: "10", bgColor: "#ffffff", canvasBgColor: "#ffffff", canvasBorderAlpha: "0", divlineAlpha: "100", divlineColor: "#999999", divlineThickness: "1", divLineDashed: "1", divLineDashLen: "1", divLineGapLen: "1", usePlotGradientColor: "0", showplotborder: "0", placeValuesInside: "1", rotateValues: "1", showXAxisLine: "1", xAxisLineThickness: "1", xAxisLineColor: "#999999", showAlternateHGridColor: "0", labeldisplay: "rotate", slantLabels: "1", showLegend: "1", showValues: "0", showRealTimeValue: "0" } }, this._realtimeline = function() { this.attributeObj = { showrealtimevalue: "1", yaxismaxvalue: "10", numdisplaysets: "10", bgColor: "#ffffff", canvasBgColor: "#ffffff", canvasBorderAlpha: "0", divlineAlpha: "100", divlineColor: "#999999", divlineThickness: "1", divLineDashed: "1", divLineDashLen: "1", divLineGapLen: "1", usePlotGradientColor: "0", showplotborder: "0", placeValuesInside: "1", rotateValues: "1", showXAxisLine: "1", xAxisLineThickness: "1", xAxisLineColor: "#999999", showAlternateHGridColor: "0", labeldisplay: "rotate", slantLabels: "1", showLegend: "1", showValues: "0", showRealTimeValue: "0" } }, this._realtimestackedarea = function() { this.attributeObj = { showrealtimevalue: "1", yaxismaxvalue: "10", numdisplaysets: "10", bgColor: "#ffffff", canvasBgColor: "#ffffff", canvasBorderAlpha: "0", divlineAlpha: "100", divlineColor: "#999999", divlineThickness: "1", divLineDashed: "1", divLineDashLen: "1", divLineGapLen: "1", usePlotGradientColor: "0", showplotborder: "0", placeValuesInside: "1", rotateValues: "1", showXAxisLine: "1", xAxisLineThickness: "1", xAxisLineColor: "#999999", showAlternateHGridColor: "0", labeldisplay: "rotate", slantLabels: "1", showLegend: "1", showValues: "0", showRealTimeValue: "0" } }, this._realtimestackedcolumn = function() {
					this.attributeObj = {
						showrealtimevalue: "1", yaxismaxvalue: "10",
						numdisplaysets: "10", bgColor: "#ffffff", canvasBgColor: "#ffffff", canvasBorderAlpha: "0", divlineAlpha: "100", divlineColor: "#999999", divlineThickness: "1", divLineDashed: "1", divLineDashLen: "1", divLineGapLen: "1", usePlotGradientColor: "0", showplotborder: "0", placeValuesInside: "1", rotateValues: "1", showXAxisLine: "1", xAxisLineThickness: "1", xAxisLineColor: "#999999", showAlternateHGridColor: "0", labeldisplay: "rotate", slantLabels: "1", showLegend: "1", showValues: "0", showRealTimeValue: "0"
					}
				}, this._realtimelinedy = function() { this.attributeObj = { showrealtimevalue: "1", yaxismaxvalue: "10", numdisplaysets: "10", bgColor: "#ffffff", canvasBgColor: "#ffffff", canvasBorderAlpha: "0", divlineAlpha: "100", divlineColor: "#999999", divlineThickness: "1", divLineDashed: "1", divLineDashLen: "1", divLineGapLen: "1", usePlotGradientColor: "0", showplotborder: "0", placeValuesInside: "1", rotateValues: "1", showXAxisLine: "1", xAxisLineThickness: "1", xAxisLineColor: "#999999", showAlternateHGridColor: "0", labeldisplay: "rotate", slantLabels: "1", showLegend: "1", showValues: "0", showRealTimeValue: "0" } }, this.options.chartType.toLowerCase()) { case "realtimearea": this._realtimearea(); break; case "realtimecolumn": this._realtimecolumn(); break; case "realtimeline": this._realtimeline(); break; case "realtimestackedarea": this._realtimestackedarea(); break; case "realtimestackedcolumn": this._realtimestackedcolumn(); break; case "realtimelinedy": this._realtimelinedy(); break; default: this._realtimecolumn() }
			} catch (t) { l.w.printStackTrace(t) }
		}, p.prototype.setChartAttribute = function(t) { try { for (var e in null == this.attributeObj && (this.attributeObj = {}), t) t.hasOwnProperty(e) && (this.attributeObj[e.toLowerCase()] = t[e]) } catch (t) { l.w.printStackTrace(t) } }, p.prototype.getChartAttribute = function(t) { try { return FusionCharts.items["fw_realtime_" + this.id].getChartAttribute(t) } catch (t) { l.w.printStackTrace(t) } }, p.prototype.changeType = function(t) { try { this.fc().chartType(t), this.options.chartType = t, this.options.realtime && (this.streamFlag = 0) } catch (t) { l.w.printStackTrace(t) } }, p.prototype.exportJSChart = function(t) { try { t || (t = "jpg"); var e = this.options.id || "fusionChart", i = this.getSVGString(); if (i) { var a = encodeURI(i + "ExportType=" + t + "ExportFileName=" + e), s = o.x._resourceURI + "engine/servlet/exportFusionChart.jsp"; n.v.download(s, a, "post") } } catch (t) { l.w.printStackTrace(t) } }, p.prototype.getSVGString = function() { try { var t = this.fc().getSVGString(); if (t) return t = (t = (t = (t = (t = t.wq_replaceAll('shape-rendering="default"', "shape-rendering='auto'")).wq_replaceAll('visibility=""', "visibility='inherit'")).wq_replaceAll('text-anchor="undefined"', "text-anchor='start'")).wq_replaceAll("1e-006", "0.000001")).wq_replaceAll('font-family="15"', 'font-family="Verdana"'); c.k.printLog("not found svg object") } catch (t) { l.w.printStackTrace(t) } }, p.prototype.stopUpdate = function() { try { if (this.modelControl.isDataCollectionRefBinded) this.modelControl.dataCollectionRefInfo.dataComp && h.D.clearInterval(this.id + "_interval"); else this.fcObj.stopUpdate() } catch (t) { l.w.printStackTrace(t) } }, p.prototype.restartUpdate = function() { try { if (this.modelControl.isDataCollectionRefBinded) { if (this.modelControl.dataCollectionRefInfo.dataComp) { var t = this; h.D.setInterval((function() { t.updateData() }), { caller: this, delay: 1e3 * this.options.refreshInterval, key: this.id + "_interval" }) } } else this.fcObj.restartUpdate() } catch (t) { l.w.printStackTrace(t) } }, p.prototype.clearChart = function() { try { this.fcObj.clearChart() } catch (t) { l.w.printStackTrace(t) } }, p.prototype.isUpdateActive = function() { try { return this.modelControl.isDataCollectionRefBinded ? !!WebSquare.userIntervalHash[this.id + "_interval"] : this.fcObj.isUpdateActive() } catch (t) { l.w.printStackTrace(t) } }, p.prototype.setDataStreamInfo = function(t) {
			try {
				if (!t && !t.dataStreamURL && t.seriesArray) return; this.chartObj.dataset || (this.chartObj.dataset = []); for (var e = this.options.plotColor.split(","), i = 0; i < t.seriesArray.length; i++)t.seriesArray[i].color || (t.seriesArray[i].color = e[i]); for (var a = 0; a < t.seriesArray.length; a++)this.chartObj.dataset.push(t.seriesArray[a])
					; this.attributeObj.dataStreamURL = t.dataStreamURL, this.attributeObj.refreshInterval = t.refreshInterval, this.attributeObj.dataStamp = t.dataStamp || "", this.attributeObj.showRTMenuItem = t.showRTMenuItem || 0
			} catch (t) { l.w.printStackTrace(t) }
		}, p.prototype.getDataListInfo = function() { try { var t = {}; if (this.modelControl.isDataCollectionRefBinded) { var e = this.modelControl.dataCollectionRefInfo.dataComp; return t.id = e.id, t.ref = this.options.ref, t.labelNode = this.options.labelNode, t.seriesNode = this.options.seriesNode, t.valueNode = this.options.valueNode, t } return null } catch (t) { l.w.printStackTrace(t) } }
	}
}]);