//Reviews Data

const reviews = [
    {
        id: 1,
        name: "Ana Kowalski",
        job: "Web Developer",
        img: "https://images.generated.photos/sBDC82B7nCFugGdNmgQ7RaXBFW_g2kK6UQ2nf3NWzP4/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1NDM3MDMuanBn.jpg",
        text: "This is the best app I have used to manage customer reviews. It is very customizable with a ton of options. I love the customer service. They are lighting fast with any questions I have and provide great support when needed. I highly recommend it....",
    },
    {
        id: 2,
        name: "Lisa Denson",
        job: "Designer",
        img: "https://images.generated.photos/KDmJVf8K2mAiAZ8KTiPtl9hUPNFI8ka6TUrj5koFsq8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NTE1NjMuanBn.jpg",
        text: "Great app! All I need now is a fully translation into another language (german in my case). You can easily change it but the date for instance stays in english and also in the american format MM/DD/YYY",
    },
    {
        id: 3,
        name: "Sarah Smith",
        job: "Team Manager",
        img: "https://images.generated.photos/2-n1sqqMNj0L7Cq14Skzj0IiLUzhcmTK8k4rD4FKLhI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1MzQ5MTQuanBn.jpg",
        text: "Same as most disappointed review, the app did not work, duplicating on my product page. And when I deleted the APP, the review title, the write a comment and previous comments are still on my page, although the app has been deleted. I can't seem...",
    },
      {
        id: 4,
        name: "Nick Cole",
        job: "Project Manager",
        img: "https://images.generated.photos/qqETlT-jSENAnyAfqf2z0wbsQ0fyb4X4oXlUR038RoI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA4NzQ0OTUuanBn.jpg",
        text: "I love the app but I am still trying to preview fewer reviews per page.On my product pages, 5 reviews are shown and I would like to show only 2 or 3. Is it even possible to modify this? and How? Thanks!"
    },
        {
        id: 5,
        name: "Kim Yong",
        job: "Marketing Specialist",
        img: "https://images.generated.photos/07LbY5ENx1IBQ_lq8Wrt7tqv5ZhwUw_JX50y6nLmF98/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA1OTgxMDMuanBn.jpg",
        text: "This app is TOP NOTCH!! love it, simple and clean and the SUPPORT is 10000% on point! responsive and FIXES any issues I've had! HIGHLY RECOMMENDED and you can't beat free",
    },
          {
        id: 6,
        name: "Cindy Kane",
        job: "Sales Manager",
        img: "https://images.generated.photos/3In-5_Ur3qRzb0fJBlW1QjcgCQDGiCHmiwZAKxTwXlk/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAyMTIxNTUuanBn.jpg",
        text: "A very useful app for providing some simple social proof for your products. It would be very if the reviews were translated by translation apps that are installed on your site as this doesn't appear to be possible.",
    }
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item

let currentItem = 0;

//load initial item

window.addEventListener("DOMContentLoaded", function () {
    showPerson();
});

//show person based on item

function showPerson () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person 
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
});

//random person

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length)
    showPerson();
});