# Orbitra — vesmírna cestovná kancelária

Školský projekt vytvorený výhradne v HTML5, CSS a JavaScripte bez frameworkov.

## Súbory

- `index.html` — úvodná stránka s ponukou výletov
- `rezervacia.html` — druhá stránka s formulárom
- `styles.css` — responzívny vzhľad oboch stránok
- `script.js` — mobilná navigácia, aktuálny rok a kontrola formulára

## Spustenie

Otvorte `index.html` v internetovom prehliadači. Odkazy v hornej navigácii prepínajú medzi oboma stránkami. Formulár skontroluje povinné polia a zobrazí potvrdenie, no údaje **neodosiela** a nikam ich neukladá. Na skutočné prijímanie formulárov by bol potrebný server alebo formulárová služba.

## Zverejnenie cez GitHub Pages

1. Prihláste sa na GitHub a vytvorte nový verejný repozitár.
2. Nahrajte všetky štyri súbory z tohto priečinka priamo do koreňa repozitára.
3. V repozitári otvorte **Settings → Pages**.
4. V časti nasadenia zvoľte **Deploy from a branch**, vyberte vetvu `main` a priečinok `/ (root)`, potom nastavenie uložte.
5. Po dokončení nasadenia sa adresa webu zobrazí na tej istej stránke Pages. Otvorte ju a vyskúšajte oba odkazy aj formulár.

Na serveri `homel.vsb.cz` sa statický web zvyčajne nahráva do používateľského webového priečinka cez SFTP. Konkrétny názov priečinka, prístup a výslednú adresu si treba overiť v aktuálnych pokynoch VŠB alebo u správcu účtu; uvedená stránka s pokynmi momentálne nebola dostupná na načítanie.

## Ako projekt vysvetliť

- HTML tvorí obsah a štruktúru dvoch prepojených stránok.
- CSS nastavuje farby, rozloženie a prispôsobenie mobilom pomocou media queries.
- JavaScript otvára navigáciu na menších displejoch a overuje meno, e-mail, výber cesty a súhlas pred zobrazením potvrdenia.
- Téma a ponuky sú fiktívne; formulár je ukážkový a neposiela osobné údaje.
