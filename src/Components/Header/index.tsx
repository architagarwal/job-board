import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div data-testid="header-title" className="text-blue-600 text-xl font-bold">
            <Link href="/dashboard">Job Board</Link>
          </div>
          <div data-testid="post-job" className="md:block">
            <Link href="/postJob" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Post Job
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;