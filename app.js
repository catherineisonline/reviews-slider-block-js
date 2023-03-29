//Reviews Data

const reviews = [
  {
    id: 1,
    name: "Ana Kowalski,",
    job: "Web Developer",
    img: "https://images.generated.photos/MfG1uL9_lwaXj_I7A4z4I6rC8DWbUH0MpWyxDu9eMVI/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTQ1NzEyLmpwZw.jpg",
    text: "The pizza at this restaurant is absolutely delicious! The crust is perfectly crispy and the toppings are fresh and flavorful. I highly recommend trying the margherita pizza.    ",
  },
  {
    id: 2,
    name: "Lisa Denson",
    job: "Designer",
    img: "https://images.generated.photos/R7J_x_Eiz8hOa4PBdy4az0OXGtPgxBuFnSv77qUrv3Y/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODg5Njc3LmpwZw.jpg",
    text: "The service at this restaurant is top-notch. The staff is friendly and attentive, making sure that you have everything you need to enjoy your meal. Plus, the atmosphere is cozy and welcoming.",
  },
  {
    id: 3,
    name: "Sarah Smith",
    job: "Team Manager",
    img: "https://images.generated.photos/YUtdEs4bTngHiYaZPwpyOCjACif6oE3ticPNV5L2WjU/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTMzNzU5LmpwZw.jpg",
    text: "This pizza restaurant has some of the best deals in town. Their lunch specials are a steal, and you get a lot of food for your money. I love that I can get a delicious pizza without breaking the bank.",
  },
  {
    id: 4,
    name: "Nina Cole",
    job: "Project Manager",
    img: "https://images.generated.photos/yJs3AV7c22oNfG-YhiF1BFk-aQEwVgGuVYpP7ZFiXy8/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTMzODg2LmpwZw.jpg",
    text: "I've been coming to this restaurant for years and it never disappoints. The consistency in the quality of their pizza is impressive. Whether I'm dining in or ordering takeout, I know I'll always get a great meal.",
  },
  {
    id: 5,
    name: "Kim Yong",
    job: "Marketing Specialist",
    img: "https://images.generated.photos/iPR0DwYRyOx_S8XuZKGYnyEDnEw97BChQDFCkLNsqhs/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTYxNTMwLmpwZw.jpg",
    text: "If you're a fan of spicy food, you have to try their 'spicy pepperoni' pizza. It's got the perfect amount of heat and the flavor is amazing. It's definitely one of my favorite pizzas on the menu.",
  },
  {
    id: 6,
    name: "Cindy Kane",
    job: "Sales Manager",
    img: "https://images.generated.photos/CWGIBk0LxK1i7q7nCILxSMuL9VULSfVhkYL4gOHwt2Q/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTk2MjU2LmpwZw.jpg",
    text: "I recently tried the gluten-free pizza at this restaurant and it was fantastic. It's hard to find good gluten-free options, but this pizza exceeded my expectations. The crust was crispy and the toppings were delicious. I'm so glad I found a place where I can still enjoy pizza without any gluten.",
  },
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

function showPerson() {
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
