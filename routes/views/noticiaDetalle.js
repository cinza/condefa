var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var currentMonth = new Date().getMonth()+1;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'detalle';
	locals.filters ={
    promo: req.params.promo,
    category:"",
    month:""
  }
  locals.data ={
    promo:[],
    promosRelacionadas:[],
    promosMes:[],
    category:'Salud al día'
  }

  view.on('init', function(next){
    var q = keystone.list('Noticia').model.findOne({
      slug: locals.filters.promo
    });

    q.exec(function(err, result){
      locals.data.promo = result;
      locals.filters.category = result.category;
      locals.filters.month = result.month;
      next(err);
    });

  });

  view.on('init', function(next){
    var q = keystone.list('Noticia').model.find({
      category: locals.filters.category,
      slug : {$ne: locals.filters.promo}
    }).limit(4);

    q.exec(function(err, result){
      locals.data.promosRelacionadas = result;
      next(err);
    });

  });

  view.on('init', function(next){
    var q = keystone.list('Noticia').model.find({
      month: currentMonth,
      slug : {$ne: locals.filters.promo}
    }).limit(4);

    q.exec(function(err, result){
			console.log("Noticias mes", result);
      locals.data.promosMes = result;
      next(err);
    });

  });
	// Render the view
	view.render('detail');
};
