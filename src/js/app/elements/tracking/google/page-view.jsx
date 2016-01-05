'use strict';

import DOM from '../../../dom';

/**
 * @class GoogleAnalytics
 * @description The GoogleAnalytics component delivers a pageview beacon to the googs.
 */
class GoogleAnalytics extends React.Component {

  createTag(id) {
    const ga = document.createElement('script');
    ga.async = true;
    ga.type = 'text/javacsript';
    ga.src = '//www.google-analytics.com/analytics.js';
    var head = DOM.first(DOM.tag('body'));
    if(head) {
      head.appendChild(ga);
    }
    window.ga('create', id, 'auto');
  }

  componentDidMount() {
    this.createTag(this.props.id);
    window.ga('send', 'pageview');
  }

/**
 * renders the Google Page View Tracking script
 * @return {ReactNode} The menu bar
 */
  render(){
    return <script></script>;
  }
}

var element = DOM.first(DOM.tag('google-page-view'));
if(element&&!window.ga){
  window.ga = window.ga || function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date; // eslint-disable-line
  var id = DOM.attr('id', element);
  //@info Render the element
  ReactDOM.render(< GoogleAnalytics id={id}/>, element);
}
//@export {GoogleAnalytics}
export default GoogleAnalytics;
