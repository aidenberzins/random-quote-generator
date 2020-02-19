const button = document.querySelector("button");
const frame = document.querySelector("img");
const span = document.querySelector("span");

const quotes = [
  [
    "https://ideas.staticsfly.com/ideas/wp-content/uploads/2016/04/graduation-quote_college_nora-ephron.jpg",
    "Your education is a dress rehersal for a life that is yours to lead. ~ Nora Ephron"
  ],
  [
    "https://img.freepik.com/free-vector/light-blue-lettering-quote-design_23-2147751090.jpg?size=338&ext=jpg",
    "There is always a reason to smile"
  ],
  [
    "https://st2.depositphotos.com/5757440/11093/v/950/depositphotos_110939178-stock-illustration-enjoy-this-sweet-moment-quote.jpg",
    "Enjoy This Sweet Moment"
  ][
    ("https://www.bulletjournaladdict.com/wp-content/uploads/2019/01/Quote-Page-Ideas-For-Your-Bullet-Journal-Using-Quote-Pages-in-A-Bullet-Journal.jpg",
    "Life is Like A Cup of Tea... it's all in how you make it")
  ],
  [
    "https://images-na.ssl-images-amazon.com/images/I/51HMGx0ITjL.jpg",
    "Winners are not people who never fail, but people who never quit"
  ],
  [
    "https://www.threegirlsmedia.com/wp-content/uploads/2019/11/3G.Quote_.SethGodin.1.26.2018-1024x1024.png",
    "People do not buy goods and services. They buy relations, stories, and magic"
  ],
  [
    "https://i.pinimg.com/originals/76/29/fe/7629fe02b7810194a032e77d50f538da.png",
    "if they don't know you personally don&apos;t take it personal"
  ],
  [
    "https://s3.amazonaws.com/awr.blog/blog/wp-content/uploads/2014/07/3.png",
    "Content is anything that adds value to the reader&apos; life"
  ],
  [
    "https://ideas.staticsfly.com/ideas/wp-content/uploads/2016/04/graduation-quote_wisdom_edmund-burke.jpg",
    "You can never plan the future by the past"
  ],
  [
    "https://www.success.com/wp-content/uploads/legacy/sites/default/files/new3.jpg",
    "Sometimes Later becomes never. Do it now."
  ]
];

button.addEventListener("click", function() {
  // change image quote and alt tag on click
  let quote = getImage();
  let image = quote[0];
  let alt = quote[1];
  frame.src = image;
  frame.alt = alt;
  span.innerHTML = alt;
});

const getImage = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};
