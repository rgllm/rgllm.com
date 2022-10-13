import Container from '~/Container'

export default function NotFound(props) {
  return (
    <Container title="Page Not Found - Rogério Moreira">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
        <div className="bg-center bg-cover notfound">
          <h1 className="font-bold text-black bg-gray-50 mix-blend-lighten text-9xl">
            The page you are searching for does not exist.
          </h1>
        </div>
      </div>
    </Container>
  )
}
