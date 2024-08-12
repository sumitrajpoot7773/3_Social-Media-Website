let menuItems=document.querySelectorAll(".menu-item");



const changeActiveItem=()=>{
   
       menuItems.forEach(item=>{
        item.classList.remove("active");
       })
}

menuItems.forEach(item=>{
    item.addEventListener("click",()=>{
        changeActiveItem();
        item.classList.add("active");

        if (item.id !== 'notification') {
            document.querySelector('.notification-popup')
            .style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup')
          .style.display = 'block';
          document.querySelector('#notification .notification-count').style.display='none';
        }

        if (item.id !== 'Theme') {
            document.querySelector('.customize-theme')
            .style.display = 'none';
        }
        else{
            document.querySelector('.customize-theme')
          .style.display = 'block';
        //   document.querySelector('#notification .notification-count').style.display='none';
        }
    })
})
             
//! =========================================MESSAGES======================


const messagesNotifications = document.querySelectorAll(".messages-notification");
const messages = document.querySelector(".messages");
const notificationCount = document.querySelectorAll('.notification-count-message');

messagesNotifications.forEach(item => {
    item.addEventListener("click", () => {
        if (messages) {
            messages.style.boxShadow = '0 0 1rem gray';
            // Iterate over each notificationCount element since it's a NodeList
            notificationCount.forEach(countElement => {
                countElement.style.display = 'none';
            });

            setTimeout(() => {
                messages.style.boxShadow = 'none';
               
            },2000);
        }
    });
});



// const message = document.querySelectorAll(".message");
// const messageSearch = document.getElementById("messages-search");

// // SEARCH CHAT

// const searchMessage =()=>{

//     const val = messageSearch.value.toLowerCase();
//     console.log(val);
//     message.forEach(chat => {
//         let name = chat.querySelector('h5').textContent.toLowerCase();
//         if (name.indexOf(val)!== -1) {
//             chat.style.display = "flex";
//         } else {
//             chat.style.display = "none";
//         }
//     });
// }

// messageSearch.addEventListener('keyup',searchMessage)


//?================================================ ===============THEME===============================================





const theme = document.querySelectorAll('#Theme');
const themeModel = document.querySelector('.customize-theme');

const openThemeModel = () => {
    themeModel.style.display = 'grid';
}

const closeThemeModel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
};

// Using forEach to attach the event listener to each theme element
theme.forEach(item => {
    item.addEventListener('click', openThemeModel);
});

// Adding the event listener to the themeModel instead of theme
themeModel.addEventListener('click', closeThemeModel);



// !=====================================================================================FONTS====================================================


const fontSizeOption = document.querySelectorAll('.choose-size span');
let root=document.documentElement;


const changeActiveColorClass =()=>{
    fontSizeOption.forEach((event)=>{
        event.classList.remove('active');
    })
}
fontSizeOption.forEach(item => {
    let fontSize;
    item.addEventListener('click', () => {
        changeActiveColorClass();
        if (item.classList.contains('font-size-1')) {
            fontSize='10px';
           
        }
        else if (item.classList.contains('font-size-2')) {
            fontSize='13px';
           
        }
        else if (item.classList.contains('font-size-3')) {
            fontSize='16px';
            
        }
        else if (item.classList.contains('font-size-4')) {
            fontSize='19px';
         
        }
        else if (item.classList.contains('font-size-5')) {
            fontSize='22px';
           
        }
        item.classList.add('active');
        root.style.setProperty('--sticky-top-left', '5.4rem');
                root.style.setProperty('--sticky-top-right', '5.4rem');
    document.querySelector('html').style.fontSize=fontSize;
   });
})

//! =================================================THEME-COLOR ==========================================================================

const colorPlalette=document.querySelectorAll('.choose-color span');


const changeActiveClass =()=>{
    colorPlalette.forEach((change)=>{
        change.classList.remove('active');
    })
}
colorPlalette.forEach((e)=>{
    e.addEventListener('click',()=>{
       changeActiveClass();
        if (e.classList.contains('color-1')) {
            primaryHue=252;
        }
        else if (e.classList.contains('color-2')) {
            primaryHue=52;
        }
        else if (e.classList.contains('color-3')) {
            primaryHue=552;
        }
        else if (e.classList.contains('color-4')) {
            primaryHue=300;
        }
        else if (e.classList.contains('color-5')) {
            primaryHue=120;
        }
        e.classList.add('active');
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})



// ?==========================================================================BACKGROUND-COLOR======================================================


const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');


let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


const changeBg =()=>{
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

Bg1.addEventListener('click',()=>{
    lightColorLightness='93%';
    whiteColorLightness='100%';
    darkColorLightness='17%';

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    // window.location.reload();
    changeBg();
});
Bg2.addEventListener('click',()=>{
    lightColorLightness='15%';
    whiteColorLightness='20%';
    darkColorLightness='95%';

    Bg2.classList.add('active');
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
});

Bg3.addEventListener('click',()=>{
    lightColorLightness='10%';
    whiteColorLightness='10%';
    darkColorLightness='95%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
});
