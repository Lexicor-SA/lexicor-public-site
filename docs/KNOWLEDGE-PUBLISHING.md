# Lexicor Knowledge — Publishing Guidelines

## 1. Article preparation

- [ ] Select the appropriate Knowledge category.
- [ ] Create a descriptive, lowercase, hyphenated filename.
- [ ] Provide a clear article title and description.
- [ ] Identify the author.
- [ ] Set status to `draft`.

## 2. Content verification

- [ ] Verify material legal and regulatory statements against authoritative sources.
- [ ] Identify applicable legislation and regulatory guidance.
- [ ] Confirm that filing requirements and deadlines are current.
- [ ] Distinguish statutory requirements from recommendations.
- [ ] Check terminology and explanations for accuracy.
- [ ] Record supporting URLs in `references`.

## 3. Editorial review

- [ ] Review grammar, clarity and structure.
- [ ] Check headings, lists and links.
- [ ] Confirm the publication date.
- [ ] Record the last substantive review date where applicable.
- [ ] Ensure the article does not imply Lexicor is a law firm.

## 4. Local testing

- [ ] Change status to `published` when ready to test.
- [ ] Verify that the article appears in Knowledge.
- [ ] Check the individual article page.
- [ ] Check the homepage Knowledge preview.
- [ ] Test desktop and mobile layouts.
- [ ] Run `npx tsc --noEmit`.
- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.

## 5. Staging review

- [ ] Commit and push the article to `develop`.
- [ ] Confirm GitHub Actions passes.
- [ ] Review the article on staging.lexicor.co.za.
- [ ] Verify links, content and responsive layout.

## 6. Production release

- [ ] Open a pull request from `develop` to `main`.
- [ ] Confirm required checks pass.
- [ ] Approve and merge the pull request.
- [ ] Verify the production deployment.

## 7. Ongoing maintenance

- [ ] Review articles when relevant law or administrative guidance changes.
- [ ] Update outdated information.
- [ ] Record the new `reviewedAt` date after substantive review.
- [ ] Correct or withdraw articles that are no longer reliable.
