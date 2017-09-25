var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Socio model
 * ==========
 */

var Socio = new keystone.List('Socio',{
  nocreate: true,
  singular:"Socio",
  plural:"Socios",
  label: 'Socio',
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:"title"}
});

Socio.add({
  title:{type:String, default:"Socio"},
  imgBanner:{label:"Imagen banner:", type: Types.CloudinaryImage}
})

Socio.register();
