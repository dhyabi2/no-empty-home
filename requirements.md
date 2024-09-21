# Consumer App and Shop App Requirements

## **Consumer App Tasks**

### **1. Project Setup (Completed Percentage: 0%)**

- **1.1. Initialize React Application (Completed Percentage: 0%)**
  - Set up a new React project using Create React App or Vite.
  - Configure the project structure with the necessary folders:
    - `components/`
    - `contexts/`
    - `pages/`
    - `routes/`
    - `assets/`
    - `utils/`
    - `hooks/`

- **1.2. Install Dependencies (Completed Percentage: 0%)**
  - Install React Router for routing.
  - Install state management library (React Context API or Redux).
  - Install styling libraries (CSS Modules, Styled Components, or SASS).
  - Install a UI library if preferred (Material-UI, Ant Design, or Bootstrap React).
  - Install form management library (Formik or React Hook Form).
  - Install animation library (React Spring or Framer Motion).
  - Install localization library (react-i18next).

### **2. Common Components (Completed Percentage: 0%)**

- **2.1. Header Component (Completed Percentage: 0%)**
  - Design the header layout with the logo and navigation links.
  - Implement responsive design for different screen sizes.
  - Add icons for search, notifications, and profile.

- **2.2. Footer Component (Completed Percentage: 0%)**
  - Create a footer with links to terms, privacy policy, and contact information.
  - Ensure consistent styling across the app.

- **2.3. LanguageSelector Component (Completed Percentage: 0%)**
  - Implement language toggle buttons for English and Arabic.
  - Add icons for each language.
  - Ensure proper functioning with react-i18next.

- **2.4. Modal Component (Completed Percentage: 0%)**
  - Develop a generic modal component for reuse across the app.
  - Style the modal overlay and content area.

- **2.5. Button Component (Completed Percentage: 0%)**
  - Create a reusable button component with different variants (primary, secondary, etc.).
  - Add props for handling click events, disabled state, and loading state.

- **2.6. Input Component (Completed Percentage: 0%)**
  - Build a reusable input field component with validation styles.
  - Support different types (text, email, password, date).

- **2.7. Loader Component (Completed Percentage: 0%)**
  - Design a loading spinner or progress bar component.
  - Ensure it can be easily integrated where loading states are needed.

### **3. SplashScreen Component (Completed Percentage: 0%)**

- **3.1. Design Splash Screen Layout (Completed Percentage: 0%)**
  - Create an engaging animation with branding.
  - Implement transitions to the next screen.

- **3.2. Implement Splash Screen Functionality (Completed Percentage: 0%)**
  - Set up timing for how long the splash screen is displayed.
  - Add a progress indicator if necessary.

### **4. Onboarding Components (Completed Percentage: 0%)**

- **4.1. Create OnboardingSlide Component (Completed Percentage: 0%)**
  - Design slide layouts with illustrations and text.
  - Implement swipe gestures or navigation buttons.

- **4.2. Implement OnboardingNavigator Component (Completed Percentage: 0%)**
  - Add pagination indicators (dots) to show progress.
  - Include "Skip" and "Next" buttons.

### **5. Authentication Components (Completed Percentage: 0%)**

#### **5.1. SignUpForm Component (Completed Percentage: 0%)**

- **5.1.1. Design Sign-Up Form Layout (Completed Percentage: 0%)**
  - Include fields: Name, Mobile Number, Date of Birth, Password, Confirm Password.
  - Add labels and placeholders.

- **5.1.2. Implement Form Validation (Completed Percentage: 0%)**
  - Use Formik and Yup for form state and validation.
  - Validate required fields, password strength, and mobile number format.

- **5.1.3. Style Form Components (Completed Percentage: 0%)**
  - Apply consistent styling to input fields and buttons.
  - Add visual feedback for validation (error messages, success indicators).

#### **5.2. LoginForm Component (Completed Percentage: 0%)**

- **5.2.1. Design Login Form Layout (Completed Percentage: 0%)**
  - Include fields: Mobile Number, Password.
  - Add "Forgot Password" link.

- **5.2.2. Implement Biometric Authentication Placeholder (Completed Percentage: 0%)**
  - Design UI elements for fingerprint or facial recognition login.
  - Note: Actual biometric functionality may not be implemented in the demo.

