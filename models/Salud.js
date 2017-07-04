var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Salud al dia model
 * ==========
 */

var Salud = new keystone.List('Salud',{
  singular:"Salud",
  plural:"Salud",
  label: 'Salud al dia',
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:"title"}
});

Salud.add({
  title:{type:String, default:"Salud al día"},
  description:{label:'Descripcion:',type:String},
  imgBanner:{label:"Imagen banner:", type: Types.CloudinaryImage}
})
Salud.register();
