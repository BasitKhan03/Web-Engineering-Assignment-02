const card1 = document.getElementById('card1'), card2 = document.getElementById('card2'), card3 = document.getElementById('card3'),
card4 = document.getElementById('card4'), card5 = document.getElementById('card5'), card6 = document.getElementById('card6'),
card7 = document.getElementById('card7'), card8 = document.getElementById('card8'), card9 = document.getElementById('card9'),
card10 = document.getElementById('card10'), card11 = document.getElementById('card11'), card12 = document.getElementById('card12');

card1.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Multix Shoes"
    document.getElementById('subH').innerHTML = "Men's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img1.jpg')
});

card2.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Stan Smith Shoes"
    document.getElementById('subH').innerHTML = "Men's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img2.jpg')

});

card3.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Forum Low Shoes"
    document.getElementById('subH').innerHTML = "Youth Originals"
    document.getElementById('imgModal').setAttribute('src', 'img3.jpg')

});

card4.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Swift Run 22"
    document.getElementById('subH').innerHTML = "Women's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img4.jpg')

});

card5.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Disney Stan Shoes"
    document.getElementById('subH').innerHTML = "Women's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img5.jpg')

});

card6.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "NMD_R1 Shoes"
    document.getElementById('subH').innerHTML = "Men's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img6.jpg')

});

card7.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Gazelle Shoes"
    document.getElementById('subH').innerHTML = "Women's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img7.jpg')

});

card8.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Drax Ozelia Shoes"
    document.getElementById('subH').innerHTML = "Men's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img8.jpg')

});

card9.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Multix J Shoes"
    document.getElementById('subH').innerHTML = "Women's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img9.jpg')

});

card10.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "4D FWD Shoes"
    document.getElementById('subH').innerHTML = "Men's Originals"
    document.getElementById('imgModal').setAttribute('src', 'img10.jpg')

});

card11.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "UltraBoost 5.0"
    document.getElementById('subH').innerHTML = "Sportswear"
    document.getElementById('imgModal').setAttribute('src', 'img11.jpg')

});

card12.addEventListener("click", () => {
    document.getElementById('mainH').innerHTML = "Fortarun Messi El"
    document.getElementById('subH').innerHTML = "Sportswear"
    document.getElementById('imgModal').setAttribute('src', 'img12.jpg')

});


let a = 1;

const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

plus.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
});

minus.addEventListener("click", () => {
    if (a > 0) {
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
    }
});


let close = document.getElementById('closeBtn');
const numInnerText = num.innerText;

close.addEventListener("click", () => {
    a = 0;
    num.innerText = numInnerText;
})


const input = document.getElementById('email');
const form = document.getElementById('newsletter');

form.addEventListener("submit", (e) => {
    if (input.value.length > 0) {
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (input.value.match(reg)) {
            document.getElementById('feedback1').style.display = "none";
            document.getElementById('feedback2').style.display = "none";
            input.value = '';
            alert("Thanks For Subscribing !");
            e.preventDefault()
        }

        else {
            e.preventDefault()
            document.getElementById('feedback1').style.display = "none";
            document.getElementById('feedback2').style.display = "Block";
        } 
    }

    else if (input.value === '' || input.value == null) {
        e.preventDefault()
        document.getElementById('feedback2').style.display = "none";
        document.getElementById('feedback1').style.display = "Block";
    }
});
