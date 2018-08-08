/**
 * Initializes the site header.
 * @constructor
 * @param {Object} el - The site header element.
 */


let loading=false;
let load_more=true;


function init(){

	var $modal = document.querySelector('.modal');
	var $modal__box = $modal.querySelector('.modal__box');
	var $modal__box__close = $modal__box.querySelector('.modal__box__close');
	

	// Set scroll watcher
	window.onscroll = (y => { scrollWatcher(y) });




	// Close the modal box when close button is clicked
	$modal__box__close.addEventListener(
		'click',

		e => {
			e.preventDefault();
			closeModal();
			return false;
		}
	);

	// Close modal when background is clicked
	$modal.addEventListener(
		'click',

		e => {
			e.preventDefault();
			closeModal();
			return false;
		}
	);

	// Prevent modal box to close when its clicked inside
	$modal__box.addEventListener(
		'click',

		e => {
			e.stopPropagation();
			return false;
		}

	);


	loadPosts();

	// Reveal content
	// document.body.style.display = 'block';


}



/**
 * Close modal
 */
function closeModal(){
	var $modal = document.querySelector('.modal');
	$modal.classList.remove('on');
	$modal.classList.remove('mode-edit');
	$modal.classList.remove('mode-view');
	document.body.classList.remove('frozen');
}



/**
 * Watches the sroll position in order to lazyload articles
 */
function scrollWatcher(){

	var margin = 100;

	var y = window.innerHeight + window.scrollY

	var body_class = y > 10 ? '' : '';

	var body = document.body,
    html = document.documentElement;

	var total_document_height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );

	if(y > total_document_height - margin){
		loadPosts();
	}

	

}



function appendPosts($posts){
	// document.querySelector('.articles').innerHTML += html;

	$posts.forEach(
		$a => {

			$a.querySelector('.__read-more').addEventListener(
			'click',

			e => {
				e.preventDefault();
				modal(id, 'view');
				return false;
			}
		);

			document.querySelector('.articles').appendChild($a);
		}
	);


	// document.querySelector('.articles')

}


function loadPosts(){

	if(!load_more || loading) return;

	loading = true;

	document.querySelector('.articles').classList.add('loading');

	document.body.classList.add('loading');

	let n=0;

	if(document.querySelectorAll('.post.hidden').length==0) load_more=false;


	if(window.innerWidth < 1000){
		var render_count=2;
	}else{
		var render_count=3;
	}



	setTimeout(

		() => {

			document.querySelectorAll('.post.hidden').forEach(

				$post => {



					if(++n>render_count) return;

					$post.classList.remove('hidden');

				}

			);

			document.querySelector('.articles').classList.remove('loading');
			document.body.classList.remove('loading');

			loading = false;

		},

		1000

	);

	

}





function Header (el) {
  this.el = el
  console.warn('Initialized `Header` module.')



  init();








}

export default Header
