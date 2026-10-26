# Boss AI

Quiz a squadre per l'aula: la classe affronta un boss robot in pixel art. Ogni voto dato alla risposta corretta toglie un punto vita al boss.

## Come si gioca

1. Imposta il numero di giocatori e premi **Risveglia il boss**.
2. Per ogni domanda la classe decide come distribuire i voti. Il formatore li inserisce con i tasti − e + accanto alle risposte. **Attacca** si sblocca solo quando la somma dei voti è uguale al numero di giocatori.
3. Ogni voto sulla risposta giusta toglie 1 punto vita.
4. La classe vince se il boss arriva a zero punti vita. Se succede prima della decima domanda, la partita finisce lì.

## Vita del boss

Vita = giocatori × domande × soglia.

Con 15 giocatori, 10 domande e soglia all'80%, il boss ha 120 punti vita su 150 voti in gioco.

## I due tasti del formatore

Sono in basso a destra e non hanno etichette.

- **Blu**: alza la soglia, il boss diventa più resistente.
- **Rosso**: abbassa la soglia, il boss diventa più fragile.

Il tachimetro va da 1 a 10, cioè dal 10% al 100%. Il valore di partenza è 8. A 10 serve che tutti rispondano giusto a ogni domanda.

La vita si ricalcola subito, e il robot cambia aspetto in diretta. Se la vita scende a zero mentre premi il rosso, vince la classe.

## Modificare le domande

Le domande sono tutte in `questions.js`. Per ogni domanda:

- `q`: il testo della domanda
- `options`: le quattro risposte
- `correct`: la posizione della risposta giusta (0 = A, 1 = B, 2 = C, 3 = D)

Nello stesso file puoi cambiare anche il nome del boss, il numero di giocatori iniziale e la soglia iniziale.

## Pubblicarlo online

Su GitHub vai in **Settings → Pages**. In "Build and deployment" scegli **Deploy from a branch**, poi il branch `main` e la cartella `/ (root)`, e salva.

Dopo un paio di minuti il gioco è raggiungibile su `https://elbruco91.github.io/bossai/`.
