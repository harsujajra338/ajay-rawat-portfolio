(() => {
  const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
  const root=document.documentElement, header=$("[data-header]"), nav=$("[data-nav]"), menu=$("[data-menu]"), bar=$(".progress span");
  const langBtn=$("[data-language]");
  const projectModal=$("[data-project-modal]"), lightbox=$("[data-lightbox-dialog]");

  const T={
    en:{
      nav_story:"Story",nav_projects:"Projects",nav_gallery:"Gallery",nav_films:"Films",nav_awards:"Recognition",nav_workshops:"Workshops",nav_book:"Book / Collaborate",
      hero_kicker:"GANAHERA · PUSHKAR · RAJASTHAN",hero_title:"Sand remembers<br><em>what time forgets.</em>",hero_deck:"Ajay Rawat shapes Rajasthan's history, public memory and everyday emotion into monumental works made from the most temporary material of all.",hero_art:"Explore selected work",hero_watch:"Watch the process",hero_caption:"Artist · Educator · Founder, National Sand Art Park Pushkar",scroll:"Scroll to enter the story",
      story_id:"THE STORY · कहानी",story_title:"From a village near Pushkar<br><em>to a life shaped in sand.</em>",story_lead:"Ajay Rawat grew up in Ganahera near Pushkar, where sand was first a playground — long before it became a profession.",story_p1:"He has recalled playing in the dunes while his mother worked in the fields. Around class 10, a proper Lord Ganesh sculpture created during Ganesh Chaturthi became an early turning point.",story_p2:"There was no formal roadmap. The work improved through repetition, curiosity and persistence. Today the same medium carries stories of Rajasthan, national memory, spirituality, sport, social awareness and public life.",story_quote:"“Everything in life is temporary.” — Ajay Rawat, on why he continues to make art that will eventually disappear.",
      artist_title:"रेत की कला मिटती है.<br><em>उसकी कहानी नहीं.</em>",artist_copy:"His practice moves between monumental sculpture, live demonstrations, public-awareness works and teaching — keeping the desert at the centre without turning it into a cliché.",fact1:"Where the journey began",fact2:"Home of his practice",fact3:"Learning & teaching",
      projects_id:"SELECTED PROJECTS",projects_title:"Not a gallery of pictures.<br><em>An archive of moments.</em>",projects_intro:"Every project is presented with a date, subject and context — the way an artist archive should feel.",all:"All",heritage:"Heritage",tribute:"Tributes",public:"Public moments",open:"Open project ↗",
      m_title:"Maharana Pratap",m_copy:"A monumental composition rooted in Rajasthan's history and visual memory.",b_title:"General Bipin Rawat Tribute",b_copy:"A memorial work created after the CDS helicopter tragedy.",l_title:"Lata Mangeshkar Tribute",l_copy:"A sand portrait made in memory of the legendary singer.",n_title:"Neeraj Chopra · Olympic Gold",n_copy:"A celebratory work after India's historic javelin gold in Tokyo.",a_title:"A Public Memory in Sand",a_copy:"COVID awareness, sport, national figures, spiritual themes and cultural moments — documented across years.",f_title:"FIFA World Cup 2022",f_copy:"A global sporting moment interpreted in the language of sand.",am_title:"Babasaheb Ambedkar",am_copy:"A public tribute documented around Ambedkar Jayanti.",
      journey_id:"JOURNEY · सफर",journey_title:"Built slowly.<br><em>Grain by grain.</em>",journey_intro:"A career in ephemeral art is not measured only by what survives physically. It is measured by repetition, audiences, students and the stories people remember.",s1_label:"CHILDHOOD",s1_title:"The dunes of Ganahera",s1_copy:"Playing with sand around the fields becomes the beginning of the practice.",s2_label:"AROUND CLASS 10",s2_title:"Ganesh Chaturthi turning point",s2_copy:"A more deliberate Lord Ganesh sculpture changes how he sees the medium.",s3_label:"PUBLIC PRACTICE",s3_title:"Pushkar becomes the canvas",s3_copy:"History, spirituality, public figures and awareness themes grow into a recurring body of work.",s4_label:"TEACHING",s4_copy:"The practice expands into teaching and introducing new learners to sand sculpture.",s5_label:"INSTITUTION",s5_copy:"Public profiles and the Maharana Mewar Foundation identify Ajay as its founder.",s6_title:"Maharana Sajjan Singh Award",s6_copy:"Honoured at the 42nd Maharana of Mewar Charitable Foundation Annual Awards in fine arts.",
      recognition_id:"RECOGNITION",recognition_title:"Recognition matters.<br><em>The work matters more.</em>",award_photo:"Artist-supplied press image",award1:"Maharana Sajjan Singh Award",award1_copy:"The Maharana Mewar Foundation honoured Ajay Rawat and identifies him as founder of the National Sand Art Park, Pushkar.",award_label:"AWARD",award2:"President's Award",award2_copy:"Rajasthan Studio's public artist profile describes Ajay as a recipient of the President's Award.",global_label:"GLOBAL",award3:"International Representation",award3_copy:"Village Square reports that Ajay has represented his art in the Maldives and Saudi Arabia.",verify:"Final official wording, certificate years and logos should be confirmed directly with Ajay before a public launch.",
      gallery_id:"PHOTO JOURNAL",gallery_title:"Work, press, people.<br><em>A life around sand.</em>",gallery_intro:"These images come from the artist-supplied material shared for this presentation, not from AI-generated artwork.",
      films_id:"FILMS · वीडियो",films_title:"The sculpture is still.<br><em>The process is alive.</em>",films_intro:"Video players load only after a click. That keeps the home page fast while still making video part of the experience.",film1:"A feature on Ajay, Pushkar and the practice of sand sculpture.",film2_title:"Sand Art Festival",film2:"Open a public reel from Ajay's own Instagram archive.",film3:"A second public reel showing the event context around his work.",
      workshop_id:"LEARN WITH AJAY",workshop_title:"सिर्फ देखिए नहीं.<br><em>खुद बनाइए.</em>",workshop_copy:"A public Pushkar experience listing offers hands-on sand-art learning using wet sand and simple tools, including mini 2D and 3D sculpture making. It is listed in English and Hindi.",w1:"Hands-on sand shaping",w2:"2D & 3D fundamentals",w3:"Hindi / English",w4:"Pushkar-based experience",workshop_cta:"View workshop listing ↗",
      contact_kicker:"LIVE SHOWS · FESTIVALS · WORKSHOPS · COLLABORATIONS",contact_title:"Bring a story.<br><em>Leave with a memory.</em>",contact_copy:"For this presentation build, Ajay's public Instagram is the direct contact route. Phone, WhatsApp and email can be added after artist approval.",instagram:"Instagram / Enquire ↗",top:"Back to top ↑",footer:"Independent premium portfolio presentation · Built with artist-supplied imagery"
    },
    hi:{
      nav_story:"कहानी",nav_projects:"प्रोजेक्ट्स",nav_gallery:"गैलरी",nav_films:"वीडियो",nav_awards:"सम्मान",nav_workshops:"वर्कशॉप",nav_book:"बुक / सहयोग",
      hero_kicker:"गनाहेड़ा · पुष्कर · राजस्थान",hero_title:"समय भूल जाए,<br><em>रेत याद रखती है.</em>",hero_deck:"अजय रावत राजस्थान के इतिहास, जन-स्मृति और भावनाओं को रेत जैसे क्षणिक माध्यम में विशाल और यादगार रूप देते हैं।",hero_art:"चुनिंदा कला देखें",hero_watch:"प्रक्रिया देखें",hero_caption:"कलाकार · शिक्षक · National Sand Art Park Pushkar के संस्थापक",scroll:"कहानी में आगे बढ़ें",
      story_id:"कहानी · THE STORY",story_title:"पुष्कर के पास एक गाँव से<br><em>रेत में गढ़ी पूरी ज़िंदगी तक.</em>",story_lead:"अजय रावत का बचपन पुष्कर के पास गनाहेड़ा में बीता, जहाँ रेत पहले खेल थी — पेशा बहुत बाद में बनी।",story_p1:"उन्होंने बताया है कि जब उनकी माँ खेतों में काम करती थीं, वे धोरों में रेत से आकृतियाँ बनाते थे। लगभग दसवीं कक्षा के समय गणेश चतुर्थी पर बनाई गई भगवान गणेश की व्यवस्थित रेत-मूर्ति शुरुआती मोड़ बनी।",story_p2:"न कोई तय रास्ता था, न औपचारिक प्रशिक्षण। अभ्यास, जिज्ञासा और लगातार काम ने कला को आकार दिया। आज यही माध्यम राजस्थान, अध्यात्म, खेल, सामाजिक जागरूकता और जन-स्मृति की कहानियाँ कहता है।",story_quote:"“जीवन में सब कुछ अस्थायी है।” — अजय रावत, उस कला पर जो एक दिन मिट जाती है।",
      artist_title:"रेत की कला मिटती है.<br><em>उसकी कहानी नहीं.</em>",artist_copy:"उनका काम विशाल स्कल्प्चर, लाइव डेमो, जन-जागरूकता और शिक्षण के बीच चलता है — रेगिस्तान को केंद्र में रखते हुए, बिना उसे बनावटी cliché बनाए।",fact1:"जहाँ सफर शुरू हुआ",fact2:"कला का घर",fact3:"सीखना और सिखाना",
      projects_id:"चुनिंदा प्रोजेक्ट्स",projects_title:"सिर्फ तस्वीरों की गैलरी नहीं.<br><em>पलों का एक archive.</em>",projects_intro:"हर महत्वपूर्ण काम को तारीख, विषय और संदर्भ के साथ रखा गया है — जैसे एक कलाकार का असली archive होना चाहिए।",all:"सभी",heritage:"विरासत",tribute:"श्रद्धांजलि",public:"सार्वजनिक पल",open:"प्रोजेक्ट खोलें ↗",
      m_title:"महाराणा प्रताप",m_copy:"राजस्थान के इतिहास और स्मृति से जुड़ी एक विशाल रचना।",b_title:"जनरल बिपिन रावत श्रद्धांजलि",b_copy:"CDS हेलिकॉप्टर दुर्घटना के बाद बनाई गई स्मृति-कला।",l_title:"लता मंगेशकर श्रद्धांजलि",l_copy:"महान गायिका की याद में बनाई गई sand portrait.",n_title:"नीरज चोपड़ा · ओलंपिक गोल्ड",n_copy:"Tokyo में भारत के ऐतिहासिक javelin gold के बाद बनाई गई celebratory art.",a_title:"रेत में जन-स्मृति",a_copy:"COVID awareness, sport, national figures, spiritual themes और cultural moments — वर्षों से दर्ज।",f_title:"FIFA World Cup 2022",f_copy:"एक वैश्विक खेल पल को रेत की भाषा में प्रस्तुत किया गया।",am_title:"बाबासाहेब आंबेडकर",am_copy:"आंबेडकर जयंती के आसपास दर्ज की गई सार्वजनिक श्रद्धांजलि।",
      journey_id:"सफर · JOURNEY",journey_title:"धीरे-धीरे बना.<br><em>कण-कण से.</em>",journey_intro:"क्षणिक कला का करियर केवल उस चीज़ से नहीं मापा जाता जो बचती है; बल्कि अभ्यास, दर्शक, विद्यार्थी और लोगों की याद से मापा जाता है।",s1_label:"बचपन",s1_title:"गनाहेड़ा के धोरे",s1_copy:"खेतों के आसपास रेत से खेलना इस कला से पहला रिश्ता बनाता है।",s2_label:"लगभग दसवीं कक्षा",s2_title:"गणेश चतुर्थी का मोड़",s2_copy:"भगवान गणेश की एक व्यवस्थित sand sculpture माध्यम को देखने का नजरिया बदलती है।",s3_label:"सार्वजनिक कला",s3_title:"पुष्कर बना कैनवास",s3_copy:"इतिहास, अध्यात्म, सार्वजनिक व्यक्तित्व और awareness themes लगातार काम का हिस्सा बनते हैं।",s4_label:"शिक्षण",s4_copy:"कला नए विद्यार्थियों को सिखाने और sand sculpture से परिचित कराने तक फैलती है।",s5_label:"संस्थान",s5_copy:"सार्वजनिक प्रोफाइल और Maharana Mewar Foundation अजय को इसके founder के रूप में पहचानते हैं।",s6_title:"महाराणा सज्जन सिंह पुरस्कार",s6_copy:"42वें Maharana of Mewar Charitable Foundation Annual Awards में fine arts के लिए सम्मानित।",
      recognition_id:"सम्मान",recognition_title:"सम्मान मायने रखता है.<br><em>काम उससे भी ज़्यादा.</em>",award_photo:"कलाकार द्वारा दी गई प्रेस इमेज",award1:"महाराणा सज्जन सिंह पुरस्कार",award1_copy:"Maharana Mewar Foundation ने अजय रावत को सम्मानित किया और उन्हें National Sand Art Park, Pushkar का founder बताया।",award_label:"सम्मान",award2:"President's Award",award2_copy:"Rajasthan Studio की public artist profile अजय को President's Award recipient बताती है।",global_label:"दुनिया",award3:"अंतरराष्ट्रीय प्रतिनिधित्व",award3_copy:"Village Square के अनुसार अजय ने Maldives और Saudi Arabia में अपनी कला का प्रतिनिधित्व किया है।",verify:"Final public launch से पहले award wording, certificate years और logos अजय से सीधे confirm किए जाएँ।",
      gallery_id:"फोटो जर्नल",gallery_title:"कला, प्रेस, लोग.<br><em>रेत के आसपास एक जीवन.</em>",gallery_intro:"ये तस्वीरें presentation के लिए कलाकार द्वारा साझा material से ली गई हैं, AI-generated artwork नहीं हैं।",
      films_id:"फिल्म्स · वीडियो",films_title:"मूर्ति स्थिर है.<br><em>प्रक्रिया जीवंत है.</em>",films_intro:"वीडियो player क्लिक के बाद ही load होता है, जिससे homepage तेज रहता है और video experience भी बना रहता है।",film1:"अजय, पुष्कर और sand sculpture की practice पर आधारित feature.",film2_title:"Sand Art Festival",film2:"अजय के अपने Instagram archive की public reel खोलें।",film3:"एक दूसरी public reel जो event context दिखाती है।",
      workshop_id:"अजय के साथ सीखें",workshop_title:"सिर्फ देखिए नहीं.<br><em>खुद बनाइए.</em>",workshop_copy:"Pushkar की public experience listing में wet sand और simple tools के साथ hands-on learning, mini 2D और 3D sculpture making शामिल है। Listing Hindi और English दोनों में उपलब्ध बताई गई है।",w1:"Hands-on sand shaping",w2:"2D और 3D basics",w3:"Hindi / English",w4:"Pushkar experience",workshop_cta:"Workshop listing देखें ↗",
      contact_kicker:"LIVE SHOWS · FESTIVALS · WORKSHOPS · COLLABORATIONS",contact_title:"आप कहानी लाइए.<br><em>याद लेकर जाइए.</em>",contact_copy:"इस presentation build में Ajay का public Instagram direct contact route है। Artist approval के बाद phone, WhatsApp और email जोड़े जा सकते हैं।",instagram:"Instagram / Enquire ↗",top:"ऊपर जाएँ ↑",footer:"Independent premium portfolio presentation · artist-supplied imagery के साथ"
    }
  };

  const projects={
    maharana:{meta:"12 FEB 2022 · PUSHKAR · HERITAGE",en:["Maharana Pratap","Editorial archives document Ajay Rawat creating Maharana Pratap sand art in Pushkar in February 2022. The subject sits naturally within his larger body of Rajasthan-history work.","Project date verified from Shutterstock Editorial archive; image used here is artist-supplied material."],hi:["महाराणा प्रताप","Editorial archive फरवरी 2022 में पुष्कर में अजय रावत की Maharana Pratap sand art दर्ज करता है। यह विषय उनके Rajasthan-history work के बड़े body का स्वाभाविक हिस्सा है।","Project date Shutterstock Editorial archive से verified; यहाँ इस्तेमाल image artist-supplied material है।"]},
    bipin:{meta:"09 DEC 2021 · PUSHKAR · TRIBUTE",en:["General Bipin Rawat Tribute","A tribute to CDS General Bipin Rawat was documented in Pushkar on 9 December 2021, shortly after the helicopter crash.","Project documented in Shutterstock Editorial archive."],hi:["जनरल बिपिन रावत श्रद्धांजलि","9 दिसंबर 2021 को Pushkar में CDS General Bipin Rawat को sand-art tribute documented है, helicopter crash के तुरंत बाद।","Project Shutterstock Editorial archive में documented है।"]},
    lata:{meta:"07 FEB 2022 · PUSHKAR · TRIBUTE",en:["Lata Mangeshkar Tribute","A memorial sand artwork was documented in Pushkar after Lata Mangeshkar's passing.","Project documented in Shutterstock Editorial archive."],hi:["लता मंगेशकर श्रद्धांजलि","लता मंगेशकर के निधन के बाद Pushkar में memorial sand artwork documented है।","Project Shutterstock Editorial archive में documented है।"]},
    neeraj:{meta:"08 AUG 2021 · PUSHKAR · SPORT",en:["Neeraj Chopra · Olympic Gold","Ajay created a congratulatory sand sculpture after Neeraj Chopra won India's Tokyo Olympic javelin gold.","Project documented in Shutterstock Editorial archive."],hi:["नीरज चोपड़ा · ओलंपिक गोल्ड","Neeraj Chopra के Tokyo Olympic javelin gold के बाद Ajay ने congratulatory sand sculpture बनाई।","Project Shutterstock Editorial archive में documented है।"]},
    archive:{meta:"2020—2025 · PUBLIC MEMORY",en:["A Public Memory in Sand","The editorial record includes COVID awareness, Nurses Day, Neeraj Chopra, General Bipin Rawat, Lata Mangeshkar, FIFA World Cup 2022, Lord Hanuman, Babasaheb Ambedkar and other public subjects.","Subjects/dates verified through the Shutterstock Editorial archive. Stock photographs are not redistributed in this website."],hi:["रेत में जन-स्मृति","Editorial record में COVID awareness, Nurses Day, Neeraj Chopra, General Bipin Rawat, Lata Mangeshkar, FIFA World Cup 2022, Lord Hanuman, Babasaheb Ambedkar और अन्य public subjects दर्ज हैं।","Subjects/dates Shutterstock Editorial archive से verified हैं। Stock photographs इस website में redistribute नहीं किए गए हैं।"]},
    fifa:{meta:"20 NOV 2022 · PUSHKAR · SPORT",en:["FIFA World Cup 2022","Ajay responded to the FIFA World Cup with sand art in Pushkar, showing how his practice moves beyond heritage into global public moments.","Project documented in Shutterstock Editorial archive."],hi:["FIFA World Cup 2022","Ajay ने Pushkar में FIFA World Cup पर sand art बनाई, जिससे दिखता है कि उनका काम heritage से आगे global public moments तक जाता है।","Project Shutterstock Editorial archive में documented है।"]},
    ambedkar:{meta:"13 APR 2023 · PUSHKAR · TRIBUTE",en:["Babasaheb Ambedkar","A sand portrait of Babasaheb Ambedkar was documented in Pushkar in April 2023 around Ambedkar Jayanti.","Project documented in Shutterstock Editorial archive."],hi:["बाबासाहेब आंबेडकर","अप्रैल 2023 में Ambedkar Jayanti के आसपास Pushkar में Babasaheb Ambedkar की sand portrait documented है।","Project Shutterstock Editorial archive में documented है।"]}
  };

  function applyLang(lang){
    root.dataset.lang=lang; root.lang=lang==="hi"?"hi":"en";
    const d=T[lang];
    $$("[data-t]").forEach(el=>{const k=el.dataset.t;if(d[k])el.textContent=d[k]});
    $$("[data-thtml]").forEach(el=>{const k=el.dataset.thtml;if(d[k])el.innerHTML=d[k]});
    langBtn?.classList.toggle("on",lang==="hi");
    localStorage.setItem("ajay-lang",lang);
  }
  applyLang(localStorage.getItem("ajay-lang")==="hi"?"hi":"en");
  langBtn?.addEventListener("click",()=>applyLang(root.dataset.lang==="en"?"hi":"en"));

  let scheduled=false;
  const updateScroll=()=>{
    const y=scrollY, max=document.documentElement.scrollHeight-innerHeight;
    header?.classList.toggle("scrolled",y>28);
    if(bar)bar.style.transform=`scaleX(${max>0?y/max:0})`;
    scheduled=false;
  };
  addEventListener("scroll",()=>{if(!scheduled){requestAnimationFrame(updateScroll);scheduled=true}},{passive:true}); updateScroll();

  menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
  $$(".navlinks a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false")}));

  if("IntersectionObserver" in window){
    const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.10,rootMargin:"0px 0px -25px"});
    $$(".reveal").forEach(el=>io.observe(el));
  } else $$(".reveal").forEach(el=>el.classList.add("visible"));

  $$(".filter").forEach(btn=>btn.addEventListener("click",()=>{
    $$(".filter").forEach(b=>b.classList.toggle("active",b===btn));
    const f=btn.dataset.filter;
    $$(".project").forEach(card=>card.hidden=!(f==="all"||card.dataset.cat===f));
  }));

  function openProject(card){
    const p=projects[card.dataset.project]; if(!p||!projectModal)return;
    const l=root.dataset.lang==="hi"?"hi":"en"; const [title,copy,note]=p[l];
    $("[data-modal-meta]",projectModal).textContent=p.meta;
    $("[data-modal-title]",projectModal).textContent=title;
    $("[data-modal-copy]",projectModal).textContent=copy;
    $("[data-modal-note]",projectModal).textContent=note;
    projectModal.showModal();
  }
  $$(".project").forEach(card=>{
    card.addEventListener("click",()=>openProject(card));
    card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();openProject(card)}})
  });
  $(".close",projectModal)?.addEventListener("click",()=>projectModal.close());
  projectModal?.addEventListener("click",e=>{if(e.target===projectModal)projectModal.close()});

  $$("[data-lightbox]").forEach(btn=>btn.addEventListener("click",()=>{
    const img=$("[data-lightbox-image]",lightbox); img.src=btn.dataset.lightbox; img.alt=$("img",btn)?.alt||"Ajay Rawat gallery image"; lightbox.showModal();
  }));
  $(".close",lightbox)?.addEventListener("click",()=>lightbox.close());
  lightbox?.addEventListener("click",e=>{if(e.target===lightbox)lightbox.close()});

  $$("[data-youtube]").forEach(card=>{
    $(".play",card)?.addEventListener("click",()=>{
      const id=card.dataset.youtube, poster=$(".film-poster",card);
      poster.outerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="Ajay Rawat video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    },{once:true})
  });

  const y=$("[data-year]"); if(y)y.textContent=new Date().getFullYear();
})();