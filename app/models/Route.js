'use strict';
import Cycle from 'cyclejs';

let Model = Cycle.createModel(Intent => (
    {
        route$: Intent.get('changeRoute$').map(page => {
            console.log(`RouteModel got ${page}`);
            return page;
        }).startWith('page1')
    }
));

export default Model;
