
import controller from './exploreController';

export default function (router) {

  router.route('/explore')

    .get(controller.get);
}
