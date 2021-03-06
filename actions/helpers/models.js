const fs = require("fs");

async function useModel(inq, res){
	let allModels = [];

	fs.readdirSync("./sources/models").forEach(file => {
		allModels.push(file);
	})

	const fileName = await inq.prompt([
		{ type: 'list', name: 'modelName', message: 'Select model', choices: allModels },
	]);

	//remove file extension
	const extIndex = fileName.modelName.lastIndexOf(".");
	res.modelFileName = fileName.modelName.substring(0, extIndex);

	let str = fs.readFileSync("./sources/models/"+fileName.modelName).toString("utf8");

	if(str.indexOf("webix.DataCollection") > -1){
		res.modelType = "collection";
	}
	else if(str.indexOf("webix.ajax") > -1)
		res.modelType = "proxy";
	else{
		res.modelType = "static";
	}
	return res;
}

async function checkModel(inq, message, data){
	let model = await inq.prompt([
		{ type: 'confirm', name: 'model', message: `Do you want to add a model${message ? " "+message : ""}?`,"default": true },
		{ type: 'confirm', name: 'useModel', message: 'Use existing model?', "default": false, when: a => a.model }
	]);

	if(model.model){
		if(model.useModel)
			model = await useModel(inq, model);
		else
			model = await require("../add-model").run(inq, data);
	}
	else
		model = false;
	return model;
}

module.exports = {
	checkModel
};