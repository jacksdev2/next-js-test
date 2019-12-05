
import Link from 'next/link'


const Index = () => (
    <div>
        <h1>Home page</h1>
        <Link href='/schedule'>
            <a>Schedule</a>
        </Link>
        <Link href='/instructors'>
            <a>Instructors</a>
        </Link>
        <Link href='/contact'>
            <a>Contact</a>
        </Link>
        <Link href='/more'>more
        </Link>
    </div>  
)

export default Index