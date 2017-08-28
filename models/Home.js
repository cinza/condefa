var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home',{
  nocreate: true,
  singular:"Home",
  plural:"Home",
  label:"Inicio",
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:'title'}
});

Home.add({
  title: {type: String, default:"Inicio"},

  imageSlider1: {label: 'Imagen Carusel 1', type: Types.CloudinaryImage},
  textSlider1: {label: 'Texto Imagen Carusel 1', type: String},
  imageSlider2: {abel: 'Imagen Carusel 2', type: Types.CloudinaryImage},
  textSlider2: {label: 'Texto Imagen Carusel 2', type: String},
  imageSlider3: { label: 'Texto Imagen Carusel 3', type: Types.CloudinaryImage},
  textSlider3: {label: 'Texto Imagen Carusel 3', type: String},
  imageSlider4: { label: 'Texto Imagen Carusel 4', type: Types.CloudinaryImage},
  textSlider4: {label: 'Texto Imagen Carusel 4', type: String},

  bannerComercialImg:{label:"Imagen baner comercio", type: Types.CloudinaryImage},
  bannerNewsImg:{label:"Imagen baner noticias", type: Types.CloudinaryImage},
  bannerPlanImg:{label:"Imagen baner plan paciente", type: Types.CloudinaryImage},

  aboutImg:{label:"Imagen sobre nosotros:", type: Types.CloudinaryImage},
  purposesValue:{label:"Propuesta de valor", type: Types.Html, wysiwyg: true, height:300},
  history:{label:"Hitoria", type: Types.Html, wysiwyg: true, height:300},
  mision:{label:"Mision y vision",type: Types.Html, wysiwyg: true, height:300},
  values:{label:"Valores",type: Types.Html, wysiwyg: true, height:300},
  
  descripcionForm :{type: Types.Html, wysiwyg: true, height:300},
  createdAt: { type: Date, default: Date.now },
})


Home.defaultColumns = 'title, createdAt';
Home.register();
