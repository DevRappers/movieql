// babel-node : 기본적으로 더 좋게 코드를 작성하게 만들어줌 
import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

// schema : 사용자에게 보내거나 사용자로부터 받을 data에 대한 설명
const server = new GraphQLServer({
    // typeDefs : 모든 type들에 대한 정의
    typeDefs: "graphql/schema.graphql",
    resolvers
});

server.start(() => console.log("Graphql Server Running"));