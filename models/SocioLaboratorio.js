var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Socio y laboratio model
 * ==========
 */

var SocioLaboratorio = new keystone.List('SocioLaboratorio',{
  singular:"SocioLaboratrio",
  plural:"SocioLaboratrio",
  label:"Socios y Laboratorio",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:'title'}
});

SocioLaboratorio.add({
  title: {type: String, default:"Socios y Laboratorio"},
  imgBanner: {label: 'Imagen Banner', type: Types.CloudinaryImage},

  textSocios: {label: 'Titulo Socios', type: String},
  contenidoSocios:{label:"Contenido Socios:", type:Types.Html, wysiwyg: true, height:500,},
  imgSocio:{label: 'Imagen Socio', type: Types.CloudinaryImage},

  textLaboratorios: {label: 'Titulo Laboratio', type: String},
  contenidoLaboratorios:{label:"Contenido Laboratorio:", type:Types.Html, wysiwyg: true, height:500,},
  imgLaboratorio:{label: 'Imagen Laboratorio', type: Types.CloudinaryImage},
  gallerySocios:{label:'Galeria logos socios 100px x 100px:', type: Types.CloudinaryImages},
  createdAt: { type: Date, default: Date.now },
})


SocioLaboratorio.defaultColumns = 'title, createdAt';
SocioLaboratorio.register();
