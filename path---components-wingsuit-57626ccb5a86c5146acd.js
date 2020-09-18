webpackJsonp([77435175060493],{753:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"Svgs",id:"svg"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Pattern)",id:"wingsuit"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables.",id:"globals"}}}]},markdownRemark:{html:'<p>The wingsuit pattern is defined inside a <code>pattern.wingsuit.yml</code>. </p>\n<p><b>A Wingsuit component contains:</b></p>\n<ul>\n<li>index.js</li>\n<li>pattern.stories.jsx</li>\n<li>pattern.wingsuit.yml</li>\n<li>css file (optional)</li>\n<li>javascript file. (optional)</li>\n</ul>\n<p>Expose the reference to the <code>wingsuit.yml</code> file inside the <code>pattern.stories.jsx</code> file.</p>\n<pre><code class="language-js">const patternDefinition = require(\'./pattern.wingsuit.yml\');\n\nexport const wingsuit = {\n  patternDefinition,\n};\n</code></pre>\n<h3 id="the-patternwingsuityml"><a href="#the-patternwingsuityml" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>The pattern.wingsuit.yml</h3>\n<p>The <code>pattern.wingsuit.yml</code> is a extended version of the <a href="https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html">UI Patterns yaml</a> with additions of <a href="https://www.drupal.org/project/ui_patterns_settings">UI Patterns Settings</a></p>\n<p>A typical pattern definition file looks like:</p>\n<pre><code class="language-yaml">card:\n  use: "@molecules/card/card.twig"\n  label: Card\n  description: Amazing Cards\n  fields:\n    headline:\n      type: text\n      label: Headline\n      preview:\n        faker: lorem.word\n    image:\n      type: pattern\n      preview:\n        id: image\n        variant: primary\n  variants:\n    default:\n      label: Default\n    horizontal:\n      label: Horizontal\n  settings:\n    headline_color:\n      type: select\n      label: Headline color\n      required: false\n      options:\n        blue: Blue\n        black: Black\n</code></pre>\n<ul>\n<li>Each <code>variant</code> is a storybook story. </li>\n<li>Each <code>field</code> is editable with knobs and passed to the Twig template.</li>\n<li>Each <code>Setting</code> is editable with knobs and passed to the Twig template.</li>\n</ul>\n<p><b>Let’s look at the extensions:</b></p>\n<h3 id="faker"><a href="#faker" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>faker</h3>\n<p>The <code>faker</code> key generates automatic preview data with <a href="https://github.com/marak/Faker.js/">faker.js</a>.\nThe value can be a string or a subobject. </p>\n<ul>\n<li>The string is passed to Faker.fake in ’{{ }}’ brakets;</li>\n<li>\n<p>To pass a complete Faker sentences use:</p>\n<pre><code class="language-yaml">preview:\n  faker:\n    token: "{{ name.lastName }} {{ name.firstName }}\n</code></pre>\n</li>\n</ul>\n<h3 id="field-extensions"><a href="#field-extensions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>field extensions:</h3>\n<h4 id="type-pattern"><a href="#type-pattern" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>type pattern</h4>\n<p>With field type <code>pattern</code> you can render patterns inside the pattern.</p>\n<pre><code class="language-yaml">  fields:  \n    image:\n      type: pattern\n      preview:\n        id: image\n        variant: primary\n        settings:\n          style: medium\n        fields:\n          field: value\n</code></pre>\n<ul>\n<li><code>id</code> The id of the pattern.</li>\n<li><code>variant</code> The variant of the pattern.</li>\n<li><code>fields</code> Overwrite fields preview values of the pattern.</li>\n<li><code>settings</code> Overwrite setting preview values of the pattern.</li>\n</ul>\n<h4 id="type-object"><a href="#type-object" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>type object</h4>\n<pre><code class="language-yaml">  fields:  \n    items:\n      type: object\n      preview:\n        - title: Datenschutz\n          link: "#"\n          in_active_trail: true\n        - title: Impressum\n          link: "#"\n</code></pre>\n<p>With field type <code>object</code> you can pass any objects to the twig template. This is useful for the menu, for example. You can edit the JSON string with knobs.</p>\n<h3 id="visibility"><a href="#visibility" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Visibility</h3>\n<p>@TODO: Write an explanation</p>\n<pre><code class="language-yaml">visibility: storybook | drupal | none\n</code></pre>',fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Pattern)",id:"wingsuit"}}},pathContext:{slug:"/components/wingsuit/"}}}});
//# sourceMappingURL=path---components-wingsuit-57626ccb5a86c5146acd.js.map