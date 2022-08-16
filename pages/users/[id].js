import {fetchSingleUsers, fetchUsers} from "../../services/Users";
import PageWrapper from "../../layouts/PageWrapper";

export const getStaticPaths = async () => {
    const users = await fetchUsers();
    const paths = users.map(user => ({params: {id: user.id.toString()}}));
    return {
        paths, fallback: false
    }
}

export const getStaticProps = async (context) => {
    const user = await fetchSingleUsers(context.params.id);
    return {
        props: {user}
    }
}
const UserDetails = ({user}) => {
    return (
        <PageWrapper title="User Details">
            <div className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">Name:</h5>
                    <p className="card-text">{user.name}</p>

                    <h5 className="card-title">Username:</h5>
                    <p className="card-text">{user.username}</p>

                    <h5 className="card-title">Email:</h5>
                    <p className="card-text">{user.email}</p>

                    <h5 className="card-title">Phone:</h5>
                    <p className="card-text">{user.phone}</p>

                    <h5 className="card-title">Website:</h5>
                    <p className="card-text">{user.website}</p>

                    <h5 className="card-title">address:</h5>
                    <p className="card-text">{user.address.street + ', ' + user.address.suite + ', '+  user.address.city}</p>

                </div>
            </div>
        </PageWrapper>
    )
}

export default UserDetails;
