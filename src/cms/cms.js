/**
 * The default export of `netlify-cms` is an object with all of the Netlify CMS
 * extension registration methods, such as `registerWidget` and
 * `registerPreviewTemplate`.
 */
import CMS from 'netlify-cms-app';
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import cloudinary from 'netlify-cms-media-library-cloudinary';

CMS.registerPreviewTemplate('projects', ProjectPagePreview);
CMS.registerMediaLibrary(cloudinary);
// /**
//  * Any imported styles will automatically be applied to the editor preview
//  * pane, there is no need to use `registerPreviewStyle` for imported styles.
//  * All of the example imports below would result in styles being applied to the
//  * preview pane.
//  */
// import 'module-that-imports-styles.js'
// import 'styles.scss'
// import '../other-styles.css'

// /**
//  * Let's say you've created widget and preview components for a custom image
//  * gallery widget in separate files:
//  */
// import ImageGalleryWidget from './image-gallery-widget.js'
// import ImageGalleryPreview from './image-gallery-preview.js'

// /**
//  * Register the imported widget:
//  */
// CMS.registerWidget(`image-gallery`, ImageGalleryWidget, ImageGalleryPreview)
