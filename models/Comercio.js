var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Comercio model
 * ==========
 */

var Comercio = new keystone.List('Comercio',{
  singular:"Comercio",
  plural:"Comercio",
  label:"Valores Agregados",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:"title"}
});

Comercio.add({
  title:{type:String, default:"Comercio"},
  description:{label:'Descripcion:',type:String},
  imgBanner:{label:"Imagen banner:", type: Types.CloudinaryImage}
})
Comercio.register();
