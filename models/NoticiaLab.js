var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * NoticiaLab model
 * ==========
 */

var NoticiaLab = new keystone.List('NoticiaLab',{
  singular:"NoticiaLab",
  plural:"NoticiaLab",
  label:"Noticias Laboratorios",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:'title'}
});

var currentMonth = new Date;
currentMonth = currentMonth.getMonth()+1;
var currentYear = new Date;
currentYear = currentYear.getFullYear();

NoticiaLab.add({
  title:{label:"Nombre Noticia Laboratorio", type:String, default:"Noticia Laboratorio"},
  imgPromo:{label:"Imagen de noticia", type: Types.CloudinaryImage, required: true, default:""},
  imgPromoFull:{label:"Imagen de noticia tamaño completo:", type: Types.CloudinaryImage, required:true, default:""},
  urlVideoYoutube:{label:"URL video de Youtube", type:String},
  urlVideoVimeo:{label:"URL video de Vimmeo", type:String},
  description:{label:"Descripción pequeña", type:Types.Text},
  content:{label:"Contenido", type:Types.Html, wysiwyg: true, height:500,},
  category:{label:"Categoria", type: Types.Select, options: 'promocion,noticia', default:'noticia'},
  createdAt: { type: Date, default: Date.now, hidden:true },
  month:{type:Types.Number, default:currentMonth, noedit:true, hidden:true},
  year:{type:Types.Number, default:currentYear, noedit:true, hidden:true}
})

NoticiaLab.defaultColumns = 'title, category, createdAt'

NoticiaLab.register();
