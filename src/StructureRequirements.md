# Structure Requirements

## Consumer App Components

### 2.7. Profile (completed (100%))

- Description: User profile and account settings. (completed (100%))
- Components: (completed (100%))
  - ProfileHeader (completed (100%))
    - Displays the user's name, avatar (profile picture), and an edit button. (completed (100%))
  - ProfileDetails (completed (100%))
    - Fields Displayed: (completed (100%))
      - Name (completed (100%))
      - Mobile Number (completed (100%))
      - Date of Birth (completed (100%))
    - Edit option for each field. (completed (100%))
  - AccountActions (completed (100%))
    - Buttons: (completed (100%))
      - Change Password (completed (100%))
      - Logout (completed (100%))
  - SettingsLinks (completed (100%))
    - Links to other settings such as: (completed (100%))
      - Language Settings (completed (100%))
      - Notification Preferences (completed (100%))
      - Privacy Settings (completed (100%))

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
    - Input field with a search icon. (completed (0%))
    - Placeholder text (e.g., "Search shops or offers"). (completed (0%))
  - SearchResults (completed (0%))
    - Tabs to switch between "Shops" and "Offers". (completed (0%))
    - ResultItem (completed (0%))
      - For shops: (completed (0%))
        - Shop logo. (completed (0%))
        - Shop name. (completed (0%))
        - Short description or category. (completed (0%))
      - For offers: (completed (0%))
        - Offer image. (completed (0%))
        - Offer title. (completed (0%))
        - Shop name associated with the offer. (completed (0%))
    - Message for no results found. (completed (0%))

### 2.10. Favorites (completed (0%))

- Description: Users can view and manage their favorite shops or offers. (completed (0%))
- Components: (completed (0%))
  - FavoritesList (completed (0%))
    - FavoriteItem (completed (0%))
      - Displays either a shop or an offer. (completed (0%))
      - Remove from favorites option. (completed (0%))
  - EmptyState (completed (0%))
    - Illustration and message when no favorites are added yet. (completed (0%))

### 2.11. Help & Support (completed (0%))

- Description: Provides help resources and contact options. (completed (0%))
- Components: (completed (0%))
  - HelpTopics (completed (0%))
    - List of common help topics or FAQs. (completed (0%))
  - ContactSupport (completed (0%))
    - Options to contact support via email or phone. (completed (0%))
    - SupportForm (completed (0%))
      - Fields: (completed (0%))
        - Subject (completed (0%))
        - Message (completed (0%))
        - Attachment (optional) (completed (0%))
      - Submit button. (completed (0%))


## **Component Hierarchy for Consumer App** (completed (_ %))

- **App** (completed (_ %))
  - **Router** (completed (_ %))
    - **SplashScreen** (completed (_ %))
    - **LanguageSelection** (completed (_ %))
    - **Onboarding** (completed (_ %))
    - **Authentication** (completed (_ %))
      - **SignUpForm** (completed (_ %))
      - **LoginForm** (completed (_ %))
      - **OTPVerification** (completed (_ %))
    - **MainDashboard** (completed (_ %))
      - **Header** (completed (_ %))
        - **Logo** (completed (_ %))
        - **SearchIcon** (completed (_ %))
        - **NotificationsIcon** (completed (_ %))
        - **ProfileIcon** (completed (_ %))
      - **RewardOverview** (completed (_ %))
      - **ShopList** or **MapView** (completed (_ %))
        - **ShopCard** (completed (_ %))
      - **FooterNavigation** (completed (_ %))
        - **Home** (completed (_ %))
        - **Offers** (completed (_ %))
        - **Favorites** (completed (_ %))
        - **Profile** (completed (_ %))
    - **Offers** (completed (_ %))
      - **OfferList** (completed (_ %))
        - **OfferCard** (completed (_ %))
    - **Profile** (completed (_ %))
      - **ProfileHeader** (completed (_ %))
      - **ProfileDetails** (completed (_ %))
      - **AccountActions** (completed (_ %))
      - **SettingsLinks** (completed (_ %))
    - **Notifications** (completed (_ %))
      - **NotificationsList** (completed (_ %))
        - **NotificationItem** (completed (_ %))
    - **Search** (completed (_ %))
      - **SearchBar** (completed (_ %))
      - **SearchResults** (completed (_ %))
        - **ResultItem** (completed (_ %))
    - **HelpAndSupport** (completed (_ %))
      - **HelpTopics** (completed (_ %))
      - **ContactSupport** (completed (_ %))
        - **SupportForm** (completed (_ %))
    - **Settings** (completed (_ %))
      - **LanguageSettings** (completed (_ %))
      - **NotificationPreferences** (completed (_ %))
      - **PrivacySettings** (completed (_ %))
      - **ReportProblem** (completed (_ %))

