var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Promiciones model
 * ==========
 */

var Promocion = new keystone.List('Promocion',{
  singular:"Promocion",
  plural:"Promociones",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:'title'}
});

Promocion.add({
  title:{label:"Nombre Promocion", type:String, default:"Promocion"},
  imgPromo:{label:"Imagen de noticia", type: Types.CloudinaryImage, required: true, default:""},
  urlVideoYoutube:{label:"URL video de Youtube", type:String},
  urlVideoVimeo:{label:"URL video de Vimmeo", type:String},
  smallDescription:{label:"Descripción", type:Types.Html, wysiwyg: true, height:200, required: true, default:""},
  content:{label:"Contenido", type:Types.Html, wysiwyg: true, height:500, require:true, default:""},
  createdAt: { type: Date, default: Date.now }
})

Promocion.register();
