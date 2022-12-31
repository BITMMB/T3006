import TextTruncate from 'react-text-truncate'

export default function Text({ txt, value }) {
  // console.log(txt)
  let lines
  value == 'title' ? (lines = 1) : (lines = 2)
  return <TextTruncate line={lines} element="span" truncateText="…" text={txt} textTruncateChild={''} />
}
