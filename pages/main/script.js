let popupBg1 = document.querySelector('.popup_bg1');
let popup1 = document.querySelector('.popup1');
let moreJennifer = document.querySelector('.more_jennifer');
let closePopup = document.querySelector('.close_popup');
let moreKatrine = document.querySelectorAll('.more_katrine');
let petName = document.querySelector('.popup_pet_name');
let petBreed = document.querySelector('.pet_breed');
let petDiscr = document.querySelector('.pet_discr');
let moreWoody = document.querySelector('.more_woody');
let popupPetImg = document.querySelector('.popup_img');
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;
let navBar = document.querySelector('header');
let label = document.getElementById('label');
let ourPets = document.getElementById('our_pets');
let moreSophia1 = document.querySelector('.more_sophia1');
let moreTimmy1 = document.querySelector('.more_timmy1');
let moreCharly1 = document.querySelector('.more_charly1');
let moreScarlett1 = document.querySelector('.more_scarlett1');
let moreFreddie1 = document.querySelector('.more_freddie1')








moreCharly1.addEventListener ('click', () => {
    popupPetImg.classList.remove('popup_img2');
    popupPetImg.classList.remove('popup_img');
    popupPetImg.classList.remove('popup_img3');
    popupPetImg.classList.remove('popup_img4');
    popupPetImg.classList.remove('popup_img5');
    popupPetImg.classList.remove('popup_img8');
    popupPetImg.classList.remove('popup_img7');
    popupPetImg.classList.add('popup_img6');
    petName.innerHTML = 'Charly';
    petBreed.innerHTML = 'Dog - Jack Russell Terrier ';
    petDiscr.innerHTML = 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.';
    popupBg1.classList.add('active');
})

moreScarlett1.addEventListener ('click', () => {
    popupPetImg.classList.remove('popup_img2');
    popupPetImg.classList.remove('popup_img');
    popupPetImg.classList.remove('popup_img3');
    popupPetImg.classList.remove('popup_img4');
    popupPetImg.classList.remove('popup_img5');
    popupPetImg.classList.remove('popup_img6');
    popupPetImg.classList.remove('popup_img8');
    popupPetImg.classList.add('popup_img7');
    petName.innerHTML = 'Scarlett';
    petBreed.innerHTML = 'Dog - Jack Russell Terrier ';
    petDiscr.innerHTML = 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.';
    popupBg1.classList.add('active');
})

moreFreddie1.addEventListener ('click', () => {
    popupPetImg.classList.remove('popup_img2');
    popupPetImg.classList.remove('popup_img');
    popupPetImg.classList.remove('popup_img3');
    popupPetImg.classList.remove('popup_img4');
    popupPetImg.classList.remove('popup_img5');
    popupPetImg.classList.remove('popup_img6');
    popupPetImg.classList.remove('popup_img7');
    popupPetImg.classList.add('popup_img8');
    petName.innerHTML = 'Freddie';
    petBreed.innerHTML = 'Cat - British Shorthair ';
    petDiscr.innerHTML = 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.';
    popupBg1.classList.add('active');
})

moreTimmy1.addEventListener ('click', () => {
    popupPetImg.classList.remove('popup_img2');
    popupPetImg.classList.remove('popup_img');
    popupPetImg.classList.remove('popup_img3');
    popupPetImg.classList.remove('popup_img4');
    popupPetImg.classList.remove('popup_img8');
    popupPetImg.classList.remove('popup_img7');
    popupPetImg.classList.remove('popup_img6')
    popupPetImg.classList.add('popup_img5');
    petName.innerHTML = 'Timmy';
    petBreed.innerHTML = 'Cat - British Shorthair';
    petDiscr.innerHTML = 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.';
    popupBg1.classList.add('active');
})






moreSophia1.addEventListener ('click', () => {
    popupPetImg.classList.remove('popup_img2');
    popupPetImg.classList.remove('popup_img');
    popupPetImg.classList.remove('popup_img3');
    popupPetImg.classList.remove('popup_img8');
    popupPetImg.classList.remove('popup_img7');
    popupPetImg.classList.remove('popup_img6')
    popupPetImg.classList.remove('popup_img5');
    popupPetImg.classList.add('popup_img4');
    petName.innerHTML = 'Sophia';
    petBreed.innerHTML = 'Dog - Shih tzu';
    petDiscr.innerHTML = 'Sophia here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.';
    popupBg1.classList.add('active');
})



ourPets.addEventListener('click',() =>{
    ourPets.classList.add('li_active');
})



label.addEventListener('click',()=>{
    navBar.classList.toggle('background');
    label.src='../../assets/burger.svg' ? '../../assets/burger_open.svg' : '../../assets/burger.svg';
})






function changeCurrentItem(n){
    currentItem = (n+items.length) % items.length;
}

function hideItem(direction){
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('item_active', direction);
    })
}

function showItem(direction){
    items[currentItem].classList.add('next',direction);
    items[currentItem].addEventListener('animationend', function(){
        this.classList.remove('next', direction);
        this.classList.add('item_active');
        isEnabled = true;
    })
}

function previousItem(n){
    hideItem('to_right');
    changeCurrentItem(n - 1);
    showItem('from_left');
}

document.querySelector('.button_arrow_left').addEventListener('click',function(){
    if(isEnabled){
        previousItem(currentItem);
    }
});

function nextItem(n){
    hideItem('to_left');
    changeCurrentItem(n + 1);
    showItem('from_right');
}

document.querySelector('.button_arrow_right').addEventListener('click',function(){
    if(isEnabled){
        nextItem(currentItem);
    }
});

moreJennifer.addEventListener('click',()=>{
    popupPetImg.classList.remove('popup_img2');
    popupPetImg.classList.remove('popup_img3');
    popupPetImg.classList.add('popup_img');
    petName.innerHTML = 'Jennifer';
    petBreed.innerHTML = 'Dog - Labrador';
    petDiscr.innerText = 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but wont hesitate to play up a storm in the house if she has all of her favorite toys.';
    popupBg1.classList.add('active');
    popupBg1.classList.add('active')
})

closePopup.addEventListener('click',() => {
    popupBg1.classList.remove('active');
})

moreKatrine.forEach((button)=>{
    button.addEventListener('click',(event)=>{
        event.preventDefault();
        popupPetImg.classList.remove('popup_img');
        popupPetImg.classList.remove('popup_img3');
        popupPetImg.classList.remove('popup_img8');
        popupPetImg.classList.remove('popup_img7');
        popupPetImg.classList.remove('popup_img6')
        popupPetImg.classList.remove('popup_img5');
        popupPetImg.classList.remove('popup_img4');
        popupPetImg.classList.add('popup_img2');
        petName.innerHTML = 'Katrine';
        petBreed.innerHTML = 'Cat - British Shorthair';
        petDiscr.innerHTML = 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.';
        popupBg1.classList.add('active');
    })
})



moreWoody.addEventListener ('click', () => {
    popupPetImg.classList.remove('popup_img2');
    popupPetImg.classList.remove('popup_img');
    popupPetImg.classList.add('popup_img3');
    petName.innerHTML = 'Woody';
    petBreed.innerHTML = 'Dog - Golden Retriever';
    petDiscr.innerHTML = 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.';
    popupBg1.classList.add('active');
})