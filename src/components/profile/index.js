import { useUser } from "hooks/users";
import { useParams } from "react-router-dom";

export default function Profile(uid) {
    const { id } = useParams();
    const { user, userIsLoading } = useUser(id)

    if (userIsLoading) {
        return <div>loading...</div>
    }

    return (
        <div>this is profile of {user?.username}</div>
    )
}
