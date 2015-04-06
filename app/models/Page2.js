'use strict';
import Cycle from 'cyclejs';
let {Rx} = Cycle;

let Model = Cycle.createModel(Intent => (
    {
        title$: Rx.Observable.just('Page 2')
    }
));

export default Model;