---

## **Shop App Components** (completed (_ %))

### **1. ShopRegistration** (completed (_ %))

- **Description:** Shop owners register their shop on the platform. (completed (_ %))
- **Components:** (completed (_ %))
  - **RegistrationForm** (completed (_ %))
    - **Fields:** (completed (_ %))
      - Shop Name (completed (_ %))
      - Owner Name (completed (_ %))
      - Email (completed (_ %))
      - Password (completed (_ %))
      - Confirm Password (completed (_ %))
      - CR Number (Commercial Registration Number) (completed (_ %))
      - Location (with map picker) (completed (_ %))
    - **Actions:** (completed (_ %))
      - **UploadLogo** (completed (_ %))
        - Image upload button with preview and cropping functionality. (completed (_ %))
      - **TermsAgreement** (completed (_ %))
        - Checkbox to agree to terms and conditions. (completed (_ %))
      - **SubmitButton** (completed (_ %))
        - Disabled until all required fields are valid. (completed (_ %))

---

### **2. Authentication** (completed (_ %))

- **Components:** (completed (_ %))
  - **LoginForm** (completed (_ %))
    - **Fields:** (completed (_ %))
      - Email (completed (_ %))
      - Password (completed (_ %))
    - **Actions:** (completed (_ %))
      - **LoginButton** (completed (_ %))
      - **ForgotPasswordLink** (completed (_ %))
  - **ForgotPassword** (completed (_ %))
    - **Fields:** (completed (_ %))
      - Email (completed (_ %))
    - **Actions:** (completed (_ %))
      - **SendResetLinkButton** (completed (_ %))
  - **ResetPassword** (completed (_ %))
    - **Fields:** (completed (_ %))
      - New Password (completed (_ %))
      - Confirm Password (completed (_ %))
    - **Actions:** (completed (_ %))
      - **ResetPasswordButton** (completed (_ %))
     
---

### **3. Dashboard** (completed (_ %))

- **Description:** Main interface for shop owners after logging in. (completed (_ %))
- **Components:** (completed (_ %))
  - **DashboardHeader** (completed (_ %))
    - **ShopLogo** (completed (_ %))
    - **ShopName** (completed (_ %))
    - **NotificationsIcon** (completed (_ %))
    - **ProfileMenu** (completed (_ %))
      - Dropdown with options (Profile, Settings, Logout) (completed (_ %))
  - **DashboardStats** (completed (_ %))
    - **StatisticsCards** (completed (_ %))
      - Total Customers (completed (_ %))
      - Rewards Issued (completed (_ %))
      - Active Offers (completed (_ %))
      - Recent Activity (completed (_ %))
  - **QuickActions** (completed (_ %))
    - **AddOfferButton** (completed (_ %))
    - **ScanBarcodeButton** (completed (_ %))
    - **CustomizeRewardsButton** (completed (_ %))
  - **RecentActivity** (completed (_ %))
    - List of recent customer interactions or reward redemptions. (completed (_ %))
  - **Footer** (completed (_ %))
    - **NavigationLinks** (completed (_ %))
      - Home (completed (_ %))
      - Offers (completed (_ %))
      - Customers (completed (_ %))
      - Settings (completed (_ %))

---

### **4. Reward & Scan System** (completed (_ %))

- **Components:** (completed (_ %))
  - **ScanBarcodeScreen** (completed (_ %))
    - Instructions for scanning. (completed (_ %))
    - **BarcodeScannerPlaceholder** (completed (_ %))
      - Static image or simulation since real scanning isn't implemented. (completed (_ %))
    - **ManualEntryOption** (completed (_ %))
      - Option to enter customer code manually. (completed (_ %))
  - **ScanResult** (completed (_ %))
    - **SuccessMessage** (completed (_ %))
      - Confirmation of successful stamp addition. (completed (_ %))
    - **CustomerInfo** (completed (_ %))
      - Name, total stamps, rewards earned. (completed (_ %))
    - **Actions:** (completed (_ %))
      - **DoneButton** (completed (_ %))
      - **ViewCustomerProfileButton** (completed (_ %))

---

### **5. Offer Management** (completed (_ %))