#### **5.3. OTPVerification Component (Completed Percentage: 0%)**

- **5.3.1. Design OTP Input Layout (Completed Percentage: 0%)**
  - Create input fields for OTP digits.
  - Implement auto-focus and move to the next field on input.

- **5.3.2. Implement Countdown Timer and Resend Button (Completed Percentage: 0%)**
  - Display a timer for OTP expiration.
  - Add a "Resend OTP" button that activates after a delay.

- **5.3.3. Provide Visual Feedback (Completed Percentage: 0%)**
  - Show success messages or errors on OTP submission.
  - Animate transitions between steps.

### **6. MainDashboard Component (Completed Percentage: 0%)**

- **6.1. Design Dashboard Layout (Completed Percentage: 0%)**
  - Structure the dashboard to include RewardOverview, ShopList/MapView, and navigation.

- **6.2. Implement RewardOverview Component (Completed Percentage: 0%)**

  - **6.2.1. Design RewardOverview UI (Completed Percentage: 0%)**
    - Create progress bars or graphical representations of rewards.
    - Display rewards won and rewards left.

  - **6.2.2. Add Interactivity (Completed Percentage: 0%)**
    - Make elements clickable if they lead to more detailed views.

- **6.3. Develop ShopList Component (Completed Percentage: 0%)**

  - **6.3.1. Create ShopCard Component (Completed Percentage: 0%)**
    - Design shop cards with logo, name, category, and "View Offers" button.

  - **6.3.2. Implement List or Grid View (Completed Percentage: 0%)**
    - Arrange ShopCard components in a responsive layout.

- **6.4. Integrate MapView Component (Completed Percentage: 0%)**

  - **6.4.1. Use Static Map Image (Completed Percentage: 0%)**
    - Include a static map with shop locations marked.

  - **6.4.2. Implement Hotspots (Completed Percentage: 0%)**
    - Make shop location markers interactive.

- **6.5. Add FooterNavigation Component (Completed Percentage: 0%)**

  - **6.5.1. Design Navigation Icons (Completed Percentage: 0%)**
    - Create icons for Home, Offers, Favorites, Profile.

  - **6.5.2. Implement Navigation Functionality (Completed Percentage: 0%)**
    - Use React Router to navigate between pages.

### **7. Offers Components (Completed Percentage: 0%)**

- **7.1. Develop OfferList Component (Completed Percentage: 0%)**

  - **7.1.1. Create OfferCard Component (Completed Percentage: 0%)**
    - Design offer cards with image, title, description, and "Redeem Offer" button.

  - **7.1.2. Arrange Offers in Grid or List (Completed Percentage: 0%)**
    - Implement a responsive layout for offers display.

- **7.2. Implement BirthdayGifts Component (Completed Percentage: 0%)**

  - **7.2.1. Design Birthday Offers Section (Completed Percentage: 0%)**
    - Highlight birthday offers with special styling or animations.

  - **7.2.2. Add Countdown Timer (Completed Percentage: 0%)**
    - Show time remaining to avail of birthday offers.

### **8. Profile Components (Completed Percentage: 0%)**

- **8.1. Create ProfileHeader Component (Completed Percentage: 0%)**

  - **8.1.1. Display User Avatar and Name (Completed Percentage: 0%)**
    - Include an edit button for changing the profile picture.

- **8.2. Build ProfileDetails Component (Completed Percentage: 0%)**

  - **8.2.1. Show Editable Fields (Completed Percentage: 0%)**
    - Name, Mobile Number, Date of Birth.

  - **8.2.2. Implement Edit Functionality (Completed Percentage: 0%)**
    - Allow inline editing of profile details.

- **8.3. Implement AccountActions Component (Completed Percentage: 0%)**

  - **8.3.1. Add Change Password Button (Completed Percentage: 0%)**
  - **8.3.2. Add Logout Button (Completed Percentage: 0%)**

- **8.4. Include SettingsLinks Component (Completed Percentage: 0%)**

  - **8.4.1. Link to Language Settings (Completed Percentage: 0%)**
  - **8.4.2. Link to Notification Preferences (Completed Percentage: 0%)**
  - **8.4.3. Link to Privacy Settings (Completed Percentage: 0%)**

### **9. Notifications Components (Completed Percentage: 0%)**

