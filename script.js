document.body.classList.add('loading');

const loader = document.getElementById('loader');
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursorDot');
const particles = document.getElementById('particles');
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const scrollTopBtn = document.getElementById('scrollTopBtn');
const revealEls = document.querySelectorAll('.reveal');
const tiltCards = document.querySelectorAll('.tilt-card');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');
const chatMessages = document.getElementById('chatMessages');
const chips = document.querySelectorAll('.question-chip');
const typingText = document.getElementById('typingText');
const magneticButtons = document.querySelectorAll('.magnetic');
const langToggle = document.getElementById('langToggle');
const toast = document.getElementById('toast');
const contactForm = document.getElementById('contactForm');
const navLinks = document.querySelectorAll('#navLinks a');

const translations = {
  en: {
    "nav.services": "Services",
    "nav.identity": "Identity",
    "nav.partners": "Partners",
    "nav.chat": "Smart Chat",
    "nav.contact": "Contact",

    "hero.badge": "Frontend + Backend Team",
    "hero.titlePrefix": "We build",
    "hero.text": "BM Devs is the digital team of Mostafa and Basil. We build modern websites with clean UI, solid backend logic, smooth motion, and strong digital identity.",
    "hero.btn1": "Start a Project",
    "hero.btn2": "Ask Smart Chat",
    "hero.stat1": "Modern Interfaces",
    "hero.stat2": "Clean Backend",
    "hero.stat3": "Smooth Experience",

    "heroPanel.title": "Modern Web Development Team",
    "heroPanel.desc": "Frontend by Mostafa. Backend by Basil. One team focused on strong, clean, and modern web experiences.",

    "services.tag": "Services",
    "services.title": "What BM Devs can build",
    "services.desc": "Balanced work between strong frontend presentation and organized backend structure.",
    "services.card1.title": "Frontend Development",
    "services.card1.desc": "Modern responsive interfaces, clean layouts, strong branding, and premium visual polish.",
    "services.card2.title": "Backend Development",
    "services.card2.desc": "Scalable APIs, secure data flow, organized architecture, and reliable logic.",
    "services.card3.title": "Full Web Solutions",
    "services.card3.desc": "From landing pages to complete platforms, BM Devs turns ideas into polished digital products.",

    "identity.tag": "Brand Identity",
    "identity.title": "A digital identity that looks serious",
    "identity.desc": "BM Devs combines a dark futuristic theme, code-inspired visuals, and premium motion to create a modern and confident brand presence.",
    "identity.p1.title": "Color System",
    "identity.p1.desc": "Black base with purple and blue neon accents.",
    "identity.p2.title": "Visual Style",
    "identity.p2.desc": "Glassmorphism, soft glow, motion, and clean structure.",
    "identity.p3.title": "Brand Tone",
    "identity.p3.desc": "Confident, modern, youthful, and professional.",
    "identity.logoDesc": "Mostafa & Basil — Modern Web Development Team",

    "partners.tag": "Partners",
    "partners.title": "The team behind BM Devs",
    "partners.desc": "Two specialists. One brand. One strong web identity.",
    "partners.m.role": "Frontend Developer",
    "partners.m.desc": "Focused on interface design, user experience, responsive layouts, and visual polish.",
    "partners.b.role": "Backend Developer",
    "partners.b.desc": "Focused on APIs, business logic, database structure, and technical foundations.",

    "chat.title": "Instant answers for client questions",
    "chat.desc": "Supports Arabic and English automatically. If the client writes Arabic, it replies in Arabic. If the client writes in English, it replies in English.",
    "chat.badge": "Arabic + English support",
    "chat.send": "Send",

    "contact.tag": "Contact",
    "contact.title": "Let’s build something strong",
    "contact.desc": "Use the form or reach BM Devs through social platforms and payment methods below.",
    "contact.formBtn": "Send Request",

    "payment.title": "Payment Methods",
    "payment.instapay": "Available",
    "payment.vodafone": "Available",

    "footer.text": "Mostafa & Basil — Modern Web Development Team"
  },
  ar: {
    "nav.services": "الخدمات",
    "nav.identity": "الهوية",
    "nav.partners": "الشركاء",
    "nav.chat": "الشات الذكي",
    "nav.contact": "التواصل",

    "hero.badge": "فريق فرونت إند + باك إند",
    "hero.titlePrefix": "نحن نبني",
    "hero.text": "BM Devs هو الفريق الرقمي الخاص بـ Mostafa و Basil. بنبني مواقع حديثة بواجهات نظيفة وباك إند قوي وحركة سلسة وهوية رقمية محترمة.",
    "hero.btn1": "ابدأ مشروعك",
    "hero.btn2": "اسأل الشات الذكي",
    "hero.stat1": "واجهات حديثة",
    "hero.stat2": "باك إند منظم",
    "hero.stat3": "تجربة سلسة",

    "heroPanel.title": "فريق تطوير ويب حديث",
    "heroPanel.desc": "الفرونت عند Mostafa والباك عند Basil. فريق واحد مركز على مواقع قوية ونظيفة وحديثة.",

    "services.tag": "الخدمات",
    "services.title": "إيه اللي BM Devs يقدر يبنيه",
    "services.desc": "توازن بين واجهات قوية وشكل احترافي وبين باك إند منظم ومحترم.",
    "services.card1.title": "تطوير الواجهات",
    "services.card1.desc": "واجهات حديثة ومتجاوبة بتصميم نظيف وهوية قوية ولمسات بصرية احترافية.",
    "services.card2.title": "تطوير الباك إند",
    "services.card2.desc": "APIs قابلة للتوسع، تدفق بيانات آمن، هيكلة منظمة، ومنطق قوي.",
    "services.card3.title": "حلول ويب كاملة",
    "services.card3.desc": "من صفحات الهبوط لحد المنصات الكاملة، BM Devs بيحوّل الأفكار لمنتجات رقمية احترافية.",

    "identity.tag": "الهوية البصرية",
    "identity.title": "هوية رقمية شكلها احترافي بجد",
    "identity.desc": "BM Devs بيجمع بين ستايل غامق مستقبلي، ولمسات مرتبطة بالأكواد، وحركة احترافية عشان يطلع بهوية قوية وحديثة.",
    "identity.p1.title": "الألوان",
    "identity.p1.desc": "أسود كأساس مع بنفسجي وأزرق نيون.",
    "identity.p2.title": "الستايل البصري",
    "identity.p2.desc": "Glassmorphism، glow خفيف، حركة ناعمة، وتقسيمة نظيفة.",
    "identity.p3.title": "طابع البراند",
    "identity.p3.desc": "واثق، حديث، شبابي، واحترافي.",
    "identity.logoDesc": "Mostafa & Basil — فريق تطوير ويب حديث",

    "partners.tag": "الشركاء",
    "partners.title": "الفريق وراء BM Devs",
    "partners.desc": "اتنين متخصصين. براند واحد. وهوية ويب قوية.",
    "partners.m.role": "مطور Frontend",
    "partners.m.desc": "مسؤول عن تصميم الواجهات وتجربة المستخدم والريسبونسيف والشكل النهائي.",
    "partners.b.role": "مطور Backend",
    "partners.b.desc": "مسؤول عن الـ APIs والمنطق البرمجي وقواعد البيانات والأساس التقني.",

    "chat.title": "ردود فورية على أسئلة العملاء",
    "chat.desc": "بيدعم العربي والإنجليزي تلقائيًا. لو العميل كتب عربي يرد عربي، ولو كتب إنجليزي يرد إنجليزي.",
    "chat.badge": "دعم عربي + إنجليزي",
    "chat.send": "إرسال",

    "contact.tag": "التواصل",
    "contact.title": "يلا نبني حاجة قوية",
    "contact.desc": "استخدم الفورم أو تواصل مع BM Devs من خلال المنصات ووسائل الدفع الموجودة تحت.",
    "contact.formBtn": "إرسال الطلب",

    "payment.title": "وسائل الدفع",
    "payment.instapay": "متاح",
    "payment.vodafone": "متاح",

    "footer.text": "Mostafa & Basil — فريق تطوير ويب حديث"
  }
};

