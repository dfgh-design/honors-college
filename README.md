#VCU HONORS COLLEGE

### Description

This is the repository for the VCU Honors College. It includes documentation for updating and maintaining the site as well as tools and conventions used on the site.


### Quick Start Guide

```bash
git clone https://github.com/fostergn/vcu-honors-college.git vcu-honors-college
cd vcu-honors-college
npm install
npm run gulp
```

### Dependencies
- Node
- [NPM](https://nodejs.org/en/)
- [Gulp](http://gulpjs.com/) ```npm install -g gulp ```
- [Sass](http://sass-lang.com/) ```gem install sass```
- [Bower] ```npm install -g bower```
- [Browserify] ```npm install -g browserify```

Once these are installed, run the following command to install project dependencies:

```sh
$ npm run start
```

Building the site for deployment is easy. Run the following command:

```sh
$ npm run build
```

For livereload functionality and development, run:

```sh
$ npm run watch
```


## Conventions
- [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) (Block, Element, Modifier) style syntax

  ```.block {} ```

  ```.block__element {}```

  ```.block--modifier {}```


# CMS Guide
######This Guide is created for the purposes of converting the static site templates, components, and code into a CMS.

###Table of Contents
1. [Header](#header)
2. [Footer](#footer)
3. [Templates](#templates)
4. [Components](#components)
5. [Styles](#styles)
6. [Scripts](#scripts)

## Header<a name="header"></a>
######The header includes the main menu navigation (desktop and mobile) persistent throughout the entire site.

The header is comprised of a top level navigation and a secondary level. Both are unordered lists.

### Top Level
```
<ul class="main-nav__nodes">
  <li class="main-nav__node --active"><a href="/about/">About</a></li>
  <li class="main-nav__node"><a href="/academics/">Academics</a></li>
  ...
</ul>
```
###Secondary Level
Each secondary level menu item is its own unordered list with list-items containing a tertiary navigation
```
<div class="sub-nav">
  <ul class="sub-nav__nodes">
    <li class="sub-nav__node -header"><a href="">About</a></li>
    <li class="sub-nav__node"><a href="/about/deans-message.html">Dean's Message</a></li>
    ...
    <li class="sub-nav__node --back"></li>
  </ul>
  <ul class="sub-nav__nodes -selected">
    <li class="sub-nav__node -header"><a href="">Academics</a></li>
    <li class="sub-nav__node"><a href="/academics/honors-classes.html">Honor's Classes</a></li>
    ....
    <li class="sub-nav__node --back"></li>
</ul>
```

## Footer<a name="footer"></a>

######The footer is contained in the `<footer>` tag. It uses 4 unordered lists. For example:
```
    <ul>
      <li>701 W Grace St</li>
      <li>PO Box 843010</li>
      <li>Richmond, VA 23220</li>
    </ul>
```

Each line of information should be managed by the CMS.

## Templates<a name="templates"></a>

### 1. Homepage
######The homepage is the most complex template. It includes a slider, two calls to action, quote, pop-up sub-nav, and secondary content blocks.

### Slider
The slider is an unordered list in the `<div class="main-block">` .
```
<ul class="main-block__slider">
  <a href="stories/sarah-izabel.html">
    <li style="background-image:url('images/research.png')">
      <h1 class="brand-headline">
        <span class="defining">Defining:</span>
        <span class="subject"> Research</span>
      </h1>
    </li>
  </a>
  ...
</ul>
```
Each list item should be generated from the CMS. Each list-item's background image, link, and text in `<span class="subject">` should be editable in the CMS. There should be atleast 3 and no more than 6 list items.

### Quote Block
The quote block contains a quote, 3 images as links, and a sub-quote.
```
<div class="quote-block">
  <h3>Opportunity. Community. Excellence. Honors. You.</h3>
  <div class="quote-container">
    <article>
      <a href="/about">
        <div class="quote-image" style="background-image:url('images/about.png');">
          <p>Opportunity</p>
        </div>
      </a>
    </article>
    ...
  </div>
</div>
```
The quote, sub-quote, and three links should be editable in the CMS. Each of the three links should have a background image, text, and internal link that is set in the CMS.

###Right Container
The right container has a secondary and tertiary blocks along with two calls-to-action.

#####Secondary Block
The title, background image, and link should be set in the CMS. The title should be a max of 70 characters and the link should be internal.
```
<div class="secondary-block" style="background-image:url('images/honors-video.png');">
  <a href="internal-link.html">
    <h3><span class="highlight">Short Title</span></h3>
  </a>
</div>
```

#####Call to Action
The call to action contains two links. The links and text should be content managed with the links pointing to an internal page.
```
<div class="cta-block">
  <a href="/apply"><h2>Apply to Join</h2></a>
  <a href="/support"><h2>Support Honors</h2></a>
</div>
```

#####Tertiary Block
There will be two tertiary blocks that can contain an internal or external link. The link, background image, and short description should be set in the CMS. The short description should be a max of 100 characters.
```
<div class="expandable">
  <a href="https://www.external-link.com" target="_blank" class="tertiary-block" style="background-image:url('image.png');">
    <div class="social-block">
      <section>Short Description</section>
    </div>
  </a>
  ...
</div>
```


## Components<a name="components"></a>

### Hero
```
<div class="hero" id="specific-page">
  <div class="hero-image" style="background-image:url('image.jpg');"></div>
  <h1 class="brand-headline">
    <span class="defining">Defining:</span>
    <span class="subject"> Honors</span>
  </h1>
  <p>
	  Short description
  </p>
</div>
```

### Cards (block of 3)
```
<section class="cards">
  <article class="card">...</article>
  ...
</section>
```
####Card
```
<article class="card">
  <div class="card__icon" style="background-image:url('image.jpg')">
  </div>
  <h3 class="card__title">Headline</h3>
  <p class="card__info">Short Description.</p>
  <a href="honors-facts.html" class="card__cta">
    <span>Read More</span>
  </a>
</article>
```

### Secondary
```
<section class="secondary">
  <article>
    <p>Paragraph of text</p>
  </article>
  <div class="cta-like-this" style="background-image:url('image.jpg');">
    <div class="container">
      <a href="#"><h1>Short Call-To-Action of form of question?</h1></a>
    </div>
  </div>
</section>
```

### CTAs Block
```
<div class="apply-support">
  <a href="#">
    <h1>Support Honors</h1>
  </a>
  <a href="#">
    <h1>Apply</h1>
  </a>
  <a href="#">
    <h1>Share with us</h1>
  </a>
</div>
```

### 3 Columns
```
<section class="secondary">
  <div class="three-wide">
    <p>First column paragraph</p>
  </div>
  ...
</section>
```

### Staff Single
```
<div class="staff-single">
  <div class="card-staff" style="background-image:url('staff.jpg')">
    <div class="card-staff__info">
      <h3 class="name">Staff Name</h3>
      <p class="title">Position</p>
      <span><br><br><br><br>read more</span>
    </div>
    <div class="bio">
    <p>bio<br><br>
    Email Barry at <a href="mailto:email@vcu.edu">email@vcu.edu</a>.
    </p>
    </div>
  </div>
</div>
```

### Featured Event Cards
3 featured events on the news page.
```
<section class="featured-events">
  <a href="#">
    <div class="event-single" style="background-   image:url('image.jpg')">
      <div class="event-single__overlay"></div>
        <div class="event-info">
        <div class="event-date">
          <p class="event-month">April</p>
          <p class="event-day">13</p>
        </div>
      <div class="event-teaser">
        <h3>Fulbright Info Session</h3>
        <p class="event-time">12pm</p>
        <p class="event-location">Cabell Library Rm 301</p>
      </div>
    </div>
  </div>
</a>
...
</section>
```

### Secondary Full Grid
Grid with unlimited children
```
<section class="secondary-full-grid">
  <div class="grid-container">  
    <div><a href="#">
      <img src="../images/art-worlds-1.jpg">
      <p>Another thing to do!</p></a>
    </div>
  ...
  </div>
</section
```

## Styles<a name="styles"></a>
  - hc_styles.css

## Scripts<a name="scripts"></a>
######This site uses Javascript throughout the site. Typically js libraries will be enqueued in the head and custom functionality included before the body closing tag
### Scripts in the `<head>`
  - [jQuery](https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js)
  - [Masonry.js](https://cdnjs.cloudflare.com/ajax/libs/masonry/4.1.0/masonry.pkgd.min.js)
  - Font-Awesome
  - Pubapps Branding Bar
  - hc_header_scripts.js
### Scripts before `</body>` closing tag
  - hc_scripts.js
