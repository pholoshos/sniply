<!-- svelte-ignore a11y-missing-attribute -->
<html>
  <head>
      <meta charset="utf-8">
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>Scribbler - a codding landing page template for codrops</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800,900" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/railscasts.min.css">
      <link rel="stylesheet" href="scribbler-global.css">
      <link rel="stylesheet" href="scribbler-landing.css">
      <link rel="author" href="humans.txt">
  </head>
  <body>
    <nav>
      <div class="logo"></div>
      <ul class="menu">
        <div class="menu__item toggle"><span></span></div>
        <li class="menu__item"><a href="doc.html" class="link link--dark"><i class="fa fa-book"></i> Documentation</a></li>
        <!-- svelte-ignore a11y-invalid-attribute -->
        <li class="menu__item"><a href="" class="link link--dark"><i class="fa fa-github"></i> Github</a></li>
      </ul>
    </nav>
    <div class="hero">
      <h1 class="hero__title">Scribbler</h1>
      <p class="hero__description">Take your markdown notes in terminal</p>
    </div>
    <div class="hero__terminal">
      <pre>
        <!-- Place your demo code here -->
        <code class="shell-session demo">svelteflow .. . </code>
      </pre>
    </div>
    <div class="wrapper">
      <div class="installation">
        <h3 class="section__title">Installation</h3>
        <div class="tab__container">
          <ul class="tab__menu">
            <li class="tab active" data-tab="mac">mac</li>
            <li class="tab" data-tab="linux">linux</li>
            <li class="tab" data-tab="win">win</li>
          </ul>
          <pre class="nohighlight code">
            <code class="tab__pane active mac">$  brew install scribbler</code>
            <code class="tab__pane linux">$  apt-get install scribbler</code>
            <code class="tab__pane win">$  gem install scribbler</code>
          </pre>
        </div>
      </div>
      <div class="feature">
        <div class="feature__item">
          <h3 class="section__title">Fast & Light</h3>
          <p>Start writing your notes immediately in any terminal! No more time wasted on navigating and opening your text editor.</p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">File Syncing</h3>
          <p>Save your file in Dropbox then you can access to it from anywhere.</p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Secure</h3>
          <p>Encrypt your notes optionally. No one can get to your secrets! </p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Configuration</h3>
          <p>Maintain all your settings in a single <span class="code code--inline">config.json</span> file. Never need to redo the setting every single time jotting down a note.</p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Highlightings</h3>
          <p>For better readability, scribbler has a clean, beautiful color scheme allow you to scan files fast.</p>
        </div>
        <div class="feature__item">
          <h3 class="section__title">Keybindings</h3>
          <p>You can expect common keybindings for scribbler. Customize <span class="code code--inline">bindings.json</span> for your own liking! </p>
        </div>
      </div>
      <div class="keybinding">
        <ul class="keybinding__detail">
          <h3 class="keybinding__title">Default Keybindings</h3>
          <li>Quit without saving <span class="keybinding__label">Ctrl+C</span></li>
          <li>Save <span class="keybinding__label">Cmd+S</span></li>
          <li>Save and Quit <span class="keybinding__label">Ctrl+D</span></li>
          <li>Undo <span class="keybinding__label">Cmd+Z</span></li>
        </ul>
        <ul class="keybinding__detail">
          <h3 class="keybinding__title">Markdown Keybindings</h3>
          <li><span class="keybinding__label">Ctrl+A</span> Insert Link Markdown</li>
          <li><span class="keybinding__label">Ctrl+I</span> Insert Image Markdown</li>
          <li><span class="keybinding__label">Ctrl+V</span> Insert YouTube Video</li>
          <li><span class="keybinding__label">Ctrl+T</span> Insert Table</li>
        </ul>
      </div>
      <div class="callout">
        <p>Read our documentation for advanced keybindings and customization</p>
        <a href="doc.html" class="button--primary">Documentation</a>
      </div>
    </div>
    <div class="changelog">
      <div class="wrapper">
        <h3 class="section__title">Changelog</h3>
        <div class="changelog__item">
          <div class="changelog__meta">
            <h4 class="changelog__title">v0.7</h4>
            <small class="changelog__date">10/12/2017</small>
          </div>
          <div class="changelog__detail">
            <ul>
              <li>Improving the writing workflow with better key bindings</li>
              <li>Design updates</li>
              <li>SSL Verification for web hooks</li>
              <li>Render Emoji</li>
            </ul>
          </div>
        </div>
        <div class="changelog__item">
          <div class="changelog__meta">
            <h4 class="changelog__title">v0.6</h4>
            <small class="changelog__date">7/30/2017</small>
          </div>
          <div class="changelog__detail">
            <ul>
              <li>Adding Unicode support</li>
              <li>Basic text highlighting</li>
              <li>Fresh Design</li>
            </ul>
          </div>
        </div>
        <div class="changelog__item">
          <div class="changelog__meta">
            <h4 class="changelog__title">v0.5</h4>
            <small class="changelog__date">5/10/2017</small>
          </div>
          <div class="changelog__detail">
            <ul>
              <li>Save default md file in new folders</li>
              <li>Ability to quick search on existing notes</li>
            </ul>
          </div>
        </div>
        <div class="changelog__callout">
          <!-- svelte-ignore a11y-invalid-attribute -->
          <a href="#" class="button--secondary">Checkout Full Log</a>
        </div>
      </div>
    </div>
    <footer class="footer">Svelteflow </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    <script src="scribbler.js"></script>
  </body>
