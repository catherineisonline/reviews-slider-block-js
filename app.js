//Reviews Data

const reviews = [
    {
        id: 1,
        name: "Ana Kowalski",
        job: "Web Developer",
        img: "https://images.generated.photos/MfG1uL9_lwaXj_I7A4z4I6rC8DWbUH0MpWyxDu9eMVI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQ1NzEyLmpwZw.jpg",
        text: "This is the best app I have used to manage customer reviews. It is very customizable with a ton of options. I love the customer service. They are lighting fast with any questions I have and provide great support when needed. I highly recommend it....",
    },
    {
        id: 2,
        name: "Lisa Denson",
        job: "Designer",
        img: "https://images.generated.photos/R7J_x_Eiz8hOa4PBdy4az0OXGtPgxBuFnSv77qUrv3Y/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODg5Njc3LmpwZw.jpg",
        text: "Great app! All I need now is a fully translation into another language (german in my case). You can easily change it but the date for instance stays in english and also in the american format MM/DD/YYY",
    },
    {
        id: 3,
        name: "Sarah Smith",
        job: "Team Manager",
        img: "https://images.generated.photos/YUtdEs4bTngHiYaZPwpyOCjACif6oE3ticPNV5L2WjU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTMzNzU5LmpwZw.jpg",
        text: "Same as most disappointed review, the app did not work, duplicating on my product page. And when I deleted the APP, the review title, the write a comment and previous comments are still on my page, although the app has been deleted. I can't seem...",
    },
      {
        id: 4,
        name: "Nick Cole",
        job: "Project Manager",
        img: "https://images.generated.photos/yJs3AV7c22oNfG-YhiF1BFk-aQEwVgGuVYpP7ZFiXy8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTMzODg2LmpwZw.jpg",
        text: "I love the app but I am still trying to preview fewer reviews per page.On my product pages, 5 reviews are shown and I would like to show only 2 or 3. Is it even possible to modify this? and How? Thanks!"
    },
        {
        id: 5,
        name: "Kim Yong",
        job: "Marketing Specialist",
        img: "https://images.generated.photos/iPR0DwYRyOx_S8XuZKGYnyEDnEw97BChQDFCkLNsqhs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTYxNTMwLmpwZw.jpg",
        text: "This app is TOP NOTCH!! love it, simple and clean and the SUPPORT is 10000% on point! responsive and FIXES any issues I've had! HIGHLY RECOMMENDED and you can't beat free",
    },
          {
        id: 6,
        name: "Cindy Kane",
        job: "Sales Manager",
        img: "https://images.generated.photos/CWGIBk0LxK1i7q7nCILxSMuL9VULSfVhkYL4gOHwt2Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTk2MjU2LmpwZw.jpg",
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
