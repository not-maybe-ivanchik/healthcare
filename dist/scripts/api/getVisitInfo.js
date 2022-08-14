import VisitCardiologist from"../classes/VisitCardiologist.js";import VisitDentist from"../classes/VisitDentist.js";import VisitTherapist from"../classes/VisitTherapist.js";const getVisitInfo=async e=>{const t=await fetch("https://ajax.test-danit.com/api/v2/cards/",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}}).then((e=>e.json()));document.querySelector(".cards-box").innerHTML="",t.forEach((e=>{if("ordinary"==e.urgency?e.urgency="обычная":"priority"==e.urgency?e.urgency="приоритетная":"urgent"==e.urgency&&(e.urgency="неотложная"),"dentist"==e.doctor){e.doctor="Стоматолог";const{id:t,name:r,doctor:o,visitTarget:s,urgency:i,desc:n,moreInfo:{lastVisit:c}}=e,a=new VisitDentist(t,r,o,s,i,n,c);document.querySelector(".cards-box").insertAdjacentElement("beforeend",a.createFullCard())}else if("cardiologist"==e.doctor){e.doctor="Кардиолог";const{id:t,name:r,doctor:o,visitTarget:s,urgency:i,desc:n,moreInfo:{pressure:c,bms:a,pastIllnesses:d,age:l}}=e,u=new VisitCardiologist(t,r,o,s,i,n,c,a,d,l);document.querySelector(".cards-box").insertAdjacentElement("beforeend",u.createFullCard())}else if("therapist"==e.doctor){e.doctor="Терапевт";const{id:t,name:r,doctor:o,visitTarget:s,urgency:i,desc:n,moreInfo:{age:c}}=e,a=new VisitTherapist(t,r,o,s,i,n,c);document.querySelector(".cards-box").insertAdjacentElement("beforeend",a.createFullCard())}}))};export default getVisitInfo;