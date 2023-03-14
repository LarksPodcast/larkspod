export default function Footer() {
  const date = new Date();

  return (
    <footer className="text-center py-2">
        <h4 className="text-gray-600">Larks Podcast &copy;{date.getFullYear()}</h4>
    </footer>
  )
}
