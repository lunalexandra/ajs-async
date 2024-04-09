import GameSavingLoader from './GameSavingLoader'

export default function newLoader() {
 const loader = new GameSavingLoader();
 loader.load()
    .then((gameSaving) => {
      console.log(gameSaving)
    })
    .catch(error => {
      console.error(error)
    });
    
    return loader
}

newLoader();