//--------------- leafv modules --------------------
import BaseMap from 'src/map/BaseMap';
import config from './config';

/**
 * AMap is https://www.amap.com/
 */
class AMap extends BaseMap {
   constructor(...args) {
      super(...args);

      this.config = config;
      this.tileLayerOpts = Object.assign({}, this.tileLayerOpts, config.tileLayerOpts);
   }
}

export default AMap;