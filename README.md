# Project structure

### plugin.js
Import it. By doing so, api-demo will be installed as global vue plugin.

### instances
Example instances folder. Edit em, do your own configs. You can also use these instances via import.
`this.$api_demo_3` is actually one of em.

### src
Sources. Dark magic. Don't go alone.

---------------------

Here's some usage example from the component:

```
// From component scope.
this.$api_demo_3.post('posts/get-many', {filters})
    .then(({data, meta}) => {
      this.boards = data
      this.pagination.last_page = meta.pages
    })
```

Also, for now library uses jquery, meaning all your promises are actually jquery promises. When in doubt — read some [docs](http://api.jquery.com/jquery.ajax/)!


