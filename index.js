// onClick : 클릭할 때 이벤트 실행
document.querySelector(".item1").onclick = () => {
    console.log("onclick");
};

//onMouseOver : 마우스가 영역에 들어왔을때 이벤트 실행
document.querySelector(".item2").onmouseover = () => {
    console.log("onMouseOver");
};

//onMouseOut : 마우스가 영약을 벗어났을 때 이벤트 실행
document.querySelector(".item3").onmouseout = () => {
    console.log("onMouseOut");
}

//onMouseMove : 마우스가 영역안에서 움직일 때 이벤트 실행
document.querySelector(".item4").onmousemove = () => {
    console.log("onmousemove");
}

//onKeyDown : key를 눌렀을때 이벤트 실행
// ㄴ value값이 입력되기 전에 이벤트 실행
// ㄴ 모든 key값을 인식
document.querySelector(".item5 input").onkeydown = (e) => {
    console.log("keyCode : ",e.keyCode,"value :", e.target.value);
};

//onkeyUp : key를 땠을때 실행
// ㄴ value 값이 입력되고 나서 이벤트 실행
// ㄴ 한글, 영어 구분 x
document.querySelector(".item6 input").onkeyup = (e) => {
    console.log("keycode : ",e.keyCode, "value :  ", e.target.value);
};

//onFouse : fouse가 될 경우 이벤트 실행
//parentElement : 부모element
document.querySelector(".item5 input").onfocus = (e) => {
    // console.log("focus");
    let inputBox = e.target.parentElement;
    inputBox.classList.add("active");
};

//onBlur : fouse를 잃을 경우 이벤트 실행
document.querySelector(".item5 input").onblur = (e) => {
    let inputBox = e.target.parentElement;
    inputBox.classList.remove("active");
}

//onChange : input 안의 값이 변경된 후 이벤트 실행 - 엔터나 다른 이벤트 영역으로 갔을때 실행
// document.querySelector(".item5 input").onchange = (e) => {
//     let inputBox = e.target.parentElement.lastElementChild;
//     inputBox.innerHTML = "<br />안뇽!";
// }

//onInput : input 안의 값이 변경될 때마다 이벤트 실행
// document.querySelector(".item6 input").oninput = (e) => {
//     let inputBox = e.target.parentElement.lastElementChild;
//     inputBox.innerHTML = "<br />" + e.target.value;
// };

// onResize : 창 크기가 변할때 이벤트 실행
window.onresize = (e) => {
    console.log(e.target.innerWidth);
}

//window창이 500px 이하일때는 빈 화면이게,501px 이상일 때는 원래대로

// window.onresize = (e) => {
//     if(e.target.innerWidth <= 500){
//         let removediv = document.querySelectorAll("div")
//         removediv.forEach((div) => {div.remove();})
//     }
// }

// window.onresize = (e) => {
//     if(e.target.innerWidth <= 500){
//         let removeDiv = document.querySelectorAll("div")
//         removeDiv.forEach((div) => {div.remove();})
//     }else{
//         let add = document.querySelector("body");
//         add.innerHTML = <div class='items item1'>onClick</div>;
//     }
// }

window.onresize = (e) => {
    let windowWidth = e.target.innerWidth;
    let itemList = document.querySelectorAll(".items");

    if(windowWidth <= 500){
        itemList.forEach((item) => {
            item.classList.add("remove");
        })
    }else{
        itemList.forEach((item) => {
            item.classList.remove("remove");
        })
    }
};
//querySelectorAll로 불러오면 배열의 형태로 불러와짐


let item5 = document.querySelector(".item5 input");
let item6 = document.querySelector(".item6 input");
const inputHandler = (e) => {
    let inputBox = e.target.parentElement.lastElementChild;
    inputBox.innerHTML = "<br />" + e.target.value;
}
//item6.addEventListener(이벤트, 함수)
item5.addEventListener("input", inputHandler);
item6.addEventListener("input", inputHandler);