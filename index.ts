import { Test } from "./test1/test2/test3/index"

export const entry = () => {
    Test();
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Web Page</title>
    </head>
    <body>
        <header>
            <h1>Welcome to My Website!</h1>
        </header>
        <main>
            <p>This is a simple HTML web page. You can customize it with your own content, style it with CSS, and make it interactive with JavaScript. Enjoy creating!</p>
            <a href="https://www.example.com">Learn More</a>
        </main>
        <footer>
            <p>© 2024 Web Page Creator. All rights reserved.</p>
        </footer>
    </body>
    </html>
    `
}