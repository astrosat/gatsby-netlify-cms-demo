import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import StoriesPagePreview from './preview-templates/StoriesPagePreview'
import ModulesPagePreview from './preview-templates/ModulesPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PricingPagePreview from './preview-templates/PricingPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('stories', StoriesPagePreview)
CMS.registerPreviewTemplate('modules', ModulesPagePreview)
CMS.registerPreviewTemplate('pricing', PricingPagePreview)
