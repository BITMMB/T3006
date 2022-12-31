async function getResourse(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Bad connection ${url}`)
  }
  return await res.json()
}

export class ApiArticles {
  async getArticleList(v) {
    const res = await getResourse(`https://api.realworld.io/api/articles?limit=5&offset=${v}`)
    // console.log(res)
    return res
  }
  async getCurrentArticle(id) {
    let element = {}
    await getResourse('https://api.realworld.io/api/articles?limit=970&offset=0').then((r) => {
      // console.log(r.articles)
      element = r.articles.find((item) => item.slug == id.id)
      // console.log(element)
    })
    return element
  }
}

export class Authentication {
  async getArticleList() {
    const res = await getResourse('https://blog.kata.academy/api/articles')

    return res
  }
}
