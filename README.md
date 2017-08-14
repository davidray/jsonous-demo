## Fun with Bikes - Learn Jsonous the Easy Way

This is a sample react app for learning Jsonous. It includes a non-trivial example of a JSON source, demonstrates how to get daters from that source, and how to handle errors.

## Run it
    yarn
    yarn start

## The JSON payload
`/src/things.js`

Look it over. It's a list of bikes owned by a few of our favorite people. There are some nested items for each bike too.

## The Decoders
`/src/App.js`

Chain through the decoders. Note how arrays are handled.

## Challenges
- Break the JSON and see what happens.
- Add comfortable/not comfortable to the list of bike attributes in the UI.
- Display the url of the link for adding a new bike in the UI.

