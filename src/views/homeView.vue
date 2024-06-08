<script setup lang="ts">
import { RouterView, useRoute, useRouter } from "vue-router";
import { useQuery, gql } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      name
      email
    }
  }
`;

// const UsersList = () => {
//   const { loading, error, data } = useQuery(GET_USERS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.users.map(user => (
//         <li key={user.email}>{user.name} - {user.email}</li>
//       ))}
//     </ul>
//   );
// };
</script>
