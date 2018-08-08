/**
 * Initializes the hero module.
 * @constructor
 * @param {Object} el - The hero element.
 */
function Post (el) {
  
  this.el = el
  console.warn('Initialized `Post` module.')


  this.id = el.getAttribute('data-id');


  el.querySelector('.post__readmore').addEventListener(
  
  'click',

    e => {
      e.preventDefault();

      var h = e.target.getAttribute('href');

      modal(h);
      return false;
    }

  );





  // Pops up a modal canvas
function modal(href){
	
	var $body = document.body;
	var $modal = document.querySelector('.modal');
	var $modal__box = document.querySelector('.modal__box');
	var $modal__content = document.querySelector('.modal__content');
	var $article = $modal__box.querySelector('article');
	var $form = $modal.querySelector('form');


	// Clean up any previous content
	$modal__content.innerHTML = '';


	// Prevent the background to be scrolled
	$body.classList.add('frozen');
	$modal.classList.add('loading');
	
	$modal.classList.add('on');
	// $modal.classList.add('mode-'+mode);


	fetch(href).then(function(response) {
		console.log(response);
		response.text().then(function(text) {


			$modal.classList.remove('loading');
			$modal__content.innerHTML = text;

		});
	});

	return;

	// Instantiate the article to be displayed in the modal
	// This data originally comes from the CMS (json)
	// var article = articles[id];

	// // Mode of operation for the modal (VIEW|EDIT|NEW)
	// $form.querySelector('input[name=mode]').value = mode;

	// $article.querySelector('h1').textContent = article.title;
	// $article.querySelector('p').textContent = article.content;

	// var image_path = article.image;

	// if(image_path.lastIndexOf("\\")>-1){
	// 	image_path = '_assets/photography/'+image_path.split("\\")[image_path.split("\\").length-1]
	// }

	// if(image_path){
	// 	$article.querySelector('img').setAttribute('src', image_path);
	// 	$article.querySelector('img').style.display = 'block';
	// }else{
	// 	$article.querySelector('img').style.display = 'none';
	// }
	
	// Prevent the background to be scrolled
	document.body.classList.add('frozen');


	// Set the proper class of the modal box based on the operation mode
	$modal.classList.remove('mode-edit');
	$modal.classList.remove('mode-new');

	$modal.classList.add('on');
	$modal.classList.add('mode-'+mode);

}



}

export default Post