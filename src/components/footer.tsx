export default function Footer() {
  const date = new Date();

  return (
    <footer>
        <h4>Larks Podcast &copy;{date.getFullYear()}</h4>
    </footer>
  )
}