</html>

<style>
  /* nav specialized to landing page */
.logo {
  background: url('logo.svg') no-repeat;
  background-size: contain;
  margin: 1rem 0 0 1rem;
}

nav {
  background-color: var(--bg-color);
}

/* hero section */
.hero {
  text-align: center;
  background-color: var(--bg-color);
  padding: 2rem 0 10rem 0;
}

.hero__title {
  font-weight: 900;
  color: var(--primary-color);
}

.hero__description {
  margin: -1rem auto 2rem auto;
}

.hero__terminal {
  width: 60%;
  margin: -11rem auto 3rem auto;
  text-align: left;
  color: white;
  padding: 0 1rem;
  border-radius: 4px;
  background-color: #232323;
  min-height: 285px;
  animation: fadeUp 2s;
  box-shadow: 0px 12px 36.8px 9.2px rgba(0, 0, 0, 0.1);
}

.hero__terminal pre {
  white-space: pre-line;
  padding-top: 1rem;
}

/* feature section */
.feature {
  display: flex;
  flex-wrap: wrap;
}

.feature__item {
  max-width: calc(33% - 20px);
  margin: 0 20px 0 0;
}

.feature__item .section__title {
  margin-bottom: 0;
}

.feature__item p {
  margin-top: 0.5rem;
}

/* keybinding section */
.keybinding {
  margin-top: 3rem;
  display: flex;
}

.keybinding__detail {
  position: relative;
  border: 1px solid var(--code-bg-color);
  flex-basis: 50%;
  padding: 2rem 1rem 1rem 1rem;
  list-style: none;
  line-height: 2rem;
}

.keybinding__detail:first-child {
  text-align: right;
  padding-right: 1rem;
}

.keybinding__detail:last-child {
  padding-left: 1rem;
  margin-left: -1px;
}

.keybinding__detail:first-child .keybinding__title {
  position: absolute;
  right: 0.5rem;
  top: -2rem;
  background-color: white;
  padding: 0 0.5rem;
}

.keybinding__detail:last-child .keybinding__title {
  position: absolute;
  left: 0.5rem;
  top: -2rem;
  background-color: white;
  padding: 0 0.5rem;
}

.keybinding__label {
  background: var(--white-color);
  border: 1px solid var(--light-gray-color);
  box-shadow: 0 1px 0 0 var(--medium-gray-color);
  border-radius: 3px;
  font-family: Courier;
  font-size: 0.7rem;
  color: var(--dark-gray-color);
  padding: 3px 3px 1px 3px;
  vertical-align: middle;
}

/* callout section */
.callout {
  text-align: center;
  padding: 1rem 0 3rem 0;
}

.callout .button--primary {
  display: inline-block;
  margin-top: 0.5rem;
}

/* changelog section */
.changelog {
  background-color: var(--bg-color);
  padding: 2rem 0;
}

.changelog__item {
  display: flex;
}

.changelog__meta {
  flex-basis: 25%;
}

.changelog__meta small {
  color: var(--primary-color-light);
  font-weight: 200;
  letter-spacing: 1px;
}

.changelog__title {
  margin-bottom: 0;
}

.changelog__callout {
  margin: 3rem auto 2rem auto;
  text-align: center;
}

@media (max-width: 750px) {
  .hero__terminal {
    width: 70%;
  }
  .tab__container > ul {
    right: auto;
    left: 0;
    padding-left: 0;
  }
  .tab__container .code {
    margin-top: 2rem;
  }
  .feature, .keybinding, .changelog__item {
    flex-direction: column;
  }
  .feature__item {
    max-width: 100%;
    margin: 0;
  }
  .keybinding {
    font-size: 0.8rem;
  }
}
/* css variables*/
:root {
  --primary-color: #432E30;
  --primary-color-light: #8E7474;
  --accent-color: #FE6A6B;
  --accent-color-light: #FFE4E4;
  --accent-color-dark: #B94B4C;
  --white-color: #FAFBFC;
  --light-gray-color: #C6CBD1;
  --medium-gray-color: #959DA5;
  --dark-gray-color: #444D56; 
  --bg-color: #F8F8FA;
  --code-bg-color: #F0E8E8;
}

/* normalized */
html, body {
  padding: 0;
  margin: 0;
  font-family: 'Nunito Sans', sans-serif;
  background-color: white;
}

