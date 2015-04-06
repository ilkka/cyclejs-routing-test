'use strict';
import Cycle from 'cyclejs';
let {Rx, h} = Cycle;

let View = Cycle.createView((Model) => (
    {
        vtree$: Model.get('title$').map(title =>
            h('div', [
                h('h1', title),
                h('p', 'Page 2 content here'),
                h('button.page1-btn', 'Go to page 1')
            ])
        )
    }
));

let Intent = Cycle.createIntent((User, Page2View) => (
    {
        goToPage1$: User.event$('.page1-btn', 'click')
    }
));

export {
    View as Page2View,
    Intent as Page2Intent
};
