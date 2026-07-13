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
    ];