p {
  font-weight: 300;
  color: #4A4A4A;
}

a, a:hover {
  text-decoration: none;
  color: var(--primary-color);
}

hr {
  padding: 1rem 0;
  border: 0;
  border-bottom: 1px solid var(--bg-color);
}

* {
  box-sizing: border-box;
}

/* global components */

/* typography */
.section__title {
  color: var(--primary-color);
}

/* tabs */
.tab__container {
  position: relative;
}

.tab__container > ul {
  position: absolute;
  list-style: none;
  margin: 0;
  right: 1rem;
  top: -2rem;
  padding-left: 0;
}

.tab__container .code {
  white-space: normal;
  padding: 1rem 1.5rem;
}

.tab {
  display: inline-block;
  padding: 0.3rem 0.5rem;
  font-weight: 200;
  cursor: pointer;
}

.tab.active {
  border-bottom: 1px solid var(--primary-color);
  font-weight: 700;
  display: inline-block;
}

.tab__pane {
  display: none;
}

.tab__pane.active {
  display: block;
}

/* code */
.code {
  border-radius: 3px;
  font-family: Space Mono, SFMono-Regular, Menlo,Monaco, Consolas, Liberation Mono, Courier New, monospace;
  background: var(--bg-color);
  border: 1px solid var(--code-bg-color);
  color: var(--primary-color-light);
}

.code--block {
  white-space: pre-line;
  padding: 0 1.5rem;
}

.code--inline {
  padding: 3px 6px;
  font-size: 80%;
}

/* buttons */
.button--primary {
  padding: 10px 22px;
  background-color: var(--accent-color);
  color: white;
  position: relative;
  text-decoration: none;
  border: 0;
  transition: all .3s ease-out;
}

.button--primary:after {
  position: absolute;
  content: "";
  width: 1rem;
  height: 1rem;
  background-color: var(--accent-color-light);
  right: -0.4rem;
  top: -0.4rem;
  transition: all 0.3s ease-out;
}

.button--primary:hover {
  text-shadow: 0px 1px 1px var(--accent-color-dark);
  color: white;
  transform: translate3D(0, -3px, 0);
}

.button--primary:hover::after {
  transform: rotate(90deg);
}

.button--secondary {
  padding: 10px 22px;
  border: 2px solid var(--primary-color);
  transition: all 0.5s ease-out;
}

.button--secondary:hover {
  border-color: var(--accent-color);
  color: var(--accent-color);
}

/* links */
.link {
  text-decoration: none;
  transition: all 0.3s ease-out;
}

.link:hover {
  color: var(--accent-color);
}

.link--dark {
  color: var(--primary-color);
}

.link--light {
  color: var(--accent-color);
}

/* menu */
nav {
  display: grid;
  grid-template-columns: 70px auto;
}

.menu {
  margin: 0;
  text-align: right;
  overflow: hidden;
  list-style: none;
}

.toggle {
  display: none;
  position: relative;
}

.toggle span,
.toggle span:before,
.toggle span:after {
  content: '';
  position: absolute;
  height: 2px;
  width: 18px;
  border-radius: 2px;
  background: var(--primary-color);
  display: block;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  right: 0;
}

.toggle span:before {
  top: -6px;
}

.toggle span:after {
  bottom: -6px;
}

.toggle.open span{
  background-color: transparent;
}

.toggle.open span:before,
.toggle.open span:after {
  top: 0;
}

.toggle.open span:before {
  transform: rotate(45deg);
}

.toggle.open span:after {
  transform: rotate(-45deg);
}

.menu__item {
  padding: 1rem;
  display: inline-block;
}

.menu__item.toggle {
  display: none;
}

/* table */
table {
  border-collapse: collapse;
  width: 100%;
  transition: color .3s ease-out;
  margin-bottom: 2rem;
}

table td, table th {
  border: 1px solid var(--code-bg-color);
  padding: 0.8rem;
  font-weight: 300;
}

table th {
  text-align: left;
  background-color: white;
  border-color: white;
  border-bottom-color: var(--code-bg-color);
}

table td:first-child {
  background-color: var(--bg-color);
  font-weight: 600;
}

@media screen and (max-width: 600px) {
  nav {
    grid-template-columns: 70px auto;
  }

  .menu__item{
    display: none;
  }

  .menu__item.toggle {
    display: inline-block;
  }

  .menu {
    text-align: right;
    padding: 0.5rem 1rem;
  }

  .toggle {
    display: block;
  }

  .menu.responsive .menu__item:not(:first-child) {
    display: block;
    padding: 0 0 0.5rem 0;
  }
}

/* layout */
.wrapper {
  margin: 0 auto;
  width: 70%;
}

.footer {
  text-align: center;
  background-color: var(--primary-color);
  padding: 2rem;
  color: white;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translate3d(0,30px,0);
  }
  100% {
    transform: translate3d(0,0,0);
  }
}
</style>