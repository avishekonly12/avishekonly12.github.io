window.onload=function()
{
	var placeholderDiv = document.getElementById("viz");
	  // URL of the viz to be embedded
	var url = "http://tabsrvdcs.usgovvirginia.cloudapp.usgovcloudapi.net/views/Sales/Sales_tiles";
	  // An object that contains options specifying how to embed the viz
	var options = {
		width: '970px',
		height: '600px',
		hideTabs: true,
		hideToolbar: true,
				 };
	viz = new tableau.Viz(placeholderDiv, url, options);
};

/*function switchView(sheetName)
{
	workbook=viz.getWorkbook();
	workbook.activateSheetAsync("sheetName");
};
*/
function switchToMapTab() {
	workbook=viz.getWorkbook();
  workbook.activateSheetAsync("Order Dashboard");
};

function switchToMapTab1() {
	workbook=viz.getWorkbook();
  workbook.activateSheetAsync("Sales_tiles");
};

function switchToMapTab2() {
	workbook=viz.getWorkbook();
  workbook.activateSheetAsync("Facebook");
};

function switchToMapTab3() {
	workbook=viz.getWorkbook();
  workbook.activateSheetAsync("Animated Map");
};
function showOnly(filterName, values) {
	sheet = viz.getWorkbook().getActiveSheet();
	if(sheet.getSheetType() === 'worksheet') {
		sheet.applyFilterAsync(filterName, values, 'REPLACE');
	} else {
		worksheetArray = sheet.getWorksheets();
		for(var i = 0; i < worksheetArray.length; i++) {
			worksheetArray[i].applyFilterAsync(filterName, values, 'REPLACE');
		}
	}
}
function showOnly1(filterName, values) {
	sheet = viz.getWorkbook().getActiveSheet();
	if(sheet.getSheetType() === 'worksheet') {
		sheet.applyFilterAsync(filterName, values, 'REPLACE');
	} else {
		worksheetArray = sheet.getWorksheets();
		for(var i = 0; i < worksheetArray.length; i++) {
			worksheetArray[i].applyFilterAsync(filterName, values, 'REPLACE');
		}
	}
}
function showOnly2(filterName, values) {
	sheet = viz.getWorkbook().getActiveSheet();
	if(sheet.getSheetType() === 'worksheet') {
		sheet.applyFilterAsync(filterName, values, 'REPLACE');
	} else {
		worksheetArray = sheet.getWorksheets();
		for(var i = 0; i < worksheetArray.length; i++) {
			worksheetArray[i].applyFilterAsync(filterName, values, 'REPLACE');
		}
	}
}
function clearFilter(filterName) {
	sheet = viz.getWorkbook().getActiveSheet();
	if(sheet.getSheetType() === 'worksheet') {
		sheet.clearFilterAsync(filterName);
	} else {
		worksheetArray = sheet.getWorksheets();
		for(var i = 0; i < worksheetArray.length; i++) {
			worksheetArray[i].clearFilterAsync(filterName);
		}
	}
}
