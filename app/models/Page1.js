'use strict';
import Cycle from 'cyclejs';
import Swarm from 'swarm';

let {Rx} = Cycle;

let _ModelClass = Swarm.Model.extend('Page1Model', {
    defaults: {
        title: 'Page 1',
        things: [
            'Foo', 'Bar', 'Baz'
        ]
    }
});

let _model = new _ModelClass();

function setArgsToObj(h) {
    return function(spec, val, source) {
        h({
            spec,
            val,
            source
        });
    };
}

let Model = Cycle.createModel(Intent => (
    {
        title$: Rx.Observable.fromEventPattern(
            (h) => {
                _model.on('set', h);
            },
            (h) => {
                _model.off('set', h);
            }
        ).map((whatevs) => {
            console.log(whatevs);
            return 'foo!'
        })
    }
));

export default Model;