- **9.1. Create NotificationsHeader Component (Completed Percentage: 0%)**

  - **9.1.1. Add Title and Mark All as Read Option (Completed Percentage: 0%)**

- **9.2. Build NotificationsList Component (Completed Percentage: 0%)**

  - **9.2.1. Develop NotificationItem Component (Completed Percentage: 0%)**
    - Include icon, title, description, timestamp, and read/unread indicator.

### **10. Search Components (Completed Percentage: 0%)**

- **10.1. Implement SearchBar Component (Completed Percentage: 0%)**

  - **10.1.1. Design Input Field with Search Icon (Completed Percentage: 0%)**

- **10.2. Develop SearchResults Component (Completed Percentage: 0%)**

  - **10.2.1. Create Tabs for "Shops" and "Offers" (Completed Percentage: 0%)**
  - **10.2.2. Build ResultItem Component (Completed Percentage: 0%)**
    - Display shop or offer details.

### **11. Favorites Components (Completed Percentage: 0%)**

- **11.1. Build FavoritesList Component (Completed Percentage: 0%)**

  - **11.1.1. Develop FavoriteItem Component (Completed Percentage: 0%)**
    - Show shop or offer details with the option to remove from favorites.

- **11.2. Design EmptyState Component (Completed Percentage: 0%)**

  - **11.2.1. Include Illustration and Message (Completed Percentage: 0%)**

### **12. Help & Support Components (Completed Percentage: 0%)**

- **12.1. Create HelpTopics Component (Completed Percentage: 0%)**

  - **12.1.1. List Common Help Topics or FAQs (Completed Percentage: 0%)**

- **12.2. Implement ContactSupport Component (Completed Percentage: 0%)**

  - **12.2.1. Provide Options to Contact Support (Completed Percentage: 0%)**
    - Email, Phone, Chat.

- **12.3. Develop SupportForm Component (Completed Percentage: 0%)**

  - **12.3.1. Include Fields: Subject, Message, Attachment (Completed Percentage: 0%)**
  - **12.3.2. Implement Form Submission (Completed Percentage: 0%)**

### **13. Settings Components (Completed Percentage: 0%)**

- **13.1. Build SettingsMenu Component (Completed Percentage: 0%)**

  - **13.1.1. Organize Settings Options with Icons (Completed Percentage: 0%)**

- **13.2. Implement LanguageSettings Component (Completed Percentage: 0%)**

  - **13.2.1. Allow Users to Change App Language (Completed Percentage: 0%)**

- **13.3. Develop NotificationPreferences Component (Completed Percentage: 0%)**

  - **13.3.1. Toggle Notifications On/Off (Completed Percentage: 0%)**

- **13.4. Create PrivacySettings Component (Completed Percentage: 0%)**

  - **13.4.1. Provide Privacy Options (Completed Percentage: 0%)**

- **13.5. Build ReportProblem Component (Completed Percentage: 0%)**

  - **13.5.1. Form with Comment and Attachment Upload (Completed Percentage: 0%)**

- **13.6. Implement TermsAndPrivacy Component (Completed Percentage: 0%)**

  - **13.6.1. Display Terms and Conditions Text (Completed Percentage: 0%)**

### **14. Localization Implementation (Completed Percentage: 0%)**

- **14.1. Set Up react-i18next Configuration (Completed Percentage: 0%)**

  - **14.1.1. Initialize `i18n.js` with Language Resources (Completed Percentage: 0%)**

- **14.2. Wrap App with `I18nextProvider` (Completed Percentage: 0%)**

- **14.3. Translate Text in Components (Completed Percentage: 0%)**

  - **14.3.1. Replace Static Text with Translation Function (Completed Percentage: 0%)**

- **14.4. Ensure RTL Support for Arabic (Completed Percentage: 0%)**

  - **14.4.1. Apply RTL Styling When Arabic is Selected (Completed Percentage: 0%)**

### **15. State Management (Completed Percentage: 0%)**

- **15.1. Create Authentication Context (Completed Percentage: 0%)**

  - **15.1.1. Manage Authentication State (Completed Percentage: 0%)**

- **15.2. Implement Language Context (Completed Percentage: 0%)**

  - **15.2.1. Manage Current Language Selection (Completed Percentage: 0%)**

