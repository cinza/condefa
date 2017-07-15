var keystone = require('keystone');
var Plan = keystone.list('NoticiaPaciente');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'plan';
  locals.data = {
    planPaciente:[]
  };

	view.query('plan', keystone.list('Plan').model.find());

  view.on('init', function(next){
    Plan.paginate({
      page: req.query.page || 1,
      perPage: 9,
      maxPages: 10
    })
    .sort('-createdAt')
    .exec(function(err, results){
      locals.data.planPaciente = results;
      next(err);
    });
  });

	// Render the view
	view.render('planPaciente');
};
