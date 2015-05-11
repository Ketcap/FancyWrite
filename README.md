# FancyWrite

FancyWrite is a jquery based Html5 Fancy Animated Texts.

default includes
  - js/fancywrite.js
  - js/jquerymin.js

#[Demo](http://www.u-code.net/Fancywrite)


#How To Use

First you need to add js files in to html file like (same order):

	<script src="js/jquerymin.js"></script>

	<script src="js/fancywrite.js"></script> 

And for use  FancyWrite you need to pick a element that contains text you want to animate : 

            $(element).Fancywrite();
##Settings

    Use inside # $(document).ready(function(){  /* Use Here */  })
    $(parentElement).Fancywrite({
			type: letter,(Default) 
			/* Letter By Letter or Word by Word ( options -> "letter" - "word" )*/
			anims : opacity,(Default)
			/*Animation for texts options are -> "opacity" , "left" , "top" , "bottom" , "scale" */ 
			speed: 100, (Defaukt)
			/* Animations Speed */
			delay:50, (Defaukt)
			/* Delay Between Animations */
			text:"",(Default)
			/* Custom text for adding later for ajax or other requests */
			clear: 0 ,(Default)
			/* "0" is clears text inside selected element and add text value , "1" Keeps text and append text value* /
			})

### Want To Use It ? 
Greaaaat !!!!

Open your favorite Terminal and run these commands.

Npm install:
```sh
$ npm install fancywrite
```


### Version
1.0.0


### Contact Me

You can reach me whenever you want from those links :

* [My Facebook](https://www.facebook.com/spIash07)
* [My Twitter](https://twitter.com/uur_oruc)
* [My Website](https://www.u-code.net)


License
----

MIT


**Free Software, Hell Yeah!**

