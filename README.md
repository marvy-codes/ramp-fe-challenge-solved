# Instructions

Welcome to Ramp's frontend interview challenge.

In this challenge, you will need to fix certain bugs within the starter code provided to you.

The bugs **do not depend on each other**, so you can solve them independently.

### Prerequisites

- `node`
- `npm` or `yarn`

### Start the server

- Run `yarn install`
- Run `yarn start`
- Open the app in http://localhost:3000/

or

- Run `npm install`
- Run `npm start`
- Open the app in http://localhost:3000/

### Special considerations

#### Typescript

At Ramp, we use React + Typescript in our codebase.

You are not required to know Typescript and using it in this challenge is optional. We have abstracted most of the Typescript code into its own files (_types.ts_), so feel free to ignore those. All of the bugs can be solved without Typescript.

However, if you feel comfortable with Typescript, feel free to remove `TSC_COMPILE_ON_ERROR` on `.env` and to write any Typescript code.

#### API

We don't have a real API for this challenge, so we added some utilities to simulate API requests. To help you debug, we `console.log` the status of the ongoing simulated requests. You will not be able to see these requests in the network tab of your browser.

#### Solution

- Solutions can be HTML, CSS or Javascript oriented, depending on the bug and your solution.
- Modify any file inside the `src` folder as long as the expected result is correct. (_See [Submission](#Submission)_)
- The goal is to solve the bug as expected. Finding a clean and efficient solution is a nice to have, but not required.
- You can solve the bugs in any order, they don't depend on each other
  - We recommend reading all the descriptions first. You might find the solution to one bug while trying to fix another.

---

# Bug 1: Select dropdown doesn't scroll with rest of the page

**How to reproduce:**

1. Make your viewport smaller in height. Small enough to have a scroll bar
2. Click on the **Filter by employee** select to open the options dropdown
3. Scroll down the page

**Expected:** Options dropdown moves with its parent input as you scroll the page

**Actual:** Options dropdown stays in the same position as you scroll the page, losing the reference to the select input

# Bug 2: Approve checkbox not working

**How to reproduce:**

1. Click on the checkbox on the right of any transaction

**Expected:** Clicking the checkbox toggles its value

**Actual:** Nothing happens

# Bug 3: Cannot select _All Employees_ after selecting an employee

**How to reproduce:**

1. Click on the **Filter by employee** select to open the options dropdown
2. Select an employee from the list
3. Click on the **Filter by employee** select to open the options dropdown
4. Select **All Employees** option

**Expected:** All transactions are loaded

**Actual:** The page crashes

# Bug 4: Clicking on View More button not showing correct data

**How to reproduce:**

1. Click on the **View more** button
2. Wait until the new data loads

**Expected:** Initial transactions plus new transactions are shown on the page

**Actual:** New transactions replace initial transactions, losing initial transactions

# Bug 5: Employees filter not available during loading more data

_This bug has 2 wrong behaviors that will be fixed with the same solution_

##### Part 1

**How to reproduce:**

1. Open devtools to watch the simulated network requests in the console
2. Refresh the page
3. Quickly click on the **Filter by employee** select to open the options dropdown

**Expected:** The filter should stop showing "Loading employees.." as soon as the request for `employees` is succeeded

**Actual:** The filter stops showing "Loading employees.." until `paginatedTransactions` is succeeded

##### Part 2

**How to reproduce:**

1. Open devtools to watch the simulated network requests in the console
2. Click on **View more** button
3. Quickly click on the **Filter by employee** select to open the options dropdown

**Expected:** The employees filter should not show "Loading employees..." after clicking **View more**, as employees are already loaded

**Actual:** The employees filter shows "Loading employees..." after clicking **View more** until new transactions are loaded.

# Bug 6: View more button not working as expected

_This bug has 2 wrong behaviors that can be fixed with the same solution. It's acceptable to fix with separate solutions as well._

##### Part 1

**How to reproduce:**

1. Click on the **Filter by employee** select to open the options dropdown
2. Select an employee from the list
3. Wait until transactions load

**Expected:** The **View more** button is not be visible when transactions are filtered by user, because that is not a paginated request.

**Actual:** The **View more** button is visible even when transactions are filtered by employee. _You can even click **View more** button and get an unexpected result_

##### Part 2

**How to reproduce:**

1. Click on **View more** button
2. Wait until it loads more data
3. Repeat these steps as many times as you can

**Expected:** When you reach the end of the data, the **View More** button disappears and you are not able to request more data.

**Actual:** When you reach the end of the data, the **View More** button is still showing and you are still able to click the button. If you click it, the page crashes.

## Submission

You will submit a ZIP file. It should contain a folder named `ramp-fe-challenge-solved` with the following file structure

```
ramp-fe-challenge-solved
│   email.txt
│   dependencies.txt (Optional)
│
└───src
```

Once you finish your challenge, create a new folder called `ramp-fe-challenge-solved`, where you copy the following from the project you worked on:

- `email.txt` _Required_: Replace your email on the only line of the file. Don't use any prefix or suffix, just your email.
- `src` _Required_: Copy the `src` folder as it is. This folder should contain your updated version of the app. Don't worry about the rest of the app, we will deal with it.
- `dependencies.txt` _Optional_: In case you need to install an external npm package, you can include this file with a list of dependencies that should be installed for your project to run. Each line of the file should be a dependency.

```
dependency-1
dependency-2@1.3.4
dependency-3
```

**NOTE:** No external package is required to solve any of the bugs. In fact, we encourage you to not add any extra dependency. But we want to give the option in case it is needed.

---

### Callouts

- Don't remove existing `data-testid` tags. Otherwise, your results will be invalidated.
- Don't modify anything else other than the bugs. Otherwise, your results might be invalidated.
- The folder that you will compress should be named `ramp-fe-challenge-solved`, otherwise your results will be invalidated.
- Remember to compress the folder, NOT the contents of the folder alone. The name of the final ZIP file is irrelevant.
- You can use a command line zip command to compress your folder, or:
  - **Mac**: In Finder, right click the folder (`ramp-fe-challenge-solved`) and click **Compress "ramp-fe-challenge-solved"**
  - **Windows**: In the File Explorer, right click the folder (`ramp-fe-challenge-solved`), select **Send to**, and then select **Compressed (zipped) folder**.
- Include the generated ZIP file on your application.
- Plagiarism is a serious offense and will result in disqualification from further consideration.
