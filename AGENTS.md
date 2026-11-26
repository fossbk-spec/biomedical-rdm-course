# Agent Guidelines

This repository is the web edition of the biomedical research data management course.

## Content authority

- The canonical course content is in `biomedical-rdm/docs/course-source`.
- Edit the source repository first, then run `scripts/sync_from_source.py` here.
- Do not hand-edit generated lesson files under `course/`.
- Do not invent sources, claims, quiz answers, or references. Do not add contributor credit for automated assistance.

## Course rules

- There is no passing rule: the course is free and self-paced. At least 24/34 points and at least 2 of Q1–Q3 correct is a self-assessment target, not a pass/fail condition; learners may retake quizzes without limit and no one records the result. (Ben, 21/11/2026.)
- There are 34 questions in total. Module 0 has no quiz.
- Preserve lesson and quiz content unless the task explicitly authorizes a content change.

## Workflow and safety

- One task, one branch, and one pull request. Use a neutral branch prefix; never push directly to `main`.
- Do not commit secrets, credentials, PII, or PHI.
- Keep source, generated pages, quiz data, and build configuration consistent.

## Definition of done

- `python scripts/sync_from_source.py --check` passes.
- Quiz count and the passing rule are checked.
- Run `npm run build` and/or `quarto render` as applicable.
- Check links and review the changed files for formatting, secrets, and PII/PHI.
