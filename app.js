// Pounpyin landing page — small interactions only. No backend yet.
(function () {
  "use strict";

  // ============================================================
  // PRICE — change this one number to reprice the whole page.
  // ============================================================
  var PRICE_PER_YEAR = 39;

  var priceEl = document.getElementById("priceAmount");
  if (priceEl) priceEl.textContent = "$" + PRICE_PER_YEAR;

  // --- Sample prompt deck: Burmese script + phonetic + English gloss ---
  // (Phonetics supplied by the founder; kept verbatim.)
  var PROMPTS = [
    { week: 1,
      my: "ငယ်ငယ်တုန်းက နေခဲ့တဲ့အိမ်အကြောင်း ပြောပြပါ။ ဘယ်သူတွေနဲ့အတူနေခဲ့သလဲ၊ အမှတ်ရဆုံးအရာက ဘာလဲ။",
      phon: "Nge nge tone ka nay-khe-te ain a-kyaung pyaw-pya pa. Be thu twe ne a-tu nay-khe-tha-le, a-mhat ya sone a-ya ka ba le.",
      en: "Tell me about the house you grew up in — who lived there, your strongest memory of it." },
    { week: 2,
      my: "သင့်အဖေနဲ့အမေအကြောင်း ပြောပြပါ။ သူတို့ရဲ့အလုပ်၊ စိတ်နေသဘောထား၊ သင်အမှတ်ရဆုံးအရာတွေက ဘာတွေလဲ။",
      phon: "Thint a-phay ne a-may a-kyaung pyaw-pya pa. Tho-toh ye a-loke, sate nay tha-baw-hta, thin a-mhat ya sone a-ya twe ka ba twe le.",
      en: "Tell me about your father and mother — their work, their character, what you remember most." },
    { week: 3,
      my: "ငယ်ဘဝတုန်းက အကြိုက်ဆုံးကစားနည်းက ဘာလဲ။ ဘယ်သူတွေနဲ့အတူ ကစားခဲ့သလဲ။",
      phon: "Nge ba-wa tone ka a-kyaik sone ka-za nee ka ba le. Be thu twe ne a-tu ka-za khe-tha-le.",
      en: "Your favorite childhood game, and who you played it with." },
    { week: 4,
      my: "သင်္ကြန်ပွဲနဲ့ပတ်သက်တဲ့ အမှတ်တရအကောင်းဆုံးက ဘာလဲ။",
      phon: "Thin-gyan pwe ne pat-that-te a-mhat ya a-kaung sone ka ba le.",
      en: "Your best Thingyan (water festival) memory." },
    { week: 5,
      my: "\u201Cအိမ်အရသာ\u201D လို့ခံစားရစေတဲ့ဟင်းက ဘာဟင်းလဲ။ အဲဒီဟင်းနဲ့ပတ်သက်တဲ့အမှတ်တရရှိလား။",
      phon: "'Ain a-ya-tha' lo khan-za ya zay-te hin ka ba hin le. Eh-di hin ne pat-that-te a-mhat ya shi la.",
      en: "Which dish tastes like home, and the memory attached to it." },
    { week: 6,
      my: "ကျောင်းသားဘဝတုန်းက အမှတ်ရဆုံးအဖြစ်အပျက်က ဘာလဲ။",
      phon: "Kyaung-tha ba-wa tone ka a-mhat ya sone a-phit a-pyat ka ba le.",
      en: "Your most vivid school-days memory." },
    { week: 7,
      my: "ပထမဆုံးလုပ်ခဲ့တဲ့အလုပ်အကြောင်း ပြောပြပါ။ အဲဒီအလုပ်က သင့်ကို ဘာသင်ပေးခဲ့သလဲ။",
      phon: "Pa-hta-ma sone loke-khe-te a-loke a-kyaung pyaw-pya pa. Eh-di a-loke ka thint ko ba thin-pay-khe-tha-le.",
      en: "Your first job — what did it teach you?" },
    { week: 8,
      my: "သင့်အိမ်ထောင်ဖက်နဲ့ ဘယ်လိုတွေ့ဆုံခဲ့သလဲ။ ပထမဆုံးတွေ့တဲ့အချိန်ကို မှတ်မိသေးလား။",
      phon: "Thint ain-htaun-bet ne be lo twai-sone-khe-tha-le. Pa-hta-ma sone twai-te a-chayne ko mhat-mi thay la.",
      en: "How you met your spouse — do you remember the first meeting?" },
    { week: 9,
      my: "ဘဝမှာ အခက်ခဲဆုံးအချိန်က ဘယ်တုန်းကလဲ။ ဘယ်လိုဖြတ်ကျော်ခဲ့သလဲ။",
      phon: "Ba-wa hma a-khat-khe sone a-chayne ka be tone ka le. Be lo phyat-kyaw-khe-tha-le.",
      en: "The hardest period of your life, and how you got through it." },
    { week: 10,
      my: "သင့်ဘဝမှာ ဂုဏ်ယူစရာအကောင်းဆုံးအခိုက်အတန့်က ဘာလဲ။",
      phon: "Thint ba-wa hma gone-yu-ya-ya a-kaung sone a-khite a-tan ka ba le.",
      en: "The moment you're proudest of." },
    { week: 11,
      my: "သင့်မြေး/မြစ်တွေကို ပေးချင်တဲ့အကြံဉာဏ် ဒါမှမဟုတ် ထားခဲ့ချင်တဲ့စကားက ဘာလဲ။",
      phon: "Thint myay/myit twe ko pay-chin-te a-chan-nyan da-ma-hoke htah-khe-chin-te sa-ka ka ba le.",
      en: "Advice or words you want to leave your grandchildren." },
    { week: 12,
      my: "လူတွေ သင့်ကို ဘယ်လိုအရာနဲ့ အမှတ်ရစေချင်သလဲ။",
      phon: "Lu twe thint ko be lo a-ya ne a-mhat ya zay chin-tha-le.",
      en: "What do you want to be remembered for?" }
  ];

  var idx = 0;
  var weekEl = document.getElementById("promptWeek");
  var myEl = document.getElementById("promptTextMy");
  var phonEl = document.getElementById("promptTextPhon");
  var enEl = document.getElementById("promptTextEn");
  var card = document.getElementById("promptCard");

  function showPrompt(i) {
    idx = (i + PROMPTS.length) % PROMPTS.length;
    var p = PROMPTS[idx];
    weekEl.textContent = "Week " + p.week;
    myEl.textContent = p.my;
    phonEl.textContent = p.phon;
    enEl.textContent = "\u201C" + p.en + "\u201D";
  }
  // deterministic shuffle so first paint isn't always the same card
  for (var s = PROMPTS.length - 1; s > 0; s--) {
    var j = Math.floor(Math.random() * (s + 1));
    var t = PROMPTS[s]; PROMPTS[s] = PROMPTS[j]; PROMPTS[j] = t;
  }
  if (card && weekEl) {
    showPrompt(0);
    document.getElementById("shufflePrompt").addEventListener("click", function () {
      card.style.opacity = "0";
      setTimeout(function () { showPrompt(idx + 1); card.style.opacity = "1"; }, 160);
    });
    card.style.transition = "opacity 0.16s ease";
  }

  // --- Waitlist forms ---
  // PLUMBING NOTE: when the real email provider is chosen (e.g. Buttondown/ConvertKit),
  // POST the address to it here. Keep the localStorage write below as the fallback so a
  // signup is never lost even if the network/provider fails.
  function wireForm(formId, noteId) {
    var form = document.getElementById(formId);
    var note = document.getElementById(noteId);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      if (!email) return;
      try {
        var key = "pounpyin_waitlist";
        var list = JSON.parse(localStorage.getItem(key) || "[]");
        if (list.indexOf(email) === -1) {
          list.push(email);
          localStorage.setItem(key, JSON.stringify(list));
        }
      } catch (err) { /* storage unavailable — still confirm */ }
      // TODO: POST to email provider when live (see plumbing note above).
      form.classList.add("done");
      var thanks = document.createElement("p");
      thanks.className = "capture-thanks";
      thanks.textContent = "You're on the list — see you at launch. \u2726";
      form.appendChild(thanks);
      if (note) note.textContent = "Welcome to the founding family.";
    });
  }
  wireForm("heroForm", "heroNote");
  wireForm("waitlistForm", "waitlistNote");

  // --- Service worker (offline shell) ---
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () {});
    });
  }

  // --- Install prompt banner ---
  var banner = document.getElementById("installBanner");
  var installBtn = document.getElementById("installBtn");
  var dismissBtn = document.getElementById("installDismiss");
  var deferredPrompt = null;
  var dismissed = false;
  try { dismissed = localStorage.getItem("pounpyin_install_dismissed") === "1"; } catch (e) {}
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    if (dismissed) return;
    deferredPrompt = e;
    if (banner) banner.hidden = false;
  });
  if (installBtn) installBtn.addEventListener("click", function () {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function () {
      deferredPrompt = null;
      if (banner) banner.hidden = true;
    }).catch(function () {});
  });
  if (dismissBtn) dismissBtn.addEventListener("click", function () {
    if (banner) banner.hidden = true;
    try { localStorage.setItem("pounpyin_install_dismissed", "1"); } catch (e) {}
  });
})();
