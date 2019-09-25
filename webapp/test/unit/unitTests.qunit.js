/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zsan/ES5_Flight/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});