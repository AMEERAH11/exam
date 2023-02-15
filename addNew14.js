document.addEventListener("click", function (e) {
    if (e.target.classList.contains("addnewAnswer")) {
        ///العنصر الإضافة
        let addnewAnswer = e.target;
        ///الأخ   
        let optionAnsewrUl = addnewAnswer.nextElementSibling
        //أبناء الأخ
        //let ulChildren=document.getElementById("optionAnsewrUl_0").children;
        let ulChildren = optionAnsewrUl.children;
        ///عدد الأبناء 
        let countOfChildren = ulChildren.length;
        let newChildren_li = document.createElement("li");
        let newChildren_inp = document.createElement("input");
        let newChildren_lbl = document.createElement("input");
        let newChildren_inoutHID = document.createElement("input");
        let newChildren_inoutHID2 = document.createElement("input");
        let newChildren_inoutHID3 = document.createElement("input");
        let newChildren_i = document.createElement("i");
        let xx = countOfChildren;

        let questionNumber = optionAnsewrUl.id.split(`_`)[1]
        console.log(questionNumber)
        newChildren_li.id = `optionAnsewr_${questionNumber}_li_${countOfChildren}`;
        

        newChildren_inp.id = `optionAnsewr_${questionNumber}_radio_${countOfChildren}`;
        newChildren_inp.type = "radio";
        newChildren_inp.value = `${countOfChildren}`
        newChildren_inp.name = `Questions[${questionNumber}].RightAnswer`;
        newChildren_inp.className = "radio_answer form-check-input";
        newChildren_inp.style="height: 29px; width: 25px;"


        newChildren_lbl.id = `optionAnsewr_${questionNumber}_input_${countOfChildren}`;
        newChildren_lbl.for = newChildren_inp.id;
        newChildren_lbl.className = "form-check-input w-75 h-50 mx-1"; 
        newChildren_lbl.name = `Questions[${questionNumber}].Answers[${countOfChildren}].text`;
        newChildren_lbl.required

        newChildren_inoutHID.type = "hidden";
        newChildren_inoutHID.name = `Questions[${questionNumber}].Answers[${countOfChildren}].aID`;
        newChildren_inoutHID2.type = "hidden";
        newChildren_inoutHID2.name = `Questions[${questionNumber}].Answers[${countOfChildren}].QuestionID`;
        newChildren_inoutHID3.type = "hidden";
        newChildren_inoutHID3.name = `Questions[${questionNumber}].Answers[${countOfChildren}].isexist`;

        newChildren_i.id = `optionAnsewr_${questionNumber}_i_${countOfChildren}`;
       
        newChildren_i.className = "fa-solid fa-x x";
        newChildren_i.style= "cursor: pointer; font-size: 15px;";
     

        optionAnsewrUl.appendChild(newChildren_li);
        newChildren_li.appendChild(newChildren_inp);
        newChildren_li.appendChild(newChildren_lbl);
        newChildren_li.appendChild(newChildren_inoutHID);
        newChildren_li.appendChild(newChildren_inoutHID2);
        newChildren_li.appendChild(newChildren_inoutHID3);


        newChildren_li.appendChild(newChildren_i);





    }
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("x")) {
        let dad = e.target.parentElement;//li
        let grandDad = dad.parentElement;//ul
        let questionNumber = grandDad.id.split(`_`)[1]
        console.log(questionNumber)
        dad.remove();
        let countOfChildren = grandDad.children.length;//lis


        for (let i = 0; i < countOfChildren; i++) {
            let li = grandDad.children[i];
            let idli = li.id.slice(0, length - 1);
            idli += i;
            console.log(idli)
            li.id = idli;
            li.children[0].name = `Questions[${questionNumber}].RightAnswer`;
            li.children[0].value = `${i}`;
            li.children[1].name = `Questions[${questionNumber}].Answers[${i}].text`;

            li.children[2].name = `Questions[${questionNumber}].Answers[${i}].aID`;
            //   li.children[2].value = li.children[2].value;
            li.children[3].name = `Questions[${questionNumber}].Answers[${i}].QuestionID`;
            li.children[3].value = li.children[3].value
            li.children[4].name = `Questions[${questionNumber}].Answers[${i}].isexist`;
            li.children[4].value = li.children[4].value;


            for (let ii = 0; ii < li.children.length; ii++) {
                let id = li.children[ii].id.slice(0, length - 1)
                id += i;
                li.children[ii].id = id;

            }




        }


    }

});
let btn_newQuestionDiv = document.getElementById("newQuestionDiv");
let questionsDiv = document.getElementById("questionsDiv");
btn_newQuestionDiv.onclick = function () {
    let x = 0;
    let numberOfQuestion = questionsDiv.children.length;
    if (numberOfQuestion == 0) {
        x = 0;

    }
    else {
        x = numberOfQuestion;
    }
    let divQ = document.createElement("div");
    let span = document.createElement("span");

    let divQText = document.createElement("div");
    let labelQText = document.createElement("label");
    let inputQText = document.createElement("input");
    let divAText = document.createElement("div");
    divQ.id = `q_${numberOfQuestion}`;
    divQ.className = "questionDiv mb-4 border p-1";
    divQ.style.position = "relative";
    divQ.innerHTML = `<span type="button" class="deletQuestion btn-close" aria-label="Close"></span>


    <div class="questionText mb-2">
      <label class="form-label" for="questioninput_${numberOfQuestion}"> السؤال</label>
      <input id="questioninput_${numberOfQuestion}" class="questioninput form-control"  placeholder="السؤال" required name="Questions[${x}].Text" >
      <div class=" "> <label class="form-label "> درجة السؤال</label><input class=" form-control" placeholder="الدرجة" required min="1" max="100" type="number" style="width:85px;" name="Questions[${x}].Grade"></div>
      <input type="hidden"  name="Questions[${x}].qID"/>
      <input type="hidden"  name="Questions[${x}].isexist"/>
     <input type="hidden"  name="Questions[${x}].ExamID"/>
    </div>


    <div class="ansewrDiv">
      <label class="from-label" for="ansewrInput_${numberOfQuestion}">الإجابات</label>
      <div id="optionAnsewr_${numberOfQuestion}" class="optionAnsewr">
        <label  class="btn btn-primary mb-2 mt-2 addnewAnswer" style="padding:6px; font-size: 12px;">إضافة خيار جديد</label>
        <ul id="optionAnsewrUl_${numberOfQuestion}" class="optionAnsewrUl">
          
        <li id="optionAnsewr_${numberOfQuestion}_li_0"><input id="optionAnsewr_${numberOfQuestion}_radio_0" type="radio"  name="Questions[${numberOfQuestion}].RightAnswer"  style="height: 29px; width: 25px;" value="0" class="form-check-input"><input id="optionAnsewr_${numberOfQuestion}_lable_0" for="optionAnsewr_${numberOfQuestion}_radio_0" class="form-check-input w-75 h-50 mx-1 " name="Questions[${numberOfQuestion}].Answers[0].text" required></input><input type="hidden" name="Questions[${numberOfQuestion}].Answers[0].aID" /><input type="hidden" name="Questions[${numberOfQuestion}].Answers[0].QuestionID" /><input type="hidden" name="Questions[${numberOfQuestion}].Answers[0].isexist"/></li>
        <li id="optionAnsewr_${numberOfQuestion}_li_1"><input id="optionAnsewr_${numberOfQuestion}_radio_1" type="radio"   name="Questions[${numberOfQuestion}].RightAnswer"  style="height: 29px; width: 25px;" value="1" class="form-check-input"><input id="optionAnsewr_${numberOfQuestion}_lable_1" for="optionAnsewr_${numberOfQuestion}_radio_1" class="form-check-input w-75 h-50 mx-1 " name="Questions[${numberOfQuestion}].Answers[1].text" required></input><input type="hidden" name="Questions[${numberOfQuestion}].Answers[1].aID" /><input type="hidden" name="Questions[${numberOfQuestion}].Answers[1].QuestionID" /><input type="hidden" name="Questions[${numberOfQuestion}].Answers[1].isexist"/></li>

        </ul>
      </div>
    </div>`
    questionsDiv.append(divQ)


    /*/*<i id="optionAnsewr_${numberOfQuestion}_i_1" class="bi bi-x x" style="cursor: pointer;">x</i>*/

    /**
        questionsDiv.innerHTML+=` <div id="q_${numberOfQuestion}" class="questionDiv mb-4 border p-1" style="position: relative;">
        <span type="button" class="deletQuestion btn-close" aria-label="Close"></span>
        <div class="questionText mb-2">
          <label class="form-label" for="questioninput_${numberOfQuestion}"> السؤال</label>
          <input id="questioninput_${numberOfQuestion}" class="questioninput form-control"  placeholder="السؤال" required name="titel${x}" >
        </div>
        <div class="ansewrDiv">
          <label class="from-label" for="ansewrInput_${numberOfQuestion}">الإجابات</label>
          <div id="optionAnsewr_${numberOfQuestion}" class="optionAnsewr">
            <label  class="btn btn-primary mb-2 mt-2 addnewAnswer" style="padding:6px; font-size: 12px;">إضافة خيار جديد</label>
            <ul id="optionAnsewrUl_${numberOfQuestion}" class="optionAnsewrUl">
              
              <li id="optionAnsewr_${numberOfQuestion}_li_0"><input id="optionAnsewr_${numberOfQuestion}_radio_0" type="radio" name="r" class="form-check-input"><input id="optionAnsewr_${numberOfQuestion}_lable_0" for="optionAnsewr_${numberOfQuestion}_radio_0" class="form-check-input w-50"></input><i id="optionAnsewr_${numberOfQuestion}_i_0" class="bi bi-x x" style="cursor: pointer;">x</i></li>
              <li id="optionAnsewr_${numberOfQuestion}_li_1"><input id="optionAnsewr_${numberOfQuestion}_radio_1" type="radio" name="r" class="form-check-input"><input id="optionAnsewr_${numberOfQuestion}_lable_1" for="optionAnsewr_${numberOfQuestion}_radio_1" class="form-check-input w-50"></input><i id="optionAnsewr_${numberOfQuestion}_i_1" class="bi bi-x x" style="cursor: pointer;">x</i></li>
    
            </ul>
          </div>
        </div>
      </div>` */

};

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("deletQuestion")) {
        let dad = e.target.parentElement;
        let questionsDiv = document.getElementById("questionsDiv");
        dad.remove();
        let countOfQuestion = questionsDiv.children.length;
        for (let i = 0; i < countOfQuestion; i++) {
            let bdr = questionsDiv.children[i];
            let id = bdr.id.slice(0, length - 1);

            id += i;

            bdr.id = id;

            let bdr1 = bdr.children[1];

            bdr1.children[0].for = `questioninput_${i}`;
            bdr1.children[1].id = `questioninput_${i}`;
            bdr1.children[1].name = `Questions[${i}].Text`;
            bdr1.children[2].children[1].name = `Questions[${i}].Grade`;
            bdr1.children[3].name = `Questions[${i}].qID`;
            bdr1.children[4].name = `Questions[${i}].isexist`;
            bdr1.children[5].name = `Questions[${i}].ExamID`;
            console.log(bdr1.children[3])

            let bdr2 = bdr.children[2];
            let optionAnsewr = bdr2.children[1];
            optionAnsewr.id = `optionAnsewr_${i}`;
            let optionAnsewrUl = optionAnsewr.children[1];
            optionAnsewrUl.id = `optionAnsewrUl_${i}`;
            for (let ii = 0; ii < optionAnsewrUl.children.length; ii++) {
                let li = optionAnsewrUl.children[ii]
                let part1 = li.id.split('_');

                part1[1] = `_${i}_`;
                part1[2] += "_";
                let part2 = ""
                for (let g = 0; g < part1.length; g++) {
                    part2 += part1[g]
                }
                li.id = part2;

                let a1 = li.children[1].name.split(`.`);
                a1[0] = `Questions[${i}]`;
                let a2 = `${a1[0]}.${a1[1]}.${a1[2]}`;




                console.log(a2)
                li.children[0].id = `optionAnsewr_${i}_radio_0`;
                li.children[0].name = `Questions[${i}].RightAnswer`;
                li.children[0].value = `${ii}`
                li.children[1].id = `optionAnsewr_${i}_lable_0`;
                li.children[1].for = `optionAnsewr_${i}_radio_0`
                li.children[1].name = a2;
                li.children[2].name = `Questions[${i}].Answers[${ii}].aID`;
                li.children[3].name = `Questions[${i}].Answers[${ii}].QuestionID`;
                li.children[4].name = `Questions[${i}].Answers[${ii}].isexist`;



            }

        }


    }
});

