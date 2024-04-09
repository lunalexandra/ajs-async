import read from './reader'
import json from './parser'

export default class GameSavingLoader {
  load() {
    return read()
            .then(data => json(data))
            .then(value => JSON.parse(value))
            .catch(Error => {
              throw new Error('error')
            })
  }
}
