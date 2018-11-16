const mongoose = require('mongoose');
const Category = mongoose.model('Category');


exports.getCategories = async (req, res) => {
  let cats = await Category.find();

  let result = {};
  // result.level_1 = [];
  // result.level_2 = [];
  // result.level_3 = [];
  // result.lines = [];
  // for (itm of items) {
  //   if (itm.level === 1) result.level_1.push(itm);
  //   if (itm.level === 2) result.level_2.push(itm); 	
  //   if (itm.level === 3) result.level_3.push(itm); 	
 	
  // }
  // for (itm of result.level_3) {
  //   let level2 = result.level_2.filter((e) => String(e._id) === String(itm.master))[0];
  //   let level1 = result.level_1.filter((e) => String(e._id) === String(level2.master))[0];
  //   let line = {
  //     level_1: level1,
  //     level_2: level2,
  //     level_3: itm
  //   }
  //   result.lines.push(line); 
  // } 

  // res.setHeader('Content-Type', 'application/json');
  // res.send(JSON.stringify(result.lines, null, 3));
}

exports.createCategory = async (req, res) => {

}

exports.updateCategory = async (req, res) => {

}

exports.delCategoryById = async (req, res) => {

}