// =====================================================================
//  BOSS FINALE · domande e testi
//  Modifica solo questo file per cambiare le domande.
//
//  Ogni domanda ha tre parti:
//    q:       il testo della domanda, tra virgolette
//    options: le quattro risposte, nell'ordine A, B, C, D
//    correct: la posizione della risposta giusta: 0 = A, 1 = B, 2 = C, 3 = D
//
//  Per togliere una domanda cancella tutto il blocco da { a }, virgola compresa.
//  Il gioco funziona con qualsiasi numero di domande: la vita del boss si ricalcola.
//  Se un testo contiene le virgolette doppie, scrivile così: \"
// =====================================================================

window.BOSS_CONFIG = {
  eyebrow: "Imparare l'AI con l'AI · Sfida finale",
  bossName: "ALLUCINATORE",
  bossSubtitle: "Modello v∞ · obiettivo: il mondo",
  defaultPlayers: 15,
  defaultLevel: 8, // 1-10 → soglia 10%-100%

  questions: [
    {
      q: "Cosa fa, in sostanza, un LLM quando risponde a una domanda?",
      options: [
        "Cerca la risposta in un enorme archivio di frasi memorizzate",
        "Prevede la sequenza di parole più probabile in base al contesto",
        "Ragiona come un essere umano, solo più velocemente",
        "Copia la risposta dal primo sito che trova"
      ],
      correct: 1
    },
    {
      q: "Quale di queste è la definizione più corretta di Deep Learning?",
      options: [
        "Un modello che si basa solo su dati molto approfonditi e verificati",
        "Un tipo di intelligenza artificiale generativa",
        "Una forma di machine learning che usa reti neurali con molti strati per imparare dai dati",
        "Un sistema che permette all'AI di cercare informazioni sul web"
      ],
      correct: 2
    },
    {
      q: "Cosa si intende per sicofanzia?",
      options: [
        "La tendenza a inventare fonti",
        "La tendenza a rifiutare le domande scomode",
        "La tendenza a ripetere sempre la stessa risposta",
        "La tendenza ad assecondare l'utente, anche quando sbaglia"
      ],
      correct: 3
    },
    {
      q: "Come si chiama un'IA che, oltre a rispondere, compie azioni in autonomia per raggiungere un obiettivo, per esempio fare ricerche sul web o navigare siti?",
      options: [
        "IA agentica",
        "IA generativa",
        "Deep learning",
        "Machine learning"
      ],
      correct: 0
    },
    {
      q: "Durante il pre-training, cosa impara a scegliere il modello?",
      options: [
        "La parola grammaticalmente più corretta",
        "La parola suggerita da un revisore umano",
        "La parola statisticamente più adatta secondo i testi raccolti",
        "La parola più rara in base al contesto"
      ],
      correct: 2
    },
    {
      q: "Perché un LLM può riprodurre dei pregiudizi?",
      options: [
        "Perché i programmatori li inseriscono di proposito",
        "Perché parte da testi scritti da umani, e anche chi ci lavora è umano",
        "Perché la tokenizzazione deforma il significato delle parole",
        "Perché solo i modelli gratuiti hanno bias"
      ],
      correct: 1
    },
    {
      q: "Qual è l'ordine corretto, dal concetto più generale al più specifico?",
      options: [
        "Machine learning → IA → Deep learning → Reti neurali",
        "IA → Deep learning → Machine learning → Reti neurali",
        "Reti neurali → IA → Machine learning → Deep learning",
        "IA → Machine learning → Reti neurali → Deep learning"
      ],
      correct: 3
    },
    {
      q: "Cosa succede alle parole del prompt prima che attraversino la rete neurale?",
      options: [
        "Vengono scomposte in token, trasformate in numeri decimali e poi in soli 1 e 0",
        "Vengono valutate nel database per individuare la risposta più probabile",
        "Vengono moltiplicate miliardi di volte insieme ad altre parole",
        "Vengono trasformate in sistema binario e poi ricomposte in token"
      ],
      correct: 0
    },
    {
      q: "Lo stesso LLM risponde correttamente all'indovinello di Alice, poi alla domanda successiva sbaglia. Perché?",
      options: [
        "Perché le risposte sono sempre diverse",
        "Perché impara in tempo reale in base alle risposte degli utenti",
        "Perché mette in fila le parole più probabili nel contesto, senza un ragionamento logico",
        "Perché è programmato per dare ragione all'utente"
      ],
      correct: 2
    },
    {
      q: "Quale affermazione su un LLM è falsa?",
      options: [
        "Non distingue con precisione ciò che sa da ciò che non sa",
        "Senza strumenti esterni, sa solo ciò che deriva dai testi su cui è stato addestrato",
        "Conosce il linguaggio di programmazione",
        "Migliora le proprie capacità ogni volta che conversa con l'utente"
      ],
      correct: 3
    }
  ]
};
