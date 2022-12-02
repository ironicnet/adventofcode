# adventofcode


# For adding a new day

To create a new day to the current year:
`npm run create day01`

To create a new day of another year:
`npm run create day01 2040`

# Day template

Each day has the following structure:

- `index.js`: Usually exports two named functions: `part1`, `part2`. And receives the data to process. Usually the lines of the input splitted by the newlines.
- `input.txt`: The input file provided by AOC
- `readme.md`: The instructions for the Day
- `run.js`: The file indicating some info about the parts
- `test.js`: The file indicating the tests for each part. Useful for debugging. There are assert helpers in the repository.

In the run.js file allows to add info about the day for each part

- `question`: What's the question to be answered?
- `answer`: What whas the accepted answer?
- `wrongAnswers`: Which were the wrong answers,
- `property`: The property containing the answer


To test a day, just run `npm run test 2022/day01`.
To get the answer for a day, just run `npm run answer 2022/day01`
