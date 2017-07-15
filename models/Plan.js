var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Plan paciente model
 * ==========
 */

var Plan = new keystone.List('Plan',{
  singular:"Plan",
  plural:"Plan",
  label: 'Plan paciente',
  autokey: {path:"slug", from: "title", unique: true},
  map:{name:"title"}
});

Plan.add({
  title:{type:String, default:"Plan paciente"},
  imgBanner:{label:"Imagen banner:", type: Types.CloudinaryImage}
})

Plan.register();
