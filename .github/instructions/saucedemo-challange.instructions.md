# QA Engineer Technical Test – SauceDemo

## 1. Objective

This project demonstrates a structured approach to end-to-end testing of a real-world web application using a hybrid strategy (manual + automation) and AI-assisted development to maximize quality and velocity.

Application under test:
https://www.saucedemo.com

Credentials used:
- Username: standard_user
- Password: secret_sauce

---

## 2. Scope of Testing

The following features were covered:

1. Login (positive and negative scenarios)
2. Product listing and sorting
3. Add to cart and cart validation
4. Checkout flow (continue, cancel, complete)
5. Form validation and error handling

Testing was performed exclusively at the UI level due to lack of backend/API access.

---

## 3. Test Strategy

A hybrid approach was adopted:

### 3.1 Exploratory Testing
An initial exploratory session was conducted to:
- Identify critical user journeys
- Detect potential risk areas
- Observe UI behaviors and edge cases

### 3.2 Risk-Based Prioritization
The critical path was prioritized:

Login → Add to Cart → Checkout → Complete Order

This ensures core business functionality validation.

### 3.3 Negative Testing
Validation scenarios include:
- Invalid credentials
- Empty form fields
- Required field validation
- Session behavior validation

---

## 4. Automation Architecture

### 4.1 Tools

- Playwright (JavaScript)
- Page Object Model (POM)
- Built-in Playwright test runner

### 4.2 Architectural Approach

A lightweight Page Object Model was implemented to:

- Separate test logic from UI interaction logic
- Improve maintainability
- Enable reusability
- Keep tests readable and scalable

The implementation intentionally avoids overengineering or unnecessary abstraction layers due to the limited scope and time constraints.


Assertions remain inside test files to preserve clarity of validation logic.

---

## 5. AI Tool Usage

AI tooling was leveraged to accelerate delivery while maintaining human oversight.

AI was used for:

- Structuring Page Objects
- Suggesting edge cases
- Refining selectors
- Improving negative scenario coverage
- Structuring bug reports
- Reviewing architectural decisions

All generated output was reviewed and adjusted manually before execution.

AI was used as an acceleration tool, not as a replacement for test design thinking.

---

## 6. Manual Test Artifacts

Manual test cases were documented to cover:

- Additional exploratory scenarios
- UX validation
- Sorting validation edge cases
- Session persistence validation
- Browser navigation behavior

These complement automated coverage.

---

## 7. Bug Reporting

Observed issues were documented with:

- Clear reproduction steps
- Expected vs actual behavior
- Severity and priority assessment
- Evidence references

The goal was to simulate real-world defect reporting standards.

---

## 8. Assumptions

- Public demo environment
- No access to backend or API
- No database validation
- No performance SLA defined
- No cross-browser matrix required beyond Playwright defaults

---

## 9. Known Limitations

- No API-level validation
- No visual regression testing
- No CI/CD integration implemented
- No data-driven testing strategy
- No test isolation via mock services

These could be implemented in a production-level framework.

---

## 10. Potential Improvements

If extended beyond this technical challenge:

- Add API test layer
- Implement visual regression testing
- Integrate CI pipeline
- Add test tagging strategy
- Implement parallel execution optimization
- Introduce data-driven approach
- Add accessibility validation

---

## 11. Final Notes

The goal of this project was not only to validate application behavior but also to demonstrate:

- Test strategy thinking
- Architectural clarity
- Risk prioritization
- Practical use of AI to increase productivity
- Structured defect reporting
- Maintainable automation design

This repository reflects a pragmatic and scalable approach suitable for real-world QA environments.