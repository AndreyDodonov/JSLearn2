'use strict';

/* polifills */
import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window); // не самовызывающийся полифил
import 'formdata-polyfill';
import 'fetch-polyfill';


/* imports */

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/popup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import teamPhoto from './modules/ourTeam';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';
import getValidUserData from './modules/validation';

/* TIMER */
countTimer('10 august 2019');
/* MENU */
toggleMenu();
/* POPUP */
togglePopup();
/* TABS */
tabs();
/* SLIDER */
slider();
/* OUR TEAM */
teamPhoto();
/* CALCUTATOR */
calculator();
/* SEND FORM AJAX */
sendForm();
/* VALIDATION */
getValidUserData();