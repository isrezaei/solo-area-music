import {gql} from "@apollo/client";
import {DataBaseClient} from "../../client/client";

export const getSubscribeQuery = gql`
    query GET_SUBSCRIBED_LIST($userId: String) {
        GET_SUBSCRIBED_LIST(userId: $userId) {
            id
            name
            images {
                width
                height
                url
            }
            created_at
            dependent_to
            user_Id
        }
    }
`


export const getSubscribedList = async (userId) =>
{
    try {
        const {data , error} = await DataBaseClient.query({query : getSubscribeQuery , variables : {userId}})
        if (error) return error
        return data
    }
    catch (error)
    {
        console.log(error)
    }
}