webpackJsonp([21200481898654],{1385:function(t,e){t.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/ui_patterns/"],documentation:["/documentation/overview/","/documentation/mdx/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal",id:"overview"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/documentation/mdx/"},frontmatter:{title:"MDX",id:"mdx"}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"SVGs",id:"svg"}}},{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/documentation/overview/"},frontmatter:{title:"Get started",id:"overview"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"Wingsuit Kickstarter (with UI Patterns and Layout Builder)",id:"ui_patterns"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}}]},markdownRemark:{html:'<h2 id="prerequisites"><a href="#prerequisites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Prerequisites</h2>\n<ul>\n<li><a href="https://nodejs.org">Node <code>^12</code></a></li>\n<li><a href="https://classic.yarnpkg.com/">YARN <code>^1.22</code></a></li>\n<li><a href="https://php.net">PHP <code>^7.0.0</code></a></li>\n</ul>\n<p>Get started using the automated command line tool. This command creates a Wingsuit demo project.\nThe demo page uses the atomic design principle to structure the patterns.</p>\n<pre><code class="language-shell">npx @wingsuit-designsystem/cli init\n</code></pre>\n<p>With the <code>-k</code> option you can install other starter kits than Tailwind. At the moment tailwind is the most complete starter kit.\nTo install the (not ready) Bootstrap starter kit run: </p>\n<pre><code class="language-shell">npx @wingsuit-designsystem/cli init -k bootrap\n</code></pre>\n<p>After the installation succeeds, Storybook will open and you can browse the Wingsuit demo page.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-28cad.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 99.9074074074074%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACI0lEQVQ4y+2Uy27TQBSGE56EZ2DBCqn7RqIPAAKJN2DXFhJ4CUSoEFmxoFLW9aIrQEFqLiSkFKlccmsSk/geu0nG4/k549ghKGlpJJb80a85c86cTzOOx4kEqXJUv/G5/mXr5OR482OlkvpUq6Vq5HK5nKrQXFrGpVIpVSwW/zDlNqvV6hbVbyZi1U/LB4ajod3pwrBsDDUNGtmybZiWBdM0w3jkjuC6LtmbjZ5HNQucB9TbeRvzrn1vHSuWM0Sr0fEnEyYsyxaO44ggCEJzzsMRwJJJPo3QdEMCkyGw2jxTTEr2pxO/7XmC0apw8byRQvoFcClmYSxEICKFQN1YAB42vip1z0LZMfmRY8D2mVwju8gBwIEJmnhR2MDrwgOqMAQ8rgseAd/NgcO+qnj0jFzb5bJZhKebNcw2KYGneLh3HbnCbZqNMdMFwNNvbaXV7cMcefycETMIEIsxBl3X0Wl38WPwHj2rDm9E+2024PvhaZeBrU5PmVL6fOpzcgic7Q5QVRXZbBb5fB7Pn73EXvYV9vffIJfLYTwerwb21IEik4tARP/K76ODXhuHdsXm86i2DOz2f14AFPPmRchibTVQvRz4F68HvEz/gSuBPlnw6ENwRS3f5a46OJDJMeOMTDh5gXFVhxffMMw5MHnWVw8jIFiAtRQ/lqGmf4i/h8nH6cwt8r3tnd0727uP7u6sY+pJpzP3M0+ebsjTJgie+FeSrF+bg/AEPmFLfwAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="storybook" title src="/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-44d6a.png" srcset="/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-f4799.png 173w,\n/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-b3b1d.png 345w,\n/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-44d6a.png 690w,\n/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-bc0f7.png 1035w,\n/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-b50e5.png 1380w,\n/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-0ed32.png 2070w,\n/static/storybook-e8c7f6aa749cd74ba74dc60962bb7423-28cad.png 2160w" sizes="(max-width: 690px) 100vw, 690px">\n    </span>\n  </span>\n  \n  </a>\n    \n<h2 id="drupal"><a href="#drupal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Drupal</h2>\n<p>To get started with Drupal and UI Patterns use the Wingsuit Kickstarter.</p>\n<pre><code class="language-shell">composer create-project wingsuit-designsystem/wingsuit-kickstarter wingsuit-kickstarter --stability dev --no-interaction\n</code></pre>\n<h2 id="get-an-overview"><a href="#get-an-overview" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Get an overview</h2>\n<p>A good starting point is to take a look at the design system components, which you can find under <code>source/patterns/default</code>. Additional Storybook presentation templates are located at  <code>apps/storybook/patterns</code>.</p>\n<p>A typical component includes a <code>pattern.wingsuit.yml</code>, a <code>twig template</code>,  and optionally a <code>css file</code> and/or a <code>behavior javascript</code> file. </p>\n<div class="next-title">NEXT</div>\n<div class="next">\n<div class="next__content"><b>Drupal Kickstarter</b><br>with UI Patterns and Layout Builder</div>\n<a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" href="../../drupal/ui_patterns">Continue</a>\n</div>\n<div class="next">\n<div class="next__content"><b>Create a new component</b></div>\n<a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" href="../create-component-guide">Continue</a>\n</div>',fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},pathContext:{slug:"/guides/quick-start-guide/"}}}});
//# sourceMappingURL=path---guides-quick-start-guide-84abd5c0ac1bb4e44e60.js.map