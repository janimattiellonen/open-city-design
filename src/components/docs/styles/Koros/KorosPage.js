/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */

import React from 'react';
import Helmet from 'react-helmet';
import Markdown from 'react-remarkable';

import WelcomeSmall from '../../../WelcomeSmall';
import CodeBlock from '../../../CodeBlock/CodeBlock';
import CodeCollapse from '../../../CodeCollapse/CodeCollapse';
import Koros from './Koros';


const Documentation = require('!!raw-loader!./Koros.md');
const css = require('!!raw-loader!../../../../scss/helsinki/_custom-styles.scss')


const welcome = {
  heading: 'Koros',
  paragraph: 'Koros are the shapes interlacing two colored sections.'

}


export default class KorosPage extends React.Component {
  render() {
      return (
            <div>
                  <Helmet title="Koros" />

                  <WelcomeSmall welcome={welcome} />

                  <article className="docs-markdown">
                        <Markdown source={Documentation} />
                  </article>

                  <h2>Koro shapes</h2>

                  <div className="docs-example">
                        <Koros />
                  </div>

                  <h3>Sources</h3>
                  <h4>SCSS</h4>
                  <CodeCollapse>
                        <CodeBlock code={css} language="css">
                        </CodeBlock>
                  </CodeCollapse>
            </div>
      );
  }
}
