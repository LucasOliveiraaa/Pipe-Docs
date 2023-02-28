# Pipe Documentation

This is the documentation of the Pipe Lang

## Contribute
Fork this repository and do the changes. Please, make a pull request to put your version

## Markdown Functions
The Pipe Documentation site support predefined function, a function is represented by `¨` symbol. Example:
```markdown
¨function_name(arguments)¨
```
An ILC(In-Line Command) supports just one line, and several arguments.
This is a list of predefined functions:
- summary: Sets the summary. Just use in `three/sumary.md`. Arguments: (summary:object)
- comment: Just a comment. Arguments: (...data)
- log: Like `console.log`. Arguments: (...data)
- title: Sets the title of the page. Arguments: (title)
- desc: Sets the description of the page. Arguments: (description)
- lang: Sets the language of the page. Arguments: (language)
- tags: Sets the tags of the page. Arguments: (tags:array)
- link: Create a link. Arguments: (text,url)
- code: Create a code. Arguments: (code,language)
- flipSpeed: Like a link, but change the url instant. Arguments: (url). OBS.: Don't work in the markdown-viewport(main view)

To create a function, modify the `tree/ILC_markdown.js`. To put in main make a pull request
