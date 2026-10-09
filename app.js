const courses = {
ru:[
"Стропальщик","Монтажник – стропальщик","Газоэлектросварщик","Сварка полуавтомат","Сварка Аргон",
"Газорезчик и лица, связанные с пропан-бутаном","Ответственные лица по ГПМ","Машинист мостового и козлового крана",
"Машинист башенного крана","Машинист автокрана","Водитель автогидроподъёмника","Машинист тяжёлого крана",
"Машинист крана-манипулятора","Машинист трубоукладчика","Машинист экскаватора","Машинист экскаватора + бульдозера",
"Машинист бульдозера","Машинист фронтального погрузчика","Машинист автовышки и автогидроподъёмника",
"Водитель вилочного погрузчика","Водитель электропогрузчика","Электромонтёр","Дизелист – электрик",
"Машинист дизельной электростанции","Сантехник","Слесарь","Мастер по ремонту несущих конструкций",
"Сосуды, работающие под давлением","Оператор и заправщик баллонов для сжатых и сжиженных газов",
"Машинист паровых и водогрейных котлов","Оператор горных машин","Водитель карьерного грузовика",
"Промышленный альпинизм","Работа на высоте свыше 5 метров","IT-инжиниринг: сборка, настройка и обслуживание компьютеров и оргтехники",
"ОС Linux: администрирование","Курсы по кибербезопасности","Маляр","Штукатур","Каменщик",
"Облицовщик-мраморщик","Облицовщик-плиточник"
],
uz:[
"Stropalchi","Montajchi – stropalchi","Gazoe lekt payvandchi","Yarim avtomat payvandlash","Argon payvandlash",
"Gaz kesuvchi va propan-butan bilan bog‘liq shaxslar","Yuk ko‘tarish mexanizmlari (GPM) bo‘yicha mas’ul shaxslar",
"Ko‘prikli va kozlovoy kran mashinisti","Minoralı kran mashinisti","Avtokran mashinisti","Avtogidropodyomnik haydovchisi",
"Og‘ir kran mashinisti","Kran-manipulyator mashinisti","Quvur yotqizgich mashinisti","Ekskavator mashinisti",
"Ekskavator + buldozer mashinisti","Buldozer mashinisti","Frontal yuklagich mashinisti","Avtokr an va avtogidropodyomnik mashinisti",
"Vilkali yuklagich haydovchisi","Elektroyuklagich haydovchisi","Elektromontyor","Dizelist – elektrik",
"Dizel elektr stansiyasi mashinisti","Santexnik","Chilangar","Tayanch konstruksiyalarni ta’mirlash bo‘yicha usta",
"Bosim ostida ishlovchi idishlar","Siqilgan va suyultirilgan gaz ballonlarini operatori va to‘ldiruvchisi",
"Bug‘ va suv qozonlari mashinisti","Kon mashinalari operatori","Karer yuk mashinasi haydovchisi",
"Sanoat alpinizmi","5 metrdan yuqori balandlikda ishlash","IT injiniring: kompyuterlar va ofis texnikasini yig‘ish, sozlash va xizmat ko‘rsatish",
"OS Linux: tizim ma’muriyatchiligi","Kiberxavfsizlik bo‘yicha kurslar","Bo‘yoqchi","Suvoqchi","G‘isht teruvchi",
"Marmar qoplamachi","Plitka qoplamachi"
]};

const texts={
ru:{center:"УЧЕБНЫЙ ЦЕНТР",heroTitle:"Профессиональное обучение и рабочие специальности",heroText:"Практические навыки, востребованные профессии и удобные сроки обучения.",registration:"Регистрация и лицензия",coursesBtn:"Курсы и специальности",prospectBtn:"Проспект",telegram:"Наш Telegram",contactsBtn:"Телефоны и контакты",enroll:"Записаться на обучение",aboutTitle:"О учебном центре",aboutText:"НОУ «Mutaxassis Plyus» — учебный центр по подготовке специалистов по востребованным профессиям. Теория сочетается с практическим обучением на современном оборудовании.",chip1:"Практическое обучение",chip2:"Опытные преподаватели",chip3:"Удостоверения и сертификаты",chip4:"Курсы от 10 дней до 9 месяцев",coursesTitle:"Наши специальности",coursesNote:"42 направления из проспекта учебного центра.",prospectTitle:"Проспект",contactsTitle:"Контакты",address:"Ташкент, ул. Лутфий, 6, 3 этаж, кабинет 311",map:"Открыть на карте →",sourceText:"Регистрационные сведения и лицензия должны открываться по официальной ссылке организации."},
uz:{center:"O‘QUV MARKAZI",heroTitle:"Kasbiy ta’lim va ishchi kasblar",heroText:"Amaliy ko‘nikmalar, talab yuqori bo‘lgan kasblar va qulay o‘qish muddatlari.",registration:"Ro‘yxatdan o‘tish va litsenziya",coursesBtn:"Kurslar va mutaxassisliklar",prospectBtn:"Prospekt",telegram:"Telegram kanalimiz",contactsBtn:"Telefonlar va aloqa",enroll:"O‘qishga yozilish",aboutTitle:"O‘quv markazi haqida",aboutText:"«Mutaxassis Plyus» — talab yuqori bo‘lgan kasblar bo‘yicha mutaxassislar tayyorlaydigan o‘quv markazi. Nazariya zamonaviy uskunalarda amaliy mashg‘ulotlar bilan uyg‘unlashtiriladi.",chip1:"Amaliy o‘qitish",chip2:"Tajribali o‘qituvchilar",chip3:"Guvohnoma va sertifikatlar",chip4:"10 kundan 9 oygacha kurslar",coursesTitle:"Bizning mutaxassisliklarimiz",coursesNote:"O‘quv markazi prospektidagi 42 ta yo‘nalish.",prospectTitle:"Prospekt",contactsTitle:"Aloqa",address:"Toshkent, Lutfiy ko‘chasi, 6-uy, 3-qavat, 311-xona",map:"Xaritada ochish →",sourceText:"Ro‘yxatdan o‘tish ma’lumotlari va litsenziya tashkilotning rasmiy havolasi orqali ochiladi."}
};

let lang="ru";
function renderCourses(){
  const list=document.getElementById("courseList");
  list.innerHTML=courses[lang].map((c,i)=>`<div class="course"><span class="num">${i+1}</span><span class="course-name">${c}</span></div>`).join("");
}
function renderProspect(){
  const grid=document.getElementById("prospectGrid");
  const files=lang==="ru"?["assets/prospekt_ru_1.png","assets/prospekt_ru_2.png"]:["assets/prospekt_uz_1.png","assets/prospekt_uz_2.png"];
  grid.innerHTML=files.map((f,i)=>`<a href="${f}" target="_blank"><img src="${f}" alt="${lang === "ru" ? "Проспект на русском языке" : "O‘zbek tilidagi prospekt"} — ${i+1}" loading="lazy"></a>`).join("");
}
function setLang(next){
  lang=next;
  document.documentElement.lang=next;
  document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(texts[next][k])el.textContent=texts[next][k]});
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===next));
  renderCourses();renderProspect();
  localStorage.setItem("mp_lang",next);
}
document.querySelectorAll(".lang-btn").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
document.getElementById("year").textContent=new Date().getFullYear();
setLang(localStorage.getItem("mp_lang")||"ru");
