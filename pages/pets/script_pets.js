let popupBg11 = document.querySelector('.popup_bg11');
let popup11 = document.querySelector('.popup11');
let moreJennifer1 = document.querySelector('.more_jennifer1');
let closePopup1 = document.querySelector('.close_popup1');
let moreKatrine1 = document.querySelector('.more_katrine1');
let petName1 = document.querySelector('.popup_pet_name1');
let petBreed1 = document.querySelector('.pet_breed1');
let petDiscr1 = document.querySelector('.pet_discr1');
let moreWoody1 = document.querySelector('.more_woody1');
let popupPetImg1 = document.querySelector('.popup_img1');
let moreSophia1 = document.querySelector('.more_sophia1');
let moreTimmy1 = document.querySelector('.more_timmy1');
let moreCharly1 = document.querySelector('.more_charly1');
let moreScarlett1 = document.querySelector('.more_scarlett1');
let moreFreddie1 = document.querySelector('.more_freddie1')

moreJennifer1.addEventListener('click',()=>{
    popupPetImg1.classList.remove('popup_img21');
    popupPetImg1.classList.remove('popup_img31');
    popupPetImg1.classList.remove('popup_img81');
    popupPetImg1.classList.remove('popup_img71');
    popupPetImg1.classList.remove('popup_img61')
    popupPetImg1.classList.remove('popup_img51');
    popupPetImg1.classList.remove('popup_img41');
    popupPetImg1.classList.add('popup_img');
    petName1.innerHTML = 'Jennifer';
    petBreed1.innerHTML = 'Dog - Labrador';
    petDiscr1.innerText = 'Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but wont hesitate to play up a storm in the house if she has all of her favorite toys.';
    popupBg11.classList.add('active');
    popupBg11.classList.add('active')
})

closePopup1.addEventListener('click',() => {
    popupBg11.classList.remove('active');
})

moreKatrine1.addEventListener ('click', () => {
    popupPetImg1.classList.remove('popup_img');
    popupPetImg1.classList.remove('popup_img3');
    popupPetImg1.classList.remove('popup_img81');
    popupPetImg1.classList.remove('popup_img71');
    popupPetImg1.classList.remove('popup_img61')
    popupPetImg1.classList.remove('popup_img51');
    popupPetImg1.classList.remove('popup_img41');
    popupPetImg1.classList.add('popup_img21');
    petName1.innerHTML = 'Katrine';
    petBreed1.innerHTML = 'Cat - British Shorthair';
    petDiscr1.innerHTML = 'Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.';
    popupBg11.classList.add('active');
})

moreWoody1.addEventListener ('click', () => {
    popupPetImg1.classList.remove('popup_img21');
    popupPetImg1.classList.remove('popup_img1');
    popupPetImg1.classList.remove('popup_img81');
    popupPetImg1.classList.remove('popup_img71');
    popupPetImg1.classList.remove('popup_img61')
    popupPetImg1.classList.remove('popup_img51');
    popupPetImg1.classList.remove('popup_img41');
    popupPetImg1.classList.add('popup_img31');
    petName1.innerHTML = 'Woody';
    petBreed1.innerHTML = 'Dog - Golden Retriever';
    petDiscr1.innerHTML = 'Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.';
    popupBg11.classList.add('active');
})


moreSophia1.addEventListener ('click', () => {
    popupPetImg1.classList.remove('popup_img21');
    popupPetImg1.classList.remove('popup_img1');
    popupPetImg1.classList.remove('popup_img31');
    popupPetImg1.classList.remove('popup_img81');
    popupPetImg1.classList.remove('popup_img71');
    popupPetImg1.classList.remove('popup_img61')
    popupPetImg1.classList.remove('popup_img51');
    popupPetImg1.classList.add('popup_img41');
    petName1.innerHTML = 'Sophia';
    petBreed1.innerHTML = 'Dog - Shih tzu';
    petDiscr1.innerHTML = 'Sophia here and I am looking for my forever home to live out the best years of my life. I am full of energy. Everyday I am learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.';
    popupBg11.classList.add('active');
})

moreTimmy1.addEventListener ('click', () => {
    popupPetImg1.classList.remove('popup_img21');
    popupPetImg1.classList.remove('popup_img1');
    popupPetImg1.classList.remove('popup_img31');
    popupPetImg1.classList.remove('popup_img41');
    popupPetImg1.classList.remove('popup_img81');
    popupPetImg1.classList.remove('popup_img71');
    popupPetImg1.classList.remove('popup_img61')
    popupPetImg1.classList.add('popup_img51');
    petName1.innerHTML = 'Timmy';
    petBreed1.innerHTML = 'Cat - British Shorthair';
    petDiscr1.innerHTML = 'Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.';
    popupBg11.classList.add('active');
})

moreCharly1.addEventListener ('click', () => {
    popupPetImg1.classList.remove('popup_img21');
    popupPetImg1.classList.remove('popup_img1');
    popupPetImg1.classList.remove('popup_img31');
    popupPetImg1.classList.remove('popup_img41');
    popupPetImg1.classList.remove('popup_img51');
    popupPetImg1.classList.remove('popup_img81');
    popupPetImg1.classList.remove('popup_img71');
    popupPetImg1.classList.add('popup_img61');
    petName1.innerHTML = 'Charly';
    petBreed1.innerHTML = 'Dog - Jack Russell Terrier ';
    petDiscr1.innerHTML = 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.';
    popupBg11.classList.add('active');
})

moreScarlett1.addEventListener ('click', () => {
    popupPetImg1.classList.remove('popup_img21');
    popupPetImg1.classList.remove('popup_img1');
    popupPetImg1.classList.remove('popup_img31');
    popupPetImg1.classList.remove('popup_img41');
    popupPetImg1.classList.remove('popup_img51');
    popupPetImg1.classList.remove('popup_img61');
    popupPetImg1.classList.remove('popup_img81');
    popupPetImg1.classList.add('popup_img71');
    petName1.innerHTML = 'Scarlett';
    petBreed1.innerHTML = 'Dog - Jack Russell Terrier ';
    petDiscr1.innerHTML = 'Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.';
    popupBg11.classList.add('active');
})

moreFreddie1.addEventListener ('click', () => {
    popupPetImg1.classList.remove('popup_img21');
    popupPetImg1.classList.remove('popup_img1');
    popupPetImg1.classList.remove('popup_img31');
    popupPetImg1.classList.remove('popup_img41');
    popupPetImg1.classList.remove('popup_img51');
    popupPetImg1.classList.remove('popup_img61');
    popupPetImg1.classList.remove('popup_img71');
    popupPetImg1.classList.add('popup_img81');
    petName1.innerHTML = 'Freddie';
    petBreed1.innerHTML = 'Cat - British Shorthair ';
    petDiscr1.innerHTML = 'Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.';
    popupBg11.classList.add('active');
})