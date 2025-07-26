import user from '../script.js';
let btnEng = document.getElementById("english");
let btnIdn = document.getElementById("indonesian");
let btnJpn = document.getElementById("japanese");
let btnMly = document.getElementById("malay");
document.addEventListener("DOMContentLoaded", ()=>{
document.getElementById("userName").textContent= user.name;
document.getElementById("ig").href= "https://www.instagram.com/" + user.instagram;
document.getElementById("tt").href= "https://www.tiktok.com/@" + user.tiktok;
document.getElementById("github").href= "https://github.com/" + user.github;
});
btnEng.addEventListener("click", async ()=>{
  const lang = await import ("./english.js");
  setLanguage(lang.data);
}); //tombol ganti ke bahasa inggris
btnIdn.addEventListener("click", async ()=>{
  const lang = await import ("./indonesian.js");
  setLanguage(lang.data);
}); //tombol ganti ke bahasa indonesia
btnJpn.addEventListener("click", async ()=>{
  const lang = await import ("./japanese.js");
  setLanguage(lang.data);
}); //tombol ganti ke bahasa jepang
btnMly.addEventListener("click", async ()=>{
  const lang = await import ("./malay.js");
  setLanguage(lang.data);
}); //tombol ganti ke bahasa malay
(async () => {
    const lang = await import("./indonesian.js");
    setLanguage(lang.data);
})();
function setLanguage(data){
  document.querySelector('a[href^="#profil"]').textContent = data.profile;
  document.querySelector('a[href^="#about"]').textContent = data.about;
  document.querySelector('a[href^="#project"]').textContent = data.project;
  document.querySelector('a[href^="#setting"]').textContent = data.setting;
  document.getElementById("header-1").textContent = data.header1;
  document.getElementById("header-2").textContent = data.header2;
  document.getElementById("header-3").textContent = data.header3;
  document.getElementById("english").textContent = data.langEnglish;
  document.getElementById("indonesian").textContent = data.langIndonesian;
  document.getElementById("japanese").textContent = data.langJapanese;
  document.getElementById("malay").textContent = data.langMalay;
  document.getElementById("paragraf-1").textContent = data.paragraf001;
  document.getElementById("paragraf-2").textContent = data.paragraf002;
  document.getElementById("paragraf-3").textContent = data.paragraf003;
  document.getElementById("paragraf-4").textContent = data.paragraf004;
  document.getElementById("paragraf-5").textContent = data.paragraf005;
  document.getElementById("paragraf-6").textContent = data.paragraf006;
  document.getElementById("paragraf-7").textContent = data.paragraf007;
  document.getElementById("paragraf-8").textContent = data.paragraf008;
  document.getElementById("paragraf-9").textContent = data.paragraf009;
  document.getElementById("paragraf-10").textContent = data.paragraf0010;
  if(data.paragraf001 == ""){
  document.getElementById("paragraf-0").textContent = data.empty;
  }
}
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = 0;
  setTimeout(() => {
    loader.style.display = "none";
  }, 500); //tunggu transisi selesai
});
//animasi loading