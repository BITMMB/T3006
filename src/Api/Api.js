async function getResourse(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Bad connection ${url}`)
  }
  return await res.json()
}

export class ApiArticles {
  async getArticleList(v) {
    const res = await getResourse(`https://blog.kata.academy/api/articles?limit=5&offset=${v}`)
    // console.log(res)
    return res
  }
  async getCurrentArticle(id) {
    let element = {}
    await getResourse('https://blog.kata.academy/api/articles?limit=970&offset=0').then((r) => {
      // console.log(r.articles)
      element = r.articles.find((item) => item.slug == id.id)
      // console.log(element)
    })
    return element
  }
}

export class Authentication {
  async register(name, mail, pass) {
    // console.log(name)
    const res = await fetch('https://blog.kata.academy/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        user: {
          username: name,
          email: mail,
          password: pass,
        },
      }),
    }).catch((e) => {
      console.log(e)
    })
    return res.json()
  }
  async loginuser(mail, pass) {
    const res = await fetch('https://blog.kata.academy/api/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        user: {
          email: mail,
          password: pass,
        },
      }),
    }).catch((e) => {
      console.log(e)
    })
    return res.json()
  }

  async getuser() {
    const token = localStorage.getItem('token')
    const res = await fetch('https://blog.kata.academy/api/user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
    }).catch((e) => {
      console.log(e)
    })
    return res.json()
  }
  async updateProfile(userData) {
    const token = localStorage.getItem('token')
    const res = await fetch('https://blog.kata.academy/api/user/', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: userData,
      }),
    }).catch((e) => {
      console.log(e)
    })
    return res.json()
  }
}

// https://api.realworld.io/api/articles?limit=5&offset=${v
