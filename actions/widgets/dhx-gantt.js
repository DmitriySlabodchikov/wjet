const c = require("../common");

module.exports = function(res, message){

	c.addPackage("@wbx/view-dhx-gantt");
	c.addModel("models/tasks.js", "plain", `{
	"data": [{
		"id": 1,
		"start_date": "2018-04-01 00:00:00",
		"duration": 5,
		"text": "Project #1",
		"progress": 0.8,
		"sortorder": 20,
		"parent": 0,
		"open": true
	}, {
		"id": 2,
		"start_date": "2018-04-06 00:00:00",
		"duration": 4,
		"text": "Task #1",
		"progress": 0.5,
		"sortorder": 10,
		"parent": 1,
		"open": true
	}, {
		"id": 3,
		"start_date": "2018-04-05 00:00:00",
		"duration": 6,
		"text": "Task #2",
		"progress": 0.7,
		"sortorder": 20,
		"parent": 1,
		"open": true
	}, {
		"id": 4,
		"start_date": "2018-04-07 00:00:00",
		"duration": 2,
		"text": "Task #3",
		"progress": 0,
		"sortorder": 30,
		"parent": 1,
		"open": true
	}, {
		"id": 5,
		"start_date": "2018-04-05 00:00:00",
		"duration": 5,
		"text": "Task #1.1",
		"progress": 0.34,
		"sortorder": 10,
		"parent": 2,
		"open": true
	}, {
		"id": 6,
		"start_date": "2018-04-11 13:22:17",
		"duration": 4,
		"text": "Task #1.2",
		"progress": 0.491477,
		"sortorder": 20,
		"parent": 2,
		"open": true
	}, {
		"id": 7,
		"start_date": "2018-04-07 00:00:00",
		"duration": 5,
		"text": "Task #2.1",
		"progress": 0.2,
		"sortorder": 10,
		"parent": 3,
		"open": true
	}, {
		"id": 8,
		"start_date": "2018-04-06 00:00:00",
		"duration": 4,
		"text": "Task #2.2",
		"progress": 0.9,
		"sortorder": 20,
		"parent": 3,
		"open": true
	}, {
		"id": 9,
		"start_date": "2018-04-06 00:00:00",
		"duration": 5,
		"text": "Task #3.1",
		"progress": 1,
		"sortorder": 10,
		"parent": 4,
		"open": true
	}, {
		"id": 10,
		"start_date": "2018-04-06 00:00:00",
		"duration": 3,
		"text": "Task #3.2",
		"progress": 0,
		"sortorder": 20,
		"parent": 4,
		"open": true
	}, {
		"id": 11,
		"start_date": "2018-04-06 00:00:00",
		"duration": 4,
		"text": "Task #3.3",
		"progress": 0.33,
		"sortorder": 30,
		"parent": 4,
		"open": true
	}, {
		"id": 12,
		"start_date": "2018-04-02 08:34:17",
		"duration": 18,
		"text": "Project #2",
		"progress": 0,
		"sortorder": 10,
		"parent": 0,
		"open": true
	}, {
		"id": 13,
		"start_date": "2018-04-02 08:13:42",
		"duration": 10,
		"text": "Task #1",
		"progress": 0.2,
		"sortorder": 15,
		"parent": 12,
		"open": true
	}, {
		"id": 14,
		"start_date": "2018-04-04 00:00:00",
		"duration": 4,
		"text": "Task #2",
		"progress": 0.9,
		"sortorder": 20,
		"parent": 12,
		"open": true
	}, {
		"id": 15,
		"start_date": "2018-04-05 00:00:00",
		"duration": 3,
		"text": "Task #3",
		"progress": 0.6,
		"sortorder": 30,
		"parent": 12,
		"open": true
	}, {
		"id": 16,
		"start_date": "2018-04-01 00:00:00",
		"duration": 3,
		"text": "Task #4",
		"progress": 0.214286,
		"sortorder": 40,
		"parent": 12,
		"open": true
	}, {
		"id": 17,
		"start_date": "2018-04-06 00:00:00",
		"duration": 6,
		"text": "Task #5",
		"progress": 0.5,
		"sortorder": 50,
		"parent": 12,
		"open": true
	}, {
		"id": 18,
		"start_date": "2018-04-05 00:00:00",
		"duration": 5,
		"text": "Task #2.1",
		"progress": 0.3,
		"sortorder": 39.999999994179,
		"parent": 14,
		"open": true
	}, {
		"id": 19,
		"start_date": "2018-04-05 00:00:00",
		"duration": 6,
		"text": "Task #2.2",
		"progres	s": 0.6,
		"sortord	er": 29.999999995343,
		"parent"	: 14,
		"open": 	true
	}, {	
		"id": 20	,
		"start_date": "2018-04-05 00:00:00",
		"duration": 4,
		"text": "Task #2.3",
		"progress": 0.512605,
		"sortorder": 39.999999995343,
		"parent": 14,
		"open": true
	}, {
		"id": 21,
		"start_date": "2018-04-05 00:00:00",
		"duration": 6,
		"text": "Task #2.4",
		"progress": 0.7,
		"sortorder": 39.999999993015,
		"parent": 14,
		"open": true
	}, {
		"id": 22,
		"start_date": "2018-04-05 00:00:00",
		"duration": 7,
		"text": "Task #4.1",
		"progress": 1,
		"sortorder": 10,
		"parent": 16,
		"open": true
	}, {
		"id": 23,
		"start_date": "2018-04-05 00:00:00",
		"duration": 5,
		"text": "Task #4.2",
		"progress": 1,
		"sortorder": 20,
		"parent": 16,
		"open": true
	}, {
		"id": 24,
		"start_date": "2018-04-05 00:00:00",
		"duration": 5,
		"text": "Task #4.3",
		"progress": 0,
		"sortorder": 30,
		"parent": 16,
		"open": true
	}],
	"collections": {
		"links": [{
			"id": 1,
			"source": 1,
			"target": 2,
			"type": "0"
		}, {
			"id": 2,
			"source": 1,
			"target": 3,
			"type": "0"
		}, {
			"id": 3,
			"source": 1,
			"target": 4,
			"type": "0"
		}, {
			"id": 4,
			"source": 2,
			"target": 6,
			"type": "0"
		}]
	}
}`);

	c.addView("views/dhx-gantt.js",`
		return {
			view:"dhx-gantt",
			init: gantt => {		
				gantt.config.xml_date = "%Y-%m-%d %H:%i:%s";
			}
		};
			`, `
		view.getGantt(true).then(gantt => {
			gantt.clearAll();
			gantt.parse(data, "json");
		});
			`);
	c.addImport("views/dhx-gantt.js", "", "@wbx/view-dhx-gantt");
	c.addImport("views/dhx-gantt.js", "{data}", "models/tasks");
	c.addMarker("views/top.js", "Menu", "{ value:\"Gantt\", id:\"dhx-gantt\", icon:\"bars\" },");

}