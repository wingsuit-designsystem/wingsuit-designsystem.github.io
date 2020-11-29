webpackJsonp([0xed8aa8815f72],{1381:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/ui_patterns/"],documentation:["/documentation/overview/","/documentation/mdx/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"SVGs",id:"svg"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables.",id:"globals"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal",id:"overview"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},{node:{fields:{slug:"/documentation/overview/"},frontmatter:{title:"Get started",id:"overview"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/documentation/mdx/"},frontmatter:{title:"MDX",id:"mdx"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"Wingsuit Kickstarter (with UI Patterns and Layout Builder)",id:"ui_patterns"}}}]},markdownRemark:{html:'<p>Drupal theming without a component based solution can be very frustrating, prone to errors and hard to maintain.</p>\n<p>It is very likely that you need to theme the same component more than once. Once you need your button inside as a field, next time you need the same button inside your node template. The solution most developer took is to copy the template and adjust them to their needs.\nYou distribute your component markup across the project and changes to a component must be done on several places inside your project.  </p>\n<p>This get even more worse if you use a modern CSS framework like tailwind where everything is configured through classes directly on the element.\nUsing tailwind without a component based architecture can you lead to the hell.</p>\n<p>Thinking in components makes it much easier to structure your layout. <a href="https://bradfrost.com/blog/post/atomic-web-design/">Atomic Design</a> or others helps you to structure your layout and makes it easier for every developer to follow the same path.    </p>\n<h2 id="presenter-template-vs-ui-patterns"><a href="#presenter-template-vs-ui-patterns" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Presenter template VS UI Patterns.</h2>\n<p>There are currently two solutions to solve the problem: The <code>presenter template</code> and the module UI Patterns.</p>\n<h3 id="presenter-template"><a href="#presenter-template" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Presenter template</h3>\n<p>The presenter template is a drupal theme template which <code>includes</code> the component template and provides all need variables.\nIf you need to theme your link field with the button component you create a field template <code>field--field-link.html.twig</code> and include the button component like this:</p>\n<pre><code class="language-twig">{% \n  include "@atoms/button/button.twig" with {"text": item.content[\'#title\'], "url": item.content[\'#url\'].toString() }\n%}\n</code></pre>\n<h3 id="ui-patterns"><a href="#ui-patterns" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>UI Patterns</h3>\n<p>With UI Patterns you can get rid of the presenter templates in most of the cases. UI Pattern expose a component data model to drupal. The site builder can use the Administration UI to map drupal data fields to templates.\nThis works not only with entities. Sub modules and contrib modules help to integrate nearly everything. </p>\n<p>Some of these modules:</p>\n<ul>\n<li>UI Patterns Views (submodule): To map <code>Views</code> fields to patterns.</li>\n<li>UI Patterns Display Suit (submodule): To map fields and entities to patterns.</li>\n<li>UI Patterns Fieldgroup (submodule): Create a fieldgroup and apply a template to the group.</li>\n<li><a href="https://www.drupal.org/project/ui_patterns_layout_builder">UI Patterns Layout Builder</a>: To use patterns with the layout builder.</li>\n<li><a href="https://www.drupal.org/project/ui_patterns_field_formatters">UI Patterns Field Formatters</a>: To map a pattern to a field. Very useful if you use layout builder instead of display suit.</li>\n<li><a href="https://www.drupal.org/project/ui_patterns_entity_links">UI Patterns Entity Links</a>: To render entity links with drupal. </li>\n</ul>\n<h2 id="how-to-integrate-your-pattern"><a href="#how-to-integrate-your-pattern" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How to integrate your pattern?</h2>\n<p>UI Pattern is the way to define a pattern, but how to map data to the pattern? </p>\n<p>Since Drupal 8.6 the Layout Builder is a stable. The Layout Builder has several advantages against older modules like Display Suit or Panels.</p>\n<ul>\n<li>It is Drupal Core</li>\n<li>You can add sections to each entity. Each section can have a pattern.</li>\n<li>The UI is much more intuitive than the old <code>Manage Display</code></li>\n<li>Editors can use the same patterns as the site builder.</li>\n</ul>',fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal",id:"overview"}}},pathContext:{slug:"/drupal/overview/"}}}});
//# sourceMappingURL=path---drupal-overview-35c425ee5258d4f5c1e8.js.map