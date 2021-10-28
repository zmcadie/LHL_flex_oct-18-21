# Module 1 — The Dev Workflow
> Most lectures will include live coding. Don't try to replicate the code, instead pay attention and collaborate by answering and asking questions. When you don't understand something make a note to research it later or raise your hand/ask in the chat.

## Overview
* Curriculum Overview
* Environment
    * OS
    * VM
    * IDE
* Version Control
    * git
* Coding demo
    * sum.js

## Curriculum Overview
https://docs.google.com/presentation/d/1_NWYcPhS6Q3hQKXnh09Eufl7hs45yBLbUBZhWyvqeSc/edit#slide=id.ge6014d985b_0_12

## Environment
* OS — Operating system, eg. Linux, Windows, Mac, M1
* VM — Virtual machine (or environment), eg. Vagrant
* IDE — Integrated development environment, eg. VS Code, Sublime, Atom, etc.

## Version Control
Version control systems track changes in a project or document over time. In software we use Git to manage and track our source code history.

### Git vs GitHub
Git is the open-source version control system of choice for most software developers.
GitHub is a cloud hosting service for Git repositories (your source code).

Git lets us track the history of our code and GitHub lets us share a single source with other developers on our team.

You can use Git without using GitHub, you cannot use GitHub without using Git.

### Sample git workflow
1. `git init` — initializes git in our project folder (run in the root folder of your project)
2. `git add [.|<file/folder path>]` — stages the specified files (or all files if we use `.`)
3. `git commit -m ["commit message"]` — creates a commit with the staged changes and commit message
4. `git push` — pushes our git history to a remote repository (usually on GitHub)

## Other notes & links
* **DO** format (indent and space) your code as you go.
    * This makes it easier to read and understand what's happening (or what's broken).
* **DON'T** copy/paste from other code.
    * Try to understand and type it out yourself!
* **DON'T** skip error messages.
    * They may look confusing or intimidating but they're your friend! Try to understand what they are saying and avoid guessing.
* **DO** take time to understand your code.
    * you can use tools like [JavaScript Tutor](https://pythontutor.com/javascript.html#mode=edit) to help you understand what happens and when.

### What to do when you're stuck (or don't understand something)
1. Do your own research first!
    * Google is your friend and learning how to search for answers is a *very* valuable skill.
    * Spend some time this week (and the rest of the program) learning how to find answers online.
    * Prioritize search results from MDN (for JavaScript) and StackOverflow first and try to take the time to understand what they're telling you.
2. Ask for help!
    * 15m rule — if you're stuck (ie. not making progress) for more than 15m as for mentor support
    * Tell mentors what is not working and what you've tried — (don't just say "it's not working")