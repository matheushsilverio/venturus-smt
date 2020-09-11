import axios from "axios";

function createAxios () {
  try {
    let config = {
      baseURL: 'https://api-football-v1.p.rapidapi.com',
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "8b148d6560mshf1eaf02604c171cp17d8e0jsn6683bbde2cc2",
        "useQueryString": true
      }
    };

    let http = axios.create(config)
    return http

  } catch (e) {
    console.log(e)
  }
}

const $http = createAxios()

class Teams {
  
  async getSquadTeam ({ id }) {
    try {
      if (!id) return null

      let res = await $http.get('/v2/players/squad/'+ id +'/2018-2019')
      
      if (res.status == 200) {
        return res.data
      }
      return null

    } catch (err) {
      console.log(err)
      return null
    }
  }

  async getSquads () {
    try {

      let arr = [90,85,100,101,102], res = []
      for (let id of arr) {
        let _aux = await this.getSquadTeam({ id: id })
        res.push({ id: _aux })
      }
      return res

    } catch (err) {
      console.log(err)
      return []
    }

  }

}

export default Teams