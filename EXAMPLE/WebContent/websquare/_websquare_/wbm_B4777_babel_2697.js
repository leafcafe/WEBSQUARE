(self.webpackChunkwebpack_test = self.webpackChunkwebpack_test || []).push([[2697], {
	2697: function(t, s, e) {
		"use strict"; e.r(s), e.d(s, { fwGanttChart: function() { return l } }); var o = e(2137), i = e(7757), a = e.n(i), r = e(9122), n = e(7827), h = e(1160), c = e(6079), p = e(7870), l = function(t, s, e) { p.s.call(this, t, s, e) }; r.x.extend(l.prototype, p.s.prototype), l.prototype.defaultOptions = { pluginType: "uiplugin.fwGanttChart", pluginName: "fwGanttChart", useConfig: !0, accessibility: !1, autoCategory: !0, multiTasks: !1, quarterNames: "", monthNames: "", plotColor: "2ec6c8,b5a1dd,5ab0ee,f4984e,d77a80,90bddc,fe5d55,b5dc59,9ea7b3,00ba84,878bb6,757a85", version: "3.7", dataColumns: "", resizeLastMonth: !1 }, l.prototype.initialize = function(t) { this.fcObj = null, this.chartObj = {}, this.taskColorObj = {}, this.attributeObj = null, this.categories = null, this.processes = null, this.datatable = null, this.tasks = null, this.legends = null, this.trendlines = null, this.milestones = null, this.connectors = null, this.options.quarterNames = this.options.quarterNames || WebSquare.language.getMessage("fwGanttChart_quarterNames") || "1분기,2분기,3분기,4분기", this.options.monthNames = this.options.monthNames || WebSquare.language.getMessage("fwGanttChart_monthNames") || "1월,2월,3월,4월,5월,6월,7월,8월,9월,10월,11월,12월" }, l.prototype.initAsync = (0, o.Z)(a().mark((function t() { return a().wrap((function(t) { for (; ;)switch (t.prev = t.next) { case 0: if ("undefined" != typeof FusionCharts) { t.next = 21; break } if ("3.15" !== this.options.version && (this.options.version || "3.15" != n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))) { t.next = 7; break } return this.options.version = "3.15", t.next = 5, inquires("externalJS/FusionCharts3.15.2/FusionCharts_all.js"); case 5: t.next = 21; break; case 7: if ("3.13" !== this.options.version && (this.options.version || "3.13" != n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))) { t.next = 13; break } return this.options.version = "3.13", t.next = 11, inquires("externalJS/FusionCharts3.13/js/FusionCharts_all.js"); case 11: t.next = 21; break; case 13: if ("3.11" != this.options.version && (this.options.version || "3.11" != n.v.getConfiguration("/WebSquare/fusionchart/version/@value"))) { t.next = 19; break } return this.options.version = "3.11", t.next = 17, inquires("externalJS/FusionCharts3.11.0/FusionCharts_all.js"); case 17: t.next = 21; break; case 19: return t.next = 21, inquires("externalJS/FusionCharts3.7/FusionCharts_all.js"); case 21: case "end": return t.stop() } }), t, this) }))), l.prototype.toHTML = function() { var t = [], s = "" == this.options.style ? "" : "style='" + this.options.style + "'"; return t.push("<div id='" + this.id + "' " + s + " class='w2fwGanttChart " + this.options.className + "'>"), t.push("</div>"), t.join("") }, l.prototype.setAction = function() { if (this.fcObj = new FusionCharts("gantt", "fw_gantt_" + this.id, "100%", this.render.offsetHeight || "100%"), this.setDefaultOption(), this.modelControl.isDataCollectionRefBinded) { var t = this.modelControl.dataCollectionRefInfo.dataComp, s = {}; s.dateformat = this.options.dateformat, s.timeBase = this.options.timeBase, s.monthNames = this.options.monthNames, s.timeGap = this.options.timeGap, s.plotColor = this.options.plotColor, s.processNode = this.options.processNode, s.dataColumns = this.options.dataColumns, s.taskNode = this.options.taskNode, s.startDateNode = this.options.startDateNode, s.endDateNode = this.options.endDateNode, s.autoCategory = this.options.autoCategory, s.categoryDepth = this.options.categoryDepth, s.multiTasks = this.options.multiTasks, s.quarterNames = this.options.quarterNames, s.resizeLastMonth = this.options.resizeLastMonth, s.processIdNode = this.options.processIdNode || null, s.taskIdNode = this.options.taskIdNode || null, s.version = this.options.version, t.getRowCount() > 0 && this.setJSONData(t.getfwGanttChartData(s)) } }, l.prototype.refresh = function() {
			try {
				if (this.modelControl.isDataCollectionRefBinded) {
					var t = this.modelControl.dataCollectionRefInfo.dataComp, s = {}; if (s.dateformat = this.options.dateformat, s.timeBase = this.options.timeBase, s.monthNames = this.options.monthNames, s.timeGap = this.options.timeGap, s.plotColor = this.options.plotColor, s.processNode = this.options.processNode, s.dataColumns = this.options.dataColumns,
						s.taskNode = this.options.taskNode, s.startDateNode = this.options.startDateNode, s.endDateNode = this.options.endDateNode, s.autoCategory = this.options.autoCategory, s.categoryDepth = this.options.categoryDepth, s.multiTasks = this.options.multiTasks, s.quarterNames = this.options.quarterNames, s.resizeLastMonth = this.options.resizeLastMonth, s.taskIdNode = this.options.taskIdNode || null, t.getRowCount() > 0) { var e = t.getfwGanttChartData(s); this.categories = e.categories, this.setJSONData(e) }
				}
			} catch (t) { h.w.printStackTrace(t) }
		}, l.prototype.setJSONData = function(t) { try { this.chartObj = t, this.draw() } catch (t) { h.w.printStackTrace(t) } }, l.prototype.getJSONData = function() { try { return FusionCharts.items["fw_gantt_" + this.id].getJSONData() } catch (t) { h.w.printStackTrace(t) } }, l.prototype.fc = function() { try { return FusionCharts.items["fw_gantt_" + this.id] } catch (t) { h.w.printStackTrace(t) } }, l.prototype.draw = function() { try { if (null != this.attributeObj) for (var t in this.attributeObj) { if (!this.chartObj.chart) { this.chartObj.chart = this.attributeObj; break } this.chartObj.chart[t] = this.attributeObj[t] } if (this.categories) { this.chartObj.categories = []; for (var s = 0; s < this.categories.length; s++)this.chartObj.categories.push(this.categories[s]) } if (this.processes && (this.chartObj.processes || (this.chartObj.processes = {}), this.chartObj.processes)) for (var t in this.processes) this.chartObj.processes[t] = this.processes[t]; if (this.datatable && (this.chartObj.datatable || (this.chartObj.datatable = {}), this.chartObj.datatable)) for (var t in this.datatable) if ("datacolumn" === t) for (s = 0; s < this.datatable.datacolumn.length; s++)for (var e in this.datatable.datacolumn[s]) this.chartObj.datatable.datacolumn[s][e] = this.datatable.datacolumn[s][e]; else this.chartObj.datatable[t] = this.datatable[t]; if (this.tasks && (this.chartObj.tasks || (this.chartObj.tasks = {}), this.chartObj.tasks)) for (var t in this.tasks) this.chartObj.tasks[t] = this.tasks[t]; if (this.taskColorObj) for (t in this.taskColorObj) for (s = 0; s < this.chartObj.tasks.task.length; s++)t === this.chartObj.tasks.task[s].id && (this.chartObj.tasks.task[s].color = this.taskColorObj[t]); this.trendlines && (this.chartObj.trendlines || (this.chartObj.trendlines = []), this.chartObj.trendlines.push(this.trendlines)), this.milestones && (this.chartObj.milestones || (this.chartObj.milestones = {}, this.chartObj.milestones.milestone = []), this.chartObj.milestones.milestone.push(this.milestones)), this.connectors && (this.chartObj.connectors || (this.chartObj.connectors = []), this.chartObj.connectors.push({ connector: [] }), this.chartObj.connectors[0].connector.push(this.connectors)), this.legends && (this.chartObj.legend || (this.chartObj.legend = []), this.chartObj.legend = this.legends); var o = this.fc(); o.setJSONData(this.chartObj), o.isActive() || o.render(this.id) } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setDefaultOption = function() { try { this.attributeObj = { chartLeftMargin: "0", chartRightMargin: "0", chartTopMargin: "0", chartBottomMargin: "0", toolTipColor: "#ffffff", toolTipBorderThickness: "0", toolTipBgColor: "#000000", toolTipBgAlpha: "70", toolTipBorderRadius: "2", toolTipPadding: "5", dateformat: "yyyyMMdd" == this.options.dateformat ? "yyyy/mm/dd" : this.options.dateformat } } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setChartAttribute = function(t) { try { for (var s in null == this.attributeObj && (this.attributeObj = {}), t) t.hasOwnProperty(s) && (this.attributeObj[s.toLowerCase()] = t[s]) } catch (t) { h.w.printStackTrace(t) } }, l.prototype.getChartAttribute = function(t) { try { return this.fcObj.getChartAttribute(t) } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setCategories = function(t) { try { this.categories = [], this.categories.push(t) } catch (t) { h.w.printStackTrace(t) } }, l.prototype.addCategories = function(t) { try { null == this.categories && (this.categories = []), this.categories.unshift(t) } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setProcessesAttribute = function(t) { try { this.processes = t } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setDatatableAttribute = function(t) { try { this.datatable = t } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setTasksAttribute = function(t) {
			try { this.tasks = t } catch (t) {
				h.w.printStackTrace(t)
			}
		}, l.prototype.setTasksColor = function(t, s) { try { this.taskColorObj[t] = s, this.draw() } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setTrendLine = function(t) { try { this.trendlines = t } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setMilestone = function(t) { try { this.milestones = t } catch (t) { h.w.printStackTrace(t) } }, l.prototype.setConnector = function(t) { try { this.connectors = t } catch (t) { h.w.printStackTrace(t) } }, l.prototype.exportJSChart = function(t) { try { t || (t = "jpg"); var s = this.options.id || "fusionChart", e = this.getSVGString(); if (e) { var o = encodeURI(e + "ExportType=" + t + "ExportFileName=" + s), i = r.x._resourceURI + "engine/servlet/exportFusionChart.jsp"; n.v.download(i, o, "post") } } catch (t) { h.w.printStackTrace(t) } }, l.prototype.getSVGString = function() { try { var t = this.fc().getSVGString(); if (t) return t = (t = (t = (t = (t = t.wq_replaceAll('shape-rendering="default"', "shape-rendering='auto'")).wq_replaceAll('visibility=""', "visibility='inherit'")).wq_replaceAll('text-anchor="undefined"', "text-anchor='start'")).wq_replaceAll("1e-006", "0.000001")).wq_replaceAll('font-family="15"', 'font-family="Verdana"'); c.k.printLog("not found svg object") } catch (t) { h.w.printStackTrace(t) } }, l.prototype.getDataListInfo = function() { try { if (this.modelControl.isDataCollectionRefBinded) { var t = {}; return t.ref = this.options.ref, t.id = this.modelControl.dataCollectionRefInfo.dataComp.id, t.taskNode = this.options.taskNode, t.taskIdNode = this.options.taskIdNode, t.startDateNode = this.options.startDateNode, t.endDateNode = this.options.endDateNode, t.processNode = this.options.processNode, t } return null } catch (t) { h.w.printStackTrace(t) } }
	}
}]);