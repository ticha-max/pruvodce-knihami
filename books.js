const books = [

{
    title: "Probouzení tygra",
    author: "Peter A. Levine",

    keywords: [
        "úzkost",
        "panika",
        "stres",
        "trauma",
        "napětí",
        "jsem pořád ve střehu",
        "nemohu se uklidnit",
        "tělo reaguje",
        "vnitřní neklid",
        "strach"
    ],

    description:
        "Kniha vysvětluje, jak trauma ovlivňuje nervový systém a proč tělo reaguje i dlouho po náročných životních událostech.",

    why:
        "Doporučujeme ji lidem, kteří prožívají úzkosti, silný stres, napětí nebo mají pocit, že jejich tělo reaguje nepřiměřeně na běžné situace."
},

{
    title: "Trauma očima dítěte",
    author: "Peter A. Levine",

    keywords: [
        "dětství",
        "trauma",
        "dětské trauma",
        "rodiče",
        "výchova",
        "emoce dítěte",
        "citlivé dítě"
    ],

    description:
        "Kniha ukazuje, jak vzniká trauma v dětském věku a jak lze jeho následkům předcházet.",

    why:
        "Vhodná pro rodiče, terapeuty i každého, kdo chce lépe porozumět dětskému prožívání."
},

{
    title: "Moudrost traumatu",
    author: "Gabor Maté",

    keywords: [
        "trauma",
        "psychosomatika",
        "nemoc",
        "emoce",
        "dětství",
        "stres",
        "chronický stres"
    ],

    description:
        "Známý dokument o tom, jak mohou životní zkušenosti ovlivnit psychiku i tělesné zdraví.",

    why:
        "Pomáhá pochopit souvislosti mezi psychikou, tělem a minulými zkušenostmi."
},

{
    title: "Obejmi své vnitřní dítě",
    author: "Ladislav Dvořák",

    keywords: [
        "vnitřní dítě",
        "odmítnutí",
        "opuštění",
        "nejsem dost dobrý",
        "potřebuji uznání",
        "strach z opuštění",
        "nízké sebevědomí"
    ],

    description:
        "Kniha pomáhá porozumět tomu, jak dětské zkušenosti ovlivňují naše současné vztahy a emoce.",

    why:
        "Doporučujeme při opakujících se vztahových problémech, nízkém sebevědomí nebo pocitech odmítnutí."
},

{
    title: "4 dohody",
    author: "Don Miguel Ruiz",

    keywords: [
        "beru si všechno osobně",
        "kritika",
        "sebevědomí",
        "hranice",
        "vztahy",
        "potřebuji uznání",
        "nedokážu říct ne",
        "vnitřní klid"
    ],

    description:
        "Jednoduchá kniha o změně způsobu přemýšlení a větší osobní svobodě.",

    why:
        "Pomáhá lidem, kteří se příliš trápí názory druhých nebo chtějí lépe nastavovat své hranice."
}

,

{
    title: "Uzdrav svá vnitřní zranění",
    author: "Lise Bourbeau",

    keywords: [
        "odmítnutí","opuštění","ponížení","zrada","nespravedlnost",
        "vnitřní zranění","emocionální bolest","sebehodnota",
        "nejsem dost dobrý","nemám se rád","nízké sebevědomí",
        "bolest z dětství","vztahy","opakující se vztahy",
        "neustále se obětuji","potřebuji uznání","citová závislost",
        "strach z opuštění","strach z odmítnutí","emoce"
    ],

    description:
        "Známá kniha popisující pět základních emočních zranění a jejich projevy v každodenním životě.",

    why:
        "Vhodná pro každého, kdo opakuje stejné vztahové vzorce nebo chce lépe porozumět svým emocím."
},

{
    title: "Cesta",
    author: "Brandon Bays",

    keywords: [
        "emoce","potlačené emoce","odpuštění","vnitřní klid",
        "uzdravení","psychika","psychosomatika","nemoc",
        "trauma","vnitřní dítě","strach","úzkost",
        "blok","emoční blok","seberozvoj",
        "vnitřní změna","osobní růst","zdraví"
    ],

    description:
        "Kniha představuje metodu práce s emocemi a jejich vlivem na tělo.",

    why:
        "Doporučujeme lidem, kteří hledají hlubší práci se svými emocemi."
},

{
    title: "Tajemství",
    author: "Rhonda Byrne",

    keywords: [
        "zákon přitažlivosti","myšlenky","pozitivní myšlení",
        "manifestace","cíle","vděčnost","štěstí",
        "spiritualita","změna života","hojnost"
    ],

    description:
        "Populární kniha o zákonu přitažlivosti a síle myšlenek.",

    why:
        "Vhodná pro čtenáře se zájmem o osobní rozvoj a spiritualitu."
},

{
    title: "Proměna",
    author: "Wayne W. Dyer",

    keywords: [
        "ego","vnitřní klid","životní změna",
        "smysl života","duchovní růst",
        "seberozvoj","spiritualita","vnitřní svoboda",
        "strach","odvaha"
    ],

    description:
        "Inspirativní kniha o změně pohledu na sebe i svět.",

    why:
        "Pomáhá lidem, kteří hledají hlubší životní změnu."
},

{
    title: "Zákon rezonance",
    author: "Pierre Franckh",

    keywords: [
        "rezonance","vibrace","manifestace",
        "pozitivní myšlení","spiritualita",
        "přání","cíle","energie",
        "životní změna","hojnost"
    ],

    description:
        "Kniha vysvětluje princip rezonance a jeho využití v běžném životě.",

    why:
        "Vhodná pro čtenáře zajímající se o spiritualitu a osobní rozvoj."
},

{
    title: "Myšlením k bohatství",
    author: "Napoleon Hill",

    keywords: [
        "peníze","bohatství","úspěch","podnikání",
        "motivace","cíle","sebedůvěra",
        "finance","kariéra","podnikatel",
        "myšlení","osobní růst"
    ],

    description:
        "Klasická kniha o principech úspěchu a budování správného myšlení.",

    why:
        "Doporučujeme podnikatelům a lidem, kteří chtějí rozvíjet své schopnosti."
},

{
    title: "Stíny před úsvitem",
    author: "Teal Swan",

    keywords: [
        "stín","potlačené emoce","trauma",
        "vnitřní dítě","úzkost",
        "deprese","sebepoznání",
        "osobní růst","psychologie"
    ],

    description:
        "Kniha se věnuje práci s potlačenými částmi osobnosti.",

    why:
        "Pomáhá lépe pochopit vlastní psychiku a emoce."
},

{
    title: "Koncept kontinua",
    author: "Jean Liedloff",

    keywords: [
        "rodičovství","výchova","děti",
        "miminko","kontakt",
        "mateřství","vývoj dítěte",
        "bezpečí","citová vazba"
    ],

    description:
        "Klasická kniha o přirozeném vývoji dítěte a rodičovství.",

    why:
        "Výborná pro budoucí i současné rodiče."
}
    ,

{
    title: "Respektovat a být respektován",
    author: "Pavel Kopřiva, Jana Nováčková a kol.",

    keywords: [
        "výchova","děti","rodiče","rodičovství","komunikace",
        "respekt","křik","tresty","odměny","hranice",
        "vztek dítěte","výchova bez křiku","vztah s dítětem",
        "puberta","sourozenec","rodina","empatie",
        "konflikty","naslouchání","důvěra"
    ],

    description:
        "Praktická kniha o respektující komunikaci mezi rodiči a dětmi.",

    why:
        "Doporučujeme rodičům, kteří chtějí budovat vztah založený na respektu místo trestů."
},

{
    title: "AHA! Rodičovství",
    author: "Dr. Laura Markham",

    keywords: [
        "rodičovství","výchova","děti","emoce dítěte",
        "vztek","sourozenci","respekt","komunikace",
        "bezpečná vazba","empatie","laskavá výchova",
        "hranice","rodina","důvěra","puberta"
    ],

    description:
        "Moderní pohled na výchovu založenou na vztahu mezi rodičem a dítětem.",

    why:
        "Pomáhá rodičům zvládat náročné situace klidněji a s větším porozuměním."
},

{
    title: "Kniha o mužství",
    author: "Steve Biddulph",

    keywords: [
        "muž","mužství","partner","otec","syn",
        "vztahy","sebevědomí","emoce muže",
        "životní krize","identita","chlapec",
        "rodina","partnerský vztah"
    ],

    description:
        "Kniha o psychologii mužů, jejich vývoji a vztazích.",

    why:
        "Vhodná pro muže i ženy, které chtějí lépe porozumět mužskému světu."
},

{
    title: "Rádce pravého muže",
    author: "Robert Glover",

    keywords: [
        "hodný kluk","partnerství","mužství","sebevědomí",
        "hranice","vztahy","závislost na uznání",
        "potřebuji být oblíbený","asertivita",
        "muž","partnerské problémy"
    ],

    description:
        "Kniha pomáhá mužům opustit roli 'hodného kluka' a budovat zdravější vztahy.",

    why:
        "Doporučujeme mužům, kteří mají problém nastavovat hranice nebo se příliš přizpůsobují."
},

{
    title: "Holotropní vědomí",
    author: "Stanislav Grof",

    keywords: [
        "vědomí","transpersonální psychologie",
        "porod","trauma","spiritualita",
        "sebepoznání","holotropní dýchání",
        "nevědomí","psychologie","duchovní růst"
    ],

    description:
        "Jedna z nejvýznamnějších knih transpersonální psychologie.",

    why:
        "Pro čtenáře, kteří chtějí jít za hranice klasické psychologie."
},

{
    title: "Tělo východu, mysl západu",
    author: "Anodea Judith",

    keywords: [
        "čakry","energie","psychosomatika",
        "spiritualita","sebepoznání",
        "emoce","bloky","duchovní růst",
        "rovnováha","tělo","mysl"
    ],

    description:
        "Spojuje západní psychologii s východním pohledem na energetický systém člověka.",

    why:
        "Vhodná pro zájemce o propojení psychologie a spirituality."
},

{
    title: "Vědomé milování",
    author: "Diana Richardson",

    keywords: [
        "sexualita","partnerství","intimita",
        "blízkost","vědomý vztah",
        "partnerský život","láska",
        "muž a žena","sexualita ve vztahu"
    ],

    description:
        "Kniha o vědomém prožívání partnerské intimity.",

    why:
        "Pomáhá párům prohloubit vzájemnou blízkost."
},

{
    title: "Posvátnost sexuality",
    author: "Daniel Odier",

    keywords: [
        "tantra","sexualita","spiritualita",
        "partnerský vztah","vědomé milování",
        "intimita","energie","láska"
    ],

    description:
        "Kniha propojující spiritualitu a partnerskou intimitu.",

    why:
        "Pro čtenáře zajímající se o vědomou sexualitu a tantru."
},

{
    title: "Matrix Božský zdroj",
    author: "Gregg Braden",

    keywords: [
        "energie","spiritualita","vědomí",
        "kvantová fyzika","manifestace",
        "intuice","realita","vesmír",
        "propojení","zákon přitažlivosti"
    ],

    description:
        "Autor propojuje moderní vědu s duchovními principy.",

    why:
        "Vhodná pro čtenáře hledající souvislosti mezi vědou a spiritualitou."
},

{
    title: "Více než léčba – Homeopatie",
    author: "Jiří Čehovský",

    keywords: [
        "homeopatie","zdraví","léčba",
        "alternativní medicína","imunita",
        "chronické potíže","nemoc",
        "prevence","psychosomatika"
    ],

    description:
        "Přehled možností využití homeopatie v praxi.",

    why:
        "Pro zájemce o celostní přístup ke zdraví."
}
,

{
    title: "Fit pro život znamená zdravý a štíhlý",
    author: "Harvey Diamond",

    keywords: [
        "výživa","strava","hubnutí","zdraví","energie",
        "únava","trávení","nadváha","ovoce","zelenina",
        "zdravý životní styl","metabolismus","detox","jídlo",
        "zdravé stravování","vitalita","štíhlost","výživa těla"
    ],

    description:
        "Známá kniha představující principy přirozeného stravování a kombinace potravin.",

    why:
        "Vhodná pro každého, kdo chce změnit jídelníček a zlepšit své zdraví."
},

{
    title: "Hladověním pro zdraví",
    author: "MUDr. Vilma Partyková",

    keywords: [
        "půst","hladovění","detox","očista",
        "zdraví","výživa","nemoc","regenerace",
        "metabolismus","očista organismu","energie"
    ],

    description:
        "Kniha popisuje léčebné účinky řízeného půstu.",

    why:
        "Pro čtenáře, kteří se zajímají o přirozené způsoby regenerace organismu."
},

{
    title: "Nejzdravější výživa",
    author: "Helmut Wandmaker",

    keywords: [
        "výživa","ovoce","zelenina","syrová strava",
        "zdraví","nemoc","vitaminy","minerály",
        "stravování","životní styl","energie","detox"
    ],

    description:
        "Publikace o významu přirozené stravy pro zdraví člověka.",

    why:
        "Doporučujeme zájemcům o zdravý životní styl a výživu."
},

{
    title: "Čerstvé ovocné a zeleninové šťávy",
    author: "Dr. Norman W. Walker",

    keywords: [
        "šťávy","ovoce","zelenina","výživa",
        "vitaminy","minerály","detox","zdraví",
        "šťávování","regenerace","imunita"
    ],

    description:
        "Praktická kniha o využití čerstvých šťáv pro podporu zdraví.",

    why:
        "Vhodná pro každého, kdo chce zařadit více čerstvé stravy."
},

{
    title: "Pránická výživa – Jiná cesta ke spiritualitě",
    author: "Henri Monfort",

    keywords: [
        "prána","spiritualita","výživa",
        "energie","meditace","vědomí",
        "duchovní růst","životní energie","sebepoznání"
    ],

    description:
        "Kniha představuje netradiční pohled na výživu a spiritualitu.",

    why:
        "Pro čtenáře zajímající se o duchovní rozvoj a alternativní přístupy."
},

{
    title: "Miluj svůj život",
    author: "Louise L. Hay",

    keywords: [
        "afirmace","sebeláska","sebevědomí",
        "psychosomatika","uzdravení",
        "pozitivní myšlení","životní změna",
        "vnitřní klid","odpuštění","emoce",
        "nemoc","vztahy"
    ],

    description:
        "Jedna z nejznámějších knih o propojení psychiky, těla a pozitivních změn.",

    why:
        "Doporučujeme lidem, kteří chtějí změnit svůj přístup k sobě i ke svému zdraví."
},

{
    title: "Když tělo řekne ne",
    author: "Gabor Maté",

    keywords: [
        "psychosomatika","chronický stres",
        "nemoc","emoce","vyhoření",
        "potlačené emoce","hranice",
        "autoimunitní onemocnění",
        "zdraví","stres","únava","tělo"
    ],

    description:
        "Autor vysvětluje, jak dlouhodobý stres a potlačené emoce ovlivňují zdraví.",

    why:
        "Jedna z nejlepších knih o souvislostech mezi psychikou a nemocemi."
},

{
    title: "Atomové návyky",
    author: "James Clear",

    keywords: [
        "návyky","motivace","disciplína",
        "změna života","produktivita",
        "cíle","zvyk","prokrastinace",
        "osobní rozvoj","úspěch"
    ],

    description:
        "Praktický návod, jak pomocí malých změn vytvořit dlouhodobé návyky.",

    why:
        "Výborná kniha pro každého, kdo chce skutečně změnit své každodenní chování."
},

{
    title: "Pět jazyků lásky",
    author: "Gary Chapman",

    keywords: [
        "partnerské vztahy","láska","komunikace",
        "manželství","partner","vztahy",
        "blízkost","porozumění","rodina",
        "citová potřeba"
    ],

    description:
        "Autor popisuje pět základních způsobů, jak lidé vyjadřují a přijímají lásku.",

    why:
        "Doporučujeme párům i jednotlivcům, kteří chtějí zlepšit své vztahy."
},

{
    title: "Citliví lidé",
    author: "Elaine N. Aron",

    keywords: [
        "citlivost","vysoce citlivý člověk",
        "HSP","úzkost","emoce",
        "přecitlivělost","stres",
        "vyčerpání","empatie","psychologie"
    ],

    description:
        "Zásadní kniha o vysoce citlivých lidech a jejich specifickém prožívání.",

    why:
        "Pomáhá pochopit vlastní citlivost a naučit se s ní lépe pracovat."
}
];