- **Components:** (completed (_ %))
  - **OffersList** (completed (_ %))
    - **OfferItem** (completed (_ %))
      - Offer image or banner. (completed (_ %))
      - Title and brief description. (completed (_ %))
      - Status (Active/Inactive) (completed (_ %))
      - **Actions:** (completed (_ %))
        - Edit (completed (_ %))
        - Deactivate/Activate (completed (_ %))
        - Delete (completed (_ %))
  - **AddOffer** (completed (_ %))
    - **OfferForm** (completed (_ %))
      - **Fields:** (completed (_ %))
        - Offer Title (completed (_ %))
        - Description (completed (_ %))
        - Upload Images (completed (_ %))
        - Validity Dates (completed (_ %))
        - Terms and Conditions (completed (_ %))
      - **PreviewOffer** (completed (_ %))
        - Shows how the offer will appear to customers. (completed (_ %))
      - **Actions:** (completed (_ %))
        - Save Draft (completed (_ %))
        - Publish Offer (completed (_ %))

---

### **6. Customer Management** (completed (_ %))

- **Components:** (completed (_ %))
  - **CustomerList** (completed (_ %))
    - **CustomerItem** (completed (_ %))
      - Customer Name (completed (_ %))
      - Total Stamps (completed (_ %))
      - Last Visit (completed (_ %))
      - **Actions:** (completed (_ %))
        - View Profile (completed (_ %))
  - **CustomerProfile** (completed (_ %))
    - **CustomerDetails** (completed (_ %))
      - Name, Contact Information, Birthday (completed (_ %))
    - **RewardHistory** (completed (_ %))
      - List of rewards earned and redeemed. (completed (_ %))
    - **Notes** (completed (_ %))
      - Shop owner can add notes about the customer. (completed (_ %))

---

### **7. Settings** (completed (_ %))

- **Components:** (completed (_ %))
  - **BusinessProfile** (completed (_ %))
    - Edit shop details like name, logo, contact info. (completed (_ %))
  - **RewardSettings** (completed (_ %))
    - Configure reward system: (completed (_ %))
      - Number of stamps for reward (completed (_ %))
      - Types of rewards (completed (_ %))
      - Expiration policies (completed (_ %))
  - **NotificationSettings** (completed (_ %))
    - Set preferences for receiving notifications. (completed (_ %))
  - **AccountSettings** (completed (_ %))
    - Change email, password. (completed (_ %))
    - Manage staff accounts. (completed (_ %))
  - **HelpAndSupport** (completed (_ %))
    - Access to FAQs, contact support. (completed (_ %))
    - **SupportForm** (completed (_ %))

---

## **Component Hierarchy for Shop App** (completed (_ %))

- **App** (completed (_ %))
  - **Router** (completed (_ %))
    - **ShopRegistration** (completed (_ %))
    - **Authentication** (completed (_ %))
      - **LoginForm** (completed (_ %))
      - **ForgotPassword** (completed (_ %))
      - **ResetPassword** (completed (_ %))
    - **Dashboard** (completed (_ %))
      - **DashboardHeader** (completed (_ %))
      - **DashboardStats** (completed (_ %))
      - **QuickActions** (completed (_ %))
      - **RecentActivity** (completed (_ %))
      - **Footer** (completed (_ %))
    - **ScanBarcode** (completed (_ %))
      - **ScanBarcodeScreen** (completed (_ %))
      - **ScanResult** (completed (_ %))
    - **Offers** (completed (_ %))
      - **OffersList** (completed (_ %))
        - **OfferItem** (completed (_ %))
      - **AddOffer** (completed (_ %))
        - **OfferForm** (completed (_ %))
        - **PreviewOffer** (completed (_ %))
    - **Customers** (completed (_ %))
      - **CustomerList** (completed (_ %))
        - **CustomerItem** (completed (_ %))
      - **CustomerProfile** (completed (_ %))
        - **CustomerDetails** (completed (_ %))
        - **RewardHistory** (completed (_ %))
        - **Notes** (completed (_ %))
    - **Settings** (completed (_ %))
      - **BusinessProfile** (completed (_ %))
      - **RewardSettings** (completed (_ %))
      - **NotificationSettings** (completed (_ %))
      - **AccountSettings** (completed (_ %))
      - **HelpAndSupport** (completed (_ %))

---

## **Detailed UI Structure of Key Components** (completed (_ %))

### **Consumer App** (completed (_ %))

#### **ShopCard Component** (completed (_ %))

- **Structure:** (completed (_ %))

  ```jsx
  function ShopCard({ shop }) {
    return (
      <div className="shop-card">
        <img src={shop.logo} alt={`${shop.name} Logo`} className="shop-logo" />
        <div className="shop-info">
          <h3 className="shop-name">{shop.name}</h3>
          <p className="shop-category">{shop.category}</p>
          <button className="view-offers-button">View Offers</button>
        </div>
      </div>
    );
  }
  ```

