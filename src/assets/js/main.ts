// /*import*/
// import $ from 'jquery';
import './vue/App.js';
// import Common from './modules/common';
// import Sample from './modules/Sample';

// /*create instance*/
// const common = new Common();
// const sample = new Sample({
//     name: 'world'
// });
// /*load event*/
// document.addEventListener('DOMContentLoaded', () => {
//     common.init();
// })


// /*sample*/
// $('h1').on('click', () => {
//     console.log(`hello, ${sample.name}.`);
// });

'use strict';
import Model from './modules/model';

// tsconfig.json の esModuleInterop がtrueであれば以下の記述も可能
// import * as $ from 'jquery';
import $ = require('jquery');

let user = new Model.Person("Mike");

$(() => {
    $("#name").html(user.getName());

});