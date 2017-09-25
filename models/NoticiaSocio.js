var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * NoticiaSocio model
 * ==========
 */

var NoticiaSocio = new keystone.List('NoticiaSocio',{
  singular:"NoticiaSocio",
  plural:"NoticiaSocio",
  label:"Noticia Socios",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:'title'}
});

var currentMonth = new Date;
currentMonth = currentMonth.getMonth()+1;
var currentYear = new Date;
currentYear = currentYear.getFullYear();

NoticiaSocio.add({
  title:{label:"Noticias Socio", type:String, default:"Noticias Socio"},
  imgPromo:{label:"Imagen de noticia", type: Types.CloudinaryImage, required: true, default:""},
  imgPromoFull:{label:"Imagen de noticia tamaño completo:", type: Types.CloudinaryImage, required:true, default:""},
  urlVideoYoutube:{label:"URL video de Youtube", type:String},
  urlVideoVimeo:{label:"URL video de Vimmeo", type:String},
  description:{label:"Descripción pequeña", type:Types.Text},
  content:{label:"Contenido", type:Types.Html, wysiwyg: true, height:500,},
  category:{label:"Categoria", type: Types.Select, options: 'noticia,promocion', default:'noticia'},
  createdAt: { type: Date, default: Date.now, hidden:true },
  month:{type:Types.Number, default:currentMonth, noedit:true, hidden:true},
  year:{type:Types.Number, default:currentYear, noedit:true, hidden:true}
})

NoticiaSocio.defaultColumns = 'title, category, createdAt'

NoticiaSocio.register();
