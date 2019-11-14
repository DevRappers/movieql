import { getMovies, getById, addMovie } from "./db";


// Resolvers는 Query를 해결하는 것으로 
// Query는 Database에게는 문제같은 것이고 이것을 어떤 방식으로 resolve(해결) 해야함.
const resolvers = {
    // 사용자가 쿼리로 name을 호출하면 DevRappers를 반환함.
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) =>  getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie(name, score)
    }
}

export default resolvers;