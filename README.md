# express-mysql-setup

* Create short url

|   |   |   |   |   |
|--------------------------|----------|---------|---------|---------|
|functionality             | endpoint | method  | request | response |
| create short url         | /urls/   | post    | {body: {longUrl: string}} | { message: string, shortUrl: string} |
| redirect to original url |/urls/:shordUrlId   | get    | { params: {shortUrlId: string}} | redirect to url |
