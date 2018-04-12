const URL = `http://localhost:3003/api/todos` 
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

const filter = params => 
	fetch(`${URL}?${params}`)
		.then(res => res.json())

const save = todo => 
	fetch(`${URL}`, { method: 'POST', body: JSON.stringify(todo), headers })
		.then(res=> res.json())

const remove = params => 
    fetch(`${URL}?${params}`, {method: 'DELETE'})

const update = todo => 
    fetch(`${URL}`, { method: 'PUT', body: JSON.stringify(todo), headers })
    	.then(res=> res.json)


const API = { filter, save, remove, update };
    
export default API ;