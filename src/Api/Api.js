async function getResourse(url) {
  const res = await fetch(url)
  if (!res.ok) {
    throw new Error(`Bad connection ${url}`)
  }
  return await res.json()
}
// export default getResourse

export class Articles {
  async getArticleList() {
    const res = await getResourse('https://api.realworld.io/api/articles?limit=970&offset=0')

    return res
  }
}

export class Authentication {
  async getArticleList() {
    const res = await getResourse('https://blog.kata.academy/api/articles')

    return res
  }
}
