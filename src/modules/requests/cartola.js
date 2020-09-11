import axios from "axios";



function createAxios () {
  try {
    let config = {
      baseURL: 'https://api.gcn.globoesporte.globo.com/api/',
      headers: { 
        'Cookie': 'GLBID=1c2edf2b8fee63667af09031b3b31988956614c2d4b6575684d626933624452654b662d68355a382d68676a366769516b655176494f6748774d35304a73465556536c6f4f4e6f4544357a726e6846695f41394a56426d347432346c36696c6239434f532d72413d3d3a303a73696c766572696f2e6d617468657573'
      }
    };

    let http = axios.create(config)
    // http.defaults.headers["Access-Control-Allow-Origin"] = '*'
    // http.defaults.headers["Cookie"] = 'GLBID=1c2edf2b8fee63667af09031b3b31988956614c2d4b6575684d626933624452654b662d68355a382d68676a366769516b655176494f6748774d35304a73465556536c6f4f4e6f4544357a726e6846695f41394a56426d347432346c36696c6239434f532d72413d3d3a303a73696c766572696f2e6d617468657573'
    return http

  } catch (e) {
    console.log(e)
  }
}

const $http = createAxios()

class Cartola {
  
  async maisEscalados ({ rodada }) {
    try {
      if (!rodada) return null

      let res = await $http.get('/mais-escalados-cartola/1/rodadas/' + rodada)
      
      if (res.status == 200) {
        return res.data
      }
      return null

    } catch (err) {
      console.log(err)
      return null
    }
  }

}

export default Cartola