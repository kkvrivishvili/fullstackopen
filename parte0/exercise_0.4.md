note over browser:
I write " Learning Fullstackopen", then I click on bottom send
end note

browser->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over browser:
Server recived the new data and add it to the data.json. Once done, redirect again to stage 1 of the diagrame, but now the db is updated.
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: HTML-code
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css
browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{ content: "Learning Fullstackopen ", date: "2022-08-29" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note