function rozmnazanie (maly_pies: number, duzy_pies:number, konie: number, krowy: number, swinki: number, owce: number, kroliki: number) {
    let wylosowana_kostka1 = kostka1[randint(0, 11)]
    let wylosowana_kostka2 = kostka2[randint(0, 11)]

    serial.writeLine(wylosowana_kostka1 + " " + wylosowana_kostka2)

    if (wylosowana_kostka1 == 'wilk') {
       
        if (duzy_pies > 0) {
            duzy_pies = duzy_pies - 1
        } else {    
             return {
                'maly_pies': maly_pies,
                'duzy_pies': duzy_pies,
                'kon': konie, 
                'krowa':  0, 
                'swinka': 0,
                'owca': 0, 
                'krolik': 0
            }
        }

    }
    if (wylosowana_kostka2 == 'lis') {
       
        if (maly_pies > 0) {
            maly_pies = maly_pies - 1
        } else {    
             return {
                'maly_pies': maly_pies,
                'duzy_pies': duzy_pies,
                'kon': konie, 
                'krowa': krowy, 
                'swinka': swinki,
                'owca': owce, 
                'krolik': 0
            }
        }

    }   
    
    let kroliki_na_kostkach = toInt(wylosowana_kostka1 == 'krolik') + toInt(wylosowana_kostka2 == 'krolik')
    let owce_na_kostkach = toInt(wylosowana_kostka1 == 'owca') + toInt(wylosowana_kostka2 == 'owca')
    let swinki_na_kostkach = toInt(wylosowana_kostka1 == 'swinka') + toInt(wylosowana_kostka2 == 'swinka')

    let krowy_na_kostkach = toInt(wylosowana_kostka1 == 'krowa') + toInt(wylosowana_kostka2 == 'krowa')
    let konie_na_kostkach = toInt(wylosowana_kostka1 == 'kon') + toInt(wylosowana_kostka2 == 'kon')

    return {
     'maly_pies': maly_pies,
     'duzy_pies': duzy_pies,
     'kon': rozmnoz_jeden(konie, konie_na_kostkach), 
     'krowa': rozmnoz_jeden(krowy, krowy_na_kostkach), 
     'swinka': rozmnoz_jeden(swinki,swinki_na_kostkach),
     'owca': rozmnoz_jeden(owce, owce_na_kostkach), 
     'krolik': rozmnoz_jeden(kroliki, kroliki_na_kostkach)
    }
}
function wKrolikach (maly_pies: number, duzy_pies: number, konie: number, krowy: number, swinki: number, owce: number, kroliki: number) {
    let wynik = (kroliki + (((konie * 2 + (krowy + duzy_pies)) * 3 + swinki) * 2 + (owce + maly_pies)) * 6)
    serial.writeLine("" + wynik)
}
function rozmnoz_jeden (zwierzeta: number, zwierzeta_na_kostkach: number) {
    if (zwierzeta_na_kostkach > 0) {
        return zwierzeta + Math.floor((zwierzeta + zwierzeta_na_kostkach) / 2)
    } else {
        return zwierzeta
    }
}

let kostka1: string[] = ["krolik", "krolik", "krolik", "krolik", "wilk", "owca", "owca", "owca", "swinka", "krowa", "krolik", "krolik"]
let kostka2: string[] = ["krolik", "krolik", "krolik", "krolik", "lis", "owca", "owca", "owca", "swinka", "kon", "krolik", "krolik"]
function toInt(b: Boolean){
    if (b) {
        return 1
    }
    else {
        return 0
    }
}

let zwierzeta = {'maly_pies': 4, 
                 'duzy_pies': 2,
                 'kon': 0,
                 'krowa': 1,
                 'swinka': 4,
                 'owca': 6,
                 'krolik':10 }

serial.writeLine(zwierzeta['maly_pies'] + " " +
        zwierzeta['duzy_pies'] + " " +
        zwierzeta['kon'] + " " +
        zwierzeta['krowa'] + " " + zwierzeta['swinka'] + " " + zwierzeta['owca'] + " " + zwierzeta['krolik'])
for(let i = 0; i < 5; i++)  {
    zwierzeta = rozmnazanie(
        zwierzeta['maly_pies'],
        zwierzeta['duzy_pies'], 
        zwierzeta['kon'], 
        zwierzeta['krowa'], zwierzeta['swinka'], zwierzeta['owca'], zwierzeta['krolik']
    )
    serial.writeLine(zwierzeta['maly_pies'] + " " +
        zwierzeta['duzy_pies'] + " " +
        zwierzeta['kon'] + " " +
        zwierzeta['krowa'] + " " + zwierzeta['swinka'] + " " + zwierzeta['owca'] + " " + zwierzeta['krolik'])

    wKrolikach(zwierzeta['maly_pies'],
        zwierzeta['duzy_pies'], 
        zwierzeta['kon'], 
        zwierzeta['krowa'], zwierzeta['swinka'], zwierzeta['owca'], zwierzeta['krolik'])
}
