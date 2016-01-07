'use strict';

import DOM from '../../../dom';

/**
 * @class GoogleAnalytics
 * @description The GoogleAnalytics component delivers a pageview beacon to the googs.
 */
class GoogleAnalytics extends React.Component {

  initialize(id) {
    if(window.googleAnalytics) return;
    (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'googleAnalytics');
    window.googleAnalytics = googleAnalytics;
    window.googleAnalytics('create', id, 'auto');
  }

  componentDidMount() {
    this.initialize(this.props.id);
    return window.googleAnalytics('send', 'pageview');
  }

/**
 * renders the Google Page View Tracking script
 * @return {ReactNode} The menu bar
 */
  render(){
    return null;
  }
}

document.addEventListener('DOMContentLoaded', function(event) {
  var element = DOM.first(DOM.tag('google-page-view'));
  if(element){
    var id = DOM.attr('id', element);
    ReactDOM.render(< GoogleAnalytics id={id} />, element);
  }
});

//@export {Function}
export default function send(event, data) {
  if(window.googleAnalytics) {
    return window.googleAnalytics('send', event, data);
  }
};
