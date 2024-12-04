import React from 'react'
import { ITranslate } from './types'

const TranslateBox = (props: ITranslate) => {
  return (
    <textarea 
      name={props.name} 
      id={props.name}
      rows={5}
      className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400"></textarea>
  )
}

export default TranslateBox