const typingWords = {
  en: [
    'modern web experiences',
    'clean digital identity',
    'responsive web solutions',
    'smart frontend and backend'
  ],
  ar: [
    'تجارب ويب حديثة',
    'هوية رقمية نظيفة',
    'حلول ويب متجاوبة',
    'فرونت وباك بشكل ذكي'
  ]
};

let currentLang = 'en';
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout;

window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
  }, 1100);
});

window.addEventListener('mousemove', (e) => {
  if (!cursor || !cursorDot) return;
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursorDot.style.left = `${e.clientX}px`;
  cursorDot.style.top = `${e.clientY}px`;
});

document.querySelectorAll('a, button, input, textarea, .tilt-card').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    if (!cursor) return;
    cursor.style.width = '54px';
    cursor.style.height = '54px';
    cursor.style.background = 'rgba(168, 85, 247, 0.08)';
  });

  el.addEventListener('mouseleave', () => {
    if (!cursor) return;
    cursor.style.width = '34px';
    cursor.style.height = '34px';
    cursor.style.background = 'transparent';
  });
});

for (let i = 0; i < 26; i++) {
  const p = document.createElement('span');
  p.className = 'particle';
  p.style.left = `${Math.random() * 100}%`;
  p.style.animationDuration = `${8 + Math.random() * 10}s`;
  p.style.animationDelay = `${Math.random() * 6}s`;
  p.style.opacity = Math.random();
  particles.appendChild(p);
}

