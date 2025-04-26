# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
##code strucutre
Jankoti Component Structure
Below is a recommended component structure for your Jankoti platform that follows modern React best practices, facilitates code reuse, and provides a solid foundation for future development.
Project Structure
src/
├── assets/
│   ├── icons/
│   ├── images/
│   └── styles/
│       ├── global.css
│       └── variables.css
├── components/
│   ├── common/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Checkbox/
│   │   ├── Dropdown/
│   │   ├── Input/
│   │   ├── Modal/
│   │   ├── ProgressBar/
│   │   ├── RadioButton/
│   │   ├── Select/
│   │   ├── Stepper/
│   │   ├── Table/
│   │   ├── Tabs/
│   │   └── Toast/
│   ├── layout/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── MainContent/
│   │   ├── PageContainer/
│   │   └── Sidebar/
│   └── modules/
│       ├── Assessment/
│       ├── Authentication/
│       ├── Billing/
│       ├── Dashboard/
│       ├── Jobs/
│       ├── Profile/
│       ├── Questions/
│       ├── Report/
│       ├── Resource/
│       └── Settings/
├── context/
│   ├── AuthContext.tsx
│   ├── ProfileContext.tsx
│   └── ThemeContext.tsx
├── hooks/
│   ├── useAuth.tsx
│   ├── useForm.tsx
│   ├── useLocalStorage.tsx
│   └── useOutsideClick.tsx
├── pages/
│   ├── Assessment/
│   ├── Auth/
│   │   ├── ForgotPassword.tsx
│   │   ├── Login.tsx
│   │   ├── OtpVerification.tsx
│   │   ├── Register.tsx
│   │   └── SetPassword.tsx
│   ├── Billing/
│   ├── Dashboard/
│   ├── Jobs/
│   ├── Profile/
│   ├── Questions/
│   ├── Report/
│   ├── Resource/
│   └── Settings/
├── services/
│   ├── api.ts
│   ├── assessmentService.ts
│   ├── authService.ts
│   ├── jobService.ts
│   └── profileService.ts
├── types/
│   ├── assessment.types.ts
│   ├── auth.types.ts
│   ├── job.types.ts
│   └── profile.types.ts
├── utils/
│   ├── constants.ts
│   ├── dateUtils.ts
│   ├── formatters.ts
│   └── validators.ts
├── App.tsx
├── index.tsx
├── routes.tsx
└── vite-env.d.ts
Component Breakdown
1. Common Components
These are reusable UI components that can be used across the application:

Button: Different button variations (primary, secondary, outline, text)
Card: Containers for displaying content and actions
Input: Text inputs, password inputs, etc.
Select: Dropdown selection components
Checkbox/RadioButton: Form controls
Modal: Popup dialogs
Table: Data display in tabular format
Tabs: Content organization with tabs
Stepper: Multi-step processes visualization
ProgressBar: Visual progress indicators
Toast: Notification messages

2. Layout Components
Components that define the structure of the application:

Sidebar: Left navigation panel
Header: Top navigation bar
Footer: Page footer
PageContainer: Container for page content
MainContent: Main content area of the page

3. Module Components
These are specialized components for specific features of your application:
Authentication Module

LoginForm
SignUpForm
ForgotPasswordForm
OtpVerificationForm
SetPasswordForm

Profile Module

BasicInfoSection
EducationSection
SkillsSection
EmploymentSection
CertificationSection
ProjectsSection
AwardsSection
RecommendationSection
ProfilePhoto

Assessment Module

AssessmentCard
AssessmentList
QuestionCard
QuestionOptions
Timer
AssessmentSubmission
ResultChart

Jobs Module

JobCard
JobList
JobDetail
ApplicationTracker
ApplicationTimeline
HotJobsSection
SimilarJobsSection

Content Management Module

QuestionEditor
QuestionPreview
QuestionApproval
QuestionReview

Billing Module

TransactionList
TransactionCard
RefundPolicy
PaymentHistory

4. Pages
Top-level components that represent entire pages in your application:

LoginPage
SignUpPage
ForgotPasswordPage
OtpVerificationPage
SetPasswordPage
DashboardPage
ProfilePage
AssessmentPage
JobApplicationPage
ResourcePage
SettingsPage
ReportPage
SupportPage