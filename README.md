# Random Quote Generator

Welcome to the **Random Quote Generator**, a simple React application designed to provide you with endless inspiration through a collection of motivational quotes. The app features a dynamic and visually appealing interface to keep you motivated and uplifted.

## Features

- **FancyText Component**: A component that displays text in a fancy and styled manner.
- **InspirationGenerator Component**: A component that displays a random inspirational quote and allows the user to fetch a new one.
- **Copyright Component**: A component to display copyright information.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Simran32909/randome-quote-gen.git
   cd random-quote-gen

2. Install the dependencies:
    ```bash
   npm install

3. Start the development server:
    ```
   npm start
   
## Components

### App Component
**The main component that brings together FancyText, InspirationGenerator, and Copyright.**

```Javascript
    Import FancyText from "./FancyText";
    import InspirationGenerator from "./InspirationGenerator";
    import Copyright from "./Copyright";
    
    export default function App() {
    return (
    <>
        <FancyText title text="Get Inspired App" />
        <InspirationGenerator>    
            <Copyright year={2004} />
        </InspirationGenerator>
    </>
  );
}
```
