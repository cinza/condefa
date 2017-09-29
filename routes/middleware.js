/**
 * This file contains the common middleware used by your routes.
 *
 * Extend or replace these functions as your application requires.
 *
 * This structure is not enforced, and just a starting point. If
 * you have more middleware you may want to group it as separate
 * modules in your project's /lib directory.
 */
var _ = require('lodash');


/**
	Initialises the standard view locals

	The included layout depends on the navLinks array to generate
	the navigation in the header, you may wish to change this array
	or replace it with your own templates / logic.
*/
exports.initLocals = function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Inicio', key: 'home', href: '/' },
		{ label: 'Quienes somos', key: 'contact', href: '#about' },
		{ label: 'Farmacias', key:'farmacy' , href:'#map-findus'},
		{label: 'Contacto', key:'contact', href:'#contact'},
		{label:'Socios y Laboratorios', key:'socioLab', href:'/socio-laboratorio'}
	];
	res.locals.socioLinks = [
		{label: 'Inicio', key:'home', href:'/'},
		{label: 'Ingreso', key:'login', href:'#login-socio-laboratorio'},
		{label: 'Socios', key:'socio', href:'#socio'},
		{label: 'laboratorios', key:'laboratorio', href:'#laboratorio'},
	];
	res.locals.internal = [
		{label:'Inicio',key:'home', href:'/'},
		{label:'Condefa Online',key:'online', href:'http://ce.farmaciascondefa.com/co/modulos/m_inicio.aspx'}
	];
	res.locals.user = req.user;

	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};

// exports.requireUserType = function(req, res,next){
// 	if(res.locals.user)
// }
