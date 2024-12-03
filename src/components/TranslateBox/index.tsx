import React from 'react'
import { ITranslate } from './types'

const TranslateBox = (props: ITranslate) => {
  return (
    <textarea name={props.name} id={props.name}></textarea>
  )
}

export default TranslateBox