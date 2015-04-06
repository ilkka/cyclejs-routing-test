'use strict';
import Cycle from 'cyclejs';
let {Rx, h} = Cycle;

let View = Cycle.createView((Model, Page1, Page2) => (
    {
        vtree$: Model.get('route$').combineLatest(
            Page1.get('vtree$'),
            Page2.get('vtree$'),
            (route, page1, page2) =>
                route === 'page1' ? page1 : page2
        )
    }
));

let Intent = Cycle.createIntent((Page1Intent, Page2Intent) => (
    {
        changeRoute$: Rx.Observable.merge(
            Page1Intent.get('goToPage2$').map(() => 'page2'),
            Page2Intent.get('goToPage1$').map(() => 'page1')
        )
    }
));

export {
    View as RouteView,
    Intent as RouteIntent
};
