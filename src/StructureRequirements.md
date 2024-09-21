# Structure Requirements

## Consumer App Components

### 2.7. Profile (completed (100%))

- Description: User profile and account settings. (completed (100%))
- Components: (completed (100%))
  - ProfileHeader (completed (100%))
  - ProfileDetails (completed (100%))
  - AccountActions (completed (100%))
  - SettingsLinks (completed (100%))

### 2.8. Notifications (completed (0%))

- Description: Displays app notifications like new offers or rewards. (completed (0%))
- Components: (completed (0%))
  - NotificationsList (completed (0%))
    - A list displaying individual notifications. (completed (0%))
    - NotificationItem (completed (0%))
      - Icon representing notification type. (completed (0%))
      - Title and brief description. (completed (0%))
      - Timestamp. (completed (0%))
      - Indicator for unread/read status. (completed (0%))
  - NotificationsHeader (completed (0%))
    - Title ("Notifications") and an option to mark all as read. (completed (0%))

### 2.9. Search (completed (0%))

- Description: Allows users to search for shops or offers. (completed (0%))
- Components: (completed (0%))
  - SearchBar (completed (0%))
  - SearchResults (completed (0%))
    - Tabs for Shops and Offers (completed (0%))
    - ResultItem for each shop or offer (completed (0%))

### 2.10. Favorites (completed (0%))

- Description: Users can view and manage their favorite shops or offers. (completed (0%))
- Components: (completed (0%))
  - FavoritesList (completed (0%))
  - EmptyState (completed (0%))

### 2.11. Help & Support (completed (0%))

- Description: Provides help resources and contact options. (completed (0%))
- Components: (completed (0%))
  - HelpTopics (completed (0%))
  - ContactSupport (completed (0%))
  - SupportForm (completed (0%))

## Component Hierarchy for Consumer App (completed (100%))

- App (completed (100%))
  - Router (completed (100%))
    - SplashScreen (completed (100%))
    - LanguageSelection (completed (100%))
    - Onboarding (completed (100%))
    - Authentication (completed (100%))
    - MainDashboard (completed (100%))
    - Offers (completed (100%))
    - Profile (completed (100%))
    - Notifications (completed (0%))
    - Search (completed (0%))
    - Favorites (completed (0%))
    - HelpAndSupport (completed (0%))
    - Settings (completed (100%))

## Shop App Components (completed (100%))

### 3.1. ShopRegistration (completed (100%))

- Description: Allows shop owners to register their business. (completed (100%))
- Components: (completed (100%))
  - RegistrationForm (completed (100%))
    - Fields: Shop Name, Owner Name, Email, Password, Confirm Password, CR Number, Location (completed (100%))
  - UploadLogo (completed (100%))
  - TermsAgreement (completed (100%))

### 3.2. Authentication (completed (100%))

- Description: Handles shop owner login and password recovery. (completed (100%))
- Components: (completed (100%))
  - LoginForm (completed (100%))
  - ForgotPassword (completed (100%))
  - ResetPassword (completed (100%))

### 3.3. Dashboard (completed (100%))

- Description: Main interface for shop owners to manage their account. (completed (100%))
- Components: (completed (100%))
  - DashboardHeader (completed (100%))
  - DashboardStats (completed (100%))
  - QuickActions (completed (100%))
  - RecentActivity (completed (100%))

### 3.4. Reward & Scan System (completed (100%))

- Description: Allows shop owners to scan customer codes and manage rewards. (completed (100%))
- Components: (completed (100%))
  - ScanBarcodeScreen (completed (100%))
  - ScanResult (completed (100%))
  - RewardConfiguration (completed (100%))

### 3.5. Offer Management (completed (100%))

- Description: Interface for creating and managing offers. (completed (100%))
- Components: (completed (100%))
  - OffersList (completed (100%))
  - AddOffer (completed (100%))
  - EditOffer (completed (100%))

### 3.6. Customer Management (completed (100%))

- Description: Tools for managing customer data and interactions. (completed (100%))
- Components: (completed (100%))
  - CustomerList (completed (100%))
  - CustomerProfile (completed (100%))
  - CustomerInteractionHistory (completed (100%))

### 3.7. Settings (completed (100%))

- Description: Various settings for the shop account. (completed (100%))
- Components: (completed (100%))
  - BusinessProfile (completed (100%))
  - RewardSettings (completed (100%))
  - NotificationSettings (completed (100%))
  - AccountSettings (completed (100%))

### 3.8. Help & Support (completed (100%))

- Description: Resources and contact options for shop owners.
- Components:
  - FAQSection (completed (100%))
  - ContactSupport (completed (100%))
  - ReportIssue (completed (100%))

## Component Hierarchy for Shop App (completed (100%))

- ShopApp
  - Router
    - ShopRegistration (completed (100%))
    - Authentication (completed (100%))
    - Dashboard (completed (100%))
    - RewardAndScanSystem (completed (100%))
    - OfferManagement (completed (100%))
    - CustomerManagement (completed (100%))
    - Settings (completed (100%))
    - HelpAndSupport (completed (100%))
