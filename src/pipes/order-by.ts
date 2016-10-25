import {Injectable, Pipe} from '@angular/core';

import _ from 'underscore';

@Pipe({
    name: 'orderBy'
})
@Injectable()
export class OrderBy {

    transform(value, args) {
        return _.sortBy(value, args);
    }
}
