# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

Context API allows us to share props between components without needing to pass said props through every component, this is especially useful if we have a component several layers deep that needs a prop that none of the parent components need.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are events that cause / depict changes that happen within the application.
Reducers are functions that wait for the action.type depiction and changes the state accordingly.
Store is an "area" where your global state is stored. It is considered the single source of truth because state cannot be directly modified or changed and we must describe exact changes through actions & dispatching said actions.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

redux-thunk allows us to pass functions as the return statement of action creators rather than just a plain action.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. I think that having to spell out exactly what state you want in each component might seem tiresome in small-scale applications, but I can really see the usefulness of mapping specific things to props in specific components, especially when you get 50+ components and you don't want to have to worry about prop drilling and tree managing. Redux, like JavaScript, is very deliberate. You have to understand what you're coding and the code doesn't do anything you don't expect. 