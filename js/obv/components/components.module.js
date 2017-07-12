/**
 * OBV Components module
 * This module is the container reference for all reusable components.
 */

import ObvThumbnailLinksModule from './thumbnail-links/thumbnail-links.module';

export const ObvComponentsModule = angular
    .module('obvComponents', [
        ObvThumbnailLinksModule
    ])
    .name;
