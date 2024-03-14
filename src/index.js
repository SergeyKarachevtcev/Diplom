'use strict';

import modal from './modules/modal';

import anchorLink from './modules/anchorLink';

import hiddenElement from './modules/hiddenElement';

import accordion from './modules/accordion';

import sendForm from './modules/sendForm';

import slider from './modules/slider';

import servicesCarousel from './modules/servicesCarousel';

import validation from './modules/validation';

modal();
anchorLink();
hiddenElement();
accordion();
sendForm({ formId: 'form1', sumeElem: [] });
slider();
servicesCarousel();
validation();
