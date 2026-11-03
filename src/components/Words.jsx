/**
 * Wraps each word of a string in span[data-word] so a parent marked
 * `data-words` can light them up as it scrolls (see usePageMotion). Spaces stay
 * plain text, so the sentence reads the same to screen readers and copy-paste.
 */
export default function Words({ children }) {
  return children
    .split(/(\s+)/)
    .map((part, i) => (part.trim() ? <span data-word key={i}>{part}</span> : part))
}