- **15.3. Set Up Mock Data (Completed Percentage: 0%)**

  - **15.3.1. Use Static JSON Files for Data Simulation (Completed Percentage: 0%)**

### **16. Routing Setup (Completed Percentage: 0%)**

- **16.1. Define Routes Using React Router (Completed Percentage: 0%)**

  - **16.1.1. Set Up Public and Private Routes (Completed Percentage: 0%)**

- **16.2. Implement Protected Route Component (Completed Percentage: 0%)**

  - **16.2.1. Redirect Unauthenticated Users to Login (Completed Percentage: 0%)**

### **17. Styling and Theming (Completed Percentage: 0%)**

- **17.1. Establish a Color Palette (Completed Percentage: 0%)**

  - **17.1.1. Define Variables for Primary, Secondary, Background Colors (Completed Percentage: 0%)**

- **17.2. Apply Consistent Styling Across Components (Completed Percentage: 0%)**

  - **17.2.1. Use CSS Modules or Styled Components (Completed Percentage: 0%)**

- **17.3. Ensure Responsive Design (Completed Percentage: 0%)**

  - **17.3.1. Use Media Queries for Different Screen Sizes (Completed Percentage: 0%)**

- **17.4. Implement Accessibility Best Practices (Completed Percentage: 0%)**

  - **17.4.1. Use Semantic HTML Elements (Completed Percentage: 0%)**

  - **17.4.2. Ensure Sufficient Color Contrast (Completed Percentage: 0%)**

  - **17.4.3. Add ARIA Labels Where Appropriate (Completed Percentage: 0%)**

## **Shop App Tasks**

### **1. Project Setup (Completed Percentage: 0%)**

- **1.1. Initialize React Application (Completed Percentage: 0%)**

  - Similar setup as the Consumer App; it can be within the same project or a separate one.

- **1.2. Install Dependencies (Completed Percentage: 0%)**

  - Install required libraries as per the Shop App needs.

### **2. Common Components (Completed Percentage: 0%)**

- **2.1. Header Component (Completed Percentage: 0%)**

  - Design the header with shop logo, shop name, notifications icon, and profile menu.

- **2.2. Footer Component (Completed Percentage: 0%)**

  - Include navigation links to Home, Offers, Customers, Settings.

- **2.3. Modal, Button, Input Components (Completed Percentage: 0%)**

  - Reuse or customize common components from the Consumer App.

### **3. ShopRegistration Component (Completed Percentage: 0%)**

- **3.1. Design RegistrationForm Component (Completed Percentage: 0%)**

  - Include fields: Shop Name, Owner Name, Email, Password, Confirm Password, CR Number, Location.

- **3.2. Implement UploadLogo Component (Completed Percentage: 0%)**

  - Enable image upload with preview and cropping.

- **3.3. Add TermsAgreement Checkbox (Completed Percentage: 0%)**

  - Ensure the form cannot be submitted until the checkbox is checked.

- **3.4. Validate Form Inputs (Completed Percentage: 0%)**

  - Use Formik/Yup for validation.

### **4. Authentication Components (Completed Percentage: 0%)**

#### **4.1. LoginForm Component (Completed Percentage: 0%)**

- **4.1.1. Design Login Form Layout (Completed Percentage: 0%)**

- **4.1.2. Add "Forgot Password" Link (Completed Percentage: 0%)**

#### **4.2. ForgotPassword Component (Completed Percentage: 0%)**

- **4.2.1. Include Email Field and "Send Reset Link" Button (Completed Percentage: 0%)**

#### **4.3. ResetPassword Component (Completed Percentage: 0%)**

- **4.3.1. Fields for New Password and Confirm Password (Completed Percentage: 0%)**

### **5. Dashboard Components (Completed Percentage: 0%)**

- **5.1. Build DashboardHeader Component (Completed Percentage: 0%)**

- **5.2. Develop DashboardStats Component (Completed Percentage: 0%)**

  - **5.2.1. Create StatisticsCards for Key Metrics (Completed Percentage: 0%)**

- **5.3. Implement QuickActions Component (Completed Percentage: 0%)**

  - **5.3.1. Add Buttons for Common Actions (Completed Percentage: 0%)**

- **5.4. Create RecentActivity Component (Completed Percentage: 0%)**

  - **5.4.1. List Recent Customer Interactions (Completed Percentage: 0%)**