function runTyping() {
  clearTimeout(typingTimeout);
  const words = typingWords[currentLang];
  const currentWord = words[wordIndex];
  const visibleText = isDeleting
    ? currentWord.slice(0, charIndex--)
    : currentWord.slice(0, charIndex++);

  typingText.textContent = visibleText;

  let speed = isDeleting ? 40 : 85;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    speed = 1200;
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    charIndex = 0;
    speed = 250;
  }

  typingTimeout = setTimeout(runTyping, speed);
}

runTyping();

menuBtn?.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.remove('show'));
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 320) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },
  { threshold: 0.18 }
);

revealEls.forEach((el) => observer.observe(el));

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 10;
    const rotateX = (0.5 - py) * 10;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  });
});

magneticButtons.forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
  });
});

function applyTranslations(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll('[data-ph-en]').forEach((el) => {
    el.placeholder = lang === 'ar' ? el.getAttribute('data-ph-ar') : el.getAttribute('data-ph-en');
  });

  chatInput.placeholder = lang === 'ar' ? 'اكتب سؤالك بالعربي أو بالإنجليزي...' : 'Ask in English or Arabic...';
  langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';

  wordIndex = 0;
  charIndex = 0;
  isDeleting = false;
  runTyping();
}

langToggle?.addEventListener('click', () => {
  applyTranslations(currentLang === 'en' ? 'ar' : 'en');
});

function isArabic(text) {
  return /[\u0600-\u06FF]/.test(text);
}

const knowledgeBaseEn = [
  {
    keywords: ['services', 'offer', 'what do you do', 'what services'],
    answer:
      'BM Devs offers frontend development, backend development, and full website solutions with modern design and clean structure.'
  },
  {
    keywords: ['contact', 'reach', 'email', 'instagram', 'telegram', 'youtube', 'tiktok', 'threads', 'x'],
    answer:
      'You can contact BM Devs by email at bmdevs77@gmail.com or through Instagram, TikTok, YouTube, Telegram, Threads, and X.'
  },
  {
    keywords: ['payment', 'instapay', 'vodafone', 'cash', 'pay'],
    answer:
      'BM Devs supports InstaPay and Vodafone Cash as available payment methods.'
  },
  {
    keywords: ['full website', 'full websites', 'complete website', 'complete websites'],
    answer:
      'Yes. BM Devs can build complete websites from idea to launch, including UI, frontend, backend, APIs, and polished presentation.'
  },
  {
    keywords: ['frontend', 'mostafa', 'who does frontend'],
    answer:
      'Mostafa is the frontend partner at BM Devs. He focuses on interface design, user experience, responsive implementation, and visual polish.'
  },
  {
    keywords: ['backend', 'basil', 'who does backend'],
    answer:
      'Basil is the backend partner at BM Devs. He focuses on APIs, business logic, database flow, and the technical side of web applications.'
  },
  {
    keywords: ['responsive', 'mobile', 'tablet'],
    answer:
      'Yes. BM Devs websites are designed to work smoothly across desktop, tablet, and mobile devices.'
  }
];

