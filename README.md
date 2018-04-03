# Kegtally Web

Web view that displays kegtally data.

## Deployment

1.  Build statically

```
npm run build
```

2.  Commit all changes

```
git add -A
git commit -am "∆"
```

3.  Deploy to heroku

```
git push heroku master
```

## Note

I'm commiting the `build/` directory compiled because in order to deploy to heroku (which uses git) it needed to be allowed in the `.gitignore`. When/if we move to a more permanent hosting solution we can re-evaluate this.
