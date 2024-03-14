'use strict';

import modal from './modules/modal';

import anchorLink from './modules/anchorLink';

import hiddenElement from './modules/hiddenElement';

import accordion from './modules/accordion';

import sendForm from './modules/sendForm';

import slider from './modules/slider';

modal();
anchorLink();
hiddenElement();
accordion();
sendForm({ formId: 'form1', sumeElem: [] });
slider();
