# Clinical Trial Finder

_Delpoyed URL:_ [https://build-clinical-trial-finder.herokuapp.com](https://build-clinical-trial-finder.herokuapp.com)

## Models

#### Users

```
{
    id: integer
    username: string
    password: string
}
```

#### Watchlist

```
{
    id: integer
    agency: string
    brief_title: text
    official_title: text
    brief_summary: string
    city: string
    state: string
    country: string
    eligibility: string
    gender: string
    condition: string
    keyword: string
    mesh_term: string
    overall_status: string
    phase: string
    url: string
    users_id: references user id in Users table
}
```

## Endpoints

### Auth Routes

| Method | Endpoint        | Token Required | Description                                                       |
| ------ | --------------- | -------------- | ----------------------------------------------------------------- |
| POST   | `/api/register` | no             | Registers a new user. Requires username and password.             |
| POST   | `/api/login`    | no             | Signs in user and returns a token. Requires username and password |

### User Routes

| Method | Endpoint     | Token Required | Description       |
| ------ | ------------ | -------------- | ----------------- |
| GET    | `/api/users` | yes            | Returns all users |

### Watchlist Routes

| Method | Endpoint                   | Token Required | Description                                                                                                                                   |
| ------ | -------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/api/watchlist`           | yes            | Returns all lists                                                                                                                             |
| GET    | `/api/users/:id/watchlist` | yes            | Returns a single list by id                                                                                                                   |
| POST   | `/api/watchlist`           | yes            | Add a new list to the database. `users_id` is required and must match the id of the logged in user. All other parts of the model are optional |
| DELETE | `/api/watchlist/:id`       | yes            | Delete a list by id                                                                                                                           |

<!-- Note: `users_id` is required in the POST request and must match the id of the logged in user. All other parts of the model are optional -->
