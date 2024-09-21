# Structure Requirements

## Consumer App Components

### 2.7. Profile (completed (100%))

- Description: User profile and account settings. (completed (100%))
- Components: (completed (100%))
  - ProfileHeader (completed (100%))
  - ProfileDetails (completed (100%))
  - AccountActions (completed (100%))
  - SettingsLinks (completed (100%))

### 2.8. Notifications (completed (100%))

- Description: Displays app notifications like new offers or rewards. (completed (100%))
- Components: (completed (100%))
  - NotificationsList (completed (100%))
    - A list displaying individual notifications. (completed (100%))
    - NotificationItem (completed (100%))
      - Icon representing notification type. (completed (100%))
      - Title and brief description. (completed (100%))
      - Timestamp. (completed (100%))
      - Indicator for unread/read status. (completed (100%))
  - NotificationsHeader (completed (100%))
    - Title ("Notifications") and an option to mark all as read. (completed (100%))

### 2.9. Search (completed (100%))

- Description: Allows users to search for shops or offers. (completed (100%))
- Components: (completed (100%))
  - SearchBar (completed (100%))
  - SearchResults (completed (100%))
    - Tabs for Shops and Offers (completed (100%))
    - ResultItem for each shop or offer (completed (100%))

### 2.10. Favorites (completed (100%))

- Description: Users can view and manage their favorite shops or offers. (completed (100%))
- Components: (completed (100%))
  - FavoritesList (completed (100%))
  - EmptyState (completed (100%))

### 2.11. Help & Support (completed (100%))

- Description: Provides help resources and contact options. (completed (100%))
- Components: (completed (100%))
  - HelpTopics (completed (100%))
  - ContactSupport (completed (100%))
  - SupportForm (completed (100%))

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
    - Notifications (completed (100%))
    - Search (completed (100%))
    - Favorites (completed (100%))
    - HelpAndSupport (completed (100%))
    - Settings (completed (100%))

## Shop App Components (completed (40%))

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

### 3.3. Dashboard (completed (0%))

- Description: Main interface for shop owners to manage their account.
- Components:
  - DashboardHeader
  - DashboardStats
  - QuickActions
  - RecentActivity

### 3.4. Reward & Scan System (completed (0%))

- Description: Allows shop owners to scan customer codes and manage rewards.
- Components:
  - ScanBarcodeScreen
  - ScanResult
  - RewardConfiguration

### 3.5. Offer Management (completed (0%))

- Description: Interface for creating and managing offers.
- Components:
  - OffersList
  - AddOffer
  - EditOffer

### 3.6. Customer Management (completed (0%))

- Description: Tools for managing customer data and interactions.
- Components:
  - CustomerList
  - CustomerProfile
  - CustomerInteractionHistory

### 3.7. Settings (completed (0%))

- Description: Various settings for the shop account.
- Components:
  - BusinessProfile
  - RewardSettings
  - NotificationSettings
  - AccountSettings

### 3.8. Help & Support (completed (0%))

- Description: Resources and contact options for shop owners.
- Components:
  - FAQSection
  - ContactSupport
  - ReportIssue

## Component Hierarchy for Shop App (completed (40%))

- ShopApp
  - Router
    - ShopRegistration (completed (100%))
    - Authentication (completed (100%))
    - Dashboard
    - RewardAndScanSystem
    - OfferManagement
    - CustomerManagement
    - Settings
    - HelpAndSupport
