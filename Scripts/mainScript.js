// menuitems logic here
const menuItems = document.querySelector(
  ".section4 .wrapper .menuWrapper ul"
).children;

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", (e) => {
    setMenuImg(i);
  });
}

function setMenuImg(id) {
  const temp = document.getElementById("menuimg");
  switch (id) {
    case 0:
      temp.src = "../Resources/image.png";
      break;
    case 1:
      temp.src = "../Resources/img-1.jpg";
      break;
    case 2:
      temp.src = "../Resources/img-2.jpg";
      break;
    default:
      throw new Error("Invalid id");
  }

  const menuList = document.getElementById("menu").children;
  for (let i = 0; i < menuList.length; i++) {
    if (i == id) {
      menuList[i].className = "menuOption menuActive";
    } else {
      menuList[i].className = "menuOption";
    }
  }
}
// contactBtn logic here
const contactBtn = document.getElementById("contactBtn");
contactBtn.addEventListener("click", (e) => {
  const temp = document.getElementById("popup");
  temp.style.display = "flex";
});
// closeBtn logic here
const closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", (e) => {
  const temp = document.getElementById("popup");
  temp.style.display = "none";
});

// imgSlider Logic here

function highlightBtn(id) {
  const sliderBtnGroup = document.getElementById("sliderBtnGroup");
  const childs = sliderBtnGroup.children;
  for (let i = 0; i < childs.length; i++) {
    if (id - 1 == i) {
      childs[i].className = `sliderBtn active`;
      console.log("found it");
    } else {
      childs[i].className = `sliderBtn`;
    }
  }
}

function imgSlider() {
  const primeNumber = 370;
  const imgWrapper = document.getElementById("imgWrapper");
  const childCount = imgWrapper.childElementCount;
  const totalWidth = childCount * primeNumber + (childCount - 1) * 20;
  const outSideView = totalWidth - imgWrapper.offsetWidth;
  let buttonNums = Math.ceil(outSideView / primeNumber) + 1;

  if (window.innerWidth <= 500) {
    buttonNums = buttonNums - 1;
  }

  console.log(outSideView / primeNumber);

  let Transitioned = 0;
  let currentPosition = 1;

  function sliderBtnAct(e) {
    let power = e.target.id - currentPosition;
    highlightBtn(e.target.id);

    if (power < 0) {
      Transitioned = Transitioned - primeNumber * Math.abs(power);
    } else {
      Transitioned = Transitioned + primeNumber * Math.abs(power);
    }
    currentPosition = e.target.id;

    if (Transitioned >= outSideView + primeNumber) {
      return;
    } else {
      imgWrapper.style.transform = `translateX(-${Transitioned}px)`;
    }
  }

  const btnGroup = document.getElementById("sliderBtnGroup");
  btnGroup.innerHTML = "";
  for (let i = 0; i < buttonNums; i++) {
    const temp = document.createElement("span");
    i == 0
      ? (temp.className = "sliderBtn active")
      : (temp.className = "sliderBtn");
    temp.id = i + 1;
    temp.addEventListener("click", sliderBtnAct);
    btnGroup.appendChild(temp);
  }
}

window.addEventListener("resize", (e) => {
  imgSlider();
});
imgSlider();