### **6. Reward & Scan System Components (Completed Percentage: 0%)**

- **6.1. Develop ScanBarcodeScreen Component (Completed Percentage: 0%)**

  - **6.1.1. Design Layout and Instructions (Completed Percentage: 0%)**

  - **6.1.2. Include BarcodeScannerPlaceholder (Completed Percentage: 0%)**

- **6.2. Implement ScanResult Component (Completed Percentage: 0%)**

  - **6.2.1. Display Success Message and Customer Info (Completed Percentage: 0%)**

### **7. Offer Management Components (Completed Percentage: 0%)**

- **7.1. Build OffersList Component (Completed Percentage: 0%)**

  - **7.1.1. Develop OfferItem Component (Completed Percentage: 0%)**

- **7.2. Create AddOffer Component (Completed Percentage: 0%)**

  - **7.2.1. Design OfferForm Component (Completed Percentage: 0%)**

  - **7.2.2. Implement PreviewOffer Component (Completed Percentage: 0%)**

### **8. Customer Management Components (Completed Percentage: 0%)**

- **8.1. Build CustomerList Component (Completed Percentage: 0%)**

  - **8.1.1. Develop CustomerItem Component (Completed Percentage: 0%)**

- **8.2. Create CustomerProfile Component (Completed Percentage: 0%)**

  - **8.2.1. Display CustomerDetails (Completed Percentage: 0%)**

  - **8.2.2. Show RewardHistory (Completed Percentage: 0%)**

  - **8.2.3. Implement Notes Section (Completed Percentage: 0%)**

### **9. Settings Components (Completed Percentage: 0%)**

- **9.1. Develop BusinessProfile Component (Completed Percentage: 0%)**

  - **9.1.1. Allow Editing of Shop Details (Completed Percentage: 0%)**

- **9.2. Implement RewardSettings Component (Completed Percentage: 0%)**

  - **9.2.1. Configure Reward System Options (Completed Percentage: 0%)**

- **9.3. Build NotificationSettings Component (Completed Percentage: 0%)**

  - **9.3.1. Set Notification Preferences (Completed Percentage: 0%)**

- **9.4. Create AccountSettings Component (Completed Percentage: 0%)**

  - **9.4.1. Manage Account Details and Staff Accounts (Completed Percentage: 0%)**

- **9.5. Include HelpAndSupport Component (Completed Percentage: 0%)**

  - **9.5.1. Access FAQs and Contact Support (Completed Percentage: 0%)**

### **10. Localization Implementation (Completed Percentage: 0%)**

- **10.1. Set Up Localization for Shop App (Completed Percentage: 0%)**

  - **10.1.1. Use react-i18next for Language Support (Completed Percentage: 0%)**

### **11. State Management (Completed Percentage: 0%)**

- **11.1. Create Authentication Context (Completed Percentage: 0%)**

- **11.2. Set Up Mock Data for Shop App (Completed Percentage: 0%)**

### **12. Routing Setup (Completed Percentage: 0%)**

- **12.1. Define Routes Using React Router (Completed Percentage: 0%)**

- **12.2. Implement Protected Route Component (Completed Percentage: 0%)**

### **13. Styling and Theming (Completed Percentage: 0%)**

- **13.1. Apply Consistent Styling Across Shop App Components (Completed Percentage: 0%)**

- **13.2. Ensure Responsive Design (Completed Percentage: 0%)**

- **13.3. Implement Accessibility Best Practices (Completed Percentage: 0%)**

## **Additional Tasks**

### **1. Testing (Completed Percentage: 0%)**

- **1.1. Perform Component-Level Testing (Completed Percentage: 0%)**

- **1.2. Conduct Integration Testing Between Components (Completed Percentage: 0%)**

- **1.3. Test Responsiveness Across Devices and Browsers (Completed Percentage: 0%)**

### **2. Deployment Setup (Completed Percentage: 0%)**

- **2.1. Configure Build Scripts for Production (Completed Percentage: 0%)**

- **2.2. Set Up Deployment to Hosting Service (e.g., Netlify, Vercel) (Completed Percentage: 0%)**

### **3. Documentation (Completed Percentage: 0%)**

- **3.1. Document Components and Their Props (Completed Percentage: 0%)**

- **3.2. Write Instructions for Running the App Locally (Completed Percentage: 0%)**