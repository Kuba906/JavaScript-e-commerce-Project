import './styles/style.scss';
import $ from 'jquery';
global.jQuery = $;
global.$ = $;

import Popper from 'popper.js'
global.Popper = Popper
import 'bootstrap';

import script from './script.js'

script();