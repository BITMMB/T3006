import React from 'react'
import { Link } from 'react-router-dom'

import Heart from '../Heart'
import Text from '../TextBlock'
import UserIcon from '../UserIcon'

import classes from './ArticleSmall.module.scss'

function ArticleSmall({ el }) {
  return (
    <div className={classes.article}>
      <div className={classes.title}>
        <Link to={`/${el.slug}`}>
          <Text txt={el.title} value={'title'} />
        </Link>
        <Heart favoritesCount={el.favoritesCount} />
      </div>
      <UserIcon el={el} />
      <div className={classes.tags}>Tag1</div>
      <div className={classes.text}>
        <Text txt={el.body} value={'body'} />
      </div>
    </div>
  )
}

export default ArticleSmall
// classes.article
