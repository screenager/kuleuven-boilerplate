HTML boilerplate to help you setting up a HTML page using the [2016 KU Leuven web layout](https://stijl.kuleuven.be/2016/release/latest/howto_devs.html).

# Features
* [Gulp](http://gulpjs.com) rules (Gulp 3) 
  * to fetch the latest version of templates and other resources files from ICTS
  * download all necessarily resources to your public directory, to make your app independant from the outside world
* Example layout file (index.php)
* Possiblity to apply [TinyMCE](https://www.tinymce.com) and [Select2](https://select2.github.io/) to form elements. Compatible with Bootstrap 4
* Some usability and accessibility improvements (print css, [AreYouSure](https://github.com/codedance/jquery.AreYouSure), opening external links in new window, autofocus on first form element)

# Prerequisites
* A local machine supporting unix commands
* npm command 
* [Gulp](http://gulpjs.com) command installed
* [Bower](http://bower.io) command installed
* [Compass](http://compass-style.org/) command installed

# Installation

Run

``` bash
npm install;
bower install;
gulp download;
gulp compile;
```

If "npm install" doesn't work, try "sudo npm install".

You can now go extending the published layout to your needs!

# Applying updates
Running "gulp download" again will fetch the latest version of template assets from ICTS. 
This way the university related menu items in the header and footer of the layout are brought to their latest version in accordance with the other KU Leuven websites.

Complete by running "gulp compile" and go test the changes before bringing to production.

# Notes: 
* This is not useful if you just want to make pages through the CMS of the university.
* Already to use version for the Laravel PHP framework can be found on [screenager/kuleuven-laravel-template](https://github.com/screenager/kuleuven-laravel-template).

# Stay up-to-date
* https://admin.kuleuven.be/icts/services/wms/intranet/webdevnieuws
* https://www.kuleuven.be/stijlgids
* https://stijl.kuleuven.be/2016/techspecs

# Todos
This boilerplate was made to support an info session at the university.
It still needs some cleanup, such as better directory structure.

Help is appreciated!