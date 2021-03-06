/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);

	// app.get('/valores-agregados', routes.views.promocion);
	// app.get('/valores-agregados/:promo', routes.views.promo);
	app.get('/salud-al-dia', routes.views.noticia);
	app.get('/salud-al-dia/:promo', routes.views.noticiaDetalle);

	app.get('/plan-paciente', routes.views.planPaciente);
	app.get('/plan-paciente/:promo', routes.views.planPacienteDetalle);

	app.get('/socio-laboratorio', routes.views.socioLaboratorio);


	app.get('/socio', routes.views.socio);
	app.get('/socio/:promo', routes.views.socioDetalle);

	app.get('/laboratorio', routes.views.laboratorio);
	app.get('/laboratorio/:promo', routes.views.laboratorioDetalle);

	// app.get('/socio-laboratio', routes.views.socioLaboratio);
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
