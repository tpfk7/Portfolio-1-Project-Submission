# Testing

Return back to the [README.md](README.md) file.



## Code Validation

Use the space to discuss code validation for any of your own code files (where applicable).
You are not required to validate external libraries/frameworks, such as imported Bootstrap, Materialize, Font Awesome, etc.

**IMPORTANT**: You must provide a screenshot for each file you validate.

**PRO TIP**: Always validate the live site pages, not your local code. There could be subtle/hidden differences.

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

- https://validator.w3.org/nu/?doc=https%3A%2F%2Ftpfk7.github.io%2FPortfolio-1-Project-Submission%2Findex.html

Sample HTML code validation documentation (tables are extremely helpful!):

| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftpfk7.github.io%2FPortfolio-1-Project-Submission%2F) | ![screenshot](documentation/validator/index-test.png) | Section lacks header h2-h6 warning |
| History | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftpfk7.github.io%2FPortfolio-1-Project-Submission%2Fhistory.html) | ![screenshot](documentation/validator/history-test.png) | Section lacks header h2-h6 warning |
| Gladiators | [W3C](https://tpfk7.github.io/Portfolio-1-Project-Submission/gladiators.html) | ![screenshot](documentation/validator/gladiator-test.png) | Section lacks header h2-h6 warning |
| Visit | [W3C](https://tpfk7.github.io/Portfolio-1-Project-Submission/visit.html) | ![screenshot](documentation/validator/visit-test.png) | Section lacks header h2-h6 warning |
| Confirmation | [W3C](https://tpfk7.github.io/Portfolio-1-Project-Submission/confirmation.html?fname=tom&lname=k&email=tt%40gmail.com&topic=colosseum&question=How+old+is+it%3F) | ![screenshot](documentation/validator/confirmation-test.png) | Pass: No Errors |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

Sample CSS code validation documentation (tables are extremely helpful!):

| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator) | ![screenshot](documentation/validator/css-test.png) | Pass: No Errors |

## Browser Compatibility

I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/browsers/chrome-test.png) | Works as expected |
| Firefox | ![screenshot](documentation/browsers/firefox-test.png) | Works as expected |
| Safari | ![screenshot](documentation/browsers/safari-test.png) | Works as expected |

## Responsiveness

Use this space to discuss testing the live/deployed site on various device sizes.

The minimum requirement is for the following 3 tests:
- Mobile
- Tablet
- Desktop

**IMPORTANT**: You must provide screenshots of the tested responsiveness, to "prove" that you've actually tested them.

Using the "amiresponsive" mockup image (or similar) does not suffice the requirements.
Consider using some of the built-in device sizes in the Developer Tools.

If you have tested the project on your actual mobile phone or tablet, consider also including screenshots of these as well.
It showcases a higher level of manual tests, and can be seen as a positive inclusion!

Sample responsiveness testing documentation:

I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Iphone-x (DevTools) | ![screenshot](documentation/responsiveness/iphone-x.png) | Works as expected |
| Ipad-pro (DevTools) | ![screenshot](documentation/responsiveness/ipad-pro.png) | Works as expected |
| Macbook | ![screenshot](documentation/responsiveness/macbook.png) | Works as expected |
| Samsung-Galaxy-S9 (DevTools)| ![screenshot](documentation/responsiveness/galaxy-s9.png) | Works as expected |
| Samsung-Galaxy-A52S| ![screenshot](documentation/responsiveness/galaxy-a52s-5g.png) | Works as expected |


## Lighthouse Audit

Sample Lighthouse testing documentation:

I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/lighthouse-performance/index-mobile-performance.png) | Some minor warnings |
| Home | Macbook | ![screenshot](documentation/lighthouse-performance/index-macbook-performance.png) | Some minor warnings |
| History | Mobile | ![screenshot](documentation/lighthouse-performance/history-mobile-performance.png) | Some minor warnings |
| History | Macbook | ![screenshot](documentation/lighthouse-performance/hitstory-macbook-performance.png) | Some minor warnings |
| Gladiators | Mobile | ![screenshot](documentation/lighthouse-performance/gladiator-mobile-performance.png) | Some minor warnings |
| Gladiators | Macbook | ![screenshot](documentation/lighthouse-performance/gladiator-macbook-performance.png) | Some minor warnings |
| Visit | Mobile | ![screenshot](documentation/lighthouse-performance/visit-mobile-performance.png) | Some minor warnings |
| Visit | Macbook | ![screenshot](documentation/lighthouse-performance/visit-macbook-performance.png) | Some minor warnings |
| Confirmation | Mobile | ![screenshot](documentation/lighthouse-performance/confirmation-mobile-performance.png) | Slow response time due to large images |
| Confirmation | Macbook | ![screenshot](documentation/lighthouse-performance/confirmation-macbook-performance.png) | Some minor warnings |


