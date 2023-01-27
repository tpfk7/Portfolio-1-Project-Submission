# Testing

Return back to the [README.md](README.md) file.



## Code Validation


### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

- https://validator.w3.org/nu/?doc=https%3A%2F%2Ftpfk7.github.io%2FPortfolio-1-Project-Submission%2Findex.html



| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftpfk7.github.io%2FPortfolio-1-Project-Submission%2F) | ![screenshot](documentation/validator/index-test.png) | Section lacks header h2-h6 warning |
| History | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftpfk7.github.io%2FPortfolio-1-Project-Submission%2Fhistory.html) | ![screenshot](documentation/validator/history-test.png) | Section lacks header h2-h6 warning |
| Gladiators | [W3C](https://tpfk7.github.io/Portfolio-1-Project-Submission/gladiators.html) | ![screenshot](documentation/validator/gladiator-test.png) | Section lacks header h2-h6 warning |
| Visit | [W3C](https://tpfk7.github.io/Portfolio-1-Project-Submission/visit.html) | ![screenshot](documentation/validator/visit-test.png) | Section lacks header h2-h6 warning |
| Confirmation | [W3C](https://tpfk7.github.io/Portfolio-1-Project-Submission/confirmation.html?fname=tom&lname=k&email=tt%40gmail.com&topic=colosseum&question=How+old+is+it%3F) | ![screenshot](documentation/validator/confirmation-test.png) | Pass: No Errors |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.



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

- Nav bar breaks under 320px width.

    ![screenshot](documentation/bugs/bug-nav.png)

    - To fix this, I added a JS burger menu.

- On large displays images took up too much screen width.

    ![screenshot](documentation/bugs/bug-image.png)

    - To fix this, I added a media query for diplays above 700px to scale images to 50%.

- Footer was too far up on the confirmation page.

    ![screenshot](documentation/bugs/bug-footer.png)

    - To fix this, I added a sticky footer to css.

## Unfixed Bugs

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is for each .html document except confirmation.html. This is acceptable.

    ![screenshot](documentation/validator/gladiator-test.png)

    - Attempted fix: this is a known warning and acceptable.


