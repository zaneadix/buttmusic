
import Model from 'ampersand-model';
import dispatcher from './../../dispatcher';

class TrackModel extends Model {

  get props () {

    return {

      title: 'string'
    }
  }

  constructor () { super(); }

  parse (data) {

    console.log('CREATING');

    this.title = data.title;

    console.log(this.title);
  }
}

export default TrackModel;
