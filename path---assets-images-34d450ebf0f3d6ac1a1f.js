webpackJsonp([0xc3500e70cf9],{747:function(e,t){e.exports={data:{site:{siteMetadata:{docSections:{basics:["/basics/introduction/"],guides:["/guides/quick-start-guide/","/guides/create-component-guide/"],configurations:["/configurations/details/","/configurations/custom-webpack-config/","/configurations/preset-webpack/"],components:["/components/overview/","/components/globals/","/components/wingsuit/","/components/twig/","/components/presentation/"],assets:["/assets/overview/","/assets/images/","/assets/svg/","/assets/javascript/"],drupal:["/drupal/overview/","/drupal/ui_patterns/","/drupal/presenter/"],testing:["/testing/manual-testing/"]}}},allMarkdownRemark:{edges:[{node:{fields:{slug:"/404/"},frontmatter:{title:"",id:null}}},{node:{fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},{node:{fields:{slug:"/components/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/drupal/overview/"},frontmatter:{title:"Component-Based Theming in Drupal 8",id:"overview"}}},{node:{fields:{slug:"/drupal/presenter/"},frontmatter:{title:"Presenter",id:"presenter"}}},{node:{fields:{slug:"/drupal/ui_patterns/"},frontmatter:{title:"UI Patterns",id:"ui_patterns"}}},{node:{fields:{slug:"/testing/manual-testing/"},frontmatter:{title:"Manual Testing",id:"manual-testing"}}},{node:{fields:{slug:"/guides/quick-start-guide/"},frontmatter:{title:"Quickstart guide",id:"quick-start-guide"}}},{node:{fields:{slug:"/basics/introduction/"},frontmatter:{title:"Introduction",id:"introduction"}}},{node:{fields:{slug:"/guides/create-component-guide/"},frontmatter:{title:"Create new component",id:"create-component-guide"}}},{node:{fields:{slug:"/configurations/details/"},frontmatter:{title:"Configuration",id:"details"}}},{node:{fields:{slug:"/configurations/custom-webpack-config/"},frontmatter:{title:"Custom webpack configuration",id:"custom-webpack-config"}}},{node:{fields:{slug:"/configurations/preset-webpack/"},frontmatter:{title:"Presets",id:"preset-webpack"}}},{node:{fields:{slug:"/components/globals/"},frontmatter:{title:"Global variables.",id:"globals"}}},{node:{fields:{slug:"/components/wingsuit/"},frontmatter:{title:"Wingsuit (UI Patterns)",id:"wingsuit"}}},{node:{fields:{slug:"/components/twig/"},frontmatter:{title:"Twig only",id:"twig"}}},{node:{fields:{slug:"/components/presentation/"},frontmatter:{title:"Presentation",id:"presentation"}}},{node:{fields:{slug:"/assets/overview/"},frontmatter:{title:"Overview",id:"overview"}}},{node:{fields:{slug:"/assets/svg/"},frontmatter:{title:"SVGs",id:"svg"}}},{node:{fields:{slug:"/assets/javascript/"},frontmatter:{title:"Javascript",id:"javascript"}}}]},markdownRemark:{html:'<p>The <code>apps/[app]/assets.js</code> includes all images. Wingsuit will compile these files to <code>[dist]/assets/images</code>.</p>\n<h3 id="embedding-images-in-twig"><a href="#embedding-images-in-twig" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Embedding images in twig:</h3>\n<p>You can use the <code>ws-assets</code> stream wrapper to get a path to the asset folder. Ensure you have the <a href="https://www.drupal.org/project/wingsuit_companion">wingsuit_companion</a> module enabled. </p>\n<p><b>Sample twig file with an image:</b></p>\n<pre><code class="language-twig">&#x3C;img src="{{ file_create_url(\'ws-assets://images/dummy.png\')">\n</code></pre>\n<p>or use the image component:</p>\n<pre><code class="language-twig">{% include "@atoms/image/image.wig" with {"placeholder": false, path: "images/dummy.png" }\n</code></pre>\n<h3 id="image-in-css"><a href="#image-in-css" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Image in CSS:</h3>\n<p>To use images inside your CSS file, use the relative path to the image. Webpack will replace the right output path.  </p>\n<h3 id="placeholder-images"><a href="#placeholder-images" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Placeholder images:</h3>\n<p>Wingsuit supports image styles and responsive image styles for placeholder images in storybook. </p>\n<p>You can configure your image styles in <code>apps/storybook/config/image.config.yml</code></p>\n<p>Sample <code>image.config.yml</code></p>\n<pre><code class="language-yaml">imageConfig:\n  styles:\n    1x1_xxs:\n      label: Small 1x1\n      width: 80\n      height: 80\n    ......\n  stylesResponsive:\n    card-hero:\n      style: 16x9_xs_sc\n      breakpoints:\n        xxs: 8x7_xxs_sc\n        xs: 8x7_xs_sc\n    ...... \n  breakpoints:\n   xxs:\n     mediaQuery: \'(min-width: 0px) and (max-width: 459px)\'\n   xs:\n     mediaQuery: \'(min-width: 460px) and (max-width: 639px)\'\n</code></pre>\n<p><b>The configuration file has 3 sections:</b></p>\n<ul>\n<li>Basic image styles</li>\n<li>Responsive image styles</li>\n<li>Breakpoints</li>\n</ul>\n<p>To render an image style include the <code>image atom</code>. </p>\n<pre><code class="language-twig">{% include "@atoms/image/image.wig" with {"placeholder": true, style: "1x1_xxs" }\n</code></pre>\n<p>Or use the <code>pattern_preview</code> twig function:</p>\n<pre><code class="language-twig">    {{ pattern_preview(\'image\', \'primary\', {"placeholder": true, "style": "1x1_xxs"}) }}\n</code></pre>\n<p>Image style works for simple image styles and responsive image styles.</p>',fields:{slug:"/assets/images/"},frontmatter:{title:"Images & Icons",id:"images"}}},pathContext:{slug:"/assets/images/"}}}});
//# sourceMappingURL=path---assets-images-34d450ebf0f3d6ac1a1f.js.map