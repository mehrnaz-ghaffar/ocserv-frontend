import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: "http://0.0.0.0:8000/graphql",
});

// Middleware to set headers, if necessary
const authLink = setContext((_, { headers }) => {
  // Add authorization header here if needed
  return {
    headers: {
      ...headers,
      // Authorization: `Bearer ${token}` // Uncomment and set token if you have authentication
    },
  };
});

// Apollo Client setup
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default apolloClient;
