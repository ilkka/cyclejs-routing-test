'use strict';
import Cycle from 'cyclejs';

let Model = Cycle.createModel(Intent => (
    {
        route$: Intent.get('changeRoute$').startWith('page1')
    }
));

export default Model;
