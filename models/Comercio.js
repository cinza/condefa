var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Comercio model
 * ==========
 */

var Comercio = new keystone.List('Comercio',{
  singular:"Comercio",
  plural:"Comercios",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:"title"}
});

Comercio.add({
  title:{type:String, default:"Comercio"},
  imgBanner:{label:"Imagen banner:", type: Types.CloudinaryImage}
})
Comercio.register();
