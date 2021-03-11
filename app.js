const nextBtn=document.querySelector('.nextBtn');
const prevBtn=document.querySelector('.prevBtn');
const container=document.querySelector('.images');
let current=0;



nextBtn.addEventListener('click',nextpicture);
prevBtn.addEventListener('click',prevpicture);



function nextpicture(){

	container.animate([{opacity:'0.1'},{opacity:'1.0'}],
		{duration:1100,fill:'forwards'});
current++;


if(current===4){
	current=0;
}

container.style.backgroundImage=`url(img${current}.jpg)`;




};
function prevpicture(){

container.animate([{opacity:'0.1'},{opacity:'1.0'}],
		{duration:1100,fill:'forwards'});
	current--;
	if(current===-1)
	{
		current=3;
	}


	container.style.backgroundImage=`url(img${current}.jpg)`;
};