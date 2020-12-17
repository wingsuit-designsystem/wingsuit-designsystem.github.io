webpackJsonp([77435175060493],{1373:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/ui_patterns/"],documentation:["/documentation/overview/","/documentation/mdx/"],testing:["/testing/visual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"SVGs",id:"svg"}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/documentation/overview/"},frontmatter:{title:"Get started",id:"overview"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/documentation/mdx/"},frontmatter:{title:"MDX",id:"mdx"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal",id:"overview"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/testing/visual-testing/"},frontmatter:{title:"Visual Testing",id:"visual-testing"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"Wingsuit Kickstarter (with UI Patterns and Layout Builder)",id:"ui_patterns"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}}]},markdownRemark:{html:'<p>The wingsuit pattern is defined inside a <code>pattern.wingsuit.yml</code>. </p>\n<p><b>A Wingsuit component contains:</b></p>\n<ul>\n<li>index.js</li>\n<li>pattern.stories.jsx</li>\n<li>pattern.wingsuit.yml</li>\n<li>css file (optional)</li>\n<li>javascript file. (optional)</li>\n</ul>\n<p>Expose the reference to the <code>wingsuit.yml</code> file inside the <code>pattern.stories.jsx</code> file.</p>\n<pre><code class="language-js">const patternDefinition = require(\'./pattern.wingsuit.yml\');\n\nexport const wingsuit = {\n  patternDefinition,\n};\n</code></pre>\n<h3 id="the-patternwingsuityml"><a href="#the-patternwingsuityml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The pattern.wingsuit.yml</h3>\n<p>The <code>pattern.wingsuit.yml</code> is a extended version of the UI Patterns yaml. Check out the <a href="https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html">UI Patterns documentation</a> with additions of <a href="https://www.drupal.org/project/ui_patterns_settings">UI Patterns Settings</a></p>\n<p>A typical pattern definition file looks like this:</p>\n<pre><code class="language-yaml">card:\n  use: "@molecules/card/card.twig"\n  label: Card\n  description: Amazing Cards\n  fields:\n    headline:\n      type: text\n      label: Headline\n      preview:\n        faker: lorem.word\n    image:\n      type: pattern\n      preview:\n        id: image\n        variant: primary\n  variants:\n    default:\n      label: Default\n    horizontal:\n      label: Horizontal\n  settings:\n    headline_color:\n      type: select\n      label: Headline color\n      required: false\n      options:\n        blue: Blue\n        black: Black\n</code></pre>\n<ul>\n<li>Each <code>variant</code> is a storybook story. </li>\n<li>Each <code>field</code> is editable with knobs and passed to the Twig template.</li>\n<li>Each <code>setting</code> is editable with knobs and passed to the Twig template.</li>\n</ul>\n<h2 id="the-extensionsb"><a href="#the-extensionsb" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The extensions</b></h2>\n<p>To build better preview functionality Wingsuit adds additional YAML configuration. This extensions are <em>not</em> compatible with UI Patterns Library.   </p>\n<h3 id="faker"><a href="#faker" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Faker</h3>\n<p>The <code>faker</code> key generates automatic preview data with <a href="https://github.com/marak/Faker.js/">faker.js</a>.\nThe value can be a string or a subobject. </p>\n<ul>\n<li>The string is passed to Faker.fake in ’{{ }}’ brackets.</li>\n<li>\n<p>To pass a complete Faker sentences use:</p>\n<pre><code class="language-yaml">preview:\n  faker:\n    token: "{{ name.lastName }} {{ name.firstName }}\n</code></pre>\n</li>\n</ul>\n<h3 id="type-pattern"><a href="#type-pattern" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Type: pattern</h3>\n<p>With field type <code>pattern</code> you can render patterns inside the pattern:</p>\n<pre><code class="language-yaml">fields:  \n  image:\n    type: pattern\n    preview:\n      id: image\n      variant: primary\n      settings:\n        style: medium\n      fields:\n        field: value\n</code></pre>\n<ul>\n<li><code>id</code> The id of the pattern.</li>\n<li><code>variant</code> The variant of the pattern.</li>\n<li><code>fields</code> Overwrites fields preview values of the pattern.</li>\n<li><code>settings</code> Overwrites setting preview values of the pattern.</li>\n</ul>\n<h3 id="pattern-list"><a href="#pattern-list" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pattern list</h3>\n<p>This works also with a list of patterns. </p>\n<pre><code class="language-yaml">fields:  \n  images:\n    type: pattern\n    multi_value_type: single_value\n    preview:\n      -\n        id: image\n        variant: primary\n        settings:\n          style: medium\n        fields:\n          field: value\n      -\n        id: image\n        variant: primary\n        settings:\n          style: medium\n        fields:\n          field: value\n</code></pre>\n<p>You can control how Wingsuit will handle the resulting array of objects.</p>\n<h4 id="following-options-are-available"><a href="#following-options-are-available" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Following options are available:</h4>\n<ul>\n<li>\n<p><code>single_value</code>: All patterns will rendered into a single value. The resulting variable is a string not a array. This useful if you to add multiple objects into one area.\n<br>Your pattern.twig looks like:</p>\n<pre><code class="language-twig">{{ images }}\n</code></pre>\n</li>\n<li>\n<p><code>items</code> provides a list of patterns. The resulting variable is an array you can loop through.</p>\n<h4 id="your-patterntwig-looks-like"><a href="#your-patterntwig-looks-like" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Your pattern.twig looks like:</h4>\n<pre><code class="language-twig">{% for item in images %}\n{{ item }}\n{% endfor %}\n</code></pre>\n</li>\n<li>\n<p><code>field_items</code> provides a list of objects. The rendered pattern is inside the content key. This is useful to emulate multi value field templates in drupal.</p>\n<pre><code class="language-twig">{% for item in images %}\n{{ item.content }}\n{% endfor %}\n</code></pre>\n</li>\n</ul>\n<h3 id="type-object"><a href="#type-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Type object</h3>\n<pre><code class="language-yaml">fields:  \n  items:\n    type: object\n    preview:\n      - title: Datenschutz\n        link: "#"\n        in_active_trail: true\n      - title: Impressum\n        link: "#"\n</code></pre>\n<p>With field type <code>object</code> you can pass any objects to the Twig template. This is useful for the menu, for example. You can edit the JSON string with knobs.</p>\n<h3 id="visibility"><a href="#visibility" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Visibility</h3>\n<p>With the visibility property you can control in which app a pattern should be visible. If the property is not set, the pattern is visible in every app. </p>\n<pre><code class="language-yaml">visibility: storybook | drupal | none\n</code></pre>',fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},pathContext:{slug:"/components/wingsuit/"}}}});
//# sourceMappingURL=path---components-wingsuit-94a0db02f0d189013ebf.js.map