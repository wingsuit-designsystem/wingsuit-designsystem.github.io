webpackJsonp([0xe1e4bcdf92ee],{1368:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/ui_patterns/"],documentation:["/documentation/overview/","/documentation/mdx/"],testing:["/testing/visual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"SVGs",id:"svg"}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/documentation/overview/"},frontmatter:{title:"Get started",id:"overview"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/documentation/mdx/"},frontmatter:{title:"MDX",id:"mdx"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables",id:"globals"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal",id:"overview"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/testing/visual-testing/"},frontmatter:{title:"Visual Testing",id:"visual-testing"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"Wingsuit Kickstarter (with UI Patterns and Layout Builder)",id:"ui_patterns"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}}]},markdownRemark:{html:'<p>Wingsuit is a design system for Twig based UI components. You can develop your components independently in <a href="https://storybook.js.org/">Storybook</a>. After finalizing your component, you can use it in other apps like Drupal. </p>\n<h2 id="features"><a href="#features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Features</h2>\n<ul>\n<li>\n<h3 id="define-your-component-once"><a href="#define-your-component-once" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Define your component once</h3>\n<p>The <code>wingsuit.yml</code>, an extended variant of the <a href="https://ui-patterns.readthedocs.io/en/8.x-1.x/content/patterns-definition.html">ui_patterns.yml</a>, is the heart of each component.\nWingsuit reads the YAML to generate components, stories, fields and settings in Storybook. The same file is used by UI Patterns.  </p>\n</li>\n<li>\n<h3 id="use-ui-patterns-or-not"><a href="#use-ui-patterns-or-not" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Use UI Patterns or not</h3>\n<p>With the  <a href="https://www.drupal.org/project/wingsuit_companion">wingsuit_companion</a> module, your <code>wingsuit.yml</code> can be used with zero configuration in Drupal. Of course, you can use the wingsuit.yml only in Storybook and use presenter template in your CMS. Wingsuit works also with plain Twig files.</p>\n</li>\n<li>\n<h3 id="editable-settings-and-fields"><a href="#editable-settings-and-fields" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Editable settings and fields</h3>\n<p>Fields and settings are editable with <a href="https://github.com/storybookjs/storybook/tree/master/addons/knobs">knobs</a>. Knobs makes it easy to see your component in every state.</p>\n</li>\n<li>\n<h3 id="subcomponents"><a href="#subcomponents" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Subcomponents</h3>\n<p>Wingsuit supports subcomponents out of the box. Reference your subcomponent in your wingsuit.yml.</p>\n</li>\n<li>\n<h3 id="presentation-templates"><a href="#presentation-templates" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Presentation templates</h3>\n<p>Wingsuit offers twig helper function to build complete pages for preview.</p>\n</li>\n<li>\n<h3 id="demonstration-helper"><a href="#demonstration-helper" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demonstration helper</h3>\n<p>Wingsuit offers a lot of additional helpers like <a href="../../assets/images#placeholder-images">placeholder images with image styles</a>, <a href="../../components/wingsuit#faker">faker</a>, <a href="../../components/wingsuit#pattern-list">pattern lists</a> to make it easy to generate demo patterns.</p>\n</li>\n<li>\n<h3 id="starter-kits-for"><a href="#starter-kits-for" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Starter kits for:</h3>\n<ul>\n<li><a href="https://tailwindcss.com/">Tailwind CSS</a> with <a href="https://github.com/alpinejs/alpine">Alpine.js</a>.</li>\n<li><a href="https://getbootstrap.com/">Bootstrap</a><br>\nYou can <a href="../../configurations/custom-webpack-config">customize</a> the webpack configuration and integrate your favorite frontend frameworks. </li>\n</ul>\n</li>\n<li>\n<h3 id="storybook-documentation"><a href="#storybook-documentation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Storybook documentation</h3>\n<p>Wingsuit generates a documentation page directly from the winguit.yml. For more detailed documentation use Storybook MDX. </p>\n</li>\n<li>\n<h3 id="drupal-integration"><a href="#drupal-integration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Drupal integration</h3>\n<p>With the <a href="https://www.drupal.org/project/wingsuit_companion">wingsuit_companion</a> module, patterns can be used with zero configuration in Drupal. </p>\n</li>\n<li>\n<h3 id="stay-in-sync"><a href="#stay-in-sync" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Stay in sync</h3>\n<p>One big challenge for design systems is to stay in sync between documentation and implementation.\nWingsuit solves this problem with a common component configuration <code>wingsuit.yml</code> and webpack plugins which provides framework data as variables.\nSo there is no need to update the colors documentation if you change your colors in TailwindCSS.</p>\n</li>\n<li>\n<h3 id="well-predefined-components"><a href="#well-predefined-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Well predefined components</h3>\n<p>Wingsuit uses <a href="https://mertjf.github.io/tailblocks/">tailblocks</a> for predefined components. So it is very easy to adjust them and if you don’t need them simple delete them.</p>\n</li>\n<li>\n<h3 id="incredible-fast-and-compatible-with-php-twig"><a href="#incredible-fast-and-compatible-with-php-twig" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Incredible fast and compatible with PHP Twig</h3>\n<p>It takes around <code>1 second</code> from save to see your changes in Storybook. Wingsuit uses client side <a href="https://github.com/NightlyCommit/twing">twing</a> and Postcss.\nTwing is nearly 100% compatible with PHP Twig. We had tested it with really large Drupal projects. </p>\n</li>\n</ul>\n<div class="next-title">FEEDBACK</div>\n<div class="next">\n    <div class="next__content"><b>Open an issue</b><br> if you miss something or something is not working. </div>\n    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://github.com/wingsuit-designsystem/wingsuit/issues">Issue</a>\n</div>\n<div class="next">\n    <div class="next__content"><b>Open an Pull Request</b><br> I am happy about new ideas! </div>\n    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://github.com/wingsuit-designsystem/wingsuit/pulls">Pull Request</a>\n</div>\n<div class="next">\n    <div class="next__content"><b>Join on Slack</b><br> </div>\n    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://drupaltwig.slack.com/archives/C01C82BH864">Slack</a>\n</div>\n<div class="next">\n    <div class="next__content"><b>Github star</b><br>If you like it let me know. It </div>\n    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" target="_blank" href="https://github.com/wingsuit-designsystem/wingsuit/">Motivates me!</a>\n</div>\n<div class="next-title">NEXT</div>\n<div class="next">\n    <div class="next__content"><b>Quickstart guide</b></div>\n    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" href="../../guides/quick-start-guide">Continue</a>\n</div>\n<div class="next">\n    <div class="next__content"><b>Drupal Kickstarter</b><br>with UI Patterns and Layout Builder</div>\n    <a class="next__button mb-2 btn btn-lg bg-green-500 mr-2 font-weight-bold" href="../../drupal/ui_patterns">Continue</a>\n</div>\n<h2 id="screenshots"><a href="#screenshots" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Screenshots</h2>\n<h3 id="storybook"><a href="#storybook" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Storybook</h3>\n\n  <a class="gatsby-resp-image-link" href="/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-44902.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 77.16763005780346%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAC0UlEQVQ4y5WT20obURSG50ZoH8HRXNYboRdWqQWFHoylb1JPBWvvPCVRoq2VHq59EkFB6I2iMaKJNudEzcFMMjN7JnOevbpmx8S0pUgXfKydvWb+/Pn3Dvft6/cHiZ+piULhci6VSs2mUunZXC7HejKZRJp7SZwlEsnZRPIWb51IMPCZOZxPbG1tPeTWNsLd2WIS6rIMDgVwXIBGQ4POcl0K95Ug1Nz1Txu9XCCwxJeFm3pFqFNFMyzDsm1N0+x0OoOkm6SaPZvNMjKZjJ3P523XdW3UsjzBGtbUzDsfFw4u8uVKRW4YFuj4iOW41DRNGovF6NnZGY3H46x7n09PT9na696+bdsUy2UOazVpYmq6l/u4usQXi9dEJA3QLYeiIBiGARcXF3B0dAS7u7uwvb0N+/v7sLe3Bzs7OxCJRACzAxRkibQEJ6dnfNxqcJ4vlcuEOewQPD8/h2g0CoeHh3BwcADHx8ds7X0Jur0VdO4EBUF6Oznl45bD6/xVpfqXoPeShyfcycnJCXPrubSdO0FJlqX3cx8ww80vfObymtQkAoaN+dkuUNcFQkgbSZKhclMFGW+ChyiKbA8PpS2o67o0v7Do40Ibn/lcsUSIqjFB3bSYw87ysqoKNXCajtqFBwKtQ5FlIi0sLmOGm5t89rrEHJpoThAliMdjQBSFZeSgizYYh+eqRaegoihSILSCGYZW+apQJ6rSAAdvga6bINbroGgWCMQExaBAdAqS5oJqeO/SltBvgqZpSYFgyMdNrwT5H1d5OVKrQlSV3YxKqKHpFB1Ry7IoukIcvHMO6+jsT1oZiijYy82Hwz25alWVLBtknGnN+X8X5kzYTw6trXdncoVy4fLakmS1IUpEUxQVUW5R/0F73sB/nVUslUvLwVAP93hoqGt4ZKT/6fCzwddv3gy88vufjI0h/nHEfy9+//jAyOjo4PMXL/sf9fV1/QJlO++R6rkpfAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="knobs" title src="/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-44d6a.png" srcset="/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-f4799.png 173w,\n/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-b3b1d.png 345w,\n/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-44d6a.png 690w,\n/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-bc0f7.png 1035w,\n/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-b50e5.png 1380w,\n/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-0ed32.png 2070w,\n/static/knobs-ebfb72b556f4363cb7a2431bb0684a1a-44902.png 2768w" sizes="(max-width: 690px) 100vw, 690px">\n    </span>\n  </span>\n  \n  </a>\n    \n<div class="caption">Edit settings with Knobs</div>\n\n  <a class="gatsby-resp-image-link" href="/static/docs-3dc3e877f2532704e1c229871a8ca18d-44902.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 77.16763005780346%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAACmUlEQVQ4y6WTS08TURTHZ0OiH4GBJiQ0xk7BBcWNqRbb8hQTddGqxLWiAhLFGJBGgSoYYKG4Z8NW1nwEF66Mgi2p2kKnj5nOo53Xnc493ltEJDzUeJJf7pnknv953WHevH57YmMjMZhKfX2YTCZHk5ubNb4kEqMJwu75B2js4PLy8knmWXy8PsOnwao68D8miKIzMRlrZGJTz9lsoVASJAUbqIry+bzNb2ftarVq/24k5igQFRSJ3R6862Ji0zNsTigpumWDiaqOYVvYwAibprkPkgAfZg4xKlgUBPn+8Egj82J+gc1kc2qlotN0GG1JYH1IH2iJxB7FnuDQsIt5FJtkv4uiKiEbBBthlFfA3sgdJ7APUvmOYLEoDw2PuJgH01Ps+0xa/ahIkNDKWKoCGOQCGSE4DgbaEQ2k5xHUBAVBlO/RCl8uLLKZbV41dAtI8dhCO0K7Ru8jhA6M4KdOzf25FPkOXcrM4iKb2s6qclkDk8xdURSQShLQU1UVepFkF2rfsiwfhqPrOhRIy0/GJ3a2zBcFVdV0IHXheDwO/vN+6LnUDcHQRUIQgsEQBC4EIBDYT0dHB8Xx+/3wbnVV5nN5FzM1N8em+bwqq5XaMscej8Epzg1nz/mg5YwXvK0ctLR6az7n5cBz2gMezx4cxzlutxtWVlZIkzoVfMWmszmlrJu0QmdpaQlfvXYFD9wawDduXsfRaPQXkWgERyIHcAiwtrYmffq83shMz8428EWxomoGIDJe3TDAsqx//vUM01SfTsZIhfPz9eubqdy39BYqiCWNDFlXZEUvk5deLv8NZa2iaYg8bJ4spYFxNTXV9fT1efv7L7f39Pa1dXV1+zrDnb5gKOwLhQmhYwjXaCN+ey/RaG521/0AUiCsivJZD38AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="docs" title src="/static/docs-3dc3e877f2532704e1c229871a8ca18d-44d6a.png" srcset="/static/docs-3dc3e877f2532704e1c229871a8ca18d-f4799.png 173w,\n/static/docs-3dc3e877f2532704e1c229871a8ca18d-b3b1d.png 345w,\n/static/docs-3dc3e877f2532704e1c229871a8ca18d-44d6a.png 690w,\n/static/docs-3dc3e877f2532704e1c229871a8ca18d-bc0f7.png 1035w,\n/static/docs-3dc3e877f2532704e1c229871a8ca18d-b50e5.png 1380w,\n/static/docs-3dc3e877f2532704e1c229871a8ca18d-0ed32.png 2070w,\n/static/docs-3dc3e877f2532704e1c229871a8ca18d-44902.png 2768w" sizes="(max-width: 690px) 100vw, 690px">\n    </span>\n  </span>\n  \n  </a>\n    \n<div class="caption">Automatic generated Docs</div>\n<h3 id="drupal"><a href="#drupal" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Drupal</h3>\n\n  <a class="gatsby-resp-image-link" href="/static/configure-patterns-30245d5b840fabdc0023da773a1a0c24-c4cd0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 57.4757281553398%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAC5ElEQVQoz1WS3UtTcRjHz5/QC16JOmvlhYqgCKMrRXJY4oWCSujODptGpi2MzSkac1NDzcoLsW2nE+Zqvtx0mQQR1U1QEEQX4ct8A3UvZ+fs1fWb+/Y7JxQ68OH5nocfD9/nheFfCjq317P4ZGaGn5qafOFyuYSxsTGKS1C0wsTEuOB0OoX5+XnB7/cLS0tLZywvLws+n8+7urrqX1lZ0TFfP3wxh/cPsbkVwOZmABsbWyqK3traxs7OLnZ39yCKUQiCALPZDJPJBKPRCI7j1KjkHA4HhoeHu5m1t4Lh49oiPn9ayrx/t0C884/I4qsZ4n4+TsbH7eS+pYfc7jKRzlsdhGVZMjg4RCwWC7l3z0L6+vqI1WojlZWV6aKiIrS0tLCMqauV7enrgNPZm332dCA36uzF9ON+OJw9GBzuxp27HWhsuo4bN+vQ0KBHfb0eNTU1qK2tVWNdXR3KyspIVVUV2traOObnr3U2nQEi0WSWkpNiaQQjSYQo8UQG8WQGcjwN5fN4BVBXsNvtsNlsKlarlbY6QuiMYTAYOCawvcee0Mep42w2lc7mUmkCOfFHRdHJFEEscYwcffP6jR/T01PgeR5ut1vF4/Fgbm6OzM7OKrPlmPWNAKu4CIXlbDAk5cIRGYdBCQdHUSia5um/iCQt7qYOH9jscIyOwulyYZTGyclJ6PV6UlFRgebmZo75vR5gU8cnECXaspjIRaUE9g9k7FFEqmkORyEZOdpG/0M3zmtqcfXKJWi12jMKCwtJeXk5mpqaOIaeh0GMSgiGIhlJjhM5liCSFCenWqYxHBYJ7ZjYh0bIuQt5RKu9TDQajUpxcTGhBY/pptHa2soy377/MCtzCkViEKMJRKUkguEEJa5q6py2HlOXYrMNIC/vIkpKSv5zSAujuroa7e3t3QxdtY7e14KBZb10S7xCZ+c/TrXRyPFdXd28Tqfj8/PzeVqAp3enouiCggJPaWmpr7Gx8dpfWhs9dAGLb5MAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="configure patterns" title src="/static/configure-patterns-30245d5b840fabdc0023da773a1a0c24-44d6a.png" srcset="/static/configure-patterns-30245d5b840fabdc0023da773a1a0c24-f4799.png 173w,\n/static/configure-patterns-30245d5b840fabdc0023da773a1a0c24-b3b1d.png 345w,\n/static/configure-patterns-30245d5b840fabdc0023da773a1a0c24-44d6a.png 690w,\n/static/configure-patterns-30245d5b840fabdc0023da773a1a0c24-bc0f7.png 1035w,\n/static/configure-patterns-30245d5b840fabdc0023da773a1a0c24-b50e5.png 1380w,\n/static/configure-patterns-30245d5b840fabdc0023da773a1a0c24-c4cd0.png 2060w" sizes="(max-width: 690px) 100vw, 690px">\n    </span>\n  </span>\n  \n  </a>\n    \n<div class="caption">Map fields and configure your pattern in Manage Display with Layout builder.</div>\n\n  <a class="gatsby-resp-image-link" href="/static/add-blocks-b5f3e9e5439dc53b22e80a4b8c5ea62c-70633.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 690px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 52.701149425287355%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACYElEQVQoz42RzUsbURTFx/4DBksgitGQDyWD+LVTSIIr/w5LwBZNJSYm4qKINi9qWw3YGCSQRo1YESaCCxfdlNJFl13XoftWVHQ0k3nzcXontYK0tL3w47zLzDuce5+wt/82UywWWaFQYPl8nq2vr9/x+lZLpRLb2dlhlUqF7e7usu3tbVYul9lWeYvtSXuZ/U8H2QPp4FnlTaVF+Pj+A46PjxscHR2hKkk4PDyERCpJVVSrVeRyOTxfXMQiMT8/j+XlZayurmLt1RoKpQI23xWxsbmB3Mtcj4DzGgdgo93qb6ysvOATk5M8FosRT3k4HOYej4cHAgHu9/o1t8ttRMKRiwzLiIKqcUs3LJimQWrg8loD1w2YdDYIu5aWljA+/hjx+DTS6TRGRkZAhujq6rKxPF4PIpGIkmVZUTg9v7Eurjjqdd1S6zqUGw5bbW4ovEWGY2OP4HA0o7W1FU6nE52dnaB08Pv9tlp2T6kVxpgoKNd1MjLsy5Ztdnqu4uqaN8wUSqvpwEwqjWAwiMHBQQwMDKCvrw+9vb0N6GwFgyJGR0eVbJYSXioqJdTw7axm/Upnm30/q5F5jcYHpqbiEEUR/f39d0Z/MqTV0A5VzdC4YZJRQ3XDNPnP3lRVbtLEZjQaNdva2kwaz/T5fPegsY2Ojg6EQqHLhYUFUcB/FBnC5XKhu7ub9ha4h71L+4GGh4f1VCrVIySTyS/J5IxMepJIJOUnE3F5mpR6OZFIyLOzszL9LLe3t8uUSPZ6vffw+bwnbrf769DQ0Oe5uTm/QOUgWv5FU1PT374/JJqJBz8A5+IAKDe7odkAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="add blocks" title src="/static/add-blocks-b5f3e9e5439dc53b22e80a4b8c5ea62c-44d6a.png" srcset="/static/add-blocks-b5f3e9e5439dc53b22e80a4b8c5ea62c-f4799.png 173w,\n/static/add-blocks-b5f3e9e5439dc53b22e80a4b8c5ea62c-b3b1d.png 345w,\n/static/add-blocks-b5f3e9e5439dc53b22e80a4b8c5ea62c-44d6a.png 690w,\n/static/add-blocks-b5f3e9e5439dc53b22e80a4b8c5ea62c-bc0f7.png 1035w,\n/static/add-blocks-b5f3e9e5439dc53b22e80a4b8c5ea62c-b50e5.png 1380w,\n/static/add-blocks-b5f3e9e5439dc53b22e80a4b8c5ea62c-70633.png 1740w" sizes="(max-width: 690px) 100vw, 690px">\n    </span>\n  </span>\n  \n  </a>\n    \n<div class="caption">Use the mapped pattern as inline block in Layout tab</div>',fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},pathContext:{slug:"/basics/introduction/"}}}});
//# sourceMappingURL=path---basics-introduction-866331ef79d60b54d5e9.js.map