'use strict';
import Cycle from 'cyclejs';
let {Rx, h} = Cycle;

let View = Cycle.createView((Model) => (
    {
        vtree$: Model.get('title$').map(title => {
            console.log('Page1View emitting DOM');
            return h('div', [
                h('h1', title),
                h('p', 'Page 1 content here'),
                h('button.page2-btn', 'Go to page 2')
            ]);
        })
    }
));

let Intent = Cycle.createIntent((User, Page1View) => (
    {
        goToPage2$: User.event$('.page2-btn', 'click').map(() => {
            console.log('.page2-btn clicked');
        })
    }
));

export {
    View as Page1View,
    Intent as Page1Intent
};
