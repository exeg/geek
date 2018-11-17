const mongoose = require('mongoose');
const Category = mongoose.model('Category');
const Recipe = mongoose.model('Recipe');
const CatHandler = require('../handlers/catHandler');


exports.getApiRecipe = async (req, res) => {
  let recipe = await Recipe.findOne({ _id: req.params.id }).populate({
    path: 'categories'
    }).exec();
  let cats = recipe.categories;
  let result = await CatHandler.catH(cats);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(result, null, 3));
}


// exports.getApiRecipe = async (req, res) => {
//   let recipe = await Recipe.findOne({ _id: req.params.id }).populate({
//     path: 'categories'
//     }).exec();
//   console.log(recipe)
//   let result = {};
//   result.ch = {};
//   let cats = recipe.categories;
//     console.log(cats);

//   for (let itm of cats) {
    
//     for (let itm2 of cats) {

//       if (String(itm.master) === String(itm2._id)) {

//         if (!result[itm2.text]) {
//           result[itm2.text] = {};
//           result[itm2.text].children = [];
//         }


//         if (result.ch[itm2.text]) {
//           let res = result[result.ch[itm2.text]].children;
//           for (let k in res) {
//             if (res[k][itm2.text]) {
//               let tmpObj = {};
//               res[k][itm2.text].children = [];
//               tmpObj[itm.text] = {};
//               res[k][itm2.text].children.push(tmpObj);             
//             }
//           }
//           delete result[itm2.text]; 
//           continue;
//         }



//         let tmpObj = {};
//         if (result[itm.text]) {
//           tmpObj[itm.text] = result[itm.text];
//           result[itm2.text].children.push(tmpObj);
//           delete result[itm.text];        
//         } else {
//           result.ch[itm.text] = itm2.text;
//           tmpObj[itm.text] = {};		
//           result[itm2.text].children.push(tmpObj);
// 	      }
//   	  }
//   	}
//   }
//  delete result.ch;


//   res.setHeader('Content-Type', 'application/json');
//   res.send(JSON.stringify(result, null, 3));
// }


exports.createRecipe = async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.status(200).json(newRecipe);
}


exports.updateRecipe = async (req, res) => {
  const recipe = await Recipe.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).exec();
  res.status(200).json(recipe);

}


exports.delRecipeyById = async (req, res) => {
  const recipe = await Recipe.findByIdAndRemove(req.query.id);
  res.status(200);
}