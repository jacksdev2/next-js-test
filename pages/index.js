
import LinkCustom from '../components/LinkCustom'


const Index = () => (
    <div>
        <h1>About</h1>
        <LinkCustom href='/about'>
            <a className="nav_link" >About</a>
        </LinkCustom>
        <LinkCustom href='/class'>
            <a className="nav_link" >Class Schedule</a>
        </LinkCustom>
        <LinkCustom href='/social'>
            <a className="nav_link" >Social/Photos</a>
        </LinkCustom>
        <LinkCustom href='/instructors'>
            <a className="nav_link" >Instructors</a>
        </LinkCustom>
        <LinkCustom href='/contact'>
            <a className="nav_link" >Contact</a>
        </LinkCustom>

    </div>  
)

export default Index