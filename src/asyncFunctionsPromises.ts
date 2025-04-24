import request from 'request';


type RequestType = {
    name?: string,
    gender?: string,
    race?: string,
    affiliation?: string
}

type CharacterType = {
    id: number,
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    description: string,
    image: string,
    affiliation: string,
    deletedAt: null
}


/**
 *
 * @param filtros - filtros para buscar el caracter
 * @returns Una promesa, que devuelve el personaje que busacamos o un error si no existe
 */

export const DragonBallBusqueda = (filtros: RequestType) => {
  return new Promise<CharacterType[]>((resolve, reject) => {   
    let url = `https://dragonball-api.com/api/characters`;

    let url_final: string = '';
    let nombre: boolean = false;
    let genero: boolean = false;
    let raza: boolean = false;

    if (filtros.name) {
        url_final += `?name=${filtros.name}`;
        nombre = true;
    }

    if (filtros.gender) {
        if (nombre) {
            url_final += `&gender=${filtros.gender}`
        } else {
            url_final += `?gender=${filtros.gender}`
        }

        genero = true;
    }

    if (filtros.race) {
        if (nombre || genero) {
            url_final += `&race=${filtros.race}`
        } else {
            url_final += `?race=${filtros.race}`
        }

        raza = true;
    }    

    if (filtros.affiliation) {
        if (nombre || genero || raza) {
            url_final += `&affiliation=${filtros.affiliation}`
        } else {
            url_final += `?affiliation=${filtros.affiliation}`
        }
    }  

    url += url_final;
    
    request( { url: url, json: true }, (error: Error, response: request.Response) => {
        if (error) {
            reject(error.message);
          } else if (response.body.length === 0) {
            reject("No hay un personaje");
          } else {
            resolve(response);
        }
        },
      );
    });
  };

/* 
  DragonBallBusqueda({ name: 'Goku' })
  .then((funciona) => {
      console.log(funciona);
  })
  .catch((error) => {
      console.log(error);
  })  
*/


