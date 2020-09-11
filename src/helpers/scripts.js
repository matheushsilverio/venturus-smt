
// fn abreviar nomes
export function _abrevName (name) {
  if (!name) return ''

  let data = name.split(' ')
  
  let result = ''
  if (data.length > 0) {
    result = `${data[0].substring(0,1).toUpperCase()}` 
    
    let i = data.length - 1
    if (i !== 0 && data[i]) 
      result += `${data[i].substring(0,1).toUpperCase()}`
  }
  return result
}
