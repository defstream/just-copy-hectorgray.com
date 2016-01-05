'use strict';

import DOM from '../../dom';
import Themes from '../themes';
import Polyfills from '../../polyfills';

/**
 * @class VideoBackground
 * @description The VideoBackground represents a full page background video.
 */
class VideoBackground extends React.Component {
/**
 * renders the background video
 * @return {ReactNode} The video element
 */
  render(){
    return <video className='video-background' preload autoPlay loop poster={this.props.poster}><source src={this.props.src} type={this.props.type}/></video>;
  }
}

//@info Get the element from the DOM
var element = DOM.first(DOM.tag('video-background'));

//@info Render the Menu Bar
if(element) {
  var video = DOM.video.background(element);
  ReactDOM.render(< VideoBackground src={video.src} poster={video.poster} type={video.type} />, element);
}

//@export {VideoBackground}
export default VideoBackground;
