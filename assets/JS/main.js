//ham lang nghe va click vao nut buy ticket
document.addEventListener('DOMContentLoaded', function() {
        const buyBtns = document.querySelectorAll('.js-buyticket')
        const modal = document.querySelector('.js-modal')
        const modalcontainer = document.querySelector('.js-modalcontainer')
        const modalclose = document.querySelector('.js-modalclose')

        //them class open vao class modal
        function showbuyticket () {
            modal.classList.add('open')
        }
        //xoa class open trong class modal
        function  classebuyticket () {
            modal.classList.remove('open')
        }
        //noi bot den khi gan toi modal thi stop
        function thuattoannoibot(event) {
            event.stopPropagation()
        }
        //vong lap de duyet so lan bam nut buyticket
        for(const buyBtn of buyBtns) {
            buyBtn.addEventListener('click',showbuyticket)
            
        }
        modalclose.addEventListener('click', classebuyticket)
        modal.addEventListener('click', classebuyticket)
        modalcontainer.addEventListener('click',thuattoannoibot)
});
//ham chuyen doi thanh header sang 3 gach tren mobile
document.addEventListener('DOMContentLoaded', function() {
        var header = document.getElementById('Header')
        var menu = document.getElementById('mobile-menu')
        var headerheight = header.clientHeight

        //dong/mo khi an vao menu
        menu.onclick = function(){
            var isclosed = header.clientHeight == headerheight;
            if(isclosed){
                header.style.height='auto';
            }else{
                header.style.height=null;
            }
        }
        var menuItems = document.querySelectorAll('.nav li a[href*="#"]');
        for(var i=0;i<menuItems.length;i++){
            var menuItem = menuItems[i];
            console.log(menuItem)
            menuItem.onclick = function(){
                var isParentmenu = this.nextElementSibling && this.nextElementSibling.classList.contains('spnav')
                if(isParentmenu)
                event.preventDefault();
                else
                header.style.height=null;
            }
        }
});
        
//ham chuyen anh slider
document.addEventListener('DOMContentLoaded', function() {
        let index=0; 
        showSlides();
        function showSlides() {
            const slides=document.getElementsByClassName("mySlides"); 
            //vong lap gan gia tri none cho ca 3 cai anh
            for(var i=0; i<slides.length;i++){
                slides[i].style.display="none";
            }
            index++; //tang dan len 4
            if(index > slides.length ){ //neu vuot qua 3 thi cho index ve 1 
            index=1;
            }
            //truong hop ko vuot qua 3 thi gan gia tri block cho mang-1 
            slides[index-1].style.display="block";

        setTimeout(showSlides,3000)
        }
});





