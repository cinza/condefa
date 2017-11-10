var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Noticia model
 * ==========
 */

var NoticiaPaciente = new keystone.List('NoticiaPaciente',{
  singular:"NoticiaPaciente",
  plural:"NoticiaPaciente",
  label:"Noticias Plan Paciente",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:'title'}
});

var currentMonth = new Date;
currentMonth = currentMonth.getMonth()+1;
var currentYear = new Date;
currentYear = currentYear.getFullYear();

NoticiaPaciente.add({
  title:{label:"Nombre Noticia", type:String, default:"Noticia"},
  imgPromo:{label:"Imagen de noticia 350x280px", type: Types.CloudinaryImage, required: true, default:""},
  imgPromoFull:{label:"Imagen de noticia tamaño completo:", type: Types.CloudinaryImage, required:true, default:""},
  urlVideoYoutube:{label:"URL video de Youtube ", type:String},
  description:{label:"Descripción, máximo 100 caracteres", type:Types.Text, max: 100},
  content:{label:"Contenido", type:Types.Html, wysiwyg: true, height:500,},
  category:{label:"Categoria", type: Types.Select, options: 'laboratorio, medicina, producción, otros, farmacia, noticia', default:'farmacia'},
  createdAt: { type: Date, default: Date.now, hidden:true },
  month:{type:Types.Number, default:currentMonth, noedit:true, hidden:true},
  year:{type:Types.Number, default:currentYear, noedit:true, hidden:true}
})

NoticiaPaciente.defaultColumns = 'title, category, createdAt'

NoticiaPaciente.register();
