import Auth from '../utils/auth'
const host = 'http://localhost:3000/'

async function register (username, email, password) {
  const res = await window.fetch(host + 'auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      email,
      password
    })
  })

  return res.json()
}

async function login (email, password) {
  const res = await window.fetch(host + 'auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  return res.json()
}

async function fetchStats () {
  const res = await window.fetch(host + 'stats')
  return res.text()
}

async function fetchProducts () {
  const res = await window.fetch(host + 'product/all')
  return res.text()
}

async function createProduct (data) {
  const res = await window.fetch(host + 'product/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function editProduct (id, data) {
  const res = await window.fetch(host + `product/edit/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function deleteProduct (id) {
  const res = await window.fetch(host + `product/delete/${id}`, {
    method: 'DELETE',
    headers: {
        'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function createReview (id, data) {
  const res = await window.fetch(host + `product/review/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function likeProduct (id) {
  const res = await window.fetch(host + `product/like/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function unlikeProduct (id) {
  const res = await window.fetch(host + `product/unlike/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

async function submitOrder (data) {
  const res = await window.fetch(host + 'orders/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    },
    body: JSON.stringify(data)
  })

  return res.json()
}

async function fetchUserOrders () {
  const res = await window.fetch(host + 'orders/user', {
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })
  return res.json()
}

async function fetchPendingOrders () {
  const res = await window.fetch(host + 'orders/pending', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })
  return res.json()
}

async function approveOrder (id) {
  const res = await window.fetch(host + `orders/approve/${id}`, {
    method: 'POST',
    headers: {
      'Authorization': 'bearer ' + Auth.getToken()
    }
  })

  return res.json()
}

export {
  register,
  login,
  fetchProducts,
  createProduct,
  editProduct,
  deleteProduct,
  fetchStats,
  createReview,
  likeProduct,
  unlikeProduct,
  submitOrder,
  fetchUserOrders,
  fetchPendingOrders,
  approveOrder
}
