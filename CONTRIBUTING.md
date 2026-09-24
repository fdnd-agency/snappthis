# Contributing to SnappThis

This document describes how we work together on **SnappThis**. By following the same workflow and conventions, we keep our project consistent, organized, and easy to understand.

## Team Canvas

<!-- Add the Team Canvas here. -->
<img width="755" height="553" alt="ewfgrea" src="https://github.com/user-attachments/assets/5a3e4498-4196-4231-84fe-a6e47d81ab63" />


## Shared Goals

* Build a working version of SnappThis in SvelteKit within 6 sprints, with all Must Haves functional.
* Work well together through clear communication and by supporting each other.
* Follow the Scrum process and make sure tasks are realistically planned and completed on time.


## Personal Learning Goals & Questions

<!-- Add the personal learning goals and learning questions of each team member here. -->

* **Learning goal / question 1:** ...
* **Learning goal / question 2:** ...
* **Learning goal / question 3:** ...

## Team Agreements

* We communicate blockers and problems as soon as possible.
* We communicate through Microsoft Teams and GitHub comments.
* Tasks and progress are tracked using GitHub Issues and the project board.
* Tasks have a clear owner.
* We give and ask for feedback.
* We review each other's work before merging.
* We follow the FDND conventions.
* We write documentation in English and use templates when possible.
* We discuss decisions together first. If we cannot reach an agreement, the majority decides.

  

---

## Workflow

We work from **Epics** and **User Stories** to smaller issues that can be worked on individually.

Our workflow is:

```text id="tsct45"
Epic
→ User Story
→ Issue (Task / Feature)
→ Branch
→ Commits
→ Pull Request
→ Review
→ Process feedback
→ Merge
→ Done
```

### Epics & User Stories

We use Epics to describe larger parts of the project. These are divided into User Stories that describe what the user should be able to do.

User Stories are then divided into smaller issues that we can work on.

### Issues

Issues are created from our User Stories and contain a specific **Task** or **Feature** that needs to be completed.

We use:

* `Task` — work that needs to be completed as part of a User Story.
* `Feature` — new functionality that contributes to a User Story.

An issue should clearly describe:

* What needs to be done.
* Why the task or feature is needed.
* When the issue can be considered complete.
* Who is responsible for the issue.

Important decisions, feedback, blockers, and progress can be documented in the issue comments.

### Branches

We create a separate branch for each Task or Feature.

Branch names should briefly describe the work being done.

Examples:

```text id="1jyosr"
feature-sveltekit-installation
feature-camera
task-create-team-canvas
fix-navigation
```

A branch should focus on one specific issue.

### Commits

We follow the FDND conventions when creating commits.

Commit messages should be short and clearly describe the change.

Example:

```text id="dpy0qt"
feat: install SvelteKit #12
feat: add camera functionality #18
fix: resolve navigation issue #21
```

Where possible, commits should reference the related issue.

---

## Pull Requests & Reviews

For pull requests, we use the following template:

```md id="ly1mpn"
## What changes?

Resolves issue #1337.

<!--
A PR should contain enough information to understand what was changed,
even at a later point.

Describe:
- What was the problem?
- Why was this change needed?
- How does this PR solve the problem?
- Are there any questions or points for discussion?

Include the most important information from the issue instead of only
linking to it.
-->

[Live site](https://livesite.com)

## How was this tested?

<!-- Link to the test results in the Wiki -->

### RAPPE principles

- [ ] [User test]()
- [ ] [Accessibility test]()
- [ ] [Progressive Enhancement test]()
- [ ] [Performance test]()
- [ ] [Responsive Design test]()
- [ ] [Device test]()
- [ ] [Browser test]()

## Images

<!--
Mainly relevant for visual or UI changes.
If possible, add screenshots showing the situation before and after the change.
-->

## How to review this PR?

<!-- Give the reviewer clear steps to check and test the changes. -->
```

### Review Agreements

* At least one team member reviews the work.
* Feedback is addressed or discussed before the pull request is merged.
* Pull requests are merged after the changes have been reviewed.

---

## Code Conventions

For SnappThis, we follow the **FDND conventions** for our code and Git workflow.

[fdnd conventions](https://docs.fdnd.nl/conventies.html)

We also aim to:

* Keep code readable and consistent.
* Use clear names for variables, functions, and components.
* Avoid unnecessary duplication.
* Keep components and functions focused on a clear responsibility.
* Document complex code when additional explanation is needed.

---

## Stand-ups & Communication

During our stand-ups, each team member briefly answers:

* What have I done?
* What am I currently working on?
* Am I running into any problems or do I need help?

If someone runs into a blocker, we communicate it with the team so we can help each other move forward.

---

