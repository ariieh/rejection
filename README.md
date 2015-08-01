# rjct-server
Rejection game.

# API
### get
* `/rjcts`: get feed of all rejections. range submitted as URL params, e.g. `rjcts?startIndex=0&endIndex=1`. inclusive -- this would get you two rejections, sorted by default in order of recency, newest on top.
````
{ 'rejections':
  [
    {
      'id': 1,
      'title': "hot girl",
      'description': "asked her to go out with me and i got rejected so hard"
      'likes': 12
    },
    {
      'id': 2,
      'title': "hot girl",
      'description': "asked her to go out with me and i got rejected so hard",
      'likes': 23
    }
  ]
}
````
* `/rjcts/1`: get individual rejection
````
{ 'rejection':
  'title': "asked some dude for $5",
  'description': "this was the really cool thing i did",
  'likes': 15,
  'comments':
    [
      {
        'author': "joe",
        'comment': "sweet bro!"
      },
      {
        'author': "james",
        'comment': "nice dawg"
      }
    ]
}

````
### post
* `/rjcts`: create rejection
````
{ 'rejection':
  'title': "asked some dude for $5",
  'description': "this was the really cool thing i did"
}
````
* `/rjcts/1/comments`: add comment to rejection
````
{ 'comment':
  'body': "sweet rejection yo!"
}
````
* `/rjcts/1/likes`: add like to rejection
````
{ 'like':
  'like': "true"
}
````