- **UI Elements:** (completed (_ %))
  - Shop Logo (Image) (completed (_ %))
  - Shop Name (Text) (completed (_ %))
  - Shop Category or Description (Text) (completed (_ %))
  - View Offers Button (Button) (completed (_ %))

---

#### **OfferCard Component** (completed (_ %))

- **Structure:** (completed (_ %))

  ```jsx
  function OfferCard({ offer }) {
    return (
      <div className="offer-card">
        <img src={offer.image} alt={offer.title} className="offer-image" />
        <div className="offer-details">
          <h4 className="offer-title">{offer.title}</h4>
          <p className="offer-description">{offer.description}</p>
          <div className="offer-validity">Valid until: {offer.validityEndDate}</div>
          <button className="redeem-offer-button">Redeem Offer</button>
        </div>
      </div>
    );
  }
  ```

- **UI Elements:** (completed (_ %))
  - Offer Image (Image) (completed (_ %))
  - Offer Title (Text) (completed (_ %))
  - Offer Description (Text) (completed (_ %))
  - Offer Validity (Text) (completed (_ %))
  - Redeem Offer Button (Button) (completed (_ %))

---

#### **RewardOverview Component** (completed (_ %))

- **Structure:** (completed (_ %))

  ```jsx
  function RewardOverview({ rewards }) {
    return (
      <div className="reward-overview">
        <div class

Name="rewards-won">
          <span className="reward-count">{rewards.won}</span>
          <span className="reward-label">Rewards Won</span>
        </div>
        <div className="rewards-left">
          <span className="reward-count">{rewards.left}</span>
          <span className="reward-label">Rewards Left</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${rewards.progress}%` }}></div>
        </div>
      </div>
    );
  }
  ```

- **UI Elements:** (completed (_ %))
  - Rewards Won (Numeric Display) (completed (_ %))
  - Rewards Left (Numeric Display) (completed (_ %))
  - Progress Bar (Visual Indicator) (completed (_ %))

---

### **Shop App** (completed (_ %))

#### **DashboardStats Component** (completed (_ %))

- **Structure:** (completed (_ %))

  ```jsx
  function DashboardStats({ stats }) {
    return (
      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-number">{stats.totalCustomers}</div>
          <div className="stat-label">Total Customers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.rewardsIssued}</div>
          <div className="stat-label">Rewards Issued</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.activeOffers}</div>
          <div className="stat-label">Active Offers</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.recentActivity}</div>
          <div className="stat-label">Recent Activity</div>
        </div>
      </div>
    );
  }
  ```

- **UI Elements:** (completed (_ %))
  - Stat Cards (Containers) (completed (_ %))
    - Stat Number (Large Text) (completed (_ %))
    - Stat Label (Text) (completed (_ %))

---

#### **OfferForm Component** (completed (_ %))

- **Structure:** (completed (_ %))

  ```jsx
  function OfferForm({ onSubmit }) {
    return (
      <form className="offer-form" onSubmit={onSubmit}>
        <label>
          Offer Title
          <input type="text" name="title" required />
        </label>
        <label>
          Description
          <textarea name="description" required></textarea>
        </label>
        <label>
          Upload Images
          <input type="file" name="images" accept="image/*" multiple />
        </label>
        <label>
          Validity Dates
          <input type="date" name="startDate" required /> to
          <input type="date" name="endDate" required />
        </label>
        <label>
          Terms and Conditions
          <textarea name="terms" required></textarea>
        </label>
        <button type="submit" className="save-button">Save</button>
      </form>
    );
  }
  ```

- **UI Elements:** (completed (_ %))
  - Input Fields (Text, Date) (completed (_ %))
  - Textareas (completed (_ %))
  - File Upload Input (completed (_ %))
  - Submit Button (completed (_ %))

---

#### **CustomerItem Component** (completed (_ %))

- **Structure:** (completed (_ %))

  ```jsx
  function CustomerItem({ customer }) {
    return (
      <div className="customer-item">
        <div className="customer-info">
          <h4 className="customer-name">{customer.name}</h4>
          <p className="customer-stamps">Stamps: {customer.stamps}</p>
          <p className="customer-last-visit">Last Visit: {customer.lastVisit}</p>
        </div>
        <button className="view-profile-button">View Profile</button>
      </div>
    );
  }
  ```

- **UI Elements:** (completed (_ %))
  - Customer Name (Text) (completed (_ %))
  - Customer Stamps (Text) (completed (_ %))
  - Last Visit Date (Text) (completed (_ %))
  - View Profile Button (Button) (completed (_ %))
