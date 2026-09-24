// Pounpyin landing page — small interactions only. No backend.

(function () {
  "use strict";

  // --- Sample prompt deck (illustrative; the real library ships at launch) ---
  var PROMPTS = [
    { week: 14, text: "What was Thingyan like when you were a child? Who threw the first bucket of water?" },
    { week: 23, text: "What dish did your mother cook that no restaurant has ever gotten right? Walk me through it." },
    { week: 31, text: "Tell me about the journey that brought our family to America. What do you remember most clearly?" },
    { week: 8,  text: "What proverb did your parents repeat to you again and again — and when did you finally understand it?" },
    { week: 41, text: "Who was the elder everyone in your village or neighborhood respected? What made them that person?" },
    { week: 5,  text: "What was your first job, and what did you do with your first pay?" },
    { week: 47, text: "What is something you believed as a child that turned out not to be true?" },
    { week: 19, text: "Describe your childhood home — every room, as if you're walking through it right now." }
  ];
  var idx = 0;
  var weekEl = document.getElementById("promptWeek");
  var textEl = document.getElementById("promptText");
  var card = document.getElementById("promptCard");

  function showPrompt(i) {
    idx = (i + PROMPTS.length) % PROMPTS.length;
    weekEl.textContent = "Week " + PROMPTS[idx].week;
    textEl.textContent = "\u201C" + PROMPTS[idx].text + "\u201D";
  }
  // deterministic shuffle so first paint isn't always the same card
  for (var s = PROMPTS.length - 1; s > 0; s--) {
    var j = Math.floor(Math.random() * (s + 1));
    var t = PROMPTS[s]; PROMPTS[s] = PROMPTS[j]; PROMPTS[j] = t;
  }
  showPrompt(0);
  document.getElementById("shufflePrompt").addEventListener("click", function () {
    card.style.opacity = "0";
    setTimeout(function () { showPrompt(idx + 1); card.style.opacity = "1"; }, 160);
  });
  card.style.transition = "opacity 0.16s ease";

  // --- Waitlist forms (placeholder: no backend yet; swap for a real provider at launch) ---
  function wireForm(formId, noteId) {
    var form = document.getElementById(formId);
    var note = document.getElementById(noteId);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = form.email.value.trim();
      if (!email) return;
      // TODO: POST to email provider (e.g. Buttondown/ConvertKit) when live.
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
})();