## User Story Testing

Testing user stories is actually quite simple, once you've already got the stories defined on your README.

Most of your project's **features** should already align with the **user stories**,
so this should as simple as creating a table with the user story, matching with the re-used screenshot
from the respective feature.

| User Story | Screenshot |
| --- | --- |
| As a new site user, I would like to see the title of the page at the top, so that I can always know what page I'm on. | ![screenshot](documentation/user-stories/title-user.png) |
| As a new site user, I would like to have a navigation bar, so that I can navigate to each page easily. | ![screenshot](documentation/user-stories/navbar-user.png) |
| As a new site user, I would like to have a form section, so that I can send a question to the site creator. | ![screenshot](documentation/user-stories/form-user.png) |
| As a new site user, I would like to have a confirmation page, so that I can know my question was sent correctly. | ![screenshot](documentation/user-stories/confirmation-user.png) |
| As a new site user, I would like to have social media links so that I can navigate to different social media links. | ![screenshot](documentation/user-stories/footer-use.png) |


## Bugs

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

For JavaScript and Python applications, it's best to screenshot the errors to include them as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

- JS Uncaught ReferenceError: `foobar` is undefined/not defined

    ![screenshot](documentation/bug01.png)

    - To fix this, I _____________________.

- JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).

    ![screenshot](documentation/bug02.png)

    - To fix this, I _____________________.

- Python `'ModuleNotFoundError'` when trying to import module from imported package

    ![screenshot](documentation/bug03.png)

    - To fix this, I _____________________.

- Django `TemplateDoesNotExist` at /appname/path appname/template_name.html

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

- Python `E501 line too long` (93 > 79 characters)

    ![screenshot](documentation/bug04.png)

    - To fix this, I _____________________.

### GitHub **Issues**

An improved way to manage bugs is to use the built-in **Issues** tracker on your GitHub repository.
To access your Issues, click on the "Issues" tab at the top of your repository.
Alternatively, use this link: https://github.com/tpfk7/Portfolio-1-Project-Submission/issues

If using the Issues tracker for your bug management, you can simplify the documentation process.
Issues allow you to directly paste screenshots into the issue without having to first save the screenshot locally,
then uploading into your project.

You can add labels to your issues (`bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s).

Once you've sorted the issue, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following format:

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/tpfk7/Portfolio-1-Project-Submission/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [JS Uncaught ReferenceError: `foobar` is undefined/not defined](https://github.com/tpfk7/Portfolio-1-Project-Submission/issues/1) | Closed |
| [Python `'ModuleNotFoundError'` when trying to import module from imported package](https://github.com/tpfk7/Portfolio-1-Project-Submission/issues/2) | Closed |
| [Django `TemplateDoesNotExist` at /appname/path appname/template_name.html](https://github.com/tpfk7/Portfolio-1-Project-Submission/issues/3) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/tpfk7/Portfolio-1-Project-Submission/issues).

| Bug | Status |
| --- | --- |
| [JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).](https://github.com/tpfk7/Portfolio-1-Project-Submission/issues/4) | Open |
| [Python `E501 line too long` (93 > 79 characters)](https://github.com/tpfk7/Portfolio-1-Project-Submission/issues/5) | Open |

## Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

Some examples:

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

There are no remaining bugs that I am aware of.
