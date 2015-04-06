'use strict';
import Cycle from 'cyclejs';
let {Rx, h} = Cycle;

let View = Cycle.createView((Model, Page1, Page2) => (
    {
        vtree$: Model.get('route$').flatMap(route => {
            console.log(`RouteView got ${route}`);
            return Rx.Observable.merge(
                Page1.get('vtree$').filter(() => route === 'page1'),
                Page2.get('vtree$').filter(() => route === 'page2')
            );
        })
    }
));

let Intent = Cycle.createIntent((Page1Intent, Page2Intent) => (
    {
        changeRoute$: Rx.Observable.merge(
            Page1Intent.get('goToPage2$').map(() => {
                console.log('RouteIntent: to page2');
                return 'page2';
            }),
            Page2Intent.get('goToPage1$').map(() => 'page1')
        )
    }
));

export {
    View as RouteView,
    Intent as RouteIntent
};
