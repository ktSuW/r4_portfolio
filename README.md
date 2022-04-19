# Portfolio Website
[Su's website](https://ktsuw.github.io/r4_portfolio/)

This repo contains react code. I wanted to learn more about React components and hook. This [this simple portfolio website (HTML + CSS + JavaScript)](https://ktsuw.github.io/portfolio/) site has been rebuilt with Reactjs.

## Planning

1. Identify components 
2. Make design coherence 
- **style.module** : keep css within its Component and does not affect any other HTML elements outside of that Component 
- It enforces 
- Reusable component - portable 
  - Component must have its own file inside.
- Use normal function for Component 
  - Scope for this variable as parent
- Types
  - primary
  - secondary
  - tertiary 

## Components 

- Hero Image Component
- Profile Image Component 
- Header Navigation Component - Home, About, Portfolio, Contact 
- About Component 
  - Parent Component : SkillsetList - contains a list of skillsets components
  - Child Component : Skillset - Display each skillset 
- Skill Component 
- Project Component 
- Contact Form Component 
- Footer Component 

## Properties of Components
- [Icons](https://react-icons.github.io/react-icons/search?q=bulb)
- React icons are always SVG
- {children} property
- Attribute destructuring : you don't have to define every single property 
- props - properties
  - object argument with data and returns a React element
  - props are read only 
- Add CSS class to components 
  - className= {classname in CSS}

## Deploy to GitHub page

1. Create repo
2. Add URL and repo name to the package.json

  ```
      "homepage": "https://ktSuW.github.io/r4_portfolio",
      "name": "r4_portfolio",
  ```
3. Install npm package for github pages

  ``` 
      npm install gh-pages --save-dev
  ```
4. Add scripts to package.json so that you can run `npm run deploy`

  ```
    "predeploy" :"npm run build",
    "deploy" : "gh-pages -d build"
  ```
5. Execute => **npm run deploy**