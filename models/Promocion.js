var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Promiciones model
 * ==========
 */

var Promocion = new keystone.List('Promocion',{
  singular:"Promo",
  plural:"Promo",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:'title'}
});

var currentMonth = new Date;
currentMonth = currentMonth.getMonth();
var currentYear = new Date;
currentYear = currentYear.getFullYear();

Promocion.add({
  title:{label:"Nombre Promocion", type:String, default:"Promocion"},
  imgPromo:{label:"Imagen de noticia thumbail:", type: Types.CloudinaryImage, required: true, default:""},
  imgPromoFull:{label:"Imagen de noticia tamaño completo:", type: Types.CloudinaryImage, required:true, default:""},
  urlVideoYoutube:{label:"URL video de Youtube", type:String},
  urlVideoVimeo:{label:"URL video de Vimmeo", type:String},
  description:{label:"Descripción, máximo 100 caracteres", type:Types.Text, max: 100},
  content:{label:"Contenido", type:Types.Html, wysiwyg: true, height:500,},
  category:{label:"Categoria", type: Types.Select, options: 'laboratorio, medicina, producción, otros, farmacia, noticia', default:'farmacia'},
  createdAt: { type: Date, default: Date.now, hidden:true },
  month:{type:Types.Number, default:currentMonth, noedit:true, hidden:true},
  year:{type:Types.Number, default:currentYear, noedit:true, hidden:true}
})

Promocion.defaultColumns = 'title, category, createdAt'

Promocion.register();
