This service serves my bio (profile, professional experience, achievements) as GraphQL endpoint.

API is served at http://localhost:3000/graphql by default.

Sample request:

```
query {
    profile {
        name
        skills {
            name
        }
    }
}
```
