import Link from "next/link";
import {fetchUsers} from "../../services/Users";
import PageWrapper from "../../layouts/PageWrapper";

export const getStaticProps = async () => {
    const users = await fetchUsers();
    return {
        props: {users}
    }
}

const Users = ({users}) => {
    return (
        <PageWrapper title="Users">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {users.map(user => (
                    <div className="col" key={user.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <Link href={`/users/${user.id}`} key={user.id}>
                                    <a className="btn btn-primary btn-sm">
                                       Details
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </PageWrapper>
    );
}

export default Users;
