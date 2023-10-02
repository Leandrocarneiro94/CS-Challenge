import { useParams, Link } from "react-router-dom"

const User = () => {
    const {id} = useParams()
    return (
        <div>
            {id}
            <Link to='/'>
                home
            </Link>
        </div>
    )
}

export default User
