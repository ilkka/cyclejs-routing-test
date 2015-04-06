'use strict';
require('./styles/main.scss');

import Cycle from 'cyclejs';
let {Rx, h} = Cycle;

import {RouteView, RouteIntent} from './views/Route';
import RouteModel from './models/Route';
import {Page1View, Page1Intent} from './views/Page1';
import Page1Model from './models/Page1';
import {Page2View, Page2Intent} from './views/Page2';
import Page2Model from './models/Page2';

let User = Cycle.createDOMUser('#app');

// Build the structure from
// https://github.com/staltz/cycle/blob/master/docs/faq.md#how-to-implement-routing-and-manage-different-pages

RouteIntent.inject(Page1Intent, Page2Intent);

Page1Model.inject(Page1Intent);
Page2Model.inject(Page2Intent);

Page1View.inject(Page1Model);
Page2View.inject(Page2Model);

Page1Intent.inject(User, Page1View);
Page2Intent.inject(User, Page2View);

RouteModel.inject(RouteIntent);

User.inject(RouteView)
    .inject(RouteModel, Page1View, Page2View);
