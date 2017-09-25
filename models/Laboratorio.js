var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Salud al dia model
 * ==========
 */

var Laboratorio = new keystone.List('Laboratorio',{
  nocreate: true,
  singular:"Laboratorio",
  plural:"Laboratorios",
  label: 'Laboratorio',
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:"title"}
});

Laboratorio.add({
  title:{type:String, default:"Laboratorio"},
  imgBanner:{label:"Imagen banner:", type: Types.CloudinaryImage}
})

Laboratorio.register();
