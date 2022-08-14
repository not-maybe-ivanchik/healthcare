import loginModalDel from"./loginModalDel.js";import getVisitInfo from"./api/getVisitInfo.js";class loginModal{constructor(l,o){this.email=l,this.password=o}render(l){document.body.classList.add("blur"),document.querySelector(l).insertAdjacentHTML("beforeend",'<section class="login-modal">\n      <div class="login-modal__img-box">\n        <img\n          src="./dist/img/login-modal-img.jpeg"\n          alt="img"\n          width="230px"\n          height="250px"\n          class="login-modal__img"\n        />\n      </div>\n      <form action="" method="post" class="login-modal__form">\n        <label for="email" class="login-modal__email_label">Email</label>\n        <input type="email" id="email" class="login-modal__email" />\n        <label for="email" class="login-modal__pass_label">Password</label>\n        <input type="password" id="password" class="login-modal__pass" />\n        <button type="submit" class="login-modal__submit">Войти</button>\n        <div class="login-modal__close">\n            <?xml version="1.0"?><svg\n              fill="#FFFFFF"\n              xmlns="http://www.w3.org/2000/svg"\n              viewBox="0 0 30 30"\n              width="30px"\n              height="30px"\n              class="login-modal__close_icon"\n            >\n              <path\n                d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"\n              />\n            </svg>\n          </div>\n      </form>\n    </section>'),setTimeout((()=>{document.querySelector(".login-modal").classList.add("appr")}),200),document.querySelector(".login-modal__form").addEventListener("submit",(l=>{l.preventDefault();const[,o,e]=document.querySelectorAll("input");localStorage.setItem("email",o.value);(async()=>{const l=await fetch("https://ajax.test-danit.com/api/v2/cards/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o.value,password:e.value})});if(l.ok)return loginModalDel(".login-modal","blur",!0,o.value),l.text();document.querySelector(".login-modal__submit").insertAdjacentHTML("beforebegin",'<p class="login-modal__incorrect">incorrect password or email</p>'),o.value="",e.value=""})().then((l=>{localStorage.setItem("token",l);const o=localStorage.getItem("token");getVisitInfo(o)}))})),document.querySelector(".login-modal__close").addEventListener("click",(()=>{loginModalDel(".login-modal","blur",!1)}))}}export default loginModal;