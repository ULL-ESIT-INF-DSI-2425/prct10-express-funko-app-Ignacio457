
import { describe, test, expect } from 'vitest';
import { DragonBallBusqueda } from '../src/asyncFunctionsPromises.js';

describe('DragonBallBusqueda', () => {
    test('name', () => {
        return DragonBallBusqueda({ name: 'Goku' }).then((data) => {
            expect(data.body).to.deep.equal(
                [
                    {      
                    "id": 1,
                    "name": "Goku",
                    "ki": "60.000.000",
                    "maxKi": "90 Septillion",
                    "race": "Saiyan",
                    "gender": "Male",
                    "description": "El protagonista de la serie, conocido por su gran poder y personalidad amigable. Originalmente enviado a la Tierra como un infante volador con la misión de conquistarla. Sin embargo, el caer por un barranco le proporcionó un brutal golpe que si bien casi lo mata, este alteró su memoria y anuló todos los instintos violentos de su especie, lo que lo hizo crecer con un corazón puro y bondadoso, pero conservando todos los poderes de su raza. No obstante, en la nueva continuidad de Dragon Ball se establece que él fue enviado por sus padres a la Tierra con el objetivo de sobrevivir a toda costa a la destrucción de su planeta por parte de Freeza. Más tarde, Kakarot, ahora conocido como Son Goku, se convertiría en el príncipe consorte del monte Fry-pan y líder de los Guerreros Z, así como el mayor defensor de la Tierra y del Universo 7, logrando mantenerlos a salvo de la destrucción en innumerables ocasiones, a pesar de no considerarse a sí mismo como un héroe o salvador.",
                    "image": "https://dragonball-api.com/characters/goku_normal.webp",
                    "affiliation": "Z Fighter",
                    "deletedAt": null
                    }
                ]
            );
        });
    });


    test('name y gender', () => {
        return DragonBallBusqueda({ name: 'Vegeta', gender: 'Male' }).then((data) => {
            expect(data.body).to.deep.equal(
                [
                    {      
                        "id":	2,
                        "name":	"Vegeta",
                        "ki":	"54.000.000",
                        "maxKi":	"19.84 Septillion",
                        "race":	"Saiyan",
                        "gender":	"Male",
                        "description":	"Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters. A pesar de que a inicios de Dragon Ball Z, Vegeta cumple un papel antagónico, poco después decide rebelarse ante el Imperio de Freeza, volviéndose un aliado clave para los Guerreros Z. Con el paso del tiempo llegaría a cambiar su manera de ser, optando por permanecer y vivir en la Tierra para luchar a su lado contra las inminentes adversidades que superar. Junto con Piccolo, él es de los antiguos enemigos de Goku que ha evolucionando al pasar de ser un villano y antihéroe, a finalmente un héroe a lo largo del transcurso de la historia, convirtiéndose así en el deuteragonista de la serie.",
                        "image":	"https://dragonball-api.com/characters/vegeta_normal.webp",
                        "affiliation":	"Z Fighter",
                        "deletedAt":	null
                    }
                ]
            );
        });
    });



    test('race y gender', () => {
        return DragonBallBusqueda({ gender: "Female", race: "Android"  }).then((data2) => {
            expect(data2.body).to.deep.equal(
                [
                    {      
                        "id":	64,
                        "name":	"Android 18",
                        "ki":	"280,000,000",
                        "maxKi":	"300,000,000",
                        "race":	"Android",
                        "gender":	"Female",
                        "description":	'Es la hermana melliza del Androide Número 17 y una "androide" creada a partir de una base humana por el Dr. Gero con el único fin de destruir a Goku.',
                        "image":	"https://dragonball-api.com/characters/Androide_18_Artwork.webp",
                        "affiliation":	"Z Fighter",
                        "deletedAt":	null
                    }
                ]
            );
        });
    });

    test(' race y affiliation', () => {
        return DragonBallBusqueda({ race: "Android", affiliation: "Freelancer" }).then((data3) => {
            expect(data3.body).to.deep.equal(
                [
                    {
                    "id":	9,
                    "name":	"Celula",
                    "ki":	"250.000.000",
                    "maxKi":	"5 Billion",
                    "race":	"Android",
                    "gender":	"Male",
                    "description":	"Cell conocido como Célula en España, es un bioandroide creado por la computadora del Dr. Gero, quien vino del futuro de la línea 3 con la intención de vengarse de Goku por haber acabado con el Ejército del Listón Rojo, y con ello el sueño de todo villano: dominar el mundo. Es el antagonista principal del Arco de los Androides y Cell.",
                    "image":	"https://dragonball-api.com/characters/celula.webp",
                    "affiliation":	"Freelancer",
                    "deletedAt":	null
                    }

                ]
            );
        });
    });    

    test(' affiliation', () => {
        return DragonBallBusqueda({affiliation: "Freelancer" }).then((data4) => {
            expect(data4.body).to.deep.equal(
                [
                    {
                    "id":	9,
                    "name":	"Celula",
                    "ki":	"250.000.000",
                    "maxKi":	"5 Billion",
                    "race":	"Android",
                    "gender":	"Male",
                    "description":	"Cell conocido como Célula en España, es un bioandroide creado por la computadora del Dr. Gero, quien vino del futuro de la línea 3 con la intención de vengarse de Goku por haber acabado con el Ejército del Listón Rojo, y con ello el sueño de todo villano: dominar el mundo. Es el antagonista principal del Arco de los Androides y Cell.",
                    "image":	"https://dragonball-api.com/characters/celula.webp",
                    "affiliation":	"Freelancer",
                    "deletedAt":	null
                    }

                ]
            );
        });
    });

    test(' ERROR', () => {
        return DragonBallBusqueda({affiliation: "ninguna" }).catch((err) => {
            expect(err).to.be.equal("No hay un personaje");
        });
    });

    test(' ERROR', () => {
        return DragonBallBusqueda({a: "ninguna" }).catch((err) => {
            expect(err).to.be.equal("No hay un personaje");
        });
    });

});