const knowledgeBaseAr = [
  {
    keywords: ['بتعملوا ايه', 'الخدمات', 'بتقدموا ايه', 'خدمات'],
    answer:
      'BM Devs بيقدم خدمات Frontend Development و Backend Development وكمان تنفيذ مواقع كاملة بشكل احترافي مع تصميم حديث وهيكل منظم.'
  },
  {
    keywords: ['اتواصل', 'التواصل', 'ايميل', 'إيميل', 'انستجرام', 'تيكتوك', 'يوتيوب', 'تليجرام', 'ثريدز', 'اكس'],
    answer:
      'تقدر تتواصل مع BM Devs على bmdevs77@gmail.com أو من خلال Instagram و TikTok و YouTube و Telegram و Threads و X.'
  },
  {
    keywords: ['انستا باي', 'فودافون كاش', 'دفع', 'وسيلة دفع', 'تحويل'],
    answer:
      'أيوه، BM Devs متاح عنده InstaPay و Vodafone Cash كوسائل دفع.'
  },
  {
    keywords: ['مواقع كاملة', 'موقع كامل', 'ويب سايت كامل', 'بتعملوا مواقع'],
    answer:
      'أيوه، BM Devs يقدر ينفذ موقع كامل من أول الفكرة لحد الإطلاق، سواء واجهات أو Backend أو APIs أو الشكل النهائي.'
  },
  {
    keywords: ['مين مسؤول عن الفرونت', 'الفرونت', 'مصطفى'],
    answer:
      'Mostafa هو مسؤول الـ Frontend في BM Devs، وبيشتغل على تصميم الواجهات وتجربة المستخدم والشكل النهائي.'
  },
  {
    keywords: ['مين مسؤول عن الباك', 'الباك', 'باسل', 'basil'],
    answer:
      'Basil هو مسؤول الـ Backend في BM Devs، وبيشتغل على الـ APIs والـ logic وقواعد البيانات والبنية التقنية.'
  },
  {
    keywords: ['متجاوب', 'موبايل', 'تابلت', 'responsive'],
    answer:
      'أيوه، المواقع بتكون Responsive وبتشتغل بشكل محترم على الموبايل والتابلت والكمبيوتر.'
  }
];

function normalize(text) {
  return text.toLowerCase().trim();
}

function getReply(question, lang = 'en') {
  const q = normalize(question);
  const base = lang === 'ar' ? knowledgeBaseAr : knowledgeBaseEn;

  for (const item of base) {
    if (item.keywords.some((keyword) => q.includes(keyword))) {
      return item.answer;
    }
  }

  return lang === 'ar'
    ? 'شكرًا على سؤالك. BM Devs متخصص في تصميم وتطوير مواقع حديثة باحتراف، وتقدر تتواصلوا على bmdevs77@gmail.com أو من خلال المنصات الموجودة تحت.'
    : 'Thanks for your question. BM Devs focuses on modern websites and full web solutions. You can reach BM Devs at bmdevs77@gmail.com or through the social platforms below.';
}

function addMessage(text, type = 'assistant', lang = 'en') {
  const msg = document.createElement('div');
  msg.className = `message ${type}${lang === 'ar' ? ' arabic' : ''}`;
  msg.textContent = text;
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    const question = chip.textContent;
    const lang = isArabic(question) ? 'ar' : 'en';
    addMessage(question, 'user', lang);

    setTimeout(() => {
      addMessage(getReply(question, lang), 'assistant', lang);
    }, 420);
  });
});

chatForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const question = chatInput.value.trim();
  if (!question) return;

  const lang = isArabic(question) ? 'ar' : 'en';
  addMessage(question, 'user', lang);
  chatInput.value = '';

  setTimeout(() => {
    addMessage(getReply(question, lang), 'assistant', lang);
  }, 450);
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('nameField').value.trim();
  const email = document.getElementById('emailField').value.trim();
  const project = document.getElementById('projectField').value.trim();
  const message = document.getElementById('messageField').value.trim();

  if (!name || !email || !project || !message) {
    showToast(currentLang === 'ar' ? 'من فضلك املا كل البيانات' : 'Please fill in all fields');
    return;
  }

  showToast(currentLang === 'ar' ? 'تم تجهيز الطلب بنجاح' : 'Request prepared successfully');
  contactForm.reset();
});

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

applyTranslations('en');