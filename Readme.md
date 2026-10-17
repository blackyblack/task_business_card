This service serves my bio (profile, professional experience, achievements) as GraphQL endpoint.

API is served at http://localhost:3000/graphql by default.

## Docker

Run from the project directory:

```sh
docker compose up --build -d
```

## GraphQL

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
